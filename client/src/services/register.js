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

export default registerUser;
