import ContainerComponentStyle from "../components/Container.component.style";


// for fake backend
const fetchGoals = async () => {
  try{
    const response = await fetch('https://crudapi.co.uk/api/v1/task', {headers: {'Authorization': 'Bearer Ik6xAoSAFlV2hdJHN8-BRWmUSysRJok2OISCA9ImxYwVJ1fUpQ'}}); // different URL, header with authorisation
    const data = await response.json();
    return data.items;
  }catch(error){
    console.log(error);
  }
}


// const fetchGoals = async () => {
//   try{
//     const response = await fetch("https://trybe-backend.herokuapp.com/goals");
//     const data = await response.json();
//     return data;
//   }catch(error){
//     console.log(error);
//   }
// }

export default fetchGoals;