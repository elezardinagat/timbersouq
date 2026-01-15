/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        timber: {
          brown: '#8B5A3C',
          'dark-brown': '#5D4037',
          green: '#2E5C3E',
          'dark-green': '#1B3D2A',
          charcoal: '#2C2C2C',
          cream: '#F5F1E8',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Responsive font sizes
        'responsive-xs': ['clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)', { lineHeight: '1.5' }],
        'responsive-sm': ['clamp(0.875rem, 0.8rem + 0.375vw, 1rem)', { lineHeight: '1.5' }],
        'responsive-base': ['clamp(1rem, 0.9rem + 0.5vw, 1.3rem)', { lineHeight: '1.6' }],
        'responsive-lg': ['clamp(1.125rem, 1rem + 0.625vw, 1.5rem)', { lineHeight: '1.6' }],
        'responsive-xl': ['clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem)', { lineHeight: '1.5' }],
        'responsive-2xl': ['clamp(1.5rem, 1.25rem + 1.25vw, 2.25rem)', { lineHeight: '1.4' }],
        'responsive-3xl': ['clamp(1.875rem, 1.5rem + 1.875vw, 3rem)', { lineHeight: '1.3' }],
        'responsive-4xl': ['clamp(2.25rem, 1.75rem + 2.5vw, 4rem)', { lineHeight: '1.2' }],
      },
    },
  },
  plugins: [],
}
