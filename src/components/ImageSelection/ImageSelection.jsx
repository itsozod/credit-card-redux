import styles from "./ImageSelection.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CHANGE_IMAGE } from "../../store/actions/cardHolderAction";

export const ImageSelection = () => {
  const cardImage = useSelector((state) => state.changeImageReducer.img);
  const imageOptions = [
    "js.png",
    "react.png",
    "angular.png",
    "liverpool.png",
    "tjkflag.png",
    "tjklogo.png",
    "usaflag.png",
  ];
  const dispatch = useDispatch();
  return (
    <>
      <button
        className={styles.clear}
        onClick={() => dispatch({ type: CHANGE_IMAGE, payload: "" })}
      >
        Clear Image
      </button>
      <div className={styles.image_container}>
        {imageOptions.map((img) => (
          <img
            style={{ border: cardImage === img ? "1px solid red" : "" }}
            className={styles.new_img}
            key={img}
            src={img}
            onClick={() => dispatch({ type: CHANGE_IMAGE, payload: img })}
          ></img>
        ))}
      </div>
    </>
  );
};
