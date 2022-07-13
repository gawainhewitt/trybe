import { combineReducers  } from "redux";
import goalReducer from "./goals/goals.reducers";
import supporterGoalsReducer from "./goals/supporterGoals.reducers";
import messagesReducer from "./goals/messagesReducer";

export default combineReducers({
  goals: goalReducer,
  supporterGoals: supporterGoalsReducer,
  messages: messagesReducer
});