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

export default getProducts;
