import { AUTH_URL } from "../../config";

const loginUser = async (handle, password) => {
  try {
    const response = await fetch(`${AUTH_URL}/sessions/`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        session: {
          handle: handle,
          password: password,
        },
      }),
    });
    const confirmation = await response.json();
    return confirmation;
  } catch (error) {
    console.log(error);
  }
};

export default loginUser;
