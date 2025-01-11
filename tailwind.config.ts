import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'satu': "url('/mas.png')",
        'footer': "url('/ftr.png')",
        'rambu' : "url('/rambu.jpg')",
        'kursi' : "url('/bg-kursi.jpg')",
        'pattern' : "url('/pattern-18.png')",
        'sign1' : "url('/sign1.jpg')",
        'sign2' : "url('/sign2.jpg')",
        'sign3' : "url('/sign3.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'blue' : "#041C40",
        'yellow' :'#F1B408',
        'gray' : '#D9D9D9'
      },
    },
  },
  plugins: [],
};
export default config;
