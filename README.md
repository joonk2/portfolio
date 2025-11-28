# Portfolio Website

Next.js와 Tailwind CSS를 사용한 포트폴리오 웹사이트입니다.

## 🚀 시작하기

### 설치

```bash
npm install
# 또는
yarn install
# 또는
pnpm install
```

### 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
npm run start
```

## 📁 프로젝트 구조

```
portfolio/
├── app/
│   ├── globals.css      # 전역 스타일
│   ├── layout.tsx       # 루트 레이아웃
│   └── page.tsx         # 메인 페이지
├── components/
│   ├── Navigation.tsx   # 네비게이션 바
│   ├── Hero.tsx         # 히어로 섹션
│   ├── About.tsx        # About Me 섹션
│   ├── Skills.tsx       # Skills 섹션
│   ├── Projects.tsx     # Projects 섹션
│   └── Contact.tsx      # Contact 섹션
├── public/              # 정적 파일
└── package.json
```

## 🛠️ 기술 스택

- **Next.js 14** - React 프레임워크
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 스타일링
- **React** - UI 라이브러리

## 📝 커스터마이징

### 색상 변경

`tailwind.config.js`에서 색상을 변경할 수 있습니다:

```js
colors: {
  primary: '#64ffda',    // 주요 색상
  secondary: '#ccd6f6',  // 보조 색상
  dark: '#0a192f',       // 배경 색상
  'dark-light': '#112240', // 카드 배경 색상
}
```

### 내용 수정

각 컴포넌트 파일에서 내용을 수정할 수 있습니다:
- `components/About.tsx` - About Me 내용
- `components/Skills.tsx` - Skills 내용
- `components/Projects.tsx` - Projects 내용
- `components/Contact.tsx` - Contact 정보

## 🚀 배포

Vercel에 배포하는 방법은 `VERCEL_DEPLOYMENT_GUIDE.md`를 참고하세요.

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 용도로 자유롭게 사용할 수 있습니다.

