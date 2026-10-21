const caseFrame = document.getElementById('interaction-cases');
function syncCaseHeight() {
  try {
    const main = caseFrame?.contentDocument?.querySelector('main');
    if (main) caseFrame.style.height = `${Math.ceil(main.getBoundingClientRect().bottom + caseFrame.contentWindow.scrollY)}px`;
  } catch (_) {
    // Local file previews may need the postMessage path instead.
  }
}
caseFrame?.addEventListener('load', syncCaseHeight);
window.addEventListener('resize', syncCaseHeight);
syncCaseHeight();
window.addEventListener('message', (event) => {
  if (!caseFrame || event.source !== caseFrame.contentWindow) return;
  if (location.protocol !== 'file:' && event.origin !== location.origin) return;
  if (event.data?.type !== 'interaction-cases-height') return;
  const height = event.data.height;
  if (Number.isFinite(height) && height >= 100 && height <= 10000) {
    caseFrame.style.height = `${Math.ceil(height)}px`;
  }
});
