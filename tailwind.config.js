const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "sunset-gradient": "linear-gradient(135deg, #14b8a6 0%, #06b6d4 40%, #f59e0b 100%)",
      },
    },
  },
  plugins: [nextui()],
};
