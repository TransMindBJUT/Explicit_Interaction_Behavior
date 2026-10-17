const viewer = document.querySelector('#viewer');
const animationToggle = document.querySelector('#animation-toggle');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let animationPlaying = false;
function setAnimationPlaying(playing) {
  animationPlaying = playing;
  document.querySelectorAll('[data-animation]').forEach(image => {
    image.src = `static/images/${image.dataset.animation}-${playing ? 'animated' : 'concept'}.svg?v=keep-arrows-10`;
  });
  animationToggle.textContent = playing ? 'Stop animation' : 'Play animation';
  animationToggle.setAttribute('aria-pressed', String(playing));
}
animationToggle.addEventListener('click', () => setAnimationPlaying(!animationPlaying));
reducedMotion.addEventListener('change', event => { if (event.matches) setAnimationPlaying(false); });
setAnimationPlaying(!reducedMotion.matches);
document.querySelectorAll('a.zoom').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const image = link.querySelector('img');
    document.querySelector('#viewer-image').src = link.href;
    document.querySelector('#viewer-image').alt = image.alt;
    document.querySelector('#viewer-caption').textContent =
      link.dataset.caption || link.closest('figure').querySelector('figcaption')?.textContent || image.alt;
    viewer.showModal();
  });
});
viewer.addEventListener('click', event => {
  if (event.target !== viewer) return;
  const bounds = viewer.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) viewer.close();
});
