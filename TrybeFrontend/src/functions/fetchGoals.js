// for fake backend
// const fetchGoals = async () => {
//   try {
//     const response = await fetch("https://crudapi.co.uk/api/v1/task", {
//       headers: {
//         Authorization:
//           "Bearer _Gbprof1o-5YCUuIkIctxkjmjA21HTOFpdbEOtoph4AoNKBZTg",
//       },
//     }); // different URL, header with authorisation
//     const data = await response.json();
//     return data.items;
//   } catch (error) {
//     console.log(error);
//   }
// };

const fetchGoals = async () => {
  try{
    const response = await fetch("https://trybe-backend.herokuapp.com/goals");
    const data = await response.json();
    return data;
  }catch(error){
    console.log(error);
  }
}

export default fetchGoals;
