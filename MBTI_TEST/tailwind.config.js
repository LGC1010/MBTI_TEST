/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        'screen/90': '90vh',
        'h/45r': '45rem'
      },
      width: {
        'w/800': '800px',
        'w/500': '500px',
        'screen/90': '90vw'
      },
      border: {
        'b/style': 'border: 1px solid #222'
      },
      colors: {
        'bg-blue': '#9cbfdb'
      }
    }
  },
  plugins: []
};
