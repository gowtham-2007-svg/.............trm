/**
 * Instagram-Style ExplorerProfile System
 * Exactly matches Image 1:
 *  - Header: @weekend_wanderer [Public] ✕
 *  - Avatar 'D' with purple star, 3 Posts, 3 Places Reached, Lv. 3 Explorer
 *  - Divya Shettar ✓
 *  - Travel & Exploration Guide
 *  - Bio: Coastal & Heritage Trail Explorer
 *  - Buttons: [ ✏️ Edit Profile ] [ 🔒 Make Private ] [ 📸 + Post ]
 *  - Highlights: Beaches, Temples, Food, Hills, + New Trip
 *  - Tabs: [ ▦ POSTS ] [ 📍 PLACES REACHED (3) ] [ 🔒 PRIVATE ]
 *  - 3-Column Square Posts Grid with Likes and Location Tags
 */
(function () {
  'use strict';

  // Global capture click listener: Intercepts all profile avatar clicks before Clerk or other handlers
  document.addEventListener('click', function (e) {
    const trigger = e.target.closest('#nav-user-profile-anchor, #user-button, #we-unified-user-avatar, .we-user-avatar-btn, .cl-userButtonTrigger, .cl-userButtonBox, [data-clerk-user-button], [data-localization-key*="userButton"], #menu-explorer-profile');
    if (trigger) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      if (window.ExplorerProfile && typeof window.ExplorerProfile.open === 'function') {
        window.ExplorerProfile.open();
      }
    }
  }, true);

  const STORAGE_KEY = 'we_explorer_profile_exact_v1';

  const DEFAULT_POSTS = [
    {
      id: 'post_1',
      img: 'assets/places/panambur_beach.jpg',
      location: 'Panambur Beach, Mangaluru',
      caption: 'Golden hour waves and cool Arabian sea breeze! 🌅🌊 Visited the coast for weekend sunset. #CoastalVibes #WeekendExplore',
      likes: 42,
      isLiked: false,
      date: 'Yesterday • 5:45 PM',
      comments: [
        { user: 'kavya_travels', text: 'Stunning sunset view! 🌅' },
        { user: 'rahul_m', text: 'Did you try the jet ski ride?' }
      ],
      isPrivate: false
    },
    {
      id: 'post_2',
      img: 'assets/destinations/mangaluru_hd.jpg',
      location: 'Woodlands Restaurant, Mangaluru',
      caption: 'Crispy ghee roast dosa with authentic filter coffee. Pure bliss after traveling! ☕✨ #MangaloreFoodie',
      likes: 28,
      isLiked: false,
      date: '2 days ago • 9:15 AM',
      comments: [
        { user: 'foodie_karnataka', text: 'Best ghee roast in South Canara! 🔥' }
      ],
      isPrivate: false
    },
    {
      id: 'post_3',
      img: 'assets/places/someshwara_temple.jpg',
      location: 'Someshwara Beach & Temple',
      caption: 'The majestic Rudra Shila rocks meeting the sunset ocean. Stunning heritage site visited! 🏛️🌊 #KarnatakaTourism',
      likes: 56,
      isLiked: false,
      date: 'Last weekend • 6:30 PM',
      comments: [
        { user: 'ananya_s', text: 'Such peaceful vibes here at evening!' }
      ],
      isPrivate: false
    }
  ];

  const DEFAULT_REACHED_PLACES = [
    {
      id: 'reach_1',
      title: 'Panambur Beach',
      city: 'Mangaluru',
      img: 'assets/places/panambur_beach.jpg',
      icon: '🌊',
      date: 'Verified GPS Check-in • 28 Oct 2026',
      maps: 'https://www.google.com/maps/search/?api=1&query=Panambur+Beach+Mangaluru'
    },
    {
      id: 'reach_2',
      title: 'Woodlands Restaurant',
      city: 'Mangaluru',
      img: 'assets/destinations/mangaluru_hd.jpg',
      icon: '☕',
      date: 'Verified GPS Check-in • 28 Oct 2026',
      maps: 'https://www.google.com/maps/search/?api=1&query=Woodlands+Restaurant+Mangalore'
    },
    {
      id: 'reach_3',
      title: 'Someshwara Beach & Temple',
      city: 'Mangaluru',
      img: 'assets/places/someshwara_temple.jpg',
      icon: '🏛️',
      date: 'Verified GPS Check-in • 27 Oct 2026',
      maps: 'https://www.google.com/maps/search/?api=1&query=Someshwara+Temple+Mangaluru'
    }
  ];

  function getProfileState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}

    let name = 'Divya Shettar';
    let handle = 'weekend_wanderer';
    let avatar = 'D';

    if (window.Clerk && window.Clerk.user) {
      name = window.Clerk.user.fullName || window.Clerk.user.firstName || name;
      handle = window.Clerk.user.username || handle;
      if (window.Clerk.user.imageUrl) {
        avatar = `<img src="${window.Clerk.user.imageUrl}" class="exp-avatar-img" alt="${name}">`;
      } else {
        avatar = (name.charAt(0) || 'D').toUpperCase();
      }
    }

    return {
      name: name,
      handle: handle,
      bio: '🎒 Weekend Wanderer | 🌊 Coastal & Heritage Trail Explorer | 📍 Karnataka, India\nTrack my live check-ins & completed journeys!',
      avatar: avatar,
      isPrivate: false,
      posts: DEFAULT_POSTS,
      reachedPlaces: DEFAULT_REACHED_PLACES,
      highlights: [
        { icon: '🌊', label: 'Beaches' },
        { icon: '🏛️', label: 'Temples' },
        { icon: '☕', label: 'Food' },
        { icon: '🌄', label: 'Hills' }
      ]
    };
  }

  function saveProfileState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  let state = getProfileState();
  let uploadedImageDataUrl = null;

  function escapeHtml(str) {
    return String(str || '').replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m]);
  }

  // Build Modal matching Image 1
  function createProfileModalDOM() {
    if (document.getElementById('exp-profile-overlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'exp-profile-overlay';
    overlay.className = 'exp-profile-overlay';

    overlay.innerHTML = `
      <div class="exp-profile-card">
        <!-- Top App Bar (Exact Image 1) -->
        <div class="exp-profile-topbar">
          <div class="exp-profile-handle-wrap">
            <span class="exp-profile-handle" id="exp-render-handle">@${escapeHtml(state.handle)}</span>
            <button class="exp-profile-privacy-badge ${state.isPrivate ? 'private' : 'public'}" id="exp-privacy-btn" onclick="window.ExplorerProfile.togglePrivacy()" title="Tap to switch between Public and Private">
              <span>${state.isPrivate ? '🔒 Private' : '🌐 Public'}</span>
            </button>
          </div>
          <button class="exp-profile-close-btn" onclick="window.ExplorerProfile.close()" title="Close Profile">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <!-- Scroll Body -->
        <div class="exp-profile-scroll-body">
          <!-- Profile Header (Avatar + 3 Stats) -->
          <div class="exp-profile-header-grid">
            <div class="exp-avatar-ring" onclick="window.ExplorerProfile.promptAvatarChange()" title="Tap to change avatar">
              <div class="exp-avatar-inner" id="exp-render-avatar">
                ${state.avatar}
              </div>
              <span class="exp-avatar-badge-star">★</span>
            </div>

            <div class="exp-stats-row">
              <div class="exp-stat-item" onclick="window.ExplorerProfile.switchTab('posts')" title="View Posts">
                <span class="exp-stat-num" id="exp-count-posts">${state.posts.length}</span>
                <span class="exp-stat-label">Posts</span>
              </div>
              <div class="exp-stat-item" onclick="window.ExplorerProfile.switchTab('reached')" title="View Places Reached">
                <span class="exp-stat-num" id="exp-count-reached">${state.reachedPlaces.length}</span>
                <span class="exp-stat-label">Places Reached</span>
              </div>
              <div class="exp-stat-item" title="Explorer Level">
                <span class="exp-stat-num">Lv. 3</span>
                <span class="exp-stat-label">Explorer</span>
              </div>
            </div>
          </div>

          <!-- Bio Section -->
          <div class="exp-bio-section">
            <div class="exp-bio-name-row">
              <span class="exp-bio-fullname" id="exp-render-fullname">${escapeHtml(state.name)}</span>
              <span class="exp-verified-badge" title="Verified Explorer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </span>
            </div>
            <div class="exp-bio-category">Travel & Exploration Guide</div>
            <div class="exp-bio-text" id="exp-render-bio">${escapeHtml(state.bio).replace(/\n/g, '<br>')}</div>
          </div>

          <!-- Action Buttons Bar (Exact Image 1) -->
          <div class="exp-actions-bar">
            <button class="exp-btn-secondary" onclick="window.ExplorerProfile.openEditModal()">
              <span>✏️ Edit Profile</span>
            </button>
            <button class="exp-btn-secondary" onclick="window.ExplorerProfile.togglePrivacy()">
              <span id="exp-btn-privacy-label">${state.isPrivate ? '🔓 Make Public' : '🔒 Make Private'}</span>
            </button>
            <button class="exp-btn-primary" onclick="window.ExplorerProfile.openNewPostModal()">
              <span>📸 + Post</span>
            </button>
          </div>

          <!-- Story Highlights Circles (Exact Image 1) -->
          <div class="exp-highlights-scroll">
            ${state.highlights.map(h => `
              <div class="exp-highlight-item" onclick="window.ExplorerProfile.filterHighlights('${h.label}')">
                <div class="exp-highlight-circle">${h.icon}</div>
                <span class="exp-highlight-label">${h.label}</span>
              </div>
            `).join('')}
            <div class="exp-highlight-item" onclick="window.ExplorerProfile.addHighlightFromEditOpen()">
              <div class="exp-highlight-circle" style="border-style:dashed;">+</div>
              <span class="exp-highlight-label">New Trip</span>
            </div>
          </div>

          <!-- 5-icon Instagram-style Tab Bar -->
          <div class="exp-tabs-nav exp-tabs-nav-icons">
            <!-- 1: Grid Posts -->
            <button class="exp-tab-btn active" id="tab-btn-posts" onclick="window.ExplorerProfile.switchTab('posts')" title="Posts">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                <rect x="3" y="14" width="7" height="7" rx="1"></rect>
              </svg>
            </button>
            <!-- 2: Reels -->
            <button class="exp-tab-btn" id="tab-btn-reels" onclick="window.ExplorerProfile.switchTab('reels')" title="Reels & Videos">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <circle cx="12" cy="12" r="9"></circle>
                <polygon points="10,8 17,12 10,16" fill="currentColor" stroke="none"></polygon>
              </svg>
            </button>
            <!-- 3: Saved -->
            <button class="exp-tab-btn" id="tab-btn-saved" onclick="window.ExplorerProfile.switchTab('saved')" title="Saved Places">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
            <!-- 4: Places Reached (GPS / sync) -->
            <button class="exp-tab-btn" id="tab-btn-reached" onclick="window.ExplorerProfile.switchTab('reached')" title="Places Reached">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <polyline points="1 4 1 10 7 10"></polyline>
                <path d="M3.51 15a9 9 0 1 0 .49-4.5"></path>
              </svg>
            </button>
            <!-- 5: Private / Tagged -->
            <button class="exp-tab-btn" id="tab-btn-private" onclick="window.ExplorerProfile.switchTab('private')" title="Private">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                <circle cx="12" cy="10" r="3"></circle>
                <path d="M7 21h10"></path>
              </svg>
            </button>
          </div>

          <!-- TAB 1: POSTS (Exact Image 1) -->
          <div class="exp-tab-panel active" id="panel-posts">
            <div class="exp-posts-grid" id="exp-posts-grid-container">
              ${renderPostsGrid(state.posts)}
            </div>
          </div>

          <!-- TAB 2: PLACES REACHED -->
          <div class="exp-tab-panel" id="panel-reached">
            <div style="font-size:0.75rem;color:#38bdf8;margin-bottom:10px;font-weight:600;display:flex;align-items:center;justify-content:space-between;">
              <span>🛰️ Verified places reached via real-time GPS check-ins:</span>
              <button class="exp-btn-secondary" style="padding:2px 8px;font-size:0.7rem;" onclick="window.ExplorerProfile.promptAddPlace()">+ Check-in</button>
            </div>
            <div class="exp-places-reached-list" id="exp-reached-list-container">
              ${renderReachedList(state.reachedPlaces)}
            </div>
          </div>

          <!-- TAB 2b: REELS & VIDEOS -->
          <div class="exp-tab-panel" id="panel-reels">
            <div class="exp-reels-empty">
              <div class="exp-reels-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
                  <circle cx="12" cy="12" r="9"></circle>
                  <polygon points="10,8 17,12 10,16" fill="currentColor" stroke="none" opacity="0.5"></polygon>
                </svg>
              </div>
              <h4>Share Reels</h4>
              <p>Reels you share will appear on your profile. Short travel videos, check-in clips, and destination reels go here.</p>
              <button class="exp-btn-primary" style="margin-top:10px;" onclick="window.ExplorerProfile.openNewPostModal()">
                📹 Create Reel
              </button>
            </div>
          </div>

          <!-- TAB 2c: SAVED -->
          <div class="exp-tab-panel" id="panel-saved">
            <div class="exp-saved-grid" id="exp-saved-grid-container">
              ${renderSavedGrid(state.saved || [])}
            </div>
          </div>

          <!-- TAB 3: PRIVATE VAULT -->
          <div class="exp-tab-panel" id="panel-private">
            <div class="exp-private-banner">
              <div class="exp-private-banner-icon">🔒</div>
              <h4>Private Travel Vault</h4>
              <p>Confidential itineraries, custom saved budgets, and personal check-in notes.</p>
              <div class="exp-settings-actions-group" style="max-width:280px;margin:16px auto 0;">
                <button type="button" class="exp-btn-danger" style="width:100%;justify-content:center;" onclick="window.WeekendAuth && window.WeekendAuth.signOut(); window.ExplorerProfile.close();">
                  🚪 Sign Out of Account
                </button>
              </div>
            </div>
          </div>

        </div>

        <!-- Sub-Modal: Edit Profile (Instagram style) -->
        <div class="exp-submodal-overlay" id="exp-submodal-edit">
          <!-- Instagram-style top bar -->
          <div class="exp-edit-topbar">
            <button class="exp-edit-back-btn" onclick="window.ExplorerProfile.closeSubmodal('edit')">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <span class="exp-edit-title">Edit profile</span>
            <button class="exp-edit-submit-btn" onclick="window.ExplorerProfile.saveProfileEdits()">Submit</button>
          </div>

          <!-- Photo section -->
          <div class="exp-edit-photo-row" onclick="document.getElementById('exp-avatar-file-input').click()">
            <div class="exp-edit-avatar-preview" id="exp-edit-avatar-preview">
              ${state.avatar}
            </div>
            <div>
              <div class="exp-edit-username-label">${escapeHtml(state.handle)}</div>
              <button class="exp-edit-change-photo-btn" type="button" onclick="event.stopPropagation();document.getElementById('exp-avatar-file-input').click()">Change photo</button>
            </div>
            <input type="file" id="exp-avatar-file-input" accept="image/*" style="display:none" onchange="window.ExplorerProfile.handleAvatarUpload(event)">
          </div>

          <!-- Fields -->
          <div class="exp-edit-fields">
            <div class="exp-edit-field-row">
              <label class="exp-edit-field-label">Name</label>
              <input type="text" class="exp-edit-field-input" id="exp-edit-name" value="${escapeHtml(state.name)}" placeholder="Full Name" maxlength="60">
            </div>
            <div class="exp-edit-field-row">
              <label class="exp-edit-field-label">Username</label>
              <div class="exp-edit-field-input" style="display:flex;align-items:center;gap:4px;padding:0 14px;">
                <span style="color:rgba(255,255,255,0.4);font-size:0.9rem;">@</span>
                <input type="text" id="exp-edit-handle" value="${escapeHtml(state.handle)}" placeholder="username" maxlength="30" style="background:none;border:none;outline:none;color:#fff;font-size:0.9rem;width:100%;font-family:inherit;">
              </div>
            </div>
            <div class="exp-edit-field-row">
              <label class="exp-edit-field-label">Website</label>
              <input type="url" class="exp-edit-field-input" id="exp-edit-website" value="${escapeHtml(state.website || '')}" placeholder="Website" maxlength="100">
            </div>
            <div class="exp-edit-field-row" style="align-items:flex-start;padding-top:6px;">
              <label class="exp-edit-field-label" style="padding-top:10px;">Bio</label>
              <div style="flex:1;position:relative;">
                <textarea class="exp-edit-field-input" id="exp-edit-bio" rows="4" placeholder="Bio" maxlength="150" style="resize:none;padding:10px 14px;height:auto;">${escapeHtml(state.bio)}</textarea>
                <div id="exp-bio-char-count" style="position:absolute;bottom:-18px;right:4px;font-size:0.7rem;color:rgba(255,255,255,0.4);">${(state.bio||'').length}/150</div>
              </div>
            </div>
            <div class="exp-edit-field-row">
              <label class="exp-edit-field-label">Gender</label>
              <select class="exp-edit-field-input" id="exp-edit-gender" style="color:#fff;">
                <option value="" style="background:#1a1a2e;" ${!state.gender ? 'selected':''}>Prefer not to say</option>
                <option value="female" style="background:#1a1a2e;" ${state.gender==='female' ? 'selected':''}>Female</option>
                <option value="male" style="background:#1a1a2e;" ${state.gender==='male' ? 'selected':''}>Male</option>
                <option value="other" style="background:#1a1a2e;" ${state.gender==='other' ? 'selected':''}>Non-binary / Other</option>
              </select>
            </div>
          </div>

          <!-- Story Highlights Manager section -->
          <div class="exp-edit-highlights-section">
            <div class="exp-edit-section-label">Story Highlights</div>
            <div id="exp-edit-highlights-list" class="exp-edit-highlights-chips">
              ${state.highlights.map((h,i) => `
                <div class="exp-highlight-chip">
                  <span>${h.icon} ${escapeHtml(h.label)}</span>
                  <button class="exp-highlight-chip-del" onclick="window.ExplorerProfile.deleteHighlight(${i})" title="Remove">&times;</button>
                </div>
              `).join('')}
            </div>
            <div class="exp-add-highlight-row">
              <input type="text" id="exp-new-highlight-icon" class="exp-edit-field-input" placeholder="Icon (emoji)" maxlength="4" style="width:56px;text-align:center;padding:8px;">
              <input type="text" id="exp-new-highlight-label" class="exp-edit-field-input" placeholder="Highlight name (e.g. Goa Trip)" style="flex:1;padding:8px;">
              <button class="exp-edit-add-highlight-btn" onclick="window.ExplorerProfile.addHighlightFromEdit()">+ Add</button>
            </div>
          </div>
        </div>

        <!-- Sub-Modal: Create New Post -->
        <div class="exp-submodal-overlay" id="exp-submodal-post">
          <div class="exp-submodal-header">
            <span class="exp-submodal-title">Share New Check-in Post</span>
            <button class="exp-profile-close-btn" onclick="window.ExplorerProfile.closeSubmodal('post')">✕</button>
          </div>
          
          <div class="exp-input-group">
            <label class="exp-input-label">Upload Photo from Device</label>
            <input type="file" id="exp-newpost-file" accept="image/*" class="exp-input-file" onchange="window.ExplorerProfile.handleImageUpload(event)">
            <div id="exp-newpost-preview-wrap" style="display:none;margin-top:8px;border-radius:12px;overflow:hidden;max-height:160px;position:relative;">
              <img id="exp-newpost-preview-img" style="width:100%;height:160px;object-fit:cover;" alt="Preview">
              <span style="position:absolute;bottom:6px;right:8px;background:rgba(0,0,0,0.7);padding:2px 8px;border-radius:6px;font-size:0.7rem;color:#38bdf8;">✓ Selected</span>
            </div>
          </div>

          <div class="exp-input-group">
            <label class="exp-input-label">Or Choose Preset Karnataka Spot</label>
            <select class="exp-input-text" id="exp-newpost-preset" onchange="window.ExplorerProfile.handlePresetChange(event)">
              <option value="">-- Choose Preset Photo --</option>
              <option value="assets/places/panambur_beach.jpg" selected>Panambur Beach, Mangaluru</option>
              <option value="assets/places/someshwara_temple.jpg">Someshwara Rocks & Temple</option>
              <option value="assets/destinations/mangaluru_hd.jpg">Woodlands Restaurant, Mangaluru</option>
              <option value="assets/destinations/bangalore_hd.jpg">Bangalore Palace & City</option>
              <option value="assets/destinations/mysuru_hd.jpg">Mysore Palace Lights</option>
            </select>
          </div>

          <div class="exp-input-group">
            <label class="exp-input-label">Location Tag (e.g. Panambur Beach, Mangaluru)</label>
            <input type="text" class="exp-input-text" id="exp-newpost-location" placeholder="e.g. Someshwara Beach, Mangaluru">
          </div>
          <div class="exp-input-group">
            <label class="exp-input-label">Caption & Travel Experience</label>
            <textarea class="exp-input-text" id="exp-newpost-caption" rows="3" placeholder="Describe the atmosphere, sunset, food..."></textarea>
          </div>

          <button class="exp-btn-primary" style="width:100%;justify-content:center;margin-top:10px;" onclick="window.ExplorerProfile.publishPost()">
            Share Post 🚀
          </button>
        </div>

        <!-- Sub-Modal: Full Instagram Post Lightbox -->
        <div class="exp-lightbox-overlay" id="exp-post-lightbox">
          <div class="exp-lightbox-card" id="exp-lightbox-card-content"></div>
        </div>

      </div>
    `;

    document.body.appendChild(overlay);

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        window.ExplorerProfile.close();
      }
    });

    const lightbox = document.getElementById('exp-post-lightbox');
    if (lightbox) {
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
          window.ExplorerProfile.closePostLightbox();
        }
      });
    }
  }

  function renderPostsGrid(posts) {
    if (!posts || posts.length === 0) {
      return '<div style="grid-column:span 3;text-align:center;padding:30px;color:rgba(255,255,255,0.4);font-size:0.8rem;">No posts yet. Tap "+ Post" to share your first check-in!</div>';
    }
    return posts.map(p => `
      <div class="exp-post-tile" onclick="window.ExplorerProfile.openPostLightbox('${p.id}')">
        <img src="${p.img}" alt="${escapeHtml(p.location)}" class="exp-post-img" loading="lazy" onerror="this.src='assets/places/panambur_beach.jpg'">
        <div class="exp-post-overlay">
          <span>❤️ ${p.likes || 1}</span>
          <span style="margin-left:8px;">💬 ${(p.comments && p.comments.length) || 0}</span>
        </div>
        <div class="exp-post-location-tag">📍 ${escapeHtml(p.location.split(',')[0])}</div>
      </div>
    `).join('');
  }

  function renderReachedList(places) {
    if (!places || places.length === 0) {
      return '<div style="text-align:center;padding:30px;color:rgba(255,255,255,0.4);font-size:0.8rem;">No places reached yet. As you complete stops in the AI Journey Tracker, they will appear here automatically!</div>';
    }
    return places.map(p => `
      <div class="exp-reached-item">
        <div class="exp-reached-left">
          <div class="exp-reached-thumb">
            <img src="${p.img || 'assets/places/panambur_beach.jpg'}" alt="${escapeHtml(p.title)}" onerror="this.src='assets/destinations/mangaluru_hd.jpg'">
          </div>
          <div>
            <div class="exp-reached-title">${escapeHtml(p.title)} <span style="font-weight:400;color:rgba(255,255,255,0.6);font-size:0.75rem;">(${escapeHtml(p.city)})</span></div>
            <div class="exp-reached-date">${escapeHtml(p.date || 'Verified GPS Check-in')}</div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:6px;">
          <span class="exp-reached-tag">✓ Reached</span>
          ${p.maps ? `<a href="${p.maps}" target="_blank" rel="noopener noreferrer" class="exp-reached-map-btn" title="Open in Google Maps">Maps ↗</a>` : ''}
        </div>
      </div>
    `).join('');
  }

  function renderSavedGrid(saved) {
    if (!saved || saved.length === 0) {
      return `<div class="exp-saved-empty">
        <div style="font-size:2.5rem;margin-bottom:10px;">🔖</div>
        <h4 style="color:#fff;margin:0 0 6px;font-size:0.95rem;">Save posts & places</h4>
        <p style="color:rgba(255,255,255,0.5);font-size:0.78rem;margin:0;">Tap the bookmark icon on any post to save it here privately.</p>
      </div>`;
    }
    return saved.map(p => `
      <div class="exp-post-tile" onclick="window.ExplorerProfile.openPostLightbox('${p.id}')">
        <img src="${p.img}" alt="${escapeHtml(p.location)}" class="exp-post-img" loading="lazy" onerror="this.src='assets/places/panambur_beach.jpg'">
        <div class="exp-post-overlay">
          <span>🔖</span>
          <span style="margin-left:8px;">📍 ${escapeHtml((p.location||'').split(',')[0])}</span>
        </div>
        <div class="exp-post-location-tag">📍 ${escapeHtml((p.location||'').split(',')[0])}</div>
      </div>
    `).join('');
  }

  // Exposed Global ExplorerProfile
  window.ExplorerProfile = {
    open: function () {
      createProfileModalDOM();
      if (window.Clerk && window.Clerk.user) {
        state.name = window.Clerk.user.fullName || window.Clerk.user.firstName || state.name;
        state.handle = window.Clerk.user.username || state.handle;
        if (window.Clerk.user.imageUrl) {
          state.avatar = `<img src="${window.Clerk.user.imageUrl}" class="exp-avatar-img" alt="${state.name}">`;
        } else {
          state.avatar = (state.name.charAt(0) || 'D').toUpperCase();
        }
      }
      this.syncUI();
      const overlay = document.getElementById('exp-profile-overlay');
      if (overlay) overlay.classList.add('open');
    },

    savePost: function (postId) {
      const post = state.posts.find(p => p.id === postId);
      if (!post) return;
      if (!state.saved) state.saved = [];
      const alreadySaved = state.saved.some(p => p.id === postId);
      if (alreadySaved) {
        state.saved = state.saved.filter(p => p.id !== postId);
      } else {
        state.saved.unshift(post);
      }
      saveProfileState(state);
      const savedGrid = document.getElementById('exp-saved-grid-container');
      if (savedGrid) savedGrid.innerHTML = renderSavedGrid(state.saved);
      // Update bookmark icon in lightbox
      const bookmarkBtn = document.getElementById('exp-bookmark-btn-' + postId);
      if (bookmarkBtn) {
        bookmarkBtn.innerHTML = alreadySaved ? '🔖' : '🏷️';
        bookmarkBtn.title = alreadySaved ? 'Saved' : 'Save';
      }
    },

    close: function () {
      const overlay = document.getElementById('exp-profile-overlay');
      if (overlay) overlay.classList.remove('open');
      this.closePostLightbox();
    },

    togglePrivacy: function () {
      state.isPrivate = !state.isPrivate;
      saveProfileState(state);
      this.syncUI();
    },

    switchTab: function (tabName) {
      document.querySelectorAll('.exp-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.exp-tab-panel').forEach(p => p.classList.remove('active'));

      const btn = document.getElementById('tab-btn-' + tabName);
      const panel = document.getElementById('panel-' + tabName);
      if (btn) btn.classList.add('active');
      if (panel) panel.classList.add('active');
    },

    openEditModal: function () {
      const modal = document.getElementById('exp-submodal-edit');
      if (modal) modal.classList.add('open');
    },

    openNewPostModal: function () {
      uploadedImageDataUrl = null;
      const previewWrap = document.getElementById('exp-newpost-preview-wrap');
      if (previewWrap) previewWrap.style.display = 'none';
      const fileInp = document.getElementById('exp-newpost-file');
      if (fileInp) fileInp.value = '';
      const modal = document.getElementById('exp-submodal-post');
      if (modal) modal.classList.add('open');
    },

    closeSubmodal: function (type) {
      const modal = document.getElementById('exp-submodal-' + type);
      if (modal) modal.classList.remove('open');
    },

    handleImageUpload: function (e) {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function (event) {
        uploadedImageDataUrl = event.target.result;
        const previewWrap = document.getElementById('exp-newpost-preview-wrap');
        const previewImg = document.getElementById('exp-newpost-preview-img');
        if (previewWrap && previewImg) {
          previewImg.src = uploadedImageDataUrl;
          previewWrap.style.display = 'block';
        }
      };
      reader.readAsDataURL(file);
    },

    handlePresetChange: function (e) {
      if (e.target.value) {
        uploadedImageDataUrl = null;
        const previewWrap = document.getElementById('exp-newpost-preview-wrap');
        const previewImg = document.getElementById('exp-newpost-preview-img');
        if (previewWrap && previewImg) {
          previewImg.src = e.target.value;
          previewWrap.style.display = 'block';
        }
      }
    },

    saveProfileEdits: function () {
      const nameInp = document.getElementById('exp-edit-name');
      const handleInp = document.getElementById('exp-edit-handle');
      const bioInp = document.getElementById('exp-edit-bio');
      const websiteInp = document.getElementById('exp-edit-website');
      const genderInp = document.getElementById('exp-edit-gender');

      if (nameInp && nameInp.value.trim()) state.name = nameInp.value.trim();
      if (handleInp) {
        const raw = handleInp.value.trim().replace(/^@/, '');
        if (raw) state.handle = raw;
      }
      if (bioInp) state.bio = bioInp.value || state.bio;
      if (websiteInp) state.website = websiteInp.value.trim();
      if (genderInp) state.gender = genderInp.value;

      saveProfileState(state);
      this.syncUI();
      this.closeSubmodal('edit');

      // Show Instagram-style brief toast
      const toast = document.createElement('div');
      toast.textContent = '✓ Profile updated';
      toast.style.cssText = 'position:fixed;bottom:32px;left:50%;transform:translateX(-50%);background:#1d1d2e;border:1px solid rgba(131,56,236,0.4);color:#fff;padding:10px 22px;border-radius:20px;font-size:0.85rem;z-index:99999999;animation:exp-fadein 0.3s ease;';
      document.body.appendChild(toast);
      setTimeout(() => { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 2500);
    },

    handleAvatarUpload: function (e) {
      const file = e.target && e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        const dataUrl = ev.target.result;
        state.avatar = `<img src="${dataUrl}" class="exp-avatar-img" alt="${state.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
        saveProfileState(state);
        // Update preview inside edit modal
        const preview = document.getElementById('exp-edit-avatar-preview');
        if (preview) preview.innerHTML = state.avatar;
        // Update main profile avatar
        this.syncUI();
        // Also update navbar avatar
        const navAvatar = document.getElementById('we-unified-user-avatar');
        if (navAvatar) {
          const inner = navAvatar.querySelector('div');
          if (inner) inner.innerHTML = `<img src="${dataUrl}" style="width:100%;height:100%;object-fit:cover;" alt="${state.name}">`;
        }
      };
      reader.readAsDataURL(file);
    },

    publishPost: function () {
      const locInp = document.getElementById('exp-newpost-location');
      const capInp = document.getElementById('exp-newpost-caption');
      const presetInp = document.getElementById('exp-newpost-preset');

      const loc = (locInp && locInp.value.trim()) || 'Karnataka Spot';
      const cap = (capInp && capInp.value.trim()) || 'Exploring amazing visited sights in Karnataka!';
      const finalImg = uploadedImageDataUrl || (presetInp && presetInp.value) || 'assets/places/panambur_beach.jpg';

      const newPost = {
        id: 'post_' + Date.now(),
        img: finalImg,
        location: loc,
        caption: cap,
        likes: 1,
        isLiked: true,
        date: 'Just now • Verified Check-in',
        comments: [],
        isPrivate: false
      };

      state.posts.unshift(newPost);

      const locName = loc.split(',')[0].trim();
      const locCity = (loc.split(',')[1] || 'Karnataka').trim();
      this.addReachedPlace({
        title: locName,
        city: locCity,
        img: finalImg,
        maps: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(loc)
      });

      saveProfileState(state);
      this.syncUI();
      this.closeSubmodal('post');
      this.switchTab('posts');
      this.openPostLightbox(newPost.id);
    },

    openPostLightbox: function (postId) {
      const post = state.posts.find(p => p.id === postId);
      if (!post) return;

      const lightbox = document.getElementById('exp-post-lightbox');
      const container = document.getElementById('exp-lightbox-card-content');
      if (!lightbox || !container) return;

      container.innerHTML = `
        <div class="exp-lightbox-media">
          <img src="${post.img}" alt="${escapeHtml(post.location)}" class="exp-lightbox-full-img" onerror="this.src='assets/places/panambur_beach.jpg'">
        </div>
        <div class="exp-lightbox-details">
          <div class="exp-lightbox-header">
            <div class="exp-lightbox-author">
              <div class="exp-lightbox-avatar">${state.avatar}</div>
              <div>
                <div class="exp-lightbox-name">
                  ${escapeHtml(state.name)}
                  <span class="exp-verified-badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></span>
                </div>
                <div class="exp-lightbox-location">📍 ${escapeHtml(post.location)}</div>
              </div>
            </div>
            <button class="exp-profile-close-btn" onclick="window.ExplorerProfile.closePostLightbox()">✕</button>
          </div>

          <div class="exp-lightbox-comments-list">
            <div class="exp-lightbox-caption-row">
              <span class="exp-lightbox-caption-user">@${escapeHtml(state.handle)}</span>
              <span class="exp-lightbox-caption-text">${escapeHtml(post.caption)}</span>
              <div class="exp-lightbox-date">${escapeHtml(post.date)}</div>
            </div>
            <div class="exp-lightbox-divider"></div>
            <div id="exp-comments-stream">
              ${(post.comments || []).map(c => `
                <div class="exp-comment-item">
                  <span class="exp-comment-user">@${escapeHtml(c.user)}</span>
                  <span class="exp-comment-text">${escapeHtml(c.text)}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="exp-lightbox-actions-bar">
            <div class="exp-lightbox-icons">
              <button class="exp-lightbox-btn-icon ${post.isLiked ? 'liked' : ''}" id="exp-like-btn" onclick="window.ExplorerProfile.toggleLike('${post.id}')" title="Like">
                ${post.isLiked ? '❤️' : '🤍'}
              </button>
              <button class="exp-lightbox-btn-icon" onclick="document.getElementById('exp-comment-input').focus()" title="Comment">
                💬
              </button>
              <button class="exp-lightbox-btn-icon" onclick="navigator.clipboard && navigator.clipboard.writeText(window.location.href); alert('🔗 Post check-in link copied to clipboard!');" title="Share">
                ↗️
              </button>
            </div>
            <div class="exp-lightbox-likes-count" id="exp-lightbox-likes-count">${post.likes || 0} likes</div>
          </div>

          <div class="exp-lightbox-comment-form">
            <input type="text" id="exp-comment-input" class="exp-comment-input" placeholder="Add a comment as @${escapeHtml(state.handle)}..." onkeydown="if(event.key==='Enter') window.ExplorerProfile.addComment('${post.id}')">
            <button class="exp-comment-post-btn" onclick="window.ExplorerProfile.addComment('${post.id}')">Post</button>
          </div>
        </div>
      `;

      lightbox.classList.add('open');
    },

    closePostLightbox: function () {
      const lightbox = document.getElementById('exp-post-lightbox');
      if (lightbox) lightbox.classList.remove('open');
    },

    toggleLike: function (postId) {
      const post = state.posts.find(p => p.id === postId);
      if (!post) return;

      post.isLiked = !post.isLiked;
      post.likes = (post.likes || 0) + (post.isLiked ? 1 : -1);
      if (post.likes < 0) post.likes = 0;

      saveProfileState(state);
      this.syncUI();

      const likeBtn = document.getElementById('exp-like-btn');
      const likesCount = document.getElementById('exp-lightbox-likes-count');
      if (likeBtn) {
        likeBtn.className = 'exp-lightbox-btn-icon ' + (post.isLiked ? 'liked' : '');
        likeBtn.innerHTML = post.isLiked ? '❤️' : '🤍';
      }
      if (likesCount) {
        likesCount.textContent = (post.likes || 0) + ' likes';
      }
    },

    addComment: function (postId) {
      const post = state.posts.find(p => p.id === postId);
      const input = document.getElementById('exp-comment-input');
      if (!post || !input) return;

      const text = input.value.trim();
      if (!text) return;

      if (!post.comments) post.comments = [];
      post.comments.push({
        user: state.handle || 'explorer',
        text: text
      });

      saveProfileState(state);
      input.value = '';
      this.syncUI();

      const stream = document.getElementById('exp-comments-stream');
      if (stream) {
        const item = document.createElement('div');
        item.className = 'exp-comment-item';
        item.innerHTML = `<span class="exp-comment-user">@${escapeHtml(state.handle)}</span> <span class="exp-comment-text">${escapeHtml(text)}</span>`;
        stream.appendChild(item);
      }
    },

    promptAddPlace: function () {
      const title = prompt('Enter the name of the place visited (e.g. Abbey Falls, Coorg):');
      if (!title) return;
      const city = prompt('Enter city / region (e.g. Coorg):') || 'Karnataka';

      this.addReachedPlace({
        title: title.trim(),
        city: city.trim(),
        maps: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(title.trim() + ' ' + city.trim())
      });
    },

    addReachedPlace: function (item) {
      if (!item || !item.title) return;
      const exists = state.reachedPlaces.some(p => p.title.toLowerCase() === item.title.toLowerCase());
      if (exists) return;

      state.reachedPlaces.unshift({
        id: 'reach_' + Date.now(),
        title: item.title,
        city: item.city || 'Mangaluru',
        img: item.img || 'assets/places/panambur_beach.jpg',
        date: 'Verified GPS Check-in • ' + new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
        maps: item.maps || 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(item.title)
      });

      saveProfileState(state);
      this.syncUI();
    },

    syncUI: function () {
      const handleEl = document.getElementById('exp-render-handle');
      if (handleEl) handleEl.textContent = '@' + state.handle;

      const privacyBadge = document.getElementById('exp-privacy-btn');
      if (privacyBadge) {
        privacyBadge.className = 'exp-profile-privacy-badge ' + (state.isPrivate ? 'private' : 'public');
        privacyBadge.innerHTML = `<span>${state.isPrivate ? '🔒 Private' : '🌐 Public'}</span>`;
      }

      const privacyBtnLabel = document.getElementById('exp-btn-privacy-label');
      if (privacyBtnLabel) {
        privacyBtnLabel.textContent = state.isPrivate ? '🔓 Make Public' : '🔒 Make Private';
      }

      const avatarEl = document.getElementById('exp-render-avatar');
      if (avatarEl) avatarEl.innerHTML = state.avatar;

      const fullnameEl = document.getElementById('exp-render-fullname');
      if (fullnameEl) fullnameEl.textContent = state.name;

      const bioEl = document.getElementById('exp-render-bio');
      if (bioEl) bioEl.innerHTML = escapeHtml(state.bio).replace(/\n/g, '<br>');

      const countPosts = document.getElementById('exp-count-posts');
      if (countPosts) countPosts.textContent = state.posts.length;

      const countReached = document.getElementById('exp-count-reached');
      if (countReached) countReached.textContent = state.reachedPlaces.length;

      const tabCountReached = document.getElementById('exp-reached-tab-count');
      if (tabCountReached) tabCountReached.textContent = state.reachedPlaces.length;

      const postsContainer = document.getElementById('exp-posts-grid-container');
      if (postsContainer) postsContainer.innerHTML = renderPostsGrid(state.posts);

      const reachedContainer = document.getElementById('exp-reached-list-container');
      if (reachedContainer) reachedContainer.innerHTML = renderReachedList(state.reachedPlaces);
    },

    promptAvatarChange: function () {
      // Trigger file input from avatar ring click
      document.getElementById('exp-avatar-file-input') && document.getElementById('exp-avatar-file-input').click()
        || this.openEditModal();
    },

    filterHighlights: function (label) {
      // Switch to posts tab and filter
      this.switchTab('posts');
      const postsContainer = document.getElementById('exp-posts-grid-container');
      if (!postsContainer) return;
      // Show all posts tagged with this highlight label
      const filtered = state.posts.filter(p =>
        p.location && p.location.toLowerCase().includes(label.toLowerCase())
      );
      if (filtered.length > 0) {
        postsContainer.innerHTML = renderPostsGrid(filtered);
        // Show filter banner
        let banner = document.getElementById('exp-filter-banner');
        if (!banner) {
          banner = document.createElement('div');
          banner.id = 'exp-filter-banner';
          banner.style.cssText = 'background:rgba(131,56,236,0.18);border:1px solid rgba(131,56,236,0.3);border-radius:10px;padding:8px 14px;margin-bottom:10px;font-size:0.78rem;color:#c4b5fd;display:flex;align-items:center;justify-content:space-between;';
          postsContainer.parentNode.insertBefore(banner, postsContainer);
        }
        banner.innerHTML = `<span>📌 Showing: ${escapeHtml(label)}</span><button onclick="window.ExplorerProfile.clearFilter()" style="background:none;border:none;color:#f472b6;cursor:pointer;font-size:0.78rem;">✕ Clear</button>`;
      } else {
        // Show all and scroll to posts tab
        postsContainer.innerHTML = renderPostsGrid(state.posts);
      }
    },

    clearFilter: function () {
      const postsContainer = document.getElementById('exp-posts-grid-container');
      if (postsContainer) postsContainer.innerHTML = renderPostsGrid(state.posts);
      const banner = document.getElementById('exp-filter-banner');
      if (banner && banner.parentNode) banner.parentNode.removeChild(banner);
    },

    addHighlightFromEdit: function () {
      const iconInp = document.getElementById('exp-new-highlight-icon');
      const labelInp = document.getElementById('exp-new-highlight-label');
      const icon = (iconInp && iconInp.value.trim()) || '📍';
      const label = labelInp && labelInp.value.trim();
      if (!label) { labelInp && labelInp.focus(); return; }
      state.highlights.push({ icon, label });
      saveProfileState(state);
      // Refresh chips in edit modal
      const chipList = document.getElementById('exp-edit-highlights-list');
      if (chipList) {
        chipList.innerHTML = state.highlights.map((h, i) => `
          <div class="exp-highlight-chip">
            <span>${h.icon} ${escapeHtml(h.label)}</span>
            <button class="exp-highlight-chip-del" onclick="window.ExplorerProfile.deleteHighlight(${i})" title="Remove">&times;</button>
          </div>
        `).join('');
      }
      // Refresh main profile highlights row
      const highlightsScroll = document.querySelector('.exp-highlights-scroll');
      if (highlightsScroll) {
        highlightsScroll.innerHTML = state.highlights.map(h => `
          <div class="exp-highlight-item" onclick="window.ExplorerProfile.filterHighlights('${h.label}')">
            <div class="exp-highlight-circle">${h.icon}</div>
            <div class="exp-highlight-label">${escapeHtml(h.label)}</div>
          </div>
        `).join('') + `
          <div class="exp-highlight-item" onclick="window.ExplorerProfile.addHighlightFromEditOpen()">
            <div class="exp-highlight-circle exp-highlight-add">+</div>
            <div class="exp-highlight-label">New Trip</div>
          </div>`;
      }
      if (iconInp) iconInp.value = '';
      if (labelInp) labelInp.value = '';
    },

    addHighlightFromEditOpen: function () {
      this.openEditModal();
      setTimeout(() => {
        const s = document.querySelector('.exp-edit-highlights-section');
        if (s) s.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const inp = document.getElementById('exp-new-highlight-label');
        if (inp) inp.focus();
      }, 200);
    },

    deleteHighlight: function (idx) {
      state.highlights.splice(idx, 1);
      saveProfileState(state);
      const chipList = document.getElementById('exp-edit-highlights-list');
      if (chipList) {
        chipList.innerHTML = state.highlights.map((h, i) => `
          <div class="exp-highlight-chip">
            <span>${h.icon} ${escapeHtml(h.label)}</span>
            <button class="exp-highlight-chip-del" onclick="window.ExplorerProfile.deleteHighlight(${i})" title="Remove">&times;</button>
          </div>
        `).join('');
      }
      const highlightsScroll = document.querySelector('.exp-highlights-scroll');
      if (highlightsScroll) {
        highlightsScroll.innerHTML = state.highlights.map(h => `
          <div class="exp-highlight-item" onclick="window.ExplorerProfile.filterHighlights('${h.label}')">
            <div class="exp-highlight-circle">${h.icon}</div>
            <div class="exp-highlight-label">${escapeHtml(h.label)}</div>
          </div>
        `).join('') + `
          <div class="exp-highlight-item" onclick="window.ExplorerProfile.addHighlightFromEditOpen()">
            <div class="exp-highlight-circle exp-highlight-add">+</div>
            <div class="exp-highlight-label">New Trip</div>
          </div>`;
      }
    },

    addHighlightPrompt: function () {
      this.addHighlightFromEditOpen();
    }
  };

  // Live bio char counter
  document.addEventListener('input', function (e) {
    if (e.target && e.target.id === 'exp-edit-bio') {
      var counter = document.getElementById('exp-bio-char-count');
      if (counter) counter.textContent = e.target.value.length + '/150';
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createProfileModalDOM);
  } else {
    createProfileModalDOM();
  }
})();
