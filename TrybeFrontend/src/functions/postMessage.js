import getEnvVars from "../../environment";
const { BACKEND_URL } = getEnvVars();

async function postMessage(token, text) {
  const url = `${BACKEND_URL}/Messages?access_token=${token}`;
  const data = { message: text };
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

export default postMessage;
