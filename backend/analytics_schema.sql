-- Database schema for Weekend Explore analytics tracking
-- Copy and run this script in your Supabase SQL Editor:
-- 1. Open Supabase Dashboard: https://supabase.com/dashboard
-- 2. Select your project and navigate to "SQL Editor" in the left sidebar
-- 3. Click "New query", paste the entire contents of this file, and click "Run".

-- 1. Create analytics sessions table (using TEXT session_id to accommodate standard UUIDs and admin session IDs)
CREATE TABLE IF NOT EXISTS analytics_sessions (
    session_id TEXT PRIMARY KEY,
    user_id TEXT,
    user_email TEXT,
    user_name TEXT,
    device_type TEXT DEFAULT 'Desktop',
    browser TEXT DEFAULT 'Unknown',
    os TEXT DEFAULT 'Unknown',
    started_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    last_active_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    duration_seconds INTEGER DEFAULT 0 NOT NULL
);

-- 2. Create analytics page views table
CREATE TABLE IF NOT EXISTS analytics_page_views (
    id BIGSERIAL PRIMARY KEY,
    session_id TEXT REFERENCES analytics_sessions(session_id) ON DELETE CASCADE,
    path TEXT NOT NULL,
    title TEXT,
    referrer TEXT,
    viewed_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Create indexes for performance optimization
CREATE INDEX IF NOT EXISTS idx_sessions_started_at ON analytics_sessions(started_at DESC);
CREATE INDEX IF NOT EXISTS idx_sessions_last_active ON analytics_sessions(last_active_at DESC);
CREATE INDEX IF NOT EXISTS idx_page_views_viewed_at ON analytics_page_views(viewed_at DESC);
CREATE INDEX IF NOT EXISTS idx_page_views_session_id ON analytics_page_views(session_id);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE analytics_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_page_views ENABLE ROW LEVEL SECURITY;

-- 5. RLS Policies for analytics_sessions:
DROP POLICY IF EXISTS "Public can insert analytics sessions" ON analytics_sessions;
DROP POLICY IF EXISTS insert_session_policy ON analytics_sessions;
CREATE POLICY "Public can insert analytics sessions"
    ON analytics_sessions
    FOR INSERT
    TO public
    WITH CHECK (true);

DROP POLICY IF EXISTS "Public can update analytics sessions" ON analytics_sessions;
DROP POLICY IF EXISTS update_session_policy ON analytics_sessions;
CREATE POLICY "Public can update analytics sessions"
    ON analytics_sessions
    FOR UPDATE
    TO public
    USING (true)
    WITH CHECK (true);

DROP POLICY IF EXISTS "Public can view analytics sessions" ON analytics_sessions;
DROP POLICY IF EXISTS select_session_policy ON analytics_sessions;
CREATE POLICY "Public can view analytics sessions"
    ON analytics_sessions
    FOR SELECT
    TO public
    USING (true);

DROP POLICY IF EXISTS "Service role full access on analytics sessions" ON analytics_sessions;
CREATE POLICY "Service role full access on analytics sessions"
    ON analytics_sessions
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- 6. RLS Policies for analytics_page_views:
DROP POLICY IF EXISTS "Public can insert analytics page views" ON analytics_page_views;
DROP POLICY IF EXISTS insert_page_view_policy ON analytics_page_views;
CREATE POLICY "Public can insert analytics page views"
    ON analytics_page_views
    FOR INSERT
    TO public
    WITH CHECK (true);

DROP POLICY IF EXISTS "Public can view analytics page views" ON analytics_page_views;
DROP POLICY IF EXISTS select_page_view_policy ON analytics_page_views;
CREATE POLICY "Public can view analytics page views"
    ON analytics_page_views
    FOR SELECT
    TO public
    USING (true);

DROP POLICY IF EXISTS "Service role full access on analytics page views" ON analytics_page_views;
CREATE POLICY "Service role full access on analytics page views"
    ON analytics_page_views
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- 7. Secure RPC function to fetch aggregated analytics data
-- Running with SECURITY DEFINER permits RLS bypass.
-- Token-based authorization ensures only authorized callers can query this function.
CREATE OR REPLACE FUNCTION get_admin_analytics_summary(secret_token text, filter_range text)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    expected_token text := 'we_sec_analytics_7a8b9c0d1e2f3a4b'; -- Secure backend token
    result json;
    start_date timestamp with time zone;
    total_users_count bigint;
    total_visits_count bigint;
    daily_visitors_count bigint;
    active_users_count bigint;
    avg_duration_sec numeric;
    most_visited_pages_json json;
    device_types_json json;
    trend_labels text[];
    trend_visits bigint[];
    trend_visitors bigint[];
    trend_data_json json;
BEGIN
    -- Validate secret token
    IF secret_token IS NULL OR secret_token != expected_token THEN
        RAISE EXCEPTION 'Unauthorized: Invalid security token';
    END IF;

    -- Determine time window
    IF filter_range = 'today' THEN
        start_date := date_trunc('day', timezone('utc'::text, now()));
    ELSIF filter_range = '7days' THEN
        start_date := date_trunc('day', timezone('utc'::text, now()) - interval '7 days');
    ELSIF filter_range = '30days' THEN
        start_date := date_trunc('day', timezone('utc'::text, now()) - interval '30 days');
    ELSE
        start_date := '1970-01-01 00:00:00+00'::timestamp with time zone; -- All time
    END IF;

    -- Total Unique Users (with user_id or unique session_id)
    SELECT count(DISTINCT COALESCE(user_id, session_id)) INTO total_users_count
    FROM analytics_sessions
    WHERE started_at >= start_date;

    -- Total Page Views (Visits)
    SELECT count(*) INTO total_visits_count
    FROM analytics_page_views
    WHERE viewed_at >= start_date;

    -- Daily Visitors (Average unique visitors per day in the range)
    IF filter_range = 'today' THEN
        SELECT count(DISTINCT COALESCE(user_id, session_id)) INTO daily_visitors_count
        FROM analytics_sessions
        WHERE started_at >= start_date;
    ELSE
        SELECT COALESCE(avg(daily_count), 0)::bigint INTO daily_visitors_count
        FROM (
            SELECT count(DISTINCT COALESCE(user_id, session_id)) as daily_count
            FROM analytics_sessions
            WHERE started_at >= start_date
            GROUP BY date_trunc('day', started_at)
        ) sub;
    END IF;

    -- Active Users (Sessions active in the last 5 minutes)
    SELECT count(DISTINCT COALESCE(user_id, session_id)) INTO active_users_count
    FROM analytics_sessions
    WHERE last_active_at >= (timezone('utc'::text, now()) - interval '5 minutes');

    -- Average Session Duration
    SELECT COALESCE(avg(duration_seconds), 0)::numeric INTO avg_duration_sec
    FROM analytics_sessions
    WHERE started_at >= start_date AND duration_seconds > 0;

    -- Most Visited Pages
    SELECT json_agg(t) INTO most_visited_pages_json
    FROM (
        SELECT path, count(*) as views, count(DISTINCT session_id) as unique_visitors
        FROM analytics_page_views
        WHERE viewed_at >= start_date
        GROUP BY path
        ORDER BY views DESC
        LIMIT 10
    ) t;

    -- Device Types breakdown
    SELECT json_agg(t) INTO device_types_json
    FROM (
        SELECT COALESCE(device_type, 'Desktop') as device, count(*) as count
        FROM analytics_sessions
        WHERE started_at >= start_date
        GROUP BY device_type
        ORDER BY count DESC
    ) t;

    -- Analytics Trend Data (Visits/Visitors grouped by day)
    IF filter_range = 'today' THEN
        -- Trend grouped by hour
        SELECT 
            array_agg(to_char(g, 'HH24:00')),
            array_agg(COALESCE(v.views, 0)),
            array_agg(COALESCE(v.visitors, 0))
        INTO trend_labels, trend_visits, trend_visitors
        FROM generate_series(
            date_trunc('day', timezone('utc'::text, now())),
            date_trunc('hour', timezone('utc'::text, now())),
            interval '1 hour'
        ) g
        LEFT JOIN (
            SELECT 
                date_trunc('hour', viewed_at) as hr, 
                count(*) as views, 
                count(DISTINCT session_id) as visitors
            FROM analytics_page_views
            WHERE viewed_at >= date_trunc('day', timezone('utc'::text, now()))
            GROUP BY 1
        ) v ON v.hr = g;
    ELSE
        -- Trend grouped by day
        SELECT 
            array_agg(to_char(g, 'YYYY-MM-DD')),
            array_agg(COALESCE(v.views, 0)),
            array_agg(COALESCE(v.visitors, 0))
        INTO trend_labels, trend_visits, trend_visitors
        FROM generate_series(
            CASE 
                WHEN filter_range = '7days' THEN date_trunc('day', timezone('utc'::text, now()) - interval '7 days')
                WHEN filter_range = '30days' THEN date_trunc('day', timezone('utc'::text, now()) - interval '30 days')
                ELSE date_trunc('day', COALESCE((SELECT min(started_at) FROM analytics_sessions), timezone('utc'::text, now())))
            END,
            date_trunc('day', timezone('utc'::text, now())),
            interval '1 day'
        ) g
        LEFT JOIN (
            SELECT 
                date_trunc('day', viewed_at) as dy, 
                count(*) as views, 
                count(DISTINCT session_id) as visitors
            FROM analytics_page_views
            WHERE viewed_at >= start_date
            GROUP BY 1
        ) v ON v.dy = g;
    END IF;

    trend_data_json := json_build_object(
        'labels', COALESCE(trend_labels, '{}'::text[]),
        'visits', COALESCE(trend_visits, '{}'::bigint[]),
        'visitors', COALESCE(trend_visitors, '{}'::bigint[])
    );

    -- Compile results into JSON
    result := json_build_object(
        'total_users', total_users_count,
        'total_visits', total_visits_count,
        'daily_visitors', daily_visitors_count,
        'active_users', active_users_count,
        'average_time_spent', round(avg_duration_sec, 1),
        'most_visited_pages', COALESCE(most_visited_pages_json, '[]'::json),
        'device_types', COALESCE(device_types_json, '[]'::json),
        'trends', trend_data_json
    );

    RETURN result;
END;
$$;
