-- ==============================================================================
-- Weekend Explore — Website Reviews Database Schema for Supabase
-- ==============================================================================
-- How to apply:
-- 1. Open your Supabase Dashboard: https://supabase.com/dashboard
-- 2. Select your project and navigate to the "SQL Editor" in the left sidebar.
-- 3. Click "New query", paste the entire contents of this file, and click "Run".
-- ==============================================================================

-- 1. Create the website_reviews table
CREATE TABLE IF NOT EXISTS website_reviews (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    location TEXT DEFAULT 'Karnataka, India',
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    tag TEXT DEFAULT 'Explorer',
    text TEXT NOT NULL,
    date TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create indexes for fast lookup and chronological sorting
CREATE INDEX IF NOT EXISTS idx_website_reviews_created_at ON website_reviews(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_website_reviews_rating ON website_reviews(rating);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE website_reviews ENABLE ROW LEVEL SECURITY;

-- 4. Set RLS Policies so:
-- (a) Anyone can view all reviews (SELECT)
DROP POLICY IF EXISTS "Public can view website reviews" ON website_reviews;
CREATE POLICY "Public can view website reviews"
    ON website_reviews
    FOR SELECT
    TO public
    USING (true);

-- (b) Anyone (anon or logged-in) can submit/publish a review (INSERT)
DROP POLICY IF EXISTS "Public can insert website reviews" ON website_reviews;
CREATE POLICY "Public can insert website reviews"
    ON website_reviews
    FOR INSERT
    TO public
    WITH CHECK (true);

-- (c) Anyone can delete reviews
DROP POLICY IF EXISTS "Public can delete website reviews" ON website_reviews;
CREATE POLICY "Public can delete website reviews"
    ON website_reviews
    FOR DELETE
    TO public
    USING (true);

-- (d) Service role has full management access (UPDATE, DELETE, etc.)
DROP POLICY IF EXISTS "Service role full access on website reviews" ON website_reviews;
CREATE POLICY "Service role full access on website reviews"
    ON website_reviews
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- 5. Command to clear all reviews at any time:
-- TRUNCATE TABLE website_reviews;
