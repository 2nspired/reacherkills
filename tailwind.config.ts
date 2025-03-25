import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        bebas: ["var(--font-bebas)"],
        sometype: ["var(--font-sometype)", ...fontFamily.mono],
      },
    },
  },
  plugins: [],
} satisfies Config;
