import { AUTH_URL } from "../../config";

async function updateGoal(token, id, goal_description, progress) {
  console.log(progress);
  // const url = `https://trybe-backend.herokuapp.com/goals/${id}/`;
  const url = `${AUTH_URL}/Goals?access_token=${token}`;

  const data = { goal_description: goal_description, id: id, progress: progress };
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
