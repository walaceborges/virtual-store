import store from "../store";

const login = async (email, password, isAdmin) => {
  try {
    const response = await fetch("https://hotmiles.herokuapp.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, isAdmin }),
    });

    let data = await response.json();

    if (response.status === 200) {
      store.dispatch("setIsAdmin", data.user.isAdmin);
      localStorage.setItem("token", data.token);
      return { message: data.message };
    }
    return { message: data.message, error: true };
  } catch (error) {
    return false;
  }
};

export default login;
