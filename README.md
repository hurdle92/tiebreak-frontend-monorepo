<img src="https://i.imgur.com/X3zXFla.png"/>

# Tiebeak Frontend Monorepo

Tiebreak Monorepo built with Turborepo, React, Next.js, React-Query, Zustand and so on.

<br/>
<br/>

# About The Project

### **[tiebreak-web](https://tiebreak.vercel.app/)**

테니스 다이어이랩 **타이브레이크**의 WEB 버전입니다. 앱의 랜딩 & 메인 페이지 역할을 담당하며 웹에서 보조적인 기능을 제공합니다.

<br/>

<a href="https://apps.apple.com/kr/app/%ED%83%80%EC%9D%B4%EB%B8%8C%EB%A0%88%EC%9D%B4%ED%81%AC/id6476483336">
<img src="https://tiebreak.vercel.app/_next/image?url=%2Fimages%2Fappstore.png&w=3840&q=75" height="58px">
</a>
<a href="https://play.google.com/store/apps/details?id=com.app.tiebreak&pcampaignid=web_share">
<img src="https://tiebreak.vercel.app/_next/image?url=%2Fimages%2Fplaystore.png&w=2048&q=75"  height="58px">
<a/>

<br/>
<br/>

# Key Features

- App 랜딩 및 진입 페이지 역할
- 데스크탑, 모바일 반응형 UI 제공
- 코트 검색 기능
- 코트 상세 페이지

<br/>

<img width="800" alt="image" src="https://github.com/hurdle92/pure-strike-fe/assets/168696334/304bf989-41f5-4c24-8e0c-f55fcad3081b">

<br/>

# Tech Stacks

- React
- Turborepo
- Next.js
- React-Query
- Zustand
- Styled-Components
- Supabase

<br/>

# Project Structure

<br/>

```
│
├── apps
│     └── tiebreak-web
│           └── src
│                 └── components
│                   └── layout
│                 └── page-modules
│                   └── home
│                       └── components
│                               └── Home
│                           └── core
│                               └── _requests
│                           └── types
│                 └── pages
│                   └── home
│                   └── courts
│                   └── ...
│                 └── stores
│                 └── constants
│                 └── utils
│                 └── styles
│
│     └── another_apps
│
├── packages
│     └── pure-strike-ui
│           └── src
│                 └── components
│                   └── Stack
│                   └── Button
│                   └── Flex
│                   └── Grid
│                   └── Image
│                   └── Stack
│                   └── Text
│                   └── TextField
│                   └── ...
│
│     └── eslint-settings (eslint related settings)
│     └── tsconfig-settings (tsconfig related settings)
│
├── turbo.json
├── env
└── README.md
```
