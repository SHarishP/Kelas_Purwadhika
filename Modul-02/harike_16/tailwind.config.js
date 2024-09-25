/** @type {import('tailwindcss').Config} */
export default {
  // Supaya file kita bisa menggunakan tailwind utility, harus dimasukkan kedalam content:[]
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  /* 
    ** berfungsi untuk membaca seluruh file maupun folder
  */

  theme: {
    extend: {},
  },
  plugins: [],
}

