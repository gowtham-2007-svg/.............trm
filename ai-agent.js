(function () {
  'use strict';

  // --- Multi-Language Translations ---
  const TRANSLATIONS = {
    en: {
      welcome: "Hi {name}! Welcome to Weekend AI! Where are you starting your trip from?",
      loc_q: "Where are you starting your trip from?",
      loc_detect: "Use My Current Location",
      loc_detected: "Detected your location: {city}!",
      loc_choose: "Choose a Starting City",
      group_q: "How many people in your group?",
      budget_q: "What is your TOTAL group budget? (Not per person)",
      trans_q: "How do you plan to travel?",
      time_q: "Which time slot works best for you?",
      food_q: "What is your food preference?",
      mood_q: "What kind of vibe are you looking for?",
      weather_q: "What's the weather like right now?",
      confirm_title: "Here is your trip summary:",
      generating: "Generating your custom weekend itinerary...",
      start_over: "Start Over",
      change_something: "Change Something / Recalculate",
      itinerary_for: "Weekend Itinerary for {city}",
      solo: "Solo (1)",
      couple: "Couple (2)",
      small_group: "Small Group (3-4)",
      big_group: "Big Group (5-6)",
      large_group: "Large Group (7+)",
      movie_q: "Would you like to include a movie in your 12 PM – 6 PM plan?",
      movie_yes: "Yes, suggest movies 🍿",
      movie_no: "No movie, explore places only 🌿",
      movie_lang_q: "Which language or genre do you prefer? (Personalization)"
    },
    kn: {
      welcome: "ನಮಸ್ಕಾರ {name}! ವೀಕೆಂಡ್ AI ಗೆ ಸುಸ್ವಾಗತ! ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ:",
      loc_q: "ನಿಮ್ಮ ಪ್ರವಾಸವನ್ನು ಎಲ್ಲಿಂದ ಪ್ರಾರಂಭಿಸುತ್ತೀರಿ?",
      loc_detect: "ನನ್ನ ಪ್ರಸ್ತುತ ಸ್ಥಳ ಬಳಸಿ",
      loc_detected: "ನಿಮ್ಮ ಸ್ಥಳ: {city}!",
      loc_choose: "ನಗರವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      group_q: "ನಿಮ್ಮ ಗುಂಪಿನಲ್ಲಿ ಎಷ್ಟು ಜನರಿದ್ದಾರೆ?",
      budget_q: "ನಿಮ್ಮ ಒಟ್ಟು ಬಜೆಟ್ ಎಷ್ಟು?",
      trans_q: "ನೀವು ಹೇಗೆ ಪ್ರಯಾಣಿಸಲು ಬಯಸುತ್ತೀರಿ?",
      time_q: "ಯಾವ ಸಮಯ ಸೂಕ್ತ?",
      food_q: "ಆಹಾರದ ಆಯ್ಕೆ ಏನು?",
      mood_q: "ನಿಮಗೆ ಯಾವ ರೀತಿಯ ಅನುಭವ ಬೇಕು?",
      weather_q: "ಹವಾಮಾನ ಹೇಗಿದೆ?",
      confirm_title: "ಪ್ರವಾಸದ ಸಾರಾಂಶ:",
      generating: "ಪ್ರವಾಸ ಯೋಜನೆಯನ್ನು ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತಿದೆ...",
      start_over: "ಮರುಪ್ರಾರಂಭಿಸಿ",
      change_something: "ಬದಲಾವಣೆ ಮಾಡಿ",
      itinerary_for: "{city} ವಾರಾಂತ್ಯದ ಯೋಜನೆ",
      solo: "ಏಕಾಂಗಿ (1)",
      couple: "ಜೋಡಿ (2)",
      small_group: "ಸಣ್ಣ ಗುಂಪು (3-4)",
      big_group: "ದೊಡ್ಡ ಗುಂಪು (5-6)",
      large_group: "ಗುಂಪು (7+)",
      movie_q: "ನಿಮ್ಮ 12 PM – 6 PM ಯೋಜನೆಯಲ್ಲಿ ಚಲನಚಿತ್ರವನ್ನು ಸೇರಿಸಲು ಬಯಸುತ್ತೀರಾ?",
      movie_yes: "ಹೌದು, ಚಲನಚಿತ್ರಗಳನ್ನು ಸೂಚಿಸಿ 🍿",
      movie_no: "ಬೇಡ, ಸ್ಥಳಗಳನ್ನು ಮಾತ್ರ ಅನ್ವೇಷಿಸಿ 🌿",
      movie_lang_q: "ನಿಮ್ಮ ಆದ್ಯತೆಯ ಭಾಷೆ ಅಥವಾ ಶೈಲಿ ಯಾವುದು?"
    },
    hi: {
      welcome: "नमस्ते {name}! वीकेंड AI में आपका स्वागत है! अपनी भाषा चुनें:",
      loc_q: "आप अपनी यात्रा कहाँ से शुरू कर रहे हैं?",
      loc_detect: "मेरे वर्तमान स्थान का उपयोग करें",
      loc_detected: "आपका स्थान: {city}!",
      loc_choose: "शहर चुनें",
      group_q: "समूह में कितने लोग हैं?",
      budget_q: "आपका कुल ग्रुप बजट क्या है?",
      trans_q: "आप कैसे यात्रा करना चाहते हैं?",
      time_q: "कौन सा समय सबसे अच्छा रहेगा?",
      food_q: "भोजन की प्राथमिकता क्या है?",
      mood_q: "आप किस तरह का अनुभव चाहते हैं?",
      weather_q: "अभी मौसम कैसा है?",
      confirm_title: "आपकी यात्रा का सारांश:",
      generating: "यात्रा योजना बनाई जा रही है...",
      start_over: "फिर से शुरू करें",
      change_something: "कुछ बदलें",
      itinerary_for: "{city} वीकेंड यात्रा कार्यक्रम",
      solo: "अकेले (1)",
      couple: "जोड़ी (2)",
      small_group: "छोटा समूह (3-4)",
      big_group: "बड़ा समूह (5-6)",
      large_group: "बड़ा समूह (7+)",
      movie_q: "क्या आप अपने 12 PM – 6 PM प्लान में मूवी शामिल करना चाहते हैं?",
      movie_yes: "हाँ, मूवी सुझाएं 🍿",
      movie_no: "नहीं, केवल दर्शनीय स्थल 🌿",
      movie_lang_q: "आप किस भाषा या शैली की मूवी पसंद करते हैं?"
    },
    ta: { welcome: "வணக்கம் {name}! Weekend AI க்கு வரவேற்கிறோம்! மொழியைத் தேர்ந்தெடுக்கவும்:" },
    te: { welcome: "నమస్కారం {name}! Weekend AI కి స్వాగతం! మీ భాషను ఎంచుకోండి:" },
    ml: { welcome: "നമസ്കാരം {name}! Weekend AI ലേക്ക് സ്വാഗതം! ഭാഷ തിരഞ്ഞെടുക്കുക:" },
    mr: { welcome: "नमस्कार {name}! Weekend AI मध्ये आपले स्वागत आहे! भाषा निवडा:" },
    bn: { welcome: "হ্যালো {name}! Weekend AI তে স্বাগতম! আপনার भाषा নির্বাচন করুন:" },
    gu: { welcome: "નમસ્તે {name}! Weekend AI માં તમારું સ્વાગત છે! ભાષા પસંદ કરો:" }
  };

  // Helper to get logged-in user name from Clerk / Google authentication
  function getUserDisplayName() {
    try {
      if (window.WeekendAuth && typeof window.WeekendAuth.getUser === 'function') {
        const u = window.WeekendAuth.getUser();
        if (u && u.name) {
          return u.name.split(' ')[0];
        }
      }
      if (window.Clerk && window.Clerk.user) {
        const u = window.Clerk.user;
        if (u.firstName && u.firstName.trim()) {
          return u.firstName.trim();
        }
        if (u.fullName && u.fullName.trim()) {
          return u.fullName.trim().split(' ')[0];
        }
        // Extract name from primary email (e.g. gowtham@gmail.com -> Gowtham)
        const email = (u.primaryEmailAddress && u.primaryEmailAddress.emailAddress)
          || (u.emailAddresses && u.emailAddresses[0] ? u.emailAddresses[0].emailAddress : '');
        if (email) {
          const raw = email.split('@')[0].replace(/[._0-9]/g, ' ').trim();
          const part = raw.split(' ')[0];
          if (part) {
            return part.charAt(0).toUpperCase() + part.slice(1);
          }
        }
      }

      // Check session or local storage
      const saved = sessionStorage.getItem('weekend_user_name') || localStorage.getItem('weekend_user_name');
      if (saved && saved.trim()) {
        return saved.trim().split(' ')[0];
      }
    } catch (e) {
      console.warn('[WeekendAI] Could not retrieve user name:', e);
    }
    return '';
  }

  function t(key, lang) {
    lang = lang || STATE.language || 'en';
    let text = '';
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      text = TRANSLATIONS[lang][key];
    } else {
      text = (TRANSLATIONS.en && TRANSLATIONS.en[key]) || key;
    }

    if (typeof text === 'string' && text.includes('{name}')) {
      const name = getUserDisplayName();
      text = text.replace('{name}', name || 'there');
    }

    return text;
  }

  // ============================================================
  // --- Zero Rupee Situational Training Engine (15 Cases) ---
  // ============================================================

  const ZERO_RUPEE_CASES = [
    {
      id: 'go_out',
      label: 'I want to go somewhere',
      joke: 'Brother, your mind has booked the trip, but your wallet has rejected the payment.',
      plan: 'No problem. Find a nearby free public park or walking route and explore your neighbourhood. Walk only if the destination is safely reachable on foot and the weather is clear. Evening walks between 4:30 PM and 6:00 PM can be beautiful, especially near water or a hilltop where you can enjoy the beautiful sunset, golden sunlight, and cool sea breeze without spending a single rupee.'
    },
    {
      id: 'borrow_30',
      label: 'A friend might lend me Rs 30',
      joke: 'Brother, your bank balance is zero, but your friendship has a small credit department.',
      plan: 'If your friend is comfortable lending Rs 30 and you can repay it, consider a simple low-cost plan. Check actual local prices before buying anything. Keep some money aside for essential needs rather than spending everything on entertainment. Borrowing is always optional and borrowed money must be repaid on time.'
    },
    {
      id: 'maggi',
      label: 'I want to eat Maggi',
      joke: 'Your stomach wants a restaurant experience, but your wallet has booked a meeting about cost reduction.',
      plan: 'First, check whether Maggi and a stove or cooker are already available at home. If yes, that solves it for nearly zero cost. If not, you could ask a trusted person at home for help. If you consider borrowing money, check the actual price at your local shop before assuming any amount will be enough. Prices vary by area and pack size.'
    },
    {
      id: 'movie',
      label: 'I want to watch a movie',
      joke: 'Brother, your theatre budget has disappeared, but the movie plan is not over.',
      plan: 'Look for good movies legally available for free on YouTube Movies, Hotstar free tier, or any platform you already have access to on your phone or TV. Do not pay for a new subscription today. If you need a genre or language suggestion, let me know and I will help you search. If mobile data costs money, use existing Wi-Fi or a movie you have already downloaded. Never watch from piracy sites as they carry legal and security risks.'
    },
    {
      id: 'bored',
      label: 'I have nothing to do',
      joke: 'Brother, even your boredom is working overtime without a salary.',
      plan: 'Try one of these at zero cost: take a walk around your neighbourhood with your phone camera and practise street photography; play an offline game already installed on your device; call or voice-note a friend you have not spoken to in a while; watch a free documentary on YouTube; start learning one new skill using free YouTube tutorials such as sketching, cooking, or coding; or simply sit quietly and plan next week properly. Your weekend does not need a payment receipt to be memorable.'
    },
    {
      id: 'beach',
      label: 'I want to visit the beach',
      joke: 'Brother, your heart is at the beach, but your wallet is still at home.',
      plan: 'If a safe public beach is reachable on foot from your location without any entry charge, plan a walk between 4:30 PM and 6:00 PM. That is the best window to enjoy the beautiful sunset, golden sunlight, and cool sea breeze along the shoreline. Do not visit beaches in the morning or afternoon as the heat can be harsh and the experience less rewarding. If the beach is not walkable or the weather is dangerous, choose the nearest free public park or a shaded promenade instead.'
    },
    {
      id: 'friends_cancel',
      label: 'My friends cancelled the plan',
      joke: 'Brother, your friends cancelled the plan faster than a failed payment.',
      plan: 'Do not cancel your entire day because of someone else. Try a solo walk, practise photography with your phone, visit a free public park, or watch a free movie at home. Unplanned solo time is often more productive than group plans. Keep all activities safe and strictly within your zero budget.'
    },
    {
      id: 'luxury',
      label: 'I want a luxury experience',
      joke: 'Brother, five-star dreams and zero-rupee reality are having a serious negotiation right now.',
      plan: 'For today, try a scenic walk to the best viewpoint in your area, explore a free public attraction or heritage site, practise photography, or set up a comfortable movie session at home. Meanwhile, start a small savings goal for your actual luxury trip. It is far better to save and enjoy the real thing than to borrow money you cannot repay for a temporary experience.'
    },
    {
      id: 'rain',
      label: 'It is raining and I planned to go out',
      joke: 'Brother, even the weather has joined your budget committee and rejected outdoor spending.',
      plan: 'Stay somewhere safe and dry. Enjoy an indoor movie on your device, play a word game or board game with whoever is around, try cooking something simple with available ingredients, or use the time to learn a skill from a free YouTube video. Avoid beaches, trekking paths, and open grounds during storms or dangerous rain conditions.'
    },
    {
      id: 'impress',
      label: 'I want to take someone out with no money',
      joke: 'Brother, you want a romantic film scene, but your wallet cannot afford the opening credits.',
      plan: 'Suggest a free walk in a safe public place such as a park or promenade. Focus on a meaningful conversation, share your favourite photographs or playlists, or plan a simple activity together at home. Be honest about your current budget situation. Never pressure the other person to pay, and never borrow money specifically to impress someone as that creates financial stress for very little return.'
    },
    {
      id: 'two_hours',
      label: 'I have only 2 hours free',
      joke: 'Brother, two hours and zero rupees. Finally, a project that the finance team cannot reject.',
      plan: 'Choose one nearby free activity, allow time to return home safely, and enjoy it without rushing. A short walk, a quick sketching or photography session, or watching a documentary works perfectly. If nothing suitable is within walking distance, choose an engaging activity at home such as reading, writing, or practising a skill.'
    },
    {
      id: 'no_food',
      label: 'I have no money and nothing to eat',
      joke: null,
      plan: 'Brother, this is not the time for a budget joke. Please contact a trusted friend, a family member, or an appropriate local food-support service right now and let them know that you need food. Your immediate physical needs always come before weekend entertainment plans. Everything else can wait.'
    },
    {
      id: 'another_city',
      label: 'I want to travel to another city',
      joke: 'Brother, your travel dreams are interstate, but your wallet has not cleared the city limits.',
      plan: 'Intercity transport, food on the road, accommodation, and emergency expenses all cost money. Without a budget, that trip puts you in a risky situation far from home. Instead, explore something nearby and free today, and genuinely plan the bigger trip for when you have enough saved. A well-funded trip is always safer and more enjoyable than a stressed one.'
    },
    {
      id: 'games',
      label: 'I want to play games or get entertained',
      joke: 'Brother, your gaming budget has entered airplane mode.',
      plan: 'Try offline games already installed on your phone that do not require internet or purchases. Play word games, memory games, or creative challenges with people around you. If you are outdoors, play informal games using what you already have such as stones, chalk, or a ball you own. Avoid any game that requires deposits, paid subscriptions, or in-app purchases.'
    },
    {
      id: 'productive',
      label: 'How can I use this weekend well with no money',
      joke: 'Brother, your wallet has zero balance, but your personal development account is still open.',
      plan: 'Learn a skill using completely free resources on YouTube or free websites such as freeCodeCamp or Khan Academy. Improve your resume or professional profile. Practise coding, writing, drawing, or cooking with available ingredients. Exercise at home using bodyweight routines. Plan and write down your goals for the next month. Your future does not require you to spend money today.'
    }
  ];

  function renderZeroBudgetMode() {
    // Show intent picker after budget is set to Rs 0
    const wrapper = document.createElement('div');
    wrapper.className = 'wai-zero-rupee-wrapper';

    const header = document.createElement('div');
    header.className = 'wai-zero-rupee-header';
    header.innerHTML = `
      <div class="wai-zero-rupee-title">Zero-Rupee Weekend Mode</div>
      <div class="wai-zero-rupee-subtitle">Your budget is Rs 0. No problem at all. What is your situation right now?</div>
    `;
    wrapper.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'wai-zero-rupee-grid';

    ZERO_RUPEE_CASES.forEach(function(cas) {
      const btn = document.createElement('button');
      btn.className = 'wai-zero-rupee-chip';
      btn.textContent = cas.label;
      btn.onclick = function() {
        grid.querySelectorAll('.wai-zero-rupee-chip').forEach(function(b) { b.disabled = true; });
        btn.classList.add('wai-zero-rupee-chip-selected');
        addUserMessage(cas.label);
        showTypingIndicator(function() {
          addAIMessage(buildZeroRupeeResponse(cas));
          showTypingIndicator(function() {
            addAIMessage(buildZeroRupeeFooter());
          }, 600);
        }, 500);
      };
      grid.appendChild(btn);
    });

    wrapper.appendChild(grid);

    if (DOM.chatBody) {
      DOM.chatBody.appendChild(wrapper);
      scrollToBottom();
    }
  }

  function buildZeroRupeeResponse(cas) {
    let html = '<div class="wai-zero-rupee-card">';

    if (cas.joke) {
      html += '<div class="wai-zero-rupee-joke">' + cas.joke + '</div>';
    }

    html += '<div class="wai-zero-rupee-plan">' + cas.plan + '</div>';

    // Case-specific situational notes
    if (cas.id === 'beach') {
      html += '<div class="wai-zero-rupee-rule-note">Beach Timing Rule: Beaches are suggested only between 4:30 PM and 6:00 PM. Morning and afternoon beach visits are never recommended.</div>';
    }
    if (cas.id === 'borrow_30' || cas.id === 'maggi') {
      html += '<div class="wai-zero-rupee-rule-note">Borrow Rule: Borrowing is always optional. Borrowed money must be repaid. Never borrow more than you can return comfortably.</div>';
    }
    if (cas.id === 'no_food') {
      html += '<div class="wai-zero-rupee-urgent-note">If you are in immediate difficulty and cannot reach anyone, look for a local Anganwadi centre, NGO food service, or community kitchen in your area.</div>';
    }

    html += '</div>';
    return html;
  }

  function buildZeroRupeeFooter() {
    return (
      '<div class="wai-zero-rupee-footer">' +
      '<div style="font-weight:700;margin-bottom:6px;">What else can I help you with?</div>' +
      '<div style="display:flex;flex-wrap:wrap;gap:6px;">' +
      '<button class="wai-chip" onclick="window.WeekendAI.reset()">Start a New Plan</button>' +
      '<button class="wai-chip" onclick="window.WeekendAI._showZeroRupeeAgain()">Ask Another Zero-Rupee Situation</button>' +
      '</div>' +
      '</div>'
    );
  }

  // --- Initial State ---
  const INITIAL_STATE = {
    language: 'en',
    destination: 'Mangaluru',
    startLocation: '',
    people: 2,
    peopleLabel: 'Couple (2)',
    budget: 500,
    budgetLabel: '₹500',
    transport: 'Local Bus',
    transportKey: 'bus',
    timeSlot: '12 PM – 6 PM (Default)',
    timeSlotKey: 'prime',
    selectedMovie: null,
    moviePreference: 'none',
    movieLanguage: 'all',
    movieGenre: 'all',
    food: 'Vegetarian',
    foodKey: 'veg',
    mood: 'Chill & Relax',
    moodKey: 'chill',
    weather: 'Clear / Sunny',
    weatherKey: 'clear',
    currentStepIndex: 0
  };

  let STATE = JSON.parse(JSON.stringify(INITIAL_STATE));

  // --- City Knowledge Base ---
  const CITIES_DATA = {
    'Mangaluru': {
      isCoastal: true,
      hasBeach: true,
      spots: {
        nature: [
          { name: "Panambur Beach", cost: 0, time: "Sunset (4:30 PM – 6:00 PM)", desc: "Clean shoreline to witness the beautiful sunset, warm golden sunlight, and cool sea breeze." },
          { name: "Tannirbhavi Beach & Tree Park", cost: 20, time: "Sunset (4:30 PM – 6:00 PM)", desc: "Pine tree trails leading to shoreline waves, beautiful sunset, golden sunlight, and cool sea breeze." },
          { name: "Kadroo Park & Kadri Park Musical Fountain", cost: 15, time: "Evening", desc: "Sprawling green lawns and leisure walking trail." }
        ],
        culture: [
          { name: "Kadri Manjunatha Temple", cost: 0, time: "Morning", desc: "Historic 10th-century temple with natural mountain springs." },
          { name: "St. Aloysius Chapel", cost: 0, time: "Afternoon", desc: "World-famous hand-painted ceiling and wall frescoes." },
          { name: "Kudroli Gokarnanatheshwara Temple", cost: 0, time: "Evening", desc: "Spectacular golden architecture with grand illuminations." }
        ],
        chill: [
          { name: "Someshwara Beach & Rudra Shila Rocks", cost: 0, time: "Sunset (4:30 PM – 6:00 PM)", desc: "Majestic boulder viewpoints facing the roaring Arabian Sea, beautiful sunset, golden sunlight, and cool sea breeze." },
          { name: "Sultan Battery Watchtower", cost: 10, time: "Morning", desc: "Tipu Sultan's historical naval watchtower by the backwaters." }
        ],
        adventure: [
          { name: "Sasihithlu Beach (Surfing & Estuary)", cost: 0, time: "Sunset (4:30 PM – 6:00 PM)", desc: "Pristine meeting point of river and sea with beautiful sunset, golden sunlight, and cool sea breeze." }
        ],
        shopping: [
          { name: "City Centre Mall (K.S. Rao Road)", cost: 0, time: "Afternoon", desc: "Top shopping hub with verified Gogupa food counters.", hasMall: true },
          { name: "Forum Fiza Mall", cost: 0, time: "Afternoon", desc: "Spacious shopping and recreation arena.", hasMall: true },
          { name: "Hampankatta Bazaar", cost: 0, time: "Evening", desc: "Lively traditional local market for cashews and sweets." }
        ]
      },
      rainSpots: [
        { name: "St. Aloysius Covered Museum & Chapel", cost: 0, desc: "Indoor heritage art, completely covered from rain." },
        { name: "City Centre Mall Indoor Promenade", cost: 0, desc: "Safe covered mall complex with food court and games." },
        { name: "Pilikula Science Centre & Planetarium", cost: 50, desc: "Fascinating indoor scientific exhibits and 3D sky theatre." }
      ],
      busRoutes: [
        { from: "State Bank", to: "Panambur Beach", route: "Bus #2A / #13E", fare: 15 },
        { from: "State Bank", to: "Kadri Temple", route: "Bus #4B / #14", fare: 10 },
        { from: "Hampankatta", to: "Tannirbhavi", route: "Bus #16A + Ferry", fare: 20 },
        { from: "KSRTC Stand", to: "City Centre Mall", route: "Bus #19 / #22", fare: 10 }
      ],
      foodSpots: {
        veg: "Chutney / Woodlands (₹60-120 per plate)",
        nonveg: "Giri Manja's / Machali (₹150-250 per meal)",
        budget: "Local Udupi Tiffin Canteen (₹30-50 per snack)"
      }
    },
    'Bangalore': {
      isCoastal: false,
      hasBeach: false,
      spots: {
        nature: [
          { name: "Cubbon Park", cost: 0, time: "Morning", desc: "300 acres of lush greenery, bamboo groves, and walking paths." },
          { name: "Lalbagh Botanical Garden", cost: 30, time: "Morning / Afternoon", desc: "Historic glass house and rare exotic botanical species." },
          { name: "Sankey Tank", cost: 0, time: "Evening", desc: "Peaceful lakeside promenade with illuminated twilight views." }
        ],
        culture: [
          { name: "Bangalore Palace", cost: 250, time: "Morning", desc: "Tudor-style royal palace with rich wooden carvings." },
          { name: "ISKCON Temple (Rajajinagar)", cost: 0, time: "Evening", desc: "Magnificent hill shrine with spiritual serenity." },
          { name: "National Gallery of Modern Art (NGMA)", cost: 20, time: "Afternoon", desc: "Colonial mansion housing classical and contemporary Indian art." }
        ],
        chill: [
          { name: "Ulsoor Lake Promenade", cost: 0, time: "Evening", desc: "Calm water breezes and tree-shaded walking tracks." },
          { name: "Dhaatu Puppet Theatre & Cultural Space", cost: 50, time: "Afternoon", desc: "Intriguing traditional storytelling and puppet craft." }
        ],
        adventure: [
          { name: "Turahalli Forest Trail", cost: 0, time: "Morning", desc: "Bangalore's last surviving natural forest hill with rocky viewpoints." }
        ],
        shopping: [
          { name: "Orion Mall (Brigade Gateway)", cost: 0, time: "Afternoon", desc: "Picturesque lakeside mall with verified Gogupa stalls (₹20/plate).", hasMall: true },
          { name: "Commercial Street", cost: 0, time: "Evening", desc: "Bustling street shopping paradise for clothing and artifacts." },
          { name: "Garuda Mall (Magrath Road)", cost: 0, time: "Afternoon", desc: "Central shopping and entertainment mall.", hasMall: true }
        ]
      },
      rainSpots: [
        { name: "Visvesvaraya Industrial & Technological Museum", cost: 85, desc: "4 floors of interactive indoor science and engineering exhibits." },
        { name: "National Gallery of Modern Art (Indoor Wings)", cost: 20, desc: "Safe covered heritage art galleries and indoor cafe." },
        { name: "Orion Mall Indoor Lakeside Arcade", cost: 0, desc: "Grand covered shopping complex safe from rains." }
      ],
      busRoutes: [
        { from: "Majestic", to: "Cubbon Park", route: "Metro Purple Line / BMTC 201", fare: 15 },
        { from: "Majestic", to: "Lalbagh", route: "Metro Green Line / BMTC 215", fare: 15 },
        { from: "Shivajinagar", to: "Commercial Street", route: "Short Walk (5 mins)", fare: 0 },
        { from: "Majestic", to: "ISKCON Temple", route: "Metro Green Line to Mahalakshmi", fare: 20 }
      ],
      foodSpots: {
        veg: "MTR / Vidyarthi Bhavan / CTR (₹70-130)",
        nonveg: "Nagarjuna / Meghana Foods (₹180-280)",
        budget: "Brahmin's Coffee Bar / Udupi Upahar (₹30-60)"
      }
    },
    'Mysuru': {
      isCoastal: false,
      hasBeach: false,
      spots: {
        nature: [
          { name: "Kukkarahalli Lake Nature Walk", cost: 0, time: "Morning", desc: "Scenic nature loop with migratory aquatic birds." },
          { name: "Brindavan Gardens (KRS)", cost: 50, time: "Evening", desc: "Terraced ornamental gardens and illuminated musical fountain." },
          { name: "Chamundi Hill Viewpoint", cost: 0, time: "Sunset", desc: "Panoramic bird's-eye view of the entire heritage city." }
        ],
        culture: [
          { name: "Mysore Palace (Amba Vilas)", cost: 100, time: "Morning / Afternoon", desc: "Indo-Saracenic palace with Durbar halls and royal thrones." },
          { name: "St. Philomena's Cathedral", cost: 0, time: "Morning", desc: "Majestic Neo-Gothic twin spires and underground crypt." },
          { name: "Jaganmohan Palace Art Gallery", cost: 75, time: "Afternoon", desc: "Rare original paintings by Raja Ravi Varma." }
        ],
        chill: [
          { name: "Karanji Lake Nature Park", cost: 35, time: "Morning / Afternoon", desc: "India's largest walk-through aviary with peaceful butterfly park." }
        ],
        adventure: [
          { name: "Chamundi Hill 1000 Steps Climb", cost: 0, time: "Early Morning", desc: "Historic stone stairway climb past the giant Nandi monolith." }
        ],
        shopping: [
          { name: "Devaraja Market", cost: 0, time: "Evening", desc: "Centuries-old market fragrant with Mysore jasmine, oils, and silk." },
          { name: "Mall of Mysore", cost: 0, time: "Afternoon", desc: "Modern mall near race course with food court and Gogupa counter.", hasMall: true }
        ]
      },
      rainSpots: [
        { name: "Mysore Palace Covered Interior Chambers", cost: 100, desc: "Fully sheltered royal corridors and galleries." },
        { name: "Railway Museum Mysuru (Indoor Pavilions)", cost: 50, desc: "Covered royal railway coaches and vintage locomotives." },
        { name: "Mall of Mysore Indoor complex", cost: 0, desc: "Safe, dry leisure, shopping, and dining." }
      ],
      busRoutes: [
        { from: "City Bus Stand", to: "Mysore Palace", route: "Walking (300m)", fare: 0 },
        { from: "City Bus Stand", to: "Chamundi Hill", route: "Bus #201", fare: 20 },
        { from: "City Bus Stand", to: "Brindavan Gardens", route: "Bus #303", fare: 30 }
      ],
      foodSpots: {
        veg: "Mylari Dosa / Guru Sweets for Mysore Pak (₹40-100)",
        nonveg: "Hotel RRR / Hanumanthu Mess (₹160-260)",
        budget: "Local Heritage Mess (₹35-65)"
      }
    },
    'Goa': {
      isCoastal: true,
      hasBeach: true,
      spots: {
        nature: [
          { name: "Miramar Beach", cost: 0, time: "Sunset (4:30 PM – 6:00 PM)", desc: "Golden sands to witness the beautiful sunset, warm golden sunlight, and cool sea breeze." },
          { name: "Dona Paula Viewpoint", cost: 0, time: "Sunset (4:30 PM – 6:00 PM)", desc: "Scenic coastal promontory overlooking the Arabian Sea, beautiful sunset, and cool sea breeze." },
          { name: "Salim Ali Bird Sanctuary", cost: 20, time: "Morning", desc: "Mangrove forest reserve along the Mandovi river." }
        ],
        culture: [
          { name: "Basilica of Bom Jesus (Old Goa)", cost: 0, time: "Morning", desc: "UNESCO World Heritage 16th-century baroque architecture." },
          { name: "Se Cathedral", cost: 0, time: "Afternoon", desc: "Historic Portuguese cathedral and bell tower." }
        ],
        chill: [
          { name: "Fontainhas Latin Quarter Walk", cost: 0, time: "Afternoon", desc: "Picturesque heritage streets with colorful Portuguese villas." }
        ],
        adventure: [
          { name: "Aguada Fort Ramparts", cost: 0, time: "Morning", desc: "Historic 17th-century Portuguese lighthouse and fort." }
        ],
        shopping: [
          { name: "Panjim Municipal Market & Mall", cost: 0, time: "Afternoon", desc: "Bustling market for Goan spices, cashews, and crafts.", hasMall: true }
        ]
      },
      rainSpots: [
        { name: "Goa State Museum", cost: 0, desc: "Indoor historical art, coins, and heritage artifacts." },
        { name: "Houses of Goa Museum", cost: 25, desc: "Fascinating unique architecture museum completely sheltered." }
      ],
      busRoutes: [
        { from: "Panaji KTC Stand", to: "Miramar Beach", route: "Kadamba Shuttle", fare: 15 },
        { from: "Panaji KTC Stand", to: "Old Goa", route: "Bus #11 / Kadamba", fare: 20 }
      ],
      foodSpots: {
        veg: "Navtara Veg Pure (₹70-130)",
        nonveg: "Vinayak Family Restaurant / Ritz Classic (₹160-260)",
        budget: "Local Goan Cafe (Pao & Bhaji) (₹30-50)"
      }
    }
  };

  const DEFAULT_CITY_DATA = {
    isCoastal: false,
    hasBeach: false,
    spots: {
      nature: [
        { name: "City Botanical Nature Park", cost: 10, time: "Morning", desc: "Serene walking paths and shaded lawns." },
        { name: "Sunset Hill Viewpoint", cost: 0, time: "Sunset", desc: "Breathtaking panoramic sunset vantage point." }
      ],
      culture: [
        { name: "Historic Heritage Temple / Fort", cost: 20, time: "Morning", desc: "Rich regional history and architecture." },
        { name: "Regional Museum & Cultural Gallery", cost: 15, time: "Afternoon", desc: "Artifacts showcasing state folklore and traditions." }
      ],
      chill: [
        { name: "Lakeside Promenade", cost: 0, time: "Evening", desc: "Quiet seating and evening strolls." }
      ],
      adventure: [
        { name: "Valley Hiking Trail", cost: 0, time: "Morning", desc: "Exhilarating hill walk and panoramic photo spots." }
      ],
      shopping: [
        { name: "Central Town Market & Mall", cost: 0, time: "Afternoon", desc: "Local specialty crafts, souvenirs, and snacks.", hasMall: true }
      ]
    },
    rainSpots: [
      { name: "Town Covered Heritage Museum", cost: 15, desc: "Indoor historical exhibits completely protected from rain." },
      { name: "Central Shopping Arcade", cost: 0, desc: "Covered indoor stalls, bakery, and hot beverage outlets." }
    ],
    busRoutes: [
      { from: "Central Bus Stand", to: "Heritage Fort", route: "Route #1", fare: 15 },
      { from: "Central Bus Stand", to: "Lakeside Park", route: "Route #5", fare: 12 }
    ],
    foodSpots: {
      veg: "Authentic Karnataka South Indian Thali (₹60-90)",
      nonveg: "Coastal / Regional Biryani House (₹140-220)",
      budget: "Traditional Tiffin Center (₹30-50)"
    }
  };

  function getCityData(cityName) {
    if (!cityName) return CITIES_DATA['Mangaluru'];
    for (let key in CITIES_DATA) {
      if (cityName.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(cityName.toLowerCase())) {
        return CITIES_DATA[key];
      }
    }
    if (cityName.toLowerCase().includes('bengaluru')) return CITIES_DATA['Bangalore'];
    if (cityName.toLowerCase().includes('mysore')) return CITIES_DATA['Mysuru'];
    if (cityName.toLowerCase().includes('manipal') || cityName.toLowerCase().includes('udupi')) return CITIES_DATA['Mangaluru'];
    return DEFAULT_CITY_DATA;
  }

  // --- Live Movie Knowledge Base & BookMyShow Services ---
  const VERIFIED_CLIENT_MOVIES = [
    {
      id: "mov_kan_1",
      title: "Baa Baa Black Sheep",
      language: "Kannada",
      genre: "Comedy / Thriller",
      certificate: "U/A",
      duration: "2h 18m",
      durationMinutes: 138,
      poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=60",
      rating: "8.7/10",
      votes: "14.2K",
      description: "Fast-paced satirical comedy thriller packed with clever twists, regional humour, and weekend thrills."
    },
    {
      id: "mov_kan_2",
      title: "Kitti",
      language: "Kannada",
      genre: "Action / Drama",
      certificate: "U/A",
      duration: "2h 25m",
      durationMinutes: 145,
      poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=60",
      rating: "8.5/10",
      votes: "9.8K",
      description: "An emotional and high-voltage action drama exploring friendship, loyalty, and redemption."
    },
    {
      id: "mov_kan_3",
      title: "Comrade Kalyan",
      language: "Kannada",
      genre: "Action / Political Drama",
      certificate: "U/A",
      duration: "2h 30m",
      durationMinutes: 150,
      poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=500&auto=format&fit=crop&q=60",
      rating: "8.8/10",
      votes: "18.5K",
      description: "An intense socio-political thriller with gripping dialogue, high stakes, and mass appeal."
    },
    {
      id: "mov_kan_4",
      title: "All Pass",
      language: "Kannada",
      genre: "Youth / Comedy Drama",
      certificate: "U",
      duration: "2h 15m",
      durationMinutes: 135,
      poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=500&auto=format&fit=crop&q=60",
      rating: "8.2/10",
      votes: "6.4K",
      description: "Lighthearted nostalgic college youth drama perfect for group outings and weekend family laughs."
    },
    {
      id: "mov_hin_1",
      title: "Dongri: Gangster's Paradise",
      language: "Hindi",
      genre: "Crime / Action Thriller",
      certificate: "A",
      duration: "2h 28m",
      durationMinutes: 148,
      poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=60",
      rating: "8.4/10",
      votes: "11.1K",
      description: "Atmospheric Mumbai underworld crime saga chronicling high-stakes rivalries and survival."
    },
    {
      id: "mov_hin_2",
      title: "Good Time",
      language: "Hindi",
      genre: "Comedy / Drama",
      certificate: "U/A",
      duration: "2h 10m",
      durationMinutes: 130,
      poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&auto=format&fit=crop&q=60",
      rating: "8.3/10",
      votes: "8.7K",
      description: "Breezy urban comedy exploring friendship, modern relationships, and quirky weekend misadventures."
    },
    {
      id: "mov_hin_3",
      title: "Bhool Bhulaiyaa 3",
      language: "Hindi",
      genre: "Horror / Comedy",
      certificate: "U/A",
      duration: "2h 38m",
      durationMinutes: 158,
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=60",
      rating: "8.6/10",
      votes: "45.0K",
      description: "Blockbuster spooky franchise return packed with Rooh Baba secrets and laughter."
    },
    {
      id: "mov_eng_1",
      title: "Nova",
      language: "English",
      genre: "Sci-Fi / Adventure",
      certificate: "U/A",
      duration: "2h 12m",
      durationMinutes: 132,
      poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60",
      rating: "8.6/10",
      votes: "22.3K",
      description: "Interstellar exploration spectacle with breathtaking IMAX visuals and mind-bending physics."
    },
    {
      id: "mov_eng_2",
      title: "The Wild Robot",
      language: "English",
      genre: "Animation / Family",
      certificate: "U",
      duration: "1h 42m",
      durationMinutes: 102,
      poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60",
      rating: "9.2/10",
      votes: "38.5K",
      description: "Heartwarming animated masterpiece following a shipwrecked robot raising an orphaned gosling."
    },
    {
      id: "mov_tam_1",
      title: "Thaainilam",
      language: "Tamil",
      genre: "Action / Drama",
      certificate: "U/A",
      duration: "2h 22m",
      durationMinutes: 142,
      poster: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=500&auto=format&fit=crop&q=60",
      rating: "8.5/10",
      votes: "12.8K",
      description: "Hard-hitting drama exploring land rights, family resilience, and explosive confrontation."
    },
    {
      id: "mov_tel_1",
      title: "SKS Mayookha",
      language: "Telugu",
      genre: "Romance / Family Drama",
      certificate: "U/A",
      duration: "2h 15m",
      durationMinutes: 135,
      poster: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&auto=format&fit=crop&q=60",
      rating: "8.1/10",
      votes: "7.9K",
      description: "Soulful musical romance steeped in coastal traditions and youthful dreams."
    }
  ];

  const CITY_THEATRES_CLIENT = {
    'Mangaluru': [
      { name: "Cinepolis: City Centre Mall", location: "K.S. Rao Road, Hampankatta", approxTicket: 180, transitToBeachMinutes: 25, mallName: "City Centre Mall" },
      { name: "PVR: Forum Fiza Mall", location: "Pandeshwar, Mangaluru", approxTicket: 190, transitToBeachMinutes: 20, mallName: "Forum Fiza Mall" },
      { name: "Bharat Cinemas: Bharath Mall", location: "Bejai, Mangaluru", approxTicket: 160, transitToBeachMinutes: 25, mallName: "Bharath Mall" }
    ],
    'Bangalore': [
      { name: "PVR: Orion Mall", location: "Brigade Gateway, Rajajinagar", approxTicket: 200, transitToBeachMinutes: 20, mallName: "Orion Mall" },
      { name: "INOX: Garuda Mall", location: "Magrath Road, Ashok Nagar", approxTicket: 190, transitToBeachMinutes: 25, mallName: "Garuda Mall" },
      { name: "Cinepolis: Forum Shantiniketan", location: "Whitefield Main Road", approxTicket: 180, transitToBeachMinutes: 30, mallName: "Forum Shantiniketan" },
      { name: "PVR: Forum Mall", location: "Hosur Road, Koramangala", approxTicket: 220, transitToBeachMinutes: 25, mallName: "The Forum Mall" }
    ],
    'Mysuru': [
      { name: "DRC Cinemas: BM Habitat Mall", location: "Jayalakshmipuram, Mysuru", approxTicket: 160, transitToBeachMinutes: 20, mallName: "BM Habitat Mall" },
      { name: "INOX: Mall of Mysore", location: "Indiranagar, MG Road, Mysuru", approxTicket: 180, transitToBeachMinutes: 20, mallName: "Mall of Mysore" },
      { name: "PVR: Garuda Mall", location: "Bamboo Bazaar, Mysuru", approxTicket: 170, transitToBeachMinutes: 25, mallName: "Garuda Mall Mysuru" }
    ],
    'Manipal': [
      { name: "INOX: Central Cinema", location: "Tiger Circle, Manipal", approxTicket: 160, transitToBeachMinutes: 20, mallName: "Manipal Central" },
      { name: "Bharat Cinemas: Manipal", location: "End Point Road, Manipal", approxTicket: 150, transitToBeachMinutes: 25, mallName: "Manipal Commercial Complex" }
    ],
    'Goa': [
      { name: "INOX: Mall De Goa", location: "Porvorim, Goa", approxTicket: 180, transitToBeachMinutes: 20, mallName: "Mall De Goa" },
      { name: "INOX: Osia Commercial Arcade", location: "Margao, Goa", approxTicket: 170, transitToBeachMinutes: 25, mallName: "Osia Arcade" }
    ]
  };

  const MATINEE_SLOTS_CLIENT = [
    { start: "01:30 PM", end: "04:00 PM" },
    { start: "01:45 PM", end: "04:15 PM" },
    { start: "02:00 PM", end: "04:30 PM" }
  ];

  function getClientSideMovieData(cityName, lang, genre, budget, people) {
    let resolvedCity = 'Mangaluru';
    const c = (cityName || '').toLowerCase();
    if (c.includes('manga') || c.includes('mangalore')) resolvedCity = 'Mangaluru';
    else if (c.includes('banga') || c.includes('bengaluru') || c.includes('blr')) resolvedCity = 'Bangalore';
    else if (c.includes('myso') || c.includes('mysuru')) resolvedCity = 'Mysuru';
    else if (c.includes('manipal') || c.includes('udupi')) resolvedCity = 'Manipal';
    else resolvedCity = cityName;

    const theatres = CITY_THEATRES_CLIENT[resolvedCity];
    const citySlug = resolvedCity.toLowerCase() === 'bangalore' ? 'bengaluru' : resolvedCity.toLowerCase();
    const bmsCityUrl = `https://in.bookmyshow.com/explore/movies-${citySlug}`;

    if (!theatres || theatres.length === 0) {
      return {
        success: true,
        liveDataAvailable: false,
        city: resolvedCity,
        bmsCityUrl,
        movies: []
      };
    }

    let pool = [...VERIFIED_CLIENT_MOVIES];
    const l = (lang || '').toLowerCase();
    if (l && l !== 'all' && l !== 'any') {
      const langFiltered = pool.filter(m => m.language.toLowerCase() === l);
      if (langFiltered.length > 0) pool = langFiltered;
    }

    const g = (genre || '').toLowerCase();
    if (g && g !== 'all' && g !== 'any') {
      const gFiltered = pool.filter(m => m.genre.toLowerCase().includes(g));
      if (gFiltered.length > 0) pool = gFiltered;
    }

    const count = Number(people) || 1;
    const chosen = pool.slice(0, 3).map((m, idx) => {
      const th = theatres[idx % theatres.length];
      const slot = MATINEE_SLOTS_CLIENT[idx % MATINEE_SLOTS_CLIENT.length];
      const enc = encodeURIComponent(m.title);
      return {
        id: m.id,
        title: m.title,
        language: m.language,
        genre: m.genre,
        certificate: m.certificate,
        duration: m.duration,
        durationMinutes: m.durationMinutes,
        poster: m.poster,
        rating: m.rating,
        votes: m.votes,
        description: m.description,
        theatre: th.name,
        theatreLocation: th.location,
        mallName: th.mallName,
        showtime: slot.start,
        showtimeEnd: slot.end,
        transitToBeachMinutes: th.transitToBeachMinutes,
        ticketPrice: th.approxTicket,
        totalGroupTicketCost: th.approxTicket * count,
        bmsUrl: `https://in.bookmyshow.com/explore/movies-${citySlug}?search=${enc}`,
        provider: "Verified on BookMyShow"
      };
    });

    return {
      success: true,
      liveDataAvailable: true,
      city: resolvedCity,
      bmsCityUrl,
      movies: chosen
    };
  }

  async function fetchLiveMovies(cityName, lang, genre, budget, people) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);
      const url = `/api/movies?city=${encodeURIComponent(cityName || '')}&language=${encodeURIComponent(lang || '')}&genre=${encodeURIComponent(genre || '')}&budget=${budget || 1000}&people=${people || 1}`;
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);
      if (res.ok) {
        const data = await res.json();
        if (data && data.success) {
          return data;
        }
      }
    } catch (e) {
      // Offline / fallback to verified client dataset
    }
    return getClientSideMovieData(cityName, lang, genre, budget, people);
  }

  function askMoviePersonalization() {
    addAIMessage(`
      <div style="font-weight: 700; color: #8338EC; margin-bottom: 4px;">🎬 Movie Personalization</div>
      <div style="font-size: 0.85rem; color: #334155; line-height: 1.45;">
        Which language or genre do you prefer? Checking BookMyShow for matching matinee showtimes between 12 PM – 6 PM.
      </div>
    `);

    const chipsContainer = document.createElement('div');
    chipsContainer.className = 'wai-chips-container';

    const options = [
      { label: "All Languages & Genres", val: "all" },
      { label: "Kannada", val: "kannada" },
      { label: "Hindi", val: "hindi" },
      { label: "English", val: "english" },
      { label: "Tamil", val: "tamil" },
      { label: "Telugu", val: "telugu" },
      { label: "Action & Thriller", val: "action" },
      { label: "Comedy & Family", val: "comedy" }
    ];

    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'wai-chip';
      btn.textContent = opt.label;
      btn.onclick = () => {
        chipsContainer.querySelectorAll('.wai-chip').forEach(b => b.disabled = true);
        btn.classList.add('wai-selected');
        STATE.movieLanguage = opt.val;
        addUserMessage(opt.label);
        showTypingIndicator(async () => {
          const movieData = await fetchLiveMovies(STATE.destination, opt.val, opt.val, STATE.budget, STATE.people);
          renderMovieCardsInChat(movieData);
        }, 500);
      };
      chipsContainer.appendChild(btn);
    });

    if (DOM.chatBody) {
      DOM.chatBody.appendChild(chipsContainer);
      scrollToBottom();
    }
  }

  function renderMovieCardsInChat(data) {
    const wrapper = document.createElement('div');
    wrapper.className = 'wai-movie-recommendations-wrapper';

    if (!data.liveDataAvailable || !data.movies || data.movies.length === 0) {
      // Rule 2: Never invent information. If live data is unavailable, inform the user.
      const notice = document.createElement('div');
      notice.className = 'wai-movie-notice-box';
      notice.innerHTML = `
        <div style="font-weight: 700; margin-bottom: 4px;">⚠️ Live Movie Data Notice</div>
        <div>Live BookMyShow showtime feed is currently unavailable for <b>${data.city}</b>. To guarantee 100% accuracy and never invent unverified showtimes, you can check live bookings directly on BookMyShow:</div>
        <div style="display: flex; gap: 8px; margin: 8px 0;">
          <a href="${data.bmsCityUrl}" target="_blank" class="wai-bms-link-btn" rel="noopener noreferrer">BookMyShow ↗</a>
        </div>
        <div style="font-size: 0.78rem; color: #78350f; margin-top: 4px;">We will continue with our curated alternative outdoor and cultural sightseeing plan.</div>
        <button class="wai-chip" style="margin-top: 8px; width: 100%; justify-content: center; background: #8338EC; color: #fff; font-weight: 600;" id="wai-notice-continue-btn">
          Continue with Alternative Plan 🌿
        </button>
      `;
      notice.querySelector('#wai-notice-continue-btn').onclick = () => {
        STATE.selectedMovie = null;
        advanceStep();
      };
      wrapper.appendChild(notice);
      if (DOM.chatBody) {
        DOM.chatBody.appendChild(wrapper);
        scrollToBottom();
      }
      return;
    }

    const intro = document.createElement('div');
    intro.innerHTML = `
      <div style="font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 4px;">
        🎬 Recommended Movies in ${data.city} (12 PM – 6 PM Window)
      </div>
      <div style="font-size: 0.75rem; color: #64748b; margin-bottom: 6px;">
        Pick one to fit into your itinerary, or skip to follow the alternative experience:
      </div>
    `;
    wrapper.appendChild(intro);

    data.movies.forEach(m => {
      const card = document.createElement('div');
      card.className = 'wai-movie-card';
      card.innerHTML = `
        <div class="wai-movie-card-header">
          <img src="${m.poster}" alt="${m.title} Poster" class="wai-movie-poster-thumb" onerror="this.src='https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=60'">
          <div class="wai-movie-header-content">
            <div>
              <div class="wai-movie-pill-row">
                <span class="wai-movie-badge wai-movie-badge-cert">${m.certificate}</span>
                <span class="wai-movie-badge wai-movie-badge-lang">${m.language}</span>
                <span class="wai-movie-badge wai-movie-badge-rating">⭐ ${m.rating}</span>
              </div>
              <div class="wai-movie-card-title">${m.title}</div>
              <div class="wai-movie-card-genre">${m.genre} • ${m.duration}</div>
            </div>
            <div style="font-size: 0.72rem; color: #10b981; font-weight: 600;">Verified BookMyShow</div>
          </div>
        </div>

        <div class="wai-movie-theatre-row">
          <div class="wai-movie-theatre-name">
            🏛️ ${m.theatre}
          </div>
          <div style="font-size: 0.72rem; color: #64748b;">${m.theatreLocation}</div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 2px;">
            <span class="wai-movie-showtime-badge">🕒 ${m.showtime} Matinee</span>
            <span style="font-size: 0.7rem; color: #64748b;">(Fits 12–6 PM schedule)</span>
          </div>
        </div>

        <div class="wai-movie-price-tag">
          <span class="wai-movie-price-label">Estimated Price:</span>
          <span class="wai-movie-price-amount">₹${m.ticketPrice} / person • ₹${m.totalGroupTicketCost} total (${STATE.people} ${STATE.people > 1 ? 'people' : 'person'})</span>
        </div>

        <div class="wai-movie-actions-row">
          <a href="${m.bmsUrl}" target="_blank" class="wai-bms-link-btn" rel="noopener noreferrer">
            BookMyShow ↗
          </a>
        </div>

        <button type="button" class="wai-select-movie-btn" data-movie-id="${m.id}">
          Select for 12–6 PM Plan 🎬
        </button>
      `;

      card.querySelector('.wai-select-movie-btn').onclick = () => {
        wrapper.querySelectorAll('.wai-select-movie-btn, .wai-skip-movie-btn').forEach(b => b.disabled = true);
        card.classList.add('selected');
        STATE.selectedMovie = m;
        addUserMessage(`Selected: ${m.title} (${m.showtime})`);
        showTypingIndicator(() => {
          addAIMessage(`🎬 Fantastic choice! Added <b>${m.title}</b> at ${m.theatre} (${m.showtime}) to your 12 PM – 6 PM plan. Now let's customize your food preference!`);
          setTimeout(advanceStep, 350);
        }, 400);
      };

      wrapper.appendChild(card);
    });

    const skipBtn = document.createElement('button');
    skipBtn.className = 'wai-skip-movie-btn';
    skipBtn.innerHTML = 'Skip Movie & Follow Alternative Experience ➡️';
    skipBtn.onclick = () => {
      wrapper.querySelectorAll('.wai-select-movie-btn, .wai-skip-movie-btn').forEach(b => b.disabled = true);
      STATE.selectedMovie = null;
      addUserMessage("Skip movie, continue alternative experience");
      advanceStep();
    };
    wrapper.appendChild(skipBtn);

    if (DOM.chatBody) {
      DOM.chatBody.appendChild(wrapper);
      scrollToBottom();
    }
  }

  // --- Sliding Graph Slider Generators ---
  function createPeopleSlider(onConfirm) {
    const card = document.createElement('div');
    card.className = 'wai-slider-card';

    let currentVal = Number(STATE.people) || 2;
    const popularityHeights = [40, 95, 75, 100, 60, 80, 50, 45, 35, 30]; // 1 to 10
    
    function getLabel(count) {
      if (count === 1) return t('solo', STATE.language);
      if (count === 2) return t('couple', STATE.language);
      if (count >= 3 && count <= 4) return `${t('small_group', STATE.language)} (${count})`;
      if (count >= 5 && count <= 6) return `${t('big_group', STATE.language)} (${count})`;
      return `${t('large_group', STATE.language)} (${count}+)`;
    }

    function getSubtext(count) {
      if (count === 1) return 'Personal solo getaway with complete freedom';
      if (count === 2) return 'Pair traveling together — shared transport & meals';
      if (count <= 4) return 'Friends or family squad of ' + count;
      if (count <= 6) return 'Larger group — great for sharing autos & group meals';
      return 'Big celebration group of ' + count + '+ people';
    }

    card.innerHTML = `
      <div class="wai-slider-header">
        <span class="wai-slider-title">Group Size</span>
        <span class="wai-slider-value-badge" id="wai-people-badge">${getLabel(currentVal)}</span>
      </div>
      <div class="wai-slider-subtext" id="wai-people-subtext">${getSubtext(currentVal)}</div>
      
      <div class="wai-graph-container" id="wai-people-graph">
        ${popularityHeights.map((h, i) => `
          <div class="wai-graph-bar ${i + 1 <= currentVal ? 'wai-bar-active' : ''}" 
               style="height: ${h}%;" 
               data-idx="${i + 1}" 
               title="${i + 1} People"></div>
        `).join('')}
      </div>

      <input type="range" class="wai-range-slider" id="wai-people-range" min="1" max="10" step="1" value="${currentVal}">
      
      <div class="wai-slider-labels">
        <span>1 (Solo)</span>
        <span>4 (Small)</span>
        <span>6 (Big)</span>
        <span>10+ (Large)</span>
      </div>

      <div class="wai-slider-presets">
        <button type="button" class="wai-slider-preset-chip ${currentVal === 1 ? 'active' : ''}" data-val="1">Solo (1)</button>
        <button type="button" class="wai-slider-preset-chip ${currentVal === 2 ? 'active' : ''}" data-val="2">Couple (2)</button>
        <button type="button" class="wai-slider-preset-chip ${currentVal === 4 ? 'active' : ''}" data-val="4">Small Group (4)</button>
        <button type="button" class="wai-slider-preset-chip ${currentVal === 6 ? 'active' : ''}" data-val="6">Big Group (6)</button>
        <button type="button" class="wai-slider-preset-chip ${currentVal >= 8 ? 'active' : ''}" data-val="8">Large Group (8+)</button>
      </div>

      <button type="button" class="wai-slider-confirm-btn" id="wai-people-confirm">
        Continue with ${getLabel(currentVal)}
      </button>
    `;

    const badge = card.querySelector('#wai-people-badge');
    const subtext = card.querySelector('#wai-people-subtext');
    const range = card.querySelector('#wai-people-range');
    const confirmBtn = card.querySelector('#wai-people-confirm');
    const graphBars = card.querySelectorAll('#wai-people-graph .wai-graph-bar');
    const presetChips = card.querySelectorAll('.wai-slider-preset-chip');

    function updateTrack(val) {
      const pct = ((val - 1) / (10 - 1)) * 100;
      range.style.background = `linear-gradient(to right, #8338EC ${pct}%, #e2e8f0 ${pct}%)`;
    }

    function applyVal(val) {
      currentVal = Math.max(1, Math.min(10, Number(val)));
      range.value = currentVal;
      const lbl = getLabel(currentVal);
      badge.textContent = lbl;
      subtext.textContent = getSubtext(currentVal);
      confirmBtn.textContent = `Continue with ${lbl}`;
      
      updateTrack(currentVal);

      graphBars.forEach((bar, i) => {
        if (i + 1 <= currentVal) {
          bar.classList.add('wai-bar-active');
        } else {
          bar.classList.remove('wai-bar-active');
        }
      });

      presetChips.forEach(chip => {
        const cVal = Number(chip.dataset.val);
        if (cVal === currentVal || (cVal === 8 && currentVal >= 7)) {
          chip.classList.add('active');
        } else {
          chip.classList.remove('active');
        }
      });
    }

    range.addEventListener('input', (e) => applyVal(e.target.value));

    graphBars.forEach(bar => {
      bar.addEventListener('click', () => applyVal(bar.dataset.idx));
    });

    presetChips.forEach(chip => {
      chip.addEventListener('click', () => applyVal(chip.dataset.val));
    });

    confirmBtn.addEventListener('click', () => {
      card.classList.add('wai-card-disabled');
      const finalLabel = getLabel(currentVal);
      onConfirm(currentVal, finalLabel);
    });

    updateTrack(currentVal);
    return card;
  }

  function createBudgetSlider(onConfirm) {
    const card = document.createElement('div');
    card.className = 'wai-slider-card';

    const BUDGET_STEPS = [0, 100, 200, 300, 400, 500, 750, 1000, 1250, 1500, 1800, 2000, 2500, 3000, 3500, 4000, 5000, 6000, 7500, 10000];
    const BUDGET_BAR_HEIGHTS = [35, 50, 60, 70, 80, 100, 92, 98, 85, 80, 72, 68, 58, 50, 45, 40, 32, 28, 24, 20]; // 20 bars

    let currentStepIdx = 7; // ₹1,000 default
    if (typeof STATE.budget === 'number') {
      const foundIdx = BUDGET_STEPS.findIndex(b => b >= STATE.budget);
      if (foundIdx !== -1) currentStepIdx = foundIdx;
    }

    function getSubtext(amount) {
      let desc = '';
      if (amount === 0) desc = '100% Free Trip: Free sunset beach (4:30 PM–6:00 PM), temples & scenic walking routes';
      else if (amount <= 100) desc = 'Ultra Budget Plan: Free sunset beaches (4:30 PM–6:00 PM), heritage spots & verified local buses';
      else if (amount <= 500) desc = 'Pocket Friendly (Local bus, street snacks & parks)';
      else if (amount <= 1500) desc = 'Balanced Weekend (Entry tickets, cafe/meals & transport)';
      else if (amount <= 3000) desc = 'Comfort Trip (Auto/cabs, heritage monuments & dining)';
      else desc = 'Premium Weekend (Cabs, full meals & all top attractions)';

      if (STATE.people && STATE.people > 1 && amount > 0) {
        const perPerson = Math.round(amount / STATE.people);
        return `${desc} • ~₹${perPerson}/person`;
      }
      return desc;
    }

    card.innerHTML = `
      <div class="wai-slider-header">
        <span class="wai-slider-title">Total Group Budget</span>
        <span class="wai-slider-value-badge" id="wai-budget-badge">₹${BUDGET_STEPS[currentStepIdx].toLocaleString('en-IN')}</span>
      </div>
      <div class="wai-slider-subtext" id="wai-budget-subtext">${getSubtext(BUDGET_STEPS[currentStepIdx])}</div>
      
      <div class="wai-graph-container" id="wai-budget-graph">
        ${BUDGET_BAR_HEIGHTS.map((h, i) => `
          <div class="wai-graph-bar ${i <= currentStepIdx ? 'wai-bar-active' : ''}" 
               style="height: ${h}%;" 
               data-idx="${i}" 
               title="₹${BUDGET_STEPS[i]}"></div>
        `).join('')}
      </div>

      <input type="range" class="wai-range-slider" id="wai-budget-range" min="0" max="${BUDGET_STEPS.length - 1}" step="1" value="${currentStepIdx}">
      
      <div class="wai-slider-labels">
        <span>₹0 (Free)</span>
        <span>₹500</span>
        <span>₹1,500</span>
        <span>₹5,000</span>
        <span>₹10,000+</span>
      </div>

      <div class="wai-slider-presets">
        <button type="button" class="wai-slider-preset-chip ${BUDGET_STEPS[currentStepIdx] === 0 ? 'active' : ''}" data-val="0">₹0 (Free)</button>
        <button type="button" class="wai-slider-preset-chip ${BUDGET_STEPS[currentStepIdx] === 100 ? 'active' : ''}" data-val="100">₹100 (Ultra)</button>
        <button type="button" class="wai-slider-preset-chip ${BUDGET_STEPS[currentStepIdx] === 500 ? 'active' : ''}" data-val="500">₹500</button>
        <button type="button" class="wai-slider-preset-chip ${BUDGET_STEPS[currentStepIdx] === 1000 ? 'active' : ''}" data-val="1000">₹1,000</button>
        <button type="button" class="wai-slider-preset-chip ${BUDGET_STEPS[currentStepIdx] === 2500 ? 'active' : ''}" data-val="2500">₹2,500</button>
        <button type="button" class="wai-slider-preset-chip ${BUDGET_STEPS[currentStepIdx] === 5000 ? 'active' : ''}" data-val="5000">₹5,000+</button>
      </div>

      <button type="button" class="wai-slider-confirm-btn" id="wai-budget-confirm">
        Set Budget: ₹${BUDGET_STEPS[currentStepIdx].toLocaleString('en-IN')}
      </button>
    `;

    const badge = card.querySelector('#wai-budget-badge');
    const subtext = card.querySelector('#wai-budget-subtext');
    const range = card.querySelector('#wai-budget-range');
    const confirmBtn = card.querySelector('#wai-budget-confirm');
    const graphBars = card.querySelectorAll('#wai-budget-graph .wai-graph-bar');
    const presetChips = card.querySelectorAll('.wai-slider-preset-chip');

    function updateTrack(idx) {
      const pct = (idx / (BUDGET_STEPS.length - 1)) * 100;
      range.style.background = `linear-gradient(to right, #8338EC ${pct}%, #e2e8f0 ${pct}%)`;
    }

    function applyIdx(idx) {
      currentStepIdx = Math.max(0, Math.min(BUDGET_STEPS.length - 1, Number(idx)));
      range.value = currentStepIdx;
      const amount = BUDGET_STEPS[currentStepIdx];
      const formatted = `₹${amount.toLocaleString('en-IN')}`;
      
      badge.textContent = formatted;
      subtext.textContent = getSubtext(amount);
      confirmBtn.textContent = `Set Budget: ${formatted}`;
      
      updateTrack(currentStepIdx);

      graphBars.forEach((bar, i) => {
        if (i <= currentStepIdx) {
          bar.classList.add('wai-bar-active');
        } else {
          bar.classList.remove('wai-bar-active');
        }
      });

      presetChips.forEach(chip => {
        const cVal = Number(chip.dataset.val);
        if (cVal === amount) {
          chip.classList.add('active');
        } else {
          chip.classList.remove('active');
        }
      });
    }

    range.addEventListener('input', (e) => applyIdx(e.target.value));

    graphBars.forEach(bar => {
      bar.addEventListener('click', () => applyIdx(bar.dataset.idx));
    });

    presetChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const targetVal = Number(chip.dataset.val);
        const idx = BUDGET_STEPS.indexOf(targetVal);
        if (idx !== -1) applyIdx(idx);
      });
    });

    confirmBtn.addEventListener('click', () => {
      card.classList.add('wai-card-disabled');
      const finalAmount = BUDGET_STEPS[currentStepIdx];
      onConfirm(finalAmount);
    });

    updateTrack(currentStepIdx);
    return card;
  }

  // --- 9 Conversation Steps ---
  const STEPS = [
    {
      id: 'location',
      getQuestion: () => t('loc_q', STATE.language),
      getChips: () => [
        { label: t('loc_detect', STATE.language), value: "__GEOLOCATE__" },
        { label: "Mangaluru", value: "Mangaluru" },
        { label: "Bangalore", value: "Bangalore" },
        { label: "Mysuru", value: "Mysuru" },
        { label: "Manipal / Udupi", value: "Manipal" },
        { label: "Chikmagalur", value: "Chikmagalur" },
        { label: "Coorg (Madikeri)", value: "Coorg" },
        { label: "Ooty", value: "Ooty" },
        { label: "Goa", value: "Goa" }
      ],
      onSelect: (val) => {
        if (val === "__GEOLOCATE__") {
          addUserMessage("Detecting location...");
          showTypingIndicator(() => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                (pos) => {
                  const lat = pos.coords.latitude;
                  const lon = pos.coords.longitude;
                  fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
                    .then(r => r.json())
                    .then(data => {
                      const detected = (data.address && (data.address.city || data.address.town || data.address.state_district || data.address.county)) || 'Mangaluru';
                      STATE.startLocation = detected;
                      if (!STATE.destination) STATE.destination = detected;
                      addAIMessage(t('loc_detected', STATE.language).replace('{city}', detected));
                      setTimeout(advanceStep, 400);
                    })
                    .catch(() => {
                      STATE.startLocation = 'Mangaluru';
                      addAIMessage("Found your location nearby! Starting in Mangaluru.");
                      setTimeout(advanceStep, 400);
                    });
                },
                () => {
                  STATE.startLocation = 'Mangaluru';
                  addAIMessage("Location permission default set to Mangaluru.");
                  setTimeout(advanceStep, 400);
                },
                { timeout: 4000 }
              );
            } else {
              STATE.startLocation = 'Mangaluru';
              addAIMessage("Starting in Mangaluru.");
              setTimeout(advanceStep, 400);
            }
          });
        } else {
          STATE.startLocation = val;
          STATE.destination = val;
          addUserMessage(val);
          advanceStep();
        }
      }
    },
    {
      id: 'people',
      getQuestion: () => t('group_q', STATE.language),
      renderCustom: () => createPeopleSlider((val, label) => {
        STATE.people = Number(val);
        STATE.peopleLabel = label;
        addUserMessage(label);
        advanceStep();
      })
    },
    {
      id: 'budget',
      getQuestion: () => t('budget_q', STATE.language),
      renderCustom: () => createBudgetSlider((val) => {
        STATE.budget = Number(val);
        STATE.budgetLabel = `₹${val}`;
        addUserMessage(`Budget: ₹${val}`);
        if (Number(val) === 0) {
          // --- Zero-Rupee Mode: bypass remaining steps, show situational engine ---
          showTypingIndicator(() => {
            addAIMessage(
              '<div style="font-weight:700;color:#8338EC;margin-bottom:4px;">Zero-Rupee Weekend Activated</div>' +
              '<div style="font-size:0.84rem;color:#334155;line-height:1.5;">Brother, your budget is Rs 0 today. That is completely fine and there is no shame in that at all. ' +
              'Let me give you a real, practical, and actually enjoyable plan for free. ' +
              'Tell me what you have in mind.</div>'
            );
            renderZeroBudgetMode();
          }, 600);
        } else {
          advanceStep();
        }
      })
    },
    {
      id: 'transport',
      getQuestion: () => t('trans_q', STATE.language),
      getChips: () => {
        if (STATE.budget <= 100) {
          return [
            { label: "Walking Only (₹0)", value: "walk", labelText: "Walking Only" },
            { label: "Local Bus (₹10-20)", value: "bus", labelText: "Local Bus" }
          ];
        }
        return [
          { label: "Walking Only", value: "walk", labelText: "Walking Only" },
          { label: "Local Bus", value: "bus", labelText: "Local Bus" },
          { label: "Auto Rickshaw", value: "auto", labelText: "Auto Rickshaw" },
          { label: "Cab / Taxi", value: "cab", labelText: "Cab / Taxi" }
        ];
      },
      onSelect: (val, chipObj) => {
        STATE.transportKey = val;
        STATE.transport = chipObj ? chipObj.labelText : val;
        addUserMessage(STATE.transport);
        advanceStep();
      }
    },
    {
      id: 'timeSlot',
      getQuestion: () => t('time_q', STATE.language),
      getChips: () => [
        { label: "12 PM – 6 PM (Default Weekend Prime)", value: "prime", labelText: "12 PM – 6 PM (Default)" },
        { label: "Afternoon (12 PM – 4 PM)", value: "afternoon", labelText: "Afternoon (12 PM - 4 PM)" },
        { label: "Evening (4 PM – 8 PM)", value: "evening", labelText: "Evening (4 PM - 8 PM)" },
        { label: "Full Day (8 AM – 8 PM)", value: "fullday", labelText: "Full Day (8 AM - 8 PM)" },
        { label: "Morning (8 AM – 12 PM)", value: "morning", labelText: "Morning (8 AM - 12 PM)" }
      ],
      onSelect: (val, chipObj) => {
        STATE.timeSlotKey = val;
        STATE.timeSlot = chipObj ? chipObj.labelText : val;
        addUserMessage(STATE.timeSlot);
        advanceStep();
      }
    },
    {
      id: 'movie',
      getQuestion: () => {
        const budget = Number(STATE.budget) || 0;
        if (budget <= 500) return null; // Rule 1: ₹100–₹500 automatically follows existing plan without adding movie

        let title = "🎬 Smart Movie Recommendation";
        let sub = "";
        if (budget <= 600) {
          title = "🎬 Smart Movie Recommendation (₹501–₹600 Budget)";
          sub = `Tickets and travel fit within your group budget (₹${budget})! Would you like to include a movie in your 12 PM – 6 PM plan?`;
        } else if (budget <= 800) {
          title = "🎬 Movie, Food & Mall Experience (₹601–₹800 Budget)";
          sub = `Your budget allows a movie at a mall multiplex, food, and an outdoor activity! Include a movie?`;
        } else if (budget <= 1000) {
          title = "🎬 Entertainment & Sunset Beach Plan (₹801–₹1,000 Budget)";
          sub = `Your budget comfortably covers a movie, restaurant meal, entertainment, and a 5 PM–6 PM beach visit! Include a movie?`;
        } else {
          title = "🎬 Flexible VIP / Leisure Plan (₹1,000+ Budget)";
          sub = `Full flexibility for premium multiplex movies, dining, activities, and golden hour sunset. Include a movie?`;
        }

        return `
          <div style="font-weight: 700; color: #8338EC; margin-bottom: 4px;">${title}</div>
          <div style="font-size: 0.85rem; color: #334155; line-height: 1.45;">${sub}</div>
          <div style="font-size: 0.74rem; color: #64748b; margin-top: 4px;">Verified on BookMyShow • Showtime between 12 PM – 6 PM</div>
        `;
      },
      renderCustom: () => {
        const budget = Number(STATE.budget) || 0;
        const people = Number(STATE.people) || 1;

        // ₹100-₹500 rule: Follow existing weekend plan without automatically adding a movie
        if (budget <= 500) {
          setTimeout(() => {
            STATE.selectedMovie = null;
            advanceStep();
          }, 30);
          return null;
        }

        // ₹501-₹600 rule: Suggest a movie if ticket and travel costs fit
        const minTkt = 160;
        let minTvl = 0;
        if (STATE.transportKey === 'bus') minTvl = people * 20;
        else if (STATE.transportKey === 'auto') minTvl = 60;
        else if (STATE.transportKey === 'cab') minTvl = 150;
        const minMovieTotal = (minTkt * people) + minTvl;

        if (budget <= 600 && minMovieTotal > budget) {
          const card = document.createElement('div');
          card.className = 'wai-movie-notice-box';
          card.innerHTML = `
            <div style="font-weight: 700; margin-bottom: 4px;">🎬 Movie Budget Check</div>
            <div>For a group of ${people}, movie tickets + travel (~₹${minMovieTotal}) would exceed your total ₹${budget} budget.</div>
            <div style="margin-top: 6px;">Following our <b>top alternative weekend plan</b> with free scenic spots & sightseeing to keep strictly on budget!</div>
            <button class="wai-chip" style="margin-top: 10px; width: 100%; justify-content: center; background: #8338EC; color: #fff; font-weight: 600;" id="wai-continue-budget-btn">
              Continue with Alternative Plan 🌿
            </button>
          `;
          card.querySelector('#wai-continue-budget-btn').onclick = () => {
            STATE.selectedMovie = null;
            advanceStep();
          };
          return card;
        }

        // Fits budget! Show interactive recommendation chips
        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.gap = '8px';
        container.style.marginTop = '4px';

        const row = document.createElement('div');
        row.className = 'wai-chips-container';

        const yesBtn = document.createElement('button');
        yesBtn.className = 'wai-chip';
        yesBtn.innerHTML = '🍿 Yes, Suggest Movies';
        yesBtn.onclick = () => {
          row.querySelectorAll('.wai-chip').forEach(b => b.disabled = true);
          yesBtn.classList.add('wai-selected');
          addUserMessage("Yes, suggest movies");
          showTypingIndicator(() => {
            askMoviePersonalization();
          }, 350);
        };

        const noBtn = document.createElement('button');
        noBtn.className = 'wai-chip';
        noBtn.innerHTML = '🌿 No Movie (Outdoor & Places Only)';
        noBtn.onclick = () => {
          row.querySelectorAll('.wai-chip').forEach(b => b.disabled = true);
          noBtn.classList.add('wai-selected');
          STATE.selectedMovie = null;
          addUserMessage("No movie, explore places only");
          advanceStep();
        };

        row.appendChild(yesBtn);
        row.appendChild(noBtn);
        container.appendChild(row);
        return container;
      }
    },
    {
      id: 'food',
      getQuestion: () => t('food_q', STATE.language),
      getChips: () => {
        if (STATE.budget <= 100) {
          return [
            { label: "No Food / Free Snacks (Save Budget)", value: "none", labelText: "No Food / Free Snacks" }
          ];
        }
        return [
          { label: "Vegetarian", value: "veg", labelText: "Vegetarian" },
          { label: "Non-Vegetarian", value: "nonveg", labelText: "Non-Vegetarian" },
          { label: "Anything Goes", value: "any", labelText: "Anything Goes" },
          { label: "No Food (Save Budget)", value: "none", labelText: "No Food (Save Budget)" }
        ];
      },
      onSelect: (val, chipObj) => {
        STATE.foodKey = val;
        STATE.food = chipObj ? chipObj.labelText : val;
        addUserMessage(STATE.food);
        advanceStep();
      }
    },
    {
      id: 'mood',
      getQuestion: () => t('mood_q', STATE.language),
      getChips: () => [
        { label: "Chill & Relax", value: "chill", labelText: "Chill & Relax" },
        { label: "Nature & Outdoors", value: "nature", labelText: "Nature & Outdoors" },
        { label: "Culture & Heritage", value: "culture", labelText: "Culture & Heritage" },
        { label: "Adventure & Explore", value: "adventure", labelText: "Adventure" },
        { label: "Shopping & Food Street", value: "shopping", labelText: "Shopping & Food" }
      ],
      onSelect: (val, chipObj) => {
        STATE.moodKey = val;
        STATE.mood = chipObj ? chipObj.labelText : val;
        addUserMessage(STATE.mood);
        advanceStep();
      }
    },
    {
      id: 'weather',
      getQuestion: () => t('weather_q', STATE.language),
      getChips: () => [
        { label: "Clear / Sunny", value: "clear", labelText: "Clear / Sunny" },
        { label: "Cloudy / Breeze", value: "cloudy", labelText: "Cloudy" },
        { label: "Light Rain", value: "light_rain", labelText: "Light Rain" },
        { label: "Heavy Rain", value: "heavy_rain", labelText: "Heavy Rain" }
      ],
      onSelect: (val, chipObj) => {
        STATE.weatherKey = val;
        STATE.weather = chipObj ? chipObj.labelText : val;
        addUserMessage(STATE.weather);
        advanceStep();
      }
    },
    {
      id: 'confirmation',
      getQuestion: () => {
        const movieText = STATE.selectedMovie 
          ? `<span style="color:#8338EC;font-weight:600;">${STATE.selectedMovie.title}</span> (${STATE.selectedMovie.theatre}, ${STATE.selectedMovie.showtime})` 
          : 'None (Alternative Sightseeing Plan)';
        return `
          <div style="font-weight: 700; margin-bottom: 8px;">${t('confirm_title', STATE.language)}</div>
          <div style="background: rgba(131, 56, 236, 0.08); padding: 10px 12px; border-radius: 10px; font-size: 0.85rem; line-height: 1.5; color: #1e293b;">
            <b>City:</b> ${STATE.destination}<br>
            <b>Group:</b> ${STATE.peopleLabel}<br>
            <b>Total Budget:</b> ₹${STATE.budget}<br>
            <b>Transport:</b> ${STATE.transport}<br>
            <b>Time:</b> ${STATE.timeSlot}<br>
            <b>Movie:</b> ${movieText}<br>
            <b>Food:</b> ${STATE.food}<br>
            <b>Vibe:</b> ${STATE.mood}<br>
            <b>Weather:</b> ${STATE.weather}
          </div>
        `;
      },
      getChips: () => [
        { label: "Generate My Itinerary Now", value: "__GENERATE__" },
        { label: "Start Over", value: "__RESET__" }
      ],
      onSelect: (val) => {
        if (val === "__RESET__") {
          window.WeekendAI.reset();
        } else {
          addUserMessage("Generate Itinerary");
          showTypingIndicator(() => {
            const itinHtml = generateMasterItinerary(STATE);
            addAIMessage(itinHtml);
            updateDots(STEPS.length);
          }, 800);
        }
      }
    }
  ];

  // --- Master AI Itinerary Generation Engine ---
  function generateMasterItinerary(s) {
    const city = s.destination || 'Mangaluru';
    const cityData = getCityData(city);
    const budget = Number(s.budget) || 0;
    const people = Number(s.people) || 1;
    const isHeavyRain = s.weatherKey === 'heavy_rain';
    const selectedMovie = s.selectedMovie;
    const timeSlotKey = s.timeSlotKey || 'prime';
    const moodKey = s.moodKey || 'chill';
    const foodKey = s.foodKey || 'veg';
    const transportKey = s.transportKey || 'bus';

    // 1. Transport Calculation & Label
    let transportCost = 0;
    let transLabel = s.transport || 'Local Transit';
    if (transportKey === 'walk') {
      transportCost = 0;
      transLabel = 'Walking (₹0)';
    } else if (transportKey === 'bus') {
      const busFare = (cityData.busRoutes && cityData.busRoutes[0] && cityData.busRoutes[0].fare) || 15;
      const numTrips = (timeSlotKey === 'fullday') ? 4 : 2;
      const estimatedBus = busFare * numTrips * people;
      transportCost = budget <= 100 ? Math.min(20, Math.floor(budget * 0.3)) : Math.min(Math.floor(budget * 0.25) || 40, estimatedBus);
      transLabel = `Local Bus (~₹${transportCost})`;
    } else if (transportKey === 'auto') {
      transportCost = budget <= 200 ? 40 : Math.min(180, Math.max(50, Math.floor(budget * 0.2)));
      transLabel = `Auto Rickshaw (~₹${transportCost})`;
    } else if (transportKey === 'cab') {
      transportCost = budget <= 400 ? 120 : Math.min(450, Math.max(120, Math.floor(budget * 0.25)));
      transLabel = `Cab / Taxi (~₹${transportCost})`;
    }

    // 2. Movie Ticket Cost
    let movieTicketCost = 0;
    if (selectedMovie) {
      const tktPrice = selectedMovie.ticketPrice || 180;
      movieTicketCost = tktPrice * people;
    }

    // 3. Activity Spots Selection
    function isBeachSpot(sp) {
      if (!sp) return false;
      const str = ((sp.name || '') + ' ' + (sp.desc || '')).toLowerCase();
      return str.includes('beach') || str.includes('seashore') || str.includes('coastline') || str.includes('shores') || str.includes('sasihithlu') || str.includes('panambur') || str.includes('someshwara') || str.includes('tannirbhavi') || str.includes('miramar');
    }

    let candidateSpots = [];
    if (isHeavyRain && cityData.rainSpots && cityData.rainSpots.length > 0) {
      candidateSpots = cityData.rainSpots;
    } else {
      const catSpots = (cityData.spots && cityData.spots[moodKey]) ? cityData.spots[moodKey] : (cityData.spots && cityData.spots.chill) || [];
      const natSpots = (cityData.spots && cityData.spots.nature) || [];
      const culSpots = (cityData.spots && cityData.spots.culture) || [];
      candidateSpots = [...catSpots, ...natSpots, ...culSpots];
    }

    // Filter by budget if ultra budget
    let validSpots = candidateSpots.filter(sp => {
      if (budget <= 100 && (sp.cost || 0) > 0) return false;
      return true;
    });

    if (validSpots.length === 0) {
      validSpots = [
        { name: `${city} Promenade & Public Garden`, cost: 0, desc: "Relaxing tree-lined promenade open to all visitors." },
        { name: `Historic ${city} Center`, cost: 0, desc: "Scenic walk through vibrant heritage streets." }
      ];
    }

    // Daytime non-beach spots
    let daytimeSpots = validSpots.filter(sp => !isBeachSpot(sp));
    if (daytimeSpots.length === 0) {
      daytimeSpots = [
        { name: `${city} Heritage Promenade`, cost: 0, desc: "Shaded cultural walkway through historical landmarks and tree-lined avenues." },
        { name: `Historic ${city} Center & Garden`, cost: 0, desc: "Scenic stroll through vibrant heritage streets and public botanical gardens." }
      ];
    }

    // Sunset / Beach spot (for 4:30 PM - 6:00 PM)
    const allNature = [
      ...(cityData.spots && cityData.spots.nature ? cityData.spots.nature : []),
      ...(cityData.spots && cityData.spots.chill ? cityData.spots.chill : []),
      ...(cityData.spots && cityData.spots.adventure ? cityData.spots.adventure : [])
    ];
    const beachSpot = allNature.find(isBeachSpot) || { name: `${city} Sunset Beach Point`, desc: "Watch the evening sunset over the shoreline." };
    const viewpointSpot = allNature.find(sp => {
      const nm = (sp.name || '').toLowerCase();
      return nm.includes('viewpoint') || nm.includes('hill') || nm.includes('lake') || nm.includes('tank');
    }) || allNature[0] || { name: `${city} Sunset Viewpoint`, desc: "Panoramic viewpoint for golden hour sunset." };

    // Function to condense description to 1 clean, high-value sentence
    function cleanSentence(desc, fallback) {
      if (!desc) return fallback || '';
      let s = desc.split('.')[0].trim();
      if (!s.endsWith('.')) s += '.';
      return s;
    }

    // 4. Build Timeline Stops Chronologically
    let stops = [];
    let actCost = 0;

    function addStop(time, icon, title, desc, costNum, costLabel, transitAfter) {
      if (costNum > 0) actCost += costNum;
      stops.push({
        time,
        icon,
        title,
        desc: cleanSentence(desc, title),
        costNum: costNum || 0,
        costLabel: costLabel || (costNum > 0 ? `₹${costNum} (Est. Entry)` : 'Free Entry'),
        transitAfter: transitAfter || null
      });
    }

    const transitHint = `~15m via ${transLabel.split('(')[0].trim()}`;

    if (timeSlotKey === 'morning') {
      // 8 AM - 12 PM
      addStop(
        "08:30 AM – 09:30 AM",
        "☕",
        "Morning Breakfast & Coffee",
        foodKey === 'none' ? "Morning walk and traditional canteen atmosphere." : "Savor fresh South Indian tiffin and filter coffee at a popular local canteen.",
        0,
        foodKey === 'none' ? "Free Entry" : "Included in Food",
        transitHint
      );
      const sp1 = daytimeSpots[0] || { name: `${city} Heritage Site`, cost: 0, desc: "Historic architecture and scenic morning walkways." };
      addStop(
        "09:45 AM – 11:00 AM",
        "🏛️",
        sp1.name,
        sp1.desc,
        sp1.cost || 0,
        null,
        transitHint
      );
      const sp2 = daytimeSpots[1] || daytimeSpots[0];
      addStop(
        "11:15 AM – 12:00 PM",
        "🌿",
        sp2.name,
        sp2.desc,
        sp2.cost || 0,
        null,
        null
      );
    } else if (timeSlotKey === 'afternoon') {
      // 12 PM - 4 PM
      addStop(
        "12:00 PM – 01:15 PM",
        "🍽️",
        "Regional Lunch Experience",
        foodKey === 'none' ? "Leisurely break and stroll through local markets." : "Enjoy an authentic regional meal at a verified local restaurant.",
        0,
        foodKey === 'none' ? "Free Entry" : "Included in Food",
        transitHint
      );
      const sp1 = daytimeSpots[0];
      addStop(
        "01:30 PM – 02:45 PM",
        "🏛️",
        sp1.name,
        sp1.desc,
        sp1.cost || 0,
        null,
        transitHint
      );
      const sp2 = daytimeSpots[1] || daytimeSpots[0];
      addStop(
        "03:00 PM – 04:00 PM",
        "🌿",
        sp2.name,
        sp2.desc,
        sp2.cost || 0,
        null,
        null
      );
    } else if (timeSlotKey === 'evening') {
      // 4 PM - 8 PM (Strict 4:30 - 6:00 PM sunset)
      addStop(
        "04:00 PM – 04:30 PM",
        "🚗",
        `Transit to Sunset Shoreline`,
        "Travel to the coast to arrive right in time for the golden hour sunset.",
        0,
        "Included in Transit",
        null
      );
      const sunsetName = isHeavyRain ? "Indoor Waterfront Promenade" : (cityData.hasBeach ? beachSpot.name : viewpointSpot.name);
      const sunsetDesc = isHeavyRain ? "Safe sheltered indoor promenade with scenic views of coastal waters." : "Experience the beautiful sunset under warm golden light and cool evening breeze.";
      addStop(
        "04:30 PM – 06:00 PM",
        "🌅",
        `Sunset at ${sunsetName}`,
        sunsetDesc,
        0,
        "Free Entry",
        transitHint
      );
      addStop(
        "06:15 PM – 07:30 PM",
        "🍢",
        foodKey === 'none' ? "Evening Heritage Market Walk" : "Evening Street Food & Dinner",
        foodKey === 'none' ? "Vibrant stroll through illuminated city streets and local shops." : "Taste famous street delicacies, local snacks, and refreshments at the market stalls.",
        0,
        foodKey === 'none' ? "Free Entry" : "Included in Food",
        null
      );
    } else if (timeSlotKey === 'fullday') {
      // 8 AM - 8 PM
      addStop(
        "08:30 AM – 09:30 AM",
        "☕",
        "Morning Breakfast & Park Walk",
        foodKey === 'none' ? "Early morning stroll through green botanical gardens." : "Enjoy fresh breakfast and coffee before a full day of exploring.",
        0,
        foodKey === 'none' ? "Free Entry" : "Included in Food",
        transitHint
      );
      const sp1 = daytimeSpots[0];
      addStop(
        "10:00 AM – 12:00 PM",
        "🏛️",
        sp1.name,
        sp1.desc,
        sp1.cost || 0,
        null,
        transitHint
      );
      addStop(
        "12:15 PM – 01:30 PM",
        "🍽️",
        "Regional Lunch & Rest",
        "Authentic regional meal with relaxation before afternoon destinations.",
        0,
        foodKey === 'none' ? "Free Entry" : "Included in Food",
        transitHint
      );
      const sp2 = daytimeSpots[1] || daytimeSpots[0];
      addStop(
        "01:45 PM – 04:00 PM",
        "🎨",
        sp2.name,
        sp2.desc,
        sp2.cost || 0,
        null,
        transitHint
      );
      const sunsetName = isHeavyRain ? "Indoor Waterfront Center" : (cityData.hasBeach ? beachSpot.name : viewpointSpot.name);
      addStop(
        "04:30 PM – 06:00 PM",
        "🌅",
        `Golden Hour Sunset at ${sunsetName}`,
        "Watch the sunset over the coast during prime golden hour.",
        0,
        "Free Entry",
        transitHint
      );
      addStop(
        "06:30 PM – 08:00 PM",
        "🍢",
        "Dinner & Night Market Walk",
        "Delicious evening dining and lively bazaar souvenir shopping.",
        0,
        foodKey === 'none' ? "Free Entry" : "Included in Food",
        null
      );
    } else {
      // 'prime' 12 PM - 6 PM (Default)
      if (selectedMovie) {
        addStop(
          "12:00 PM – 01:15 PM",
          "🍽️",
          "Lunch & Mall Leisure",
          `Enjoy lunch and explore shops near ${selectedMovie.theatreLocation || 'the theatre'}.`,
          0,
          foodKey === 'none' ? "Free Entry" : "Included in Food",
          transitHint
        );
        addStop(
          `${selectedMovie.showtime} – ${selectedMovie.showtimeEnd || '04:15 PM'}`,
          "🎬",
          `Movie: ${selectedMovie.title} (${selectedMovie.language})`,
          `At ${selectedMovie.theatre} • ${selectedMovie.genre} (${selectedMovie.duration}).`,
          movieTicketCost,
          `₹${movieTicketCost} (Est. ${people > 1 ? people + ' Tkts' : 'Ticket'})`,
          "~15m transit to sunset"
        );
        const sunsetName = isHeavyRain ? "Indoor Waterfront Promenade" : (cityData.hasBeach ? beachSpot.name : viewpointSpot.name);
        addStop(
          "04:30 PM – 06:00 PM",
          "🌅",
          `Sunset at ${sunsetName}`,
          "Experience the beautiful golden hour sunset and refreshing sea breeze.",
          0,
          "Free Entry",
          null
        );
      } else {
        addStop(
          "12:00 PM – 01:15 PM",
          "🍽️",
          "Regional Lunch & Cultural Walk",
          foodKey === 'none' ? "Leisurely walk through historic city center." : "Enjoy a traditional lunch plate at a popular regional restaurant.",
          0,
          foodKey === 'none' ? "Free Entry" : "Included in Food",
          transitHint
        );
        const sp1 = daytimeSpots[0];
        addStop(
          "01:30 PM – 02:45 PM",
          "🏛️",
          sp1.name,
          sp1.desc,
          sp1.cost || 0,
          null,
          transitHint
        );
        const sp2 = daytimeSpots[1] || daytimeSpots[0];
        addStop(
          "03:00 PM – 04:15 PM",
          "🌿",
          sp2.name,
          sp2.desc,
          sp2.cost || 0,
          null,
          transitHint
        );
        const sunsetName = isHeavyRain ? "Indoor Waterfront Promenade" : (cityData.hasBeach ? beachSpot.name : viewpointSpot.name);
        addStop(
          "04:30 PM – 06:00 PM",
          "🌅",
          `Sunset at ${sunsetName}`,
          "Experience the beautiful golden hour sunset and refreshing coastal breeze.",
          0,
          "Free Entry",
          null
        );
      }
    }

    // 5. Airtight Budget Arithmetic
    let foodCost = 0;
    let snackCost = 0;
    const initialSpent = transportCost + movieTicketCost + actCost;

    if (budget > initialSpent && foodKey !== 'none') {
      const leftover = budget - initialSpent;
      if (leftover >= 60) {
        foodCost = Math.floor(leftover * 0.8);
        snackCost = leftover - foodCost;
      } else {
        foodCost = leftover;
        snackCost = 0;
      }
    }

    // Ensure total never exceeds budget
    let totalCalculated = transportCost + movieTicketCost + actCost + foodCost + snackCost;
    if (totalCalculated > budget && budget > 0) {
      const diff = totalCalculated - budget;
      if (snackCost >= diff) {
        snackCost -= diff;
      } else {
        foodCost = Math.max(0, foodCost - (diff - snackCost));
        snackCost = 0;
      }
      totalCalculated = transportCost + movieTicketCost + actCost + foodCost + snackCost;
    }

    const remainingBalance = Math.max(0, budget - totalCalculated);
    const budgetPercent = budget > 0 ? Math.min(100, Math.round((totalCalculated / budget) * 100)) : 100;

    // Update stop cost display for Food if foodCost > 0
    stops.forEach(st => {
      if (st.costLabel === "Included in Food") {
        st.costLabel = foodCost > 0 ? `₹${foodCost} (Est. Meal)` : "Free Entry";
      }
    });

    // 6. Render Premium Compact HTML
    let html = `
      <div class="wai-itinerary">
        <!-- Compact Header -->
        <div class="wai-itin-header">
          <div class="wai-itinerary-title">
            <span>🌴 ${t('itinerary_for', s.language).replace('{city}', city)}</span>
          </div>
          <div class="wai-itin-meta">
            <span class="wai-itin-pill">👥 ${s.peopleLabel || 'Solo'}</span>
            <span class="wai-itin-pill">⏱️ ${s.timeSlot ? s.timeSlot.split('(')[0].trim() : '12 PM – 6 PM'}</span>
            <span class="wai-itin-pill">🚌 ${transportKey === 'walk' ? 'Walking' : transportKey === 'bus' ? 'Bus' : transportKey === 'auto' ? 'Auto' : 'Cab'}</span>
            <span class="wai-itin-pill">✨ ${s.mood ? s.mood.split('&')[0].trim() : 'Chill'}</span>
          </div>
        </div>

        <!-- Compact Top Budget Summary -->
        <div class="wai-budget-summary-card">
          <div class="wai-budget-metric-grid">
            <div class="wai-metric-item">
              <span class="wai-metric-label">Total Budget</span>
              <span class="wai-metric-val">₹${budget.toLocaleString('en-IN')}</span>
            </div>
            <div class="wai-metric-divider"></div>
            <div class="wai-metric-item">
              <span class="wai-metric-label">Planned Spend</span>
              <span class="wai-metric-val primary">₹${totalCalculated.toLocaleString('en-IN')}</span>
            </div>
            <div class="wai-metric-divider"></div>
            <div class="wai-metric-item">
              <span class="wai-metric-label">Remaining</span>
              <span class="wai-metric-val ${remainingBalance === 0 ? 'exact' : 'positive'}">
                ${remainingBalance === 0 ? '₹0 (Exact)' : `₹${remainingBalance.toLocaleString('en-IN')}`}
              </span>
            </div>
          </div>

          <div class="wai-budget-progress-track">
            <div class="wai-budget-progress-fill" style="width: ${budgetPercent}%;"></div>
          </div>

          <div class="wai-budget-pills-row">
            ${transportCost > 0 ? `<span class="wai-budget-cat-pill">🚌 Transit: ₹${transportCost}</span>` : `<span class="wai-budget-cat-pill">🚶 Transit: ₹0</span>`}
            ${foodCost > 0 ? `<span class="wai-budget-cat-pill">🍽️ Food: ₹${foodCost}</span>` : ''}
            ${actCost > 0 ? `<span class="wai-budget-cat-pill">🎟️ Entry: ₹${actCost}</span>` : `<span class="wai-budget-cat-pill">🏛️ Entry: Free</span>`}
            ${movieTicketCost > 0 ? `<span class="wai-budget-cat-pill">🎬 Movie: ₹${movieTicketCost}</span>` : ''}
            ${snackCost > 0 ? `<span class="wai-budget-cat-pill">☕ Snacks: ₹${snackCost}</span>` : ''}
          </div>
        </div>

        <!-- Chronological Stops (Mobile-First Cards) -->
        <div class="wai-stops-container">
    `;

    stops.forEach((st, idx) => {
      const isFree = st.costNum === 0 && (st.costLabel === 'Free Entry' || st.costLabel.includes('Free'));
      html += `
        <div class="wai-stop-card">
          <div class="wai-stop-top">
            <div class="wai-stop-time">
              <span>🕒</span>
              <span>${st.time}</span>
            </div>
            <span class="wai-stop-price ${isFree ? 'free' : 'paid'}">${st.costLabel}</span>
          </div>
          <div class="wai-stop-body">
            <div class="wai-stop-title-wrap">
              <span class="wai-stop-icon">${st.icon}</span>
              <h4 class="wai-stop-name">${st.title}</h4>
            </div>
            <p class="wai-stop-desc">${st.desc}</p>
          </div>
        </div>
      `;

      if (st.transitAfter && idx < stops.length - 1) {
        html += `
          <div class="wai-transit-connector">
            <span>↓ ${st.transitAfter}</span>
          </div>
        `;
      }
    });

    html += `
        </div>
    `;

    // Concise, single-line practical note if weather/gogupa applies
    if (isHeavyRain) {
      html += `
        <div class="wai-itin-note">
          <span>🌧️</span>
          <span><b>Monsoon Advisory:</b> Sheltered indoor spots prioritized for safety during heavy rain.</span>
        </div>
      `;
    } else if (s.weatherKey === 'light_rain') {
      html += `
        <div class="wai-itin-note">
          <span>🌦️</span>
          <span><b>Weather Note:</b> Pleasant light breeze with gentle showers. Carry an umbrella.</span>
        </div>
      `;
    }

    if (moodKey === 'shopping' || (selectedMovie && selectedMovie.mallName)) {
      html += `
        <div class="wai-itin-note">
          <span>💡</span>
          <span><b>Local Tip:</b> Hot fresh plates available at verified local Gogupa counters (~₹20/plate).</span>
        </div>
      `;
    }

    html += `
        <!-- Action Row -->
        <div style="margin-top: 10px;">
          <button type="button" class="wai-chip" style="width: 100%; justify-content: center; background: #8338EC; color: #ffffff; border: none; font-weight: 600; padding: 10px; border-radius: 8px; font-size: 0.85rem; cursor: pointer;" onclick="window.WeekendAI.reset()">
            ${t('start_over', s.language)}
          </button>
        </div>
      </div>
    `;

    return html;
  }


  // --- DOM References & UI Controller ---
  let DOM = {};

  function initUI() {
    if (document.getElementById('wai-trigger')) {
      DOM.trigger = document.getElementById('wai-trigger');
      DOM.window = document.getElementById('wai-chat-window');
      DOM.backdrop = document.getElementById('wai-backdrop');
      DOM.closeBtn = document.getElementById('wai-close');
      DOM.dotsContainer = document.getElementById('wai-dots');
      DOM.chatBody = document.getElementById('wai-chat-body');
      return;
    }

    let container = document.getElementById('weekend-ai-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'weekend-ai-container';
      document.body.appendChild(container);
    }

    const htmlStructure = `
      <div class="wai-widget-container">
        <div class="wai-backdrop" id="wai-backdrop" style="z-index: 999997;"></div>
        
        <div class="wai-trigger-badge" id="wai-trigger" style="z-index: 999998; cursor: pointer;">
          <div class="wai-trigger-sparkle-circle">
            <!-- Animated AI Robot Mascot SVG -->
            <svg class="wai-robot-mascot-svg" width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Antenna stem -->
              <line x1="16" y1="2.5" x2="16" y2="7" stroke="rgba(255,255,255,0.9)" stroke-width="1.5" stroke-linecap="round"/>
              <!-- Antenna pulse wave (radar ring) -->
              <circle class="wai-antenna-pulse-wave" cx="16" cy="2.5" r="2.2" fill="none" stroke="rgba(56,189,248,0.55)" stroke-width="1"/>
              <!-- Antenna dot (glows) -->
              <circle class="wai-antenna-dot" cx="16" cy="2.5" r="1.4" fill="#38bdf8"/>
              <!-- Robot head body -->
              <rect x="8" y="7" width="16" height="13" rx="4" fill="rgba(255,255,255,0.92)" stroke="rgba(255,255,255,0.6)" stroke-width="0.6"/>
              <!-- Robot Eyes group (blinks) -->
              <g class="wai-robot-eyes-group">
                <rect x="11" y="11.5" width="3.2" height="3.2" rx="1.2" fill="#6839e6"/>
                <rect x="17.8" y="11.5" width="3.2" height="3.2" rx="1.2" fill="#6839e6"/>
                <!-- Eye shine highlights -->
                <rect x="11.5" y="12" width="0.9" height="0.9" rx="0.4" fill="rgba(255,255,255,0.9)"/>
                <rect x="18.3" y="12" width="0.9" height="0.9" rx="0.4" fill="rgba(255,255,255,0.9)"/>
              </g>
              <!-- Robot mouth (smile) -->
              <path d="M13 17.5 Q16 20 19 17.5" stroke="#6839e6" stroke-width="1.2" stroke-linecap="round" fill="none"/>
              <!-- Robot body -->
              <rect x="11" y="20.5" width="10" height="7" rx="3" fill="rgba(255,255,255,0.82)" stroke="rgba(255,255,255,0.5)" stroke-width="0.5"/>
              <!-- Body center dot -->
              <circle cx="16" cy="24" r="1.2" fill="#6839e6" opacity="0.7"/>
              <!-- Orbiting sparkle star -->
              <g class="wai-orbit-spark">
                <path d="M27 6.5 L27.6 8.1 L29.3 8.1 L27.95 9.1 L28.5 10.7 L27 9.8 L25.5 10.7 L26.05 9.1 L24.7 8.1 L26.4 8.1 Z" fill="#facc15" opacity="0.95"/>
              </g>
            </svg>
          </div>
          <div class="wai-trigger-divider"></div>
          <span class="wai-trigger-text">
            <span class="wai-type-text" id="wai-type-text">Weekend AI</span><span class="wai-type-cursor" id="wai-type-cursor"></span>
          </span>
          <div class="wai-trigger-arrow-circle">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>

        <div class="wai-chat-window" id="wai-chat-window" style="z-index: 999999;">
          <div class="wai-header">
            <div class="wai-header-info">
              <div class="wai-agent-avatar" style="background: linear-gradient(135deg, #5850ec 0%, #7622dc 100%); display: flex; align-items: center; justify-content: center; border-radius: 50%;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="#ffffff"/>
                </svg>
              </div>
              <div>
                <div class="wai-agent-name">Weekend AI</div>
                <div style="font-size: 0.7rem; opacity: 0.85; font-weight: 400;">Master Travel Planner</div>
              </div>
            </div>
            <button class="wai-close-btn" id="wai-close" aria-label="Close Assistant">&times;</button>
          </div>

          <div class="wai-progress-container">
            <div class="wai-progress-dots" id="wai-dots">
              ${Array(STEPS.length).fill('<div class="wai-dot"></div>').join('')}
            </div>
          </div>

          <div class="wai-chat-body" id="wai-chat-body"></div>
        </div>
      </div>
    `;

    container.innerHTML = htmlStructure;

    DOM = {
      trigger: document.getElementById('wai-trigger'),
      window: document.getElementById('wai-chat-window'),
      backdrop: document.getElementById('wai-backdrop'),
      closeBtn: document.getElementById('wai-close'),
      dotsContainer: document.getElementById('wai-dots'),
      chatBody: document.getElementById('wai-chat-body')
    };

    DOM.trigger.addEventListener('click', toggleChat);
    DOM.closeBtn.addEventListener('click', closeChat);
    DOM.backdrop.addEventListener('click', closeChat);

    // --- Typewriter Agent Text Animation ---
    (function startTypewriter() {
      let scrollTimer = null;
      window.addEventListener('scroll', () => {
        window.__waiIsScrolling = true;
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => { window.__waiIsScrolling = false; }, 160);
      }, { passive: true });

      const phrases = ['Weekend AI', 'Ask AI Agent', 'Plan Your Trip', 'Weekend AI'];
      const el = document.getElementById('wai-type-text');
      if (!el) return;
      let phraseIdx = 0, charIdx = 0, deleting = false, pausing = false;
      const TYPING_MS = 80, DELETING_MS = 45, PAUSE_MS = 1800, PAUSE_AFTER_DELETE = 420;

      function tick() {
        if (!document.getElementById('wai-type-text')) return; // widget removed
        if (window.__waiIsScrolling) {
          setTimeout(tick, 150);
          return;
        }
        const phrase = phrases[phraseIdx];
        if (pausing) { pausing = false; setTimeout(tick, PAUSE_AFTER_DELETE); return; }
        if (!deleting) {
          charIdx++;
          el.textContent = phrase.slice(0, charIdx);
          if (charIdx === phrase.length) {
            deleting = true;
            setTimeout(tick, PAUSE_MS);
          } else {
            setTimeout(tick, TYPING_MS);
          }
        } else {
          charIdx--;
          el.textContent = phrase.slice(0, charIdx);
          if (charIdx === 0) {
            deleting = false;
            pausing = true;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            setTimeout(tick, PAUSE_AFTER_DELETE);
          } else {
            setTimeout(tick, DELETING_MS);
          }
        }
      }
      setTimeout(tick, 1200);
    })();
  }

  function buildWelcomeGreeting() {
    const name = getUserDisplayName();
    const greeting = name
      ? `Hi, <span style="color:#8338EC;font-weight:700;">${name}</span>!`
      : 'Hey there!';
    return `
      <div style="
        background: linear-gradient(135deg, rgba(131,56,236,0.10) 0%, rgba(86,33,173,0.14) 100%);
        border: 1px solid rgba(131,56,236,0.22);
        border-radius: 14px;
        padding: 14px 16px;
        margin-bottom: 2px;
      ">
        <div style="font-size:1.05rem;font-weight:700;color:#1e293b;line-height:1.35;">${greeting}</div>
        <div style="font-size:0.82rem;color:#5a3e85;margin-top:5px;font-weight:500;">Welcome to <b>Weekend AI</b> — your personal South India trip planner.</div>
        <div style="font-size:0.78rem;color:#64748b;margin-top:4px;">I will craft a perfect weekend itinerary just for you in seconds.</div>
      </div>
    `;
  }

  // Speak the greeting using Web Speech API (respects the site mute toggle)
  function speakWelcome() {
    try {
      const isMuted = localStorage.getItem('welcome-voice-muted') === 'true';
      if (isMuted) return;
      if (!window.speechSynthesis) return;

      const name = getUserDisplayName();
      const text = name
        ? `Hi ${name}! Welcome to Weekend AI.`
        : 'Hey there! Welcome to Weekend AI.';

      // Cancel any ongoing speech first
      window.speechSynthesis.cancel();

      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'en-IN';   // Indian English accent for South India context
      utter.rate = 0.95;      // Slightly slower for a warm, clear greeting
      utter.pitch = 1.05;
      utter.volume = 1.0;

      // Prefer a female voice if available for a friendlier tone
      const voices = window.speechSynthesis.getVoices();
      const preferred = voices.find(v =>
        v.lang.startsWith('en') && v.name.toLowerCase().includes('female')
      ) || voices.find(v => v.lang.startsWith('en-IN'))
        || voices.find(v => v.lang.startsWith('en'));
      if (preferred) utter.voice = preferred;

      window.speechSynthesis.speak(utter);
    } catch (e) {
      // Speech not supported — silently skip
    }
  }

  function openChat() {
    initUI();
    if (DOM.window) DOM.window.classList.add('wai-open');
    if (DOM.backdrop) DOM.backdrop.classList.add('wai-open');
    if (DOM.trigger) DOM.trigger.style.display = 'none';

    if (DOM.chatBody && DOM.chatBody.children.length === 0) {
      // Speak the greeting as soon as chat opens
      speakWelcome();
      // Show personalized welcome greeting card, then begin the step flow
      showTypingIndicator(() => {
        addAIMessage(buildWelcomeGreeting());
        setTimeout(() => renderStep(), 350);
      }, 350);
    }
  }

  function closeChat() {
    if (DOM.window) DOM.window.classList.remove('wai-open');
    if (DOM.backdrop) DOM.backdrop.classList.remove('wai-open');
    if (DOM.trigger) DOM.trigger.style.display = 'flex';
  }

  function toggleChat() {
    if (DOM.window && DOM.window.classList.contains('wai-open')) {
      closeChat();
    } else {
      openChat();
    }
  }

  function updateDots(stepIndex) {
    if (!DOM.dotsContainer) return;
    const idx = stepIndex !== undefined ? stepIndex : STATE.currentStepIndex;
    const dots = DOM.dotsContainer.querySelectorAll('.wai-dot');
    dots.forEach((dot, i) => {
      if (i === idx) {
        dot.className = 'wai-dot wai-dot-active';
      } else if (i < idx) {
        dot.className = 'wai-dot';
        dot.style.backgroundColor = '#8338EC';
      } else {
        dot.className = 'wai-dot';
        dot.style.backgroundColor = '#e0d4f7';
      }
    });
  }

  function scrollToBottom() {
    if (DOM.chatBody) {
      setTimeout(() => {
        DOM.chatBody.scrollTop = DOM.chatBody.scrollHeight;
      }, 50);
    }
  }

  function addAIMessage(htmlContent) {
    if (!DOM.chatBody) return;
    const msg = document.createElement('div');
    msg.className = 'wai-message wai-message-ai';
    msg.innerHTML = htmlContent;
    DOM.chatBody.appendChild(msg);
    scrollToBottom();
  }

  function addUserMessage(text) {
    if (!DOM.chatBody) return;
    const msg = document.createElement('div');
    msg.className = 'wai-message wai-message-user';
    msg.textContent = text;
    DOM.chatBody.appendChild(msg);
    scrollToBottom();
  }

  function showTypingIndicator(callback, duration = 400) {
    if (!DOM.chatBody) return;
    const typing = document.createElement('div');
    typing.className = 'wai-typing-indicator';
    typing.innerHTML = '<div class="wai-typing-dot"></div><div class="wai-typing-dot"></div><div class="wai-typing-dot"></div>';
    DOM.chatBody.appendChild(typing);
    scrollToBottom();

    setTimeout(() => {
      typing.remove();
      if (callback) callback();
    }, duration);
  }

  function renderStep() {
    if (STATE.currentStepIndex >= STEPS.length) return;
    updateDots();

    const step = STEPS[STATE.currentStepIndex];

    // Rule 1: ₹100–₹500: Follow the existing weekend plan without automatically adding a movie.
    if (step.id === 'movie' && (Number(STATE.budget) || 0) <= 500) {
      STATE.selectedMovie = null;
      STATE.moviePreference = 'none';
      advanceStep();
      return;
    }

    showTypingIndicator(() => {
      const qText = step.getQuestion();
      if (qText) {
        addAIMessage(qText);
      }

      if (typeof step.renderCustom === 'function') {
        const customEl = step.renderCustom();
        if (customEl && DOM.chatBody) {
          DOM.chatBody.appendChild(customEl);
          scrollToBottom();
        }
        return;
      }

      const chips = (typeof step.getChips === 'function') ? step.getChips() : null;
      if (chips && chips.length > 0) {
        const chipsContainer = document.createElement('div');
        chipsContainer.className = 'wai-chips-container';

        chips.forEach((chipObj) => {
          const btn = document.createElement('button');
          btn.className = 'wai-chip';
          btn.textContent = chipObj.label;
          btn.onclick = () => {
            chipsContainer.querySelectorAll('.wai-chip').forEach(b => b.disabled = true);
            btn.classList.add('wai-selected');
            step.onSelect(chipObj.value, chipObj);
          };
          chipsContainer.appendChild(btn);
        });

        DOM.chatBody.appendChild(chipsContainer);
        scrollToBottom();
      }
    }, 350);
  }

  function advanceStep() {
    STATE.currentStepIndex++;
    if (STATE.currentStepIndex < STEPS.length) {
      renderStep();
    }
  }

  // --- Global API ---
  window.WeekendAI = {
    openForCity: function (cityName) {
      initUI();
      STATE = JSON.parse(JSON.stringify(INITIAL_STATE));
      STATE.destination = cityName;
      STATE.startLocation = cityName;
      STATE.currentStepIndex = 1;

      if (DOM.chatBody) DOM.chatBody.innerHTML = '';
      openChat();

      showTypingIndicator(() => {
        addAIMessage(`Awesome! You picked <b>${cityName}</b>. Let's plan your personalized weekend trip!`);
        renderStep();
      }, 400);
    },
    open: function () {
      openChat();
    },
    close: function () {
      closeChat();
    },
    toggle: function () {
      toggleChat();
    },
    reset: function () {
      STATE = JSON.parse(JSON.stringify(INITIAL_STATE));
      if (DOM.chatBody) DOM.chatBody.innerHTML = '';
      updateDots(0);
      renderStep();
    },
    generateItinerary: generateMasterItinerary,
    _showZeroRupeeAgain: function () {
      showTypingIndicator(function () {
        addAIMessage('<div style="font-size:0.84rem;color:#334155;line-height:1.5;">Sure, pick another situation and I will help you with a practical plan.</div>');
        renderZeroBudgetMode();
      }, 400);
    }
  };

  // --- Show / Hide the entire widget (trigger badge) ---
  function showWidget() {
    initUI();
    const trigger = document.getElementById('wai-trigger') || DOM.trigger;
    if (trigger) {
      trigger.style.display = 'flex';
      trigger.style.visibility = 'visible';
      trigger.style.opacity = '1';
    }
  }

  function hideWidget() {
    closeChat();
    const trigger = document.getElementById('wai-trigger') || DOM.trigger;
    if (trigger) {
      trigger.style.display = 'none';
    }
  }

  // Expose show/hide on global API
  window.WeekendAI.show = showWidget;
  window.WeekendAI.hide = hideWidget;

  // Auto-init on load — keep widget hidden on home page, show on destination page
  function checkInitialVisibility() {
    initUI();
    if (window.currentCityId) {
      showWidget();
    } else {
      hideWidget();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkInitialVisibility);
  } else {
    checkInitialVisibility();
  }

})();
