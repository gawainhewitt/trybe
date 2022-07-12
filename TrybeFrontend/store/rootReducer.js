import { combineReducers  } from "redux";
import goalReducer from "./goals/goals.reducers";
import supporterGoalsReducer from "./goals/supporterGoals.reducers";

export default combineReducers({
  goals: goalReducer,
  supporterGoals: supporterGoalsReducer
});