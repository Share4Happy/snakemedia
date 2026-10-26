# SnakeMedia - Landing Page Chuyên Nghiệp Cho Nhóm Sinh Viên Sáng Tạo

Landing page chất lượng cao, chuẩn SEO, responsive đa thiết bị, đạt chuẩn sản xuất (production-ready) cho thương hiệu **SnakeMedia**.

- **Công nghệ tối giản, hiệu năng cao:** Vite (Vanilla template) + HTML5 Semantic + CSS3 (Design Tokens qua CSS Custom Properties) + ES Modules.
- **Không thư viện cồng kềnh:** Không React/Vue, không Tailwind, không TypeScript. Marquee Carousel, Mobile Menu, Form validation được tự viết bằng CSS/JS thuần tối ưu 60fps.
- **Section WordPress API động:** Kết nối REST API `https://share4happy.com/wp-json/wp/v2/posts?categories=208&per_page=5&_embed`, tự động lướt marquee mượt mà, hỗ trợ tạm dừng (hover, focus, touch, nút WCAG), bảo mật chống XSS.
- **Quy tắc "khung trước, ảnh sau":** Quản lý tập trung tại `src/scripts/images.js` và đối chiếu trong `docs/ASSETS_TODO.md`.

---

## 1. Yêu cầu hệ thống

- **Node.js:** Phiên bản LTS `v20.0.0` trở lên (Đã kiểm thử trên `v22.15.1`).
- **Trình quản lý gói:** `npm` v10 trở lên.

---

## 2. Hướng dẫn cài đặt & Khởi chạy

### Cài đặt thư viện
```bash
npm install
```

### Chạy môi trường phát triển (Dev Server)
```bash
npm run dev
```
Trình duyệt sẽ mở tại `http://localhost:5173/`. Hỗ trợ Hot Module Replacement (HMR) cho cả file HTML partials, CSS và JavaScript.

### Build đóng gói sản xuất (Production Build)
```bash
npm run build
```
File tĩnh sau khi tối ưu và nén gzip sẽ nằm trong thư mục `dist/`.

### Xem trước bản build (Preview)
```bash
npm run preview
```
Khởi chạy máy chủ preview tại `http://localhost:4173/`.

---

## 3. Cấu trúc thư mục dự án

