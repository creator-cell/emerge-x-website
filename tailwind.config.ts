import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1280px",
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGreen: "#3DA229",
      },
      boxShadow: {
        customNavbarShadow: '0px 4px 22.1px 3px #00000026',
        customHeroShadow:  '0px 4px 22.1px 3px #00000026',
      },
      backgroundImage: {
        'hero-blog': "url('/blogs/hero-blog.png')",
      },
    },
  },
  plugins: [],
};
export default config;
