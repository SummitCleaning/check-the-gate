// mobile menu
const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
if (btn) btn.addEventListener('click', () => menu.classList.toggle('open'));

// scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// contact form (demo — no backend)
const form = document.querySelector('#contact-form');
if (form) form.addEventListener('submit', (e) => {
  e.preventDefault();
  const note = document.querySelector('#form-note');
  note.textContent = "Thanks — we'll be in touch within two business days.";
  note.style.color = 'var(--ink)';
  form.reset();
});
