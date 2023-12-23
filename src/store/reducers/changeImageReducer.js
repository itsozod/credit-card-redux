import { CHANGE_IMAGE } from "../actions/cardHolderAction";
import { initialImage } from "../data/imageData";

export const changeImageReducer = (state = initialImage, action) => {
  switch (action.type) {
    case CHANGE_IMAGE:
      return { ...state, img: action.payload };
    default:
      return state;
  }
};
