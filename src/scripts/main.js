import '../styles/tokens.css';
import '../styles/base.css';
import '../styles/components.css';
import '../styles/sections/header.css';
import '../styles/sections/hero.css';
import '../styles/sections/about.css';
import '../styles/sections/challenges.css';
import '../styles/sections/solutions.css';
import '../styles/sections/services.css';
import '../styles/sections/portfolio.css';
import '../styles/sections/planning.css';
import '../styles/sections/pricing.css';
import '../styles/sections/deliverables.css';
import '../styles/sections/why-us.css';
import '../styles/sections/workflow.css';
import '../styles/sections/team.css';
import '../styles/sections/faq.css';
import '../styles/sections/posts.css';
import '../styles/sections/contact.css';
import '../styles/sections/footer.css';

import { initNavigation } from './menu.js';
import { initRegisteredImages } from './images.js';
import { initPostsCarousel } from './posts.js';
import { initContactForm } from './form.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navigation & mobile menu
  initNavigation();

  // 2. Initialize registered images or placeholders
  initRegisteredImages();

  // 3. Dynamic WordPress Posts Carousel
  initPostsCarousel();

  // 4. Contact Form Handling
  initContactForm();
});
