import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import macrosPlugin from "vite-plugin-babel-macros";
import tailwindcss from 'tailwindcss';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths(), macrosPlugin()],
    css: {
        postcss: {
            plugins: [tailwindcss()],
        },
    },
    server: {
        port: 8000
    }
})
