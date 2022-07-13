import { AUTH_URL } from "../../config";

const fetchMessages = async (token) => {
  const url = `${AUTH_URL}/Messages?access_token=${token}`;
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export default fetchMessages;
