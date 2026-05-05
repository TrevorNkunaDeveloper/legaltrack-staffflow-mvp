export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        colors: {
          brand: {
            navy: "#061E3A",
            navy2: "#082A4F",
            blue: "#2563EB",
            blueDark: "#1D4ED8",
            light: "#EFF6FF",
          },
        },
        boxShadow: {
          soft: "0 8px 24px rgba(15, 23, 42, 0.06)",
        },
      },
    },
    plugins: [],
  };