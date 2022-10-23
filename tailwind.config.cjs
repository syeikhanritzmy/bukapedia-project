/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sx: '330px',
      // => @media (min-width: 330px) { ... }

      xs: '360px',
      // => @media (min-width: 360px) { ... }

      ms: '480px',
      // => @media (min-width: 480px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      notosans: ['Noto Sans', 'sans-serif'],
      sans: ['ui-sans-serif', 'system-ui'],
    },
    extend: {},
  },
  plugins: [],
}
