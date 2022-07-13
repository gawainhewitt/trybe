import getEnvVars from "../../environment";
const { BACKEND_URL } = getEnvVars();

const fetchMessages = async (token) => {
  const url = `${BACKEND_URL}/Messages?access_token=${token}`;
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export default fetchMessages;
