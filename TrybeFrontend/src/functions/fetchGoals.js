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