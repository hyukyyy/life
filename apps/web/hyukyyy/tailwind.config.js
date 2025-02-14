/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../../packages/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      desktop: { min: '1280px' },
      laptop: { max: '1279px' },
      tablet: { max: '1023px' },
      fold: { max: '767px' },
      mobile: { max: '427px' },
    },
  },
  important: true,
  plugins: [],
};
