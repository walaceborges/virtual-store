import store from "../store";

const login = async (email, password, isAdmin) => {
  try {
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, isAdmin }),
    });

    let data = await response.json();
    console.log(data);

    if (response.status === 200) {
      store.dispatch("setIsAdmin", data.user.isAdmin);
      localStorage.setItem("token", data.token);
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default login;
