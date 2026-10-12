import '../scss/main.scss';

// Toggle tema dark / light
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light');
  themeBtn.textContent = isLight ? '☀️' : '🌙';
});

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')),
  { threshold: 0.15 }
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Nilai range
const range = document.getElementById('range');
const rangeValue = document.getElementById('rangeValue');
range.addEventListener('input', () => (rangeValue.textContent = range.value));

// Form status
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.className = 'form-status success';
  status.textContent = 'Pesan berhasil dikirim!';
});
