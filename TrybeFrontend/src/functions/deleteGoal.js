import { AUTH_URL } from "../../config";

async function deleteGoal(token, id) {
  const url = `${AUTH_URL}/Goals/${id}?access_token=${token}`;

  const response = await fetch(url, {
    method: "DELETE",
  });
  if (response.ok) {
    return { id: id };
  }
}

export default deleteGoal;
