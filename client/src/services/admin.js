const updateUserBalance = async (userId, balance) => {
  console.log(userId, balance);
  try {
    await fetch("http://localhost:3001/admin/balance", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ userId, balance }),
    });

    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

export default { updateUserBalance };
