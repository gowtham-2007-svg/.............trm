/**
 * Sync script to push all local database records (reviews and analytics) to Supabase cloud database.
 * Run directly via: node backend/sync_to_supabase.js
 */

const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// Load environment variables
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

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey || supabaseUrl.includes('YOUR_SUPABASE') || supabaseKey.includes('YOUR_SUPABASE')) {
    console.error('❌ Supabase credentials are missing or placeholder in .env!');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function syncReviews() {
    console.log('\n========================================');
    console.log('🔄 SYNCING WEBSITE REVIEWS TO SUPABASE');
    console.log('========================================');

    const reviewsPath = path.join(__dirname, 'reviews_db.json');
    if (!fs.existsSync(reviewsPath)) {
        console.warn('⚠️ reviews_db.json not found.');
        return;
    }

    const reviews = JSON.parse(fs.readFileSync(reviewsPath, 'utf8'));
    console.log(`Found ${reviews.length} local reviews in reviews_db.json.`);

    let successCount = 0;
    for (const r of reviews) {
        try {
            const { error } = await supabase
                .from('website_reviews')
                .upsert({
                    id: r.id,
                    name: r.name,
                    location: r.location || 'Karnataka, India',
                    rating: Number(r.rating) || 5,
                    tag: r.tag || 'Explorer',
                    text: r.text,
                    date: r.date || (r.createdAt ? r.createdAt.split('T')[0] : new Date().toISOString().split('T')[0]),
                    created_at: r.createdAt || r.created_at || new Date().toISOString()
                }, { onConflict: 'id' });

            if (error) {
                console.error(`  ❌ Failed to sync review ${r.id} (${r.name}):`, error.message);
            } else {
                console.log(`  ✅ Synced review: ${r.name} (${r.rating}★)`);
                successCount++;
            }
        } catch (err) {
            console.error(`  ❌ Exception syncing review ${r.id}:`, err.message);
        }
    }

    console.log(`🎉 Successfully synced ${successCount}/${reviews.length} reviews to Supabase.`);
}

async function syncAnalytics() {
    console.log('\n========================================');
    console.log('🔄 SYNCING ANALYTICS TO SUPABASE');
    console.log('========================================');

    const analyticsPath = path.join(__dirname, 'analytics_db.json');
    if (!fs.existsSync(analyticsPath)) {
        console.warn('⚠️ analytics_db.json not found.');
        return;
    }

    const data = JSON.parse(fs.readFileSync(analyticsPath, 'utf8'));
    const sessions = data.sessions || [];
    const pageViews = data.pageViews || [];

    console.log(`Found ${sessions.length} sessions and ${pageViews.length} page views in analytics_db.json.`);

    // 1. Sync Sessions
    let sessionCount = 0;
    const batchSize = 25;
    for (let i = 0; i < sessions.length; i += batchSize) {
        const batch = sessions.slice(i, i + batchSize).map(s => ({
            session_id: s.session_id,
            user_id: s.user_id || null,
            user_email: s.user_email || null,
            user_name: s.user_name || null,
            device_type: s.device_type || 'Desktop',
            browser: s.browser || 'Unknown',
            os: s.os || 'Unknown',
            started_at: s.started_at,
            last_active_at: s.last_active_at || s.started_at,
            duration_seconds: Number(s.duration_seconds) || 0
        }));

        try {
            const { error } = await supabase
                .from('analytics_sessions')
                .upsert(batch, { onConflict: 'session_id' });

            if (error) {
                console.error(`  ❌ Failed sessions batch ${i}-${i + batch.length}:`, error.message);
            } else {
                sessionCount += batch.length;
                console.log(`  ✅ Synced sessions ${sessionCount}/${sessions.length}`);
            }
        } catch (err) {
            console.error(`  ❌ Exception in sessions batch:`, err.message);
        }
    }

    // 2. Sync Page Views
    let pvCount = 0;
    const pvBatchSize = 50;
    for (let i = 0; i < pageViews.length; i += pvBatchSize) {
        const batch = pageViews.slice(i, i + pvBatchSize).map(pv => ({
            session_id: pv.session_id,
            path: pv.path,
            title: pv.title || '',
            referrer: pv.referrer || '',
            viewed_at: pv.viewed_at
        }));

        try {
            const { error } = await supabase
                .from('analytics_page_views')
                .insert(batch);

            if (error) {
                console.error(`  ❌ Failed page views batch ${i}-${i + batch.length}:`, error.message);
            } else {
                pvCount += batch.length;
                console.log(`  ✅ Synced page views ${pvCount}/${pageViews.length}`);
            }
        } catch (err) {
            console.error(`  ❌ Exception in page views batch:`, err.message);
        }
    }

    console.log(`🎉 Analytics sync complete: ${sessionCount} sessions, ${pvCount} page views synced to Supabase.`);
}

async function main() {
    try {
        await syncReviews();
        await syncAnalytics();
        console.log('\n✨ ALL DATA SYNCED TO SUPABASE SUCCESSFULLY!\n');
    } catch (err) {
        console.error('Fatal error during sync:', err);
    }
}

main();

