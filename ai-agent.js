(function () {
  'use strict';

  // --- Multi-Language Translations ---
  const TRANSLATIONS = {
    en: {
      welcome: "Hey! 👋 Welcome to Weekend AI! Choose your language to start planning:",
      loc_q: "Where are you starting your trip from? 📍",
      loc_detect: "📍 Use My Current Location",
      loc_detected: "Detected your location: {city}! ✅",
      loc_choose: "🏙️ Choose a Starting City",
      group_q: "How many people in your group? 👥",
      budget_q: "What is your TOTAL group budget? 💰 (Not per person)",
      trans_q: "How do you plan to travel? 🚌",
      time_q: "Which time slot works best for you? ⏰",
      food_q: "What is your food preference? 🍽️",
      mood_q: "What kind of vibe are you looking for? 🎭",
      weather_q: "What's the weather like right now? 🌤️",
      confirm_title: "Here is your trip summary:",
      generating: "✨ Generating your custom weekend itinerary...",
      start_over: "🔄 Start Over",
      change_something: "✏️ Change Something / Recalculate",
      itinerary_for: "Weekend Itinerary for {city}",
      solo: "Solo (1)",
      couple: "Couple (2)",
      small_group: "Small Group (3-4)",
      big_group: "Big Group (5-6)",
      large_group: "Large Group (7+)"
    },
    kn: {
      welcome: "ಹೇ! 👋 ವೀಕೆಂಡ್ AI ಗೆ ಸುಸ್ವಾಗತ! ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ:",
      loc_q: "ನಿಮ್ಮ ಪ್ರವಾಸವನ್ನು ಎಲ್ಲಿಂದ ಪ್ರಾರಂಭಿಸುತ್ತೀರಿ? 📍",
      loc_detect: "📍 ನನ್ನ ಪ್ರಸ್ತುತ ಸ್ಥಳ ಬಳಸಿ",
      loc_detected: "ನಿಮ್ಮ ಸ್ಥಳ: {city}! ✅",
      loc_choose: "🏙️ ನಗರವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      group_q: "ನಿಮ್ಮ ಗುಂಪಿನಲ್ಲಿ ಎಷ್ಟು ಜನರಿದ್ದಾರೆ? 👥",
      budget_q: "ನಿಮ್ಮ ಒಟ್ಟು ಬಜೆಟ್ ಎಷ್ಟು? 💰",
      trans_q: "ನೀವು ಹೇಗೆ ಪ್ರಯಾಣಿಸಲು ಬಯಸುತ್ತೀರಿ? 🚌",
      time_q: "ಯಾವ ಸಮಯ ಸೂಕ್ತ? ⏰",
      food_q: "ಆಹಾರದ ಆಯ್ಕೆ ಏನು? 🍽️",
      mood_q: "ನಿಮಗೆ ಯಾವ ರೀತಿಯ ಅನುಭವ ಬೇಕು? 🎭",
      weather_q: "ಹವಾಮಾನ ಹೇಗಿದೆ? 🌤️",
      confirm_title: "ಪ್ರವಾಸದ ಸಾರಾಂಶ:",
      generating: "✨ ಪ್ರವಾಸ ಯೋಜನೆಯನ್ನು ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತಿದೆ...",
      start_over: "🔄 ಮರುಪ್ರಾರಂಭಿಸಿ",
      change_something: "✏️ ಬದಲಾವಣೆ ಮಾಡಿ",
      itinerary_for: "{city} ವಾರಾಂತ್ಯದ ಯೋಜನೆ",
      solo: "ಏಕಾಂಗಿ (1)",
      couple: "ಜೋಡಿ (2)",
      small_group: "ಸಣ್ಣ ಗುಂಪು (3-4)",
      big_group: "ದೊಡ್ಡ ಗುಂಪು (5-6)",
      large_group: "ಗುಂಪು (7+)"
    },
    hi: {
      welcome: "नमस्ते! 👋 वीकेंड AI में आपका स्वागत है! अपनी भाषा चुनें:",
      loc_q: "आप अपनी यात्रा कहाँ से शुरू कर रहे हैं? 📍",
      loc_detect: "📍 मेरे वर्तमान स्थान का उपयोग करें",
      loc_detected: "आपका स्थान: {city}! ✅",
      loc_choose: "🏙️ शहर चुनें",
      group_q: "समूह में कितने लोग हैं? 👥",
      budget_q: "आपका कुल ग्रुप बजट क्या है? 💰",
      trans_q: "आप कैसे यात्रा करना चाहते हैं? 🚌",
      time_q: "कौन सा समय सबसे अच्छा रहेगा? ⏰",
      food_q: "भोजन की प्राथमिकता क्या है? 🍽️",
      mood_q: "आप किस तरह का अनुभव चाहते हैं? 🎭",
      weather_q: "अभी मौसम कैसा है? 🌤️",
      confirm_title: "आपकी यात्रा का सारांश:",
      generating: "✨ यात्रा योजना बनाई जा रही है...",
      start_over: "🔄 फिर से शुरू करें",
      change_something: "✏️ कुछ बदलें",
      itinerary_for: "{city} वीकेंड यात्रा कार्यक्रम",
      solo: "अकेले (1)",
      couple: "जोड़ी (2)",
      small_group: "छोटा समूह (3-4)",
      big_group: "बड़ा समूह (5-6)",
      large_group: "बड़ा समूह (7+)"
    },
    ta: { welcome: "வணக்கம்! 👋 Weekend AI க்கு வரவேற்கிறோம்! மொழியைத் தேர்ந்தெடுக்கவும்:" },
    te: { welcome: "నమస్కారం! 👋 Weekend AI కి స్వాగతం! మీ భాషను ఎంచుకోండి:" },
    ml: { welcome: "നമസ്കാരം! 👋 Weekend AI ലേക്ക് സ്വാഗതം! ഭാഷ തിരഞ്ഞെടുക്കുക:" },
    mr: { welcome: "नमस्कार! 👋 Weekend AI मध्ये आपले स्वागत आहे! भाषा निवडा:" },
    bn: { welcome: "হ্যালো! 👋 Weekend AI তে স্বাগতম! আপনার ভাষা নির্বাচন করুন:" },
    gu: { welcome: "નમસ્તે! 👋 Weekend AI માં તમારું સ્વાગત છે! ભાષા પસંદ કરો:" }
  };

  function t(key, lang) {
    lang = lang || STATE.language || 'en';
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      return TRANSLATIONS[lang][key];
    }
    return (TRANSLATIONS.en && TRANSLATIONS.en[key]) || key;
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
    timeSlot: 'Full Day',
    timeSlotKey: 'fullday',
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
          { name: "Panambur Beach", cost: 0, time: "Morning / Sunset", desc: "Golden sands, clean shoreline, and cool sea breeze." },
          { name: "Tannirbhavi Beach & Tree Park", cost: 20, time: "Evening", desc: "Serene pine trees, ferry ride access, and sunset views." },
          { name: "Kadroo Park & Kadri Park Musical Fountain", cost: 15, time: "Evening", desc: "Sprawling green lawns and leisure walking trail." }
        ],
        culture: [
          { name: "Kadri Manjunatha Temple", cost: 0, time: "Morning", desc: "Historic 10th-century temple with natural mountain springs." },
          { name: "St. Aloysius Chapel", cost: 0, time: "Afternoon", desc: "World-famous hand-painted ceiling and wall frescoes." },
          { name: "Kudroli Gokarnanatheshwara Temple", cost: 0, time: "Evening", desc: "Spectacular golden architecture with grand illuminations." }
        ],
        chill: [
          { name: "Someshwara Beach & Rudra Shila Rocks", cost: 0, time: "Evening", desc: "Majestic boulder viewpoints facing the roaring Arabian Sea." },
          { name: "Sultan Battery Watchtower", cost: 10, time: "Morning", desc: "Tipu Sultan's historical naval watchtower by the backwaters." }
        ],
        adventure: [
          { name: "Sasihithlu Beach (Surfing & Estuary)", cost: 0, time: "Morning", desc: "Pristine meeting point of river and sea, famous for surfing." }
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
        { name: "District Museum & Cultural Gallery", cost: 15, time: "Afternoon", desc: "Artifacts showcasing state folklore and traditions." }
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

  // --- 10 Conversation Steps ---
  const STEPS = [
    {
      id: 'language',
      getQuestion: () => t('welcome', STATE.language),
      getChips: () => [
        { label: "English", value: "en" },
        { label: "ಕನ್ನಡ (Kannada)", value: "kn" },
        { label: "हिंदी (Hindi)", value: "hi" },
        { label: "தமிழ் (Tamil)", value: "ta" },
        { label: "తెలుగు (Telugu)", value: "te" },
        { label: "മലയാളം (Malayalam)", value: "ml" },
        { label: "मराठी (Marathi)", value: "mr" },
        { label: "বাংলা (Bengali)", value: "bn" },
        { label: "ગુજરાતી (Gujarati)", value: "gu" }
      ],
      onSelect: (val) => {
        STATE.language = val;
        addUserMessage(val === 'en' ? 'English' : val === 'kn' ? 'ಕನ್ನಡ' : val === 'hi' ? 'हिंदी' : val);
        advanceStep();
      }
    },
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
          addUserMessage("📍 Detecting location...");
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
                      addAIMessage("Found your location nearby! Starting in Mangaluru. ✅");
                      setTimeout(advanceStep, 400);
                    });
                },
                () => {
                  STATE.startLocation = 'Mangaluru';
                  addAIMessage("Location permission default set to Mangaluru. ✅");
                  setTimeout(advanceStep, 400);
                },
                { timeout: 4000 }
              );
            } else {
              STATE.startLocation = 'Mangaluru';
              addAIMessage("Starting in Mangaluru. ✅");
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
      getChips: () => [
        { label: `👤 ${t('solo', STATE.language)}`, value: 1, labelText: t('solo', STATE.language) },
        { label: `👫 ${t('couple', STATE.language)}`, value: 2, labelText: t('couple', STATE.language) },
        { label: `👨👩👧 ${t('small_group', STATE.language)}`, value: 4, labelText: t('small_group', STATE.language) },
        { label: `👨👩👧👦 ${t('big_group', STATE.language)}`, value: 6, labelText: t('big_group', STATE.language) },
        { label: `🎉 ${t('large_group', STATE.language)}`, value: 8, labelText: t('large_group', STATE.language) }
      ],
      onSelect: (val, chipObj) => {
        STATE.people = Number(val);
        STATE.peopleLabel = chipObj ? chipObj.labelText : `${val} people`;
        addUserMessage(STATE.peopleLabel);
        advanceStep();
      }
    },
    {
      id: 'budget',
      getQuestion: () => t('budget_q', STATE.language),
      getChips: () => [
        { label: "₹0 (Completely Free)", value: 0 },
        { label: "₹100 (Ultra Budget)", value: 100 },
        { label: "₹300", value: 300 },
        { label: "₹500", value: 500 },
        { label: "₹800", value: 800 },
        { label: "₹1,000", value: 1000 },
        { label: "₹1,500", value: 1500 },
        { label: "₹2,500", value: 2500 },
        { label: "₹5,000+", value: 5000 }
      ],
      onSelect: (val) => {
        STATE.budget = Number(val);
        STATE.budgetLabel = `₹${val}`;
        addUserMessage(`Budget: ₹${val}`);
        advanceStep();
      }
    },
    {
      id: 'transport',
      getQuestion: () => t('trans_q', STATE.language),
      getChips: () => {
        if (STATE.budget <= 100) {
          return [
            { label: "🚶 Walking Only (₹0)", value: "walk", labelText: "Walking Only" },
            { label: "🚌 Local Bus (₹10-20)", value: "bus", labelText: "Local Bus" }
          ];
        }
        return [
          { label: "🚶 Walking Only", value: "walk", labelText: "Walking Only" },
          { label: "🚌 Local Bus", value: "bus", labelText: "Local Bus" },
          { label: "🛺 Auto Rickshaw", value: "auto", labelText: "Auto Rickshaw" },
          { label: "🚕 Cab / Taxi", value: "cab", labelText: "Cab / Taxi" }
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
        { label: "🌅 Morning (8 AM – 12 PM)", value: "morning", labelText: "Morning (8 AM - 12 PM)" },
        { label: "☀️ Afternoon (12 PM – 4 PM)", value: "afternoon", labelText: "Afternoon (12 PM - 4 PM)" },
        { label: "🌆 Evening (4 PM – 8 PM)", value: "evening", labelText: "Evening (4 PM - 8 PM)" },
        { label: "📅 Full Day (8 AM – 8 PM)", value: "fullday", labelText: "Full Day (8 AM - 8 PM)" }
      ],
      onSelect: (val, chipObj) => {
        STATE.timeSlotKey = val;
        STATE.timeSlot = chipObj ? chipObj.labelText : val;
        addUserMessage(STATE.timeSlot);
        advanceStep();
      }
    },
    {
      id: 'food',
      getQuestion: () => t('food_q', STATE.language),
      getChips: () => {
        if (STATE.budget <= 100) {
          return [
            { label: "🚫 No Food / Free Snacks (Save Budget)", value: "none", labelText: "No Food / Free Snacks" }
          ];
        }
        return [
          { label: "🥬 Vegetarian", value: "veg", labelText: "Vegetarian" },
          { label: "🍗 Non-Vegetarian", value: "nonveg", labelText: "Non-Vegetarian" },
          { label: "🍱 Anything Goes", value: "any", labelText: "Anything Goes" },
          { label: "🚫 No Food (Save Budget)", value: "none", labelText: "No Food (Save Budget)" }
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
        { label: "😌 Chill & Relax", value: "chill", labelText: "Chill & Relax" },
        { label: "🌿 Nature & Outdoors", value: "nature", labelText: "Nature & Outdoors" },
        { label: "🏛️ Culture & Heritage", value: "culture", labelText: "Culture & Heritage" },
        { label: "🏔️ Adventure & Explore", value: "adventure", labelText: "Adventure" },
        { label: "🛍️ Shopping & Food Street", value: "shopping", labelText: "Shopping & Food" }
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
        { label: "☀️ Clear / Sunny", value: "clear", labelText: "Clear / Sunny" },
        { label: "⛅ Cloudy / Breeze", value: "cloudy", labelText: "Cloudy" },
        { label: "🌧️ Light Rain", value: "light_rain", labelText: "Light Rain" },
        { label: "🌊 Heavy Rain", value: "heavy_rain", labelText: "Heavy Rain" }
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
        return `
          <div style="font-weight: 700; margin-bottom: 8px;">${t('confirm_title', STATE.language)}</div>
          <div style="background: rgba(131, 56, 236, 0.08); padding: 10px 12px; border-radius: 10px; font-size: 0.85rem; line-height: 1.5; color: #1e293b;">
            📍 <b>City:</b> ${STATE.destination}<br>
            👥 <b>Group:</b> ${STATE.peopleLabel}<br>
            💰 <b>Total Budget:</b> ₹${STATE.budget}<br>
            🚌 <b>Transport:</b> ${STATE.transport}<br>
            ⏰ <b>Time:</b> ${STATE.timeSlot}<br>
            🍽️ <b>Food:</b> ${STATE.food}<br>
            🎭 <b>Vibe:</b> ${STATE.mood}<br>
            🌤️ <b>Weather:</b> ${STATE.weather}
          </div>
        `;
      },
      getChips: () => [
        { label: "✨ Generate My Itinerary Now!", value: "__GENERATE__" },
        { label: "🔄 Start Over", value: "__RESET__" }
      ],
      onSelect: (val) => {
        if (val === "__RESET__") {
          window.WeekendAI.reset();
        } else {
          addUserMessage("✨ Generate Itinerary");
          showTypingIndicator(() => {
            const itinHtml = generateMasterItinerary(STATE);
            addAIMessage(itinHtml);
            updateDots(10);
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
    const isHeavyRain = s.weatherKey === 'heavy_rain';

    let timelineItems = [];
    let actCost = 0;
    let transportCost = 0;
    let foodCost = 0;
    let notes = [];

    if (isHeavyRain) {
      notes.push("🌧️ <b>Monsoon Advisory:</b> Outdoor viewpoints and beaches replaced with safe, sheltered indoor museums and covered promenades.");
    } else if (s.weatherKey === 'light_rain') {
      notes.push("⛅ <b>Light Rain:</b> Weather is pleasant! Keep a pocket umbrella handy for breezy walks.");
    }

    const isUnder100 = budget <= 100;
    if (isUnder100) {
      notes.push("💰 <b>₹100 Budget Rule Active:</b> All entry tickets and paid eateries eliminated. Itinerary prioritizes serene free spots, seaside walking, and verified public buses.");
    }

    let transDesc = "Walking";
    if (s.transportKey === 'bus') {
      transportCost = isUnder100 ? Math.min(30, Math.floor(budget * 0.4)) : 40;
      const routeInfo = cityData.busRoutes && cityData.busRoutes[0] ? ` (${cityData.busRoutes[0].route}, ~₹${cityData.busRoutes[0].fare}/person)` : ' (Local City Bus)';
      transDesc = `Local Bus${routeInfo}`;
    } else if (s.transportKey === 'auto') {
      transportCost = Math.min(180, Math.max(50, Math.floor(budget * 0.25)));
      transDesc = "Auto Rickshaw (Metered)";
    } else if (s.transportKey === 'cab') {
      transportCost = Math.min(450, Math.max(120, Math.floor(budget * 0.3)));
      transDesc = "Cab / Taxi";
    }

    let pool = [];
    if (isHeavyRain && cityData.rainSpots && cityData.rainSpots.length > 0) {
      pool = cityData.rainSpots;
    } else {
      const moodKey = s.moodKey || 'chill';
      const categorySpots = (cityData.spots && cityData.spots[moodKey]) ? cityData.spots[moodKey] : (cityData.spots && cityData.spots.chill) || [];
      const natureSpots = (cityData.spots && cityData.spots.nature) || [];
      const cultureSpots = (cityData.spots && cityData.spots.culture) || [];
      pool = [...categorySpots, ...natureSpots, ...cultureSpots];
    }

    let validSpots = pool.filter(spot => {
      if (isUnder100 && (spot.cost || 0) > 0) return false;
      return true;
    });

    if (validSpots.length === 0) {
      validSpots = [
        { name: `${city} Promenade & Public Garden`, cost: 0, desc: "Relaxing tree-lined promenade open to all visitors." },
        { name: `Historic ${city} Center`, cost: 0, desc: "Scenic walk through vibrant heritage streets." }
      ];
    }

    const timeMode = s.timeSlotKey || 'fullday';
    let slotTimes = [];
    if (timeMode === 'morning') slotTimes = ["08:30 AM", "10:30 AM"];
    else if (timeMode === 'afternoon') slotTimes = ["12:30 PM", "02:30 PM"];
    else if (timeMode === 'evening') slotTimes = ["04:30 PM", "06:30 PM"];
    else slotTimes = ["09:00 AM", "11:30 AM", "02:30 PM", "05:15 PM"];

    let hasMall = false;
    let chosenMallName = "City Mall";

    slotTimes.forEach((slotTime, idx) => {
      const spot = validSpots[idx % validSpots.length];
      const spotCost = (isUnder100 || !spot.cost) ? 0 : spot.cost;
      actCost += spotCost;

      if (spot.hasMall || spot.name.toLowerCase().includes('mall')) {
        hasMall = true;
        chosenMallName = spot.name;
      }

      timelineItems.push({
        time: slotTime,
        title: spot.name,
        desc: spot.desc || "Popular sightseeing destination.",
        cost: spotCost === 0 ? "Free Entry" : `₹${spotCost} Entry`
      });
    });

    if (cityData.hasBeach && !isHeavyRain && (timeMode === 'evening' || timeMode === 'fullday')) {
      const beachSpot = (cityData.spots && cityData.spots.nature && cityData.spots.nature.find(sp => sp.name.includes('Beach'))) || { name: `${city} Sunset Beach Point`, cost: 0, desc: "Golden hour sunset viewing with scenic ocean waves." };
      
      const existingBeach = timelineItems.find(it => it.title.includes('Beach'));
      if (!existingBeach) {
        timelineItems[timelineItems.length - 1] = {
          time: "05:15 PM – 06:15 PM",
          title: `🌅 Sunset at ${beachSpot.name}`,
          desc: "Watch the sun dip below the horizon with ocean breeze. Perfect photography hour!",
          cost: "Free"
        };
      }
    }

    if (hasMall || s.moodKey === 'shopping') {
      notes.push(`🍿 <b>Gogupa Stall Tip:</b> Head to the verified Gogupa counters near ${chosenMallName} — fresh, hot plates for just <b>₹20/plate</b>! Highly recommended.`);
    }

    if (s.foodKey !== 'none' && !isUnder100) {
      const perHeadFood = s.foodKey === 'veg' ? 80 : 150;
      foodCost = Math.min(Math.floor(budget * 0.35), perHeadFood * Math.min(s.people, 4));
      const foodDesc = s.foodKey === 'veg' ? (cityData.foodSpots && cityData.foodSpots.veg) || "Traditional Veg Thali" : (cityData.foodSpots && cityData.foodSpots.nonveg) || "Local Special Non-Veg Meal";
      notes.push(`🍽️ <b>Food Recommendation:</b> Try ${foodDesc} (~₹${foodCost} total estimated).`);
    }

    let totalCalculated = actCost + transportCost + foodCost;
    if (totalCalculated > budget && budget > 0) {
      foodCost = Math.max(0, budget - actCost - transportCost);
      totalCalculated = actCost + transportCost + foodCost;
    }

    let html = `
      <div class="wai-itinerary">
        <div class="wai-itinerary-title">🗺️ ${t('itinerary_for', s.language).replace('{city}', city)}</div>
        <div style="font-size: 0.8rem; color: #64748b; margin-bottom: 12px;">
          👥 ${s.peopleLabel} • 💰 Total Budget: ₹${s.budget} • 🚌 ${transDesc}
        </div>

        <div class="wai-timeline">
    `;

    timelineItems.forEach(item => {
      html += `
        <div class="wai-timeline-item">
          <div class="wai-time-slot" style="font-weight: 700; color: #8338EC; font-size: 0.75rem; min-width: 65px;">${item.time}</div>
          <div class="wai-timeline-dot" style="width: 8px; height: 8px; border-radius: 50%; background: #8338EC; margin-top: 4px; flex-shrink: 0;"></div>
          <div class="wai-timeline-content" style="flex: 1;">
            <div class="wai-timeline-content-title" style="font-weight: 600; color: #1e293b; font-size: 0.88rem;">${item.title}</div>
            <div class="wai-timeline-content-desc" style="font-size: 0.8rem; color: #64748b; margin-top: 2px;">${item.desc}</div>
            <div style="font-size: 0.75rem; font-weight: 600; color: #10b981; margin-top: 4px;">${item.cost}</div>
          </div>
        </div>
      `;
    });

    html += `
        </div>

        <div class="wai-budget-card">
          <div class="wai-budget-row">
            <span>Activities & Entry:</span>
            <span style="font-weight: 600; color: #1e293b;">₹${actCost}</span>
          </div>
          <div class="wai-budget-row">
            <span>Transport (${transDesc.split('(')[0].trim()}):</span>
            <span style="font-weight: 600; color: #1e293b;">₹${transportCost}</span>
          </div>
          ${foodCost > 0 ? `
          <div class="wai-budget-row">
            <span>Food & Snacks:</span>
            <span style="font-weight: 600; color: #1e293b;">₹${foodCost}</span>
          </div>` : ''}
          <div class="wai-budget-total-row">
            <span>Total Estimated:</span>
            <span style="color: #8338EC; font-size: 0.95rem;">₹${totalCalculated} / ₹${s.budget}</span>
          </div>
        </div>
    `;

    if (notes.length > 0) {
      notes.forEach(note => {
        html += `<div style="background: rgba(131, 56, 236, 0.06); border-left: 3px solid #8338EC; border-radius: 4px; padding: 8px 10px; font-size: 0.78rem; line-height: 1.4; color: #334155; margin-top: 8px;">${note}</div>`;
      });
    }

    html += `
        <div style="margin-top: 14px; display: flex; flex-direction: column; gap: 8px;">
          <button class="wai-chip" style="width: 100%; text-align: center; justify-content: center; background: #8338EC; color: #ffffff; border: none; font-weight: 600;" onclick="window.WeekendAI.reset()">
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
    if (document.getElementById('wai-trigger')) return;

    let container = document.getElementById('weekend-ai-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'weekend-ai-container';
      document.body.appendChild(container);
    }

    const htmlStructure = `
      <div class="wai-widget-container">
        <div class="wai-backdrop" id="wai-backdrop" style="z-index: 999997;"></div>
        
        <div class="wai-trigger-badge" id="wai-trigger" style="z-index: 999998; cursor: pointer; display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 1.2rem;">🤖</span>
          <span>Weekend AI</span>
        </div>

        <div class="wai-chat-window" id="wai-chat-window" style="z-index: 999999;">
          <div class="wai-header">
            <div class="wai-header-info">
              <div class="wai-agent-avatar">🤖</div>
              <div>
                <div class="wai-agent-name">Weekend AI</div>
                <div style="font-size: 0.7rem; opacity: 0.85; font-weight: 400;">Master Travel Planner</div>
              </div>
            </div>
            <button class="wai-close-btn" id="wai-close" aria-label="Close Assistant">&times;</button>
          </div>

          <div class="wai-progress-container">
            <div class="wai-progress-dots" id="wai-dots">
              ${Array(10).fill('<div class="wai-dot"></div>').join('')}
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
  }

  function openChat() {
    initUI();
    if (DOM.window) DOM.window.classList.add('wai-open');
    if (DOM.backdrop) DOM.backdrop.classList.add('wai-open');
    if (DOM.trigger) DOM.trigger.style.display = 'none';

    if (DOM.chatBody && DOM.chatBody.children.length === 0) {
      renderStep();
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
    showTypingIndicator(() => {
      const qText = step.getQuestion();
      addAIMessage(qText);

      const chips = step.getChips();
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
      STATE.currentStepIndex = 2;

      if (DOM.chatBody) DOM.chatBody.innerHTML = '';
      openChat();

      showTypingIndicator(() => {
        addAIMessage(`✨ Awesome! You picked <b>${cityName}</b>. Let's plan your personalized weekend trip!`);
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
    }
  };

  // Auto-init on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUI);
  } else {
    initUI();
  }

})();
