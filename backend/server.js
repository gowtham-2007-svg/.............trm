const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const url = require('url');
const zlib = require('zlib');
const { createClient } = require('@supabase/supabase-js');
const axios = require('axios');
global.WebSocket = require('ws');

// Optional nodemailer requirement with graceful fallback
let nodemailer = null;
try {
    nodemailer = require('nodemailer');
} catch (e) {
    console.log('[WELCOME EMAIL] nodemailer module not loaded.');
}

async function sendWelcomeEmail(recipientEmail, userName) {
    const name = userName || 'Explorer';
    const mailSubject = `Welcome to Weekend Explore! 🌟`;
    const mailText = `Welcome to Weekend Explore!\n\nDiscover amazing destinations, hidden gems, delicious food, and unforgettable experiences—all tailored to your budget, location, travel style, and preferences.\n\n🤖 Powered by an AI Travel Agent that helps you find the perfect place in seconds.\n\n✨ Proudly created by GenZS.`;

    const mailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Weekend Explore!</title>
        </head>
        <body style="margin: 0; padding: 24px 12px; background-color: #0b0f19; font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;">
            <div style="max-width: 580px; margin: 0 auto; background: #131b2e; border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.1); overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
                <!-- Header Banner -->
                <div style="background: linear-gradient(135deg, #8338EC 0%, #3A86EF 100%); padding: 36px 28px; text-align: center;">
                    <h1 style="color: #ffffff; font-size: 26px; font-weight: 800; margin: 0; letter-spacing: -0.5px; text-transform: uppercase;">Weekend Explore</h1>
                    <p style="color: rgba(255, 255, 255, 0.9); font-size: 15px; margin: 6px 0 0 0; font-weight: 500;">Welcome, ${name}! 👋</p>
                </div>

                <!-- Main Body -->
                <div style="padding: 32px 28px; color: #e2e8f0;">
                    <h2 style="color: #ffffff; font-size: 22px; font-weight: 700; margin-top: 0; margin-bottom: 16px;">Welcome to Weekend Explore!</h2>

                    <p style="font-size: 16px; line-height: 1.7; color: #cbd5e1; margin-bottom: 24px;">
                        Discover amazing destinations, hidden gems, delicious food, and unforgettable experiences—all tailored to your budget, location, travel style, and preferences.
                    </p>

                    <div style="background: rgba(131, 56, 236, 0.15); border: 1px solid rgba(131, 56, 236, 0.35); border-radius: 14px; padding: 20px; margin-bottom: 24px;">
                        <p style="font-size: 15px; line-height: 1.6; color: #f8fafc; margin: 0; font-weight: 500;">
                            🤖 <strong>Powered by an AI Travel Agent</strong> that helps you find the perfect place in seconds.
                        </p>
                    </div>

                    <div style="background: rgba(255, 255, 255, 0.04); border-radius: 12px; padding: 16px; text-align: center; border: 1px dashed rgba(255, 255, 255, 0.15);">
                        <p style="font-size: 15px; font-weight: 600; color: #c084fc; margin: 0;">
                            ✨ Proudly created by GenZS.
                        </p>
                    </div>
                </div>

                <!-- Footer -->
                <div style="background-color: #0b0f19; padding: 20px 28px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.08); font-size: 13px; color: #64748b;">
                    <p style="margin: 0;">&copy; ${new Date().getFullYear()} Weekend Explore by GenZS. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
    `;

    // 1. Send via Resend API Priority
    const resendApiKey = process.env.RESEND_API_KEY;
    const resendFrom = process.env.RESEND_FROM || 'onboarding@resend.dev';
    let resendErrorDetails = null;

    if (resendApiKey) {
        try {
            console.log(`[WELCOME EMAIL - RESEND] Dispatching welcome email to ${recipientEmail} via Resend...`);
            const resendRes = await axios.post(
                'https://api.resend.com/emails',
                {
                    from: resendFrom,
                    to: [recipientEmail],
                    subject: mailSubject,
                    html: mailHtml,
                    text: mailText
                },
                {
                    headers: {
                        'Authorization': `Bearer ${resendApiKey}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log(`[WELCOME EMAIL - RESEND SUCCESS] Email delivered successfully to ${recipientEmail}. Resend ID: ${resendRes.data.id}`);
            return { success: true, mode: 'resend', resendId: resendRes.data.id };
        } catch (resendErr) {
            resendErrorDetails = resendErr.response ? resendErr.response.data : resendErr.message;
            console.error(`[WELCOME EMAIL - RESEND ERROR]`, resendErrorDetails);
        }
    }

    const host = process.env.SMTP_HOST || process.env.GMAIL_HOST || 'smtp.gmail.com';
    const port = process.env.SMTP_PORT || 587;
    const user = process.env.SMTP_USER || process.env.GMAIL_USER;
    const pass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASS;

    // 2. Send via real SMTP / Gmail credentials if configured
    if (nodemailer && user && pass) {
        try {
            const transporter = nodemailer.createTransport({
                host: host,
                port: Number(port),
                secure: Number(port) === 465,
                auth: { user, pass }
            });
            await transporter.sendMail({
                from: process.env.SMTP_FROM || `"Weekend Explore" <${user}>`,
                to: recipientEmail,
                subject: mailSubject,
                html: mailHtml,
                text: mailText
            });
            console.log(`[WELCOME EMAIL] Sent real Gmail/SMTP email successfully to ${recipientEmail}`);
            return { success: true, mode: 'smtp', resendError: resendErrorDetails };
        } catch (err) {
            console.error('[WELCOME EMAIL] Real SMTP error:', err.message);
        }
    }

    // 3. Ethereal Test Account fallback
    if (nodemailer) {
        try {
            const testAccount = await nodemailer.createTestAccount();
            const transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                secure: false,
                auth: { user: testAccount.user, pass: testAccount.pass }
            });
            const info = await transporter.sendMail({
                from: '"Weekend Explore" <no-reply@weekendexplorer.com>',
                to: recipientEmail,
                subject: mailSubject,
                html: mailHtml,
                text: mailText
            });
            const previewUrl = nodemailer.getTestMessageUrl(info);
            console.log(`\n==================================================`);
            console.log(`[AUTOMATED WELCOME EMAIL SENT (TEST MODE)]`);
            console.log(`Recipient: ${recipientEmail}`);
            console.log(`View Sent Email Live at: ${previewUrl}`);
            console.log(`==================================================\n`);
            return { success: true, mode: 'ethereal', previewUrl, resendError: resendErrorDetails };
        } catch (e) {
            console.error('[WELCOME EMAIL] Ethereal fallback error:', e.message);
        }
    }

    console.log(`[WELCOME EMAIL] Generated welcome email for ${recipientEmail}.`);
    return { success: true, mode: 'console', resendError: resendErrorDetails };
}

