# BẢNG ĐỐI CHIẾU ASSETS - SNAKEMEDIA LANDING PAGE

Theo quy tắc **"khung trước, ảnh sau"**, tài liệu này quản lý danh mục toàn bộ hình ảnh và đồ họa cần thiết cho landing page. Tất cả khung layout sẽ được dựng chuẩn tỷ lệ (`aspect-ratio`), bo góc, `object-fit: cover` và sử dụng class placeholder `.img-placeholder` dùng chung cho đến khi có ảnh thật.

Mọi hình ảnh tĩnh sẽ được khai báo tập trung tại `src/scripts/images.js` để khi bổ sung ảnh thật vào `src/assets/images/`, trang sẽ tự nhận diện mà không cần chỉnh sửa lại cấu trúc DOM.

---

## 1. Bảng theo dõi tài nguyên hình ảnh

| STT | Tên file dự kiến | Vị trí sử dụng | Kích thước đề xuất (px) | Tỷ lệ (Aspect Ratio) | Alt Text dự kiến | Trạng thái | Ghi chú |
|:---:|:---|:---|:---:|:---:|:---|:---:|:---|
| **01** | `logo-snakemedia.png` / `.webp` | Header & Footer | 600 x 283 (hiển thị 180x44) | ~2.1:1 | Logo SnakeMedia - Creative Media Team | **Đã hoàn thiện** | Đã tách nền trong suốt từ logo gốc, khử viền trắng anti-aliasing |
| **02** | `hero-grid-1.jpg` | Hero Collage (Trên trái) | 600 x 450 | 4:3 | Nhóm thành viên SnakeMedia chụp cùng khách mời/nghệ sĩ | **Đã hoàn thiện** | Trích xuất từ ảnh gốc IMG_7001.JPG |
| **03** | `hero-grid-2.jpg` | Hero Collage (Trên phải) | 600 x 450 | 4:3 | Đội ngũ quay phim SnakeMedia tác nghiệp với máy quay chuyên dụng | **Đã hoàn thiện** | Trích xuất chuẩn từ bản thiết kế Hero mockup |
| **04** | `hero-grid-3.jpg` | Hero Collage (Dưới trái) | 600 x 450 | 4:3 | Kỹ thuật viên quay phim SnakeMedia tác nghiệp chân máy | **Đã hoàn thiện** | Trích xuất chuẩn từ bản thiết kế Hero mockup |
| **05** | `hero-grid-4.jpg` | Hero Collage (Dưới phải) | 600 x 450 | 4:3 | Nhiếp ảnh gia SnakeMedia ghi lại khoảnh khắc sự kiện | **Đã hoàn thiện** | Trích xuất chuẩn từ bản thiết kế Hero mockup |
| **06** | `badge-create-more.svg` | Hero Decor Badge | 100 x 100 | 1:1 | Create More Badge | **Đã hoàn thiện** | Huy hiệu tròn vàng #ffc400 chữ đen "CREATE MORE +" xoay nghiêng |
| **07** | `about-team.jpg` | Section 01: Về SnakeMedia | 960 x 640 | 3:2 | Tập thể đội ngũ SnakeMedia tại sự kiện sân khấu ngoài trời | **Đã hoàn thiện** | Trích xuất chất lượng cao từ ảnh gốc IMG_6994.JPG |
| **08** | `solution-idea.jpg` | Section 03: Giải pháp 01 | 600 x 380 | 16:10 | Lên ý tưởng và quay ngoại cảnh với tấm hắt sáng | **Đã hoàn thiện** | Cắt nét chuẩn từ bản thiết kế Section 03 |
| **09** | `solution-production.jpg` | Section 03: Giải pháp 02 | 600 x 380 | 16:10 | Nhóm sinh viên sản xuất và hậu kỳ quanh màn hình EDRA | **Đã hoàn thiện** | Trích xuất chất lượng cao từ ảnh gốc IMG_6993.JPG |
| **10** | `solution-digital.jpg` | Section 03: Giải pháp 03 | 600 x 380 | 16:10 | Hỗ trợ nội dung số và tác nghiệp máy quay gimbal ban đêm | **Đã hoàn thiện** | Trích xuất chất lượng cao từ ảnh gốc IMG_7002.JPG |
| **11** | `service-photo.jpg` | Section 04: Dịch vụ 01 | 600 x 380 | 16:10 | Dịch vụ Nhiếp ảnh sự kiện sân khấu ánh sáng | **Đã hoàn thiện** | Cắt chuẩn từ bản thiết kế Section 04 |
| **12** | `service-creative.jpg` | Section 04: Dịch vụ 02 | 600 x 380 | 16:10 | Dịch vụ Sáng tạo nội dung - Content Creative (Tai nghe đỏ) | **Đã hoàn thiện** | Cắt chuẩn từ bản thiết kế Section 04 |
| **13** | `service-design.jpg` | Section 04: Dịch vụ 03 | 600 x 380 | 16:10 | Dịch vụ Thiết kế đồ họa (Illustrator) | **Đã hoàn thiện** | Cắt chuẩn từ bản thiết kế Section 04 |
| **14** | `service-edit.jpg` | Section 04: Dịch vụ 04 | 600 x 380 | 16:10 | Dịch vụ Edit Video dựng phim chuyên nghiệp (Timeline Premiere) | **Đã hoàn thiện** | Cắt chuẩn từ bản thiết kế Section 04 |
| **15** | `service-livestream.jpg` | Section 04: Dịch vụ 05 | 600 x 380 | 16:10 | Dịch vụ Livestream chuyên nghiệp trường quay softbox | **Đã hoàn thiện** | Cắt chuẩn từ bản thiết kế Section 04 |
| **16** | `service-social.jpg` | Section 04: Dịch vụ 06 | 600 x 380 | 16:10 | Dịch vụ Phát triển và quản trị Social Media (Flatlay) | **Đã hoàn thiện** | Cắt chuẩn từ bản thiết kế Section 04 |
| **17** | `portfolio-beauty.jpg` | Section 05: Portfolio Thẩm mỹ | 800 x 540 | 16:10 | Kênh truyền thông Thẩm mỹ BLING KIM CLINIC | **Đã hoàn thiện** | Trích xuất từ ảnh gốc IMG_6990.JPG |
| **18** | `portfolio-education.jpg` | Section 05: Portfolio Giáo dục | 800 x 540 | 16:10 | Kênh truyền thông Giáo dục Thầy Sơn Chọn Ngành | **Đã hoàn thiện** | Trích xuất từ ảnh gốc IMG_6987.JPG |
| **19** | `portfolio-food.jpg` | Section 05: Portfolio Ăn uống - F&B | 800 x 540 | 16:10 | Kênh truyền thông F&B Ẩm Thực Chay Mộc | **Đã hoàn thiện** | Trích xuất từ ảnh gốc IMG_6989.JPG |
| **20** | `portfolio-healthcare.jpg` | Section 05: Portfolio Sức khỏe | 800 x 540 | 16:10 | Kênh truyền thông Sức khỏe Nha khoa SP79 | **Đã hoàn thiện** | Trích xuất từ ảnh gốc IMG_6988.JPG |
| **21** | `post-fallback.jpg` | Section WordPress Carousel | 400 x 250 | 16:10 | Ảnh bài viết SnakeMedia | **Đã hoàn thiện** | Dùng khi bài viết API không có `featured_media` |
| **22** | `post-1.jpg` đến `post-5.jpg` | Section 11: Bài đăng (2x2 Grid) | 640 x 360 | 16:9 | Ảnh minh họa bài viết truyền thông | **Đã hoàn thiện** | 5 ảnh chụp chuẩn studio/văn phòng theo mockup |
| **23** | `og-image.jpg` | SEO & Social Sharing (public/) | 1200 x 630 | 1.91:1 | SnakeMedia - Giải pháp truyền thông từ nhóm sinh viên sáng tạo | **Còn thiếu** | Banner OpenGraph chuẩn kích thước Facebook/Zalo |
| **24** | `favicon.svg` & `favicon.ico` | Favicon trình duyệt (public/) | 32 x 32, 48 x 48 | 1:1 | SnakeMedia Favicon | **Tạo sẵn SVG** | Biểu tượng máy ảnh / chữ S |

---

## 2. Quy cách Placeholder dùng chung (`.img-placeholder`)

- **Class CSS**: `.img-placeholder`
- **Phong cách**: Khối nền gradient trung tính mềm mại (`linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)` trên nền tối, hoặc `rgba(0,0,0,0.04)` trên nền sáng).
- **Họa tiết & Icon**: Icon camera mờ tinh tế ở giữa + chữ nhãn vị trí hiển thị (VD: "Ảnh: Nhiếp ảnh sự kiện").
- **Kích thước**: Luôn tuân thủ `aspect-ratio` và bo góc tương ứng của thẻ theo thiết kế. Không làm co giãn hay vỡ layout khi chưa nạp ảnh thật.
