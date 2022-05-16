const updateUserBalance = async (userId, balance) => {
  try {
    const response = await fetch(
      "https://hotmiles.herokuapp.com/admin/balance",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ userId, balance }),
      }
    );

    let data = await response.json();
    if (response.status === 200) {
      return { message: data.message };
    }

    return { message: data.message, error: true };
  } catch (error) {
    return false;
  }
};

export default { updateUserBalance };
