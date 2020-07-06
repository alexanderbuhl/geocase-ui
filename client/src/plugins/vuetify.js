import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#FFA000",
        secondary: "#607D8B",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        mineral: "#E91E63",
        rock: "#0288D1",
        meteorite: "#689F38"
      }
    }
  },
  icons: {
    iconfont: "fa"
  }
});
