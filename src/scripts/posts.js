import { CONFIG } from './config.js';

/**
 * Danh sách bài viết dự phòng (Fallback & Initial dataset)
 * Khớp chính xác với thiết kế mockup trong ảnh đính kèm của người dùng.
 */
const DEFAULT_POSTS = [
  {
    id: 'mock-1',
    title: 'Bắt đầu một kế hoạch nội dung từ đâu?',
    excerpt: 'Từ mục tiêu thương hiệu đến lịch đăng thực tế: vài bước đơn giản để biến ý tưởng rời rạc thành kế hoạch dễ triển khai.',
    imageUrl: '/src/assets/images/post-1.jpg',
    url: 'https://share4happy.com'
  },
  {
    id: 'mock-2',
    title: 'Kể chuyện thương hiệu bằng video ngắn',
    excerpt: 'Một video hiệu quả không chỉ đẹp mắt mà còn cần thông điệp rõ ràng, nhịp dựng phù hợp và lời kêu gọi hành động tự nhiên.',
    imageUrl: '/src/assets/images/post-2.jpg',
    url: 'https://share4happy.com'
  },
  {
    id: 'mock-3',
    title: 'Giữ hình ảnh nhất quán trên mạng xã hội',
    excerpt: 'Màu sắc, bố cục và giọng nói thương hiệu cùng tạo nên dấu ấn giúp người xem nhận ra bạn qua từng bài đăng.',
    imageUrl: '/src/assets/images/post-3.jpg',
    url: 'https://share4happy.com'
  },
  {
    id: 'mock-4',
    title: 'Biến ý tưởng thành nội dung nhất quán',
    excerpt: 'Một quy trình rõ ràng giúp thương hiệu duy trì nhịp sáng tạo và phối hợp hiệu quả qua từng nội dung.',
    imageUrl: '/src/assets/images/post-4.jpg',
    url: 'https://share4happy.com'
  },
  {
    id: 'mock-5',
    title: 'Tối ưu hóa chi phí sản xuất media cho doanh nghiệp nhỏ',
    excerpt: 'Cách cân đối ngân sách, lựa chọn hạng mục ưu tiên và đo lường hiệu quả chuyển đổi từ các ấn phẩm truyền thông thực chiến.',
    imageUrl: '/src/assets/images/post-5.jpg',
    url: 'https://share4happy.com'
  },
  {
    id: 'mock-6',
    title: 'Xây dựng bộ nhận diện số đa nền tảng cho thương hiệu',
    excerpt: 'Định hình phong cách thị giác độc bản từ màu sắc, kiểu chữ đến bố cục ấn phẩm truyền thông trên TikTok, Facebook và Reels.',
    imageUrl: '/src/assets/images/post-1.jpg',
    url: 'https://share4happy.com'
  }
];

const PAGE_SIZE = 4;
let allPosts = [...DEFAULT_POSTS];
let currentPage = 0;
let isTransitioning = false;

/**
 * Làm sạch chuỗi HTML an toàn
 * @param {string} rawHtml 
 * @returns {string} Chuỗi văn bản thuần
 */
function sanitizeText(rawHtml) {
  if (!rawHtml) return '';
  const parser = new DOMParser();
  const doc = parser.parseFromString(rawHtml, 'text/html');
  return doc.body.textContent || '';
}

/**
 * Tạo một thẻ bài viết (post-card)
 * @param {Object} post 
 * @returns {HTMLElement}
 */
function createCardElement(post) {
  const article = document.createElement('article');
  article.className = 'post-card';
  article.setAttribute('role', 'listitem');

  const link = document.createElement('a');
  link.href = post.url || 'https://share4happy.com';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.className = 'post-card-inner';

  const mediaWrap = document.createElement('div');
  mediaWrap.className = 'post-card-media';

  const img = document.createElement('img');
  img.src = post.imageUrl || '/src/assets/images/post-1.jpg';
  img.alt = post.title;
  img.className = 'post-card-img';
  img.loading = 'lazy';
  mediaWrap.appendChild(img);

  const content = document.createElement('div');
  content.className = 'post-card-content';

  const title = document.createElement('h3');
  title.className = 'post-card-title';
  title.textContent = post.title;

  const desc = document.createElement('p');
  desc.className = 'post-card-desc';
  desc.textContent = post.excerpt;

  content.appendChild(title);
  content.appendChild(desc);

  link.appendChild(mediaWrap);
  link.appendChild(content);
  article.appendChild(link);

  return article;
}

/**
 * Hiển thị trang bài viết hiện tại
 * @param {number} pageIndex 
 */
