import { AUTH_URL } from "../../config";

const logoutUser = async (token) => {
  const url = `${AUTH_URL}/Users/logout?access_token=${token}`;

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
