export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
    primary: "#3b82f6",   // electric blue
    accent: "#facc15",    // gold
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
