import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      danaNormal: "danaNormal",
      danaBold: "danaBold",
      morabbaNormal: "morabbaNormal",
      morabbaBold: "morabbaBold",
    },
    extend: {},
  },
  plugins: [
    function ({
      addVariant,
    }: {
      addVariant: (name: string, definition: string) => void;
    }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
export default config;
