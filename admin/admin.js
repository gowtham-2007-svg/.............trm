// Admin Dashboard Script with diagnostics

// Auto-redirect if running on incorrect static Live Server port
if (window.location.hostname === '127.0.0.1' && window.location.port === '5500') {
    window.location.href = 'http://localhost:3000/admin/';
}

window.onerror = function(message, source, lineno, colno, error) {
    console.error("[Admin Crash]", message, "at", source, lineno, colno);
    const errorOverlay = document.createElement('div');
    errorOverlay.style.position = 'fixed';
    errorOverlay.style.top = '0';
    errorOverlay.style.left = '0';
    errorOverlay.style.width = '100%';
    errorOverlay.style.height = '100%';
    errorOverlay.style.background = '#120202';
    errorOverlay.style.color = '#ff5555';
    errorOverlay.style.padding = '30px';
    errorOverlay.style.zIndex = '999999';
    errorOverlay.style.overflow = 'auto';
    errorOverlay.style.fontFamily = 'monospace';
    errorOverlay.style.lineHeight = '1.5';
    errorOverlay.innerHTML = `
        <h2 style="color: #ff3333; margin-bottom: 10px;">⚠️ Admin Dashboard Script Error</h2>
        <p><strong>Error message:</strong> ${message}</p>
        <p><strong>Location:</strong> ${source} (Line ${lineno}:${colno})</p>
        <hr style="border: 0; border-top: 1px solid #441111; margin: 20px 0;">
        <pre style="background: #220505; padding: 15px; border-radius: 8px; border: 1px solid #551111;">${error ? error.stack : 'No stack trace available'}</pre>
    `;
    document.body.appendChild(errorOverlay);
    return false;
};

// Global fallback timer to catch hung initialization (e.g. if Clerk fails to load or resolves/hangs)
setTimeout(() => {
    const authOverlay = document.getElementById('admin-auth-overlay');
    const deniedOverlay = document.getElementById('admin-denied-overlay');
    const dashboardLayout = document.getElementById('admin-dashboard-layout');
    const fallback = document.getElementById('admin-error-fallback');
    
    if (
        authOverlay && authOverlay.style.display === 'none' && 
        deniedOverlay && deniedOverlay.style.display === 'none' && 
        dashboardLayout && dashboardLayout.style.display === 'none' &&
        !fallback
    ) {
        console.error("Dashboard initialization timed out / hung.");
        showAdminPageError(
            "Connection Timeout / Load Issue", 
            "The Admin Dashboard is taking too long to load. This usually happens if the Clerk Authentication service is blocked by your browser extensions, ad-blockers, or a temporary network issue. Try disabling ad-blockers for this page or reloading."
        );
    }
}, 5000);

let trendChartInstance = null;
let deviceChartInstance = null;
let clerkLoadAttempts = 0;

function showAdminPageError(title, desc) {
    const errorOverlay = document.getElementById('admin-error-fallback') || document.createElement('div');
    errorOverlay.id = 'admin-error-fallback';
    errorOverlay.style.position = 'fixed';
    errorOverlay.style.top = '0';
    errorOverlay.style.left = '0';
    errorOverlay.style.width = '100%';
    errorOverlay.style.height = '100%';
    errorOverlay.style.background = '#0d0b18';
    errorOverlay.style.color = '#ff4a4a';
    errorOverlay.style.display = 'flex';
    errorOverlay.style.flexDirection = 'column';
    errorOverlay.style.alignItems = 'center';
    errorOverlay.style.justifyContent = 'center';
    errorOverlay.style.zIndex = '999999';
    errorOverlay.style.fontFamily = 'Outfit, sans-serif';
    errorOverlay.style.textAlign = 'center';
    errorOverlay.style.padding = '20px';
    errorOverlay.innerHTML = `
        <div style="background: rgba(255, 74, 74, 0.08); border: 1px solid rgba(255, 74, 74, 0.2); padding: 3rem 2rem; border-radius: 16px; max-width: 500px; box-shadow: 0 8px 32px rgba(0,0,0,0.5);">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-bottom: 1.5rem; display: block; margin-left: auto; margin-right: auto;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <h2 style="margin-bottom: 1rem; color: #fff;">${title}</h2>
            <p style="color: #9e9db2; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem;">${desc}</p>
            <button onclick="window.location.reload()" style="background: linear-gradient(135deg, #8338EC 0%, #FF007F 100%); color: white; border: none; padding: 12px 30px; border-radius: 8px; font-weight: 600; cursor: pointer; box-shadow: 0 4px 15px rgba(131,56,236,0.35);">Retry Loading</button>
        </div>
    `;
    if (!document.getElementById('admin-error-fallback')) {
        document.body.appendChild(errorOverlay);
    }
}

