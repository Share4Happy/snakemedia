# BẢNG ĐỐI CHIẾU ASSETS - SNAKEMEDIA LANDING PAGE

Theo quy tắc **"khung trước, ảnh sau"**, tài liệu này quản lý danh mục toàn bộ hình ảnh và đồ họa cần thiết cho landing page. Tất cả khung layout sẽ được dựng chuẩn tỷ lệ (`aspect-ratio`), bo góc, `object-fit: cover` và sử dụng class placeholder `.img-placeholder` dùng chung cho đến khi có ảnh thật.

Mọi hình ảnh tĩnh sẽ được khai báo tập trung tại `src/scripts/images.js` để khi bổ sung ảnh thật vào `src/assets/images/`, trang sẽ tự nhận diện mà không cần chỉnh sửa lại cấu trúc DOM.

---

## 1. Bảng theo dõi tài nguyên hình ảnh

| STT | Tên file dự kiến | Vị trí sử dụng | Kích thước đề xuất (px) | Tỷ lệ (Aspect Ratio) | Alt Text dự kiến | Trạng thái | Ghi chú |
|:---:|:---|:---|:---:|:---:|:---|:---:|:---|
| **01** | `logo-snakemedia.png` / `.webp` | Header & Footer | 600 x 283 (hiển thị 180x44) | ~2.1:1 | Logo SnakeMedia - Creative Media Team | **Đã hoàn thiện** | Đã tách nền trong suốt từ logo gốc, khử viền trắng anti-aliasing |
| **02** | `hero-grid-1.jpg` | Hero Collage (Trên trái) | 600 x 450 | 4:3 | 3 thành viên SnakeMedia và khách mời check-in tại sự kiện sân khấu ngoài trời | **Đã hoàn thiện** | Trích xuất từ ảnh gốc dự án IMG_7001.JPG |
| **03** | `hero-grid-2.jpg` | Hero Collage (Trên phải) | 600 x 450 | 4:3 | 2 thành viên SnakeMedia điều khiển máy quay gimbal và màn hình monitor ban đêm | **Đã hoàn thiện** | Trích xuất từ ảnh gốc dự án IMG_7002.JPG |
| **04** | `hero-grid-3.jpg` | Hero Collage (Dưới trái) | 600 x 450 | 4:3 | Các bạn nữ SnakeMedia rạng rỡ bên máy quay chân máy tại sân khấu hoàng hôn | **Đã hoàn thiện** | Trích xuất từ ảnh gốc dự án IMG_7003.JPG |
| **05** | `hero-grid-4.jpg` | Hero Collage (Dưới phải) | 600 x 450 | 4:3 | Ekip sinh viên SnakeMedia năng động giơ thẻ kỹ thuật sự kiện ngoài trời | **Đã hoàn thiện** | Trích xuất từ ảnh gốc dự án IMG_6998.JPG |
| **06** | `badge-create-more.svg` | Hero Decor Badge | 100 x 100 | 1:1 | Create More Badge | **Đã hoàn thiện** | Huy hiệu tròn vàng #ffc400 chữ đen "CREATE MORE +" xoay nghiêng |
| **07** | `about-team.jpg` | Section 01: Về SnakeMedia | 960 x 640 | 3:2 | Đại gia đình thành viên SnakeMedia và ban tổ chức tại sân khấu đại nhạc hội đêm | **Đã hoàn thiện** | Trích xuất chất lượng cao từ ảnh gốc dự án IMG_6994.JPG |
| **08** | `solution-idea.jpg` | Section 03: Giải pháp 01 | 600 x 380 | 16:10 | Ekip SnakeMedia lên ý tưởng kịch bản và tác nghiệp quay phim phỏng vấn hiện trường | **Đã hoàn thiện** | Trích xuất từ ảnh gốc dự án IMG_6991.JPG |
| **09** | `solution-production.jpg` | Section 03: Giải pháp 02 | 600 x 380 | 16:10 | Chuẩn bị dàn dựng thiết bị sân khấu và máy quay chuyên dụng trên tripod | **Đã hoàn thiện** | Trích xuất từ ảnh gốc dự án IMG_6992.JPG |
| **10** | `solution-digital.jpg` | Section 03: Giải pháp 03 | 600 x 380 | 16:10 | Vận hành bàn kỹ thuật điều khiển âm thanh, ánh sáng và tín hiệu số ban đêm | **Đã hoàn thiện** | Trích xuất từ ảnh gốc dự án IMG_6999.JPG |
| **11** | `service-photo.jpg` | Section 04: Dịch vụ 01 | 600 x 380 | 16:10 | Nữ kỹ thuật viên SnakeMedia tác nghiệp máy quay gimbal tại sân khấu rực rỡ ánh đèn | **Đã hoàn thiện** | Trích xuất từ ảnh gốc dự án IMG_6995.JPG |
| **12** | `service-creative.jpg` | Section 04: Dịch vụ 02 | 600 x 380 | 16:10 | Các thành viên SnakeMedia sáng tạo nội dung và chỉ đạo nghệ thuật trẻ trung | **Đã hoàn thiện** | Trích xuất từ ảnh gốc dự án IMG_7003.JPG |
| **13** | `service-design.jpg` | Section 04: Dịch vụ 03 | 600 x 380 | 16:10 | Ekip SnakeMedia thảo luận thiết kế ấn phẩm và hậu kỳ media bên dàn máy tính | **Đã hoàn thiện** | Trích xuất từ ảnh gốc dự án IMG_6993.JPG |
| **14** | `service-edit.jpg` | Section 04: Dịch vụ 04 | 600 x 380 | 16:10 | Kiểm tra và dựng video kỹ lưỡng từng khung hình trên màn hình monitor | **Đã hoàn thiện** | Trích xuất từ ảnh gốc dự án IMG_7002.JPG |
| **15** | `service-livestream.jpg` | Section 04: Dịch vụ 05 | 600 x 380 | 16:10 | Kỹ thuật viên tác nghiệp livestream tại đại nhạc hội Countdown hoành tráng | **Đã hoàn thiện** | Trích xuất từ ảnh gốc dự án IMG_6997.JPG |
| **16** | `service-social.jpg` | Section 04: Dịch vụ 06 | 600 x 380 | 16:10 | Ekip sinh viên SnakeMedia năng động kết nối và phát triển mạng xã hội | **Đã hoàn thiện** | Trích xuất từ ảnh gốc dự án IMG_6996.JPG |
| **17** | `portfolio-beauty.jpg` | Section 05: Portfolio Thẩm mỹ | 800 x 540 | 16:10 | Kênh truyền thông Thẩm mỹ BLING KIM CLINIC | **Đã hoàn thiện** | Trích xuất từ ảnh gốc dự án IMG_6990.JPG |
| **18** | `portfolio-education.jpg` | Section 05: Portfolio Giáo dục | 800 x 540 | 16:10 | Kênh truyền thông Giáo dục Thầy Sơn Chọn Ngành | **Đã hoàn thiện** | Trích xuất từ ảnh gốc dự án IMG_6987.JPG |
| **19** | `portfolio-food.jpg` | Section 05: Portfolio Ăn uống - F&B | 800 x 540 | 16:10 | Kênh truyền thông F&B Ẩm Thực Chay Mộc | **Đã hoàn thiện** | Trích xuất từ ảnh gốc dự án IMG_6989.JPG |
| **20** | `portfolio-healthcare.jpg` | Section 05: Portfolio Sức khỏe | 800 x 540 | 16:10 | Kênh truyền thông Sức khỏe Nha khoa SP79 | **Đã hoàn thiện** | Trích xuất từ ảnh gốc dự án IMG_6988.JPG |
| **21** | `post-fallback.jpg` | Section WordPress Carousel | 400 x 250 | 16:10 | Ảnh bài viết SnakeMedia | **Đã hoàn thiện** | Dùng khi bài viết API không có `featured_media` |
| **22** | `post-1.jpg` đến `post-5.jpg` | Section 11: Bài đăng (2x2 Grid) | 640 x 360 | 16:9 | Ảnh minh họa các câu chuyện tác nghiệp thực tế của SnakeMedia | **Đã hoàn thiện** | Trích xuất từ các ảnh gốc dự án (IMG_6993, 7002, 6998, 6991, 6997) |
| **23** | `og-image.jpg` | SEO & Social Sharing (public/) | 1200 x 630 | 1.91:1 | SnakeMedia - Giải pháp truyền thông từ nhóm sinh viên sáng tạo | **Còn thiếu** | Banner OpenGraph chuẩn kích thước Facebook/Zalo |
| **24** | `favicon.svg` & `favicon.ico` | Favicon trình duyệt (public/) | 32 x 32, 48 x 48 | 1:1 | SnakeMedia Favicon | **Tạo sẵn SVG** | Biểu tượng máy ảnh / chữ S |

---

## 2. Quy cách Placeholder dùng chung (`.img-placeholder`)

- **Class CSS**: `.img-placeholder`
- **Phong cách**: Khối nền gradient trung tính mềm mại (`linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)` trên nền tối, hoặc `rgba(0,0,0,0.04)` trên nền sáng).
- **Họa tiết & Icon**: Icon camera mờ tinh tế ở giữa + chữ nhãn vị trí hiển thị (VD: "Ảnh: Nhiếp ảnh sự kiện").
- **Kích thước**: Luôn tuân thủ `aspect-ratio` và bo góc tương ứng của thẻ theo thiết kế. Không làm co giãn hay vỡ layout khi chưa nạp ảnh thật.
