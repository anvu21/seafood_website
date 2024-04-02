module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        
        
        primary: "#ffffff",
        secondary: "#0A426F",
        text_hover: "#7BC9EB",
        tertiary: "#EFEFEF",
        main: "#eff6ff",
        menu_ship: "#666666",
        'custom-blue': '#63C6EA',
        
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      fontFamily: {
        custom: ["'Gabarito'", 'sans-serif'],
      },
    },
  },
  plugins: [],
}
