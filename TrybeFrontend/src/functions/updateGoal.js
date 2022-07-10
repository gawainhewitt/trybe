import { AUTH_URL } from "../../config";

async function updateGoal(token, id, goal_description) {
  // const url = `https://trybe-backend.herokuapp.com/goals/${id}/`;
  const url = `${AUTH_URL}/Goals?access_token=${token}`;
  console.log(url);

  const data = { goal_description: goal_description, id: id };
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
