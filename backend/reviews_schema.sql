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

-- (c) Service role has full management access (UPDATE, DELETE, etc.)
DROP POLICY IF EXISTS "Service role full access on website reviews" ON website_reviews;
CREATE POLICY "Service role full access on website reviews"
    ON website_reviews
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- 5. Seed initial verified reviews (only inserts if not already present)
INSERT INTO website_reviews (id, name, location, rating, tag, text, date, created_at)
VALUES
    (
        'rev_1791350015181_f3zyoh',
        'Darshan K',
        'Mysuru',
        5,
        'Weekend Getaway',
        'This travel guide website is truly amazing and super helpful for weekend trips.',
        '2026-10-07',
        '2026-10-07T05:13:35.182Z'
    ),
    (
        'rev_1791349285050_4hmtc8',
        'Gowtham N',
        'Karnataka, India',
        4,
        'Weekend Getaway',
        'Weekend Explore is a very helpful website for planning weekend trips. I really like the simple interface, destination suggestions, travel information, and useful itinerary features. It makes trip planning easier and more convenient.',
        '2026-10-07',
        '2026-10-07T05:01:25.050Z'
    ),
    (
        'rev_1791349050468_61rjn0',
        'Ananya Rao',
        'Mangaluru',
        5,
        'Nature & Beaches',
        'The beach recommendations and curated weekend spots are fantastic!',
        '2026-10-07',
        '2026-10-07T04:57:30.468Z'
    ),
    (
        'rev_init_1',
        'Kavya Ramesh',
        'Bangalore, Karnataka',
        5,
        'Solo Explorer',
        'Weekend Explore made discovering hidden places around Bangalore so effortless! The bus route tips and verified timings saved me so much time. Absolutely love the clean interface!',
        '2026-03-28',
        '2026-03-28T14:32:00.000Z'
    ),
    (
        'rev_init_2',
        'Aditya Hegde',
        'Mangaluru, Karnataka',
        5,
        'Coastal Getaways',
        'The Mangaluru beach recommendations and local seafood canteen suggestions were 100% spot-on. The AI agent even helped customize an itinerary within our ₹1,500 budget.',
        '2026-04-01',
        '2026-04-01T09:15:00.000Z'
    ),
    (
        'rev_init_3',
        'Pooja Shankar',
        'Mysuru, Karnataka',
        5,
        'Heritage & Culture',
        'Planning our family weekend in Mysuru was so seamless. The detailed category breakdown with temples, gardens, and heritage walks is the best I''ve seen on any travel site.',
        '2026-04-03',
        '2026-04-03T18:45:00.000Z'
    ),
    (
        'rev_init_4',
        'Rohan D''Souza',
        'Udupi, Karnataka',
        5,
        'Weekend Roadtrips',
        'Super smooth website! Very responsive on mobile and gives accurate recommendations without useless clutter. Highly recommended for anyone exploring South India.',
        '2026-04-05',
        '2026-04-05T11:20:00.000Z'
    )
ON CONFLICT (id) DO NOTHING;
