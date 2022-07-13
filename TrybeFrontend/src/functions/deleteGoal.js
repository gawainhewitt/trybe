import getEnvVars from "../../environment";
const { BACKEND_URL } = getEnvVars();

async function deleteGoal(token, id) {
  const url = `${BACKEND_URL}/Goals/${id}?access_token=${token}`;

  const response = await fetch(url, {
    method: "DELETE",
  });
  if (response.ok) {
    return { id: id };
  }
}

export default deleteGoal;