// Manual parser for .env configuration
function loadEnv() {
    const envPath = path.join(__dirname, '.env');
    if (fs.existsSync(envPath)) {
        try {
            const content = fs.readFileSync(envPath, 'utf8');
            content.split(/\r?\n/).forEach(line => {
                const trimmed = line.trim();
                if (!trimmed || trimmed.startsWith('#')) return;
                const eqIndex = trimmed.indexOf('=');
                if (eqIndex === -1) return;
                const key = trimmed.slice(0, eqIndex).trim();
                let val = trimmed.slice(eqIndex + 1).trim();
                if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
                    val = val.slice(1, -1);
                }
                process.env[key] = val;
            });
        } catch (err) {
            console.error('Failed to parse .env file:', err);
        }
    }
}

// Load environment configurations
loadEnv();

// Prevent server crashes on unhandled errors (e.g., EPIPE, ECONNRESET when client aborts request)
process.on('uncaughtException', (err) => {
    console.error('[UNCAUGHT EXCEPTION]', err);
});
process.on('unhandledRejection', (reason, promise) => {
    console.error('[UNHANDLED REJECTION] at:', promise, 'reason:', reason);
});

// Supabase Configuration Validation
function isSupabaseConfigured() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
    return url && url.trim() !== '' && !url.includes('YOUR_SUPABASE') &&
           key && key.trim() !== '' && !key.includes('YOUR_SUPABASE');
}

let supabase = null;
if (isSupabaseConfigured()) {
    console.log('[SUPABASE] Initializing Supabase client...');
    supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
    );
} else {
    console.log('[SUPABASE] Supabase credentials not fully configured. Caching is disabled.');
}

const PORT = process.env.PORT || 3000;

// High-speed In-Memory LRU Cache for Google Places & API responses (<0.1ms access)
const apiMemoryCache = new Map();
const API_CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours
const MAX_CACHE_ENTRIES = 500;

function getFromMemoryCache(key) {
    const entry = apiMemoryCache.get(key);
    if (!entry) return null;
    if (Date.now() - entry.timestamp > API_CACHE_TTL_MS) {
        apiMemoryCache.delete(key);
        return null;
    }
    return entry.data;
}

function setToMemoryCache(key, data) {
    if (apiMemoryCache.size >= MAX_CACHE_ENTRIES) {
        const firstKey = apiMemoryCache.keys().next().value;
        if (firstKey) apiMemoryCache.delete(firstKey);
    }
    apiMemoryCache.set(key, { timestamp: Date.now(), data });
}

// API Key Validation Helper
function isApiKeyConfigured() {
    const key = process.env.GOOGLE_PLACES_API_KEY;
    return key && key.trim() !== '' && !key.includes('YOUR_SECURE');
}

// CORS headers setter helper
function setCorsHeaders(res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

// Request body helper parser
function getRequestBody(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch (err) {
                reject(err);
            }
        });
        req.on('error', err => { reject(err); });
    });
}

