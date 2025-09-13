// Small helper to toggle theme for the landing page
window.myPet = window.myPet || {};
window.myPet.toggleTheme = function () {
    try {
        const root = document.querySelector('.lp-root');
        if (!root) return;
        const current = root.getAttribute('data-theme') || 'light';
        const next = current === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', next);
        // update toggle button icon if present
        const btn = document.getElementById('themeToggle');
        if (btn) btn.textContent = next === 'light' ? '🌙' : '☀️';
    }
    catch (e) { console.error(e); }
};
