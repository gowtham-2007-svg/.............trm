/**
 * Weekend Explore — First-Visit Onboarding Experience
 * Premium, minimal, travel-focused, zero emojis.
 */

(function () {
    'use strict';

    const STORAGE_KEY = 'weekend_explorer_onboarding_completed';
    const ANSWERS_STORAGE_KEY = 'weekend_explorer_onboarding_answers';

    // Global helper for resetting and testing onboarding

    // Global function to trigger Cartoon & Truck Adventure Animation anytime
    window.playAdventureAnimation = function () {
        let overlay = document.getElementById('we-onboarding-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'we-onboarding-overlay';
            overlay.className = 'we-onboarding-overlay';
            overlay.innerHTML = `
                <div class="we-ambient-orb we-ambient-orb-1"></div>
                <div class="we-ambient-orb we-ambient-orb-2"></div>
                <div class="we-onboarding-shell" id="we-onboarding-shell"></div>
            `;
            document.body.prepend(overlay);
        }
        overlay.classList.remove('we-fade-out');
        overlay.style.display = 'flex';
        document.documentElement.classList.add('we-onboarding-active');
        const shell = document.getElementById('we-onboarding-shell');
        renderCompletionStage(shell);
    };

    window.resetWeekendOnboarding = function () {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(ANSWERS_STORAGE_KEY);
        sessionStorage.removeItem('welcomed');
        window.location.reload();
    };

    // Check for ?reset or #reset in URL to allow easy testing
    if (window.location.search.includes('reset') || window.location.hash.includes('reset') || window.location.search.includes('intro') || window.location.hash.includes('intro')) {
        sessionStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(ANSWERS_STORAGE_KEY);
        sessionStorage.removeItem('welcomed');
    }

    // Clear old permanent localStorage block so it displays properly
    // localStorage.removeItem(STORAGE_KEY);

    // Check if user already finished onboarding in this browser session
    const isCompleted = sessionStorage.getItem(STORAGE_KEY) === 'true';
    if (isCompleted) {
        document.documentElement.classList.remove('we-onboarding-active');
        const existingOverlay = document.getElementById('we-onboarding-overlay');
        if (existingOverlay) {
            existingOverlay.remove();
        }
        return;
    }

    // Mark html as onboarding active immediately to prevent content flash
    document.documentElement.classList.add('we-onboarding-active');

    // Questions Data
    const QUESTIONS = [
        {
            step: 1,
            title: "Where did you discover Weekend Explore?",
            options: [
                "Instagram",
                "Google",
                "YouTube",
                "Friend",
                "College",
                "Other"
            ]
        },
        {
            step: 2,
            title: "What brings you to Weekend Explore?",
            options: [
                "Plan a weekend trip",
                "Discover new places",
                "Find food & restaurants",
                "Find fun activities",
                "Get a complete trip plan"
            ]
        },
        {
            step: 3,
            title: "What are you looking for from Weekend Explore?",
            options: [
                "Save time planning",
                "Discover hidden places",
                "Plan within my budget",
                "Find the best places nearby",
                "Make my weekend memorable"
            ]
        }
    ];

    const userSurveyAnswers = {};

    function initOnboarding() {
        // Build Master Overlay
        let overlay = document.getElementById('we-onboarding-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'we-onboarding-overlay';
            overlay.className = 'we-onboarding-overlay';
            overlay.innerHTML = `
                <div class="we-ambient-orb we-ambient-orb-1"></div>
                <div class="we-ambient-orb we-ambient-orb-2"></div>
                <div class="we-onboarding-shell" id="we-onboarding-shell"></div>
            `;
            document.body.prepend(overlay);
        }

        const shell = document.getElementById('we-onboarding-shell');

        // Go straight to Weekend Explorer intro animation
        playIntroStage(shell);
    }

    /**
     * PRE-INTRO: kept for reference but no longer used — tap screen removed.
     */
    function showTapToBegin(container, overlay) {
        // Not used — intro plays immediately
    }

    /**
     * STAGE 1: INTRO ANIMATION
     * Shows:
     * Weekend
     * Explorer
     * "Weekend" slides in from left, "Explorer" from right, separate, then come together.
     * Subtle glow / blur-to-clear effect. Duration ~2.7s.
     */
    function playIntroStage(container) {
        const existing = document.getElementById('we-intro-stage');

        if (existing) {
            // Resume the paused animation (words are held at frame 0)
            existing.style.animationPlayState = 'running';
            existing.querySelectorAll('.we-intro-word').forEach(el => {
                el.style.animationPlayState = 'running';
            });
        } else {
            // Build fresh if not already in DOM
            container.innerHTML = `
                <div class="we-intro-stage" id="we-intro-stage">
                    <div class="we-intro-glow"></div>
                    <div class="we-intro-brand">
                        <span class="we-intro-word we-word-weekend">Weekend</span>
                        <span class="we-intro-word we-word-explorer">Explorer</span>
                    </div>
                </div>
            `;
        }

        // Try to play cinematic sound (plays if browser allows; silently skips if not)
        playIntroSound();

        // At 2150ms words are mid-fade — render card to overlap cleanly
        setTimeout(() => {
            renderLocationStage(container);
        }, 2150);
    }

    /**
     * STAGE 2: LOCATION PERMISSION SCREEN
     * Clean, premium travel-focused location access request.
     */
    function renderLocationStage(container) {
        container.innerHTML = `
            <div class="we-card" id="we-location-card">
                <div class="we-pill">LOCATION ACCESS</div>
                <h1 class="we-title">Enable location for tailored recommendations</h1>
                <p class="we-subtitle">
                    Weekend Explore uses your location to discover nearby getaways, accurate travel times, and curated destinations in South India.
                </p>
                <div class="we-actions-row">
                    <button type="button" class="we-btn-primary" id="we-btn-allow-location">
                        <span id="we-allow-loc-text">Allow Location</span>
                    </button>
                    <button type="button" class="we-btn-secondary" id="we-btn-skip-location">
                        Continue without location
                    </button>
                </div>
            </div>
        `;

        const card = document.getElementById('we-location-card');
        const allowBtn = document.getElementById('we-btn-allow-location');
        const skipBtn = document.getElementById('we-btn-skip-location');
        const btnText = document.getElementById('we-allow-loc-text');

        let handled = false;

        function proceedToQuestions() {
            if (handled) return;
            handled = true;

            if (card) {
                card.classList.add('we-card-exit');
            }

            setTimeout(() => {
                renderQuestionFlow(container, 0);
            }, 320);
        }

        if (allowBtn) {
            allowBtn.addEventListener('click', () => {
                btnText.innerHTML = `<span class="we-spinner"></span> Accessing location...`;
                allowBtn.disabled = true;

                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            try {
                                localStorage.setItem('weekend_user_lat', position.coords.latitude.toString());
                                localStorage.setItem('weekend_user_lng', position.coords.longitude.toString());
                            } catch (e) {}
                            proceedToQuestions();
                        },
                        (error) => {
                            // Permission denied or unavailable, proceed gracefully
                            proceedToQuestions();
                        },
                        { timeout: 7000, maximumAge: 300000 }
                    );
                } else {
                    proceedToQuestions();
                }
            });
        }

        if (skipBtn) {
            skipBtn.addEventListener('click', () => {
                proceedToQuestions();
            });
        }
    }

    /**
     * STAGE 3: 3 QUESTIONS (ONE AT A TIME)
     * Progress 1/3, 2/3, 3/3
     * Staggered delay for options, smooth border/highlight animation on selected option.
     */
    function renderQuestionFlow(container, questionIndex) {
        const question = QUESTIONS[questionIndex];
        const stepNumber = questionIndex + 1;
        const totalSteps = QUESTIONS.length;
        const progressPercent = (stepNumber / totalSteps) * 100;

        container.innerHTML = `
            <div class="we-card" id="we-question-card">
                <div class="we-progress-header">
                    <div class="we-progress-meta">
                        <span class="we-progress-brand">WEEKEND EXPLORE</span>
                        <span class="we-progress-indicator">${stepNumber}/${totalSteps}</span>
                    </div>
                    <div class="we-progress-track">
                        <div class="we-progress-fill" style="width: ${progressPercent}%;"></div>
                    </div>
                </div>

                <div class="we-question-view we-slide-enter" id="we-question-view">
                    <h2 class="we-title">${escapeHtml(question.title)}</h2>
                    <div class="we-options-list" id="we-options-list">
                        ${question.options.map((opt, i) => `
                            <button type="button" class="we-option-btn" data-value="${escapeHtml(opt)}" style="--delay: ${i * 65}ms;">
                                <span class="we-option-text">${escapeHtml(opt)}</span>
                                <span class="we-option-indicator">
                                    <span class="we-option-indicator-dot"></span>
                                </span>
                            </button>
                        `).join('')}
                    </div>

                    <div class="we-actions-row">
                        <button type="button" class="we-btn-primary" id="we-btn-continue" disabled>
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        `;

        const card = document.getElementById('we-question-card');
        const questionView = document.getElementById('we-question-view');
        const continueBtn = document.getElementById('we-btn-continue');
        const optionBtns = container.querySelectorAll('.we-option-btn');

        let selectedOption = null;

        optionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                optionBtns.forEach(b => b.classList.remove('we-selected'));
                btn.classList.add('we-selected');
                selectedOption = btn.getAttribute('data-value');

                // Enable continue button with smooth highlight
                if (continueBtn) {
                    continueBtn.disabled = false;
                }
            });
        });

        if (continueBtn) {
            continueBtn.addEventListener('click', () => {
                if (!selectedOption) return;

                userSurveyAnswers[`question_${stepNumber}`] = selectedOption;

                // Animate question transition out smoothly
                if (questionView) {
                    questionView.classList.remove('we-slide-enter');
                    questionView.classList.add('we-slide-exit');
                }

                setTimeout(() => {
                    const nextIndex = questionIndex + 1;
                    if (nextIndex < totalSteps) {
                        renderQuestionFlow(container, nextIndex);
                    } else {
                        renderCompletionStage(container);
                    }
                }, 280);
            });
        }
    }

    /**
     * STAGE 4: COMPLETION SCREEN
     * Shows:
     * "You're all set."
     * Then:
     * "Let's explore your weekend."
     * Animated smoothly and transitions into the EXISTING Home page.
     */
    function playTruckHorn() {
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return;
            const ctx = new AudioCtx();
            if (ctx.state === 'suspended') ctx.resume();

            function beep(delay, duration) {
                const osc1 = ctx.createOscillator();
                const osc2 = ctx.createOscillator();
                const gain = ctx.createGain();

                osc1.type = 'triangle';
                osc2.type = 'sine';
                osc1.frequency.setValueAtTime(349.23, ctx.currentTime + delay);
                osc2.frequency.setValueAtTime(440.00, ctx.currentTime + delay);

                gain.gain.setValueAtTime(0, ctx.currentTime + delay);
                gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + delay + 0.02);
                gain.gain.linearRampToValueAtTime(0, ctx.currentTime + delay + duration);

                osc1.connect(gain);
                osc2.connect(gain);
                gain.connect(ctx.destination);

                osc1.start(ctx.currentTime + delay);
                osc2.start(ctx.currentTime + delay);
                osc1.stop(ctx.currentTime + delay + duration);
                osc2.stop(ctx.currentTime + delay + duration);
            }

            beep(0, 0.12);
            beep(0.16, 0.14);

            setTimeout(() => { try { ctx.close(); } catch(e) {} }, 1200);
        } catch(e) {}
    }

    function renderCompletionStage(container) {
        container.innerHTML = `
            <div class="we-completion-stage" id="we-completion-stage">
                <div class="we-completion-line-1">You're all set.</div>
                <div class="we-completion-line-2">Let's explore your weekend.</div>

                <div class="we-adventure-stage" id="we-adventure-stage">
                    <div class="we-road-track"></div>
                    <div class="we-road-dashes"></div>

                    <!-- Running Cartoon Explorer Boy -->
                    <div class="we-boy-runner-container" id="we-boy-runner">
                        <div class="we-boy-img-wrap" id="we-boy-wrap">
                            <img src="assets/cartoon-boy.png" alt="Explorer Boy" class="we-boy-img" id="we-boy-img">
                        </div>
                        <div class="we-dust-particle"></div>
                    </div>

                    <!-- Small Adventure Truck -->
                    <div class="we-truck-container" id="we-truck">
                        <div class="we-horn-badge" id="we-horn-badge">HONK! 🚗</div>
                        <div class="we-headlight-glow"></div>

                        <!-- Seated Boy on Truck (revealed when hopped) -->
                        <img src="assets/cartoon-boy.png" alt="Boy on Truck" class="we-seated-boy" id="we-seated-boy">

                        <!-- SVG Adventure Truck -->
                        <svg class="we-truck-svg" viewBox="0 0 170 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="weTruckBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#8338EC"/>
                                    <stop offset="50%" stop-color="#9333EA"/>
                                    <stop offset="100%" stop-color="#3A86EF"/>
                                </linearGradient>
                                <linearGradient id="weCabinGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stop-color="#ffffff"/>
                                    <stop offset="100%" stop-color="#e2e8f0"/>
                                </linearGradient>
                                <linearGradient id="weMetalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stop-color="#94a3b8"/>
                                    <stop offset="100%" stop-color="#475569"/>
                                </linearGradient>
                            </defs>
                            <rect x="22" y="44" width="60" height="26" rx="4" fill="url(#weTruckBodyGrad)"/>
                            <rect x="20" y="38" width="62" height="4" rx="2" fill="url(#weMetalGrad)"/>
                            <rect x="28" y="42" width="3" height="6" fill="#334155"/>
                            <rect x="52" y="42" width="3" height="6" fill="#334155"/>
                            <rect x="76" y="42" width="3" height="6" fill="#334155"/>
                            <rect x="26" y="28" width="16" height="11" rx="2" fill="#f59e0b"/>
                            <rect x="29" y="32" width="10" height="2" fill="#b45309"/>
                            <path d="M78 44 H145 C150 44 154 48 154 54 V70 H78 V44 Z" fill="url(#weTruckBodyGrad)"/>
                            <path d="M82 44 L92 24 H126 C131 24 135 28 137 33 L142 44 H82 Z" fill="url(#weCabinGrad)"/>
                            <path d="M125 27 L134 42 H110 V27 H125 Z" fill="#38bdf8" fill-opacity="0.75"/>
                            <rect x="94" y="27" width="13" height="15" rx="1" fill="#38bdf8" fill-opacity="0.6"/>
                            <rect x="88" y="21" width="42" height="3" rx="1.5" fill="#334155"/>
                            <ellipse cx="98" cy="18" rx="8" ry="4" fill="#10b981"/>
                            <ellipse cx="116" cy="18" rx="10" ry="4" fill="#ec4899"/>
                            <rect x="142" y="52" width="16" height="16" rx="3" fill="url(#weTruckBodyGrad)"/>
                            <rect x="152" y="64" width="8" height="6" rx="2" fill="#cbd5e1"/>
                            <circle cx="154" cy="56" r="4.5" fill="#fef08a"/>
                            <circle cx="154" cy="56" r="2.5" fill="#ffffff"/>
                            <line x1="150" y1="60" x2="150" y2="64" stroke="#1e293b" stroke-width="1.5"/>
                            <line x1="147" y1="60" x2="147" y2="64" stroke="#1e293b" stroke-width="1.5"/>
                            <rect x="100" y="49" width="6" height="2" rx="1" fill="#ffffff"/>
                            <rect x="18" y="64" width="5" height="5" rx="1.5" fill="#cbd5e1"/>
                            <rect x="19" y="48" width="3" height="5" rx="1" fill="#ef4444"/>
                            <circle cx="48" cy="72" r="17" fill="#0b0f19"/>
                            <circle cx="128" cy="72" r="17" fill="#0b0f19"/>
                            <g transform="translate(48, 72)">
                                <circle cx="0" cy="0" r="14" fill="#1e293b"/>
                                <circle cx="0" cy="0" r="9" fill="#94a3b8"/>
                                <circle cx="0" cy="0" r="4" fill="#f8fafc"/>
                                <g class="we-wheel-group">
                                    <line x1="-7" y1="0" x2="7" y2="0" stroke="#334155" stroke-width="2"/>
                                    <line x1="0" y1="-7" x2="0" y2="7" stroke="#334155" stroke-width="2"/>
                                </g>
                            </g>
                            <g transform="translate(128, 72)">
                                <circle cx="0" cy="0" r="14" fill="#1e293b"/>
                                <circle cx="0" cy="0" r="9" fill="#94a3b8"/>
                                <circle cx="0" cy="0" r="4" fill="#f8fafc"/>
                                <g class="we-wheel-group">
                                    <line x1="-7" y1="0" x2="7" y2="0" stroke="#334155" stroke-width="2"/>
                                    <line x1="0" y1="-7" x2="0" y2="7" stroke="#334155" stroke-width="2"/>
                                </g>
                            </g>
                        </svg>

                        <div class="we-exhaust-puffs">
                            <span class="we-puff"></span>
                            <span class="we-puff"></span>
                            <span class="we-puff"></span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Save completion and user answers to sessionStorage
        try {
            sessionStorage.setItem(STORAGE_KEY, 'true');
            localStorage.setItem(ANSWERS_STORAGE_KEY, JSON.stringify(userSurveyAnswers));
        } catch (e) {
            console.warn('Storage not accessible:', e);
        }

        const boyImg = document.getElementById('we-boy-img');
        const seatedBoy = document.getElementById('we-seated-boy');
        const horn = document.getElementById('we-horn-badge');
        const truck = document.getElementById('we-truck');

        // Choreography Timeline
        // 1. Boy reaches truck and hops
        setTimeout(() => {
            if (boyImg) boyImg.classList.add('we-boy-hopping');
        }, 2400);

        // 2. Boy lands on truck bed
        setTimeout(() => {
            if (seatedBoy) seatedBoy.classList.add('visible');
        }, 2950);

        // 3. Horn honks beep-beep!
        setTimeout(() => {
            if (horn) horn.classList.add('honk');
            playTruckHorn();
        }, 3250);
        setTimeout(() => {
            if (horn) horn.classList.remove('honk');
        }, 3750);

        // 4. Truck revs and accelerates
        setTimeout(() => {
            if (truck) truck.classList.add('we-truck-accelerating');
        }, 3550);

        // 5. Truck drives off into distance and website opens!
        setTimeout(() => {
            finishOnboarding();
        }, 4850);
    }

    function finishOnboarding() {
        const overlay = document.getElementById('we-onboarding-overlay');

        // Reveal the main header smoothly (while overlay is still fading out)
        const header = document.querySelector('.main-header');
        if (header) {
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
            header.style.pointerEvents = 'auto';
        }

        if (overlay) {
            overlay.classList.add('we-fade-out');

            // Wait for full fade (~750ms) before removing overlay from DOM.
            // CRITICAL: Keep 'we-onboarding-active' class until NOW so the
            // welcome audio interaction listeners cannot fire during the fade.
            setTimeout(() => {
                overlay.remove();

                // Only AFTER overlay is fully gone do we remove the guard class
                document.documentElement.classList.remove('we-onboarding-active');

                // User has arrived on Home page — play welcome audio
                if (typeof window.playWelcomeAudio === 'function') {
                    window.playWelcomeAudio();
                }

                // Show sign-in card 1.5 seconds after reaching Home page
                if (typeof window.triggerSignInPopup === 'function') {
                    window.triggerSignInPopup();
                }

                // Notify listeners that onboarding completed and home page is visible
                window.dispatchEvent(new CustomEvent('we-onboarding-finished'));
            }, 750);
        } else {
            // Fallback: no overlay found
            document.documentElement.classList.remove('we-onboarding-active');
            if (typeof window.playWelcomeAudio === 'function') {
                window.playWelcomeAudio();
            }
            if (typeof window.triggerSignInPopup === 'function') {
                window.triggerSignInPopup();
            }
            window.dispatchEvent(new CustomEvent('we-onboarding-finished'));
        }
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

    /**
     * INTRO SOUND — Synthesized via Web Audio API.
     * Sequence (matches animation keyframes):
     *  0.00s – Soft double whoosh sweeps in (left + right words entering)
     *  0.00s – Ambient pad chord swells in slowly
     *  1.40s – Sparkle bloom tones fire as words unite
     *  2.10s – Everything fades to silence
     */
    function playIntroSound() {
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return;

            const ctx = new AudioCtx();

            // Resume in case browser suspended context (autoplay policy)
            if (ctx.state === 'suspended') {
                ctx.resume();
            }

            const now = ctx.currentTime;

            // ─── Master Gain ─────────────────────────────────────────────
            const master = ctx.createGain();
            master.gain.setValueAtTime(0.001, now);
            master.gain.linearRampToValueAtTime(0.7, now + 0.25);
            master.gain.linearRampToValueAtTime(0.55, now + 1.4);
            master.gain.linearRampToValueAtTime(0.001, now + 2.65);
            master.connect(ctx.destination);

            // ─── Convolution Reverb (synthesized impulse) ─────────────────
            const iLen = Math.floor(ctx.sampleRate * 1.8);
            const irBuf = ctx.createBuffer(2, iLen, ctx.sampleRate);
            for (let ch = 0; ch < 2; ch++) {
                const d = irBuf.getChannelData(ch);
                for (let i = 0; i < iLen; i++) {
                    d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / iLen, 1.6);
                }
            }
            const reverb = ctx.createConvolver();
            reverb.buffer = irBuf;
            const reverbGain = ctx.createGain();
            reverbGain.gain.value = 0.38;
            reverb.connect(reverbGain);
            reverbGain.connect(master);

            // ─── Whoosh Sweep (words sliding in 0–0.85s) ──────────────────
            function makeWhoosh(startT, direction) {
                const nLen = Math.floor(ctx.sampleRate * 0.9);
                const nBuf = ctx.createBuffer(1, nLen, ctx.sampleRate);
                const nd = nBuf.getChannelData(0);
                for (let i = 0; i < nLen; i++) nd[i] = Math.random() * 2 - 1;

                const src = ctx.createBufferSource();
                src.buffer = nBuf;

                const bpf = ctx.createBiquadFilter();
                bpf.type = 'bandpass';
                // Left whoosh sweeps low→high, right sweeps high→low for stereo drama
                bpf.frequency.setValueAtTime(direction === 'up' ? 160 : 2400, startT);
                bpf.frequency.exponentialRampToValueAtTime(direction === 'up' ? 2400 : 160, startT + 0.82);
                bpf.Q.value = 1.8;

                const wpf = ctx.createBiquadFilter();
                wpf.type = 'lowpass';
                wpf.frequency.value = 4000;

                const wg = ctx.createGain();
                wg.gain.setValueAtTime(0.001, startT);
                wg.gain.linearRampToValueAtTime(0.22, startT + 0.08);
                wg.gain.linearRampToValueAtTime(0.001, startT + 0.85);

                src.connect(bpf);
                bpf.connect(wpf);
                wpf.connect(wg);
                wg.connect(master);
                wg.connect(reverb);
                src.start(startT);
            }
            makeWhoosh(now, 'up');          // left-side sweep
            makeWhoosh(now + 0.04, 'down'); // right-side sweep (slight offset)

            // ─── Ambient Pad Chord (A-minor tonality) ─────────────────────
            // Frequencies: A2, E3, A3, C4, E4
            const padFreqs = [110, 165, 220, 261.63, 329.63];
            padFreqs.forEach((freq, i) => {
                const osc = ctx.createOscillator();
                osc.type = i % 2 === 0 ? 'sine' : 'triangle';
                osc.frequency.value = freq;
                // Subtle detuning per partial for warmth
                osc.detune.value = (i - 2) * 3;

                const og = ctx.createGain();
                og.gain.setValueAtTime(0.001, now);
                og.gain.linearRampToValueAtTime(0.055 - i * 0.006, now + 0.45 + i * 0.08);
                og.gain.linearRampToValueAtTime(0.07 - i * 0.006, now + 1.4);
                og.gain.linearRampToValueAtTime(0.001, now + 2.65);

                osc.connect(og);
                og.connect(master);
                og.connect(reverb);
                osc.start(now);
                osc.stop(now + 2.8);
            });

            // ─── High shimmer layer on pad (adds air) ─────────────────────
            [880, 1108.73].forEach((freq) => {
                const osc = ctx.createOscillator();
                osc.type = 'sine';
                osc.frequency.value = freq;
                const og = ctx.createGain();
                og.gain.setValueAtTime(0.001, now + 0.4);
                og.gain.linearRampToValueAtTime(0.018, now + 0.9);
                og.gain.linearRampToValueAtTime(0.001, now + 2.65);
                osc.connect(og);
                og.connect(master);
                og.connect(reverb);
                osc.start(now + 0.4);
                osc.stop(now + 2.8);
            });

            // ─── Sparkle Bloom — words unite at ~1.4s ─────────────────────
            const sparkleFreqs = [1318.51, 1760, 2093, 2637.02, 3136]; // E6–G7 pentatonic
            sparkleFreqs.forEach((freq, i) => {
                const t = now + 1.38 + i * 0.055;
                const osc = ctx.createOscillator();
                osc.type = 'sine';
                osc.frequency.value = freq;

                const sg = ctx.createGain();
                sg.gain.setValueAtTime(0.001, t);
                sg.gain.linearRampToValueAtTime(0.045 - i * 0.006, t + 0.04);
                sg.gain.exponentialRampToValueAtTime(0.001, t + 0.45);

                osc.connect(sg);
                sg.connect(master);
                sg.connect(reverb);
                osc.start(t);
                osc.stop(t + 0.5);
            });

            // ─── Low sub pulse at unite moment (impact feel) ──────────────
            const sub = ctx.createOscillator();
            sub.type = 'sine';
            sub.frequency.setValueAtTime(55, now + 1.38);
            sub.frequency.exponentialRampToValueAtTime(28, now + 1.75);
            const subG = ctx.createGain();
            subG.gain.setValueAtTime(0.001, now + 1.38);
            subG.gain.linearRampToValueAtTime(0.18, now + 1.42);
            subG.gain.exponentialRampToValueAtTime(0.001, now + 1.85);
            sub.connect(subG);
            subG.connect(master);
            sub.start(now + 1.38);
            sub.stop(now + 2.0);

            // Clean up AudioContext after sound completes
            setTimeout(() => { try { ctx.close(); } catch(e) {} }, 3200);

        } catch (e) {
            // Web Audio not supported — silently skip
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initOnboarding);
    } else {
        initOnboarding();
    }
})();