```
snakemedia/
├── .github/
│   └── workflows/
│       └── deploy.yml              # CI/CD tự động build & deploy GitHub Pages
├── docs/
│   ├── ASSETS_TODO.md              # Bảng theo dõi và quy cách hình ảnh
│   └── PROJECT_NOTES.md            # Tài liệu phân tích và kiến trúc kỹ thuật
├── public/
│   ├── 404.html                    # Trang fallback lỗi 404 cho GitHub Pages
│   ├── favicon.svg                 # Biểu tượng máy ảnh & chữ S của SnakeMedia
│   ├── robots.txt                  # Cấu hình bot tìm kiếm SEO
│   └── sitemap.xml                 # Sơ đồ trang web
├── src/
│   ├── assets/
│   │   ├── icons/                  # Các icon SVG nội bộ
│   │   └── images/                 # Chứa ảnh thật (khi bổ sung vào đây sẽ tự nhận diện)
│   ├── partials/                   # Tách nhỏ từng section HTML sạch sẽ:
│   │   ├── header.html             # Navigation bar + Mobile hamburger + CTA
│   │   ├── hero.html               # Hero banner + 4 ảnh collage + sticker badge
│   │   ├── about.html              # Section 01: Về SnakeMedia (nền kem)
│   │   ├── challenges.html         # Section 02: Khó khăn khách hàng (3 thẻ trắng)
│   │   ├── solutions.html          # Section 03: Giải pháp sinh viên (nền vàng)
│   │   ├── services.html           # Section 04: Gói dịch vụ (6 dịch vụ + notice box)
│   │   ├── portfolio.html          # Section 05: Sản phẩm & dự án thực tế (4 thẻ 2x2)
│   │   ├── planning.html           # Section 05.1: Quy trình dự án (4 bước + banner brief)
│   │   ├── pricing.html            # Section 06: Gói dịch vụ & Bảng giá (3 gói lựa chọn)
│   │   ├── deliverables.html       # Section 06.1: Đầu ra & Thông tin chuẩn bị
│   │   ├── why-us.html             # Section 07: Vì sao chọn SnakeMedia (3 thẻ giá trị)
│   │   ├── posts.html              # Section 08: Carousel bài viết WordPress
│   │   ├── contact.html            # Section 09: Form đăng ký tư vấn & báo giá
│   │   └── footer.html             # Chân trang & liên kết mạng xã hội
│   ├── scripts/
│   │   ├── config.js               # Biến cấu hình (API URL, Category ID, timeout...)
│   │   ├── images.js               # Quản lý tài nguyên ảnh & cơ chế "khung trước ảnh sau"
│   │   ├── menu.js                 # Xử lý mobile hamburger navigation & smooth scroll
│   │   ├── posts.js                # Fetch API WordPress, decode text, render thẻ & carousel marquee
│   │   ├── form.js                 # Validation form đăng ký, trạng thái gửi/thành công
│   │   └── main.js                 # Entry point khởi tạo toàn trang
│   └── styles/
│       ├── tokens.css              # Design tokens (màu, font, spacing, bo góc, shadow)
│       ├── base.css                # Reset CSS, typography cơ bản, container
│       ├── components.css          # Nút bấm, pills, badge, card, skeleton, placeholder
│       └── sections/               # CSS riêng cho từng section
├── .env.example                    # Mẫu cấu hình biến môi trường
├── .gitignore
├── index.html                      # File HTML chính ráp các partials
├── package.json                    # Cấu hình dự án, engines, scripts (dev, build, preview)
├── README.md                       # Tài liệu hướng dẫn
└── vite.config.js                  # Cấu hình Vite & plugin include HTML partials
```

---

## 4. Hướng dẫn bổ sung ảnh thật (Giai đoạn 8)

Khi có ảnh thật từ nhóm, bạn chỉ cần copy ảnh vào thư mục `src/assets/images/` đúng theo tên file quy định trong bảng [`docs/ASSETS_TODO.md`](docs/ASSETS_TODO.md):

1. `hero-grid-1.jpg`, `hero-grid-2.jpg`, `hero-grid-3.jpg`, `hero-grid-4.jpg` (Cụm 4 ảnh Hero)
2. `about-team.jpg` (Ảnh tập thể đội ngũ Section 01)
3. `solution-idea.jpg`, `solution-production.jpg`, `solution-digital.jpg` (3 ảnh Section 03)
4. `service-photo.jpg`, `service-creative.jpg`, `service-design.jpg`, `service-edit.jpg`, `service-livestream.jpg`, `service-social.jpg` (6 ảnh Section 04)

Hệ thống sẽ **tự động nạp ảnh thật vào đúng vị trí** mà không cần sửa đổi bất kỳ dòng code DOM nào!

---

## 5. Hướng dẫn Deploy lên GitHub Pages

1. Đẩy code lên GitHub repository của bạn:
   ```bash
   git init
   git add .
   git commit -m "feat: complete snakemedia landing page"
   git branch -M main
   git remote add origin https://github.com/<username>/<ten-repo>.git
   git push -u origin main
   ```
2. Trên giao diện GitHub:
   - Vào **Settings** > **Pages**.
   - Tại mục **Build and deployment** > **Source**, chọn **GitHub Actions**.
3. Workflow tại `.github/workflows/deploy.yml` sẽ tự động kích hoạt, build và xuất bản trang web.
4. Tùy chỉnh tên miền hoặc base path:
   - Nếu dùng repo thường dạng `https://<username>.github.io/<ten-repo>/`, GitHub Actions sẽ tự động nhận diện tên repo và thiết lập đường dẫn tương ứng.
   - Nếu dùng Custom Domain (ví dụ `snakemedia.vn`), vào Settings > Pages > Custom domain và thêm file `public/CNAME`.