function renderPage(pageIndex) {
  const grid = document.getElementById('posts-grid');
  const prevBtn = document.getElementById('posts-nav-prev');
  const nextBtn = document.getElementById('posts-nav-next');
  const indicator = document.getElementById('posts-page-indicator');
  const dotsContainer = document.getElementById('posts-dots');
  const navControls = document.getElementById('posts-nav-controls');
  const paginationWrap = document.getElementById('posts-pagination-wrap');

  if (!grid) return;

  const totalPages = Math.ceil(allPosts.length / PAGE_SIZE);

  // Giới hạn index an toàn
  if (pageIndex < 0) pageIndex = 0;
  if (pageIndex >= totalPages) pageIndex = totalPages - 1;
  currentPage = pageIndex;

  // Hiển thị/ẩn phân trang dựa trên số bài viết > 4
  const hasPagination = allPosts.length > PAGE_SIZE;
  if (navControls) {
    navControls.classList.toggle('is-visible', hasPagination);
  }
  if (paginationWrap) {
    paginationWrap.classList.toggle('is-visible', hasPagination);
  }

  // Cập nhật text trạng thái trang
  if (indicator) {
    indicator.textContent = `Trang ${currentPage + 1} / ${totalPages}`;
  }

  // Cập nhật nút Prev/Next
  if (prevBtn) {
    prevBtn.disabled = currentPage === 0;
  }
  if (nextBtn) {
    nextBtn.disabled = currentPage === totalPages - 1;
  }

  // Cập nhật các nút số trang / dots ở dưới
  if (dotsContainer && hasPagination) {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalPages; i++) {
      const dotBtn = document.createElement('button');
      dotBtn.type = 'button';
      dotBtn.className = `posts-dot-btn ${i === currentPage ? 'is-active' : ''}`;
      dotBtn.textContent = String(i + 1);
      dotBtn.setAttribute('aria-label', `Đến trang ${i + 1}`);
      dotBtn.setAttribute('aria-selected', String(i === currentPage));
      dotBtn.addEventListener('click', () => {
        if (!isTransitioning && i !== currentPage) {
          switchPage(i);
        }
      });
      dotsContainer.appendChild(dotBtn);
    }
  }

  // Lấy 4 bài viết của trang hiện tại
  const startIdx = currentPage * PAGE_SIZE;
  const currentSlice = allPosts.slice(startIdx, startIdx + PAGE_SIZE);

  grid.innerHTML = '';
  currentSlice.forEach(post => {
    grid.appendChild(createCardElement(post));
  });
}

/**
 * Chuyển trang có hiệu ứng mượt mà (smooth fade)
 * @param {number} newPageIndex 
 */
function switchPage(newPageIndex) {
  const grid = document.getElementById('posts-grid');
  if (!grid || isTransitioning) return;

  isTransitioning = true;
  grid.classList.add('is-transitioning');

  setTimeout(() => {
    renderPage(newPageIndex);
    grid.classList.remove('is-transitioning');
    isTransitioning = false;
  }, 200);
}

/**
 * Khởi tạo Section Bài viết & Tin tức
 */
export async function initPostsSection() {
  const prevBtn = document.getElementById('posts-nav-prev');
  const nextBtn = document.getElementById('posts-nav-next');
  const section = document.getElementById('posts');

  // Gắn sự kiện nút Prev / Next
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentPage > 0) switchPage(currentPage - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const totalPages = Math.ceil(allPosts.length / PAGE_SIZE);
      if (currentPage < totalPages - 1) switchPage(currentPage + 1);
    });
  }

  // Hỗ trợ phím mũi tên bàn phím khi focus vào section
  if (section) {
    section.addEventListener('keydown', (e) => {
      const totalPages = Math.ceil(allPosts.length / PAGE_SIZE);
      if (e.key === 'ArrowRight' && currentPage < totalPages - 1) {
        switchPage(currentPage + 1);
      } else if (e.key === 'ArrowLeft' && currentPage > 0) {
        switchPage(currentPage - 1);
      }
    });
  }

  // Render trang đầu tiên ngay lập tức
  renderPage(0);

  // Cố gắng tải dữ liệu động từ WordPress REST API
  try {
    const url = `${CONFIG.wpApi.endpoint}?categories=${CONFIG.wpApi.categoryId}&per_page=12&_embed`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), CONFIG.wpApi.requestTimeoutMs);

    const response = await fetch(url, {
      signal: controller.signal,
      headers: { 'Accept': 'application/json' }
    });
    clearTimeout(timeoutId);

    if (response.ok) {
      const rawData = await response.json();
      if (Array.isArray(rawData) && rawData.length > 0) {
        // Chuẩn hóa bài viết từ WordPress
        const wpPosts = rawData.map((post, idx) => {
          const title = sanitizeText(post.title?.rendered || 'Bài viết SnakeMedia');
          let excerpt = sanitizeText(post.excerpt?.rendered || '');
          if (excerpt.length > 120) {
            excerpt = excerpt.substring(0, 120).trim() + '...';
          }
          if (!excerpt) {
            excerpt = 'Khám phá bài viết truyền thông và sáng tạo nội dung mới nhất từ đội ngũ sinh viên SnakeMedia.';
          }

          let imageUrl = '';
          if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
            const media = post._embedded['wp:featuredmedia'][0];
            imageUrl = media.source_url || media.media_details?.sizes?.medium_large?.source_url || '';
          }
          // Nếu không có ảnh, dùng luân phiên các ảnh mockup đã tạo
          if (!imageUrl) {
            const fallbackImgs = ['/src/assets/images/post-1.jpg', '/src/assets/images/post-2.jpg', '/src/assets/images/post-3.jpg', '/src/assets/images/post-4.jpg'];
            imageUrl = fallbackImgs[idx % fallbackImgs.length];
          }

          return {
            id: post.id,
            title,
            excerpt,
            url: post.link,
            imageUrl
          };
        });

        // Gán danh sách bài viết từ WordPress
        allPosts = wpPosts;
        renderPage(0);
      }
    }
  } catch (err) {
    console.info('[SnakeMedia Posts] WordPress fetch skipped or fallback active:', err.message);
    // Giữ nguyên default mockup posts (đã hiển thị đẹp mắt)
  }
}

// Export alias để tương thích với main.js
export const initPostsCarousel = initPostsSection;

