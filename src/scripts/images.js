/**
 * Registry Quản Lý Tài Nguyên Hình Ảnh - SnakeMedia
 * Tuân thủ tuyệt đối quy tắc "khung trước, ảnh sau":
 * - Khai báo một nơi duy nhất cho mọi ảnh tĩnh trên trang.
 * - Tự động quét và nạp ảnh thật từ `src/assets/images/` khi bạn bổ sung file.
 * - Nếu chưa có file thật, giữ nguyên khung placeholder với tỷ lệ, kích thước và bo góc chuẩn.
 */

// Tự động quét các ảnh có trong src/assets/images/ (Vite eager glob)
const localImageModules = import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp,svg}', {
  eager: true,
  import: 'default'
});

/**
 * Danh mục ảnh tĩnh dự kiến trên trang theo thiết kế
 */
export const IMAGE_REGISTRY = {
  // Logo
  logo: {
    fileName: 'logo-snakemedia.svg',
    alt: 'Logo SnakeMedia - Creative Media Team',
    aspectRatio: '180/50',
    label: 'Logo SnakeMedia'
  },

  // Hero Section Collage (4 ảnh)
  heroGrid1: {
    fileName: 'hero-grid-1.jpg',
    alt: 'Nhóm thành viên SnakeMedia trẻ trung, năng động',
    aspectRatio: '4/3',
    label: 'Ảnh: Nhóm thành viên'
  },
  heroGrid2: {
    fileName: 'hero-grid-2.jpg',
    alt: 'Đội ngũ quay phim SnakeMedia tác nghiệp với máy quay chuyên dụng',
    aspectRatio: '4/3',
    label: 'Ảnh: Tác nghiệp máy quay'
  },
  heroGrid3: {
    fileName: 'hero-grid-3.jpg',
    alt: 'Kỹ thuật viên quay phim SnakeMedia trong sự kiện',
    aspectRatio: '4/3',
    label: 'Ảnh: Kỹ thuật viên sự kiện'
  },
  heroGrid4: {
    fileName: 'hero-grid-4.jpg',
    alt: 'Nhiếp ảnh gia SnakeMedia ghi lại khoảnh khắc sự kiện',
    aspectRatio: '4/3',
    label: 'Ảnh: Nhiếp ảnh sự kiện'
  },

  // Section 01: Về SnakeMedia
  aboutTeam: {
    fileName: 'about-team.jpg',
    alt: 'Tập thể đội ngũ SnakeMedia tại sự kiện sân khấu',
    aspectRatio: '620/420',
    label: 'Ảnh: Đội ngũ SnakeMedia'
  },

  // Section 03: Giải pháp
  solutionIdea: {
    fileName: 'solution-idea.jpg',
    alt: 'Lên ý tưởng và lập kế hoạch sản xuất media',
    aspectRatio: '16/10',
    label: 'Ảnh: Lên ý tưởng & kế hoạch'
  },
  solutionProduction: {
    fileName: 'solution-production.jpg',
    alt: 'Nhóm sinh viên sản xuất và hậu kỳ media',
    aspectRatio: '16/10',
    label: 'Ảnh: Sản xuất media'
  },
  solutionDigital: {
    fileName: 'solution-digital.jpg',
    alt: 'Hỗ trợ nội dung số và tác nghiệp ban đêm',
    aspectRatio: '16/10',
    label: 'Ảnh: Hỗ trợ nội dung số'
  },

  // Section 04: Gói Dịch vụ (6 mục)
  servicePhoto: {
    fileName: 'service-photo.jpg',
    alt: 'Dịch vụ Nhiếp ảnh sự kiện SnakeMedia',
    aspectRatio: '16/10',
    label: 'Ảnh: Nhiếp ảnh sự kiện'
  },
  serviceCreative: {
    fileName: 'service-creative.jpg',
    alt: 'Dịch vụ Sáng tạo nội dung - Content Creative',
    aspectRatio: '16/10',
    label: 'Ảnh: Content Creative'
  },
  serviceDesign: {
    fileName: 'service-design.jpg',
    alt: 'Dịch vụ Thiết kế đồ họa nhận diện',
    aspectRatio: '16/10',
    label: 'Ảnh: Thiết kế đồ họa'
  },
  serviceEdit: {
    fileName: 'service-edit.jpg',
    alt: 'Dịch vụ Edit Video dựng phim chuyên nghiệp',
    aspectRatio: '16/10',
    label: 'Ảnh: Edit Video'
  },
  serviceLivestream: {
    fileName: 'service-livestream.jpg',
    alt: 'Dịch vụ Livestream chuyên nghiệp đa máy quay',
    aspectRatio: '16/10',
    label: 'Ảnh: Live Stream'
  },
  serviceSocial: {
    fileName: 'service-social.jpg',
    alt: 'Dịch vụ Phát triển và quản trị Social Media',
    aspectRatio: '16/10',
    label: 'Ảnh: Social Media'
  },

  // Section 05: Portfolio
  portfolioBeauty: {
    fileName: 'portfolio-beauty.jpg',
    alt: 'Dự án truyền thông Thẩm mỹ - SnakeMedia',
    aspectRatio: '16/10',
    label: 'Ảnh: Dự án Thẩm mỹ'
  },
  portfolioEducation: {
    fileName: 'portfolio-education.jpg',
    alt: 'Dự án truyền thông Giáo dục - SnakeMedia',
    aspectRatio: '16/10',
    label: 'Ảnh: Dự án Giáo dục'
  },
  portfolioFood: {
    fileName: 'portfolio-food.jpg',
    alt: 'Dự án truyền thông F&B Ăn uống - SnakeMedia',
    aspectRatio: '16/10',
    label: 'Ảnh: Dự án Ăn uống - F&B'
  },
  portfolioHealthcare: {
    fileName: 'portfolio-healthcare.jpg',
    alt: 'Dự án truyền thông Sức khỏe - SnakeMedia',
    aspectRatio: '16/10',
    label: 'Ảnh: Dự án Sức khỏe'
  }
};

