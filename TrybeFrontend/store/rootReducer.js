import { combineReducers  } from "redux";
import goalReducer from "./goals/goals.reducers";
export default combineReducers({
  goals: goalReducer
});