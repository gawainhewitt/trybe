import getEnvVars from "../../environment";
const { BACKEND_URL } = getEnvVars();

async function postGoal(token, text) {
  const url = `${BACKEND_URL}/goals/`;
  const data = { goal_description: text };
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

export default postGoal;
