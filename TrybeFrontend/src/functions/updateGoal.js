import getEnvVars from "../../environment";
const { BACKEND_URL } = getEnvVars();

async function updateGoal(token, id, goal_description, progress) {
  const url = `${BACKEND_URL}/goals/${id}/`;

  const data = {
    goal_description: goal_description,
    progress: progress,
  };
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export default updateGoal;
