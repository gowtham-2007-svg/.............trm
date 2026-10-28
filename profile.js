/**
 * Instagram-Style ExplorerProfile System
 * Features:
 *  1. 🔒 Public vs Private Mode
 *  2. 📍 Places Reached (Automatic GPS Sync from AI Journey Tracker)
 *  3. 📸 Posts Grid (Instagram Style) with Lightbox
 *  4. ✏️ Customizable Profile & Community Explorers
 *  5. ✨ Interactive Profile Guide ("How it Works")
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'we_explorer_profile_v5';

  // Registered Community Explorers Registry
  const COMMUNITY_PROFILES = [
    {
      id: 'user_gowtham',
      name: 'Gowtham Nataraj',
      handle: 'gowtham_explorer',
      avatar: '🎒',
      role: 'Karnataka Heritage & Trail Lead',
      bio: '🎒 Adventurer & Tech Creator | 🌊 Coastal Karnataka & Western Ghats trails | 📍 Karnataka, India\nTracking every hidden temple and beach check-in.',
      isPrivate: false,
      followers: 1420,
      following: 310,
      isFollowing: false,
      highlights: [
        { icon: '🌊', label: 'Beaches' },
        { icon: '🏛️', label: 'Temples' },
        { icon: '☕', label: 'Food' },
        { icon: '🌄', label: 'Hills' }
      ],
      posts: [
        {
          id: 'gow_post_1',
          img: 'assets/places/panambur_beach.jpg',
          location: 'Panambur Beach, Mangaluru',
          caption: 'Sunset waves on the Arabian sea. Nothing beats the golden glow of coastal Karnataka! 🌅🌊 #MangaloreExplorer',
          likes: 68,
          isLiked: false,
          date: 'Yesterday • 6:15 PM',
          comments: [
            { user: 'divya_wanderlust', text: 'Spectacular sunset shot! 👏' },
            { user: 'ravi_budget_tours', text: 'Best spot for camel ride and evening breeze!' }
          ]
        },
        {
          id: 'gow_post_2',
          img: 'assets/places/someshwara_temple.jpg',
          location: 'Someshwara Beach & Temple',
          caption: 'Ancient coastal temple meeting the violent sea rocks at Rudra Shila. Pure spiritual peace! 🏛️🌊',
          likes: 84,
          isLiked: true,
          date: '3 days ago • 5:30 PM',
          comments: [
            { user: 'deekshith_voyager', text: 'One of the best heritage temples in DK!' }
          ]
        },
        {
          id: 'gow_post_3',
          img: 'assets/destinations/mysuru_hd.jpg',
          location: 'Mysore Palace Grand Illumination',
          caption: '100,000 bulbs illuminating royalty. An unforgettable weekend night in the City of Palaces! ✨🏰',
          likes: 112,
          isLiked: false,
          date: 'Last week • 7:20 PM',
          comments: [
            { user: 'sangam_traveller', text: 'Always magical during Sunday evenings.' }
          ]
        },
        {
          id: 'gow_post_4',
          img: 'assets/destinations/mangaluru_hd.jpg',
          location: 'Woodlands Restaurant, Mangaluru',
          caption: 'Authentic Ghee Roast and South Canara filter coffee. Essential stop for every traveler! ☕🍛',
          likes: 45,
          isLiked: false,
          date: '2 weeks ago • 9:00 AM',
          comments: []
        }
      ],
      reachedPlaces: [
        {
          id: 'gow_reach_1',
          title: 'Panambur Beach',
          city: 'Mangaluru',
          img: 'assets/places/panambur_beach.jpg',
          date: 'Verified GPS Check-in • 28 Oct 2026',
          maps: 'https://www.google.com/maps/search/?api=1&query=Panambur+Beach+Mangaluru'
        },
        {
          id: 'gow_reach_2',
          title: 'Someshwara Beach & Temple',
          city: 'Mangaluru',
          img: 'assets/places/someshwara_temple.jpg',
          date: 'Verified GPS Check-in • 26 Oct 2026',
          maps: 'https://www.google.com/maps/search/?api=1&query=Someshwara+Temple+Mangaluru'
        },
        {
          id: 'gow_reach_3',
          title: 'Mysore Palace',
          city: 'Mysuru',
          img: 'assets/destinations/mysuru_hd.jpg',
          date: 'Verified GPS Check-in • 22 Oct 2026',
          maps: 'https://www.google.com/maps/search/?api=1&query=Mysore+Palace'
        },
        {
          id: 'gow_reach_4',
          title: 'Woodlands Restaurant',
          city: 'Mangaluru',
          img: 'assets/destinations/mangaluru_hd.jpg',
          date: 'Verified GPS Check-in • 20 Oct 2026',
          maps: 'https://www.google.com/maps/search/?api=1&query=Woodlands+Restaurant+Mangalore'
        },
        {
          id: 'gow_reach_5',
          title: 'Bangalore Palace Grounds',
          city: 'Bangalore',
          img: 'assets/destinations/bangalore_hd.jpg',
          date: 'Verified GPS Check-in • 18 Oct 2026',
          maps: 'https://www.google.com/maps/search/?api=1&query=Bangalore+Palace'
        },
        {
          id: 'gow_reach_6',
          title: 'Shettihalli Rosary Church',
          city: 'Hassan',
          img: 'assets/places/someshwara_temple.jpg',
          date: 'Verified GPS Check-in • 15 Oct 2026',
          maps: 'https://www.google.com/maps/search/?api=1&query=Shettihalli+Church+Hassan'
        }
      ]
    },
    {
      id: 'user_divya',
      name: 'Divya Shettar',
      handle: 'divya_wanderlust',
      avatar: 'D',
      role: 'Coastal & Heritage Guide',
      bio: '🎒 Weekend Wanderer | 🌊 Coastal & Heritage Trail Explorer | 📍 Karnataka, India\nTracking live check-ins, local seafood and sunset points!',
      isPrivate: false,
      followers: 980,
      following: 245,
      isFollowing: false,
      highlights: [
        { icon: '🌊', label: 'Beaches' },
        { icon: '☕', label: 'Cafes' },
        { icon: '🏛️', label: 'Forts' }
      ],
      posts: [
        {
          id: 'div_post_1',
          img: 'assets/places/panambur_beach.jpg',
          location: 'Panambur Beach, Mangaluru',
          caption: 'Golden hour waves and cool sea breeze! 🌅🌊 Beautiful weekend vibes.',
          likes: 42,
          isLiked: false,
          date: 'Yesterday • 5:45 PM',
          comments: [
            { user: 'kavya_travels', text: 'Stunning sunset view! 🌅' }
          ]
        },
        {
          id: 'div_post_2',
          img: 'assets/destinations/mangaluru_hd.jpg',
          location: 'Woodlands Restaurant, Mangaluru',
          caption: 'Crispy ghee roast dosa with authentic filter coffee. Pure bliss! ☕✨',
          likes: 28,
          isLiked: false,
          date: '2 days ago • 9:15 AM',
          comments: []
        },
        {
          id: 'div_post_3',
          img: 'assets/places/someshwara_temple.jpg',
          location: 'Someshwara Beach & Temple',
          caption: 'Majestic rocks meeting the ocean. Peaceful weekend escape.',
          likes: 56,
          isLiked: false,
          date: 'Last weekend • 6:30 PM',
          comments: []
        }
      ],
      reachedPlaces: [
        {
          id: 'div_reach_1',
          title: 'Panambur Beach',
          city: 'Mangaluru',
          img: 'assets/places/panambur_beach.jpg',
          date: 'Verified GPS Check-in • 28 Oct 2026',
          maps: 'https://www.google.com/maps/search/?api=1&query=Panambur+Beach+Mangaluru'
        },
        {
          id: 'div_reach_2',
          title: 'Woodlands Restaurant',
          city: 'Mangaluru',
          img: 'assets/destinations/mangaluru_hd.jpg',
          date: 'Verified GPS Check-in • 28 Oct 2026',
          maps: 'https://www.google.com/maps/search/?api=1&query=Woodlands+Restaurant+Mangalore'
        },
        {
          id: 'div_reach_3',
          title: 'Someshwara Beach & Temple',
          city: 'Mangaluru',
          img: 'assets/places/someshwara_temple.jpg',
          date: 'Verified GPS Check-in • 27 Oct 2026',
          maps: 'https://www.google.com/maps/search/?api=1&query=Someshwara+Temple+Mangaluru'
        }
      ]
    },
    {
      id: 'user_sangam',
      name: 'Sangam',
      handle: 'sangam_traveller',
      avatar: 'S',
      role: 'Mountain Trekker & Backpacker',
      bio: '🏔️ Western Ghats Trekker | 🌿 Chasing hidden waterfalls & misty ridge tops | 📍 Karnataka\nPrivate travel diary & secret trails.',
      isPrivate: true, // 🔒 PRIVATE PROFILE
      followers: 860,
      following: 195,
      isFollowing: false,
      followRequested: false,
      highlights: [
        { icon: '🏔️', label: 'Peaks' },
        { icon: '⛺', label: 'Camping' }
      ],
      posts: [
        {
          id: 'san_post_1',
          img: 'assets/destinations/bangalore_hd.jpg',
          location: 'Mullayanagiri Peak Ridge',
          caption: 'Misty sunrise hike to the highest peak in Karnataka. 3,000 steps of pure magic! 🏔️✨',
          likes: 92,
          isLiked: true,
          date: '4 days ago',
          comments: []
        },
        {
          id: 'san_post_2',
          img: 'assets/places/panambur_beach.jpg',
          location: 'Hebbe Secret Waterfall Trail',
          caption: 'Swimming in the mountain stream deep inside the forest reserve. Private spot.',
          likes: 74,
          isLiked: false,
          date: '1 week ago',
          comments: []
        }
      ],
      reachedPlaces: [
        {
          id: 'san_reach_1',
          title: 'Mullayanagiri Peak',
          city: 'Chikmagalur',
          img: 'assets/destinations/bangalore_hd.jpg',
          date: 'Verified GPS Check-in • 24 Oct 2026',
          maps: 'https://www.google.com/maps/search/?api=1&query=Mullayanagiri'
        },
        {
          id: 'san_reach_2',
          title: 'Hebbe Falls',
          city: 'Chikmagalur',
          img: 'assets/places/panambur_beach.jpg',
          date: 'Verified GPS Check-in • 21 Oct 2026',
          maps: 'https://www.google.com/maps/search/?api=1&query=Hebbe+Falls'
        },
        {
          id: 'san_reach_3',
          title: 'Baba Budangiri Shrine',
          city: 'Chikmagalur',
          img: 'assets/places/someshwara_temple.jpg',
          date: 'Verified GPS Check-in • 19 Oct 2026',
          maps: 'https://www.google.com/maps/search/?api=1&query=Baba+Budangiri'
        }
      ]
    },
    {
      id: 'user_ravi',
      name: 'Ravi',
      handle: 'ravi_budget_tours',
      avatar: 'R',
      role: 'Motorbike & Budget Explorer',
      bio: '🏍️ Royal Enfield South India Solo Rider | ⛺ Budget backpacker | 📍 Udupi & Mangaluru\nShowing you can explore heaven on ₹2000 weekends!',
      isPrivate: false,
      followers: 730,
      following: 180,
      isFollowing: false,
      highlights: [
        { icon: '🏍️', label: 'Rides' },
        { icon: '⛺', label: 'Budget' },
        { icon: '🌊', label: 'Coasts' }
      ],
      posts: [
        {
          id: 'rav_post_1',
          img: 'assets/places/panambur_beach.jpg',
          location: 'Maravanthe Highway Beach',
          caption: 'Arabian sea on the left, Souparnika river on the right! India\'s most scenic highway ride. 🏍️🌊',
          likes: 88,
          isLiked: false,
          date: '3 days ago • 4:00 PM',
          comments: []
        },
        {
          id: 'rav_post_2',
          img: 'assets/places/someshwara_temple.jpg',
          location: 'Murudeshwar Shiva Statue',
          caption: 'Standing below the world\'s second tallest Shiva statue by the crashing ocean waves. Epic experience! 🏛️',
          likes: 104,
          isLiked: true,
          date: 'Last week • 11:30 AM',
          comments: []
        }
      ],
      reachedPlaces: [
        {
          id: 'rav_reach_1',
          title: 'Maravanthe Beach',
          city: 'Kundapura',
          img: 'assets/places/panambur_beach.jpg',
          date: 'Verified GPS Check-in • 25 Oct 2026',
          maps: 'https://www.google.com/maps/search/?api=1&query=Maravanthe+Beach'
        },
        {
          id: 'rav_reach_2',
          title: 'Murudeshwar Temple & Beach',
          city: 'Bhatkal',
          img: 'assets/places/someshwara_temple.jpg',
          date: 'Verified GPS Check-in • 21 Oct 2026',
          maps: 'https://www.google.com/maps/search/?api=1&query=Murudeshwar+Temple'
        },
        {
          id: 'rav_reach_3',
          title: 'Malpe Sea Walk & Beach',
          city: 'Udupi',
          img: 'assets/destinations/mangaluru_hd.jpg',
          date: 'Verified GPS Check-in • 17 Oct 2026',
          maps: 'https://www.google.com/maps/search/?api=1&query=Malpe+Beach'
        }
      ]
    },
    {
      id: 'user_deekshith',
      name: 'Deekshith K R',
      handle: 'deekshith_voyager',
      avatar: 'D',
      role: 'Heritage Architecture & Photo Enthusiast',
      bio: '📸 Landscape & Temple Architecture | 🏛️ Hoysala & Coastal Karnataka heritage explorer | 📍 Hassan / Bangalore',
      isPrivate: false,
      followers: 890,
      following: 220,
      isFollowing: false,
      highlights: [
        { icon: '🏛️', label: 'Hoysala' },
        { icon: '📸', label: 'Frames' }
      ],
      posts: [
        {
          id: 'dee_post_1',
          img: 'assets/places/someshwara_temple.jpg',
          location: 'Belur Chennakeshava Temple',
          caption: 'Mind-blowing 900-year-old soapstone carvings. Every pillar tells a mythological story! 🏛️✨ #IncredibleIndia',
          likes: 77,
          isLiked: false,
          date: '5 days ago • 10:45 AM',
          comments: []
        },
        {
          id: 'dee_post_2',
          img: 'assets/destinations/mysuru_hd.jpg',
          location: 'Halebidu Hoysaleshwara Temple',
          caption: 'The precision of 12th-century Hoysala sculptors is unbelievable. Masterpiece of Karnataka heritage.',
          likes: 63,
          isLiked: false,
          date: '2 weeks ago',
          comments: []
        }
      ],
      reachedPlaces: [
        {
          id: 'dee_reach_1',
          title: 'Belur Chennakeshava Temple',
          city: 'Hassan',
          img: 'assets/places/someshwara_temple.jpg',
          date: 'Verified GPS Check-in • 23 Oct 2026',
          maps: 'https://www.google.com/maps/search/?api=1&query=Belur+Temple'
        },
        {
          id: 'dee_reach_2',
          title: 'Halebidu Temple',
          city: 'Hassan',
          img: 'assets/destinations/mysuru_hd.jpg',
          date: 'Verified GPS Check-in • 20 Oct 2026',
          maps: 'https://www.google.com/maps/search/?api=1&query=Halebidu+Temple'
        },
        {
          id: 'dee_reach_3',
          title: 'Shravanabelagola Gommateshwara',
          city: 'Hassan',
          img: 'assets/destinations/bangalore_hd.jpg',
          date: 'Verified GPS Check-in • 14 Oct 2026',
          maps: 'https://www.google.com/maps/search/?api=1&query=Shravanabelagola'
        }
      ]
    }
  ];

  let activeProfileId = 'me';

  function loadCommunityProfiles() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY + '_community');
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return COMMUNITY_PROFILES;
  }

  function saveCommunityProfiles(profiles) {
    try {
      localStorage.setItem(STORAGE_KEY + '_community', JSON.stringify(profiles));
    } catch (e) {}
  }

  let communityList = loadCommunityProfiles();

  function getMyProfileState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY + '_my');
      if (raw) return JSON.parse(raw);
    } catch (e) {}

    let name = 'Divya Shettar';
    let email = 'divyashettar236@gmail.com';
    let handle = 'weekend_wanderer';
    let avatar = 'D';

    if (window.Clerk && window.Clerk.user) {
      name = window.Clerk.user.fullName || window.Clerk.user.firstName || name;
      handle = (window.Clerk.user.username || name.toLowerCase().replace(/\s+/g, '_')) + '_explorer';
      email = (window.Clerk.user.primaryEmailAddress && window.Clerk.user.primaryEmailAddress.emailAddress) || email;
      if (window.Clerk.user.imageUrl) {
        avatar = `<img src="${window.Clerk.user.imageUrl}" class="exp-avatar-img" alt="${name}">`;
      } else {
        avatar = (name.charAt(0) || 'D').toUpperCase();
      }
    }

    return {
      id: 'me',
      name: name,
      handle: handle,
      role: 'Karnataka Travel & Heritage Explorer',
      bio: '🎒 Weekend Wanderer | 🌊 Coastal & Heritage Trail Explorer | 📍 Karnataka, India\nTracking visited destinations, live check-ins & completed journeys!',
      avatar: avatar,
      email: email,
      isPrivate: false,
      followers: 980,
      following: 245,
      highlights: [
        { icon: '🌊', label: 'Beaches' },
        { icon: '🏛️', label: 'Temples' },
        { icon: '☕', label: 'Food' },
        { icon: '🌄', label: 'Hills' }
      ],
      posts: [
        {
          id: 'my_post_1',
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
          id: 'my_post_2',
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
          id: 'my_post_3',
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
        },
        {
          id: 'my_post_priv_1',
          img: 'assets/destinations/bangalore_hd.jpg',
          location: 'Bangalore Palace & Gardens',
          caption: '🔒 [Private Check-in] Early morning heritage photography walk before the crowd arrived. Personal journal note.',
          likes: 5,
          isLiked: true,
          date: '3 days ago • 7:00 AM',
          comments: [],
          isPrivate: true
        }
      ],
      reachedPlaces: [
        {
          id: 'my_reach_1',
          title: 'Panambur Beach',
          city: 'Mangaluru',
          img: 'assets/places/panambur_beach.jpg',
          date: 'Verified GPS Check-in • 28 Oct 2026',
          maps: 'https://www.google.com/maps/search/?api=1&query=Panambur+Beach+Mangaluru'
        },
        {
          id: 'my_reach_2',
          title: 'Woodlands Restaurant',
          city: 'Mangaluru',
          img: 'assets/destinations/mangaluru_hd.jpg',
          date: 'Verified GPS Check-in • 28 Oct 2026',
          maps: 'https://www.google.com/maps/search/?api=1&query=Woodlands+Restaurant+Mangalore'
        },
        {
          id: 'my_reach_3',
          title: 'Someshwara Beach & Temple',
          city: 'Mangaluru',
          img: 'assets/places/someshwara_temple.jpg',
          date: 'Verified GPS Check-in • 27 Oct 2026',
          maps: 'https://www.google.com/maps/search/?api=1&query=Someshwara+Temple+Mangaluru'
        },
        {
          id: 'my_reach_4',
          title: 'Bangalore Palace Grounds',
          city: 'Bangalore',
          img: 'assets/destinations/bangalore_hd.jpg',
          date: 'Verified GPS Check-in • 25 Oct 2026',
          maps: 'https://www.google.com/maps/search/?api=1&query=Bangalore+Palace'
        }
      ]
    };
  }

  function saveMyProfileState(state) {
    try {
      localStorage.setItem(STORAGE_KEY + '_my', JSON.stringify(state));
    } catch (e) {}
  }

  let myProfile = getMyProfileState();

  function getActiveProfile() {
    if (activeProfileId === 'me') return myProfile;
    const found = communityList.find(p => p.id === activeProfileId);
    return found || myProfile;
  }

  function escapeHtml(str) {
    return String(str || '').replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m]);
  }

  function createProfileModalDOM() {
    if (document.getElementById('exp-profile-overlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'exp-profile-overlay';
    overlay.className = 'exp-profile-overlay';

    overlay.innerHTML = `
      <div class="exp-profile-card">
        <!-- Explorer Directory Bar (Stories Carousel) -->
        <div class="exp-explorer-directory-bar">
          <div class="exp-explorer-bar-title-row">
            <span class="exp-explorer-bar-title">👥 Community Explorers:</span>
            <button class="exp-guide-trigger-btn" onclick="window.ExplorerProfile.toggleGuideModal(true)" title="How Explorer Profile Works">
              ✨ Profile Guide
            </button>
          </div>
          <div class="exp-explorer-bubbles-row">
            <button class="exp-user-bubble ${activeProfileId === 'me' ? 'active' : ''}" onclick="window.ExplorerProfile.switchProfile('me')" title="View Your Profile">
              <div class="exp-user-bubble-ring me">
                <span id="exp-bubble-me-av">${myProfile.avatar}</span>
              </div>
              <span class="exp-user-bubble-name">You</span>
            </button>
            ${communityList.map(u => `
              <button class="exp-user-bubble ${activeProfileId === u.id ? 'active' : ''}" onclick="window.ExplorerProfile.switchProfile('${u.id}')" title="View ${escapeHtml(u.name)}'s Profile">
                <div class="exp-user-bubble-ring ${u.isPrivate ? 'private-ring' : ''}">
                  <span>${escapeHtml(u.avatar)}</span>
                </div>
                <span class="exp-user-bubble-name">${escapeHtml(u.name.split(' ')[0])} ${u.isPrivate ? '🔒' : ''}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Top App Bar -->
        <div class="exp-profile-topbar">
          <div class="exp-profile-handle-wrap">
            <span class="exp-brand-pill">ExplorerProfile</span>
            <span class="exp-profile-handle" id="exp-render-handle">@...</span>
            <span class="exp-profile-privacy-badge" id="exp-privacy-btn">...</span>
          </div>
          <div style="display:flex;align-items:center;gap:8px;">
            <button class="exp-guide-btn-icon" onclick="window.ExplorerProfile.toggleGuideModal(true)" title="Open 4-Step Feature Guide">
              ❓
            </button>
            <button class="exp-profile-close-btn" onclick="window.ExplorerProfile.close()" title="Close Profile">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </div>

        <!-- Scroll Body -->
        <div class="exp-profile-scroll-body" id="exp-profile-scroll-body">
          <!-- Dynamic Content Rendered by renderProfileView() -->
        </div>

        <!-- Sub-Modal: 4-Point Profile Feature Guide -->
        <div class="exp-submodal-overlay" id="exp-submodal-guide">
          <div class="exp-submodal-header">
            <span class="exp-submodal-title">✨ How Your Explorer Profile Works</span>
            <button class="exp-profile-close-btn" onclick="window.ExplorerProfile.toggleGuideModal(false)">✕</button>
          </div>
          <div class="exp-guide-scroll-list">
            <div class="exp-guide-item">
              <div class="exp-guide-num">1</div>
              <div>
                <h4 class="exp-guide-heading">🔒 Public vs Private Mode</h4>
                <p class="exp-guide-text">Tap the <strong>🌐 Public / 🔒 Private</strong> pill in the top header (or the action bar button).<br>
                • <strong>Public:</strong> Your posts and places reached are visible to everyone in the explorer community.<br>
                • <strong>Private:</strong> Your check-ins are locked and marked with a privacy badge (🔒 Only you and approved explorers can see your check-ins).</p>
              </div>
            </div>

            <div class="exp-guide-item">
              <div class="exp-guide-num">2</div>
              <div>
                <h4 class="exp-guide-heading">📍 Places Reached (Automatic GPS Sync!)</h4>
                <p class="exp-guide-text">Connected directly to the AI Agent Journey Tracker. Whenever GPS detects you have reached a destination (e.g. Panambur Beach, Shettihalli Church, Woodlands), it automatically adds that place to your profile under the <strong>"PLACES REACHED"</strong> tab! Includes Date & Time, 🎯 Verified GPS badge, and Google Maps link.</p>
              </div>
            </div>

            <div class="exp-guide-item">
              <div class="exp-guide-num">3</div>
              <div>
                <h4 class="exp-guide-heading">📸 Posts Grid (Instagram Style)</h4>
                <p class="exp-guide-text">3-column square photo grid with hover likes (❤️ 42) and location pill (📍 Panambur Beach). Tap <strong>📸 + Post</strong> to share a new check-in with your own caption, photo, and destination tag!</p>
              </div>
            </div>

            <div class="exp-guide-item">
              <div class="exp-guide-num">4</div>
              <div>
                <h4 class="exp-guide-heading">✏️ Customizable Profile</h4>
                <p class="exp-guide-text">Change your Name, @handle, Bio, and Avatar photo/emoji with one click in the "Edit Profile" popup. Integrates seamlessly with your Clerk account when signed in.</p>
              </div>
            </div>

            <div class="exp-guide-tips-box">
              <div style="font-weight:700;color:#c084fc;margin-bottom:4px;">🚀 How to Open Your Profile Anytime:</div>
              <div>• <strong>Top Navbar:</strong> Click your avatar <strong>D</strong> or Profile button.</div>
              <div>• <strong>Mobile Drawer:</strong> Open menu and tap <strong>📸 My Explorer Profile</strong>.</div>
              <div>• <strong>Journey Tracker:</strong> Click <strong>👤 My Profile</strong> in the itinerary.</div>
            </div>
          </div>
          <button class="exp-btn-primary" style="width:100%;justify-content:center;margin-top:14px;" onclick="window.ExplorerProfile.toggleGuideModal(false)">
            Got it, Let's Explore! 🚀
          </button>
        </div>

        <!-- Sub-Modal: Edit Profile -->
        <div class="exp-submodal-overlay" id="exp-submodal-edit">
          <div class="exp-submodal-header">
            <span class="exp-submodal-title">Edit Explorer Profile</span>
            <button class="exp-profile-close-btn" onclick="window.ExplorerProfile.closeSubmodal('edit')">✕</button>
          </div>
          <div class="exp-input-group">
            <label class="exp-input-label">Full Name</label>
            <input type="text" class="exp-input-text" id="exp-edit-name" value="${escapeHtml(myProfile.name)}">
          </div>
          <div class="exp-input-group">
            <label class="exp-input-label">Username (@handle)</label>
            <input type="text" class="exp-input-text" id="exp-edit-handle" value="${escapeHtml(myProfile.handle)}">
          </div>
          <div class="exp-input-group">
            <label class="exp-input-label">Bio Description</label>
            <textarea class="exp-input-text" id="exp-edit-bio" rows="3">${escapeHtml(myProfile.bio)}</textarea>
          </div>
          <div class="exp-input-group">
            <label class="exp-input-label">Avatar Emoji or Image URL</label>
            <input type="text" class="exp-input-text" id="exp-edit-avatar" value="${escapeHtml(myProfile.avatar)}">
          </div>
          <button class="exp-btn-primary" style="width:100%;justify-content:center;margin-top:10px;" onclick="window.ExplorerProfile.saveProfileEdits()">
            Save Changes ✓
          </button>
        </div>

        <!-- Sub-Modal: Create New Post -->
        <div class="exp-submodal-overlay" id="exp-submodal-post">
          <div class="exp-submodal-header">
            <span class="exp-submodal-title">Share Visited Place Post</span>
            <button class="exp-profile-close-btn" onclick="window.ExplorerProfile.closeSubmodal('post')">✕</button>
          </div>
          
          <div class="exp-input-group">
            <label class="exp-input-label">Post Privacy Mode</label>
            <div class="exp-post-privacy-picker">
              <label class="exp-privacy-opt">
                <input type="radio" name="exp-post-privacy" id="exp-post-privacy-public" value="public" checked>
                <span>🌐 Public Post (Shared on grid)</span>
              </label>
              <label class="exp-privacy-opt">
                <input type="radio" name="exp-post-privacy" id="exp-post-privacy-private" value="private">
                <span>🔒 Private Post (Only for me)</span>
              </label>
            </div>
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
            <label class="exp-input-label">Place Visited (e.g. Panambur Beach, Mangaluru)</label>
            <input type="text" class="exp-input-text" id="exp-newpost-location" placeholder="e.g. Someshwara Beach, Mangaluru">
          </div>
          <div class="exp-input-group">
            <label class="exp-input-label">Caption & Travel Experience</label>
            <textarea class="exp-input-text" id="exp-newpost-caption" rows="3" placeholder="Describe the place, sunset, vibe, food..."></textarea>
          </div>

          <button class="exp-btn-primary" style="width:100%;justify-content:center;margin-top:10px;" onclick="window.ExplorerProfile.publishPost()">
            Share Visited Place 🚀
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

  function renderProfileView() {
    const container = document.getElementById('exp-profile-scroll-body');
    if (!container) return;

    const user = getActiveProfile();
    const isMe = (activeProfileId === 'me');

    const handleEl = document.getElementById('exp-render-handle');
    if (handleEl) handleEl.textContent = '@' + user.handle;

    const privacyBadge = document.getElementById('exp-privacy-btn');
    if (privacyBadge) {
      privacyBadge.className = 'exp-profile-privacy-badge ' + (user.isPrivate ? 'private' : 'public');
      if (isMe) {
        privacyBadge.onclick = () => window.ExplorerProfile.togglePrivacy();
        privacyBadge.title = 'Tap to switch your profile between Public and Private';
        privacyBadge.innerHTML = `<span>${user.isPrivate ? '🔒 Private' : '🌐 Public'}</span>`;
      } else {
        privacyBadge.onclick = null;
        privacyBadge.title = user.isPrivate ? 'This user has a private profile' : 'Public Profile';
        privacyBadge.innerHTML = `<span>${user.isPrivate ? '🔒 Private' : '🌐 Public'}</span>`;
      }
    }

    document.querySelectorAll('.exp-user-bubble').forEach(b => b.classList.remove('active'));
    const activeBubble = document.querySelector(`.exp-user-bubble[onclick*="'${activeProfileId}'"]`);
    if (activeBubble) activeBubble.classList.add('active');

    const publicPosts = user.posts.filter(p => !p.isPrivate);
    const privatePosts = user.posts.filter(p => p.isPrivate);

    // Private profile screen for other explorers
    if (!isMe && user.isPrivate && !user.isFollowing) {
      container.innerHTML = `
        <div class="exp-profile-header-grid">
          <div class="exp-avatar-ring private">
            <div class="exp-avatar-inner">${user.avatar}</div>
            <span class="exp-avatar-badge-star">🔒</span>
          </div>
          <div class="exp-stats-row">
            <div class="exp-stat-item">
              <span class="exp-stat-num">${user.posts.length}</span>
              <span class="exp-stat-label">Posts</span>
            </div>
            <div class="exp-stat-item">
              <span class="exp-stat-num">${user.reachedPlaces.length}</span>
              <span class="exp-stat-label">Visited</span>
            </div>
            <div class="exp-stat-item">
              <span class="exp-stat-num">${user.followers}</span>
              <span class="exp-stat-label">Followers</span>
            </div>
          </div>
        </div>

        <div class="exp-bio-section">
          <div class="exp-bio-name-row">
            <span class="exp-bio-fullname">${escapeHtml(user.name)}</span>
            <span class="exp-verified-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></span>
          </div>
          <div class="exp-bio-category">${escapeHtml(user.role || 'Explorer')}</div>
          <div class="exp-bio-text">${escapeHtml(user.bio).replace(/\n/g, '<br>')}</div>
        </div>

        <div class="exp-actions-bar">
          <button class="exp-btn-primary" style="flex:1;justify-content:center;" onclick="window.ExplorerProfile.toggleFollowUser('${user.id}')">
            <span>${user.followRequested ? '⏳ Requested' : '➕ Request to Follow'}</span>
          </button>
        </div>

        <div class="exp-insta-private-lock-box">
          <div class="exp-insta-lock-icon">🔒</div>
          <h3 class="exp-insta-lock-title">This Account is Private</h3>
          <p class="exp-insta-lock-desc">Follow @${escapeHtml(user.handle)} to see what places they have reached and view their travel photos.</p>
          <div class="exp-insta-lock-badge">Verified Places Reached: ${user.reachedPlaces.length} Destinations</div>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <!-- Profile Header -->
      <div class="exp-profile-header-grid">
        <div class="exp-avatar-ring" ${isMe ? 'onclick="window.ExplorerProfile.promptAvatarChange()" title="Tap to change avatar"' : ''}>
          <div class="exp-avatar-inner" id="exp-render-avatar">${user.avatar}</div>
          <span class="exp-avatar-badge-star">${user.isPrivate ? '🔒' : '★'}</span>
        </div>

        <div class="exp-stats-row">
          <div class="exp-stat-item" onclick="window.ExplorerProfile.switchTab('posts')" title="View Public Posts">
            <span class="exp-stat-num" id="exp-count-posts">${publicPosts.length}</span>
            <span class="exp-stat-label">Posts</span>
          </div>
          <div class="exp-stat-item" onclick="window.ExplorerProfile.switchTab('reached')" title="View All Visited Places">
            <span class="exp-stat-num" id="exp-count-reached">${user.reachedPlaces.length}</span>
            <span class="exp-stat-label">Visited</span>
          </div>
          <div class="exp-stat-item" title="Community Followers">
            <span class="exp-stat-num">${user.followers || 980}</span>
            <span class="exp-stat-label">Followers</span>
          </div>
        </div>
      </div>

      <!-- Bio -->
      <div class="exp-bio-section">
        <div class="exp-bio-name-row">
          <span class="exp-bio-fullname" id="exp-render-fullname">${escapeHtml(user.name)}</span>
          <span class="exp-verified-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></span>
          <span class="exp-level-chip">Lv. 3 Explorer</span>
        </div>
        ${isMe ? `<div class="exp-bio-email" id="exp-render-email">${escapeHtml(user.email || 'divyashettar236@gmail.com')}</div>` : ''}
        <div class="exp-bio-category">${escapeHtml(user.role || 'Karnataka Travel Explorer')}</div>
        <div class="exp-bio-text" id="exp-render-bio">${escapeHtml(user.bio).replace(/\n/g, '<br>')}</div>
      </div>

      <!-- Action Buttons Bar -->
      <div class="exp-actions-bar">
        ${isMe ? `
          <button class="exp-btn-secondary" onclick="window.ExplorerProfile.openEditModal()">
            <span>✏️ Edit Profile</span>
          </button>
          <button class="exp-btn-secondary" onclick="window.ExplorerProfile.switchTab('account')">
            <span>⚙️ Manage Account</span>
          </button>
          <button class="exp-btn-primary" onclick="window.ExplorerProfile.openNewPostModal()">
            <span>📸 + Post</span>
          </button>
        ` : `
          <button class="${user.isFollowing ? 'exp-btn-secondary' : 'exp-btn-primary'}" style="flex:1;justify-content:center;" onclick="window.ExplorerProfile.toggleFollowUser('${user.id}')">
            <span>${user.isFollowing ? '✓ Following' : '➕ Follow'}</span>
          </button>
          <button class="exp-btn-secondary" style="flex:1;justify-content:center;" onclick="alert('💬 Direct messaging with @${escapeHtml(user.handle)} will open in community chat!');">
            <span>💬 Message</span>
          </button>
        `}
      </div>

      <!-- Story Highlights Circles -->
      <div class="exp-highlights-scroll">
        ${(user.highlights || []).map(h => `
          <div class="exp-highlight-item" onclick="window.ExplorerProfile.filterHighlights('${h.label}')">
            <div class="exp-highlight-circle">${h.icon}</div>
            <span class="exp-highlight-label">${h.label}</span>
          </div>
        `).join('')}
        ${isMe ? `
          <div class="exp-highlight-item" onclick="window.ExplorerProfile.addHighlightPrompt()">
            <div class="exp-highlight-circle" style="border-style:dashed;">+</div>
            <span class="exp-highlight-label">New Trip</span>
          </div>
        ` : ''}
      </div>

      <!-- Tabs Navigation -->
      <div class="exp-tabs-nav">
        <button class="exp-tab-btn active" id="tab-btn-posts" onclick="window.ExplorerProfile.switchTab('posts')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
          <span>POSTS (${publicPosts.length})</span>
        </button>
        <button class="exp-tab-btn" id="tab-btn-reached" onclick="window.ExplorerProfile.switchTab('reached')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>PLACES REACHED (${user.reachedPlaces.length})</span>
        </button>
        ${isMe ? `
          <button class="exp-tab-btn" id="tab-btn-private" onclick="window.ExplorerProfile.switchTab('private')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            <span>PRIVATE (${privatePosts.length})</span>
          </button>
          <button class="exp-tab-btn" id="tab-btn-account" onclick="window.ExplorerProfile.switchTab('account')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            <span>ACCOUNT</span>
          </button>
        ` : ''}
      </div>

      <!-- TAB 1: POSTS -->
      <div class="exp-tab-panel active" id="panel-posts">
        <div class="exp-posts-grid">
          ${renderPostsGrid(publicPosts, false)}
        </div>
      </div>

      <!-- TAB 2: PLACES REACHED -->
      <div class="exp-tab-panel" id="panel-reached">
        <div class="exp-reached-header-bar">
          <div style="font-size:0.75rem;color:#38bdf8;font-weight:600;display:flex;align-items:center;gap:6px;">
            <span>🛰️</span> <span>Verified places reached by ${escapeHtml(user.name)}:</span>
          </div>
          ${isMe ? `
            <button class="exp-btn-secondary" style="padding:4px 10px;font-size:0.72rem;" onclick="window.ExplorerProfile.promptAddPlace()">
              + Check-in Spot
            </button>
          ` : ''}
        </div>
        <div class="exp-places-reached-list">
          ${renderReachedList(user.reachedPlaces)}
        </div>
      </div>

      ${isMe ? `
        <!-- TAB 3: PRIVATE POSTS -->
        <div class="exp-tab-panel" id="panel-private">
          <div class="exp-private-banner">
            <div class="exp-private-banner-icon">🔒</div>
            <h4>Private Visited Places & Photos</h4>
            <p>These check-ins are strictly private and visible only to you on this device.</p>
          </div>
          <div class="exp-posts-grid">
            ${renderPostsGrid(privatePosts, true)}
          </div>
        </div>

        <!-- TAB 4: ACCOUNT SETTINGS -->
        <div class="exp-tab-panel" id="panel-account">
          <div class="exp-account-settings-card">
            <div class="exp-settings-section-title">👤 Account & Explorer Profile Details</div>
            <div class="exp-settings-item">
              <span class="exp-settings-label">Full Name:</span>
              <span class="exp-settings-val">${escapeHtml(user.name)}</span>
            </div>
            <div class="exp-settings-item">
              <span class="exp-settings-label">Username (@handle):</span>
              <span class="exp-settings-val">@${escapeHtml(user.handle)}</span>
            </div>
            <div class="exp-settings-item">
              <span class="exp-settings-label">Primary Account Email:</span>
              <span class="exp-settings-val" style="color:#38bdf8;">${escapeHtml(user.email || 'divyashettar236@gmail.com')}</span>
            </div>
            <div class="exp-settings-item">
              <span class="exp-settings-label">Security & Provider:</span>
              <span class="exp-settings-val" style="color:#34d399;">🛡️ Google / Clerk Verified</span>
            </div>
            <div class="exp-settings-item" style="cursor:pointer;" onclick="window.ExplorerProfile.togglePrivacy()">
              <div>
                <div style="font-weight:600;color:#fff;font-size:0.82rem;">Global Account Privacy</div>
                <div style="font-size:0.72rem;color:rgba(255,255,255,0.5);">${user.isPrivate ? 'Profile is Private (Only you see your posts)' : 'Profile is Public (Anyone can discover your journeys)'}</div>
              </div>
              <div class="exp-toggle-switch ${user.isPrivate ? 'active' : ''}"></div>
            </div>
            <div class="exp-settings-actions-group">
              <button type="button" class="exp-btn-secondary" style="width:100%;justify-content:center;margin-bottom:8px;" onclick="window.ExplorerProfile.openEditModal()">
                ✏️ Edit Profile Bio & Handle
              </button>
              <button type="button" class="exp-btn-danger" style="width:100%;justify-content:center;" onclick="window.WeekendAuth && window.WeekendAuth.signOut(); window.ExplorerProfile.close();">
                🚪 Sign Out of Account
              </button>
            </div>
          </div>
        </div>
      ` : ''}
    `;
  }

  function renderPostsGrid(posts, isPrivateTab) {
    if (!posts || posts.length === 0) {
      if (isPrivateTab) {
        return '<div style="grid-column:span 3;text-align:center;padding:30px;color:rgba(255,255,255,0.4);font-size:0.8rem;">No private posts yet. When sharing with "+ Post", select "Private" to save it here!</div>';
      }
      return '<div style="grid-column:span 3;text-align:center;padding:30px;color:rgba(255,255,255,0.4);font-size:0.8rem;">No posts yet for this explorer.</div>';
    }
    return posts.map(p => `
      <div class="exp-post-tile" onclick="window.ExplorerProfile.openPostLightbox('${p.id}')">
        <img src="${p.img}" alt="${escapeHtml(p.location)}" class="exp-post-img" loading="lazy" onerror="this.src='assets/places/panambur_beach.jpg'">
        <div class="exp-post-overlay">
          <span>❤️ ${p.likes || 1}</span>
          <span style="margin-left:8px;">💬 ${(p.comments && p.comments.length) || 0}</span>
        </div>
        ${p.isPrivate ? '<div class="exp-post-priv-indicator" title="Private Post">🔒 Private</div>' : ''}
        <div class="exp-post-location-tag">📍 ${escapeHtml(p.location.split(',')[0])}</div>
      </div>
    `).join('');
  }

  function renderReachedList(places) {
    if (!places || places.length === 0) {
      return '<div style="text-align:center;padding:30px;color:rgba(255,255,255,0.4);font-size:0.8rem;">No places reached yet for this explorer.</div>';
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
    open: function (userId) {
      createProfileModalDOM();
      if (userId) {
        this.switchProfile(userId);
      } else {
        if (window.Clerk && window.Clerk.user) {
          myProfile.name = window.Clerk.user.fullName || window.Clerk.user.firstName || myProfile.name;
          myProfile.email = (window.Clerk.user.primaryEmailAddress && window.Clerk.user.primaryEmailAddress.emailAddress) || myProfile.email;
          if (window.Clerk.user.imageUrl) {
            myProfile.avatar = `<img src="${window.Clerk.user.imageUrl}" class="exp-avatar-img" alt="${myProfile.name}">`;
          } else {
            myProfile.avatar = (myProfile.name.charAt(0) || 'D').toUpperCase();
          }
        }
        renderProfileView();
      }

      const overlay = document.getElementById('exp-profile-overlay');
      if (overlay) overlay.classList.add('open');
    },

    openForUser: function (nameOrHandle) {
      if (!nameOrHandle) return this.open();
      const needle = nameOrHandle.toLowerCase().trim().replace(/^@/, '');
      
      if (needle.includes(myProfile.name.toLowerCase()) || myProfile.handle.toLowerCase().includes(needle)) {
        return this.open('me');
      }

      const matched = communityList.find(u => 
        u.name.toLowerCase().includes(needle) || 
        needle.includes(u.name.toLowerCase()) || 
        u.handle.toLowerCase().includes(needle)
      );

      if (matched) {
        return this.open(matched.id);
      }

      const initial = nameOrHandle.charAt(0).toUpperCase();
      const newProfile = {
        id: 'user_' + Date.now(),
        name: nameOrHandle,
        handle: nameOrHandle.toLowerCase().replace(/\s+/g, '_') + '_wanderer',
        avatar: initial,
        role: 'Verified Community Reviewer & Traveler',
        bio: '🎒 Verified Traveler on Weekend Explore | 🌊 Exploring Karnataka\'s heritage and scenic destinations.',
        isPrivate: false,
        followers: Math.floor(Math.random() * 800) + 200,
        following: Math.floor(Math.random() * 200) + 50,
        isFollowing: false,
        highlights: [
          { icon: '🌊', label: 'Beaches' },
          { icon: '🏛️', label: 'Temples' }
        ],
        posts: [
          {
            id: 'rev_post_' + Date.now(),
            img: 'assets/places/panambur_beach.jpg',
            location: 'Panambur Beach, Mangaluru',
            caption: 'Loving this destination! Such a peaceful trip. 🌅✨',
            likes: Math.floor(Math.random() * 50) + 10,
            date: 'Recently',
            comments: []
          }
        ],
        reachedPlaces: [
          {
            id: 'rev_reach_' + Date.now(),
            title: 'Panambur Beach',
            city: 'Mangaluru',
            img: 'assets/places/panambur_beach.jpg',
            date: 'Verified Check-in',
            maps: 'https://www.google.com/maps/search/?api=1&query=Panambur+Beach'
          }
        ]
      };

      communityList.push(newProfile);
      saveCommunityProfiles(communityList);
      this.open(newProfile.id);
    },

    toggleGuideModal: function (show) {
      const modal = document.getElementById('exp-submodal-guide');
      if (modal) {
        if (show) modal.classList.add('open');
        else modal.classList.remove('open');
      }
    },

    switchProfile: function (userId) {
      activeProfileId = userId;
      renderProfileView();
      const scrollBody = document.getElementById('exp-profile-scroll-body');
      if (scrollBody) scrollBody.scrollTop = 0;
    },

    toggleFollowUser: function (userId) {
      const user = communityList.find(u => u.id === userId);
      if (!user) return;

      if (user.isPrivate) {
        user.followRequested = !user.followRequested;
        saveCommunityProfiles(communityList);
        renderProfileView();
        alert(user.followRequested ? '⏳ Follow request sent to @' + user.handle + '!' : 'Follow request cancelled.');
        return;
      }

      user.isFollowing = !user.isFollowing;
      user.followers += (user.isFollowing ? 1 : -1);
      saveCommunityProfiles(communityList);
      renderProfileView();
    },

    close: function () {
      const overlay = document.getElementById('exp-profile-overlay');
      if (overlay) overlay.classList.remove('open');
      this.closePostLightbox();
    },

    togglePrivacy: function () {
      if (activeProfileId !== 'me') return;
      myProfile.isPrivate = !myProfile.isPrivate;
      saveMyProfileState(myProfile);
      renderProfileView();
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
      if (activeProfileId !== 'me') return;
      const modal = document.getElementById('exp-submodal-edit');
      if (modal) modal.classList.add('open');
    },

    openNewPostModal: function () {
      if (activeProfileId !== 'me') return;
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
      if (activeProfileId !== 'me') return;
      const nameInp = document.getElementById('exp-edit-name');
      const handleInp = document.getElementById('exp-edit-handle');
      const bioInp = document.getElementById('exp-edit-bio');
      const avatarInp = document.getElementById('exp-edit-avatar');

      if (nameInp) myProfile.name = nameInp.value.trim() || myProfile.name;
      if (handleInp) myProfile.handle = handleInp.value.trim().replace(/^@/, '') || myProfile.handle;
      if (bioInp) myProfile.bio = bioInp.value.trim() || myProfile.bio;
      if (avatarInp) myProfile.avatar = avatarInp.value.trim() || myProfile.avatar;

      saveMyProfileState(myProfile);
      renderProfileView();
      this.closeSubmodal('edit');
    },

    publishPost: function () {
      if (activeProfileId !== 'me') return;
      const locInp = document.getElementById('exp-newpost-location');
      const capInp = document.getElementById('exp-newpost-caption');
      const presetInp = document.getElementById('exp-newpost-preset');
      const privRadio = document.getElementById('exp-post-privacy-private');

      const isPrivatePost = privRadio && privRadio.checked;
      const loc = (locInp && locInp.value.trim()) || 'Karnataka Spot';
      const cap = (capInp && capInp.value.trim()) || (isPrivatePost ? '🔒 Private check-in note' : 'Exploring amazing visited sights in Karnataka!');
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
        isPrivate: isPrivatePost
      };

      myProfile.posts.unshift(newPost);

      const locName = loc.split(',')[0].trim();
      const locCity = (loc.split(',')[1] || 'Karnataka').trim();
      this.addReachedPlace({
        title: locName,
        city: locCity,
        img: finalImg,
        maps: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(loc)
      });

      saveMyProfileState(myProfile);
      renderProfileView();
      this.closeSubmodal('post');
      this.switchTab(isPrivatePost ? 'private' : 'posts');
      this.openPostLightbox(newPost.id);
    },

    openPostLightbox: function (postId) {
      const user = getActiveProfile();
      const post = user.posts.find(p => p.id === postId);
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
              <div class="exp-lightbox-avatar">${user.avatar}</div>
              <div>
                <div class="exp-lightbox-name">
                  ${escapeHtml(user.name)}
                  <span class="exp-verified-badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></span>
                  ${post.isPrivate ? '<span class="exp-post-priv-indicator" style="position:static;display:inline-block;margin-left:6px;font-size:0.65rem;">🔒 Private</span>' : ''}
                </div>
                <div class="exp-lightbox-location">📍 ${escapeHtml(post.location)}</div>
              </div>
            </div>
            <button class="exp-profile-close-btn" onclick="window.ExplorerProfile.closePostLightbox()">✕</button>
          </div>

          <div class="exp-lightbox-comments-list">
            <div class="exp-lightbox-caption-row">
              <span class="exp-lightbox-caption-user">@${escapeHtml(user.handle)}</span>
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
            <input type="text" id="exp-comment-input" class="exp-comment-input" placeholder="Add a comment as @${escapeHtml(myProfile.handle)}..." onkeydown="if(event.key==='Enter') window.ExplorerProfile.addComment('${post.id}')">
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
      const user = getActiveProfile();
      const post = user.posts.find(p => p.id === postId);
      if (!post) return;

      post.isLiked = !post.isLiked;
      post.likes = (post.likes || 0) + (post.isLiked ? 1 : -1);
      if (post.likes < 0) post.likes = 0;

      if (activeProfileId === 'me') {
        saveMyProfileState(myProfile);
      } else {
        saveCommunityProfiles(communityList);
      }
      renderProfileView();

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
      const user = getActiveProfile();
      const post = user.posts.find(p => p.id === postId);
      const input = document.getElementById('exp-comment-input');
      if (!post || !input) return;

      const text = input.value.trim();
      if (!text) return;

      if (!post.comments) post.comments = [];
      post.comments.push({
        user: myProfile.handle || 'explorer',
        text: text
      });

      if (activeProfileId === 'me') {
        saveMyProfileState(myProfile);
      } else {
        saveCommunityProfiles(communityList);
      }
      input.value = '';
      renderProfileView();

      const stream = document.getElementById('exp-comments-stream');
      if (stream) {
        const item = document.createElement('div');
        item.className = 'exp-comment-item';
        item.innerHTML = `<span class="exp-comment-user">@${escapeHtml(myProfile.handle)}</span> <span class="exp-comment-text">${escapeHtml(text)}</span>`;
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
      const exists = myProfile.reachedPlaces.some(p => p.title.toLowerCase() === item.title.toLowerCase());
      if (exists) return;

      myProfile.reachedPlaces.unshift({
        id: 'reach_' + Date.now(),
        title: item.title,
        city: item.city || 'Mangaluru',
        img: item.img || 'assets/places/panambur_beach.jpg',
        date: 'Verified GPS Check-in • ' + new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
        maps: item.maps || 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(item.title)
      });

      saveMyProfileState(myProfile);
      if (activeProfileId === 'me') renderProfileView();
    },

    promptAvatarChange: function () {
      const newAv = prompt('Enter an emoji or image URL for your profile avatar:', myProfile.avatar.length < 5 ? myProfile.avatar : '🎒');
      if (newAv) {
        if (newAv.startsWith('http')) {
          myProfile.avatar = `<img src="${newAv}" class="exp-avatar-img">`;
        } else {
          myProfile.avatar = newAv.trim();
        }
        saveMyProfileState(myProfile);
        renderProfileView();
      }
    },

    filterHighlights: function (label) {
      alert('Viewing "' + label + '" story highlights & check-ins on this explorer\'s profile!');
    },

    addHighlightPrompt: function () {
      const label = prompt('Name for new Trip Highlight (e.g. Goa Trip, Hassan Circuit):');
      if (label) {
        myProfile.highlights.push({ icon: '📍', label: label.trim() });
        saveMyProfileState(myProfile);
        renderProfileView();
      }
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createProfileModalDOM);
  } else {
    createProfileModalDOM();
  }
})();
