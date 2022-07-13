import getEnvVars from "../../environment";
const { BACKEND_URL } = getEnvVars();

const logoutUser = async (token) => {
  const url = `${BACKEND_URL}/Users/logout?access_token=${token}`;

  try {
    const response = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
    const confirmation = await response.json();
    return confirmation;
  } catch (error) {
    console.log(error);
  }
};

export default logoutUser;
