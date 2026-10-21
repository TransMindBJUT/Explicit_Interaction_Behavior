const caseFrame = document.getElementById('interaction-cases');
window.addEventListener('message', (event) => {
  if (!caseFrame || event.source !== caseFrame.contentWindow) return;
  if (location.protocol !== 'file:' && event.origin !== location.origin) return;
  if (event.data?.type !== 'interaction-cases-height') return;
  const height = event.data.height;
  if (Number.isFinite(height) && height >= 100 && height <= 10000) {
    caseFrame.style.height = `${Math.ceil(height)}px`;
  }
});
