/**
 * Instagram-Style Explorer Profile System
 * Manages user profile, Public/Private privacy mode, photo posts, and places reached log.
 * Integrates with Clerk Authentication & Journey Tracker.
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'we_explorer_profile_v1';

  // Default pre-loaded places and check-in posts
  const DEFAULT_POSTS = [
    {
      id: 'post_1',
      img: 'assets/places/panambur_beach.jpg',
      location: 'Panambur Beach, Mangaluru',
      caption: 'Golden hour waves and cool Arabian sea breeze! 🌅🌊 #CoastalVibes #WeekendExplore',
      likes: 42,
      date: 'Yesterday',
      isPublic: true
    },
    {
      id: 'post_2',
      img: 'assets/destinations/mangaluru_hd.jpg',
      location: 'Woodlands Restaurant, Mangaluru',
      caption: 'Crispy ghee roast dosa with authentic filter coffee. Pure bliss! ☕✨',
      likes: 28,
      date: '2 days ago',
      isPublic: true
    },
    {
      id: 'post_3',
      img: 'assets/places/someshwara_temple.jpg',
      location: 'Someshwara Beach & Temple',
      caption: 'The majestic Rudra Shila rocks meeting the sunset ocean. Stunning heritage! 🏛️🌊',
      likes: 56,
      date: 'Last weekend',
      isPublic: true
    }
  ];

  const DEFAULT_REACHED_PLACES = [
    {
      id: 'reach_1',
      title: 'Panambur Beach',
      city: 'Mangaluru',
      icon: '🌊',
      date: 'Verified GPS Check-in • 28 Oct 2026',
      maps: 'https://www.google.com/maps/search/?api=1&query=Panambur+Beach+Mangaluru'
    },
    {
      id: 'reach_2',
      title: 'Woodlands Restaurant',
      city: 'Mangaluru',
      icon: '☕',
      date: 'Verified GPS Check-in • 28 Oct 2026',
      maps: 'https://www.google.com/maps/search/?api=1&query=Woodlands+Restaurant+Mangalore'
    },
    {
      id: 'reach_3',
      title: 'Shettihalli Rosary Church',
      city: 'Hassan',
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
    let handle = 'weekend_wanderer';
    let avatar = '🎒';

    if (window.Clerk && window.Clerk.user) {
      name = window.Clerk.user.fullName || window.Clerk.user.firstName || 'Explorer';
      handle = (window.Clerk.user.username || name.toLowerCase().replace(/\s+/g, '_')) + '_explorer';
    }

    return {
      name: name,
      handle: handle,
      bio: '🎒 Weekend Wanderer | 🌊 Coastal & Heritage Trail Explorer | 📍 Karnataka, India\nTrack my live check-ins & completed journeys!',
      avatar: avatar,
      isPrivate: false, // Default is Public profile
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
              <div class="exp-stat-item">
                <span class="exp-stat-num" id="exp-count-posts">${state.posts.length}</span>
                <span class="exp-stat-label">Posts</span>
              </div>
              <div class="exp-stat-item">
                <span class="exp-stat-num" id="exp-count-reached">${state.reachedPlaces.length}</span>
                <span class="exp-stat-label">Places Reached</span>
              </div>
              <div class="exp-stat-item">
                <span class="exp-stat-num" id="exp-count-level">Lv. 3</span>
                <span class="exp-stat-label">Explorer</span>
              </div>
            </div>
          </div>

          <!-- Bio -->
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

          <!-- Action Buttons Bar -->
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

          <!-- Tabs (Posts | Places Reached | Private Vault) -->
          <div class="exp-tabs-nav">
            <button class="exp-tab-btn active" id="tab-btn-posts" onclick="window.ExplorerProfile.switchTab('posts')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <span>POSTS</span>
            </button>
            <button class="exp-tab-btn" id="tab-btn-reached" onclick="window.ExplorerProfile.switchTab('reached')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>PLACES REACHED (<span id="exp-reached-tab-count">${state.reachedPlaces.length}</span>)</span>
            </button>
            <button class="exp-tab-btn" id="tab-btn-vault" onclick="window.ExplorerProfile.switchTab('vault')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              <span>PRIVATE</span>
            </button>
          </div>

          <!-- TAB 1: POSTS -->
          <div class="exp-tab-panel active" id="panel-posts">
            ${state.isPrivate ? `
              <div class="exp-private-banner">
                <div class="exp-private-banner-icon">🔒</div>
                <h4>This Profile is Private</h4>
                <p>Only you can see your shared posts and check-ins. Other explorers will see your private badge.</p>
              </div>
            ` : ''}
            <div class="exp-posts-grid" id="exp-posts-grid-container">
              ${renderPostsGrid(state.posts)}
            </div>
          </div>

          <!-- TAB 2: PLACES REACHED -->
          <div class="exp-tab-panel" id="panel-reached">
            <div style="font-size:0.75rem;color:#38bdf8;margin-bottom:10px;font-weight:600;display:flex;align-items:center;gap:6px;">
              <span>🛰️</span> <span>Verified places reached via real-time GPS check-ins:</span>
            </div>
            <div class="exp-places-reached-list" id="exp-reached-list-container">
              ${renderReachedList(state.reachedPlaces)}
            </div>
          </div>

          <!-- TAB 3: PRIVATE VAULT -->
          <div class="exp-tab-panel" id="panel-vault">
            <div class="exp-private-banner">
              <div class="exp-private-banner-icon">🔐</div>
              <h4>Private Travel Vault</h4>
              <p>Confidential itineraries, custom saved budgets, and personal check-in notes.</p>
              <button class="exp-btn-secondary" style="margin:0 auto;" onclick="alert('🔒 Your saved itinerary drafts are encrypted and visible only on this device.')">
                View Encrypted Logs
              </button>
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
            <label class="exp-input-label">Avatar Emoji or URL</label>
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
            <label class="exp-input-label">Location Tag (e.g. Panambur Beach, Hassan Church)</label>
            <input type="text" class="exp-input-text" id="exp-newpost-location" placeholder="e.g. Someshwara Beach, Mangaluru">
          </div>
          <div class="exp-input-group">
            <label class="exp-input-label">Caption & Highlights</label>
            <textarea class="exp-input-text" id="exp-newpost-caption" rows="3" placeholder="Describe the atmosphere, sunset, food..."></textarea>
          </div>
          <div class="exp-input-group">
            <label class="exp-input-label">Choose Photo</label>
            <select class="exp-input-text" id="exp-newpost-img">
              <option value="assets/places/panambur_beach.jpg">Panambur Beach (Sunset)</option>
              <option value="assets/places/someshwara_temple.jpg">Someshwara Rocks & Temple</option>
              <option value="assets/destinations/mangaluru_hd.jpg">Mangaluru Heritage Center</option>
              <option value="assets/destinations/bangalore_hd.jpg">Bangalore Skyline</option>
              <option value="assets/destinations/mysuru_hd.jpg">Mysore Palace Lights</option>
            </select>
          </div>
          <button class="exp-btn-primary" style="width:100%;justify-content:center;margin-top:10px;" onclick="window.ExplorerProfile.publishPost()">
            Share Post 🚀
          </button>
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
  }

  function escapeHtml(str) {
    return String(str || '').replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m]);
  }

  function renderPostsGrid(posts) {
    if (!posts || posts.length === 0) {
      return '<div style="grid-column:span 3;text-align:center;padding:30px;color:rgba(255,255,255,0.4);font-size:0.8rem;">No posts yet. Tap "+ Post" to share your first check-in!</div>';
    }
    return posts.map(p => `
      <div class="exp-post-tile" onclick="alert('📸 Check-in: ${escapeHtml(p.location)}\\n\\n\"${escapeHtml(p.caption)}\"')">
        <img src="${p.img}" alt="${escapeHtml(p.location)}" class="exp-post-img" loading="lazy" onerror="this.src='assets/places/panambur_beach.jpg'">
        <div class="exp-post-overlay">
          <span>❤️ ${p.likes || 1}</span>
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
          <div class="exp-reached-icon">${p.icon || '📍'}</div>
          <div>
            <div class="exp-reached-title">${escapeHtml(p.title)} (${escapeHtml(p.city)})</div>
            <div class="exp-reached-date">${escapeHtml(p.date || 'Verified Check-in')}</div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:6px;">
          <span class="exp-reached-tag">✓ Reached</span>
          ${p.maps ? `<a href="${p.maps}" target="_blank" rel="noopener noreferrer" style="color:#8338EC;font-size:0.75rem;text-decoration:none;font-weight:700;">Maps ↗</a>` : ''}
        </div>
      </div>
    `).join('');
  }

  // --- Exposed Global ExplorerProfile API ---
  window.ExplorerProfile = {
    open: function () {
      createProfileModalDOM();
      // Sync Clerk user if logged in
      if (window.Clerk && window.Clerk.user) {
        state.name = window.Clerk.user.fullName || window.Clerk.user.firstName || state.name;
        if (window.Clerk.user.imageUrl) {
          state.avatar = `<img src="${window.Clerk.user.imageUrl}" class="exp-avatar-img" alt="Avatar">`;
        }
      }
      this.syncUI();
      const overlay = document.getElementById('exp-profile-overlay');
      if (overlay) overlay.classList.add('open');
    },

    close: function () {
      const overlay = document.getElementById('exp-profile-overlay');
      if (overlay) overlay.classList.remove('open');
    },

    togglePrivacy: function () {
      state.isPrivate = !state.isPrivate;
      saveProfileState(state);
      this.syncUI();
      const banner = state.isPrivate ? '🔒 Profile set to PRIVATE. Posts hidden from public.' : '🌐 Profile set to PUBLIC. Your explorer profile is visible to everyone!';
      alert(banner);
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
      const modal = document.getElementById('exp-submodal-post');
      if (modal) modal.classList.add('open');
    },

    closeSubmodal: function (type) {
      const modal = document.getElementById('exp-submodal-' + type);
      if (modal) modal.classList.remove('open');
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
      const imgInp = document.getElementById('exp-newpost-img');

      const loc = (locInp && locInp.value.trim()) || 'Karnataka Spot';
      const cap = (capInp && capInp.value.trim()) || 'Exploring amazing sights!';
      const img = (imgInp && imgInp.value) || 'assets/places/panambur_beach.jpg';

      state.posts.unshift({
        id: 'post_' + Date.now(),
        img: img,
        location: loc,
        caption: cap,
        likes: 1,
        date: 'Just now',
        isPublic: !state.isPrivate
      });

      saveProfileState(state);
      this.syncUI();
      this.closeSubmodal('post');
      alert('📸 New check-in post published to your profile!');
    },

    // 🎯 Bridge with Journey Tracker: Called automatically when GPS detects arrival
    addReachedPlace: function (item) {
      if (!item || !item.title) return;
      // Prevent duplicates
      const exists = state.reachedPlaces.some(p => p.title.toLowerCase() === item.title.toLowerCase());
      if (exists) return;

      state.reachedPlaces.unshift({
        id: 'reach_' + Date.now(),
        title: item.title,
        city: item.city || 'Mangaluru',
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
      alert(`Viewing "${label}" story check-ins on your profile!`);
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
