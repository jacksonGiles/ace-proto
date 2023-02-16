import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      dark: {
        primary: "#DAF3F9",
        secondary: "#fe4a49",
        accent: "#1fc94f",
        error: "#b71c1c",
      },
      light: {
        primary: "#1A86F4",
        secondary: "#fe4a49",
        accent: "#1d204d",
        error: "#b71c1c",
      },
    },
  },
});
