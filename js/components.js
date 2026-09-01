const headerRoot = document.querySelector("[data-site-header]");
const footerRoot = document.querySelector("[data-site-footer]");

const logoMarkup = `
  <span class="word-logo" aria-label="MELLOWEE">
    <span>M</span><span>E</span><span>L</span><span>L</span><span>O</span><span>W</span><span>E</span><span>E</span>
  </span>`;

const headerLogoMarkup = '<img src="./assets/mellowee-logo.svg" alt="MELLOWEE" />';

const icon = (name) => {
  const icons = {
    signup: '<path d="M15 19a6 6 0 0 0-12 0"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M16 11h6"/>',
    login: '<path d="M10 17l5-5-5-5M15 12H3"/><path d="M14 3h6v18h-6"/>',
    cart: '<path d="M3 4h2l2 11h10l2-7H6"/><circle cx="9" cy="19" r="1"/><circle cx="17" cy="19" r="1"/>',
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icons[name]}</svg>`;
};

if (headerRoot) {
  headerRoot.outerHTML = `
    <header class="site-header subpage-header">
      <div class="header-top page-shell">
        <a class="brand-logo" href="./index.html" aria-label="멜로위 홈">${headerLogoMarkup}</a>
        <ul class="utility-menu" aria-label="사용자 메뉴">
          <li><a href="./login.html#signup">${icon("signup")}<span>회원가입</span></a></li>
          <li><a href="./login.html">${icon("login")}<span>LOG IN</span></a></li>
          <li><a href="./recently-viewed.html">${icon("cart")}<span>CART</span></a></li>
        </ul>
      </div>
      <nav class="main-nav" aria-label="주요 메뉴">
        <ul class="page-shell">
          <li><a href="./brand-story.html">BRAND STORY</a></li>
          <li><a href="./product-list.html">COLLECTION</a></li>
          <li><a href="./product-list.html?category=newborn">NEW BORN (0-3개월)</a></li>
          <li><a href="./product-list.html?category=baby">BABY (0-3세)</a></li>
          <li><a href="./product-list.html?category=kids">KIDS (3-8세)</a></li>
          <li><a href="./product-list.html?category=junior">JUNIOR (8-13세)</a></li>
          <li><a href="./product-list.html?category=acc">ACC</a></li>
          <li><a href="./product-list.html?category=gift">GIFT SETS</a></li>
          <li><a href="./index.html#instagram">EVENT</a></li>
        </ul>
      </nav>
    </header>`;
}

if (footerRoot) {
  footerRoot.outerHTML = `
    <footer class="site-footer">
      <div class="footer-main page-shell">
        <div class="footer-brand">
          ${logoMarkup}
          <p class="footer-policy"><a href="#terms">이용약관</a> <a href="#privacy"><strong>개인정보처리방침</strong></a> <a href="#guide">이용안내</a></p>
          <p>상호명 (주)멜로위 &nbsp; 대표 MELLOWEE &nbsp; 개인정보관리책임자 멜로위</p>
          <p>주소 서울특별시 포근구 작은하루로 12 &nbsp; 사업자등록번호 000-00-0000</p>
          <p>이메일 hello@mellowy.co.kr &nbsp; 전화 070-0000-0000</p>
        </div>
        <div class="footer-links">
          <div><strong>공지사항</strong><a href="#faq">FAQ</a><a href="#inquiry">상품문의</a><a href="#vip">VIP 전용게시판</a></div>
          <div><strong>이벤트</strong><a href="#review">포토리뷰</a><a href="#attendance">출석체크</a><a href="#benefit">회원혜택</a><a href="#return">교환반품안내</a></div>
          <div><strong>고객지원</strong><a href="#one-to-one">1:1문의하기</a><a href="#faq">FAQ 자주 묻는 질문</a><a href="#safe">안전 거래 센터</a></div>
          <div class="customer-center"><strong>1588-1588</strong><p>평일 10:00 - 17:00 (주말 공휴일 휴무)</p><p>상담이 지연되는 경우 1:1 문의 이용 부탁드립니다.</p></div>
        </div>
      </div>
      <div class="payment page-shell"><strong>payments &nbsp; 구매안전서비스</strong><p>고객님께서는 안전거래를 위해 결제 시 구매안전 서비스를 이용하실 수 있습니다.</p><a href="#payment-check">가입 사실 확인하기</a></div>
      <p class="copyright">© 2026 MELLOWY. ALL RIGHTS RESERVED.</p>
    </footer>`;
}
