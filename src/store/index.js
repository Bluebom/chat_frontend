import { createStore } from "vuex";
import router from "@/router";
import axios from "axios";

export default createStore({
  modules: {
    user: {
      namespaced: true,
      state: () => ({
        data: {},
        token: null,
      }),
      getters: {},
      mutations: {
        LOGOUT(state) {
          state.data = {};
          state.token = null;
          router.push("Login");
        },
      },
      actions: {
        register({ commit }, user) {
          axios
            .post("http://chat-backend/api/register", user, {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            })
            .then((res) => console.log(res.data))
            .catch(($evt) => alert($evt.message));
          console.log(commit);
        },
      },
    },
  },
});
