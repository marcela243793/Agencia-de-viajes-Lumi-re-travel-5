document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');
  if(menuToggle && nav){
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Animación de emojis en destinos
  const emojiFloat = document.getElementById('emoji-float');
  const destinos = document.querySelectorAll('.destinos-list li');

  destinos.forEach(item => {
    item.addEventListener('mouseenter', e => {
      const emoji = item.dataset.emoji;
      emojiFloat.textContent = emoji;
      const rect = item.getBoundingClientRect();
      emojiFloat.style.left = `${rect.left + rect.width / 2}px`;
      emojiFloat.style.top = `${rect.top - 30 + window.scrollY}px`;
      emojiFloat.style.opacity = '1';
      emojiFloat.style.transform = 'translateY(-10px)';
    });
    item.addEventListener('mouseleave', e => {
      emojiFloat.style.opacity = '0';
      emojiFloat.style.transform = 'translateY(0)';
    });
  });
});
