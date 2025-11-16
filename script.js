// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    if (link.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// "Get Started" button scrolls to Marketing section
const getStarted = document.getElementById('getStarted');
if (getStarted) {
  getStarted.addEventListener('click', () => {
    const marketingSection = document.getElementById('marketing');
    if (marketingSection) {
      marketingSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Fade-in animation for house cards
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

// Observe all house cards
document.querySelectorAll('.house-card').forEach(card => {
  observer.observe(card);
});

// Optional: Popup for "Learn More" buttons
document.querySelectorAll('.learn-more').forEach(button => {
  button.addEventListener('click', () => {
    alert("More information about this Smart House coming soon!");
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    if (link.getAttribute('href').startsWith('.')) {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
//Mode//
document.getElementById('theme').addEventListener('click', function() {
  document.body.classList.toggle('dark');
  // Optional: Update button text
  this.textContent = document.body.classList.contains('dark') ? ' Light Mode' : ' Dark Mode';
});