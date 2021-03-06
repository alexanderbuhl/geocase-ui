import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import search from "./modules/search";
import detail from "./modules/detail";
import settings from "./modules/settings";
import frontpage from "./modules/frontpage";
import cookie from "./modules/cookie";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  key: "GeoCASE_v1.0.0",
  storage: window.localStorage,
  reducer: state => ({ cookie: state.cookie })
});

export default new Vuex.Store({
  modules: {
    search,
    detail,
    settings,
    frontpage,
    cookie
  },
  plugins: [vuexLocal.plugin],
  strict: process.env.NODE_ENV !== "production"
});
