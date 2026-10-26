import { CONFIG } from './config.js';

/**
 * Xử lý Form đăng ký tư vấn
 */
export function initContactForm() {
  const form = document.querySelector('.contact-form');
  const statusBox = document.querySelector('.form-status-message');
  const submitBtn = form?.querySelector('button[type="submit"]');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = form.querySelector('#client-name');
    const contactInput = form.querySelector('#client-contact');
    const serviceInput = form.querySelector('#client-service');

    const name = nameInput?.value.trim();
    const contact = contactInput?.value.trim();
    const service = serviceInput?.value.trim() || 'Tư vấn tổng thể';

    if (!name) {
      showStatus('Vui lòng nhập họ và tên của bạn.', 'error');
      nameInput?.focus();
      return;
    }

    if (!contact) {
      showStatus('Vui lòng nhập số điện thoại hoặc email để nhóm liên hệ.', 'error');
      contactInput?.focus();
      return;
    }

    // Trạng thái Loading
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.dataset.originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `
        <span class="btn-spinner" aria-hidden="true"></span>
        Đang gửi yêu cầu...
      `;
    }

    try {
      if (CONFIG.form.endpoint) {
        const res = await fetch(CONFIG.form.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, contact, service, timestamp: new Date().toISOString() })
        });
        if (!res.ok) throw new Error('Network response was not ok');
      } else {
        // Giả lập độ trễ ngắn nếu chưa có webhook backend
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      showStatus('Cảm ơn bạn! SnakeMedia đã nhận thông tin và sẽ liên hệ tư vấn sớm nhất.', 'success');
      form.reset();
    } catch (err) {
      console.error('[SnakeMedia Form] Submit failed:', err);
      showStatus('Có lỗi xảy ra khi gửi thông tin. Bạn có thể liên hệ trực tiếp hotline hoặc Zalo để được hỗ trợ nhanh.', 'error');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = submitBtn.dataset.originalText || 'Gửi yêu cầu tư vấn ↗';
      }
    }
  });

  function showStatus(message, type) {
    if (!statusBox) return;
    statusBox.textContent = message;
    statusBox.className = `form-status-message is-${type}`;
    statusBox.style.display = 'block';
  }
}
