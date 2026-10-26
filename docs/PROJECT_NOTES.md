# BÁO CÁO PHÂN TÍCH THIẾT KẾ & DỰ ÁN - SNAKEMEDIA LANDING PAGE
**Dự án:** SnakeMedia Landing Page  
**Phiên bản tài liệu:** 1.0 (Giai đoạn 1: Phân tích & Chuẩn bị)  
**Ngày thực hiện:** 26/10/2026  
**Trạng thái:** Hoàn thành Giai đoạn 2 - 6 (Đã kiểm thử trình duyệt, sẵn sàng bàn giao & chờ bổ sung ảnh Giai đoạn 8)

---

## 1. Kiểm tra môi trường & dự án hiện tại

- **Thư mục làm việc:** `d:\Projects\landing-page\snakemedia` (Hiện tại là thư mục trống, sẵn sàng khởi tạo).
- **Môi trường hệ thống:**
  - Node.js: `v22.15.1` (Phiên bản LTS - đạt yêu cầu).
  - npm: `10.9.2`.
  - Git: `2.48.1.windows.1`.
- **Mục tiêu kỹ thuật:**
  - Vite (vanilla template) + HTML5 + CSS3 (Vanilla CSS, Custom Properties tokens) + JavaScript ES Modules.
  - Tự viết Carousel WordPress bài viết, Mobile Menu, Accordion bằng CSS/JS thuần, không cài thư viện UI, không dùng React/Vue/Tailwind.
  - Triển khai GitHub Pages qua GitHub Actions (`.github/workflows/deploy.yml`).

---

## 2. Phân tích thiết kế chi tiết (Dựa trên 5 ảnh cung cấp)

### 2.1. Danh sách Section theo thứ tự từ trên xuống

