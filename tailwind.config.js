/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '.src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '.src/app/components/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'custom-md': '960px',
      },
      colors: {
        violet: 'var(--color-violet)',
        'violet-light': 'var(--color-violet-light)',
      },
    },
  },
  plugins: [],
};
