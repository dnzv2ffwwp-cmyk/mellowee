(() => {
  "use strict";

  if (window.__MELLOWEE_HEADER_INITIALIZED__) return;
  window.__MELLOWEE_HEADER_INITIALIZED__ = true;

  const MENU_DATA = {
    "BRAND STORY": {
      label: "BRAND STORY",
      depth2: [
        {
          title: "브랜드 소개",
          depth3: [
            "멜로위 소개",
            "브랜드 아이덴티티",
            "브랜드 슬로건",
          ],
        },
        {
          title: "멜로위 이야기",
          depth3: [
            "브랜드의 시작",
            "멜로위의 성장",
            "우리가 만드는 옷",
          ],
        },
        {
          title: "브랜드 철학",
          depth3: [
            "편안한 일상",
            "아이를 위한 디자인",
            "오래 입는 옷",
          ],
        },
        {
          title: "소재와 관리법",
          depth3: [
            "소재 안내",
            "세탁 방법",
            "보관 방법",
          ],
        },
        {
          title: "지속 가능성",
          depth3: [
            "친환경 소재",
            "지속가능한 생산",
            "패키지 이야기",
          ],
        },
      ],
    },

    "COLLECTION": {
      label: "COLLECTION",
      depth2: [
        {
          title: "2026 F/W 컬렉션",
          depth3: [
            "니트 컬렉션",
            "아우터 컬렉션",
            "데일리웨어",
            "홀리데이 룩",
          ],
        },
        {
          title: "2026 S/S 컬렉션",
          depth3: [
            "리넨 컬렉션",
            "플라워 컬렉션",
            "데일리웨어",
            "바캉스 룩",
          ],
        },
        {
          title: "2025 F/W 컬렉션",
          depth3: [
            "시즌 베스트",
            "니트웨어",
            "겨울 아우터",
            "시즌 룩북",
          ],
        },
        {
          title: "2025 S/S 컬렉션",
          depth3: [
            "시즌 베스트",
            "썸머웨어",
            "데일리웨어",
            "시즌 룩북",
          ],
        },
        {
          title: "데일리 컬렉션",
          depth3: [
            "데일리 베이직",
            "홈웨어",
            "외출복",
            "데일리 셋업",
          ],
        },
        {
          title: "시즌 아카이브",
          depth3: [
            "봄 컬렉션",
            "여름 컬렉션",
            "가을 컬렉션",
            "겨울 컬렉션",
          ],
        },
      ],
    },

    "NEW BORN (0-3개월)": {
      label: "NEWBORN (0-3개월)",
      depth2: [
        {
          title: "바디수트",
          depth3: [
            "반팔 바디수트",
            "긴팔 바디수트",
            "랩 바디수트",
            "패턴 바디수트",
          ],
        },
        {
          title: "롬퍼",
          depth3: [
            "반팔 롬퍼",
            "긴팔 롬퍼",
            "니트 롬퍼",
            "프릴 롬퍼",
          ],
        },
        {
          title: "상하의 세트",
          depth3: [
            "티셔츠 세트",
            "내의 세트",
            "니트 세트",
            "외출복 세트",
          ],
        },
        {
          title: "아우터",
          depth3: [
            "가디건",
            "니트 재킷",
            "후드 아우터",
            "패딩 아우터",
          ],
        },
        {
          title: "수면 웨어",
          depth3: [
            "배냇가운",
            "수면조끼",
            "파자마 세트",
            "스와들",
          ],
        },
        {
          title: "신생아 필수 아이템",
          depth3: [
            "배냇저고리",
            "속싸개",
            "블랭킷",
            "신생아 세트",
          ],
        },
      ],
    },

    "BABY (0-3세)": {
      label: "BABY (0-3세)",
      depth2: [
        {
          title: "상의",
          depth3: [
            "티셔츠",
            "셔츠",
            "블라우스",
            "맨투맨",
            "니트",
          ],
        },
        {
          title: "하의",
          depth3: [
            "팬츠",
            "쇼츠",
            "레깅스",
            "스커트",
            "블루머",
          ],
        },
        {
          title: "원피스",
          depth3: [
            "데일리 원피스",
            "플라워 원피스",
            "니트 원피스",
            "파티 원피스",
          ],
        },
        {
          title: "롬퍼",
          depth3: [
            "데일리 롬퍼",
            "오버롤",
            "니트 롬퍼",
            "썸머 롬퍼",
          ],
        },
        {
          title: "셋업",
          depth3: [
            "상하의 셋업",
            "니트 셋업",
            "스웨트 셋업",
            "시즌 셋업",
          ],
        },
        {
          title: "아우터",
          depth3: [
            "가디건",
            "재킷",
            "바람막이",
            "코트",
            "패딩",
          ],
        },
        {
          title: "파자마",
          depth3: [
            "반팔 파자마",
            "긴팔 파자마",
            "홈웨어",
            "수면 조끼",
          ],
        },
      ],
    },

    "KIDS (3-8세)": {
      label: "KIDS (3-8세)",
      depth2: [
        {
          title: "상의",
          depth3: [
            "티셔츠",
            "셔츠",
            "블라우스",
            "맨투맨",
            "후디",
          ],
        },
        {
          title: "하의",
          depth3: [
            "팬츠",
            "데님",
            "쇼츠",
            "스커트",
            "레깅스",
          ],
        },
        {
          title: "원피스",
          depth3: [
            "데일리 원피스",
            "플라워 원피스",
            "셔츠 원피스",
            "파티 원피스",
          ],
        },
        {
          title: "니트·가디건",
          depth3: [
            "풀오버 니트",
            "가디건",
            "니트 베스트",
            "터틀넥",
          ],
        },
        {
          title: "셋업",
          depth3: [
            "캐주얼 셋업",
            "니트 셋업",
            "스웨트 셋업",
            "스커트 셋업",
          ],
        },
        {
          title: "아우터",
          depth3: [
            "재킷",
            "바람막이",
            "트렌치 코트",
            "코트",
            "패딩",
          ],
        },
        {
          title: "라운지 웨어",
          depth3: [
            "홈웨어",
            "파자마",
            "스웨트 웨어",
            "이지 웨어",
          ],
        },
      ],
    },

    "JUNIOR (8-13세)": {
      label: "JUNIOR (8-13세)",
      depth2: [
        {
          title: "상의",
          depth3: [
            "티셔츠",
            "셔츠",
            "블라우스",
            "맨투맨",
            "후디",
          ],
        },
        {
          title: "하의",
          depth3: [
            "팬츠",
            "데님",
            "쇼츠",
            "스커트",
            "와이드 팬츠",
          ],
        },
        {
          title: "원피스",
          depth3: [
            "캐주얼 원피스",
            "셔츠 원피스",
            "니트 원피스",
            "파티 원피스",
          ],
        },
        {
          title: "스웨트·니트",
          depth3: [
            "맨투맨",
            "후디",
            "풀오버 니트",
            "가디건",
            "니트 베스트",
          ],
        },
        {
          title: "셋업",
          depth3: [
            "캐주얼 셋업",
            "스웨트 셋업",
            "니트 셋업",
            "스커트 셋업",
          ],
        },
        {
          title: "아우터",
          depth3: [
            "재킷",
            "바람막이",
            "트렌치 코트",
            "코트",
            "패딩",
          ],
        },
        {
          title: "라운지 웨어",
          depth3: [
            "홈웨어",
            "파자마",
            "스웨트 웨어",
            "이지 웨어",
          ],
        },
      ],
    },

    "ACC": {
      label: "ACC",
      depth2: [
        {
          title: "모자",
          depth3: [
            "캡",
            "버킷햇",
            "비니",
            "썬햇",
          ],
        },
        {
          title: "양말·타이즈",
          depth3: [
            "데일리 양말",
            "니삭스",
            "타이즈",
            "레깅스",
          ],
        },
        {
          title: "헤어 액세서리",
          depth3: [
            "헤어핀",
            "헤어밴드",
            "리본",
            "스크런치",
          ],
        },
        {
          title: "가방",
          depth3: [
            "미니백",
            "크로스백",
            "백팩",
            "토트백",
            "에코백",
          ],
        },
        {
          title: "신발",
          depth3: [
            "스니커즈",
            "메리제인",
            "샌들",
            "부츠",
          ],
        },
        {
          title: "블랭킷",
          depth3: [
            "코튼 블랭킷",
            "니트 블랭킷",
            "거즈 블랭킷",
            "시즌 블랭킷",
          ],
        },
        {
          title: "턱받이",
          depth3: [
            "데일리 턱받이",
            "프릴 턱받이",
            "스카프 턱받이",
            "방수 턱받이",
          ],
        },
      ],
    },

    "GIFT SETS": {
      label: "GIFT SETS",
      depth2: [
        {
          title: "신생아 선물",
          depth3: [
            "출산 선물 세트",
            "롬퍼 세트",
            "외출복 세트",
            "액세서리 세트",
            "액세서리 세트",
          ],
        },
        {
          title: "베이비 선물",
          depth3: [
            "데일리웨어 세트",
            "롬퍼 세트",
            "외출복 세트",
            "액세서리 세트",
          ],
        },
        {
          title: "생일 선물",
          depth3: [
            "베스트 아이템 세트",
            "원피스 세트",
            "셋업 세트",
            "액세서리 세트",
          ],
        },
        {
          title: "데일리 선물세트",
          depth3: [
            "홈웨어 세트",
            "데일리웨어 세트",
            "양말 세트",
            "액세서리 세트",
          ],
        },
        {
          title: "프리미엄 선물세트",
          depth3: [
            "프리미엄 뉴본 세트",
            "프리미엄 웨어 세트",
            "시즌 스페셜 세트",
            "시그니처 기프트",
          ],
        },
        {
          title: "기프트 카드",
          depth3: [
            "3만원권",
            "5만원권",
            "10만원권",
            "자유 금액권",
          ],
        },
      ],
    },

    "EVENT": {
      label: "EVENT",
      depth2: [
        {
          title: "신상품",
          depth3: [
            "이번 주 신상품",
            "이번 달 신상품",
            "시즌 신상품",
            "신상품 전체보기",
          ],
        },
        {
          title: "베스트 아이템",
          depth3: [
            "주간 베스트",
            "월간 베스트",
            "연령별 베스트",
            "카테고리별 베스트",
          ],
        },
        {
          title: "특별 기획전",
          depth3: [
            "시즌 기획전",
            "스타일링 기획전",
            "연령별 기획전",
            "스페셜 기획전",
          ],
        },
        {
          title: "시즌 세일",
          depth3: [
            "봄 시즌 세일",
            "여름 시즌 세일",
            "가을 시즌 세일",
            "겨울 시즌 세일",
          ],
        },
        {
          title: "회원 혜택",
          depth3: [
            "신규회원 혜택",
            "등급별 혜택",
            "생일 혜택",
            "쿠폰·적립금",
          ],
        },
      ],
    },
  };

  function initHeaderMenu() {
    const header = document.querySelector(".site-header");
    const mainNav = header?.querySelector(".main-nav");

    if (!header || !mainNav) return;

    const mainLinks = [
      ...mainNav.querySelectorAll(":scope > ul > li > a"),
    ];

    const desktopMedia =
      window.matchMedia("(min-width: 1025px)");

    const getMenuName = (link) =>
      link.textContent.trim().replace(/\s+/g, " ");

    const megaMenu = document.createElement("div");

    megaMenu.className = "mega-menu";
    megaMenu.setAttribute("aria-hidden", "true");
    megaMenu.innerHTML =
      `<div class="mega-menu__inner"></div>`;

    header.appendChild(megaMenu);

    const megaInner =
      megaMenu.querySelector(".mega-menu__inner");

    const resetMainActive = () => {
      mainLinks.forEach((link) =>
        link.classList.remove("is-mega-active")
      );
    };

    const resetDepth2Active = () => {
      megaInner
        .querySelectorAll(".mega-menu__column")
        .forEach((column) =>
          column.classList.remove("is-open")
        );
    };

    function renderMegaMenu(link, menu) {
      const parentHref =
        link.getAttribute("href") || "#";

      megaInner.style.setProperty(
        "--mega-column-count",
        menu.depth2.length + 1
      );

      megaInner.innerHTML = `
        <div class="mega-menu__root">
          <a
            class="mega-menu__root-title"
            href="${parentHref}"
          >
            ${menu.label}
          </a>
        </div>

        ${menu.depth2
          .map(
            (depth2, depth2Index) => `
              <div
                class="mega-menu__column"
                data-depth2-column="${depth2Index}"
              >
                <a
                  class="mega-menu__depth2-title"
                  href="${parentHref}"
                >
                  ${depth2.title}
                </a>

                <ul class="mega-menu__depth3">
                  ${depth2.depth3
                    .map(
                      (depth3) => `
                        <li>
                          <a href="${parentHref}">
                            ${depth3}
                          </a>
                        </li>
                      `
                    )
                    .join("")}
                </ul>
              </div>
            `
          )
          .join("")}
      `;
    }

    function openMegaMenu(link, menu) {
      resetMainActive();

      link.classList.add("is-mega-active");

      renderMegaMenu(link, menu);

      megaMenu.classList.add("is-open");

      megaMenu.setAttribute(
        "aria-hidden",
        "false"
      );
    }

    function closeMegaMenu() {
      megaMenu.classList.remove("is-open");

      megaMenu.setAttribute(
        "aria-hidden",
        "true"
      );

      resetMainActive();
    }

    megaInner.addEventListener(
      "mouseover",
      (event) => {
        if (!desktopMedia.matches) return;

        const column =
          event.target.closest(".mega-menu__column");

        if (!column) return;

        megaInner
          .querySelectorAll(".mega-menu__column")
          .forEach((item) => {
            if (item !== column) {
              item.classList.remove("is-open");
            }
          });

        column.classList.add("is-open");
      }
    );

    megaInner.addEventListener(
      "focusin",
      (event) => {
        const column =
          event.target.closest(".mega-menu__column");

        if (!column) return;

        resetDepth2Active();
        column.classList.add("is-open");
      }
    );

    const overlay = document.createElement("div");

    overlay.className = "header-menu-overlay";
    overlay.setAttribute("aria-hidden", "true");

    overlay.innerHTML = `
      <div
        class="header-menu-overlay__backdrop"
        data-overlay-close
      ></div>

      <section
        class="header-menu-overlay__panel"
        role="dialog"
        aria-modal="true"
      >
        <div class="header-menu-overlay__header">
          <button
            type="button"
            class="header-menu-overlay__back"
            data-overlay-back
            aria-label="뒤로가기"
            hidden
          >
            ←
          </button>

          <strong
            class="header-menu-overlay__title"
            data-overlay-title
          ></strong>

          <button
            type="button"
            class="header-menu-overlay__close"
            data-overlay-close
            aria-label="닫기"
          >
            ×
          </button>
        </div>

        <div
          class="header-menu-overlay__content"
          data-overlay-content
        ></div>
      </section>
    `;

    document.body.appendChild(overlay);

    const overlayTitle =
      overlay.querySelector("[data-overlay-title]");

    const overlayContent =
      overlay.querySelector("[data-overlay-content]");

    const overlayBack =
      overlay.querySelector("[data-overlay-back]");

    let activeMenu = null;
    let activeMainLink = null;

    function renderOverlayDepth2() {
      if (!activeMenu) return;

      overlayTitle.textContent =
        activeMenu.label;

      overlayBack.hidden = true;

      overlayContent.innerHTML = `
        <div class="overlay-depth2">
          ${activeMenu.depth2
            .map(
              (depth2, index) => `
                <button
                  type="button"
                  class="overlay-depth2__item"
                  data-overlay-depth2="${index}"
                >
                  <span>${depth2.title}</span>
                  <span
                    class="overlay-depth2__arrow"
                    aria-hidden="true"
                  >
                    ›
                  </span>
                </button>
              `
            )
            .join("")}

          <a
            class="overlay-view-all"
            href="${
              activeMainLink?.getAttribute("href") || "#"
            }"
          >
            전체보기
          </a>
        </div>
      `;
    }

    function renderOverlayDepth3(index) {
      if (!activeMenu) return;

      const depth2 =
        activeMenu.depth2[index];

      if (!depth2) return;

      overlayTitle.textContent =
        depth2.title;

      overlayBack.hidden = false;

      const parentHref =
        activeMainLink?.getAttribute("href") || "#";

      overlayContent.innerHTML = `
        <ul class="overlay-depth3">
          ${depth2.depth3
            .map(
              (depth3) => `
                <li>
                  <a href="${parentHref}">
                    ${depth3}
                  </a>
                </li>
              `
            )
            .join("")}
        </ul>
      `;
    }

    function openOverlay(link, menu) {
      activeMainLink = link;
      activeMenu = menu;

      renderOverlayDepth2();

      overlay.classList.add("is-open");

      overlay.setAttribute(
        "aria-hidden",
        "false"
      );

      document.body.classList.add(
        "header-overlay-open"
      );
    }

    function closeOverlay() {
      overlay.classList.remove("is-open");

      overlay.setAttribute(
        "aria-hidden",
        "true"
      );

      document.body.classList.remove(
        "header-overlay-open"
      );

      activeMainLink = null;
      activeMenu = null;
    }

    mainLinks.forEach((link) => {
      const menuName =
        getMenuName(link);

      const menu =
        MENU_DATA[menuName];

      link.addEventListener(
        "mouseenter",
        () => {
          if (!desktopMedia.matches) return;

          if (!menu) {
            closeMegaMenu();
            return;
          }

          openMegaMenu(link, menu);
        }
      );

      link.addEventListener(
        "click",
        (event) => {
          if (desktopMedia.matches) return;
          if (!menu) return;

          event.preventDefault();

          openOverlay(link, menu);
        }
      );
    });

    header.addEventListener(
      "mouseleave",
      () => {
        if (!desktopMedia.matches) return;
        closeMegaMenu();
      }
    );

    overlayContent.addEventListener(
      "click",
      (event) => {
        const button =
          event.target.closest(
            "[data-overlay-depth2]"
          );

        if (!button) return;

        const index =
          Number(
            button.dataset.overlayDepth2
          );

        renderOverlayDepth3(index);
      }
    );

    overlayBack.addEventListener(
      "click",
      renderOverlayDepth2
    );

    overlay.addEventListener(
      "click",
      (event) => {
        if (
          event.target.closest(
            "[data-overlay-close]"
          )
        ) {
          closeOverlay();
        }
      }
    );

    document.addEventListener(
      "keydown",
      (event) => {
        if (event.key !== "Escape") return;

        closeMegaMenu();
        closeOverlay();
      }
    );

    desktopMedia.addEventListener(
      "change",
      (event) => {
        if (event.matches) {
          closeOverlay();
        } else {
          closeMegaMenu();
        }
      }
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initHeaderMenu
    );
  } else {
    initHeaderMenu();
  }
})();