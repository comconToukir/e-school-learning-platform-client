module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    style: true,
    themes: ["cupcake", "black"],
    darkTheme: "black",
  }
};