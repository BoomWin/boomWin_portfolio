## [체험 하는 방법]
http://113.198.211.126:7000/boomWin_portfolio/

# 포트폴리오 웹사이트

HTML, CSS, JavaScript를 사용하여 구축한 현대적인 반응형 포트폴리오 웹사이트입니다. 전문적인 경험, 기술, 프로젝트, 그리고 성과를 깔끔하고 인터랙티브한 레이아웃으로 보여줍니다.

## 🌟 주요 기능

- **반응형 디자인**: 모든 기기(모바일, 태블릿, 데스크톱)에서 작동하는 완전 반응형 레이아웃
- **모던한 UI**: 부드러운 애니메이션이 있는 깔끔하고 전문적인 디자인
- **인터랙티브 섹션**:
  - About Me: 개인 및 전문적 정보
  - Skills: 기술적 전문성과 역량
  - Archiving: GitHub와 블로그 링크
  - Projects: 필터링 가능한 프로젝트 쇼케이스
  - Career: 전문적인 경험 타임라인
  - Awards: 학업 및 전문적 성과
  - Memories: 필터링 가능한 포토 갤러리

## 🛠 사용된 기술

- HTML5
- CSS3 (커스텀 속성과 flexbox/grid 레이아웃)
- JavaScript (ES6+)
- Google Fonts
- 동적 그리드 레이아웃을 위한 Masonry.js

## 📱 반응형 브레이크포인트

웹사이트는 다음과 같은 반응형 디자인 브레이크포인트를 사용합니다:

```css
/* 대형 데스크톱 (1400px 이상) */
@media (min-width: 1400px) { ... }

/* 데스크톱 (1200px ~ 1399px) */
@media (min-width: 1200px) and (max-width: 1399px) { ... }

/* 작은 데스크톱 & 가로 태블릿 (992px ~ 1199px) */
@media (min-width: 992px) and (max-width: 1199px) { ... }

/* 세로 태블릿 (768px ~ 991px) */
@media (min-width: 768px) and (max-width: 991px) { ... }

/* 큰 모바일 (576px ~ 767px) */
@media (min-width: 576px) and (max-width: 767px) { ... }

/* 작은 모바일 (575px 이하) */
@media (max-width: 575px) { ... }
```

## 📂 프로젝트 구조

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── circuit-background.jpg
    ├── github-logo.png
    ├── naver-blog.png
    ├── logo.jpg.png
    └── chanhyuk.jpg
```

## 🚀 주요 컴포넌트

### 네비게이션
- 상단 고정 네비게이션과 부드러운 스크롤링
- 현재 섹션 하이라이트 기능이 있는 반응형 메뉴

### 히어로 섹션
- 오버레이가 있는 전체 화면 히어로 섹션
- 프로필 이미지와 소개
- 애니메이션 콘텐츠 진입 효과

### 프로젝트 쇼케이스
- 필터링 가능한 프로젝트 그리드
- 메인/서브 프로젝트 토글
- 호버 효과가 있는 애니메이션 프로젝트 카드

### 경력 타임라인
- 전문적인 경험을 보여주는 시각적 타임라인
- 다양한 화면 크기에 대응하는 반응형 레이아웃
- 각 포지션별 프로젝트 상세 정보

### 인터랙티브 요소
- 맨 위로 가기 버튼
- 부드러운 스크롤 네비게이션
- 프로젝트와 추억 섹션의 인터랙티브 필터
- 카드와 버튼의 호버 효과

## 💻 설치 및 실행 방법

1. 저장소 복제:
```bash
git clone https://github.com/yourusername/portfolio.git
```

2. 프로젝트 디렉토리로 이동:
```bash
cd portfolio
```

3. index.html을 브라우저에서 열거나 로컬 서버 사용:
```bash
# Python 사용
python -m http.server 8000

# Node.js 사용
npx http-server
```

## 🔧 커스터마이징

### 색상
웹사이트는 CSS에서 수정 가능한 일관된 색상 스키마를 사용합니다:
- 주요 색상: #FF6B6B
- 보조 색상: #4FC3F7
- 텍스트: #333
- 배경: #fff

### 폰트
웹사이트는 다음 Google Fonts를 사용합니다:
- 메인: 'Noto Sans KR'
- 영문: 'Montserrat'
- 보조: 'Poppins'
- 숫자: 'Roboto'

## 📱 모바일 최적화

웹사이트는 다음과 같은 모바일 최적화 기능을 포함합니다:
- 터치 친화적인 네비게이션
- 반응형 이미지와 카드
- 작은 화면에 최적화된 타이포그래피
- 모바일 기기에 맞춘 간격과 레이아웃

## 🚀 성능 최적화

- 이미지 지연 로딩
- 더 나은 성능을 위한 최적화된 애니메이션
- 최소화된 CSS와 JavaScript
- 다양한 화면 크기에 대응하는 반응형 이미지

## 📄 브라우저 지원

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)
- 모바일 브라우저 (iOS Safari, 안드로이드 Chrome)

## 참고 출처
- 최덕경 - 님의 프론트 엔드 개발자 포트폴리오를 참고 하였습니다.
