(function() {
  const STATE = {
    step: 0,
    isOpen: false,
    data: {
      language: '',
      location: '',
      groupSize: '',
      budget: '',
      transport: '',
      timeSlot: '',
      food: '',
      mood: '',
      weather: ''
    }
  };

  const STEPS = [
    {
      id: 'language',
      question: "Hello! Pick your language to get started:",
      options: ["English", "ಕನ್ನಡ", "हिंदी", "தமிழ்", "తెలుగు", "മലയാളം", "मराठी", "বাংলা", "ગુજરાતી"]
    },
    {
      id: 'location',
      question: "Where are you located?",
      options: ["📍 Auto Detect", "Bengaluru", "Mangaluru", "Mumbai", "Delhi", "Kochi", "Goa", "Udupi"]
    },
    {
      id: 'groupSize',
      question: "How many people are going?",
      options: ["1", "2", "3-4", "5-6", "7+"]
    },
    {
      id: 'budget',
      question: "What is your total group budget?",
      options: ["₹0", "₹100", "₹300", "₹500", "₹800", "₹1000", "₹1500", "₹2000", "₹3000", "₹5000+"]
    },
    {
      id: 'transport',
      question: "How do you want to travel?",
      options: ["Walk", "Local Bus", "Auto", "Cab"]
    },
    {
      id: 'timeSlot',
      question: "Which time slot works best?",
      options: ["Morning", "Afternoon", "Evening", "Full Day"]
    },
    {
      id: 'food',
      question: "What's your food preference?",
      options: ["Veg", "Non-Veg", "Anything", "No Food"]
    },
    {
      id: 'mood',
      question: "What kind of vibe are you looking for?",
      options: ["Chill", "Adventure", "Culture", "Nature", "Shopping"]
    },
    {
      id: 'weather',
      question: "How's the weather right now?",
      options: ["Clear/Sunny", "Cloudy", "Light Rain", "Heavy Rain"]
    }
  ];

  let DOM = {};

  function init() {
    if (document.getElementById('wai-trigger')) return; // Already initialized

    const container = document.getElementById('weekend-ai-container') || document.body;

    // Inject styles contextually if needed, but assuming ai-agent.css is loaded.
    // DOM Elements
    const wrapper = document.createElement('div');
    wrapper.className = 'wai-widget-container';
    
    wrapper.innerHTML = `
      <div class="wai-backdrop" id="wai-backdrop" style="z-index: 999997;"></div>
      <div class="wai-trigger-badge" id="wai-trigger" style="z-index: 999998;">✨ Plan My Trip</div>
      <div class="wai-chat-window" id="wai-chat-window" style="z-index: 999999;">
        <div class="wai-header">
          <div class="wai-header-info">
            <div class="wai-agent-avatar">🤖</div>
            <span class="wai-agent-name">Weekend AI</span>
          </div>
          <button class="wai-close-btn" id="wai-close">&times;</button>
        </div>
        <div class="wai-progress-container">
          <div class="wai-progress-dots" id="wai-dots">
            ${Array(10).fill('<div class="wai-dot"></div>').join('')}
          </div>
        </div>
        <div class="wai-chat-body" id="wai-chat-body"></div>
      </div>
    `;
    container.appendChild(wrapper);

    DOM = {
      trigger: document.getElementById('wai-trigger'),
      chatWindow: document.getElementById('wai-chat-window'),
      backdrop: document.getElementById('wai-backdrop'),
      closeBtn: document.getElementById('wai-close'),
      chatBody: document.getElementById('wai-chat-body'),
      dots: document.getElementById('wai-dots').children
    };

    // Event Listeners
    DOM.trigger.addEventListener('click', toggleChat);
    DOM.closeBtn.addEventListener('click', closeChat);
    DOM.backdrop.addEventListener('click', closeChat);

    // Initial render
    renderStep();
  }

  function toggleChat() {
    if (STATE.isOpen) {
      closeChat();
    } else {
      openChat();
    }
  }

  function openChat() {
    STATE.isOpen = true;
    DOM.chatWindow.classList.add('wai-open');
    DOM.backdrop.classList.add('wai-show');
    if (STATE.step === 0 && DOM.chatBody.innerHTML.trim() === '') {
      renderStep();
    }
    scrollToBottom();
  }

  function closeChat() {
    STATE.isOpen = false;
    DOM.chatWindow.classList.remove('wai-open');
    DOM.backdrop.classList.remove('wai-show');
  }

  function updateDots() {
    for (let i = 0; i < DOM.dots.length; i++) {
      if (i <= STATE.step) {
        DOM.dots[i].classList.add('wai-dot-active');
      } else {
        DOM.dots[i].classList.remove('wai-dot-active');
      }
    }
  }

  function scrollToBottom() {
    setTimeout(() => {
      DOM.chatBody.scrollTop = DOM.chatBody.scrollHeight;
    }, 50);
  }

  function addAIMessage(htmlContent) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'wai-message wai-message-ai';
    msgDiv.innerHTML = htmlContent;
    DOM.chatBody.appendChild(msgDiv);
    scrollToBottom();
  }

  function addUserMessage(text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'wai-message wai-message-user';
    msgDiv.textContent = text;
    DOM.chatBody.appendChild(msgDiv);
    scrollToBottom();
  }

  function showTypingIndicator(callback) {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'wai-typing-indicator';
    typingDiv.id = 'wai-typing';
    typingDiv.innerHTML = `
      <div class="wai-typing-dot"></div>
      <div class="wai-typing-dot"></div>
      <div class="wai-typing-dot"></div>
    `;
    DOM.chatBody.appendChild(typingDiv);
    scrollToBottom();

    setTimeout(() => {
      const el = document.getElementById('wai-typing');
      if (el) el.remove();
      callback();
    }, 600); // 600ms delay for natural feel
  }

  function handleOptionSelect(stepId, optionValue) {
    // Remove current chips so user can't click again
    const currentChips = document.querySelector('.wai-chips-container:last-child');
    if (currentChips) currentChips.remove();

    addUserMessage(optionValue);
    STATE.data[stepId] = optionValue;

    if (stepId === 'location' && optionValue === '📍 Auto Detect') {
      showTypingIndicator(() => {
        addAIMessage("Detecting your location...");
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            // Simple nominatim reverse geocoding
            fetch(\`https://nominatim.openstreetmap.org/reverse?format=json&lat=\${latitude}&lon=\${longitude}\`)
              .then(res => res.json())
              .then(data => {
                const city = data.address.city || data.address.town || data.address.village || "Unknown Location";
                STATE.data.location = city;
                addUserMessage(\`Detected: \${city}\`);
                proceedToNextStep();
              })
              .catch(() => {
                STATE.data.location = "Bengaluru"; // fallback
                addUserMessage("Could not detect precise location. Defaulting to Bengaluru.");
                proceedToNextStep();
              });
          }, () => {
            STATE.data.location = "Bengaluru"; // fallback
            addUserMessage("Location access denied. Defaulting to Bengaluru.");
            proceedToNextStep();
          });
        } else {
          STATE.data.location = "Bengaluru"; // fallback
          addUserMessage("Geolocation not supported. Defaulting to Bengaluru.");
          proceedToNextStep();
        }
      });
      return;
    }

    proceedToNextStep();
  }

  function proceedToNextStep() {
    STATE.step++;
    updateDots();
    renderStep();
  }

  function renderStep() {
    if (STATE.step < STEPS.length) {
      showTypingIndicator(() => {
        const stepInfo = STEPS[STATE.step];
        let content = \`<div>\${stepInfo.question}</div>\`;
        
        let chipsHtml = \`<div class="wai-chips-container">\`;
        stepInfo.options.forEach(opt => {
          chipsHtml += \`<button class="wai-chip" onclick="window.WeekendAI.selectOption('\${stepInfo.id}', '\${opt}')">\${opt}</button>\`;
        });
        chipsHtml += \`</div>\`;
        
        addAIMessage(content + chipsHtml);
      });
    } else {
      // Step 10: Confirmation & Itinerary
      showTypingIndicator(() => {
        addAIMessage("Generating your perfect plan based on our AI rules...");
        setTimeout(() => {
          showTypingIndicator(() => {
            addAIMessage(generateItineraryHTML());
          });
        }, 800);
      });
    }
  }

  function getNumericBudget() {
    if (!STATE.data.budget) return 0;
    let b = STATE.data.budget.replace('₹', '').replace('+', '');
    return parseInt(b) || 0;
  }

  function generateItineraryHTML() {
    const budget = getNumericBudget();
    const loc = STATE.data.location;
    const isCoastal = ['Mangaluru', 'Gokarna', 'Goa', 'Udupi', 'Kochi'].includes(loc);
    
    let remainingBudget = budget;
    let activities = [];
    
    // Weather Engine
    let spotType = "Parks & Outdoors";
    if (STATE.data.weather === "Light Rain" || STATE.data.weather === "Heavy Rain") {
      spotType = "Indoor spots (Malls, Museums & Cafes)";
    }

    // Budget Engine & No Vehicle Logic
    let transportMode = STATE.data.transport;
    let costPerTransport = 0;
    
    // ₹100 Rule: Budget <= 100 eliminates paid spots
    if (budget <= 100) {
      transportMode = "Walk / Local Bus";
      spotType = "Free Public Parks/Streets";
      if (STATE.data.transport === "Local Bus") {
        costPerTransport = 20; // Verified local bus fare
      }
    } else {
      if (transportMode === "Local Bus") {
        transportMode = "Local Bus (Route depends on area)";
        costPerTransport = 30;
      } else if (transportMode === "Auto" || transportMode === "Cab") {
        costPerTransport = 150;
      }
    }

    // Deduct initial transport
    remainingBudget = Math.max(0, remainingBudget - costPerTransport);

    activities.push({
      time: "Start",
      title: "Heading Out",
      desc: \`Taking \${transportMode} towards \${spotType}.\`
    });

    // Mall + Gogupa Rule
    if (spotType.includes("Mall")) {
      activities.push({
         time: "Midway",
         title: "Mall Visit",
         desc: \`🍿 Tip: Try Gogupa at the mall for ₹20/plate!\`
      });
      remainingBudget = Math.max(0, remainingBudget - 20);
    }

    // Food Logic
    if (budget > 100 && remainingBudget >= 50 && STATE.data.food !== "No Food") {
       let foodCost = Math.min(remainingBudget, budget > 1000 ? 500 : 200);
       activities.push({
         time: "Break",
         title: "Food / Snack Time",
         desc: \`Enjoying some \${STATE.data.food} cuisine. (Est. ₹\${foodCost})\`
       });
       remainingBudget -= foodCost;
    }

    // Evening Sunset Rule
    if (isCoastal && (STATE.data.timeSlot === "Evening" || STATE.data.timeSlot === "Full Day")) {
      activities.push({
        time: "5:00 PM - 6:00 PM",
        title: "Sunset Views",
        desc: \`Head to the nearest beach in \${loc} for a magical sunset.\`
      });
    }

    activities.push({
      time: "End",
      title: "Heading Back",
      desc: \`Returning via \${transportMode}.\`
    });
    remainingBudget = Math.max(0, remainingBudget - costPerTransport);

    let totalCost = budget - remainingBudget;

    let html = \`<div class="wai-itinerary">
      <div class="wai-itinerary-title">Your \${loc} Itinerary</div>
      <div class="wai-timeline">\`;

    activities.forEach(act => {
      html += \`
        <div class="wai-timeline-item">
          <div class="wai-time-slot">\${act.time}</div>
          <div class="wai-timeline-dot"></div>
          <div class="wai-timeline-content">
            <div class="wai-timeline-content-title">\${act.title}</div>
            <div class="wai-timeline-content-desc">\${act.desc}</div>
          </div>
        </div>\`;
    });

    html += \`</div>
      <div class="wai-budget-card">
        <span class="wai-budget-label">Est. Total Cost:</span>
        <span class="wai-budget-amount">₹\${totalCost} / ₹\${budget}</span>
      </div>
      <button class="wai-btn-outline" onclick="window.WeekendAI.reset()">Change Something / Start Over</button>
    </div>\`;

    return html;
  }

  // Global API
  window.WeekendAI = {
    openForCity: function(cityName) {
      STATE.data.location = cityName;
      STATE.step = 2; // Skip Language (0) and Location (1)
      DOM.chatBody.innerHTML = '';
      updateDots();
      openChat();
      
      showTypingIndicator(() => {
        addAIMessage(\`Great! I've set your destination to <b>\${cityName}</b>.\`);
        renderStep();
      });
    },
    open: function() {
      openChat();
    },
    close: function() {
      closeChat();
    },
    toggle: function() {
      toggleChat();
    },
    selectOption: function(stepId, optionValue) {
      handleOptionSelect(stepId, optionValue);
    },
    reset: function() {
      STATE.step = 0;
      STATE.data = {
        language: '', location: '', groupSize: '', budget: '',
        transport: '', timeSlot: '', food: '', mood: '', weather: ''
      };
      DOM.chatBody.innerHTML = '';
      updateDots();
      renderStep();
    }
  };

  // Wait for DOM
  if (document.readyState !== 'loading') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }

})();
