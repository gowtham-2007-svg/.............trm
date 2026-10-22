const fs = require('fs');
const path = require('path');

// Optional Supabase integration for persistent cloud database
let supabase = null;
try {
    const { createClient } = require('@supabase/supabase-js');
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_KEY;

    if (supabaseUrl && supabaseKey && !supabaseUrl.includes('YOUR_SUPABASE') && !supabaseKey.includes('YOUR_SUPABASE')) {
        supabase = createClient(supabaseUrl, supabaseKey);
    }
} catch (e) {
    console.warn('[REVIEWS API] Optional Supabase client not loaded:', e.message);
}

const DEFAULT_REVIEWS = [];

// Load reviews with Supabase priority and local fallback
async function fetchAllReviews() {
    // 1. Try Supabase cloud database
    if (supabase) {
        try {
            const { data, error } = await supabase
                .from('website_reviews')
                .select('*')
                .order('created_at', { ascending: false });

            if (!error && Array.isArray(data)) {
                return data.map(r => ({
                    id: r.id,
                    name: r.name,
                    location: r.location || 'Karnataka, India',
                    rating: Number(r.rating) || 5,
                    tag: r.tag || 'Explorer',
                    text: r.text,
                    date: r.date || (r.created_at ? r.created_at.split('T')[0] : new Date().toISOString().split('T')[0]),
                    createdAt: r.created_at || r.createdAt || new Date().toISOString()
                }));
            }
        } catch (dbErr) {
            console.warn('[REVIEWS API] Could not fetch from Supabase:', dbErr.message);
        }
    }

    // 2. Fallback to local files
    return loadLocalReviews();
}

function loadLocalReviews() {
    const candidates = [
        path.join(process.cwd(), 'backend', 'reviews_db.json'),
        path.join(__dirname, '..', 'backend', 'reviews_db.json'),
        path.join('/tmp', 'reviews_db.json')
    ];

    for (const p of candidates) {
        try {
            if (fs.existsSync(p)) {
                const raw = fs.readFileSync(p, 'utf8');
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    return parsed;
                }
            }
        } catch (e) {}
    }

    try {
        const bundled = require('../backend/reviews_db.json');
        if (Array.isArray(bundled) && bundled.length > 0) {
            return [...bundled];
        }
    } catch (e) {}

    return [...DEFAULT_REVIEWS];
}

function calculateSummary(reviews) {
    const total = reviews.length;
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    let sum = 0;

    reviews.forEach(r => {
        const rating = Math.max(1, Math.min(5, Math.round(Number(r.rating) || 5)));
        distribution[rating] = (distribution[rating] || 0) + 1;
        sum += Number(r.rating) || 5;
    });

    const avg = total > 0 ? Math.round((sum / total) * 10) / 10 : 0.0;
    const sorted = [...reviews].sort((a, b) => {
        return new Date(b.createdAt || b.date).getTime() - new Date(a.createdAt || a.date).getTime();
    });

    return {
        reviews: sorted,
        totalReviews: total,
        overallRating: avg,
        ratingDistribution: distribution
    };
}

function parseJsonBody(req) {
    return new Promise((resolve) => {
        if (req.body && typeof req.body === 'object') {
            return resolve(req.body);
        }
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch (e) {
                resolve({});
            }
        });
        req.on('error', () => resolve({}));
    });
}

module.exports = async (req, res) => {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.statusCode = 204;
        res.end();
        return;
    }

    if (req.method === 'DELETE') {
        if (supabase) {
            try {
                await supabase.from('website_reviews').delete().neq('id', '');
            } catch (e) {}
        }
        const targets = [
            path.join(process.cwd(), 'backend', 'reviews_db.json'),
            path.join(__dirname, '..', 'backend', 'reviews_db.json'),
            path.join('/tmp', 'reviews_db.json')
        ];
        for (const t of targets) {
            try {
                fs.writeFileSync(t, JSON.stringify([], null, 2), 'utf8');
            } catch (e) {}
        }
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(JSON.stringify({ success: true, message: 'All reviews have been removed.', ...calculateSummary([]) }));
        return;
    }

    if (req.method === 'GET') {
        const reviews = await fetchAllReviews();
        const summary = calculateSummary(reviews);
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'public, max-age=15, stale-while-revalidate=30');
        res.statusCode = 200;
        res.end(JSON.stringify({ success: true, ...summary }));
        return;
    }

    if (req.method === 'POST') {
        try {
            const body = await parseJsonBody(req);
            const name = (body.name || '').trim();
            const rating = Math.max(1, Math.min(5, Math.round(Number(body.rating) || 5)));
            const text = (body.text || '').trim();
            const location = (body.location || 'Karnataka, India').trim();
            const tag = (body.tag || 'Explorer').trim();

            if (!name || !text) {
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 400;
                res.end(JSON.stringify({ success: false, error: 'Name and review text are required.' }));
                return;
            }

            const wordCount = text.split(/\s+/).filter(Boolean).length;
            if (wordCount < 10) {
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 400;
                res.end(JSON.stringify({ success: false, error: `Review must contain at least 10 words (currently ${wordCount} words).` }));
                return;
            }

            const nowIso = new Date().toISOString();
            const newReview = {
                id: `rev_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
                name,
                location,
                rating,
                tag,
                text,
                date: nowIso.split('T')[0],
                createdAt: nowIso
            };

            // 1. Insert into Supabase cloud database if available
            if (supabase) {
                try {
                    const { error: insertErr } = await supabase
                        .from('website_reviews')
                        .insert([{
                            id: newReview.id,
                            name: newReview.name,
                            location: newReview.location,
                            rating: newReview.rating,
                            tag: newReview.tag,
                            text: newReview.text,
                            date: newReview.date,
                            created_at: newReview.createdAt
                        }]);

                    if (insertErr) {
                        console.error('[SUPABASE REVIEWS INSERT ERROR]', insertErr.message);
                    } else {
                        console.log(`[SUPABASE REVIEWS] Review from ${name} saved in database.`);
                    }
                } catch (dbErr) {
                    console.error('[SUPABASE REVIEWS EXCEPTION]', dbErr.message);
                }
            }

            // 2. Persist locally to file if writable
            const currentReviews = await fetchAllReviews();
            // Prepend new review if not already returned from Supabase
            if (!currentReviews.some(r => r.id === newReview.id)) {
                currentReviews.unshift(newReview);
            }

            const targets = [
                path.join(process.cwd(), 'backend', 'reviews_db.json'),
                path.join(__dirname, '..', 'backend', 'reviews_db.json'),
                path.join('/tmp', 'reviews_db.json')
            ];
            for (const t of targets) {
                try {
                    fs.writeFileSync(t, JSON.stringify(currentReviews, null, 2), 'utf8');
                    break;
                } catch (e) {}
            }

            const summary = calculateSummary(currentReviews);
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 201;
            res.end(JSON.stringify({
                success: true,
                message: 'Thank you! Your review has been published.',
                newReview,
                ...summary
            }));
            return;
        } catch (err) {
            console.error('[API REVIEWS POST ERROR]', err);
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 500;
            res.end(JSON.stringify({ success: false, error: 'Failed to submit review.' }));
            return;
        }
    }

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 405;
    res.end(JSON.stringify({ success: false, error: 'Method not allowed' }));
};
