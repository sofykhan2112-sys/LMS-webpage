/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#190707",
        navy: "#7f1d1d",
        cyber: "#dc2626",
        azure: "#ef4444",
        mint: "#fff1f2",
        frost: "#fff7f7"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(220, 38, 38, 0.2)"
      }
    }
  },
  plugins: []
};
