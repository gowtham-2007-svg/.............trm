/**
 * Instagram-Style Explorer Profile System
 * Complete All-in-One Profile & Account Manager
 * Features:
 *  - Instagram Profile with Posts, Places Reached & Account Settings
 *  - Full Instagram Post Lightbox (photo view, likes, comments, caption, location)
 *  - Places Visited List with Photos, GPS Verified Badges, and Maps
 *  - Photo File Upload & Presets for New Posts
 *  - In-Place Account Management (No separate external Gmail window)
 *  - Public / Private privacy mode
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'we_explorer_profile_v2';

  // Default pre-loaded check-in posts
  const DEFAULT_POSTS = [
    {
      id: 'post_1',
      img: 'assets/places/panambur_beach.jpg',
      location: 'Panambur Beach, Mangaluru',
      caption: 'Golden hour waves and cool Arabian sea breeze! 🌅🌊 #CoastalVibes #WeekendExplore',
      likes: 42,
      isLiked: false,
      date: 'Yesterday • 5:45 PM',
      comments: [
        { user: 'kavya_travels', text: 'Stunning sunset view! 🌅' },
        { user: 'rahul_m', text: 'Did you try the jet ski ride?' }
      ],
      isPublic: true
    },
    {
      id: 'post_2',
      img: 'assets/destinations/mangaluru_hd.jpg',
      location: 'Woodlands Restaurant, Mangaluru',
      caption: 'Crispy ghee roast dosa with authentic filter coffee. Pure bliss! ☕✨ #MangaloreFoodie',
      likes: 28,
      isLiked: false,
      date: '2 days ago • 9:15 AM',
      comments: [
        { user: 'foodie_karnataka', text: 'Best ghee roast in South Canara! 🔥' }
      ],
      isPublic: true
    },
    {
      id: 'post_3',
      img: 'assets/places/someshwara_temple.jpg',
      location: 'Someshwara Beach & Temple',
      caption: 'The majestic Rudra Shila rocks meeting the sunset ocean. Stunning heritage! 🏛️🌊 #KarnatakaTourism',
      likes: 56,
      isLiked: false,
      date: 'Last weekend • 6:30 PM',
      comments: [
        { user: 'ananya_s', text: 'Such peaceful vibes here at evening!' }
      ],
      isPublic: true
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
      title: 'Shettihalli Rosary Church',
      city: 'Hassan',
      img: 'assets/places/someshwara_temple.jpg',
      icon: '🏛️',
      date: 'Verified GPS Check-in • 26 Oct 2026',
      maps: 'https://www.google.com/maps/search/?api=1&query=Shettihalli+Rosary+Church+Hassan'
    }
  ];

  // Load or initialize user state
  function getProfileState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}

    // Pull from Clerk if user is logged in
    let name = 'Explorer';
    let email = '';
    let handle = 'weekend_wanderer';
    let avatar = '🎒';

    if (window.Clerk && window.Clerk.user) {
      name = window.Clerk.user.fullName || window.Clerk.user.firstName || 'Explorer';
      handle = (window.Clerk.user.username || name.toLowerCase().replace(/\s+/g, '_')) + '_explorer';
      email = (window.Clerk.user.primaryEmailAddress && window.Clerk.user.primaryEmailAddress.emailAddress) || '';
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
      email: email,
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
  let activeLightboxPostId = null;

  function escapeHtml(str) {
    return String(str || '').replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m]);
  }

  // Create & mount the Modal DOM
  function createProfileModalDOM() {
    if (document.getElementById('exp-profile-overlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'exp-profile-overlay';
    overlay.className = 'exp-profile-overlay';

    overlay.innerHTML = `
      <div class="exp-profile-card">
        <!-- Top App Bar -->
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
          <!-- Profile Header (Instagram style) -->
          <div class="exp-profile-header-grid">
            <div class="exp-avatar-ring" onclick="window.ExplorerProfile.promptAvatarChange()" title="Tap to change avatar">
              <div class="exp-avatar-inner" id="exp-render-avatar">
                ${state.avatar}
              </div>
              <span class="exp-avatar-badge-star">★</span>
            </div>

            <div class="exp-stats-row">
              <div class="exp-stat-item" onclick="window.ExplorerProfile.switchTab('posts')">
                <span class="exp-stat-num" id="exp-count-posts">${state.posts.length}</span>
                <span class="exp-stat-label">Posts</span>
              </div>
              <div class="exp-stat-item" onclick="window.ExplorerProfile.switchTab('reached')">
                <span class="exp-stat-num" id="exp-count-reached">${state.reachedPlaces.length}</span>
                <span class="exp-stat-label">Places Reached</span>
              </div>
              <div class="exp-stat-item" onclick="window.ExplorerProfile.switchTab('account')">
                <span class="exp-stat-num" id="exp-count-level">Lv. 3</span>
                <span class="exp-stat-label">Explorer</span>
              </div>
            </div>
          </div>

          <!-- Bio & User Info -->
          <div class="exp-bio-section">
            <div class="exp-bio-name-row">
              <span class="exp-bio-fullname" id="exp-render-fullname">${escapeHtml(state.name)}</span>
              <span class="exp-verified-badge" title="Verified Explorer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </span>
            </div>
            <div class="exp-bio-email" id="exp-render-email">${escapeHtml(state.email || '')}</div>
            <div class="exp-bio-category">Travel & Exploration Guide</div>
            <div class="exp-bio-text" id="exp-render-bio">${escapeHtml(state.bio).replace(/\n/g, '<br>')}</div>
          </div>

          <!-- Action Buttons Bar -->
          <div class="exp-actions-bar">
            <button class="exp-btn-secondary" onclick="window.ExplorerProfile.openEditModal()">
              <span>✏️ Edit Profile</span>
            </button>
            <button class="exp-btn-secondary" onclick="window.ExplorerProfile.switchTab('account')">
              <span>⚙️ Manage Account</span>
            </button>
            <button class="exp-btn-primary" onclick="window.ExplorerProfile.openNewPostModal()">
              <span>📸 + Post</span>
            </button>
          </div>

          <!-- Story Highlights Circles -->
          <div class="exp-highlights-scroll">
            ${state.highlights.map(h => `
              <div class="exp-highlight-item" onclick="window.ExplorerProfile.filterHighlights('${h.label}')">
                <div class="exp-highlight-circle">${h.icon}</div>
                <span class="exp-highlight-label">${h.label}</span>
              </div>
            `).join('')}
            <div class="exp-highlight-item" onclick="window.ExplorerProfile.addHighlightPrompt()">
              <div class="exp-highlight-circle" style="border-style:dashed;">+</div>
              <span class="exp-highlight-label">New Trip</span>
            </div>
          </div>

          <!-- Tabs (POSTS | PLACES REACHED | ACCOUNT) -->
          <div class="exp-tabs-nav">
            <button class="exp-tab-btn active" id="tab-btn-posts" onclick="window.ExplorerProfile.switchTab('posts')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <span>POSTS</span>
            </button>
            <button class="exp-tab-btn" id="tab-btn-reached" onclick="window.ExplorerProfile.switchTab('reached')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>PLACES REACHED (<span id="exp-reached-tab-count">${state.reachedPlaces.length}</span>)</span>
            </button>
            <button class="exp-tab-btn" id="tab-btn-account" onclick="window.ExplorerProfile.switchTab('account')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              <span>ACCOUNT</span>
            </button>
          </div>

          <!-- TAB 1: POSTS -->
          <div class="exp-tab-panel active" id="panel-posts">
            ${state.isPrivate ? `
              <div class="exp-private-banner">
                <div class="exp-private-banner-icon">🔒</div>
                <h4>This Profile is Private</h4>
                <p>Only you can see your shared posts and check-ins. Tap any post to view its full photo and comments.</p>
              </div>
            ` : ''}
            <div class="exp-posts-grid" id="exp-posts-grid-container">
              ${renderPostsGrid(state.posts)}
            </div>
          </div>

          <!-- TAB 2: PLACES REACHED -->
          <div class="exp-tab-panel" id="panel-reached">
            <div class="exp-reached-header-bar">
              <div style="font-size:0.75rem;color:#38bdf8;font-weight:600;display:flex;align-items:center;gap:6px;">
                <span>🛰️</span> <span>Verified places reached via real-time GPS check-ins:</span>
              </div>
              <button class="exp-btn-secondary" style="padding:4px 10px;font-size:0.72rem;" onclick="window.ExplorerProfile.promptAddPlace()">
                + Check-in Spot
              </button>
            </div>
            <div class="exp-places-reached-list" id="exp-reached-list-container">
              ${renderReachedList(state.reachedPlaces)}
            </div>
          </div>

          <!-- TAB 3: ACCOUNT & SETTINGS (Merged In-Place) -->
          <div class="exp-tab-panel" id="panel-account">
            <div class="exp-account-settings-card">
              <div class="exp-settings-section-title">👤 Account Information</div>
              <div class="exp-settings-item">
                <span class="exp-settings-label">Full Name:</span>
                <span class="exp-settings-val" id="exp-acc-val-name">${escapeHtml(state.name)}</span>
              </div>
              <div class="exp-settings-item">
                <span class="exp-settings-label">Username:</span>
                <span class="exp-settings-val">@${escapeHtml(state.handle)}</span>
              </div>
              <div class="exp-settings-item">
                <span class="exp-settings-label">Email Address:</span>
                <span class="exp-settings-val" style="color:#38bdf8;">${escapeHtml(state.email || 'divyashettar236@gmail.com')}</span>
              </div>
              <div class="exp-settings-item">
                <span class="exp-settings-label">Security & Auth:</span>
                <span class="exp-settings-val" style="color:#34d399;">🛡️ Google / Clerk Connected</span>
              </div>

              <div class="exp-settings-section-title" style="margin-top:16px;">🔒 Privacy & Visibility</div>
              <div class="exp-settings-item" style="cursor:pointer;" onclick="window.ExplorerProfile.togglePrivacy()">
                <div>
                  <div style="font-weight:600;color:#fff;font-size:0.82rem;">Account Privacy</div>
                  <div style="font-size:0.72rem;color:rgba(255,255,255,0.5);">${state.isPrivate ? 'Only approved travelers can see your posts' : 'Anyone can view your photos & places reached'}</div>
                </div>
                <div class="exp-toggle-switch ${state.isPrivate ? 'active' : ''}"></div>
              </div>

              <div class="exp-settings-actions-group">
                <button type="button" class="exp-btn-secondary" style="width:100%;justify-content:center;margin-bottom:8px;" onclick="window.ExplorerProfile.openEditModal()">
                  ✏️ Edit Profile Details
                </button>
                <button type="button" class="exp-btn-danger" style="width:100%;justify-content:center;" onclick="window.WeekendAuth && window.WeekendAuth.signOut(); window.ExplorerProfile.close();">
                  🚪 Sign Out of Account
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Sub-Modal: Edit Profile -->
        <div class="exp-submodal-overlay" id="exp-submodal-edit">
          <div class="exp-submodal-header">
            <span class="exp-submodal-title">Edit Explorer Profile</span>
            <button class="exp-profile-close-btn" onclick="window.ExplorerProfile.closeSubmodal('edit')">✕</button>
          </div>
          <div class="exp-input-group">
            <label class="exp-input-label">Full Name</label>
            <input type="text" class="exp-input-text" id="exp-edit-name" value="${escapeHtml(state.name)}">
          </div>
          <div class="exp-input-group">
            <label class="exp-input-label">Username (@handle)</label>
            <input type="text" class="exp-input-text" id="exp-edit-handle" value="${escapeHtml(state.handle)}">
          </div>
          <div class="exp-input-group">
            <label class="exp-input-label">Bio Description</label>
            <textarea class="exp-input-text" id="exp-edit-bio" rows="3">${escapeHtml(state.bio)}</textarea>
          </div>
          <div class="exp-input-group">
            <label class="exp-input-label">Avatar Emoji or Image URL</label>
            <input type="text" class="exp-input-text" id="exp-edit-avatar" value="${escapeHtml(state.avatar)}">
          </div>
          <button class="exp-btn-primary" style="width:100%;justify-content:center;margin-top:10px;" onclick="window.ExplorerProfile.saveProfileEdits()">
            Save Changes ✓
          </button>
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
            <label class="exp-input-label">Or Choose Preset Destination</label>
            <select class="exp-input-text" id="exp-newpost-preset" onchange="window.ExplorerProfile.handlePresetChange(event)">
              <option value="">-- Choose Preset Photo --</option>
              <option value="assets/places/panambur_beach.jpg" selected>Panambur Beach (Sunset)</option>
              <option value="assets/places/someshwara_temple.jpg">Someshwara Rocks & Temple</option>
              <option value="assets/destinations/mangaluru_hd.jpg">Mangaluru Heritage Center</option>
              <option value="assets/destinations/bangalore_hd.jpg">Bangalore Skyline</option>
              <option value="assets/destinations/mysuru_hd.jpg">Mysore Palace Lights</option>
            </select>
          </div>

          <div class="exp-input-group">
            <label class="exp-input-label">Location Tag (e.g. Panambur Beach, Mangaluru)</label>
            <input type="text" class="exp-input-text" id="exp-newpost-location" placeholder="e.g. Someshwara Beach, Mangaluru">
          </div>
          <div class="exp-input-group">
            <label class="exp-input-label">Caption & Highlights</label>
            <textarea class="exp-input-text" id="exp-newpost-caption" rows="3" placeholder="Describe the atmosphere, sunset, food..."></textarea>
          </div>

          <button class="exp-btn-primary" style="width:100%;justify-content:center;margin-top:10px;" onclick="window.ExplorerProfile.publishPost()">
            Share Post 🚀
          </button>
        </div>

        <!-- Sub-Modal: Full Instagram Post Lightbox -->
        <div class="exp-lightbox-overlay" id="exp-post-lightbox">
          <div class="exp-lightbox-card" id="exp-lightbox-card-content">
            <!-- Dynamically populated by openPostLightbox -->
          </div>
        </div>

      </div>
    `;

    document.body.appendChild(overlay);

    // Close when clicking overlay backdrop
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

  let uploadedImageDataUrl = null;

  // --- Exposed Global ExplorerProfile API ---
  window.ExplorerProfile = {
    open: function () {
      createProfileModalDOM();
      // Sync Clerk user if logged in
      if (window.Clerk && window.Clerk.user) {
        state.name = window.Clerk.user.fullName || window.Clerk.user.firstName || state.name;
        state.email = (window.Clerk.user.primaryEmailAddress && window.Clerk.user.primaryEmailAddress.emailAddress) || state.email;
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
      const avatarInp = document.getElementById('exp-edit-avatar');

      if (nameInp) state.name = nameInp.value.trim() || state.name;
      if (handleInp) state.handle = handleInp.value.trim().replace(/^@/, '') || state.handle;
      if (bioInp) state.bio = bioInp.value.trim() || state.bio;
      if (avatarInp) state.avatar = avatarInp.value.trim() || state.avatar;

      saveProfileState(state);
      this.syncUI();
      this.closeSubmodal('edit');
    },

    publishPost: function () {
      const locInp = document.getElementById('exp-newpost-location');
      const capInp = document.getElementById('exp-newpost-caption');
      const presetInp = document.getElementById('exp-newpost-preset');

      const loc = (locInp && locInp.value.trim()) || 'Karnataka Spot';
      const cap = (capInp && capInp.value.trim()) || 'Exploring amazing sights in Karnataka!';
      const finalImg = uploadedImageDataUrl || (presetInp && presetInp.value) || 'assets/places/panambur_beach.jpg';

      state.posts.unshift({
        id: 'post_' + Date.now(),
        img: finalImg,
        location: loc,
        caption: cap,
        likes: 1,
        isLiked: true,
        date: 'Just now • Verified Check-in',
        comments: [],
        isPublic: !state.isPrivate
      });

      saveProfileState(state);
      this.syncUI();
      this.closeSubmodal('post');
      this.switchTab('posts');
      this.openPostLightbox(state.posts[0].id);
    },

    // 📸 Full Instagram Post Lightbox
    openPostLightbox: function (postId) {
      const post = state.posts.find(p => p.id === postId);
      if (!post) return;

      activeLightboxPostId = postId;
      const lightbox = document.getElementById('exp-post-lightbox');
      const container = document.getElementById('exp-lightbox-card-content');
      if (!lightbox || !container) return;

      container.innerHTML = `
        <div class="exp-lightbox-media">
          <img src="${post.img}" alt="${escapeHtml(post.location)}" class="exp-lightbox-full-img" onerror="this.src='assets/places/panambur_beach.jpg'">
        </div>
        <div class="exp-lightbox-details">
          <!-- Author Header -->
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

          <!-- Caption & Scrollable Comments -->
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

          <!-- Interactive Action Bar & Likes -->
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

          <!-- Add Comment Input Box -->
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
      activeLightboxPostId = null;
    },

    toggleLike: function (postId) {
      const post = state.posts.find(p => p.id === postId);
      if (!post) return;

      post.isLiked = !post.isLiked;
      post.likes = (post.likes || 0) + (post.isLiked ? 1 : -1);
      if (post.likes < 0) post.likes = 0;

      saveProfileState(state);
      this.syncUI();

      // Update Lightbox if open
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
        user: state.handle || 'traveler',
        text: text
      });

      saveProfileState(state);
      input.value = '';
      this.syncUI();

      // Append to open comment stream
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

    // 🎯 Bridge with Journey Tracker: Called automatically when GPS detects arrival
    addReachedPlace: function (item) {
      if (!item || !item.title) return;
      const exists = state.reachedPlaces.some(p => p.title.toLowerCase() === item.title.toLowerCase());
      if (exists) return;

      state.reachedPlaces.unshift({
        id: 'reach_' + Date.now(),
        title: item.title,
        city: item.city || 'Mangaluru',
        img: item.img || 'assets/places/panambur_beach.jpg',
        icon: '📍',
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

      const avatarEl = document.getElementById('exp-render-avatar');
      if (avatarEl) avatarEl.innerHTML = state.avatar;

      const fullnameEl = document.getElementById('exp-render-fullname');
      if (fullnameEl) fullnameEl.textContent = state.name;

      const accName = document.getElementById('exp-acc-val-name');
      if (accName) accName.textContent = state.name;

      const emailEl = document.getElementById('exp-render-email');
      if (emailEl) emailEl.textContent = state.email || '';

      const bioEl = document.getElementById('exp-render-bio');
      if (bioEl) bioEl.innerHTML = escapeHtml(state.bio).replace(/\n/g, '<br>');

      const countPosts = document.getElementById('exp-count-posts');
      if (countPosts) countPosts.textContent = state.posts.length;

      const countReached = document.getElementById('exp-count-reached');
      if (countReached) countReached.textContent = state.reachedPlaces.length;

      const tabCount = document.getElementById('exp-reached-tab-count');
      if (tabCount) tabCount.textContent = state.reachedPlaces.length;

      const postsContainer = document.getElementById('exp-posts-grid-container');
      if (postsContainer) postsContainer.innerHTML = renderPostsGrid(state.posts);

      const reachedContainer = document.getElementById('exp-reached-list-container');
      if (reachedContainer) reachedContainer.innerHTML = renderReachedList(state.reachedPlaces);
    },

    promptAvatarChange: function () {
      const newAv = prompt('Enter an emoji or image URL for your profile avatar:', state.avatar.length < 5 ? state.avatar : '🎒');
      if (newAv) {
        if (newAv.startsWith('http')) {
          state.avatar = `<img src="${newAv}" class="exp-avatar-img">`;
        } else {
          state.avatar = newAv.trim();
        }
        saveProfileState(state);
        this.syncUI();
      }
    },

    filterHighlights: function (label) {
      alert(`Viewing "${label}" story highlights & check-ins on your profile!`);
    },

    addHighlightPrompt: function () {
      const label = prompt('Name for new Trip Highlight (e.g. Goa Trip, Hassan Circuit):');
      if (label) {
        state.highlights.push({ icon: '📍', label: label.trim() });
        saveProfileState(state);
        this.open();
      }
    }
  };

  // Auto-init DOM on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createProfileModalDOM);
  } else {
    createProfileModalDOM();
  }
})();
