// tailwind.config.cjs
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        animation: {
          smoke: "smoke 2s ease-out infinite", // تعریف انیمیشن smoke
        },
        keyframes: {
          smoke: {
            "0%": { opacity: "1", transform: "scale(1) translateY(0)" },
            "100%": { opacity: "0", transform: "scale(3) translateY(-50px)" },
          },
        },
      },
    },
    plugins: [],
  };