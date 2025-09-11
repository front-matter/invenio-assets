module.exports = {
  content: [
    "./static/templates/**/*.html", // scan Jinja templates
    "./assets/js/**/*.js", // scan JS in frontend
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
