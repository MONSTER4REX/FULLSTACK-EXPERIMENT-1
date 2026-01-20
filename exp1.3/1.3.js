function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        updateThemeButton();
    }
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    
    const isLightMode = document.body.classList.contains('light-mode');
    
    if (isLightMode) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
    
    updateThemeButton();
}

function updateThemeButton() {
    const button = document.querySelector('.theme-toggle');
    const isLightMode = document.body.classList.contains('light-mode');
    
    if (isLightMode) {
        button.innerHTML = '<span class="theme-icon">🌙</span> Dark Mode';
    } else {
        button.innerHTML = '<span class="theme-icon">☀️</span> Light Mode';
    }
}

window.addEventListener('DOMContentLoaded', initializeTheme);
