import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts', // 라이브러리의 진입점
      name: 'index', // 라이브러리 이름
      fileName: (format) => `index.${format}.js`, // 출력 파일 이름
    },
    rollupOptions: {
      // 외부 종속성 설정
      external: ['react', 'react-dom'], // 외부 라이브러리
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
