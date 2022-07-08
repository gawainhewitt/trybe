// for fake backend

async function postGoals(text) {
  const url = 'https://crudapi.co.uk/api/v1/task'; // different URL
  const data = [{ title: `${text}` }]; // different name, and in array
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer Ik6xAoSAFlV2hdJHN8-BRWmUSysRJok2OISCA9ImxYwVJ1fUpQ'
    },
    body: JSON.stringify(data),
  });
  return response.json(); // parses JSON response into native JavaScript objects
}


// async function postData(text) {
//   const url = "https://trybe-backend.herokuapp.com/goals/";
//   const data = { goal_description: `${text}` };
//   const response = await fetch(url, {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, *cors, same-origin
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

export default postGoals;
