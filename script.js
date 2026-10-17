const playground = document.querySelector('.playground');
let variant = 0;
playground.addEventListener('click', () => {
  variant = (variant + 1) % 4;
  playground.dataset.variant = String(variant);
});
