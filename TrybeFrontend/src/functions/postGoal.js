async function postGoal(text) {
  const url = "https://trybe-backend.herokuapp.com/goals/";
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
