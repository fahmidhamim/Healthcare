/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors:{
        'primary': "#5f6FFF"
      },
       gridTemplateColumns:{
        'auto':'repeat(auto-fill, minmax(200px, 1fr))'
       }
    },
  },
  plugins: [],
}