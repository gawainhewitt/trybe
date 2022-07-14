import getEnvVars from "../../environment";
const { BACKEND_URL } = getEnvVars();

const fetchGoals = async (token) => {
  const url = `${BACKEND_URL}/goals/`;
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export default fetchGoals;
