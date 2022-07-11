import { AUTH_URL } from "../../config";

const fetchGoals = async (token) => {
  const url = `${AUTH_URL}/Goals?access_token=${token}`;
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export default fetchGoals;
