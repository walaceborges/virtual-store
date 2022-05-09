const login = async (email, password) => {
  try {
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data, "sdad");

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export default login;
