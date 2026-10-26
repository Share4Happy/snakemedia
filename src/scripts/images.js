/**
 * Registry Quản Lý Tài Nguyên Hình Ảnh - SnakeMedia
 * Tuân thủ tuyệt đối quy tắc "khung trước, ảnh sau":
 * - Khai báo một nơi duy nhất cho mọi ảnh tĩnh trên trang.
 * - Tự động quét và nạp ảnh thật từ `src/assets/images/` khi bạn bổ sung file.
 * - Nếu chưa có file thật, giữ nguyên khung placeholder với tỷ lệ, kích thước và bo góc chuẩn.
 */

// Tự động quét các ảnh có trong src/assets/images/ (Vite eager glob)
const localImageModules = import.meta.glob('../assets/images/**/*.{jpg,jpeg,png,webp,svg}', {
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

  // Hero Section Collage (4 ảnh thực tế từ dự án)
  heroGrid1: {
    fileName: 'hero-grid-1.jpg',
    alt: '3 thành viên SnakeMedia và khách mời check-in tại sự kiện sân khấu ngoài trời',
    aspectRatio: '4/3',
    label: 'Ảnh: Check-in sân khấu sự kiện'
  },
  heroGrid2: {
    fileName: 'hero-grid-2.jpg',
    alt: '2 thành viên SnakeMedia điều khiển máy quay gimbal và màn hình monitor ban đêm',
    aspectRatio: '4/3',
    label: 'Ảnh: Tác nghiệp máy quay gimbal'
  },
  heroGrid3: {
    fileName: 'hero-grid-3.jpg',
    alt: 'Các bạn nữ SnakeMedia rạng rỡ bên máy quay chân máy tại sân khấu hoàng hôn',
    aspectRatio: '4/3',
    label: 'Ảnh: Ekip bên máy quay sự kiện'
  },
  heroGrid4: {
    fileName: 'hero-grid-4.jpg',
    alt: 'Ekip sinh viên SnakeMedia năng động giơ thẻ kỹ thuật sự kiện ngoài trời',
    aspectRatio: '4/3',
    label: 'Ảnh: Đội ngũ kỹ thuật sự kiện'
  },

  // Section 01: Về SnakeMedia
  aboutTeam: {
    fileName: 'about-team.jpg',
    alt: 'Đại gia đình thành viên SnakeMedia và ban tổ chức tại sân khấu đại nhạc hội đêm',
    aspectRatio: '620/420',
    label: 'Ảnh: Đội ngũ SnakeMedia'
  },

  // Section 03: Giải pháp
  solutionIdea: {
    fileName: 'solution-idea.jpg',
    alt: 'Ekip SnakeMedia lên ý tưởng kịch bản và tác nghiệp quay phim phỏng vấn hiện trường',
    aspectRatio: '16/10',
    label: 'Ảnh: Lên ý tưởng & kế hoạch'
  },
  solutionProduction: {
    fileName: 'solution-production.jpg',
    alt: 'Chuẩn bị dàn dựng thiết bị sân khấu và máy quay chuyên dụng trên tripod',
    aspectRatio: '16/10',
    label: 'Ảnh: Sản xuất media'
  },
  solutionDigital: {
    fileName: 'solution-digital.jpg',
    alt: 'Vận hành bàn kỹ thuật điều khiển âm thanh, ánh sáng và tín hiệu số ban đêm',
    aspectRatio: '16/10',
    label: 'Ảnh: Hỗ trợ nội dung số'
  },

  // Section 04: Gói Dịch vụ (6 mục)
  servicePhoto: {
    fileName: 'service-photo.jpg',
    alt: 'Nữ kỹ thuật viên SnakeMedia tác nghiệp máy quay gimbal tại sân khấu rực rỡ ánh đèn',
    aspectRatio: '16/10',
    label: 'Ảnh: Nhiếp ảnh sự kiện'
  },
  serviceCreative: {
    fileName: 'service-creative.jpg',
    alt: 'Các thành viên SnakeMedia sáng tạo nội dung và chỉ đạo nghệ thuật trẻ trung',
    aspectRatio: '16/10',
    label: 'Ảnh: Content Creative'
  },
  serviceDesign: {
    fileName: 'service-design.jpg',
    alt: 'Ekip SnakeMedia thảo luận thiết kế ấn phẩm và hậu kỳ media bên dàn máy tính',
    aspectRatio: '16/10',
    label: 'Ảnh: Thiết kế đồ họa'
  },
  serviceEdit: {
    fileName: 'service-edit.jpg',
    alt: 'Kiểm tra và dựng video kỹ lưỡng từng khung hình trên màn hình monitor',
    aspectRatio: '16/10',
    label: 'Ảnh: Edit Video'
  },
  serviceLivestream: {
    fileName: 'service-livestream.jpg',
    alt: 'Kỹ thuật viên tác nghiệp livestream tại đại nhạc hội Countdown hoành tráng',
    aspectRatio: '16/10',
    label: 'Ảnh: Live Stream'
  },
  serviceSocial: {
    fileName: 'service-social.jpg',
    alt: 'Ekip sinh viên SnakeMedia năng động kết nối và phát triển mạng xã hội',
    aspectRatio: '16/10',
    label: 'Ảnh: Social Media'
  },

  // Section 05: Portfolio (Case Studies thực tế)
  portfolioBeauty: {
    fileName: 'portfolio-beauty.jpg',
    alt: 'Kênh truyền thông Thẩm mỹ BLING KIM CLINIC - Dự án SnakeMedia',
    aspectRatio: '16/10',
    label: 'Ảnh: Dự án Thẩm mỹ'
  },
  portfolioEducation: {
    fileName: 'portfolio-education.jpg',
    alt: 'Kênh truyền thông Giáo dục Thầy Sơn Chọn Ngành - Dự án SnakeMedia',
    aspectRatio: '16/10',
    label: 'Ảnh: Dự án Giáo dục'
  },
  portfolioFood: {
    fileName: 'portfolio-food.jpg',
    alt: 'Kênh truyền thông Ẩm thực F&B Ẩm Thực Chay Mộc - Dự án SnakeMedia',
    aspectRatio: '16/10',
    label: 'Ảnh: Dự án Ăn uống - F&B'
  },
  portfolioHealthcare: {
    fileName: 'portfolio-healthcare.jpg',
    alt: 'Kênh truyền thông Sức khỏe Nha khoa SP79 - Dự án SnakeMedia',
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
