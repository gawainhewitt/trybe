import getEnvVars from "../../environment";
const { BACKEND_URL } = getEnvVars();

async function postGoal(token, text) {
  // const url = "https://trybe-backend.herokuapp.com/goals/";
  const url = `${BACKEND_URL}/Goals?access_token=${token}`;
  const data = { goal_description: text };
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

export default postGoal;
