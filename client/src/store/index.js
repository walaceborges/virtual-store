import { createStore } from "vuex";
import User from "../services/user";

const store = createStore({
  state() {
    return {
      balance: 0,
      isUpdated: 0,
    };
  },
  mutations: {
    getBalance(state) {
      User.getCurrentUser().then((user) => {
        state.balance = user.balance;
        state.isUpdated = 1;
      });
    },
  },
});

export default store;
