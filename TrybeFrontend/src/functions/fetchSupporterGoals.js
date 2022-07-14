import getEnvVars from "../../environment";
const { BACKEND_URL } = getEnvVars();

const fetchGoals = async (token) => {
  const url = `${BACKEND_URL}/supporters/`;
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchGoals;
