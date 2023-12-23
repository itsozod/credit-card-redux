import { combineReducers } from "redux";
import { cardHolderReducer } from "./cardHolderReducer";
import { changeColorReducer } from "./changeColorReducer";
import { changeImageReducer } from "./changeImageReducer";
export const reducer = combineReducers({
  cardHolderReducer,
  changeColorReducer,
  changeImageReducer,
});
