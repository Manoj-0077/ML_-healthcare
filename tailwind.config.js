/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f7f4',
          100: '#e4ebe4',
          200: '#cbdacb',
          300: '#a7bfa7',
          400: '#7fa07f',
          500: '#608460',
          600: '#4a684a',
          700: '#3d543d',
          800: '#324532',
          900: '#2a392a',
        },
        terracotta: {
          50: '#fdf7f5',
          100: '#faece6',
          200: '#f3d4c8',
          300: '#eab29e',
          400: '#df866a',
          500: '#d76442',
          600: '#c24b2a',
          700: '#a23b20',
          800: '#84321e',
          900: '#6d2b1b',
        },
        sand: {
          50: '#fdfcfb',
          100: '#f9f8f4',
          200: '#f1eee6',
          300: '#e5ded0',
          400: '#d4c7b3',
          500: '#c4b196',
          600: '#b29c7d',
          700: '#958165',
          800: '#7a6b55',
          900: '#645747',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'sanskrit-pattern': "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%239C92AC\\' fill-opacity=\\'0.05\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      }
    },
  },
  plugins: [],
}
