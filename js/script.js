// TYPEWRITER

document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".auto-type", {
      strings: ["Developer", "Designer", "UI/UX Desginer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
  });
  

  // DARK THEME
  document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Set initial emoji
    themeToggle.textContent = '☀️';
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        // Change emoji based on current theme
        themeToggle.textContent = document.body.classList.contains('dark-theme') ? '🌙' : '☀️';
    });
});