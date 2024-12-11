const { config } = require('@configs/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // 기본 설정 확장
  ...config,
  // 현재 프로젝트의 content 경로 지정
  content: [
    "./atom/**/*.{js,ts,jsx,tsx}",
    // 다른 컴포넌트 디렉토리도 추가
  ],
} 