| STT | Tên Section | Tone màu chủ đạo | Mô tả thành phần & Bố cục |
|:---:|:---|:---|:---|
| **00** | **Header (Sticky Navigation)** | Xanh Navy trong suốt (`rgba(11,32,85,0.85)` + `backdrop-filter: blur`) | - Bên trái: Logo SnakeMedia (chữ kèm icon ống kính máy ảnh).<br>- Giữa: Menu điều hướng (`Vấn đề`, `Giải pháp`, `Dịch vụ`, `Dự án`, `Bảng giá`, `Quy trình`).<br>- Bên phải: Nút CTA màu vàng dạng viên thuốc (Pill): `Tư vấn ↗`.<br>- Mobile: Menu hamburger chuyển đổi mượt mà. |
| **01** | **Hero Section** | Xanh Navy gradient + lưới isometric mờ + quầng sáng tròn | - **Cột trái:**<br>  + Eyebrow: `SNAKEMEDIA • CREATIVE MEDIA TEAM` (Vàng gold, uppercase).<br>  + H1 Heading: `Bạn có ý tưởng` (Trắng) / `SnakeMedia giúp bạn kể câu chuyện.` (Vàng nổi bật).<br>  + Đoạn mô tả giải pháp truyền thông từ nhóm sinh viên.<br>  + Nhóm nút hành động: Nút vàng `Nhận báo giá ↗` + Nút viền xanh `Khám phá dự án →`.<br>  + Dải cam kết phía dưới: `✦ Sáng tạo theo mục tiêu`, `✦ Linh hoạt ngân sách`, `✦ Đồng hành rõ ràng`.<br>- **Cột phải:**<br>  + Huy hiệu tròn vàng xoay nhẹ: `CREATE MORE +`.<br>  + Cụm 4 ảnh nghiêng nhẹ (Collage) viền trắng bo tròn: 3 thành viên, quay phim sự kiện, kỹ thuật máy quay, chụp ảnh. |
| **02** | **Section 01: Về SnakeMedia** | Nền kem / Ivory ấm áp (`#FBF8F2`) | - **Cột trái:** Thẻ ảnh lớn bo góc tròn (~24px) chụp toàn thể đội ngũ SnakeMedia tại sân khấu sự kiện.<br>- **Cột phải:**<br>  + Tiêu đề phân mục: `01 / VỀ SNAKEMEDIA`.<br>  + Tiêu đề chính: `Một đội ngũ trẻ. Một cách làm chỉn chu.` (Chữ xanh than đen đậm).<br>  + 2 đoạn văn bản giới thiệu định hướng, quy trình tinh gọn.<br>  + 3 nút nhãn tròn vàng (Pills): `Lắng nghe nhu cầu`, `Sáng tạo thực tế`, `Phối hợp linh hoạt`. |
| **03** | **Section 02: Khó khăn khách hàng (Customer Challenges)** | Xanh Navy hoàng gia chuyển sắc (`#132B68` → `#23499D`) | - Tiêu đề phân mục: `02 / CUSTOMER CHALLENGES`.<br>- Tiêu đề chính: `Bạn đang gặp khó khăn nào?` (Trắng).<br>- Phụ đề: `Làm nội dung không chỉ cần ý tưởng...`.<br>- **Lưới 3 thẻ trắng bo góc lớn:**<br>  + Thẻ 01: Huy hiệu `01` / Tiêu đề `Chưa biết bắt đầu từ đâu` / Nội dung ý tưởng rời rạc.<br>  + Thẻ 02: Huy hiệu `02` / Tiêu đề `Thiếu thời gian và nhân lực` / Nội dung công việc vận hành khó duy trì.<br>  + Thẻ 03: Huy hiệu `03` / Tiêu đề `Nội dung chưa đồng bộ` / Nội dung thông điệp thiếu nhất quán. |
| **04** | **Section 03: Giải pháp từ nhóm sinh viên (Our Solutions)** | Nền vàng rực rỡ năng động (`#F6BD26`) | - Tiêu đề phân mục: `03 / OUR SOLUTIONS` (Chữ nâu đen sang trọng).<br>- Tiêu đề chính: `Giải pháp từ nhóm sinh viên`.<br>- Phụ đề: `Bắt đầu từ mục tiêu của bạn...`.<br>- **Lưới 3 thẻ trắng có ảnh chụp thực tế:**<br>  + Thẻ 01: Huy hiệu `01` + Ảnh hắt sáng + `Lên ý tưởng & kế hoạch`.<br>  + Thẻ 02: Huy hiệu `02` + Ảnh làm việc máy tính + `Sản xuất media`.<br>  + Thẻ 03: Huy hiệu `03` + Ảnh máy quay ban đêm + `Hỗ trợ nội dung số`. |
| **05** | **Section 04: Gói dịch vụ (Service Packages)** | Xanh Navy gradient (`#183B7E` → `#2454B4`) | - Tiêu đề: `04 / SERVICE PACKAGES` / `Dịch vụ phù hợp với nhu cầu của bạn`.<br>- Lưới 6 dịch vụ: Nhiếp ảnh sự kiện, Content Creative, Thiết kế đồ họa, Edit Video, Live Stream, Social Media.<br>- Thanh thông báo lưu ý chân trang có viền vàng. |
| **06** | **Section 05: Sản phẩm & dự án thực tế (Portfolio)** | Nền trắng thanh lịch (`#FFFFFF`) | - Tiêu đề: `05 / PORTFOLIO` / `Sản phẩm & dự án thực tế`.<br>- Lưới 2x2 gồm 4 dự án đại diện: 01 Thẩm mỹ (Beauty), 02 Giáo dục (Education), 03 Ăn uống (F&B), 04 Sức khỏe (Healthcare). |
| **07** | **Section 05.1: Quy trình dự án (Project Planning)** | Nền xám ngà chuyển sắc (`#F8FAFD` → `#FFFFFF`) | - Tiêu đề: `05.1 / PROJECT PLANNING` / `Từ yêu cầu ban đầu đến sản phẩm hoàn chỉnh`.<br>- 4 bước quy trình: Giai đoạn 01 Khám phá nhu cầu, Giai đoạn 02 Chốt brief, Giai đoạn 03 Sản xuất nội dung, Giai đoạn 04 Kiểm tra & bàn giao.<br>- Banner xanh navy: `Bạn chưa có brief hoàn chỉnh?` kèm CTA `Trao đổi ý tưởng ↗`. |
| **08** | **Section 06: Chọn gói dịch vụ phù hợp (Bảng giá)** | Nền xanh da trời dịu mắt (`#ADC9FF` → `#F0F4FF`) | - Tiêu đề: `06 / CHỌN GÓI DỊCH VỤ PHÙ HỢP` / `Chọn gói dịch vụ phù hợp`.<br>- 3 gói dịch vụ: Gói 01 Thiết kế hình ảnh, Gói 02 Dựng video ngắn (nền xanh navy nổi bật), Gói 03 Combo nội dung. |
| **09** | **Section 06.1: Đầu ra & Chuẩn bị (Deliverables)** | Nền trắng ngà (`#F8FAFD`) | - Cột trái: `06.1 / DELIVERABLES` / `Bạn nhận được gì sau mỗi dự án?` kèm lưới 6 cam kết đầu ra.<br>- Cột phải: Khung thẻ trắng `Những thông tin nên chuẩn bị` trước khi tư vấn. |
| **10** | **Section 07: Vì sao chọn chúng tôi (Why Choose Us)** | Nền trắng xám (`#FFFFFF` → `#F4F7FB`) | - Tiêu đề: `07 / WHY CHOOSE US` / `Vì sao chọn SnakeMedia?`.<br>- 3 thẻ giá trị cốt lõi: 01 Linh hoạt, 02 Rõ ràng, 03 Luôn học hỏi. |
| **11** | **Section 08: Carousel Bài viết WordPress** | Nền tối Navy Black (`#07153B`) | - Tiêu đề: `08 / BÀI VIẾT & TIN TỨC` / `Hoạt động mới nhất từ SnakeMedia` (Chuyên mục 208).<br>- Marquee CSS lướt ngang tự động mượt mà, lặp vô tận, dừng khi hover/focus/touch, nút WCAG. |
| **12** | **Section 09: Form Đăng ký nhận tư vấn / Báo giá** | Nền Xanh Navy hoàng gia chuyển sắc | - Mục tiêu chuyển đổi chính: Họ tên, Số điện thoại/Zalo, Dịch vụ quan tâm, Lời nhắn.<br>- Client validation + Trạng thái loading và thông báo phản hồi. |
| **13** | **Footer** | Nền tối đậm Navy Black (`#040C20`) | - Logo SnakeMedia, slogan, link khám phá, dịch vụ, liên hệ (Hotline/Email), liên kết mạng xã hội, bản quyền. |

