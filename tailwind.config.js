/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px", // Petits mobiles (iPhone SE, etc.)
        xs2: "430px", // Mobiles moyens (iPhone 12/13, etc.)
        // sm: 640px (par défaut Tailwind)
        // md: 768px (par défaut Tailwind)
        // lg: 1024px (par défaut Tailwind)
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in",
        "fade-in-delayed": "fadeInDelayed 1.2s ease-out 0.5s forwards",
        "fade-in-up": "fadeInUp 1.5s ease-out forwards",
        bounce: "bounce 2s infinite",
        "heart-open": "heartOpen 1.5s ease-out forwards",
        "modal-appear": "modalAppear 0.8s ease-out 0.7s forwards",
        "heart-pulse": "heartPulse 2s ease-in-out infinite",
        "clapboard-open": "clapboardOpen 1.2s ease-out forwards",
        "spiral-out": "spiralOut 2.5s ease-out forwards",
        "spiral-out-sm": "spiralOutSm 2.5s ease-out forwards",
        "spiral-out-md": "spiralOutMd 2.5s ease-out forwards",
        "elegant-pulse": "elegantPulse 2.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDelayed: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        heartPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.1)", opacity: "0.9" },
        },
        clapboardOpen: {
          "0%": { transform: "rotateX(0deg) scale(1)", opacity: "1" },
          "50%": { transform: "rotateX(90deg) scale(1.2)", opacity: "0.8" },
          "100%": { transform: "rotateX(180deg) scale(2)", opacity: "0" },
        },
        heartOpen: {
          "0%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
          "50%": { transform: "scale(1.5) rotate(0deg)", opacity: "1" },
          "100%": { transform: "scale(2) rotate(45deg)", opacity: "0" },
        },
        modalAppear: {
          "0%": { opacity: "0", transform: "scale(0.8) translateY(20px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        spiralOut: {
          "0%": {
            transform: "rotate(0deg) translateX(0) scale(0)",
            opacity: "1",
          },
          "100%": {
            transform: "rotate(720deg) translateX(600px) scale(1.5)",
            opacity: "0",
          },
        },
        spiralOutSm: {
          "0%": {
            transform: "rotate(0deg) translateX(0) scale(0)",
            opacity: "1",
          },
          "100%": {
            transform: "rotate(720deg) translateX(300px) scale(1.8)",
            opacity: "0",
          },
        },
        spiralOutMd: {
          "0%": {
            transform: "rotate(0deg) translateX(0) scale(0)",
            opacity: "1",
          },
          "100%": {
            transform: "rotate(720deg) translateX(400px) scale(1.6)",
            opacity: "0",
          },
        },
        elegantPulse: {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow:
              "0 10px 25px -5px rgba(251, 191, 36, 0.4), 0 10px 10px -5px rgba(251, 191, 36, 0.2)",
          },
          "50%": {
            transform: "scale(1.05)",
            boxShadow:
              "0 30px 60px -5px rgba(251, 191, 36, 0.7), 0 25px 25px -5px rgba(251, 191, 36, 0.5), 0 0 40px rgba(251, 191, 36, 0.6)",
          },
        },
      },
    },
  },
  plugins: [],
};
