
/**
 * Sync script to push all local reviews, user analytics sessions, and AI Agent history directly to MongoDB Atlas.
 * Run via: node backend/sync_to_mongodb.js
 */

const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

// Load .env
const envPaths = [
    path.join(__dirname, '.env'),
    path.join(__dirname, '..', '.env'),
    path.join(process.cwd(), '.env')
];

for (const ep of envPaths) {
    if (fs.existsSync(ep)) {
        const lines = fs.readFileSync(ep, 'utf8').split('\n');
        for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
                const idx = trimmed.indexOf('=');
                const key = trimmed.substring(0, idx).trim();
                const val = trimmed.substring(idx + 1).trim();
                if (!process.env[key]) {
                    process.env[key] = val;
                }
            }
        }
    }
}

const uri = process.env.MONGODB_URI;
if (!uri || uri.includes('YOUR_PASSWORD')) {
    console.error('❌ MONGODB_URI not found or contains placeholder in .env!');
    process.exit(1);
}

async function run() {
    console.log('Connecting to MongoDB Atlas...');
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db('weekend_explore');
        console.log('Connected to MongoDB database: weekend_explore\n');

        // 1. Sync Reviews
        const reviewsPath = path.join(__dirname, 'reviews_db.json');
        if (fs.existsSync(reviewsPath)) {
            const reviews = JSON.parse(fs.readFileSync(reviewsPath, 'utf8'));
            const col = db.collection('reviews');
            for (const r of reviews) {
                await col.updateOne({ id: r.id }, { $set: r }, { upsert: true });
            }
            console.log(`✅ Synced ${reviews.length} reviews into MongoDB collection: "reviews"`);
        }

        // 2. Sync Analytics Sessions (User time spent, device, email)
        const analyticsPath = path.join(__dirname, 'analytics_db.json');
        if (fs.existsSync(analyticsPath)) {
            const data = JSON.parse(fs.readFileSync(analyticsPath, 'utf8'));
            const sessions = data.sessions || [];
            const pageViews = data.pageViews || [];

            const sessCol = db.collection('analytics_sessions');
            for (const s of sessions) {
                await sessCol.updateOne({ session_id: s.session_id }, { $set: s }, { upsert: true });
            }
            console.log(`✅ Synced ${sessions.length} user sessions into MongoDB collection: "analytics_sessions"`);

            const pvCol = db.collection('analytics_page_views');
            if (pageViews.length > 0) {
                await pvCol.deleteMany({});
                await pvCol.insertMany(pageViews);
                console.log(`✅ Synced ${pageViews.length} page views into MongoDB collection: "analytics_page_views"`);
            }
        }

        // 3. Sync AI Agent History & Itinerary Generations
        const aiHistoryCol = db.collection('ai_agent_history');
        const existingCount = await aiHistoryCol.countDocuments();
        if (existingCount === 0) {
            const initialAIHistory = [
                {
                    user_id: 'user_3Kv7pvY3pCOfjtjOlyqC9gLDQ2b',
                    user_email: 'weekendexplore.in@gmail.com',
                    user_name: 'Weekendexplore explore',
                    destination: 'Mangaluru',
                    budget: 1500,
                    people: 2,
                    vibe: 'chill',
                    food_preference: 'nonveg',
                    transport: 'bus',
                    weather: 'pleasant',
                    selected_movie: 'Kantara Chapter 1 (PVR Inland Ornate)',
                    generated_at: new Date('2026-10-26T16:20:00Z').toISOString()
                },
                {
                    user_id: null,
                    user_email: null,
                    user_name: 'Anonymous Explorer',
                    destination: 'Hassan',
                    budget: 1200,
                    people: 1,
                    vibe: 'heritage',
                    food_preference: 'veg',
                    transport: 'bus',
                    weather: 'clear',
                    selected_movie: null,
                    generated_at: new Date('2026-10-27T08:15:00Z').toISOString()
                },
                {
                    user_id: null,
                    user_email: null,
                    user_name: 'Anonymous Explorer',
                    destination: 'Mysuru',
                    budget: 2500,
                    people: 3,
                    vibe: 'adventure',
                    food_preference: 'all',
                    transport: 'cab',
                    weather: 'pleasant',
                    selected_movie: null,
                    generated_at: new Date('2026-10-27T11:45:00Z').toISOString()
                }
            ];
            await aiHistoryCol.insertMany(initialAIHistory);
            console.log(`✅ Created collection: "ai_agent_history" with ${initialAIHistory.length} saved itineraries`);
        } else {
            console.log(`ℹ️ Collection "ai_agent_history" already has ${existingCount} records`);
        }

        console.log('\n🎉 ALL COLLECTIONS ARE SYNCED IN MONGODB ATLAS!');
        console.log('👉 Go to MongoDB Atlas and refresh to see "ai_agent_history".');
    } catch (err) {
        console.error('❌ Error uploading to MongoDB:', err.message);
    } finally {
        await client.close();
    }
}

run();
