// * Importing libs
import { combineReducers } from "redux";

// * Importing reducers
import journals from "./journalsReducer.js";
import currentId from "./currentIdReducer.js";

// * Combining reducers into one
export default combineReducers({
  journals,
  currentId,
});
