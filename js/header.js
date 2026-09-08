(() => {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const nav = header.querySelector('.main-nav');
  const utility = header.querySelector('.utility-menu');
  const toggle = document.createElement('button');
  toggle.className = 'menu-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-label', '전체 메뉴 열기');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'mobile-menu');
  toggle.innerHTML = '<span></span><span></span><span></span>';
  header.querySelector('.header-top').prepend(toggle);

  const dialog = document.createElement('dialog');
  dialog.id = 'mobile-menu';
  dialog.className = 'menu-overlay';
  dialog.setAttribute('aria-labelledby', 'mobile-menu-title');
  const links = [...nav.querySelectorAll('a')];
  const categories = links.filter(link => link.href.includes('category='));
  dialog.innerHTML = `
    <div class="menu-overlay__panel">
      <div class="menu-overlay__top">
        <h2 id="mobile-menu-title">MENU<span>MELLOWEE</span></h2>
        <button type="button" class="menu-close" aria-label="전체 메뉴 닫기" autofocus>×</button>
      </div>
      <p class="menu-overlay__intro">아이의 작은 하루를 함께해요.</p>
      <nav class="overlay-nav" aria-label="전체 메뉴">
        <ul>${links.map(link => link.textContent.trim() === 'COLLECTION' ? `
          <li><details><summary>COLLECTION</summary><ul>
            <li><a href="${link.getAttribute('href')}">전체 상품</a></li>
            ${categories.map(category => `<li>${category.outerHTML}</li>`).join('')}
          </ul></details></li>` : `<li>${link.outerHTML}</li>`).join('')}
        </ul>
      </nav>
      <div class="menu-overlay__account" aria-label="사용자 메뉴">${[...utility.querySelectorAll('a, button')].map(item => item.outerHTML).join('')}</div>
      <p class="menu-overlay__signature">Little days, softly worn.</p>
    </div>`;
  document.body.append(dialog);
  let scrollY = 0;
  let savedStyle;
  const close = () => dialog.close();
  toggle.addEventListener('click', () => {
    scrollY = window.scrollY;
    savedStyle = document.body.getAttribute('style');
    dialog.showModal();
    Object.assign(document.body.style, { position: 'fixed', top: `-${scrollY}px`, width: '100%', overflow: 'hidden' });
    toggle.setAttribute('aria-expanded', 'true');
  });
  dialog.querySelector('.menu-close').addEventListener('click', close);
  dialog.addEventListener('click', event => {
    if (event.target === dialog || event.target.closest('a')) close();
  });
  dialog.addEventListener('close', () => {
    if (savedStyle === null) document.body.removeAttribute('style');
    else document.body.setAttribute('style', savedStyle);
    window.scrollTo({ top: scrollY, behavior: 'instant' });
    toggle.setAttribute('aria-expanded', 'false');
    if (toggle.getClientRects().length) toggle.focus({ preventScroll: true });
  });
  const desktop = window.matchMedia('(min-width: 1025px)');
  desktop.addEventListener('change', () => {
    if (desktop.matches && dialog.open) close();
  });
})();
