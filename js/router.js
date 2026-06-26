/**
 * router.js — vanilla SPA router
 *
 * CONCEPT: No page reloads. We just toggle which .page div is
 * visible using CSS classes, and let @keyframes handle the animation.
 */

const navLinks = document.querySelectorAll('.nav-link');
const pages    = document.querySelectorAll('.page');

function navigateTo(pageId) {
  // 1. Hide all pages by removing .active
  pages.forEach(p => p.classList.remove('active'));

  // 2. Show the target page — adding .active triggers the CSS animation
  const target = document.getElementById('page-' + pageId);
  if (target) target.classList.add('active');

  // 3. Highlight the correct nav link
  navLinks.forEach(link => {
    link.classList.toggle('active-link', link.dataset.page === pageId);
  });
}

// Attach click handlers to every nav link
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();              // stop the browser from following href="#"
    navigateTo(link.dataset.page);
  });
});
