// import { useColorChange } from "../../hooks/UseColorChange";
import styles from "./CardSelection.module.css";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_COLOR } from "../../store/actions/cardHolderAction";

export const CardSelection = () => {
  const cardColor = useSelector((state) => state.changeColorReducer.color);
  const dispatch = useDispatch();

  // color options
  const colorsOptions = [
    "red",
    "green",
    "blue",
    "brown",
    "purple",
    "goldenrod",
    "black",
  ];

  return (
    <>
      <div>
        <label>Card Color: {cardColor} </label>
      </div>
      <div>
        {colorsOptions.map((color) => (
          <button
            className={styles.btn}
            key={color}
            style={{ backgroundColor: color, color: "white" }}
            onClick={() => dispatch({ type: CHANGE_COLOR, payload: color })}
          >
            {color}
          </button>
        ))}
      </div>
    </>
  );
};