---

### 2.2. Hệ thống Thiết kế (Design Tokens)

1. **Màu sắc (Color Palette):**
   - `--color-primary-navy`: `#0E2A6D` (Màu nền thương hiệu chính).
   - `--color-primary-navy-dark`: `#091B48` (Tông xanh đậm ở các vùng chuyển sắc).
   - `--color-primary-navy-light`: `#1C48B2` (Điểm sáng của gradient).
   - `--color-accent-yellow`: `#FDB813` (Màu vàng rực rỡ ở Hero & Button).
   - `--color-accent-yellow-bg`: `#F6BD26` (Màu vàng ấm áp phủ toàn bộ Section 03).
   - `--color-bg-cream`: `#FBF8F2` (Màu ngà ấm áp cho Section 01).
   - `--color-text-white`: `#FFFFFF`
   - `--color-text-dark`: `#0F172A` (Chữ màu xanh than đậm trên nền sáng/nền vàng).
   - `--color-text-muted`: `#64748B` (Chữ mô tả phụ).
   - `--color-card-bg`: `#FFFFFF`
   - `--color-badge-bg`: `#EEF2F6` (Màu nền cho các pill `01`, `02`, `03`).

2. **Kiểu chữ (Typography):**
   - **Font chữ đề xuất:** `Plus Jakarta Sans` (Google Fonts) kết hợp font hệ thống dự phòng `system-ui, -apple-system, sans-serif`. `Plus Jakarta Sans` có hình học hiện đại, hiển thị dấu tiếng Việt sắc nét, tròn trịa, rất hợp với định vị "nhóm sinh viên trẻ trung, chỉn chu".
   - **Tỷ lệ cỡ chữ (Scale):**
     - Hero H1: `2.75rem - 3.25rem` (44px - 52px trên desktop, 30px - 34px trên mobile), `font-weight: 800`, `line-height: 1.15`.
     - Section H2: `2rem - 2.5rem` (32px - 40px trên desktop, 24px - 28px trên mobile), `font-weight: 700`, `line-height: 1.25`.
     - Card Title: `1.2rem - 1.35rem` (19px - 22px), `font-weight: 700`.
     - Body Text: `0.95rem - 1.05rem` (15px - 16.5px), `line-height: 1.65`.

