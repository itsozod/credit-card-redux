import { CHANGECARDHOLDER } from "../actions/cardHolderAction";
import { cardHolder } from "../data/cardData";
export const cardHolderReducer = (state = cardHolder, action) => {
  switch (action.type) {
    case CHANGECARDHOLDER:
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
};
