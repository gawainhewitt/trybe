async function updateGoal(id, goal_description) {
  const url = `https://trybe-backend.herokuapp.com/goals/${id}/`;
  const data = { goal_description: goal_description };
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
