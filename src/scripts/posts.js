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
    imageUrl: '/src/assets/images/posts/post-1.jpg',
    url: 'https://share4happy.com'
  },
  {
    id: 'mock-2',
    title: 'Kể chuyện thương hiệu bằng video ngắn',
    excerpt: 'Một video hiệu quả không chỉ đẹp mắt mà còn cần thông điệp rõ ràng, nhịp dựng phù hợp và lời kêu gọi hành động tự nhiên.',
    imageUrl: '/src/assets/images/posts/post-2.jpg',
    url: 'https://share4happy.com'
  },
  {
    id: 'mock-3',
    title: 'Giữ hình ảnh nhất quán trên mạng xã hội',
    excerpt: 'Màu sắc, bố cục và giọng nói thương hiệu cùng tạo nên dấu ấn giúp người xem nhận ra bạn qua từng bài đăng.',
    imageUrl: '/src/assets/images/posts/post-3.jpg',
    url: 'https://share4happy.com'
  },
  {
    id: 'mock-4',
    title: 'Biến ý tưởng thành nội dung nhất quán',
    excerpt: 'Một quy trình rõ ràng giúp thương hiệu duy trì nhịp sáng tạo và phối hợp hiệu quả qua từng nội dung.',
    imageUrl: '/src/assets/images/posts/post-4.jpg',
    url: 'https://share4happy.com'
  },
  {
    id: 'mock-5',
    title: 'Tối ưu hóa chi phí sản xuất media cho doanh nghiệp nhỏ',
    excerpt: 'Cách cân đối ngân sách, lựa chọn hạng mục ưu tiên và đo lường hiệu quả chuyển đổi từ các ấn phẩm truyền thông thực chiến.',
    imageUrl: '/src/assets/images/posts/post-5.jpg',
    url: 'https://share4happy.com'
  },
  {
    id: 'mock-6',
    title: 'Xây dựng bộ nhận diện số đa nền tảng cho thương hiệu',
    excerpt: 'Định hình phong cách thị giác độc bản từ màu sắc, kiểu chữ đến bố cục ấn phẩm truyền thông trên TikTok, Facebook và Reels.',
    imageUrl: '/src/assets/images/posts/post-1.jpg',
    url: 'https://share4happy.com'
  }
];

const PAGE_SIZE = 4;
let allPosts = []; // Bắt đầu với mảng rỗng, chờ load từ API
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
  img.src = post.imageUrl || '/src/assets/images/posts/post-1.jpg';
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
 * Hiển thị UI "Chưa có bài viết"
 */
function renderEmptyState() {
  const grid = document.getElementById('posts-grid');
  const navControls = document.getElementById('posts-nav-controls');
  const paginationWrap = document.getElementById('posts-pagination-wrap');

  if (!grid) return;

  // Ẩn phân trang
  if (navControls) navControls.classList.remove('is-visible');
  if (paginationWrap) paginationWrap.classList.remove('is-visible');

  // Hiển thị thông báo "chưa có bài viết"
  grid.innerHTML = `
    <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem;">
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 1.5rem; opacity: 0.3;">
        <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"/>
        <path d="M9 10H15"/>
        <path d="M9 14H15"/>
      </svg>
      <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem; color: #1a1a1a;">Chưa có bài viết</h3>
      <p style="color: #666; font-size: 0.95rem;">Các bài viết mới sẽ được cập nhật sớm. Hãy quay lại sau nhé!</p>
    </div>
  `;
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

  // Nếu không có bài viết nào, hiển thị empty state
  if (allPosts.length === 0) {
    renderEmptyState();
    return;
  }

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

  // Tải dữ liệu động từ WordPress REST API
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
        // Có bài viết từ WordPress, chuẩn hóa dữ liệu
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
            const fallbackImgs = ['/src/assets/images/posts/post-1.jpg', '/src/assets/images/posts/post-2.jpg', '/src/assets/images/posts/post-3.jpg', '/src/assets/images/posts/post-4.jpg'];
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
      } else {
        // API trả về OK nhưng không có bài viết
        console.info('[SnakeMedia Posts] Không có bài viết trong category 211');
        renderEmptyState();
      }
    } else {
      // API lỗi hoặc không khả dụng
      console.info('[SnakeMedia Posts] API không khả dụng, hiển thị empty state');
      renderEmptyState();
    }
  } catch (err) {
    console.info('[SnakeMedia Posts] Lỗi khi load bài viết:', err.message);
    renderEmptyState();
  }
}

// Export alias để tương thích với main.js
export const initPostsCarousel = initPostsSection;

