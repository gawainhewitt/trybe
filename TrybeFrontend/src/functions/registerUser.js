import getEnvVars from "../../environment";
const { BACKEND_URL } = getEnvVars();
import loginUser from "./loginUser";

const registerUser = async (email, password) => {
  const url = `${BACKEND_URL}/auth/users/`;
  try {
    const response = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        email: email,
        username: "luke123test",
        password: password,
      }),
    });
    const test = await response.json();
    console.log(test);
    if (response.ok) {
      const data = await loginUser(email, password);
      console.log(data);

      // const data = await response.json();
      return data;
    }
    throw new Error("Request failed");
  } catch (error) {
    console.log(error);
  }
};

export default registerUser;
