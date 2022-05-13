const registerUser = async (name, email, password) => {
  try {
    const response = await fetch("http://localhost:3001/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    let data = await response.json();
    console.log(data);

    if (response.status === 200) {
      localStorage.setItem("token", data.token);
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const buyProduct = async (idProduct) => {
  try {
    const response = await fetch("http://localhost:3001/user/buy", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ idProduct }),
    });

    if (response.messsage === "User does not have enough balance") {
      return false;
    }

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const getCurrentUser = async () => {
  try {
    const response = await fetch("http://localhost:3001/user/current", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      return data;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default {
  registerUser,
  buyProduct,
  getCurrentUser,
};