// Create clean, robust HTTP server
const requestListener = async (req, res) => {
    // 1. Set CORS header for all OPTIONS requests (preflight)
    if (req.method === 'OPTIONS') {
        setCorsHeaders(res);
        res.writeHead(204);
        res.end();
        return;
    }

    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    
    // Redirect /admin to /admin/ for correct relative asset loading
    if (pathname === '/admin') {
        res.writeHead(301, { 'Location': '/admin/' });
        res.end();
        return;
    }
    
    console.log(`[REQUEST] ${req.method} ${parsedUrl.path}`);

    // 2. Endpoint: Fetch Google Place Details (with Supabase caching)
    if (pathname.startsWith('/api/place-details/')) {
        setCorsHeaders(res);
        const placeId = pathname.substring('/api/place-details/'.length);

        if (!placeId) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Place ID parameter is required' }));
            return;
        }

        // 1. Try to load from Fast In-Memory Cache first (<0.1ms)
        const memoryCached = getFromMemoryCache(placeId);
        if (memoryCached) {
            console.log(`[FAST IN-MEMORY CACHE HIT] Served place details for ${placeId}`);
            res.writeHead(200, {
                'Content-Type': 'application/json',
                'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
            });
            res.end(JSON.stringify(memoryCached));
            return;
        }

        // 2. Try to load from Supabase Cache
        if (supabase) {
            try {
                const { data: cachedPlace, error: placeError } = await supabase
                    .from('google_places_cache')
                    .select('*')
                    .eq('place_id', placeId)
                    .single();

                if (cachedPlace) {
                    const cacheAgeMs = Date.now() - new Date(cachedPlace.last_cached).getTime();
                    const cacheLimitMs = 24 * 60 * 60 * 1000; // 24 hours
                    if (cacheAgeMs < cacheLimitMs) {
                        const { data: cachedReviews, error: reviewsError } = await supabase
                            .from('google_reviews_cache')
                            .select('*')
                            .eq('place_id', placeId);

                        if (!reviewsError) {
                            console.log(`[CACHE HIT] Loaded place details and reviews for ${placeId} from Supabase cache`);
                            const reviews = cachedReviews || [];
                            const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
                            reviews.forEach(r => {
                                const rating = Math.round(r.rating);
                                if (distribution[rating] !== undefined) {
                                    distribution[rating]++;
                                }
                            });

                            const placeDetails = {
                                connected: true,
                                placeId: placeId,
                                name: cachedPlace.name,
                                rating: parseFloat(cachedPlace.rating) || 0.0,
                                user_ratings_total: cachedPlace.user_ratings_total || 0,
                                formatted_address: cachedPlace.formatted_address || '',
                                formatted_phone_number: cachedPlace.formatted_phone_number || '',
                                website: cachedPlace.website || '',
                                opening_hours: cachedPlace.weekday_text ? {
                                    open_now: null,
                                    weekday_text: JSON.parse(cachedPlace.weekday_text)
                                } : null,
                                photos: cachedPlace.photos_references ? JSON.parse(cachedPlace.photos_references) : [],
                                reviews: reviews.map(r => ({
                                    author_name: r.author_name,
                                    profile_photo_url: r.profile_photo_url || '',
                                    rating: r.rating,
                                    relative_time_description: r.relative_time_description || '',
                                    text: r.review_text || '',
                                    time: parseInt(r.review_time)
                                })),
                                rating_distribution: distribution
                            };

                            setToMemoryCache(placeId, placeDetails);
                            res.writeHead(200, {
                                'Content-Type': 'application/json',
                                'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
                            });
                            res.end(JSON.stringify(placeDetails));
                            return;
                        }
                    } else {
                        console.log(`[CACHE EXPIRED] Cache for ${placeId} is older than 24 hours, refetching...`);
                    }
                } else {
                    console.log(`[CACHE MISS] No cached data for ${placeId}`);
                }
            } catch (dbErr) {
                console.error('[SUPABASE ERROR] Failed to query cache:', dbErr.message);
            }
        }

        // If API Key is not configured, send graceful setup instructions payload
        if (!isApiKeyConfigured()) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                connected: false,
                error: 'Google Places API Required',
                setupInstructions: {
                    apiKeyConfigured: false,
                    placeIdGiven: placeId,
                    steps: [
                        'Go to Google Cloud Console (https://console.cloud.google.com/)',
                        'Enable the "Places API" for your credentials project.',
                        'Create an API Key under the "Credentials" tab.',
                        'Create a ".env" file in the "backend" directory.',
                        'Add your key: GOOGLE_PLACES_API_KEY=your_actual_key_here',
                        'Restart the Node proxy backend server.'
                    ]
                }
            }));
            return;
        }

        const apiKey = process.env.GOOGLE_PLACES_API_KEY;
        const googleUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews,photos,opening_hours,formatted_address,website,formatted_phone_number&key=${apiKey}`;

        https.get(googleUrl, (apiRes) => {
            let rawData = '';
            apiRes.on('data', (chunk) => { rawData += chunk; });
            apiRes.on('end', () => {
                try {
                    const data = JSON.parse(rawData);

                    if (data.status !== 'OK') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({
                            connected: true,
                            status: data.status,
                            error: data.error_message || 'Failed to fetch details from Google Places API.'
                        }));
                        return;
                    }

                    const result = data.result || {};

                    // Parse rating distribution from Google reviews to simulate rating distribution visualizer
                    const reviews = result.reviews || [];
                    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
                    reviews.forEach(r => {
                        const rating = Math.round(r.rating);
                        if (distribution[rating] !== undefined) {
                            distribution[rating]++;
                        }
                    });

                    // Construct standard clean payload for frontend
                    const placeDetails = {
                        connected: true,
                        placeId: placeId,
                        name: result.name,
                        rating: result.rating || 0.0,
                        user_ratings_total: result.user_ratings_total || 0,
                        formatted_address: result.formatted_address || '',
                        formatted_phone_number: result.formatted_phone_number || '',
                        website: result.website || '',
                        opening_hours: result.opening_hours ? {
                            open_now: result.opening_hours.open_now,
                            weekday_text: result.opening_hours.weekday_text || []
                        } : null,
                        photos: (result.photos || []).map(p => ({
                            photo_reference: p.photo_reference,
                            height: p.height,
                            width: p.width
                        })),
                        reviews: reviews.map(r => ({
                            author_name: r.author_name,
                            profile_photo_url: r.profile_photo_url || '',
                            rating: r.rating,
                            relative_time_description: r.relative_time_description || '',
                            text: r.text || '',
                            time: r.time
                        })),
                        rating_distribution: distribution
                    };

                    setToMemoryCache(placeId, placeDetails);
                    res.writeHead(200, {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
                    });
                    res.end(JSON.stringify(placeDetails));

                    // Store response in cache asynchronously
                    if (supabase) {
                        (async () => {
                            try {
                                const placeData = {
                                    place_id: placeId,
                                    name: placeDetails.name,
                                    formatted_address: placeDetails.formatted_address,
                                    formatted_phone_number: placeDetails.formatted_phone_number,
                                    website: placeDetails.website,
                                    rating: placeDetails.rating,
                                    user_ratings_total: placeDetails.user_ratings_total,
                                    weekday_text: placeDetails.opening_hours ? JSON.stringify(placeDetails.opening_hours.weekday_text) : null,
                                    photos_references: JSON.stringify(placeDetails.photos),
                                    last_cached: new Date().toISOString()
                                };

                                const { error: upsertPlaceError } = await supabase
                                    .from('google_places_cache')
                                    .upsert(placeData);

                                if (upsertPlaceError) {
                                    console.error('[SUPABASE ERROR] Failed to upsert place to cache:', upsertPlaceError.message);
                                } else {
                                    // Remove old cached reviews
                                    await supabase
                                        .from('google_reviews_cache')
                                        .delete()
                                        .eq('place_id', placeId);

                                    // Insert new reviews
                                    const reviewsToInsert = (result.reviews || []).map((r, idx) => ({
                                        review_id: `${placeId}_rev_${idx}_${Date.now()}`,
                                        place_id: placeId,
                                        author_name: r.author_name,
                                        profile_photo_url: r.profile_photo_url || '',
                                        rating: r.rating,
                                        relative_time_description: r.relative_time_description || '',
                                        review_text: r.text || '',
                                        review_time: r.time || Date.now(),
                                        last_cached: new Date().toISOString()
                                    }));

                                    if (reviewsToInsert.length > 0) {
                                        const { error: insertReviewsError } = await supabase
                                            .from('google_reviews_cache')
                                            .insert(reviewsToInsert);
                                        if (insertReviewsError) {
                                            console.error('[SUPABASE ERROR] Failed to insert reviews to cache:', insertReviewsError.message);
                                        }
                                    }
                                    console.log(`[CACHE STORED] Saved details and reviews for ${placeId} to Supabase cache`);
                                }
                            } catch (saveErr) {
                                console.error('[SUPABASE ERROR] Error storing cache:', saveErr.message);
                            }
                        })();
                    }

                } catch (err) {
                    console.error('Error parsing response from Google:', err.message);
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({
                        error: 'Error parsing response from Google Places API',
                        details: err.message
                    }));
                }
            });
        }).on('error', (err) => {
            console.error('Error contacting Google Places API:', err.message);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                error: 'Internal Server Error while communicating with Google Places API',
                details: err.message
            }));
        });
        return;
    }

    // 3. Endpoint: Stream Google Place Photo (Securing the API Key from image tags)
    if (pathname.startsWith('/api/place-photo/')) {
        setCorsHeaders(res);
        const photoReference = pathname.substring('/api/place-photo/'.length);

        if (!photoReference) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Photo reference is required' }));
            return;
        }

        if (!isApiKeyConfigured()) {
            res.writeHead(403, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Google Places API Key is not configured on backend.' }));
            return;
        }

        const apiKey = process.env.GOOGLE_PLACES_API_KEY;
        const googleUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${photoReference}&key=${apiKey}`;

        const fetchPhoto = (targetUrl) => {
            https.get(targetUrl, (apiRes) => {
                // Handle Google HTTP Redirects (302 Found)
                if (apiRes.statusCode >= 300 && apiRes.statusCode < 400 && apiRes.headers.location) {
                    fetchPhoto(apiRes.headers.location);
                    return;
                }

                res.writeHead(apiRes.statusCode, {
                    'Content-Type': apiRes.headers['content-type'] || 'image/jpeg',
                    'Cache-Control': 'public, max-age=604800, stale-while-revalidate=2592000',
                    'Access-Control-Allow-Origin': '*'
                });
                apiRes.pipe(res);
            }).on('error', (err) => {
                console.error('Error fetching photo from Google:', err.message);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Error fetching photo reference from Google' }));
            });
        };

        fetchPhoto(googleUrl);
        return;
    }

    // --- ANALYTICS & ADMIN ENDPOINTS ---

    // Auth validation helper
    async function verifyAdmin(req) {
        const sessionId = req.headers['x-clerk-session-id'] || (req.headers['authorization'] ? req.headers['authorization'].split(' ')[1] : null);
        const userId = req.headers['x-clerk-user-id'];
        
        if (!sessionId || !userId) {
            console.warn('[Admin Auth] Missing sessionId or userId in headers');
            return false;
        }

        if (!process.env.CLERK_SECRET_KEY) {
            console.error('[Admin Auth] CRITICAL: Missing CLERK_SECRET_KEY');
            throw new Error("Missing CLERK_SECRET_KEY in Vercel Environment Variables.");
        }

        try {
            // Verify session active
            const sessionRes = await axios.get(`https://api.clerk.com/v1/sessions/${sessionId}`, {
                headers: { 'Authorization': `Bearer ${process.env.CLERK_SECRET_KEY}` }
            });
            if (sessionRes.data.status !== 'active' || sessionRes.data.user_id !== userId) {
                console.warn('[Admin Auth] Clerk session is not active or user mismatch');
                return false;
            }
            
            // Verify user is admin
            const userRes = await axios.get(`https://api.clerk.com/v1/users/${userId}`, {
                headers: { 'Authorization': `Bearer ${process.env.CLERK_SECRET_KEY}` }
            });
            
            const email = userRes.data.email_addresses && userRes.data.email_addresses[0] ? userRes.data.email_addresses[0].email_address : '';
            const role = userRes.data.public_metadata ? userRes.data.public_metadata.role : '';
            
            // Force yadhur689@gmail.com to be an admin always
            const adminEmails = ['yadhur689@gmail.com'];
            if (process.env.ADMIN_EMAILS) {
                adminEmails.push(...process.env.ADMIN_EMAILS.split(',').map(e => e.trim().toLowerCase()));
            }

            if (adminEmails.includes(email.toLowerCase()) || role === 'admin') {
                return true;
            }
            console.warn(`[Admin Auth] User ${email} does not have admin permissions`);
            return false;
        } catch (err) {
            console.error('[Admin Auth Error]', err.message);
            return false;
        }
    }

    // Local file-based database for tracking metrics
    const DB_PATH = path.join(__dirname, 'analytics_db.json');
    let analyticsSessions = [];
    let analyticsPageViews = [];

    function loadLocalDB() {
        if (fs.existsSync(DB_PATH)) {
            try {
                const raw = fs.readFileSync(DB_PATH, 'utf8');
                const data = JSON.parse(raw);
                analyticsSessions = data.sessions || [];
                analyticsPageViews = data.pageViews || [];
                console.log(`[LOCAL DB] Loaded ${analyticsSessions.length} sessions and ${analyticsPageViews.length} page views`);
            } catch (err) {
                console.error('[LOCAL DB] Error loading database file, starting fresh:', err.message);
            }
        }
    }

    function saveLocalDB() {
        try {
            fs.writeFileSync(DB_PATH, JSON.stringify({
                sessions: analyticsSessions,
                pageViews: analyticsPageViews
            }, null, 2), 'utf8');
        } catch (err) {
            console.error('[LOCAL DB] Error saving database file:', err.message);
        }
    }

    // Load DB on startup
    loadLocalDB();

    function getLocalAnalyticsSummary(range) {
        const now = Date.now();
        let startDate = 0;
        const filterRange = range || '7days';

        if (filterRange === 'today') {
            const d = new Date();
            d.setHours(0, 0, 0, 0);
            startDate = d.getTime();
        } else if (filterRange === '7days') {
            startDate = now - 7 * 24 * 60 * 60 * 1000;
        } else if (filterRange === '30days') {
            startDate = now - 30 * 24 * 60 * 60 * 1000;
        }

        const filteredSessions = analyticsSessions.filter(s => new Date(s.started_at).getTime() >= startDate);
        const filteredPageViews = analyticsPageViews.filter(pv => new Date(pv.viewed_at).getTime() >= startDate);

        // 1. Total Unique Users
        const uniqueUsers = new Set();
        filteredSessions.forEach(s => {
            uniqueUsers.add(s.user_id || s.session_id);
        });
        const totalUsers = uniqueUsers.size;

        // 2. Total Visits (Page Views)
        const totalVisits = filteredPageViews.length;

        // 3. Daily Visitors (Avg unique users per day)
        let dailyVisitors = 0;
        if (filterRange === 'today') {
            dailyVisitors = totalUsers;
        } else {
            const dailyCounts = {};
            filteredSessions.forEach(s => {
                const dayKey = s.started_at.split('T')[0];
                if (!dailyCounts[dayKey]) dailyCounts[dayKey] = new Set();
                dailyCounts[dayKey].add(s.user_id || s.session_id);
            });
            const days = Object.keys(dailyCounts);
            const sum = days.reduce((acc, d) => acc + dailyCounts[d].size, 0);
            dailyVisitors = days.length > 0 ? Math.round(sum / days.length) : 0;
        }

        // 4. Active Users (Active in the last 5 minutes)
        const fiveMinsAgo = now - 5 * 60 * 1000;
        const activeUsers = new Set(
            analyticsSessions
                .filter(s => new Date(s.last_active_at).getTime() >= fiveMinsAgo)
                .map(s => s.user_id || s.session_id)
        ).size;

        // 5. Avg Session Duration
        const durationSessions = filteredSessions.filter(s => s.duration_seconds > 0);
        const avgDuration = durationSessions.length > 0
            ? Math.round((durationSessions.reduce((acc, s) => acc + s.duration_seconds, 0) / durationSessions.length) * 10) / 10
            : 0;

        // 6. Most Visited Pages
        const pageCounts = {};
        filteredPageViews.forEach(pv => {
            if (!pageCounts[pv.path]) pageCounts[pv.path] = { views: 0, visitors: new Set() };
            pageCounts[pv.path].views++;
            pageCounts[pv.path].visitors.add(pv.session_id);
        });
        const mostVisitedPages = Object.keys(pageCounts).map(path => ({
            path,
            views: pageCounts[path].views,
            unique_visitors: pageCounts[path].visitors.size
        })).sort((a, b) => b.views - a.views).slice(0, 10);

        // 7. Device Types Breakdown
        const deviceCounts = {};
        filteredSessions.forEach(s => {
            const device = s.device_type || 'Desktop';
            deviceCounts[device] = (deviceCounts[device] || 0) + 1;
        });
        const deviceTypes = Object.keys(deviceCounts).map(device => ({
            device,
            count: deviceCounts[device]
        })).sort((a, b) => b.count - a.count);

        // 8. Trends
        const trends = { labels: [], visits: [], visitors: [] };
        if (filterRange === 'today') {
            const hourlyData = {};
            const midnight = new Date();
            midnight.setHours(0, 0, 0, 0);
            const startHr = midnight.getTime();
            
            for (let i = startHr; i <= now; i += 60 * 60 * 1000) {
                const hrStr = new Date(i).toLocaleTimeString('en-US', { hour12: false, hour: '2-digit' }) + ':00';
                hourlyData[hrStr] = { views: 0, visitors: new Set() };
            }

            filteredPageViews.forEach(pv => {
                const pvTime = new Date(pv.viewed_at);
                if (pvTime.getTime() >= startHr) {
                    const hrStr = pvTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit' }) + ':00';
                    if (hourlyData[hrStr]) {
                        hourlyData[hrStr].views++;
                        hourlyData[hrStr].visitors.add(pv.session_id);
                    }
                }
            });

            Object.keys(hourlyData).forEach(hr => {
                trends.labels.push(hr);
                trends.visits.push(hourlyData[hr].views);
                trends.visitors.push(hourlyData[hr].visitors.size);
            });
        } else {
            const dailyData = {};
            const daysToGenerate = filterRange === '7days' ? 7 : (filterRange === '30days' ? 30 : 0);
            
            if (daysToGenerate > 0) {
                for (let i = daysToGenerate; i >= 0; i--) {
                    const d = new Date(now - i * 24 * 60 * 60 * 1000);
                    const dayStr = d.toISOString().split('T')[0];
                    dailyData[dayStr] = { views: 0, visitors: new Set() };
                }
            } else {
                analyticsSessions.forEach(s => {
                    const dayStr = s.started_at.split('T')[0];
                    dailyData[dayStr] = { views: 0, visitors: new Set() };
                });
                const todayStr = new Date().toISOString().split('T')[0];
                dailyData[todayStr] = { views: 0, visitors: new Set() };
            }

            filteredPageViews.forEach(pv => {
                const dayStr = pv.viewed_at.split('T')[0];
                if (dailyData[dayStr]) {
                    dailyData[dayStr].views++;
                    dailyData[dayStr].visitors.add(pv.session_id);
                }
            });

            Object.keys(dailyData).sort().forEach(day => {
                trends.labels.push(day);
                trends.visits.push(dailyData[day].views);
                trends.visitors.push(dailyData[day].visitors.size);
            });
        }

        return {
            total_users: totalUsers,
            total_visits: totalVisits,
            daily_visitors: dailyVisitors,
            active_users: activeUsers,
            average_time_spent: avgDuration,
            most_visited_pages: mostVisitedPages,
            device_types: deviceTypes,
            trends: trends
        };
    }

    // Route: Page View Tracking
    if (pathname === '/api/analytics/track' && req.method === 'POST') {
        try {
            const body = await getRequestBody(req);
            const { sessionId, path: viewPath, title, referrer, deviceType, browser, os, userId, userEmail, userName } = body;

            if (!sessionId || !viewPath) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Missing sessionId or path' }));
                return;
            }

            let session = analyticsSessions.find(s => s.session_id === sessionId);
            if (!session) {
                session = {
                    session_id: sessionId,
                    user_id: userId || null,
                    user_email: userEmail || null,
                    user_name: userName || null,
                    device_type: deviceType || 'Desktop',
                    browser: browser || 'Unknown',
                    os: os || 'Unknown',
                    started_at: new Date().toISOString(),
                    last_active_at: new Date().toISOString(),
                    duration_seconds: 0
                };
                analyticsSessions.push(session);
            } else if (userId) {
                session.user_id = userId;
                session.user_email = userEmail;
                session.user_name = userName;
            }

            analyticsPageViews.push({
                session_id: sessionId,
                path: viewPath,
                title: title || '',
                referrer: referrer || '',
                viewed_at: new Date().toISOString()
            });

            saveLocalDB();

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true }));
        } catch (err) {
            console.error('[Analytics Track Error]', err.message);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.stack }));
        }
        return;
    }

    // Route: Heartbeat Duration Update
    if (pathname === '/api/analytics/heartbeat' && req.method === 'POST') {
        try {
            const body = await getRequestBody(req);
            const { sessionId } = body;

            if (!sessionId) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Missing sessionId' }));
                return;
            }

            let session = analyticsSessions.find(s => s.session_id === sessionId);
            if (!session) {
                // Auto-create session on heartbeat to handle server restarts smoothly
                session = {
                    session_id: sessionId,
                    user_id: null,
                    user_email: null,
                    user_name: null,
                    device_type: 'Desktop',
                    browser: 'Unknown',
                    os: 'Unknown',
                    started_at: new Date(Date.now() - 15000).toISOString(),
                    last_active_at: new Date().toISOString(),
                    duration_seconds: 15
                };
                analyticsSessions.push(session);
                
                // Add an initial placeholder pageview for context
                analyticsPageViews.push({
                    session_id: sessionId,
                    path: '/',
                    title: 'Home (Recovered Session)',
                    referrer: '',
                    viewed_at: new Date(Date.now() - 15000).toISOString()
                });
            } else {
                session.last_active_at = new Date().toISOString();
                const startedAt = new Date(session.started_at);
                session.duration_seconds = Math.max(0, Math.round((Date.now() - startedAt.getTime()) / 1000));
            }
            saveLocalDB();

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true }));
        } catch (err) {
            console.error('[Analytics Heartbeat Error]', err.message);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.stack }));
        }
        return;
    }

    // Route: Identify Anonymous Session
    if (pathname === '/api/analytics/identify' && req.method === 'POST') {
        try {
            const body = await getRequestBody(req);
            const { sessionId, userId, userEmail, userName } = body;

            if (!sessionId || !userId) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Missing sessionId or userId' }));
                return;
            }

            const session = analyticsSessions.find(s => s.session_id === sessionId);
            if (session) {
                session.user_id = userId;
                session.user_email = userEmail || null;
                session.user_name = userName || null;
                saveLocalDB();
            }

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true }));
        } catch (err) {
            console.error('[Analytics Identify Error]', err.message);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.stack }));
        }
        return;
    }

    // Route: Admin Fetch Analytics
    if (pathname === '/api/admin/analytics' && req.method === 'GET') {
        try {
            const isAdmin = await verifyAdmin(req);
            if (!isAdmin) {
                res.writeHead(403, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Access Denied: Admin authorization failed' }));
                return;
            }

            const range = parsedUrl.query.range || '7days';
            const data = getLocalAnalyticsSummary(range);

            // Fetch actual Clerk registered users count for the stats card
            try {
                const usersRes = await axios.get('https://api.clerk.com/v1/users?limit=100', {
                    headers: { 'Authorization': `Bearer ${process.env.CLERK_SECRET_KEY}` }
                });
                data.clerk_total_users = usersRes.data.length;
            } catch (clerkErr) {
                console.error('[Admin Analytics Clerk Count Error]', clerkErr.message);
                data.clerk_total_users = data.total_users; // fallback
            }

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        } catch (err) {
            console.error('[Admin Analytics Endpoint Error]', err.message);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.stack }));
        }
        return;
    }

    // Route: Admin Fetch Registered Users
    if (pathname === '/api/admin/users' && req.method === 'GET') {
        try {
            const isAdmin = await verifyAdmin(req);
            if (!isAdmin) {
                res.writeHead(403, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Access Denied: Admin authorization failed' }));
                return;
            }

            const usersRes = await axios.get('https://api.clerk.com/v1/users?limit=100', {
                headers: { 'Authorization': `Bearer ${process.env.CLERK_SECRET_KEY}` }
            });

            const users = usersRes.data.map(u => ({
                id: u.id,
                email: u.email_addresses && u.email_addresses[0] ? u.email_addresses[0].email_address : 'N/A',
                name: (u.first_name || u.last_name) ? `${u.first_name || ''} ${u.last_name || ''}`.trim() : 'N/A',
                createdAt: u.created_at,
                lastSignInAt: u.last_sign_in_at
            }));

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(users));
        } catch (err) {
            console.error('[Admin Users Endpoint Error]', err.message);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Failed to fetch users' }));
        }
        return;
    }

    // 3.5. Automated Welcome Email Endpoint
    if (pathname === '/api/auth/send-welcome-email' && req.method === 'POST') {
        setCorsHeaders(res);
        try {
            const body = await getRequestBody(req);
            const email = body.email ? body.email.trim().toLowerCase() : '';
            const name = body.name ? body.name.trim() : 'Explorer';

            if (!email || !email.includes('@')) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: 'A valid email is required.' }));
                return;
            }

            const result = await sendWelcomeEmail(email, name);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                success: true,
                message: result.mode === 'resend'
                    ? `Welcome email sent successfully via Resend to ${email}!`
                    : (result.mode === 'smtp' ? `Welcome email delivered directly to ${email}!` : `Welcome email logged.`),
                resendId: result.resendId,
                resendError: result.resendError,
                previewUrl: result.previewUrl,
                mode: result.mode
            }));
        } catch (err) {
            console.error('[SEND WELCOME EMAIL ERROR]', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, error: 'Failed to send welcome email.' }));
        }
        return;
    }

    // 4. Default handler: Serve static files from the parent directory (workspace root)
    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon',
        '.webp': 'image/webp'
    };

    let filePath = path.join(__dirname, '..', pathname);
    const safePath = path.normalize(filePath);
    const rootPath = path.normalize(path.join(__dirname, '..'));

    // Prevent path traversal attacks
    if (!safePath.startsWith(rootPath)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('403 Forbidden');
        return;
    }

    fs.stat(safePath, (err, stats) => {
        let targetPath = safePath;
        if (!err && stats.isDirectory()) {
            targetPath = path.join(safePath, 'index.html');
        }

        fs.stat(targetPath, (error, fileStats) => {
            if (error) {
                if (error.code === 'ENOENT') {
                    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                    res.end('<h1>404 Not Found</h1>');
                } else {
                    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                    res.end(`Internal Server Error: ${error.code}`);
                }
                return;
            }

            const ext = path.extname(targetPath).toLowerCase();
            const contentType = mimeTypes[ext] || 'application/octet-stream';
            const etag = `W/"${fileStats.size.toString(16)}-${fileStats.mtimeMs.toString(16)}"`;
            
            if (req.headers['if-none-match'] === etag) {
                res.writeHead(304);
                res.end();
                return;
            }

            const headers = {
                'Content-Type': contentType,
                'ETag': etag,
                'Vary': 'Accept-Encoding',
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'SAMEORIGIN'
            };

            if (ext === '.html') {
                headers['Cache-Control'] = 'public, max-age=0, must-revalidate';
            } else if (ext === '.js' || ext === '.css') {
                headers['Cache-Control'] = 'public, max-age=604800, stale-while-revalidate=86400';
            } else {
                headers['Cache-Control'] = 'public, max-age=31536000, immutable';
            }

            const acceptEncoding = req.headers['accept-encoding'] || '';
            const isCompressible = /javascript|json|html|css|xml|svg|text/.test(contentType);

            if (isCompressible && acceptEncoding.includes('gzip')) {
                headers['Content-Encoding'] = 'gzip';
                res.writeHead(200, headers);
                const rawStream = fs.createReadStream(targetPath);
                const gzipStream = zlib.createGzip({ level: 6 });
                rawStream.pipe(gzipStream).pipe(res);
            } else {
                headers['Content-Length'] = fileStats.size;
                res.writeHead(200, headers);
                fs.createReadStream(targetPath).pipe(res);
            }
        });
    });
};

if (require.main === module) {
    const server = http.createServer(requestListener);
    server.listen(PORT, () => {
        console.log(`Google Places Proxy Service Layer is listening on http://localhost:${PORT}`);
    });
} else {
    // Export the listener for Vercel serverless environment
    module.exports = requestListener;
}
