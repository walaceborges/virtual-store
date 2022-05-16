const registerUser = async (name, email, password) => {
  try {
    console.log(name, email, password);
    const response = await fetch("https://hotmiles.herokuapp.com/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    let data = await response.json();
    console.log(data);

    if (response.status === 201) {
      localStorage.setItem("token", data.token);
      return { message: data.message };
    }
    return { message: data.message, error: true };
  } catch (error) {
    return error.message;
  }
};

const buyProduct = async (idProduct) => {
  try {
    const response = await fetch("https://hotmiles.herokuapp.com/user/buy", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ idProduct }),
    });

    const data = await response.json();

    if (response.status === 200) {
      return { message: data.message };
    }

    return { message: data.message, error: true };
  } catch (error) {
    return false;
  }
};

const getUsers = async () => {
  try {
    const response = await fetch("https://hotmiles.herokuapp.com/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    });

    if (response.messsage) {
      console.log(response.messsage);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return false;
  }
};

const getCurrentUser = async () => {
  try {
    const response = await fetch(
      "https://hotmiles.herokuapp.com/user/current",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );

    if (response.status === 200) {
      return await response.json();
    }
    return false;
  } catch (error) {
    return false;
  }
};

export default {
  registerUser,
  buyProduct,
  getUsers,
  getCurrentUser,
};
