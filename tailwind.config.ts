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