// Initialize Clerk
async function initAdminClerk() {
    if (!window.Clerk) {
        clerkLoadAttempts++;
        console.warn(`Waiting for Clerk JS (attempt ${clerkLoadAttempts})...`);
        if (clerkLoadAttempts > 60) { // 6 seconds
            showAdminPageError("Clerk JS Failed to Load", "The Clerk authentication system could not be loaded. Please verify your internet connection or check if your browser's ad-blocker or privacy settings are blocking connection to stirring-skylark-9.clerk.accounts.dev.");
            return;
        }
        setTimeout(initAdminClerk, 100);
        return;
    }

    // Clear fallback error if it exists
    const fallback = document.getElementById('admin-error-fallback');
    if (fallback) fallback.remove();

    try {
        await window.Clerk.load({
            appearance: {
                variables: {
                    colorPrimary: '#8338EC',
                    colorBackground: '#141226',
                    colorText: '#F5F5FA',
                    colorInputBackground: '#1D1A39',
                    colorInputText: '#F5F5FA',
                    borderRadius: '12px'
                }
            }
        });

        // Add login state listener
        window.Clerk.addListener(({ user }) => {
            checkAuth(user);
        });

        // Initial check
        checkAuth(window.Clerk.user);
    } catch (err) {
        console.error('Failed to load Clerk in admin:', err);
        showAdminPageError("Clerk Initialization Failed", `Could not initialize Clerk session: ${err.message}`);
    }
}

// Check if user is authenticated and authorized as admin
function checkAuth(user) {
    const authOverlay = document.getElementById('admin-auth-overlay');
    const deniedOverlay = document.getElementById('admin-denied-overlay');
    const dashboardLayout = document.getElementById('admin-dashboard-layout');

    if (!window.Clerk || !window.Clerk.user) {
        // User not signed in
        dashboardLayout.style.display = 'none';
        deniedOverlay.style.display = 'none';
        authOverlay.style.display = 'flex';
        
        const container = document.getElementById('admin-signin-container');
        if (container && container.innerHTML === '') {
            window.Clerk.mountSignIn(container, {
                routing: 'hash',
                afterSignInUrl: '/admin'
            });
        }
    } else {
        // User signed in - check backend permission by attempting to load data
        loadDashboardData('7days');
    }
}

// Sign out utility for the access denied page
async function signOutAndRedirect() {
    if (window.Clerk) {
        await window.Clerk.signOut();
        window.location.reload();
    }
}

// Tab Switching logic
document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Toggle Sidebar Active Class
        document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Toggle Tab Panes
        const tabName = link.getAttribute('data-tab');
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
        document.getElementById(`tab-users`).classList.remove('active');
        document.getElementById(`tab-analytics`).classList.remove('active');
        
        const activePane = document.getElementById(`tab-${tabName}`);
        if (activePane) {
            activePane.classList.add('active');
        }
        
        // Load appropriate tab data
        if (tabName === 'users') {
            loadUsersData();
        } else if (tabName === 'analytics') {
            const activeFilter = document.querySelector('.filter-btn.active');
            loadDashboardData(activeFilter ? activeFilter.getAttribute('data-range') : '7days');
        }
    });
});

