// tailwind.config.js
import daisyui from 'daisyui';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customRed: "#ff0000",
        customBlue: "#4f87eb",
        labelBlue: "#1B71A2",
        focusColor: "#fde047",
      },
    },
  },
  plugins: [daisyui],
};
