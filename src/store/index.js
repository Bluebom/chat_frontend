import { createStore } from "vuex";
import router from "@/router";
import utils from "@/assets/js/utils";

export default createStore({
  modules: {
    user: {
      namespaced: true,
      state: () => ({
        data: {},
        token: sessionStorage.getItem("TOKEN"),
      }),
      getters: {},
      mutations: {
        LOGOUT(state) {
          state.data = {};
          state.token = null;
          sessionStorage.removeItem("TOKEN");
          router.push("Login");
        },
        SETUSER(state, data) {
          state.token = data.token;
          state.data = data.user;
          sessionStorage.setItem("TOKEN", state.token);
          router.push("Dashboard");
        },
      },
      actions: {
        register: ({ commit }, user) => utils.auth("register", user, commit),
        login: ({ commit }, user) => utils.auth("login", user, commit),
      },
    },
    flash: {
      state: () => [],
      mutations: {
        CLEARFLASH(state) {
          state.flash = [];
        },
      },
      actions: {
        login: ({ commit }) => commit("CLEARFLASH"),
      },
    },
  },
});
