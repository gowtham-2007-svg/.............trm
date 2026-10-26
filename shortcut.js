/**
 * Weekend Explore - Global Keyboard Shortcut Handler
 * Shortcut: Ctrl + K (Windows / Linux) or Cmd + K (macOS) -> Navigate directly to Home Page ('/')
 */
(function () {
    'use strict';

    if (window.__weekendExploreHomeShortcutAttached) {
        return;
    }
    window.__weekendExploreHomeShortcutAttached = true;

    let lastTriggerTime = 0;

    /**
     * Determines whether an event target is an active editable/typing context
     * (e.g., input, textarea, contenteditable, select, or shadow DOM form controls).
     */
    function isTypingContext(e) {
        try {
            const activeEl = document.activeElement;
            const target = (e && e.composedPath && e.composedPath()[0]) || (e && e.target) || activeEl;

            const isElementEditable = (el) => {
                if (!el || !(el instanceof Element)) return false;
                if (el.isContentEditable) return true;

                const tag = (el.tagName || '').toUpperCase();
                if (tag === 'TEXTAREA' || tag === 'SELECT') return true;
                if (tag === 'INPUT') {
                    const type = (el.type || 'text').toLowerCase();
                    const nonTypingTypes = ['checkbox', 'radio', 'button', 'submit', 'reset', 'range', 'color', 'file', 'image'];
                    if (!nonTypingTypes.includes(type)) return true;
                }
                if (typeof el.closest === 'function') {
                    if (el.closest('[contenteditable="true"], [contenteditable=""], [contenteditable="plaintext-only"]')) {
                        return true;
                    }
                }
                return false;
            };

            if (isElementEditable(target)) return true;
            if (isElementEditable(activeEl)) return true;

            if (e && e.composedPath) {
                const path = e.composedPath();
                for (let i = 0; i < path.length; i++) {
                    if (isElementEditable(path[i])) return true;
                }
            }
        } catch (err) {
            console.warn('[Shortcut] Context check error:', err);
        }
        return false;
    }

    /**
     * Shows a brief, vibrant notification confirming navigation via shortcut.
     */
    function showHomeShortcutToast(message) {
        try {
            let toast = document.getElementById('we-shortcut-toast');
            if (!toast) {
                toast = document.createElement('div');
                toast.id = 'we-shortcut-toast';
                toast.style.cssText = `
                    position: fixed;
                    top: 24px;
                    left: 50%;
                    transform: translateX(-50%) translateY(-20px);
                    background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%);
                    color: #ffffff;
                    border: 1px solid rgba(131, 56, 236, 0.6);
                    padding: 10px 20px;
                    border-radius: 9999px;
                    font-size: 14px;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    z-index: 99999999;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(131, 56, 236, 0.45);
                    pointer-events: none;
                    opacity: 0;
                    transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
                    font-family: 'Outfit', system-ui, -apple-system, sans-serif;
                `;
                document.body.appendChild(toast);
            }

            const isMac = (navigator.platform || '').toUpperCase().indexOf('MAC') >= 0;
            const shortcutLabel = isMac ? '⌘K' : 'Ctrl+K';
            const text = message || 'Navigated to Home';

            toast.innerHTML = `
                <span style="font-size: 18px; display: inline-flex; align-items: center;">🏠</span>
                <span style="letter-spacing: -0.2px;">${text}</span>
                <span style="background: rgba(131, 56, 236, 0.35); border: 1px solid rgba(131, 56, 236, 0.6); border-radius: 6px; padding: 2px 8px; font-size: 11px; font-weight: 700; letter-spacing: 0.5px; color: #e9d5ff;">${shortcutLabel}</span>
            `;

            requestAnimationFrame(() => {
                toast.style.opacity = '1';
                toast.style.transform = 'translateX(-50%) translateY(0)';
            });

            clearTimeout(toast._hideTimer);
            toast._hideTimer = setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateX(-50%) translateY(-20px)';
            }, 1600);
        } catch (e) {
            // Silently ignore UI decoration errors
        }
    }

    /**
     * Cleans up any open overlays, modals, speech, or drawers.
     */
    function cleanupModalsAndOverlays() {
        try {
            const drawer = document.getElementById('drawer');
            const drawerOverlay = document.querySelector('.drawer-overlay');
            if (drawer) drawer.classList.remove('active');
            if (drawerOverlay) drawerOverlay.classList.remove('active');
            document.body.style.overflow = '';

            document.querySelectorAll('.menu-modal-overlay').forEach(modal => {
                modal.classList.remove('active');
                setTimeout(() => modal.remove(), 250);
            });

            const underDevModal = document.getElementById('under-dev-modal');
            if (underDevModal) underDevModal.remove();

            if (window.WeekendReviews && typeof window.WeekendReviews.closeReviewsModal === 'function') {
                window.WeekendReviews.closeReviewsModal();
            } else {
                const revOverlay = document.getElementById('website-reviews-modal-overlay');
                if (revOverlay) {
                    revOverlay.classList.remove('active');
                    setTimeout(() => revOverlay.remove(), 250);
                }
            }

            if (window.WeekendAI) {
                if (typeof window.WeekendAI.close === 'function') window.WeekendAI.close();
                if (typeof window.WeekendAI.hide === 'function') window.WeekendAI.hide();
            }

            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        } catch (err) {
            console.warn('[Shortcut] Cleanup error:', err);
        }
    }

    /**
     * Executes direct navigation to the home page ('/').
     */
    function navigateToHome() {
        const path = window.location.pathname || '';
        const isMainApp = path === '/' || path === '' || path === '/index.html' || path.endsWith('/index.html');

        console.log('[Shortcut] Ctrl+K triggered -> navigating to Home');

        if (isMainApp) {
            const isDestinationOpen = Boolean(window.currentCityId || document.querySelector('.dest-header') || document.getElementById('back-home'));
            const isModalOpen = Boolean(
                document.querySelector('.menu-modal-overlay.active') ||
                document.getElementById('website-reviews-modal-overlay') ||
                document.getElementById('under-dev-modal') ||
                document.querySelector('.drawer-overlay.active')
            );
            const isScrolled = window.scrollY > 80;

            cleanupModalsAndOverlays();

            if (isDestinationOpen && typeof window.renderHome === 'function') {
                window.renderHome();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                showHomeShortcutToast('Navigated to Home');
            } else if (isModalOpen || isScrolled) {
                if (typeof window.renderHome === 'function') {
                    window.renderHome();
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
                showHomeShortcutToast('Returned to Top');
            } else {
                // Already at top of home: provide visual feedback and fresh reload
                showHomeShortcutToast('Home Page');
                window.location.href = '/';
            }

            if (window.location.pathname !== '/' || window.location.search || window.location.hash) {
                try {
                    window.history.pushState(null, '', '/');
                } catch (e) {}
            }
        } else {
            // Direct navigation to home root
            window.location.href = '/';
        }
    }

    /**
     * Global keydown handler.
     */
    function handleKeyDown(e) {
        // Support Windows/Linux (Ctrl) and Mac (Cmd/Meta), ignore if Alt is pressed
        const isModifier = (e.ctrlKey || e.metaKey) && !e.altKey;
        if (!isModifier) return;

        const key = (e.key || '').toLowerCase();
        const code = e.code;
        const keyCode = e.keyCode || e.which;
        const isK = key === 'k' || code === 'KeyK' || keyCode === 75;

        if (!isK) return;

        // Prevent repeated triggers when key is held down
        if (e.repeat) {
            e.preventDefault();
            return;
        }

        // Avoid triggering while users type in input fields, textareas, or contenteditables
        if (isTypingContext(e)) {
            return;
        }

        const now = Date.now();
        if (now - lastTriggerTime < 300) {
            e.preventDefault();
            return;
        }
        lastTriggerTime = now;

        // Prevent browser's default behavior (e.g. focus address bar/search)
        e.preventDefault();
        e.stopPropagation();

        // Perform navigation
        navigateToHome();
    }

    // Attach to both window and document to ensure capturing under all focus states
    window.addEventListener('keydown', handleKeyDown, true);
    document.addEventListener('keydown', handleKeyDown, true);

    // Export helper for programmatic triggers or testing
    window.navigateToHome = navigateToHome;
})();
