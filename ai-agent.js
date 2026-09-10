(function () {
  // --- 1. Inject Styles ---
  const styles = `
    :root {
      --wai-primary: #8338EC;
      --wai-primary-dark: #6C2BD9;
      --wai-bg: #ffffff;
      --wai-chat-bg: #f8f9fa;
      --wai-text: #2f3542;
      --wai-text-light: #57606f;
      --wai-border: #dfe4ea;
      --wai-shadow: 0 10px 25px rgba(0,0,0,0.1);
      --wai-font: 'Outfit', sans-serif;
    }

    .wai-backdrop {
      display: none;
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.4);
      z-index: 9998;
      backdrop-filter: blur(3px);
    }
    
    .wai-trigger {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: var(--wai-primary);
      color: white;
      padding: 12px 24px;
      border-radius: 30px;
      font-family: var(--wai-font);
      font-weight: 600;
      font-size: 16px;
      cursor: pointer;
      box-shadow: 0 4px 15px rgba(131, 56, 236, 0.4);
      z-index: 9999;
      transition: transform 0.2s, box-shadow 0.2s;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .wai-trigger:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(131, 56, 236, 0.5);
    }
    
    .wai-window {
      position: fixed;
      bottom: 80px;
      right: 24px;
      width: 380px;
      max-width: calc(100vw - 48px);
      height: 600px;
      max-height: calc(100vh - 100px);
      background: var(--wai-bg);
      border-radius: 20px;
      box-shadow: var(--wai-shadow);
      z-index: 10000;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      font-family: var(--wai-font);
      opacity: 0;
      pointer-events: none;
      transform: translateY(20px);
      transition: opacity 0.3s, transform 0.3s;
    }
    .wai-window.wai-open {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }
    
    .wai-header {
      background: var(--wai-primary);
      color: white;
      padding: 16px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 600;
      font-size: 18px;
    }
    .wai-close-btn {
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      font-size: 24px;
      line-height: 1;
      padding: 0;
    }
    
    .wai-progress {
      display: flex;
      height: 4px;
      background: var(--wai-border);
    }
    .wai-progress-bar {
      height: 100%;
      background: var(--wai-primary);
      transition: width 0.3s ease;
    }
    
    .wai-body {
      flex: 1;
      background: var(--wai-chat-bg);
      padding: 20px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 16px;
      scroll-behavior: smooth;
    }
    
    .wai-msg-row {
      display: flex;
      width: 100%;
    }
    .wai-msg-row.wai-bot {
      justify-content: flex-start;
    }
    .wai-msg-row.wai-user {
      justify-content: flex-end;
    }
    
    .wai-bubble {
      max-width: 85%;
      padding: 12px 16px;
      border-radius: 16px;
      font-size: 15px;
      line-height: 1.4;
      animation: wai-popIn 0.3s ease-out;
    }
    .wai-bot .wai-bubble {
      background: white;
      color: var(--wai-text);
      border-bottom-left-radius: 4px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    }
    .wai-user .wai-bubble {
      background: var(--wai-primary);
      color: white;
      border-bottom-right-radius: 4px;
    }
    
    .wai-typing {
      display: flex;
      gap: 4px;
      padding: 8px 12px;
      align-items: center;
    }
    .wai-dot {
      width: 6px; height: 6px;
      background: var(--wai-text-light);
      border-radius: 50%;
      animation: wai-bounce 1.4s infinite ease-in-out both;
    }
    .wai-dot:nth-child(1) { animation-delay: -0.32s; }
    .wai-dot:nth-child(2) { animation-delay: -0.16s; }
    
    .wai-options {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 4px;
      margin-bottom: 16px;
      animation: wai-fadeIn 0.4s ease-out;
    }
    .wai-chip {
      background: white;
      border: 1px solid var(--wai-primary);
      color: var(--wai-primary);
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s;
      font-family: inherit;
      font-weight: 500;
    }
    .wai-chip:hover {
      background: var(--wai-primary);
      color: white;
    }
    
    .wai-itinerary {
      background: white;
      border-radius: 12px;
      padding: 16px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      font-size: 14px;
      color: var(--wai-text);
      margin-top: 8px;
    }
    .wai-itin-header h3 {
      margin: 0 0 4px 0;
      color: var(--wai-primary);
      font-size: 18px;
    }
    .wai-itin-meta {
      margin: 0 0 16px 0;
      font-size: 13px;
      color: var(--wai-text-light);
    }
    .wai-timeline {
      display: flex;
      flex-direction: column;
      gap: 12px;
      border-left: 2px solid var(--wai-border);
      padding-left: 12px;
      margin-left: 8px;
    }
    .wai-slot {
      position: relative;
    }
    .wai-slot::before {
      content: '';
      position: absolute;
      left: -17px;
      top: 4px;
      width: 10px;
      height: 10px;
      background: var(--wai-primary);
      border-radius: 50%;
    }
    .wai-slot-time {
      font-weight: 600;
      color: var(--wai-primary);
      font-size: 12px;
      margin-bottom: 2px;
    }
    .wai-slot-content h4 {
      margin: 0 0 4px 0;
      font-size: 15px;
    }
    .wai-slot-content p {
      margin: 0 0 4px 0;
      color: var(--wai-text-light);
      font-size: 13px;
    }
    .wai-slot-cost {
      font-size: 12px;
      font-weight: 600;
      color: #2ed573;
    }
    
    .wai-budget-summary {
      margin-top: 20px;
      padding-top: 12px;
      border-top: 1px dashed var(--wai-border);
    }
    .wai-budget-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 6px;
      font-size: 13px;
      color: var(--wai-text-light);
    }
    .wai-budget-total {
      font-weight: bold;
      color: var(--wai-text);
      font-size: 15px;
      margin-top: 8px;
      border-top: 1px solid var(--wai-border);
      padding-top: 8px;
    }
    
    .wai-weather-note, .wai-tip {
      margin-top: 16px;
      padding: 10px;
      border-radius: 8px;
      font-size: 13px;
      line-height: 1.4;
    }
    .wai-weather-note {
      background: #f1f2f6;
      border-left: 4px solid #747d8c;
    }
    .wai-tip {
      background: #fff20020;
      border-left: 4px solid #ffa502;
    }
    
    .wai-summary-card {
      background: white;
      border-radius: 12px;
      padding: 16px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      font-size: 14px;
    }
    .wai-summary-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      border-bottom: 1px solid var(--wai-border);
      padding-bottom: 4px;
    }
    .wai-summary-item:last-child {
      border-bottom: none; margin-bottom: 0; padding-bottom: 0;
    }
    
    @keyframes wai-popIn {
      0% { opacity: 0; transform: scale(0.95) translateY(10px); }
      100% { opacity: 1; transform: scale(1) translateY(0); }
    }
    @keyframes wai-fadeIn {
      0% { opacity: 0; transform: translateY(10px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes wai-bounce {
      0%, 80%, 100% { transform: scale(0); }
      40% { transform: scale(1); }
    }
    
    @media (max-width: 480px) {
      .wai-window {
        bottom: 0; right: 0; left: 0;
        width: 100%; height: 85vh;
        max-width: 100%;
        border-radius: 24px 24px 0 0;
      }
      .wai-backdrop.wai-open {
        display: block;
      }
      .wai-trigger {
        bottom: 16px; right: 16px;
      }
    }
  `;

  const styleEl = document.createElement('style');
  styleEl.innerHTML = styles;
  document.head.appendChild(styleEl);

  // --- 2. Data & Translations ---
  const LANG = {
    en: { welcome: 'Hey! 👋 Welcome to Weekend AI! Choose your language:', loc_find: 'Let me find where you are! 📍', loc_use: '📍 Use my current location', loc_choose: '🏙️ Choose a city', loc_in: 'You are in {city}! ✅', loc_exploring: 'I see you\\'re exploring {city}! 🎯 Where are you starting from?', size_q: 'How many people in your group? 👥', budget_q: 'What\\'s your TOTAL group budget? 💰', trans_q: 'How do you want to get around? 🚌', time_q: 'When do you want to explore? ⏰', food_q: 'What about food? 🍽️', mood_q: 'What\\'s the vibe you\\'re going for? 🎭', weather_q: 'What\\'s the weather like today? 🌤️', confirm_title: 'Here is your trip summary:', generate: '✅ Generate My Itinerary!', start_over: '🔄 Start Over' },
    kn: { welcome: 'ಹೇ! 👋 ವೀಕೆಂಡ್ AI ಗೆ ಸುಸ್ವಾಗತ! ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ:', loc_find: 'ನೀವು ಎಲ್ಲಿದ್ದೀರಿ ಎಂದು ಹುಡುಕೋಣ! 📍', loc_use: '📍 ನನ್ನ ಪ್ರಸ್ತುತ ಸ್ಥಳ ಬಳಸಿ', loc_choose: '🏙️ ನಗರವನ್ನು ಆರಿಸಿ', loc_in: 'ನೀವು {city} ನಲ್ಲಿದ್ದೀರಿ! ✅', loc_exploring: 'ನೀವು {city} ಅನ್ನು ಅನ್ವೇಷಿಸುತ್ತಿದ್ದೀರಿ! 🎯 ನೀವು ಎಲ್ಲಿಂದ ಪ್ರಾರಂಭಿಸುತ್ತಿದ್ದೀರಿ?', size_q: 'ನಿಮ್ಮ ಗುಂಪಿನಲ್ಲಿ ಎಷ್ಟು ಜನರಿದ್ದಾರೆ? 👥', budget_q: 'ನಿಮ್ಮ ಒಟ್ಟು ಬಜೆಟ್ ಎಷ್ಟು? 💰', trans_q: 'ನೀವು ಹೇಗೆ ಪ್ರಯಾಣಿಸಲು ಬಯಸುತ್ತೀರಿ? 🚌', time_q: 'ನೀವು ಯಾವಾಗ ಅನ್ವೇಷಿಸಲು ಬಯಸುತ್ತೀರಿ? ⏰', food_q: 'ಆಹಾರದ ಬಗ್ಗೆ ಏನು? 🍽️', mood_q: 'ನಿಮಗೆ ಯಾವ ರೀತಿಯ ಅನುಭವ ಬೇಕು? 🎭', weather_q: 'ಇಂದು ಹವಾಮಾನ ಹೇಗಿದೆ? 🌤️', confirm_title: 'ನಿಮ್ಮ ಪ್ರವಾಸದ ಸಾರಾಂಶ ಇಲ್ಲಿದೆ:', generate: '✅ ನನ್ನ ಪ್ರವಾಸವನ್ನು ರಚಿಸಿ!', start_over: '🔄 ಮರುಪ್ರಾರಂಭಿಸಿ' },
    hi: { welcome: 'नमस्ते! 👋 वीकेंड AI में आपका स्वागत है! अपनी भाषा चुनें:', loc_find: 'आइए जानें कि आप कहां हैं! 📍', loc_use: '📍 मेरे वर्तमान स्थान का उपयोग करें', loc_choose: '🏙️ एक शहर चुनें', loc_in: 'आप {city} में हैं! ✅', loc_exploring: 'मैं देख रहा हूँ कि आप {city} का पता लगा रहे हैं! 🎯 आप कहाँ से शुरू कर रहे हैं?', size_q: 'आपके समूह में कितने लोग हैं? 👥', budget_q: 'आपका कुल बजट क्या है? 💰', trans_q: 'आप कैसे घूमना चाहते हैं? 🚌', time_q: 'आप कब घूमना चाहते हैं? ⏰', food_q: 'खाने के बारे में क्या? 🍽️', mood_q: 'आपको कैसा अनुभव चाहिए? 🎭', weather_q: 'आज मौसम कैसा है? 🌤️', confirm_title: 'यहाँ आपकी यात्रा का सारांश है:', generate: '✅ मेरी यात्रा योजना बनाएं!', start_over: '🔄 फिर से शुरू करें' },
    ta: { welcome: 'வணக்கம்! 👋 Weekend AI க்கு வரவேற்கிறோம்! மொழியைத் தேர்ந்தெடுக்கவும்:' },
    te: { welcome: 'నమస్కారం! 👋 Weekend AI కి స్వాగతం! భాషను ఎంచుకోండి:' },
    ml: { welcome: 'നമസ്കാരം! 👋 Weekend AI ലേക്ക് സ്വാഗതം! ഭാഷ തിരഞ്ഞെടുക്കുക:' },
    mr: { welcome: 'नमस्कार! 👋 Weekend AI मध्ये आपले स्वागत आहे! तुमची भाषा निवडा:' },
    bn: { welcome: 'হ্যালো! 👋 Weekend AI তে স্বাগতম! আপনার ভাষা চয়ন করুন:' },
    gu: { welcome: 'નમસ્તે! 👋 Weekend AI માં તમારું સ્વાગત છે! તમારી ભાષા પસંદ કરો:' }
  };
  
  function t(key, lang = state.language) {
    const l = LANG[lang] && LANG[lang][key] ? lang : 'en';
    return LANG[l][key] || LANG['en'][key] || key;
  }

  const CITY_DATA = {
    Mangaluru: {
      isCoastal: true, hasBeach: true,
      places: {
        free: [
          {name: 'Panambur Beach', type: 'beach', timeNeeded: 120},
          {name: 'Tannirbhavi Beach', type: 'beach', timeNeeded: 120},
          {name: 'Kadri Park', type: 'park', timeNeeded: 60},
          {name: 'Kudroli Gokarnath Temple', type: 'temple', timeNeeded: 60},
          {name: 'Sultan Battery', type: 'viewpoint', timeNeeded: 45}
        ],
        paid: [
          {name: 'Pilikula Nisargadhama', type: 'park', timeNeeded: 180, cost: 100},
          {name: 'Aloysius Museum', type: 'museum', timeNeeded: 60, cost: 20}
        ],
        malls: [
          {name: 'City Centre Mall', hasGogupa: true, gogupaPrice: 60},
          {name: 'Forum Fiza Mall', hasGogupa: false, gogupaPrice: 0}
        ],
        restaurants: {
          veg: [{name: 'Janatha Deluxe', avgCost: 150}, {name: 'Woodlands', avgCost: 200}],
          nonveg: [{name: 'Machali', avgCost: 350}, {name: 'Giri Manjas', avgCost: 300}],
          budget: [{name: 'Ideal Cafe', avgCost: 80}, {name: 'Local Canteen', avgCost: 50}]
        },
        viewpoints: [{name: 'Tannirbhavi Sunset Point', bestTime: 'evening'}]
      },
      busRoutes: [
        {from: 'Statebank', to: 'Panambur', routeNo: '15', fare: 15, frequency: '15m'},
        {from: 'Statebank', to: 'Pilikula', routeNo: '19', fare: 20, frequency: '30m'}
      ],
      autoFare: {base: 35, perKm: 15}
    },
    Bangalore: {
      isCoastal: false, hasBeach: false,
      places: {
        free: [
          {name: 'Cubbon Park', type: 'park', timeNeeded: 120},
          {name: 'Vidhana Soudha (Outside)', type: 'viewpoint', timeNeeded: 30},
          {name: 'ISKCON Temple', type: 'temple', timeNeeded: 90},
          {name: 'Commercial Street', type: 'shopping', timeNeeded: 120}
        ],
        paid: [
          {name: 'Lalbagh Botanical Garden', type: 'park', timeNeeded: 120, cost: 30},
          {name: 'Visvesvaraya Museum', type: 'museum', timeNeeded: 180, cost: 50},
          {name: 'Bangalore Palace', type: 'heritage', timeNeeded: 120, cost: 250}
        ],
        malls: [
          {name: 'Orion Mall', hasGogupa: false, gogupaPrice: 0},
          {name: 'Phoenix Marketcity', hasGogupa: false, gogupaPrice: 0}
        ],
        restaurants: {
          veg: [{name: 'CTR', avgCost: 100}, {name: 'MTR', avgCost: 250}],
          nonveg: [{name: 'Meghana Foods', avgCost: 400}, {name: 'Empire', avgCost: 300}],
          budget: [{name: 'Vidyarthi Bhavan', avgCost: 80}, {name: 'Airlines Hotel', avgCost: 100}]
        },
        viewpoints: [{name: 'Sankey Tank', bestTime: 'evening'}]
      },
      busRoutes: [
        {from: 'Majestic', to: 'Lalbagh', routeNo: 'Various', fare: 15, frequency: '5m'}
      ],
      autoFare: {base: 30, perKm: 15}
    },
    Mysuru: {
      isCoastal: false, hasBeach: false,
      places: {
        free: [
          {name: 'Chamundi Hill Viewpoint', type: 'viewpoint', timeNeeded: 60},
          {name: 'St. Philomena\\'s Church', type: 'heritage', timeNeeded: 45},
          {name: 'Devaraja Market', type: 'shopping', timeNeeded: 90}
        ],
        paid: [
          {name: 'Mysore Palace', type: 'heritage', timeNeeded: 120, cost: 100},
          {name: 'Mysore Zoo', type: 'park', timeNeeded: 180, cost: 100},
          {name: 'Brindavan Gardens', type: 'park', timeNeeded: 120, cost: 50}
        ],
        malls: [
          {name: 'Mall of Mysore', hasGogupa: true, gogupaPrice: 50}
        ],
        restaurants: {
          veg: [{name: 'Mylari', avgCost: 80}, {name: 'Gayathri Tiffin Room', avgCost: 100}],
          nonveg: [{name: 'RRR', avgCost: 250}],
          budget: [{name: 'Local Darshini', avgCost: 50}]
        },
        viewpoints: [{name: 'Chamundi Hill Viewpoint', bestTime: 'evening'}]
      },
      busRoutes: [
        {from: 'City Bus Stand', to: 'Chamundi Hill', routeNo: '201', fare: 20, frequency: '20m'}
      ],
      autoFare: {base: 30, perKm: 15}
    }
  };

  const genericCityData = {
    isCoastal: false, hasBeach: false,
    places: {
      free: [{name: 'City Center / Local Market', type: 'viewpoint', timeNeeded: 60}],
      paid: [{name: 'Local Museum', type: 'museum', timeNeeded: 60, cost: 50}],
      malls: [{name: 'Main City Mall', hasGogupa: false, gogupaPrice: 0}],
      restaurants: {
        veg: [{name: 'Popular Veg Restaurant', avgCost: 150}],
        nonveg: [{name: 'Popular Non-Veg Restaurant', avgCost: 250}],
        budget: [{name: 'Local Budget Eatery', avgCost: 60}]
      },
      viewpoints: []
    },
    busRoutes: [],
    autoFare: {base: 30, perKm: 15}
  };

  // --- 3. State Management ---
  const initialState = {
    step: 0,
    language: 'en',
    destination: '',
    startLocation: '',
    startCoords: null,
    people: 0,
    budget: 0,
    transport: '',
    timeSlot: '',
    foodPref: '',
    mood: '',
    weather: 'clear'
  };
  let state = { ...initialState };
  let isTyping = false;

  // --- 4. DOM Elements Creation ---
  const backdrop = document.createElement('div');
  backdrop.className = 'wai-backdrop';
  
  const trigger = document.createElement('div');
  trigger.className = 'wai-trigger';
  trigger.innerHTML = '✨ Plan My Trip';
  
  const windowEl = document.createElement('div');
  windowEl.className = 'wai-window';
  
  const header = document.createElement('div');
  header.className = 'wai-header';
  header.innerHTML = `<span>Weekend AI</span><button class="wai-close-btn">&times;</button>`;
  
  const progress = document.createElement('div');
  progress.className = 'wai-progress';
  const progressBar = document.createElement('div');
  progressBar.className = 'wai-progress-bar';
  progressBar.style.width = '0%';
  progress.appendChild(progressBar);
  
  const body = document.createElement('div');
  body.className = 'wai-body';
  
  windowEl.appendChild(header);
  windowEl.appendChild(progress);
  windowEl.appendChild(body);
  
  document.body.appendChild(backdrop);
  document.body.appendChild(trigger);
  document.body.appendChild(windowEl);

  // --- 5. Helper Functions ---
  function updateProgress() {
    const totalSteps = STEPS.length - 1; // Exclude result step
    const percent = Math.min(100, Math.max(0, (state.step / totalSteps) * 100));
    progressBar.style.width = `${percent}%`;
  }

  function scrollToBottom() {
    setTimeout(() => {
      body.scrollTo({ top: body.scrollHeight, behavior: 'smooth' });
    }, 50);
  }

  function addBotMessage(html) {
    if (isTyping) return;
    isTyping = true;
    
    const row = document.createElement('div');
    row.className = 'wai-msg-row wai-bot';
    
    const bubble = document.createElement('div');
    bubble.className = 'wai-bubble wai-typing';
    bubble.innerHTML = `<div class="wai-dot"></div><div class="wai-dot"></div><div class="wai-dot"></div>`;
    
    row.appendChild(bubble);
    body.appendChild(row);
    scrollToBottom();
    
    setTimeout(() => {
      bubble.className = 'wai-bubble';
      bubble.innerHTML = html;
      isTyping = false;
      scrollToBottom();
    }, 300);
  }

  function addUserMessage(text) {
    const row = document.createElement('div');
    row.className = 'wai-msg-row wai-user';
    const bubble = document.createElement('div');
    bubble.className = 'wai-bubble';
    bubble.innerText = text;
    row.appendChild(bubble);
    body.appendChild(row);
    scrollToBottom();
  }

  function addOptions(options, onSelect) {
    setTimeout(() => {
      const container = document.createElement('div');
      container.className = 'wai-options';
      
      options.forEach(opt => {
        const chip = document.createElement('button');
        chip.className = 'wai-chip';
        chip.innerHTML = opt.label;
        chip.onclick = () => {
          container.style.display = 'none'; // hide options after selection
          addUserMessage(opt.label);
          setTimeout(() => onSelect(opt.value), 300);
        };
        container.appendChild(chip);
      });
      
      body.appendChild(container);
      scrollToBottom();
    }, 350); // Show after typing animation
  }

  function renderStep() {
    if (state.step >= STEPS.length) return;
    updateProgress();
    
    const currentStep = STEPS[state.step];
    const msg = currentStep.getMessage(state, state.language);
    addBotMessage(msg);
    
    if (currentStep.id === 'result') {
      const resultHtml = generateItinerary(state);
      setTimeout(() => {
        addBotMessage(resultHtml);
        const recalcOptions = currentStep.getOptions(state, state.language);
        addOptions(recalcOptions, (val) => {
          if (val === 'reset') {
            state = { ...initialState };
            body.innerHTML = '';
            renderStep();
          } else {
            state.step = val;
            renderStep();
          }
        });
      }, 500);
    } else {
      const opts = currentStep.getOptions(state, state.language);
      addOptions(opts, (val) => {
        currentStep.onSelect(val);
      });
    }
  }

  // --- 6. Conversation Steps ---
  const CITIES = ['Mangaluru', 'Bangalore', 'Mysuru', 'Manipal', 'Udupi', 'Hassan', 'Hubli', 'Dharwad', 'Belgaum', 'Shimoga'];

  const STEPS = [
    {
      id: 'language',
      getMessage: () => t('welcome', 'en'),
      getOptions: () => [
        {label: 'English', value: 'en'}, {label: 'ಕನ್ನಡ', value: 'kn'}, {label: 'हिंदी', value: 'hi'},
        {label: 'தமிழ்', value: 'ta'}, {label: 'తెలుగు', value: 'te'}, {label: 'മലയാളം', value: 'ml'},
        {label: 'मराठी', value: 'mr'}, {label: 'বাংলা', value: 'bn'}, {label: 'ગુજરાતી', value: 'gu'}
      ],
      onSelect: (val) => { state.language = val; state.step++; renderStep(); }
    },
    {
      id: 'location',
      getMessage: (s) => {
        if (s.destination) return t('loc_exploring').replace('{city}', s.destination);
        return t('loc_find');
      },
      getOptions: (s) => {
        if (s.destination) {
          return [
            {label: t('loc_use'), value: 'geo'},
            {label: 'My Hotel / Current Stay', value: 'hotel'}
          ];
        }
        return [
          {label: t('loc_use'), value: 'geo'},
          {label: t('loc_choose'), value: 'choose'}
        ];
      },
      onSelect: (val) => {
        if (val === 'geo') {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (pos) => {
                const lat = pos.coords.latitude;
                const lon = pos.coords.longitude;
                state.startCoords = {lat, lon};
                fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`, {
                  headers: {'User-Agent': 'WeekendExploreBot/1.0'}
                })
                .then(r => r.json())
                .then(data => {
                  const city = data.address.city || data.address.town || data.address.state_district || 'your location';
                  if (!state.destination) state.destination = city;
                  state.startLocation = city;
                  addBotMessage(t('loc_in').replace('{city}', city));
                  setTimeout(() => { state.step++; renderStep(); }, 1000);
                })
                .catch(() => {
                  state.step++; renderStep();
                });
              },
              (err) => {
                // Denied or error, show cities
                showCityOptions();
              },
              {timeout: 5000}
            );
          } else {
             showCityOptions();
          }
        } else if (val === 'choose') {
          showCityOptions();
        } else {
          state.startLocation = 'Hotel';
          state.step++; renderStep();
        }

        function showCityOptions() {
           const opts = CITIES.map(c => ({label: c, value: c}));
           addOptions(opts, (cityVal) => {
              state.destination = cityVal;
              state.startLocation = cityVal;
              state.step++; renderStep();
           });
        }
      }
    },
    {
      id: 'people',
      getMessage: () => t('size_q'),
      getOptions: () => [
        {label: 'Solo (1)', value: 1}, {label: 'Couple (2)', value: 2},
        {label: 'Small Group (3-4)', value: 4}, {label: 'Big Group (5-6)', value: 6},
        {label: 'Large Group (7+)', value: 8}
      ],
      onSelect: (val) => { state.people = val; state.step++; renderStep(); }
    },
    {
      id: 'budget',
      getMessage: () => t('budget_q'),
      getOptions: () => [
        {label: '₹0 (Free)', value: 0}, {label: '₹100', value: 100}, {label: '₹300', value: 300},
        {label: '₹500', value: 500}, {label: '₹800', value: 800}, {label: '₹1000', value: 1000},
        {label: '₹1500', value: 1500}, {label: '₹2000', value: 2000}, {label: '₹3000', value: 3000},
        {label: '₹5000+', value: 5000}
      ],
      onSelect: (val) => { state.budget = val; state.step++; renderStep(); }
    },
    {
      id: 'transport',
      getMessage: () => t('trans_q'),
      getOptions: (s) => {
        let opts = [
          {label: '🚶 Walking Only', value: 'walk'}, {label: '🚌 Local Bus', value: 'bus'}
        ];
        if (s.budget > 100) {
          opts.push({label: '🛺 Auto Rickshaw', value: 'auto'});
          opts.push({label: '🚕 Cab/Taxi', value: 'cab'});
        }
        return opts;
      },
      onSelect: (val) => { state.transport = val; state.step++; renderStep(); }
    },
    {
      id: 'time',
      getMessage: () => t('time_q'),
      getOptions: () => [
        {label: '🌅 Morning (8 AM - 12 PM)', value: 'morning'},
        {label: '☀️ Afternoon (12 PM - 5 PM)', value: 'afternoon'},
        {label: '🌆 Evening (4 PM - 8 PM)', value: 'evening'},
        {label: '📅 Full Day (8 AM - 8 PM)', value: 'fullday'}
      ],
      onSelect: (val) => { state.timeSlot = val; state.step++; renderStep(); }
    },
    {
      id: 'food',
      getMessage: () => t('food_q'),
      getOptions: (s) => {
        if (s.budget <= 100) return [{label: '🚫 No Food (Save Budget)', value: 'none'}];
        return [
          {label: '🥬 Vegetarian', value: 'veg'}, {label: '🍗 Non-Vegetarian', value: 'nonveg'},
          {label: '🍱 Anything Goes', value: 'any'}, {label: '🚫 No Food (Save Budget)', value: 'none'}
        ];
      },
      onSelect: (val) => { state.foodPref = val; state.step++; renderStep(); }
    },
    {
      id: 'mood',
      getMessage: () => t('mood_q'),
      getOptions: () => [
        {label: '😌 Chill & Relax', value: 'chill'}, {label: '🏔️ Adventure', value: 'adventure'},
        {label: '🏛️ Culture & Heritage', value: 'culture'}, {label: '🌿 Nature & Outdoors', value: 'nature'},
        {label: '🛍️ Shopping & Malls', value: 'shopping'}
      ],
      onSelect: (val) => { state.mood = val; state.step++; renderStep(); }
    },
    {
      id: 'weather',
      getMessage: () => t('weather_q'),
      getOptions: () => [
        {label: '☀️ Clear / Sunny', value: 'clear'}, {label: '⛅ Cloudy', value: 'cloudy'},
        {label: '🌧️ Light Rain', value: 'light_rain'}, {label: '🌊 Heavy Rain', value: 'heavy_rain'}
      ],
      onSelect: (val) => { state.weather = val; state.step++; renderStep(); }
    },
    {
      id: 'confirm',
      getMessage: (s) => {
        return `
          <div class="wai-summary-card">
            <h4 style="margin:0 0 12px 0;">${t('confirm_title')}</h4>
            <div class="wai-summary-item"><span>📍 Destination</span><span>${s.destination}</span></div>
            <div class="wai-summary-item"><span>👥 People</span><span>${s.people}</span></div>
            <div class="wai-summary-item"><span>💰 Budget</span><span>₹${s.budget}</span></div>
            <div class="wai-summary-item"><span>🚌 Transport</span><span>${s.transport}</span></div>
            <div class="wai-summary-item"><span>⏰ Time</span><span>${s.timeSlot}</span></div>
            <div class="wai-summary-item"><span>🎭 Vibe</span><span>${s.mood}</span></div>
          </div>
        `;
      },
      getOptions: () => [
        {label: t('generate'), value: 'generate'},
        {label: t('start_over'), value: 'reset'}
      ],
      onSelect: (val) => {
        if (val === 'reset') {
          state = { ...initialState };
          body.innerHTML = '';
          renderStep();
        } else {
          state.step++; renderStep();
        }
      }
    },
    {
      id: 'result',
      getMessage: () => 'Generating your perfect itinerary... ✨',
      getOptions: () => [
        {label: '👥 Change Group Size', value: 2},
        {label: '💰 Change Budget', value: 3},
        {label: '🚌 Change Transport', value: 4},
        {label: '🌤️ Change Weather', value: 8},
        {label: '🔄 Start Completely Over', value: 'reset'}
      ],
      onSelect: () => {} // Handled in renderStep special case
    }
  ];

  // --- 7. Master AI Itinerary Engine ---
  function generateItinerary(s) {
    const city = CITY_DATA[s.destination] || genericCityData;
    let availableBudget = s.budget;
    let itinerary = [];
    let totalActCost = 0;
    let totalFoodCost = 0;
    let totalTransCost = 0;
    let notes = [];

    // Weather Rule
    let activePlaces = {
      free: [...city.places.free],
      paid: [...city.places.paid],
      malls: [...city.places.malls]
    };
    
    if (s.weather === 'heavy_rain') {
      activePlaces.free = activePlaces.free.filter(p => p.type !== 'beach' && p.type !== 'park' && p.type !== 'viewpoint');
      activePlaces.paid = activePlaces.paid.filter(p => p.type !== 'park');
      notes.push('🌊 Heavy rain expected! Replaced outdoor activities with indoor alternatives.');
    } else if (s.weather === 'light_rain') {
      notes.push('🌧️ Light rain expected. Carry an umbrella!');
    }

    // Budget Rule <= 100
    if (s.budget <= 100) {
      activePlaces.paid = [];
      activePlaces.malls = [];
    }

    // Determine slots based on timeSlot
    let slots = [];
    if (s.timeSlot === 'morning') slots = [{time: '9:00 AM', type: 'act'}, {time: '11:00 AM', type: 'act'}];
    if (s.timeSlot === 'afternoon') slots = [{time: '1:00 PM', type: 'food'}, {time: '2:30 PM', type: 'act'}, {time: '4:30 PM', type: 'act'}];
    if (s.timeSlot === 'evening') slots = [{time: '4:30 PM', type: 'act'}, {time: '6:30 PM', type: 'food'}];
    if (s.timeSlot === 'fullday') slots = [
      {time: '9:30 AM', type: 'act'}, {time: '12:00 PM', type: 'act'}, 
      {time: '1:30 PM', type: 'food'}, {time: '3:00 PM', type: 'act'}, 
      {time: '5:00 PM', type: 'act'}, {time: '7:30 PM', type: 'food'}
    ];

    // Sunset Rule
    let needsSunset = city.isCoastal && (s.weather === 'clear' || s.weather === 'cloudy') && 
                      (s.timeSlot === 'afternoon' || s.timeSlot === 'evening' || s.timeSlot === 'fullday');

    let usedPlaces = new Set();
    
    function getPlace(preferredType) {
      // 1. Try paid if budget allows and not restricted
      if (s.budget > 100 && activePlaces.paid.length > 0) {
        let p = activePlaces.paid.find(p => !usedPlaces.has(p.name) && (preferredType ? p.type === preferredType : true));
        if (!p) p = activePlaces.paid.find(p => !usedPlaces.has(p.name));
        if (p && (totalActCost + p.cost) <= (availableBudget * 0.4)) {
          usedPlaces.add(p.name);
          totalActCost += p.cost;
          return { ...p, costStr: \`₹\${p.cost}\` };
        }
      }
      
      // 2. Try Mall if shopping mood
      if (s.mood === 'shopping' && activePlaces.malls.length > 0) {
         let p = activePlaces.malls.find(p => !usedPlaces.has(p.name));
         if (p) {
           usedPlaces.add(p.name);
           if (p.hasGogupa) notes.push(\`🍿 Tip: Try Gogupa at \${p.name} — just ₹\${p.gogupaPrice}/plate! Super yummy and budget-friendly!\`);
           return { name: p.name, type: 'shopping', costStr: 'Free Entry' };
         }
      }

      // 3. Fallback to free
      let p = activePlaces.free.find(p => !usedPlaces.has(p.name) && (preferredType ? p.type === preferredType : true));
      if (!p) p = activePlaces.free.find(p => !usedPlaces.has(p.name));
      if (p) {
        usedPlaces.add(p.name);
        return { ...p, costStr: 'Free' };
      }
      return null;
    }

    function getRestaurant() {
      if (s.foodPref === 'none' || s.budget <= 100) return null;
      let category = 'budget';
      if (availableBudget > 1000) category = s.foodPref === 'veg' ? 'veg' : 'nonveg';
      if (s.foodPref === 'veg') category = 'veg';
      
      const rests = city.places.restaurants[category] || city.places.restaurants.budget;
      let r = rests[Math.floor(Math.random() * rests.length)];
      
      if (r && (totalFoodCost + r.avgCost) <= (availableBudget * 0.4)) {
         totalFoodCost += r.avgCost;
         return { name: r.name, desc: \`Enjoy some local \${s.foodPref} food\`, costStr: \`~₹\${r.avgCost}\` };
      }
      return null;
    }

    // Transport calculation
    let transDesc = s.transport === 'walk' ? 'Walking between places' : 
                    s.transport === 'bus' ? 'Local City Bus' : 
                    s.transport === 'auto' ? 'Auto Rickshaw' : 'Cab / Taxi';
                    
    if (s.transport === 'bus') totalTransCost = 30;
    else if (s.transport === 'auto') totalTransCost = city.autoFare.base + (10 * city.autoFare.perKm); // rough estimate
    else if (s.transport === 'cab') totalTransCost = 300; // rough estimate
    else totalTransCost = 0;

    // Build timeline
    for (let slot of slots) {
      if (slot.type === 'food') {
         let r = getRestaurant();
         if (r) {
           itinerary.push({ time: slot.time, name: r.name, desc: r.desc, cost: r.costStr });
         }
      } else {
         // Check sunset
         let place;
         if (needsSunset && slot.time.includes('5:00 PM') || slot.time.includes('4:30 PM')) {
           place = city.places.free.find(p => p.type === 'beach' || p.type === 'viewpoint');
           if (place) { usedPlaces.add(place.name); place.costStr = 'Free'; }
           needsSunset = false; // fulfilled
         }
         
         if (!place) place = getPlace(s.mood === 'nature' ? 'park' : null);
         
         if (place) {
           let desc = \`Explore this beautiful \${place.type}. \`;
           if (s.transport === 'bus' && city.busRoutes.length > 0) {
              desc += \`Take bus \${city.busRoutes[0].routeNo} (₹\${city.busRoutes[0].fare}).\`;
           }
           itinerary.push({ time: slot.time, name: place.name, desc: desc, cost: place.costStr });
         }
      }
    }

    let total = totalActCost + totalFoodCost + totalTransCost;

    let html = \`
      <div class='wai-itinerary'>
        <div class='wai-itin-header'>
          <h3>🗺️ Your Weekend in \${s.destination || 'City'}</h3>
          <p class='wai-itin-meta'>👥 \${s.people} people • 💰 ₹\${s.budget} budget • \${transDesc}</p>
        </div>
        
        <div class='wai-timeline'>
    \`;

    itinerary.forEach(item => {
      html += \`
        <div class='wai-slot'>
          <div class='wai-slot-time'>\${item.time}</div>
          <div class='wai-slot-content'>
            <h4>\${item.name}</h4>
            <p>\${item.desc}</p>
            <span class='wai-slot-cost'>\${item.cost}</span>
          </div>
        </div>
      \`;
    });

    html += \`
        </div>
        <div class='wai-budget-summary'>
          <div class='wai-budget-row'><span>Activities</span><span>₹\${totalActCost}</span></div>
          <div class='wai-budget-row'><span>Food</span><span>₹\${totalFoodCost}</span></div>
          <div class='wai-budget-row'><span>Transport</span><span>₹\${totalTransCost}</span></div>
          <div class='wai-budget-row wai-budget-total'><span>Total</span><span>₹\${total} / ₹\${s.budget}</span></div>
        </div>
    \`;

    notes.forEach(note => {
      if (note.includes('🍿')) {
         html += \`<div class='wai-tip'>\${note}</div>\`;
      } else {
         html += \`<div class='wai-weather-note'>\${note}</div>\`;
      }
    });

    html += \`</div>\`;
    return html;
  }

  // --- 8. Event Flow & API ---
  function open() {
    backdrop.classList.add('wai-open');
    windowEl.classList.add('wai-open');
    if (state.step === 0 && body.innerHTML === '') {
      renderStep();
    }
  }

  function close() {
    backdrop.classList.remove('wai-open');
    windowEl.classList.remove('wai-open');
  }

  function toggle() {
    if (windowEl.classList.contains('wai-open')) close();
    else open();
  }

  trigger.addEventListener('click', toggle);
  header.querySelector('.wai-close-btn').addEventListener('click', close);
  backdrop.addEventListener('click', close);

  // Expose Global API
  window.WeekendAI = {
    openForCity: function(cityName) {
      state = { ...initialState, destination: cityName, step: 1 }; // skip lang, assume default or current
      body.innerHTML = '';
      open();
      renderStep();
    },
    open: open,
    close: close,
    toggle: toggle
  };

})();