3. **Bo góc (Border Radius):**
   - Nút bấm & Pill tag: `9999px` (Bo tròn dạng viên thuốc tuyệt đối).
   - Thẻ dịch vụ & thẻ giải pháp: `20px` (`1.25rem`).
   - Khung ảnh lớn (About section): `24px` (`1.5rem`).
   - Huy hiệu số (`01`, `02`): `8px` hoặc `9999px`.

4. **Bóng đổ & Hiệu ứng chiều sâu (Shadows):**
   - `--shadow-card`: `0 12px 32px -6px rgba(14, 42, 109, 0.08)`.
   - `--shadow-card-hover`: `0 20px 40px -8px rgba(14, 42, 109, 0.16)`.
   - `--shadow-pill-btn`: `0 4px 14px rgba(253, 184, 19, 0.35)`.

---

## 3. Kết quả gọi thử & Xác minh WordPress REST API

### 3.1. Thông số kiểm thử thực tế
- **Endpoint gọi thử:** `https://share4happy.com/wp-json/wp/v2/posts?categories=208&per_page=5&_embed`
- **Thời gian phản hồi:** ~1.2 giây (HTTP status `200 OK`).
- **Số lượng bài trả về:** Đúng 5 bài viết.

### 3.2. Kiểm tra CORS (Cross-Origin Resource Sharing)
Đã thực hiện gửi HTTP Request với tiêu đề `Origin: https://mysite.github.io`:
- **Kết quả trả về từ máy chủ `share4happy.com`:**
  - `access-control-allow-origin: https://mysite.github.io`
  - `access-control-allow-credentials: true`
  - `access-control-allow-methods: OPTIONS, GET, POST, PUT, PATCH, DELETE`
- **Kết luận:** Máy chủ WordPress đã cấu hình CORS động (echo origin) cho phép truy cập từ mọi domain. Trình duyệt khi chạy trên GitHub Pages hoặc `localhost` hoàn toàn **không bị lỗi CORS**.

### 3.3. Dữ liệu thực tế & Phương án xử lý

| Trường dữ liệu từ API | Giá trị thực tế quan sát được | Cách xử lý trong code (`posts.js`) |
|:---|:---|:---|
| `id` | Số nguyên (ví dụ: `4706`, `4704`, ...) | Lưu trực tiếp `id`. |
| `link` | URL bài viết gốc (`https://share4happy.com/...`) | Dùng cho thẻ `<a>`, gắn `target="_blank"` và `rel="noopener noreferrer"`. |
| `date` | `2026-10-22T17:00:00` | Parse thành đối tượng Date và format theo chuẩn Việt Nam: `new Intl.DateTimeFormat('vi-VN', { dateStyle: 'medium' })` (VD: `22 thg 10, 2026`). |
| `title.rendered` | VD: `Nhựa Resin Trong In 3D Là Gì? Ưu Điểm, Ứng Dụng Và Dịch Vụ In 3D` | Dùng `DOMParser().parseFromString(..., 'text/html').body.textContent` để loại bỏ HTML entities an toàn. Tuyệt đối không dùng `innerHTML`. |
| `excerpt.rendered` | Chứa thẻ `<p>`, `&hellip;` | Dùng `DOMParser` trích xuất `textContent`, cắt ngắn tối đa 90 ký tự + `...` để thẻ cân đối. |
| `_embedded['wp:featuredmedia'][0]` | Có đầy đủ trường `source_url`: `https://share4happy.com/wp-content/uploads/2026/10/image-19.png` | Lấy `source_url`. Nếu bài nào không có ảnh (hoặc mảng rỗng), gán fallback về SVG placeholder `.img-placeholder` để tránh vỡ bố cục. |

