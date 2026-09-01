# MELLOWEE Multi-page Website

멜로위 PC 시안을 HTML, CSS, JavaScript로 구현한 GitHub Pages용 정적 멀티페이지 웹사이트입니다.

## 실행 방법

`index.html`을 브라우저에서 열거나 프로젝트 폴더에서 로컬 서버를 실행합니다.

```bash
python3 -m http.server 4173
```

브라우저에서 `http://localhost:4173`으로 접속합니다.

## 파일 구성

- `index.html`: 페이지 전체 구조
- `product-list.html`: 상품리스트 페이지
- `product-detail.html`: 구매·상품상세 페이지
- `login.html`: 로그인 페이지
- `recently-viewed.html`: 최근 본 상품 페이지
- `brand-story.html`: 브랜드스토리 페이지
- `tokens.css`: 멜로위 컬러·텍스트 디자인 토큰
- `styles.css`: PC 메인 페이지 스타일
- `pages.css`: 서브페이지 및 반응형 스타일
- `script.js`: 메인 슬라이드 및 검색창 동작
- `components.js`: 공통 헤더·푸터·검색창
- `pages.js`: 필터·정렬·상품옵션·탭·로그인·삭제 동작
- `assets/`: 배너, 상품, 이벤트, 브랜드 스토리, 룩북 이미지

## 구현 섹션

- PC 헤더와 전체 메뉴
- 5장 자동 재생 메인 슬라이드
- NEW ITEMS
- BEST 상품 목록
- 브랜드 스토리
- INSTAGRAM 이벤트 카드
- LOOK BOOK
- 푸터

## GitHub Pages

이 폴더 안의 파일과 폴더를 저장소 최상단에 올린 다음 `Settings → Pages → Deploy from a branch → main / (root)`로 설정합니다.