/**
 * Tìm URL ảnh thật trong thư mục src/assets/images/ nếu đã được bổ sung
 * @param {string} fileName Tên file ảnh dự kiến (VD: 'about-team.jpg')
 * @returns {string|null} Đường dẫn asset sau xử lý của Vite hoặc null nếu chưa có
 */
export function getImageUrl(fileName) {
  const matchKey = Object.keys(localImageModules).find(key => key.endsWith(`/${fileName}`));
  return matchKey ? localImageModules[matchKey] : null;
}

/**
 * Khởi tạo hình ảnh vào các khung có thuộc tính `data-image-key`
 */
export function initRegisteredImages() {
  const imageContainers = document.querySelectorAll('[data-image-key]');

  imageContainers.forEach(container => {
    const key = container.getAttribute('data-image-key');
    const imageInfo = IMAGE_REGISTRY[key];

    if (!imageInfo) return;

    const realUrl = getImageUrl(imageInfo.fileName);

    if (realUrl) {
      // Có ảnh thật: tạo thẻ img tối ưu
      const img = document.createElement('img');
      img.src = realUrl;
      img.alt = imageInfo.alt;
      img.className = 'img-loaded';
      img.loading = container.dataset.priority === 'high' ? 'eager' : 'lazy';
      img.decoding = 'async';
      container.innerHTML = '';
      container.appendChild(img);
    } else {
      // Chưa có ảnh thật: hiển thị placeholder chuẩn kích thước
      if (!container.querySelector('.img-placeholder-content')) {
        container.classList.add('img-placeholder');
        container.innerHTML = `
          <div class="img-placeholder-content" style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding:1rem; text-align:center;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
            <span class="img-placeholder-label">${imageInfo.label}</span>
          </div>
        `;
      }
    }
  });
}