---

## 4. Đề xuất Cấu trúc mã nguồn (Giai đoạn 2)

Cấu trúc dự kiến theo đúng chuẩn Vite Vanilla + tối ưu GitHub Pages:

```
snakemedia/
├── .github/
│   └── workflows/
│       └── deploy.yml              # CI/CD tự động build & deploy GitHub Pages
├── docs/
│   ├── ASSETS_TODO.md              # Bảng theo dõi assets & tiến độ ảnh
│   └── PROJECT_NOTES.md            # Tài liệu phân tích và quyết định kỹ thuật
├── public/
│   ├── 404.html                    # Trang fallback cho GitHub Pages
│   ├── favicon.svg                 # Favicon biểu tượng máy ảnh SnakeMedia
│   ├── og-image.jpg                # Khung ảnh OpenGraph chia sẻ MXH
│   ├── robots.txt                  # Cấu hình crawl bot SEO
│   └── sitemap.xml                 # Sơ đồ trang web
├── src/
│   ├── assets/
│   │   ├── icons/                  # Các icon SVG nội bộ (máy ảnh, sao, mũi tên...)
│   │   └── images/                 # Nơi chứa ảnh thật khi người dùng cung cấp
│   ├── partials/                   # Chia nhỏ file HTML để code sạch, dễ bảo trì:
│   │   ├── header.html             # Navigation bar + CTA
│   │   ├── hero.html               # Hero banner + Collage 4 ảnh
│   │   ├── about.html              # Section 01: Về SnakeMedia
│   │   ├── challenges.html         # Section 02: Khó khăn khách hàng
│   │   ├── solutions.html          # Section 03: Giải pháp từ nhóm sinh viên
│   │   ├── services.html           # Section 04: Gói dịch vụ
│   │   ├── posts-carousel.html     # Section WordPress Posts Marquee
│   │   ├── contact-form.html       # Section Đăng ký tư vấn / Báo giá
│   │   └── footer.html             # Chân trang & Thông tin liên hệ
│   ├── scripts/
│   │   ├── config.js               # Biến cấu hình (API URL, Category ID, timeout...)
│   │   ├── images.js               # Khai báo tập trung danh mục ảnh (theo quy tắc khung trước ảnh sau)
│   │   ├── menu.js                 # Xử lý mobile hamburger navigation & smooth scroll
│   │   ├── posts.js                # Fetch API WordPress, decode text, render thẻ & carousel marquee
│   │   ├── form.js                 # Validation form đăng ký, trạng thái gửi/thành công
│   │   └── main.js                 # Entry point khởi tạo toàn trang
│   └── styles/
│       ├── tokens.css              # Design tokens (màu, font, spacing, bo góc, shadow)
│       ├── base.css                # Reset CSS, typography cơ bản, container
│       ├── components.css          # Nút bấm, pills, badge, card, skeleton, placeholder
│       └── sections/
│           ├── header.css
│           ├── hero.css
│           ├── about.css
│           ├── challenges.css
│           ├── solutions.css
│           ├── services.css
│           ├── posts.css           # Marquee animation, pause on hover/focus, reduced-motion
│           ├── contact.css
│           └── footer.css
├── .env.example
├── .gitignore
├── index.html                      # File HTML chính ráp các partials
├── package.json                    # Cấu hình dự án, engines, scripts (dev, build, preview)
└── vite.config.js                  # Cấu hình Vite (hỗ trợ include partial HTML và dynamic base path)
```

---

## 5. Kế hoạch triển khai qua các Giai đoạn (Roadmap)

