import { AUTH_URL } from "../../config";

const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${AUTH_URL}/Users/login`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const confirmation = await response.json();
    return confirmation;
  } catch (error) {
    console.log(error);
  }
};

export default loginUser;
