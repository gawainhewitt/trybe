import { AUTH_URL } from "../../config";

async function postGoal(token, text) {
  // const url = "https://trybe-backend.herokuapp.com/goals/";
  const url = `${AUTH_URL}/Goals?access_token=${token}`;
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
