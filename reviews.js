/**
 * Weekend Explore — Website Reviews & Ratings Module
 * Handles fetching, displaying in a dedicated interactive modal, filtering, and submitting reviews.
 */

(function () {
    'use strict';

    let reviewsData = {
        reviews: [],
        totalReviews: 0,
        overallRating: 5.0,
        ratingDistribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
    };

    let activeFilter = 'all'; // 'all', '5', '4', 'latest'
    let selectedRating = 5;

    const RATING_DESCRIPTIONS = {
        1: "Needs Improvement 😕",
        2: "Fair Experience 🙂",
        3: "Good & Useful 👍",
        4: "Very Good & Helpful 🌟",
        5: "Exceptional! Best Travel Guide 🚀"
    };

    // Helper: Star SVG generator
    function getStarsSvg(rating, max = 5, size = 16) {
        let starsHtml = '';
        const numRating = Math.round(rating);
        for (let i = 1; i <= max; i++) {
            const isFilled = i <= numRating;
            starsHtml += `
                <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${isFilled ? '#facc15' : 'none'}" stroke="#facc15" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            `;
        }
        return starsHtml;
    }

    // Helper: Format Date
    function formatDate(dateStr) {
        if (!dateStr) return 'Recently';
        try {
            const d = new Date(dateStr);
            if (isNaN(d.getTime())) return dateStr;
            return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        } catch (e) {
            return dateStr;
        }
    }

    // Helper: Get user's logged in name from Clerk if available
    function getLoggedInUserName() {
        try {
            if (window.Clerk && window.Clerk.user) {
                const u = window.Clerk.user;
                if (u.fullName && u.fullName.trim()) return u.fullName.trim();
                if (u.firstName) return u.firstName.trim();
                const email = (u.primaryEmailAddress && u.primaryEmailAddress.emailAddress)
                    || (u.emailAddresses && u.emailAddresses[0] ? u.emailAddresses[0].emailAddress : '');
                if (email) {
                    const raw = email.split('@')[0].replace(/[._0-9]/g, ' ').trim();
                    return raw.charAt(0).toUpperCase() + raw.slice(1);
                }
            }
        } catch (e) {}
        return '';
    }

    // Fetch reviews from backend API
    async function fetchReviews() {
        try {
            const res = await fetch('/api/reviews');
            if (res.ok) {
                const data = await res.json();
                if (data.success) {
                    reviewsData = data;
                    return reviewsData;
                }
            }
        } catch (err) {
            console.warn('[REVIEWS] Could not fetch live reviews from server, using local state:', err);
        }
        return reviewsData;
    }

    // Generate Reviews Modal Body HTML
    function generateModalContentHTML() {
        const { reviews, totalReviews, overallRating, ratingDistribution } = reviewsData;
        const total = totalReviews || reviews.length || 0;
        const rating = overallRating ? overallRating.toFixed(1) : "5.0";

        // Filter reviews according to active filter
        let filteredReviews = [...reviews];
        if (activeFilter === '5') {
            filteredReviews = filteredReviews.filter(r => Math.round(Number(r.rating)) === 5);
        } else if (activeFilter === '4') {
            filteredReviews = filteredReviews.filter(r => Math.round(Number(r.rating)) === 4);
        } else if (activeFilter === 'latest') {
            filteredReviews.sort((a, b) => new Date(b.createdAt || b.date).getTime() - new Date(a.createdAt || a.date).getTime());
        }

        return `
            <div class="reviews-modal-container">
                <!-- Summary Banner -->
                <div class="reviews-summary-card">
                    <div class="reviews-score-box">
                        <div class="reviews-big-score">${rating}</div>
                        <div class="reviews-stars-row">
                            ${getStarsSvg(parseFloat(rating), 5, 22)}
                        </div>
                        <div class="reviews-total-count">Based on <strong>${total} verified reviews</strong></div>
                    </div>

                    <div class="reviews-breakdown-list">
                        ${[5, 4, 3, 2, 1].map(stars => {
                            const count = (ratingDistribution && ratingDistribution[stars]) || 0;
                            const pct = total > 0 ? Math.round((count / total) * 100) : (stars === 5 ? 100 : 0);
                            return `
                                <div class="reviews-bar-row">
                                    <span class="reviews-bar-star-label">${stars} <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                                    <div class="reviews-bar-track">
                                        <div class="reviews-bar-fill" style="width: ${pct}%;"></div>
                                    </div>
                                    <span class="reviews-bar-count">${count}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>

                    <div class="reviews-action-box">
                        <button type="button" class="reviews-write-btn" id="modal-write-review-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                            Write a Review
                        </button>
                    </div>
                </div>

                <!-- Write Review Form Container (Hidden by default, toggled on click) -->
                <div class="review-form-collapsible" id="review-form-collapsible" style="display: none;">
                    <div class="review-form-card">
                        <div class="review-form-card-header">
                            <h4>Share Your Review & Experience</h4>
                            <button type="button" class="review-form-cancel-btn" id="cancel-write-review-btn">Cancel</button>
                        </div>

                        <!-- Interactive Star Rating Picker -->
                        <div class="review-star-picker-wrapper">
                            <div class="review-star-picker" id="review-star-picker">
                                ${[1, 2, 3, 4, 5].map(star => `
                                    <button type="button" class="review-star-btn ${star <= selectedRating ? 'active' : ''}" data-star="${star}" aria-label="${star} Star">
                                        <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                    </button>
                                `).join('')}
                            </div>
                            <div class="review-star-label" id="review-star-label">${RATING_DESCRIPTIONS[selectedRating]}</div>
                        </div>

                        <form id="website-review-form">
                            <div class="review-form-grid-2">
                                <div class="review-form-group">
                                    <label class="review-form-label" for="review-user-name">Your Name *</label>
                                    <input type="text" id="review-user-name" class="review-form-input" placeholder="e.g. Gowtham" required>
                                </div>
                                <div class="review-form-group">
                                    <label class="review-form-label" for="review-user-location">Your City</label>
                                    <input type="text" id="review-user-location" class="review-form-input" placeholder="e.g. Bangalore, KA" value="Karnataka, India">
                                </div>
                            </div>

                            <div class="review-form-group">
                                <label class="review-form-label" for="review-travel-tag">Travel Style / Category</label>
                                <select id="review-travel-tag" class="review-form-select">
                                    <option value="Weekend Getaway">Weekend Getaway</option>
                                    <option value="Solo Explorer">Solo Explorer</option>
                                    <option value="Family Trip">Family Trip</option>
                                    <option value="Foodie & Canteens">Foodie & Canteens</option>
                                    <option value="Nature & Beaches">Nature & Beaches</option>
                                    <option value="Budget Traveler">Budget Traveler</option>
                                </select>
                            </div>

                            <div class="review-form-group">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
                                    <label class="review-form-label" for="review-text-input">Your Review (10 words minimum) *</label>
                                    <span class="review-word-counter" id="review-word-counter" style="font-size: 0.78rem; font-weight: 600; color: #94a3b8;">0 / 10 words</span>
                                </div>
                                <textarea id="review-text-input" class="review-form-textarea" placeholder="Share your experience in at least 10 words (e.g. how the destination categories, food recommendations, or trip planner helped you)..." required></textarea>
                                <span class="review-word-error" id="review-word-error" style="font-size: 0.78rem; color: #f87171; display: none; margin-top: 4px; font-weight: 500;">Please write at least 10 words before submitting.</span>
                            </div>

                            <button type="submit" class="review-submit-btn" id="review-submit-btn">
                                <span id="review-submit-btn-text">Publish Review</span>
                            </button>
                        </form>
                    </div>
                </div>

                <!-- Filter Chips & Live Indicator -->
                <div class="reviews-filter-bar">
                    <div class="reviews-filter-chips">
                        <button type="button" class="reviews-filter-chip ${activeFilter === 'all' ? 'active' : ''}" data-filter="all">All Reviews (${total})</button>
                        <button type="button" class="reviews-filter-chip ${activeFilter === '5' ? 'active' : ''}" data-filter="5">⭐⭐⭐⭐⭐ 5 Stars</button>
                        <button type="button" class="reviews-filter-chip ${activeFilter === '4' ? 'active' : ''}" data-filter="4">⭐⭐⭐⭐ 4 Stars</button>
                        <button type="button" class="reviews-filter-chip ${activeFilter === 'latest' ? 'active' : ''}" data-filter="latest">Latest First</button>
                    </div>
                    <div class="reviews-live-indicator">
                        <span class="reviews-live-dot"></span>
                        Live Community Feed
                    </div>
                </div>

                <!-- Review Cards Grid -->
                <div class="reviews-grid" id="reviews-feed-grid">
                    ${filteredReviews.length > 0 ? filteredReviews.map((rev, idx) => {
                        const initial = (rev.name || 'E').charAt(0).toUpperCase();
                        return `
                            <div class="review-card" style="animation-delay: ${idx * 50}ms;">
                                <div class="review-card-header">
                                    <div class="review-avatar">${initial}</div>
                                    <div class="review-author-meta">
                                        <div class="review-author-name">
                                            ${escapeHtml(rev.name)}
                                            <span class="review-verified-badge" title="Verified Traveler">
                                                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                                            </span>
                                        </div>
                                        <div class="review-author-location">${escapeHtml(rev.location || 'Karnataka, India')}</div>
                                    </div>
                                    <div class="review-rating-badge">
                                        ${getStarsSvg(rev.rating, 1, 14)}
                                        <span>${Number(rev.rating).toFixed(1)}</span>
                                    </div>
                                </div>

                                <p class="review-text">"${escapeHtml(rev.text)}"</p>

                                <div class="review-card-footer">
                                    <span class="review-tag-pill">${escapeHtml(rev.tag || 'Explorer')}</span>
                                    <span class="review-date">${formatDate(rev.date || rev.createdAt)}</span>
                                </div>
                            </div>
                        `;
                    }).join('') : `
                        <div class="reviews-empty-state" style="grid-column: 1 / -1;">
                            <p>No reviews found matching this filter. Be the first to share your experience!</p>
                        </div>
                    `}
                </div>
            </div>
        `;
    }

    // Open dedicated Reviews Modal
    async function openReviewsModal() {
        await fetchReviews();

        let modalOverlay = document.getElementById('website-reviews-modal-overlay');
        if (!modalOverlay) {
            modalOverlay = document.createElement('div');
            modalOverlay.id = 'website-reviews-modal-overlay';
            modalOverlay.className = 'website-reviews-modal-overlay';
            document.body.appendChild(modalOverlay);
        }

        modalOverlay.innerHTML = `
            <div class="website-reviews-modal-shell">
                <header class="website-reviews-modal-header">
                    <div class="reviews-header-title-box">
                        <span class="reviews-badge-pill">COMMUNITY FEEDBACK</span>
                        <h2 class="reviews-modal-title">Website Reviews & Ratings</h2>
                    </div>
                    <button type="button" class="website-reviews-modal-close" id="reviews-modal-close-btn" aria-label="Close">
                        ✕
                    </button>
                </header>
                <div class="website-reviews-modal-body" id="website-reviews-modal-body">
                    ${generateModalContentHTML()}
                </div>
            </div>
        `;

        requestAnimationFrame(() => {
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        bindModalEvents();
    }

    function closeReviewsModal() {
        const modalOverlay = document.getElementById('website-reviews-modal-overlay');
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
            setTimeout(() => {
                modalOverlay.remove();
            }, 300);
        }
    }

    function bindModalEvents() {
        const modalOverlay = document.getElementById('website-reviews-modal-overlay');
        const closeBtn = document.getElementById('reviews-modal-close-btn');
        const writeBtn = document.getElementById('modal-write-review-btn');
        const cancelBtn = document.getElementById('cancel-write-review-btn');
        const formContainer = document.getElementById('review-form-collapsible');
        const form = document.getElementById('website-review-form');
        const starBtns = document.querySelectorAll('.review-star-btn');
        const starLabel = document.getElementById('review-star-label');
        const nameInput = document.getElementById('review-user-name');

        if (closeBtn) {
            closeBtn.addEventListener('click', closeReviewsModal);
        }

        if (modalOverlay) {
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) closeReviewsModal();
            });
        }

        // Toggle review form
        if (writeBtn && formContainer) {
            writeBtn.addEventListener('click', () => {
                formContainer.style.display = 'block';
                if (nameInput && !nameInput.value) {
                    const loggedName = getLoggedInUserName();
                    if (loggedName) nameInput.value = loggedName;
                }
                formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        }

        if (cancelBtn && formContainer) {
            cancelBtn.addEventListener('click', () => {
                formContainer.style.display = 'none';
            });
        }

        // Star picker hover & click
        starBtns.forEach(btn => {
            const starVal = Number(btn.getAttribute('data-star'));

            btn.addEventListener('mouseenter', () => {
                starBtns.forEach(b => {
                    const val = Number(b.getAttribute('data-star'));
                    b.classList.toggle('hovered', val <= starVal);
                });
                if (starLabel) starLabel.textContent = RATING_DESCRIPTIONS[starVal];
            });

            btn.addEventListener('mouseleave', () => {
                starBtns.forEach(b => b.classList.remove('hovered'));
                if (starLabel) starLabel.textContent = RATING_DESCRIPTIONS[selectedRating];
            });

            btn.addEventListener('click', () => {
                selectedRating = starVal;
                starBtns.forEach(b => {
                    const val = Number(b.getAttribute('data-star'));
                    b.classList.toggle('active', val <= selectedRating);
                });
                if (starLabel) starLabel.textContent = RATING_DESCRIPTIONS[selectedRating];
            });
        });

        // Filter chips click
        const chips = document.querySelectorAll('.reviews-filter-chip');
        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                const filter = chip.getAttribute('data-filter');
                if (filter) {
                    activeFilter = filter;
                    const body = document.getElementById('website-reviews-modal-body');
                    if (body) {
                        body.innerHTML = generateModalContentHTML();
                        bindModalEvents();
                    }
                }
            });
        });

        // Live Word Counter listener
        const textInput = document.getElementById('review-text-input');
        const wordCounter = document.getElementById('review-word-counter');
        const wordError = document.getElementById('review-word-error');

        function countWords(str) {
            if (!str || !str.trim()) return 0;
            return str.trim().split(/\s+/).filter(Boolean).length;
        }

        if (textInput && wordCounter) {
            textInput.addEventListener('input', () => {
                const words = countWords(textInput.value);
                wordCounter.textContent = `${words} / 10 words`;
                if (words >= 10) {
                    wordCounter.style.color = '#4ade80';
                    if (wordError) wordError.style.display = 'none';
                } else {
                    wordCounter.style.color = '#facc15';
                }
            });
        }

        // Form Submission
        if (form) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const locationInput = document.getElementById('review-user-location');
                const tagInput = document.getElementById('review-travel-tag');
                const submitBtn = document.getElementById('review-submit-btn');
                const btnText = document.getElementById('review-submit-btn-text');

                const name = nameInput ? nameInput.value.trim() : '';
                const location = locationInput ? locationInput.value.trim() : 'Karnataka, India';
                const tag = tagInput ? tagInput.value : 'Explorer';
                const text = textInput ? textInput.value.trim() : '';

                if (!name || !text) return;

                // Validate minimum 10 words
                const words = countWords(text);
                if (words < 10) {
                    if (wordError) {
                        wordError.textContent = `Please write at least 10 words (currently ${words} word${words === 1 ? '' : 's'}).`;
                        wordError.style.display = 'block';
                    }
                    if (textInput) textInput.focus();
                    return;
                }

                if (submitBtn) submitBtn.disabled = true;
                if (btnText) btnText.innerHTML = 'Publishing...';

                try {
                    const res = await fetch('/api/reviews', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            name,
                            location,
                            rating: selectedRating,
                            tag,
                            text
                        })
                    });

                    const data = await res.json();
                    if (data.success) {
                        reviewsData = data;
                        showToast("✨ Thank you! Your review has been published.");
                        
                        // Re-render modal content
                        const body = document.getElementById('website-reviews-modal-body');
                        if (body) {
                            body.innerHTML = generateModalContentHTML();
                            bindModalEvents();
                        }
                    } else {
                        alert(data.error || "Could not publish review. Please try again.");
                    }
                } catch (err) {
                    console.error('[REVIEW SUBMIT ERROR]', err);
                    alert("Network error. Please try again.");
                } finally {
                    if (submitBtn) submitBtn.disabled = false;
                    if (btnText) btnText.innerHTML = 'Publish Review';
                }
            });
        }
    }

    function showToast(message) {
        const existing = document.querySelector('.review-toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = 'review-toast';
        toast.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span>${escapeHtml(message)}</span>
        `;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.4s ease';
            setTimeout(() => toast.remove(), 400);
        }, 4000);
    }

    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeReviewsModal();
        }
    });

    // Public API
    window.WeekendReviews = {
        fetchReviews,
        openReviewsModal,
        closeReviewsModal
    };

    // Auto-fetch initial reviews on startup
    fetchReviews();

})();
