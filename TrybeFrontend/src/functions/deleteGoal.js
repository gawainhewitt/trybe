async function deleteGoal(id) {
  const url = `https://trybe-backend.herokuapp.com/goals/${id}/`;
  const response = await fetch(url, {
    method: "DELETE",
  });

  return { id: id };
}

export default deleteGoal;