// Load Analytics Summary
async function loadDashboardData(range) {
    if (!window.Clerk || !window.Clerk.user) return;

    const authOverlay = document.getElementById('admin-auth-overlay');
    const deniedOverlay = document.getElementById('admin-denied-overlay');
    const dashboardLayout = document.getElementById('admin-dashboard-layout');

    try {
        const response = await fetch(`/api/admin/analytics?range=${range}`, {
            method: 'GET',
            headers: {
                'x-clerk-session-id': (window.Clerk && window.Clerk.session) ? window.Clerk.session.id : '',
                'x-clerk-user-id': (window.Clerk && window.Clerk.user) ? window.Clerk.user.id : ''
            }
        });

        if (!response.ok) {
            if (response.status === 403) {
                // Access Denied: Hide other layouts, show Denied Overlay
                if (authOverlay) authOverlay.style.display = 'none';
                if (dashboardLayout) dashboardLayout.style.display = 'none';
                
                if (deniedOverlay) {
                    const errorText = deniedOverlay.querySelector('p');
                    if (errorText) {
                        const email = window.Clerk.user.primaryEmailAddress ? window.Clerk.user.primaryEmailAddress.emailAddress : '';
                        errorText.innerHTML = `Your account (<strong>${escapeHtml(email)}</strong>) does not have administrator permissions to view this dashboard.`;
                    }
                    deniedOverlay.style.display = 'flex';
                }
                return;
            }
            let errorDetail = `HTTP error! status: ${response.status}`;
            try {
                const errJson = await response.json();
                if (errJson && errJson.error) errorDetail = errJson.error;
            } catch (e) {}
            throw new Error(errorDetail);
        }

        const data = await response.json();

        // Authorized: Hide overlays and show dashboard layout
        if (authOverlay) authOverlay.style.display = 'none';
        if (deniedOverlay) deniedOverlay.style.display = 'none';
        if (dashboardLayout) dashboardLayout.style.display = 'block';

        // Mount user button if not already mounted
        const userBtn = document.getElementById('admin-user-btn');
        if (userBtn && userBtn.innerHTML === '') {
            window.Clerk.mountUserButton(userBtn, {
                afterSignOutUrl: '/'
            });
        }

        renderAnalytics(data);
    } catch (err) {
        console.error('[Fetch Analytics Failure]', err);
        let errorMsg = `Failed to load analytics: ${err.message}.`;
        if (window.location.port === '5500') {
            errorMsg += `<br><br><strong>Why is this happening?</strong><br>You are accessing this page via the VS Code Live Server on port 5500 (http://127.0.0.1:5500), but the backend Node.js API server runs on port 3000.<br><br><strong>To resolve:</strong><br>Please access the website through the Node.js server at <a href="http://localhost:3000/admin/" style="color: #00F0FF; text-decoration: underline; font-weight: 600;">http://localhost:3000/admin/</a> instead.`;
        } else {
            errorMsg += `<br><br><strong>Why is this happening?</strong><br>The backend server could not be reached, or there is a database connection issue. Check your terminal for Node.js errors, or ensure Vercel has the correct environment variables setup.`;
        }
        showAdminPageError("Backend Connection Error", errorMsg);
    }
}

let liveActiveUsersInterval = null;

function startLiveActiveUsersPolling() {
    if (liveActiveUsersInterval) clearInterval(liveActiveUsersInterval);
    
    liveActiveUsersInterval = setInterval(async () => {
        const tabAnalytics = document.getElementById('tab-analytics');
        if (!tabAnalytics || !tabAnalytics.classList.contains('active')) return;
        if (!window.Clerk || !window.Clerk.user) return;

        try {
            const response = await fetch('/api/admin/live-active-users', {
                method: 'GET',
                headers: {
                    'x-clerk-session-id': (window.Clerk && window.Clerk.session) ? window.Clerk.session.id : '',
                    'x-clerk-user-id': (window.Clerk && window.Clerk.user) ? window.Clerk.user.id : ''
                }
            });

            if (response.ok) {
                const liveData = await response.json();
                const count = liveData.active_users !== undefined ? liveData.active_users : 1;
                const activeEl = document.getElementById('stat-active-users');
                if (activeEl) {
                    const currentVal = parseInt(activeEl.textContent, 10);
                    if (currentVal !== count) {
                        activeEl.textContent = count;
                    }
                }
            }
        } catch (pollErr) {
            // Silently ignore background polling errors
        }
    }, 4000);
}

