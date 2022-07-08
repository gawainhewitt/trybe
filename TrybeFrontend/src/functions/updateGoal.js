// for fake backend

async function updateGoal(id, text) {
  const url = `https://crudapi.co.uk/api/v1/task/${id}`; // different URL
  const data = { title: `${text}` }; // different name, and in array
  const response = await fetch(url, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer _Gbprof1o-5YCUuIkIctxkjmjA21HTOFpdbEOtoph4AoNKBZTg",
    },
    body: JSON.stringify(data),
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export default updateGoal;
