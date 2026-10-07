const fs = require('fs');
const path = require('path');

module.exports = function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const dbPath = path.join(process.cwd(), 'backend', 'reviews_db.json');
  let reviews = [];
  try {
    if (fs.existsSync(dbPath)) {
      const raw = fs.readFileSync(dbPath, 'utf8');
      reviews = JSON.parse(raw);
    }
  } catch (err) {
    console.error('[API REVIEWS] Error reading reviews DB:', err);
  }

  const total = reviews.length;
  const ratingDistribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  let sumRating = 0;
  reviews.forEach(r => {
    const rating = Math.max(1, Math.min(5, Math.round(Number(r.rating) || 5)));
    ratingDistribution[rating] = (ratingDistribution[rating] || 0) + 1;
    sumRating += Number(r.rating) || 5;
  });
  const overallRating = total ? Math.round((sumRating / total) * 10) / 10 : 5.0;

  const sortedReviews = [...reviews].sort((a, b) => {
    const da = new Date(b.createdAt || b.date).getTime();
    const db = new Date(a.createdAt || a.date).getTime();
    return da - db;
  });

  if (req.method === 'GET') {
    res.status(200).json({
      success: true,
      reviews: sortedReviews,
      totalReviews: total,
      overallRating,
      ratingDistribution,
    });
    return;
  }

  if (req.method === 'POST') {
    try {
      const body = req.body || {};
      const name = (body.name || '').trim();
      const rating = Math.max(1, Math.min(5, Math.round(Number(body.rating) || 5)));
      const text = (body.text || '').trim();
      const location = (body.location || 'Karnataka, India').trim();
      const tag = (body.tag || 'Explorer').trim();

      if (!name || !text) {
        res.status(400).json({ success: false, error: 'Name and review text are required.' });
        return;
      }

      const wordCount = text.split(/\s+/).filter(Boolean).length;
      if (wordCount < 10) {
        res.status(400).json({ success: false, error: `Review must contain at least 10 words (currently ${wordCount} words).` });
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

      sortedReviews.unshift(newReview);
      try {
        fs.writeFileSync(dbPath, JSON.stringify(sortedReviews, null, 2), 'utf8');
      } catch (writeErr) {
        console.warn('[API REVIEWS] Could not write to disk in serverless:', writeErr.message);
      }

      res.status(201).json({
        success: true,
        message: 'Thank you! Your review has been published.',
        newReview,
        reviews: sortedReviews,
        totalReviews: sortedReviews.length,
        overallRating,
        ratingDistribution
      });
    } catch (err) {
      res.status(500).json({ success: false, error: 'Failed to submit review.' });
    }
    return;
  }

  res.status(405).json({ success: false, error: 'Method not allowed' });
};

