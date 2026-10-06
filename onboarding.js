/**
 * Weekend Explore — First-Visit Onboarding Experience
 * Premium, minimal, travel-focused, zero emojis.
 */

(function () {
    'use strict';

    const STORAGE_KEY = 'weekend_explorer_onboarding_completed';
    const ANSWERS_STORAGE_KEY = 'weekend_explorer_onboarding_answers';

    // Global helper for resetting and testing onboarding
    window.resetWeekendOnboarding = function () {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(ANSWERS_STORAGE_KEY);
        sessionStorage.removeItem('welcomed');
        window.location.reload();
    };

    // Check for ?reset or #reset in URL to allow easy testing
    if (window.location.search.includes('reset') || window.location.hash.includes('reset')) {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(ANSWERS_STORAGE_KEY);
        sessionStorage.removeItem('welcomed');
    }

    // Check if returning user
    const isCompleted = localStorage.getItem(STORAGE_KEY) === 'true';
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
    function renderCompletionStage(container) {
        container.innerHTML = `
            <div class="we-completion-stage" id="we-completion-stage">
                <div class="we-completion-line-1">You're all set.</div>
                <div class="we-completion-line-2">Let's explore your weekend.</div>
            </div>
        `;

        // Save completion and user answers to localStorage
        try {
            localStorage.setItem(STORAGE_KEY, 'true');
            localStorage.setItem(ANSWERS_STORAGE_KEY, JSON.stringify(userSurveyAnswers));
        } catch (e) {
            console.warn('LocalStorage not accessible:', e);
        }

        // Give user time to read the completion message (~2.2s), then fade out into Home page
        setTimeout(() => {
            finishOnboarding();
        }, 2200);
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
