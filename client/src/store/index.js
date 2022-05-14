import { createStore } from "vuex";
import User from "../services/user";

const store = createStore({
  state() {
    return {
      balance: 0,
      isUpdated: 0,
      isAdmin: false,
    };
  },
  actions: {
    setIsAdmin: ({ commit }, isAdmin) => {
      console.log(isAdmin);
      commit("isAdmin", isAdmin);
    },
  },
  mutations: {
    getBalance(state) {
      User.getCurrentUser().then((user) => {
        state.balance = user.balance;
        state.isUpdated++;
      });
    },
    isAdmin(state, isAdmin) {
      state.isAdmin = isAdmin;
    },
  },
});

export default store;
