const updateUserBalance = (userId, balance) => {
  try {
    const response = fetch("http://localhost:3001/user/balance", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
        body: JSON.stringify({ userId, balance }),
      },
    });

    return response.json();
  } catch (error) {
    return false;
  }
};

export default updateUserBalance;
