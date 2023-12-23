import { CHANGE_COLOR } from "../actions/cardHolderAction";
import { initialColor } from "../data/colorData";

export const changeColorReducer = (state = initialColor, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
      return { ...state, color: action.payload };
    default:
      return state;
  }
};