- **Giai đoạn 1 (Hiện tại):** Hoàn thành phân tích thiết kế, kiểm tra API & CORS, lập bảng assets `ASSETS_TODO.md` và tài liệu kỹ thuật `PROJECT_NOTES.md`. ⏸ *Dừng chờ duyệt.*
- **Giai đoạn 2 (Cấu trúc code):**
  - Khởi tạo dự án Vite (template vanilla), cài đặt plugin include HTML partials (`vite-plugin-html` hoặc `vite-plugin-handlebars` tối giản).
  - Thiết lập design tokens trong `tokens.css`, `base.css`, `components.css`.
  - Khởi tạo sẵn `config.js`, `images.js`, class `.img-placeholder`.
  - Thiết lập script GitHub Actions `deploy.yml`.
  - Kiểm tra `npm run dev` và `npm run build` chạy thành công.
- **Giai đoạn 3 (Xây dựng giao diện từng bước):**
  - Dựng Header + Hero (kèm collage khung ảnh chuẩn kích thước, badge xoay).
  - Dựng Section 01: Về SnakeMedia.
  - Dựng Section 02: Khó khăn khách hàng (3 thẻ trắng).
  - Dựng Section 03: Giải pháp nhóm sinh viên (Nền vàng, 3 thẻ có khung ảnh).
  - Dựng Section 04: Gói dịch vụ (Lưới 6 dịch vụ + thanh thông báo chân trang).
  - Dựng Section Carousel bài viết WordPress (Skeleton loading, marquee CSS trôi tự động vô tận, pause on hover/focus, fallback lỗi).
  - Dựng Section Form đăng ký nhận tư vấn & Footer.
- **Giai đoạn 4 (Responsive & Accessibility):**
  - Test trên các viewport: 320, 375, 390, 430, 768, 1024, 1440, 1920px.
  - Tối ưu swipe cảm ứng cho carousel trên mobile, menu hamburger, hỗ trợ điều hướng bàn phím (tabindex, focus visible).
  - Xử lý chế độ `prefers-reduced-motion`.
- **Giai đoạn 5 (SEO kỹ thuật):**
  - Metadata OpenGraph, Twitter Card, thẻ canonical, thẻ H1 duy nhất, cấu trúc ngữ nghĩa semantic HTML5.
  - `robots.txt`, `sitemap.xml`, `404.html`.
- **Giai đoạn 6 (Kiểm thử & Tối ưu):**
  - Test build preview với `base` tương đối hoặc repo name.
  - Kiểm tra không lỗi console, không tràn màn hình ngang.
- **Giai đoạn 7 (Bàn giao):**
  - Báo cáo tổng kết, tài liệu hướng dẫn vận hành và cập nhật trong `README.md`.
- **Giai đoạn 8 (Bổ sung ảnh):**
  - Sẽ kích hoạt khi bạn gửi bộ ảnh thật vào thư mục `src/assets/images/`.

---

## 6. Các câu hỏi xác nhận cần bạn duyệt trước khi sang Giai đoạn 2

1. **Vị trí của Section Carousel bài viết WordPress:**
   - *Đề xuất:* Đặt ngay sau **Section 04: Gói dịch vụ** và ngay trước **Section Form đăng ký tư vấn**.
   - *Kiểu hiển thị:* Tiêu đề "Bài viết & Tin tức mới nhất", thẻ bài viết chuẩn gồm ảnh thu nhỏ tỷ lệ 16:10 ở trên, tên bài viết ở dưới kèm ngày đăng, trôi ngang tự động mượt mà.
2. **Form đăng ký nhận tư vấn:**
   - Vì bạn báo "Form (nếu có): cấp sau", tôi sẽ dựng sẵn giao diện khung form chuyên nghiệp (Họ tên, Số điện thoại/Zalo, Dịch vụ quan tâm, Lời nhắn) với client validation và thông báo mẫu khi gửi thành công. Khi bạn có backend/Google Sheet/Webhook, chỉ cần cấu hình URL gửi trong `config.js`.
3. **Tên Repository GitHub Pages:**
   - Bạn dự kiến deploy với tên repo nào trên GitHub (ví dụ: `https://<username>.github.io/snakemedia/` hay tên khác) để cấu hình đường dẫn `base: '/snakemedia/'` trong `vite.config.js` chuẩn xác ngay từ đầu?
