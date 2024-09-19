import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        system: {
          blue10: "#001639",
          blue15: "#03234d",
          blue20: "#032d60",
          blue30: "#014486",
          blue40: "#0b5cab",
          blue50: "#0176d3",
          blue60: "#1b96ff",
          blue65: "#57a3fd",
          blue70: "#78b0fd",
          blue80: "#aacbff",
          blue90: "#d8e6fe",
          blue95: "#eef4ff",

          cloudblue10: "#001a28",
          cloudblue15: "#0a2636",
          cloudblue20: "#023248",
          cloudblue30: "#084968",
          cloudblue40: "#05628a",
          cloudblue50: "#107cad",
          cloudblue60: "#0d9dda",
          cloudblue65: "#08abed",
          cloudblue70: "#1ab9ff",
          cloudblue80: "#90d0fe",
          cloudblue90: "#cfe9fe",
          cloudblue95: "#eaf5fe",


          green10: "#071b12",
          green15: "#0c2912",
          green20: "#1c3326",
          green30: "#194e31",
          green40: "#396547",
          green50: "#2e844a",
          green60: "#3ba755",
          green65: "#41b658",
          green70: "#45c65a",
          green80: "#91db8b",
          green90: "#cdefc4",
          green95: "#ebf7e6",
          green100: "#202b23",
        },

      }
    },
  },
  plugins: [],
};
export default config;
