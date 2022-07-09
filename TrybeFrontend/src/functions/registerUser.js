import { AUTH_URL } from "../../config";

const registerUser = async (handle, password) => {
  try {
    const response = await fetch(`${AUTH_URL}/users`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        user: {
          handle: handle,
          password: password,
        },
      }),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error("Request failed");
  } catch (error) {
    console.log(error);
  }
};

export default registerUser;
