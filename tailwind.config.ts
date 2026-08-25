import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#042C53",   // hero / deep backgrounds
          deep: "#0C447C",   // icon tints, dark text-on-tint
          DEFAULT: "#185FA5",// primary accent (buttons, links, logo mark)
          mid: "#378ADD",    // hover states
          light: "#85B7EB",  // subtle accents on dark bg
          tint: "#E6F1FB",   // light backgrounds / badges
        },
        status: {
          critical: "#E24B4A",
          criticalBg: "#FCEBEB",
          criticalText: "#791F1F",
          high: "#EF9F27",
          highBg: "#FAEEDA",
          highText: "#633806",
          medium: "#888780",
          mediumBg: "#F1EFE8",
          mediumText: "#444441",
          success: "#639922",
          successBg: "#EAF3DE",
          successText: "#27500A",
        },
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
