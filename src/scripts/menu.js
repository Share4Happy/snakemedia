/**
 * Navigation & Mobile Menu Interactions
 */
export function initNavigation() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.menu-toggle-btn');
  const navMenu = document.querySelector('.nav-menu');
  const backdrop = document.querySelector('.nav-backdrop');
  const navLinks = document.querySelectorAll('.nav-link, .nav-cta-btn');

  if (!header || !toggleBtn || !navMenu) return;

  // Header scroll appearance
  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile menu toggle
  const toggleMenu = (open) => {
    const isOpen = open !== undefined ? open : !navMenu.classList.contains('is-open');
    navMenu.classList.toggle('is-open', isOpen);
    backdrop?.classList.toggle('is-active', isOpen);
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-locked', isOpen);
  };

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  backdrop?.addEventListener('click', () => {
    toggleMenu(false);
  });

  // Close menu when clicking navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('is-open')) {
        toggleMenu(false);
      }
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      toggleMenu(false);
      toggleBtn.focus();
    }
  });
}
