import getEnvVars from "../../environment";
const { BACKEND_URL } = getEnvVars();

const fetchGoals = async (token) => {
  const url = `${BACKEND_URL}/Goals?access_token=${token}`;
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export default fetchGoals;
