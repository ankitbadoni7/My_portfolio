// TYPEWRITER

document.addEventListener("DOMContentLoaded", function () {
  var webText = document.getElementById("web-text");

  var typed = new Typed(".auto-type", {
    strings: ["Developer", "Designer", "UI/UX Designer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    preStringTyped: function (arrayPos, self) {
      if (self.strings[arrayPos] === "UI/UX Designer") {
        webText.style.display = "none";
      } else {
        webText.style.display = "inline";
      }
    }
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


let hamberger = document.querySelector('.hamberger');
let cross = document.querySelector('.cross');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});

cross.addEventListener('click', function(){
    mobileNav.classList.remove('open');  
});

 document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('mobtheme');
    
    // Set initial emoji
    themeToggle.textContent = '☀️';
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        // Change emoji based on current theme
        themeToggle.textContent = document.body.classList.contains('dark-theme') ? '🌙' : '☀️';
    });
});
