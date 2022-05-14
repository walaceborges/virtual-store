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

    let data = response.json();
    console.log(data);
  } catch (error) {
    return false;
  }
};

export default updateUserBalance;
