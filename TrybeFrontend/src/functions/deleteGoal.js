// for fake backend

async function deleteGoal(id) {
  const url = `https://crudapi.co.uk/api/v1/task/${id}`; // different URL
  const response = await fetch(url, {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer _Gbprof1o-5YCUuIkIctxkjmjA21HTOFpdbEOtoph4AoNKBZTg",
    },
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export default deleteGoal;
