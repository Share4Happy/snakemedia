# BẢNG ĐỐI CHIẾU ASSETS - SNAKEMEDIA LANDING PAGE

Theo quy tắc **"khung trước, ảnh sau"**, tài liệu này quản lý danh mục toàn bộ hình ảnh và đồ họa cần thiết cho landing page. Tất cả khung layout sẽ được dựng chuẩn tỷ lệ (`aspect-ratio`), bo góc, `object-fit: cover` và sử dụng class placeholder `.img-placeholder` dùng chung cho đến khi có ảnh thật.

Mọi hình ảnh tĩnh sẽ được khai báo tập trung tại `src/scripts/images.js` để khi bổ sung ảnh thật vào `src/assets/images/`, trang sẽ tự nhận diện mà không cần chỉnh sửa lại cấu trúc DOM.

---

## 1. Bảng theo dõi tài nguyên hình ảnh

| STT | Tên file dự kiến | Vị trí sử dụng | Kích thước đề xuất (px) | Tỷ lệ (Aspect Ratio) | Alt Text dự kiến | Trạng thái | Ghi chú |
|:---:|:---|:---|:---:|:---:|:---|:---:|:---|
| **01** | `logo-snakemedia.png` / `.webp` | Header & Footer | 600 x 283 (hiển thị 180x44) | ~2.1:1 | Logo SnakeMedia - Creative Media Team | **Đã hoàn thiện** | Đã tách nền trong suốt từ logo gốc, khử viền trắng anti-aliasing |
| **02** | `hero-grid-1.jpg` | Hero Collage (Trên trái) | 260 x 200 | ~4:3 | Nhóm thành viên SnakeMedia trẻ trung, năng động | **Còn thiếu** | Thẻ ảnh bo góc trắng, nghiêng nhẹ |
| **03** | `hero-grid-2.jpg` | Hero Collage (Trên phải) | 260 x 200 | ~4:3 | Đội ngũ quay phim SnakeMedia tác nghiệp với máy quay chuyên dụng | **Còn thiếu** | Thẻ ảnh bo góc trắng |
| **04** | `hero-grid-3.jpg` | Hero Collage (Dưới trái) | 260 x 200 | ~4:3 | Kỹ thuật viên quay phim SnakeMedia trong sự kiện | **Còn thiếu** | Thẻ ảnh bo góc trắng |
| **05** | `hero-grid-4.jpg` | Hero Collage (Dưới phải) | 260 x 200 | ~4:3 | Nhiếp ảnh gia SnakeMedia ghi lại khoảnh khắc sự kiện | **Còn thiếu** | Thẻ ảnh bo góc trắng |
| **06** | `badge-create-more.svg` | Hero Decor Badge | 100 x 100 | 1:1 | Create More Badge | **Tự tạo CSS/SVG** | Huy hiệu tròn vàng chữ đen "CREATE MORE +" xoay nghiêng |
| **07** | `about-team.jpg` | Section 01: Về SnakeMedia | 620 x 420 | ~1.48:1 (~3:2) | Tập thể đội ngũ SnakeMedia tại sự kiện sân khấu | **Còn thiếu** | Khung bo góc lớn ~24px |
| **08** | `solution-idea.jpg` | Section 03: Giải pháp 01 | 380 x 230 | ~1.65:1 (~16:10) | Lên ý tưởng và lập kế hoạch sản xuất media | **Còn thiếu** | Ảnh 2 bạn trẻ quay ngoại cảnh với tấm hắt sáng |
| **09** | `solution-production.jpg` | Section 03: Giải pháp 02 | 380 x 230 | ~1.65:1 (~16:10) | Nhóm sinh viên sản xuất và hậu kỳ media | **Còn thiếu** | Ảnh các bạn làm việc quanh màn hình máy tính |
| **10** | `solution-digital.jpg` | Section 03: Giải pháp 03 | 380 x 230 | ~1.65:1 (~16:10) | Hỗ trợ nội dung số và tác nghiệp buổi tối | **Còn thiếu** | Ảnh máy quay gimbal buổi tối |
| **11** | `service-photo.jpg` | Section 04: Dịch vụ 01 | 380 x 240 | ~1.58:1 (~16:10) | Dịch vụ Nhiếp ảnh sự kiện | **Còn thiếu** | Ảnh sân khấu sự kiện ánh sáng |
| **12** | `service-creative.jpg` | Section 04: Dịch vụ 02 | 380 x 240 | ~1.58:1 (~16:10) | Dịch vụ Sáng tạo nội dung - Content Creative | **Còn thiếu** | Ảnh tai nghe đỏ trên kệ |
| **13** | `service-design.jpg` | Section 04: Dịch vụ 03 | 380 x 240 | ~1.58:1 (~16:10) | Dịch vụ Thiết kế đồ họa | **Còn thiếu** | Tranh minh họa graphic designer |
| **14** | `service-edit.jpg` | Section 04: Dịch vụ 04 | 380 x 240 | ~1.58:1 (~16:10) | Dịch vụ Edit Video dựng phim chuyên nghiệp | **Còn thiếu** | Ảnh timeline phần mềm dựng phim |
| **15** | `service-livestream.jpg` | Section 04: Dịch vụ 05 | 380 x 240 | ~1.58:1 (~16:10) | Dịch vụ Livestream chuyên nghiệp | **Còn thiếu** | Ảnh studio livestream đèn softbox |
| **16** | `service-social.jpg` | Section 04: Dịch vụ 06 | 380 x 240 | ~1.58:1 (~16:10) | Dịch vụ Quản trị và phát triển Social Media | **Còn thiếu** | Minh họa flatlay điện thoại & mạng xã hội |
| **17** | `portfolio-beauty.jpg` | Section 05: Portfolio Thẩm mỹ | 540 x 340 | ~16:10 | Dự án truyền thông lĩnh vực Thẩm mỹ & Beauty | **Còn thiếu** | Giao diện kênh TikTok & video thẩm mỹ |
| **18** | `portfolio-education.jpg` | Section 05: Portfolio Giáo dục | 540 x 340 | ~16:10 | Dự án truyền thông lĩnh vực Giáo dục | **Còn thiếu** | Giao diện video tuyển sinh giảng viên sinh viên |
| **19** | `portfolio-food.jpg` | Section 05: Portfolio Ăn uống - F&B | 540 x 340 | ~16:10 | Dự án sản xuất media Ăn uống - F&B | **Còn thiếu** | Giao diện video ẩm thực nhà hàng buffet |
| **20** | `portfolio-healthcare.jpg` | Section 05: Portfolio Sức khỏe | 540 x 340 | ~16:10 | Dự án nội dung lĩnh vực Y tế & Sức khỏe | **Còn thiếu** | Giao diện video phòng khám nha khoa y tế |
| **21** | `post-fallback.jpg` | Section WordPress Carousel | 400 x 250 | 16:10 | Ảnh bài viết SnakeMedia | **Tạo sẵn CSS/SVG** | Dùng khi bài viết API không có `featured_media` |
| **22** | `post-1.jpg` đến `post-5.jpg` | Section 11: Bài đăng (2x2 Grid) | 640 x 360 | 16:9 | Ảnh minh họa bài viết truyền thông | **Đã tạo mẫu ảnh** | 5 ảnh chụp chuẩn studio/văn phòng theo mockup |
| **23** | `og-image.jpg` | SEO & Social Sharing (public/) | 1200 x 630 | 1.91:1 | SnakeMedia - Giải pháp truyền thông từ nhóm sinh viên sáng tạo | **Còn thiếu** | Banner OpenGraph chuẩn kích thước Facebook/Zalo |
| **24** | `favicon.svg` & `favicon.ico` | Favicon trình duyệt (public/) | 32 x 32, 48 x 48 | 1:1 | SnakeMedia Favicon | **Tạo sẵn SVG** | Biểu tượng máy ảnh / chữ S |

---

## 2. Quy cách Placeholder dùng chung (`.img-placeholder`)

- **Class CSS**: `.img-placeholder`
- **Phong cách**: Khối nền gradient trung tính mềm mại (`linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)` trên nền tối, hoặc `rgba(0,0,0,0.04)` trên nền sáng).
- **Họa tiết & Icon**: Icon camera mờ tinh tế ở giữa + chữ nhãn vị trí hiển thị (VD: "Ảnh: Nhiếp ảnh sự kiện").
- **Kích thước**: Luôn tuân thủ `aspect-ratio` và bo góc tương ứng của thẻ theo thiết kế. Không làm co giãn hay vỡ layout khi chưa nạp ảnh thật.
