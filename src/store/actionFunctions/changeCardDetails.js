import { CHANGECARDHOLDER } from "../actions/cardHolderAction";
export const changeCardDetails = (name, value) => ({
  type: CHANGECARDHOLDER,
  payload: {
    name,
    value,
  },
});
