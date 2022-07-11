import { AUTH_URL } from "../../config";
import loginUser from "./loginUser";

const registerUser = async (email, password) => {
  try {
    const response = await fetch(`${AUTH_URL}/Users`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
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