// Render values and charts inside Analytics Tab
function renderAnalytics(data) {
    // Fill Cards
    document.getElementById('stat-total-users').textContent = data.clerk_total_users || 0;
    document.getElementById('stat-daily-visitors').textContent = data.daily_visitors || 0;
    document.getElementById('stat-total-visits').textContent = data.total_visits || 0;
    document.getElementById('stat-active-users').textContent = data.active_users !== undefined ? data.active_users : 1;

    // Start Real-Time Live Active Users Polling
    startLiveActiveUsersPolling();

    // Time Formatting
    const avgSec = data.average_time_spent || 0;
    let timeStr = `${avgSec}s`;
    if (avgSec >= 60) {
        const mins = Math.floor(avgSec / 60);
        const secs = Math.round(avgSec % 60);
        timeStr = `${mins}m ${secs}s`;
    }
    document.getElementById('stat-avg-duration').textContent = timeStr;

    // Popular Pages Table
    const pagesTbody = document.querySelector('#table-popular-pages tbody');
    pagesTbody.innerHTML = '';
    
    const pages = data.most_visited_pages || [];
    if (pages.length === 0) {
        pagesTbody.innerHTML = `<tr><td colspan="3" style="text-align: center; color: var(--text-muted);">No page views logged in this range</td></tr>`;
    } else {
        pages.forEach(p => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><code>${escapeHtml(p.path)}</code></td>
                <td><strong>${p.views}</strong></td>
                <td>${p.unique_visitors}</td>
            `;
            pagesTbody.appendChild(tr);
        });
    }

    // Trend Chart (Line Chart)
    const trendCtx = document.getElementById('trendChart').getContext('2d');
    const trendLabels = data.trends ? data.trends.labels : [];
    const trendVisits = data.trends ? data.trends.visits : [];
    const trendVisitors = data.trends ? data.trends.visitors : [];

    if (trendChartInstance) {
        trendChartInstance.destroy();
    }

    trendChartInstance = new Chart(trendCtx, {
        type: 'line',
        data: {
            labels: trendLabels,
            datasets: [
                {
                    label: 'Page Views (Visits)',
                    data: trendVisits,
                    borderColor: '#8338EC',
                    backgroundColor: 'rgba(131, 56, 236, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.3
                },
                {
                    label: 'Unique Visitors',
                    data: trendVisitors,
                    borderColor: '#00F0FF',
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    tension: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: { color: '#F5F5FA', font: { family: 'Outfit' } }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#9E9DB2', font: { family: 'Outfit' } }
                },
                y: {
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#9E9DB2', font: { family: 'Outfit' } }
                }
            }
        }
    });

    // Device Chart (Pie Chart)
    const deviceCtx = document.getElementById('deviceChart').getContext('2d');
    const devices = data.device_types || [];
    const deviceLabels = devices.map(d => d.device);
    const deviceCounts = devices.map(d => d.count);

    if (deviceChartInstance) {
        deviceChartInstance.destroy();
    }

    deviceChartInstance = new Chart(deviceCtx, {
        type: 'doughnut',
        data: {
            labels: deviceLabels.length > 0 ? deviceLabels : ['No Data'],
            datasets: [{
                data: deviceCounts.length > 0 ? deviceCounts : [1],
                backgroundColor: ['#8338EC', '#FF007F', '#00F0FF', '#00FF88', 'rgba(255, 255, 255, 0.1)'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: '#F5F5FA', font: { family: 'Outfit' } }
                }
            }
        }
    });
}

// Load Users accounts list
async function loadUsersData() {
    if (!window.Clerk || !window.Clerk.user) return;

    try {
        const response = await fetch('/api/admin/users', {
            method: 'GET',
            headers: {
                'x-clerk-session-id': (window.Clerk && window.Clerk.session) ? window.Clerk.session.id : '',
                'x-clerk-user-id': (window.Clerk && window.Clerk.user) ? window.Clerk.user.id : ''
            }
        });

        if (!response.ok) throw new Error('Failed to load users');

        const users = await response.json();
        const tbody = document.querySelector('#table-users tbody');
        tbody.innerHTML = '';

        if (users.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted);">No users registered in Clerk</td></tr>`;
            return;
        }

        users.forEach(u => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${escapeHtml(u.name)}</strong></td>
                <td><a href="mailto:${escapeHtml(u.email)}" style="color: var(--accent); text-decoration: none;">${escapeHtml(u.email)}</a></td>
                <td>${formatDate(u.createdAt)}</td>
                <td>${u.lastSignInAt ? formatDate(u.lastSignInAt) : 'Never'}</td>
                <td><code>${escapeHtml(u.id)}</code></td>
            `;
            tbody.appendChild(tr);
        });
    } catch (err) {
        console.error('[Fetch Users Failure]', err);
        let errorMsg = `Failed to load user data: ${err.message}.`;
        if (window.location.port === '5500') {
            errorMsg += `<br><br><strong>Why is this happening?</strong><br>You are accessing this page via the VS Code Live Server on port 5500 (http://127.0.0.1:5500), but the backend Node.js API server runs on port 3000.<br><br><strong>To resolve:</strong><br>Please access the website through the Node.js server at <a href="http://localhost:3000/admin/" style="color: #00F0FF; text-decoration: underline; font-weight: 600;">http://localhost:3000/admin/</a> instead.`;
        } else {
            errorMsg += `<br><br><strong>Why is this happening?</strong><br>The backend server could not be reached, or there is a database connection issue.`;
        }
        showAdminPageError("Backend Connection Error", errorMsg);
    }
}

// Date filters buttons click handlers
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const range = btn.getAttribute('data-range');
        loadDashboardData(range);
    });
});

// Helper formatting utilities
function formatDate(timestamp) {
    if (!timestamp) return 'N/A';
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Start Initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAdminClerk);
} else {
    initAdminClerk();
}
