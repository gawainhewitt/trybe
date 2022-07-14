import getEnvVars from "../../environment";
const { BACKEND_URL } = getEnvVars();
import loginUser from "./loginUser";

const registerUser = async (email, username, password) => {
  const url = `${BACKEND_URL}/auth/users/`;
  try {
    const response = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
      }),
    });
    const test = await response.json();
    console.log("register", test);
    if (response.ok) {
      console.log("register success");
      const data = await loginUser(username, password);
      console.log("login", data);

      // const data = await response.json();
      return data;
    }
    throw new Error("Request failed");
  } catch (error) {
    console.log(error);
  }
};

export default registerUser;
