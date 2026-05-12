// ===========================
// FreshMart Grocery - script.js
// Smart Inventory Management
// ===========================

/**
 * Sets the clicked nav link as active and removes active from others.
 * @param {HTMLElement} el - The anchor element that was clicked.
 */
function setActive(el) {
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  el.classList.add('active');
}

/**
 * Highlights the correct nav link based on scroll position.
 * Runs on every scroll event.
 */
function highlightNavOnScroll() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  let current = '';

  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 80) {
      current = sec.id;
    }
  });

  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) {
      a.classList.add('active');
    }
  });
}

// Attach scroll listener
window.addEventListener('scroll', highlightNavOnScroll);

// Run once on load to highlight the correct link
document.addEventListener('DOMContentLoaded', () => {
  highlightNavOnScroll();
});
