const registerProducts = async (name, price, image) => {
  try {
    const response = await fetch("http://localhost:3001/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ name, price, image }),
    });

    let data = await response.json();
    console.log(data);

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const getProducts = async () => {
  try {
    const response = await fetch("http://localhost:3001/product");

    let data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default {
  registerProducts,
  getProducts,
};
