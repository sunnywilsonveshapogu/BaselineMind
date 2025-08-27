export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",    // calm blue
        secondary: "#10b981",  // emerald green
        accent: "#0ea5e9",     // sky blue accent
        warning: "#f59e0b",    // amber
        danger: "#ef4444",     // red
        background: "#f8fafc", // slate-50
        surface: "#ffffff"     // white surface
      }
    }
  },
  plugins: [],
};
