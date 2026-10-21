const caseFrame = document.getElementById('interaction-cases');
function syncCaseHeight() {
  try {
    const body = caseFrame?.contentDocument?.body;
    if (body) caseFrame.style.height = `${Math.ceil(body.scrollHeight)}px`;
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
