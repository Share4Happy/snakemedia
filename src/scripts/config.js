/**
 * Central Configuration for SnakeMedia Landing Page
 * Reads environment variables when available or falls back to production defaults.
 */
export const CONFIG = {
  // Site Metadata
  siteName: 'SnakeMedia',
  siteUrl: import.meta.env?.VITE_SITE_URL || 'https://username.github.io/snakemedia',

  // WordPress REST API (Chuyên mục 208)
  wpApi: {
    endpoint: import.meta.env?.VITE_WP_API_URL || 'https://share4happy.com/wp-json/wp/v2/posts',
    categoryId: Number(import.meta.env?.VITE_WP_CATEGORY_ID || 208),
    perPage: Number(import.meta.env?.VITE_WP_POSTS_PER_PAGE || 5),
    requestTimeoutMs: 10000
  },

  // Carousel Animation Settings
  carousel: {
    // Thời gian cho 1 vòng trôi marquee (giây)
    durationSeconds: 45,
    // Số thẻ hiển thị tối thiểu trên track để lặp mượt
    cloneMultiplier: 3
  },

  // Contact / Lead Form Endpoint
  form: {
    endpoint: import.meta.env?.VITE_FORM_ENDPOINT || ''
  }
};
