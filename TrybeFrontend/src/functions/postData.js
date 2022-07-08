async function postData(text) {
  const url = "https://trybe-backend.herokuapp.com/goals/";
  const data = { goal_description: `${text}` };
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export default postData;
