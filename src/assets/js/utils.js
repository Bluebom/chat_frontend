import HTTP from "@/assets/js/axios";
import store from "@/store";

const utils = {
  auth: (endpoint, data, commit) =>
    HTTP.post(`/${endpoint}`, data)
      .then(({ data }) => {
        store.state.flash = [];
        commit("SETUSER", data);
      })
      .catch(($_evt) => {
        store.state.flash = [
          {
            type: "error",
            message: $_evt.response.data.message,
          },
        ];
      }),
};

export default utils;
