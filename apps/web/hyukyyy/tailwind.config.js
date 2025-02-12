/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../../packages/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {},
  important: true,
  plugins: [],
};
