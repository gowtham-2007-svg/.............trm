const fs = require('fs');
const path = require('path');

const DEFAULT_REVIEWS = [
    {
        id: "rev_1791350015181_f3zyoh",
        name: "Darshan K",
        location: "Mysuru",
        rating: 5,
        tag: "Weekend Getaway",
        text: "This travel guide website is truly amazing and super helpful for weekend trips.",
        date: "2026-10-07",
        createdAt: "2026-10-07T05:13:35.182Z"
    },
    {
        id: "rev_1791349285050_4hmtc8",
        name: "Gowtham N",
        location: "Karnataka, India",
        rating: 4,
        tag: "Weekend Getaway",
        text: "Weekend Explore is a very helpful website for planning weekend trips. I really like the simple interface, destination suggestions, travel information, and useful itinerary features. It makes trip planning easier and more convenient.",
        date: "2026-10-07",
        createdAt: "2026-10-07T05:01:25.050Z"
    },
    {
        id: "rev_1791349050468_61rjn0",
        name: "Ananya Rao",
        location: "Mangaluru",
        rating: 5,
        tag: "Nature & Beaches",
        text: "The beach recommendations and curated weekend spots are fantastic!",
        date: "2026-10-07",
        createdAt: "2026-10-07T04:57:30.468Z"
    },
    {
        id: "rev_init_1",
        name: "Kavya Ramesh",
        location: "Bangalore, Karnataka",
        rating: 5,
        tag: "Solo Explorer",
        text: "Weekend Explore made discovering hidden places around Bangalore so effortless! The bus route tips and verified timings saved me so much time. Absolutely love the clean interface!",
        date: "2026-03-28",
        createdAt: "2026-03-28T14:32:00.000Z"
    },
    {
        id: "rev_init_2",
        name: "Aditya Hegde",
        location: "Mangaluru, Karnataka",
        rating: 5,
        tag: "Coastal Getaways",
        text: "The Mangaluru beach recommendations and local seafood canteen suggestions were 100% spot-on. The AI agent even helped customize an itinerary within our ₹1,500 budget.",
        date: "2026-04-01",
        createdAt: "2026-04-01T09:15:00.000Z"
    },
    {
        id: "rev_init_3",
        name: "Pooja Shankar",
        location: "Mysuru, Karnataka",
        rating: 5,
        tag: "Heritage & Culture",
        text: "Planning our family weekend in Mysuru was so seamless. The detailed category breakdown with temples, gardens, and heritage walks is the best I've seen on any travel site.",
        date: "2026-04-03",
        createdAt: "2026-04-03T18:45:00.000Z"
    },
    {
        id: "rev_init_4",
        name: "Rohan D'Souza",
        location: "Udupi, Karnataka",
        rating: 5,
        tag: "Weekend Roadtrips",
        text: "Super smooth website! Very responsive on mobile and gives accurate recommendations without useless clutter. Highly recommended for anyone exploring South India.",
        date: "2026-04-05",
        createdAt: "2026-04-05T11:20:00.000Z"
    }
];

function loadReviews() {
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

    // Try bundled require if available
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

    const avg = total > 0 ? Math.round((sum / total) * 10) / 10 : 5.0;
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
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.statusCode = 204;
        res.end();
        return;
    }

    if (req.method === 'GET') {
        const reviews = loadReviews();
        const summary = calculateSummary(reviews);
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'public, max-age=30, stale-while-revalidate=60');
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

            const newReview = {
                id: `rev_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
                name,
                location,
                rating,
                tag,
                text,
                date: new Date().toISOString().split('T')[0],
                createdAt: new Date().toISOString()
            };

            const currentReviews = loadReviews();
            currentReviews.unshift(newReview);

            // Persist if possible
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
