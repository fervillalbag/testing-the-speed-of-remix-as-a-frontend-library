import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "100dvh": "100dvh",
      },
    },
  },
  plugins: [],
} satisfies Config;
