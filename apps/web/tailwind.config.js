export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#10b981",
        accent: "#6366f1",
        warning: "#f59e0b",
        danger: "#ef4444",
        background: "#111827",
        surface: "#1f2937",
        "text-primary": "#d1d5db",
        "text-secondary": "#9ca3af",
      },
      fontFamily: {
        sans: ["'Inter var'", "Inter", "sans-serif"],
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
