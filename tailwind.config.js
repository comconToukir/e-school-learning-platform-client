module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        workSans: ["Work Sans, sans-serif"],
        karla: ["Karla, sans-serif"]
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    style: true,
    themes: ["cupcake", "black"],
    darkTheme: "black",
  }
};