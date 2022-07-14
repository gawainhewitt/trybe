import getEnvVars from "../../environment";
const { BACKEND_URL } = getEnvVars();

const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${BACKEND_URL}/auth/token/login/`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        username: username,
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
