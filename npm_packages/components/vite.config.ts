import { defineConfig } from 'vite'
import postcss from './postcss.config.js'

export default defineConfig({
  css: {
    postcss
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'components',
      formats: ['es'],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        assetFileNames: 'index.[ext]'
      }
    },
    cssCodeSplit: false
  }
}) 