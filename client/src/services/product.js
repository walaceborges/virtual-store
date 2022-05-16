const registerProducts = async (name, price, image) => {
  try {
    const response = await fetch("https://hotmiles.herokuapp.com/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ name, price, image }),
    });

    let data = await response.json();
    if (response.status === 201) {
      return { message: data.message };
    }

    return { message: data.message, error: true };
  } catch (error) {
    console.log(error);
    return false;
  }
};

const getProducts = async () => {
  try {
    const response = await fetch("https://hotmiles.herokuapp.com/product", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    });

    let data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    return false;
  }
};

export default {
  registerProducts,
  getProducts,
};
