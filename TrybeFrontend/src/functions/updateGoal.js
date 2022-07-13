import getEnvVars from "../../environment";
const { BACKEND_URL } = getEnvVars();

async function updateGoal(token, id, goal_description, progress) {
  console.log(progress);
  // const url = `https://trybe-backend.herokuapp.com/goals/${id}/`;
  const url = `${BACKEND_URL}/Goals?access_token=${token}`;

  const data = {
    goal_description: goal_description,
    id: id,
    progress: progress,
  };
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export default updateGoal;
