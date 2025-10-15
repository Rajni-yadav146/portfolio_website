document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const msg = document.getElementById('formMessage');
  msg.textContent = 'Thank you! Your message has been sent.';
  msg.style.color = 'green';
  this.reset();
});
const lightboxLinks = document.querySelectorAll('.lightbox');
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

lightboxLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    lightboxImg.src = this.href;
    lightboxOverlay.style.display = 'flex';
  });
});

lightboxClose.addEventListener('click', () => {
  lightboxOverlay.style.display = 'none';
});

lightboxOverlay.addEventListener('click', (e) => {
  if (e.target === lightboxOverlay) {
    lightboxOverlay.style.display = 'none';
  }
});
