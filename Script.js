// script.js

// Add event listeners for mouseenter and mouseleave events on anime cards
var animeCards = document.querySelectorAll('.anime-card');
animeCards.forEach(function(card) {
  card.addEventListener('mouseenter', function() {
    var border = this.querySelector('.anime-card-border');
    border.style.transform = 'scale(1.05)';
  });
  card.addEventListener('mouseleave', function() {
    var border = this.querySelector('.anime-card-border');
    border.style.transform = 'scale(1)';
  });
});

// Add scroll event listener to change navigation bar color
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('nav');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#222';
  } else {
    navbar.style.backgroundColor = '#444';
  }
});
