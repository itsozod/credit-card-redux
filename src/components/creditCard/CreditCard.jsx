import styles from "./CreditCard.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeCardDetails } from "../../store/actionFunctions/changeCardDetails";
import { CHANGECARDHOLDER } from "../../store/actions/cardHolderAction";
import { useState } from "react";
export const CreditCard = () => {
  const cardHolder = useSelector((state) => state.cardHolderReducer);
  const cardColor = useSelector((state) => state.changeColorReducer.color);
  console.log(cardColor)
  const cardImage = useSelector((state) => state.changeImageReducer.img);
  const dispatch = useDispatch();
  const [flip, setFlip] = useState(false);

  // function for changing card details
  // const handleCardDetails = (name, value) => {
  //   dispatch(changeCardDetails(name, value));
  // };

  // function for separating number on cardNumber
  const handleCardNumber = (name, value) => {
    const newValue = value.replace(/\D/g, "");
    const formattedValue = newValue.replace(/(\d{4})/g, "$1 ").trim();
    dispatch(changeCardDetails(name, formattedValue));
  };

  return (
    <section className={styles.credit_card_container}>
      <article
        className={styles.cards_holder}
        style={{ transform: flip ? "rotateY(180deg)" : "" }}
      >
        <article
          style={{ background: cardColor }}
          className={styles.front_card}
        >
          {cardImage && (
            <img className={styles.card_img} src={cardImage} alt="Image" />
          )}
          <img
            className={styles.chipCard}
            src="chip card.png"
            alt="Chip Card"
          />
          <h1 className={styles.number}>{cardHolder.number}</h1>
          <h3 className={styles.name}>{cardHolder.name || "CARD HOLDER"}</h3>
          <h4 className={styles.expire_date}>
            {cardHolder.month}/{cardHolder.year}
          </h4>
        </article>
        <article className={styles.back_card} style={{zIndex: flip ? '2' : 0}}>
          <h3 className={styles.cvc}>{cardHolder.cvc}</h3>
        </article>
      </article>
      <button
        className={styles.flipBtn}
        onClick={() => setFlip((prevFlip) => !prevFlip)}
      >
        {flip ? "Flip to Front side" : "Flip to Back side"}
      </button>
      {/* form container */}
      <div className={styles.form_container}>
        <form className={styles.form}>
          <label>Card number</label>
          <input
            type="text"
            placeholder="Enter card number"
            maxLength={19}
            name="number"
            value={cardHolder.number}
            onChange={(e) => handleCardNumber(e.target.name, e.target.value)}
          />
          <label>Card holder name</label>
          <input
            type="text"
            placeholder="Enter card holder name"
            maxLength={19}
            name="name"
            value={cardHolder.name}
            onChange={(e) =>
              dispatch({
                type: CHANGECARDHOLDER,
                payload: {
                  name: [e.target.name],
                  value: e.target.value.toUpperCase(),
                },
              })
            }
          />
          <h3 className={styles.expire}>Expire Date</h3>
          <div className={styles.m_y_cvc}>
            <div className={styles.expire_label}>
              <label>MM</label>
              <input
                type="text"
                placeholder="MM"
                className={styles.small_input}
                maxLength={2}
                name="month"
                value={cardHolder.month}
                onChange={(e) =>
                  dispatch({
                    type: CHANGECARDHOLDER,
                    payload: { name: [e.target.name], value: e.target.value },
                  })
                }
              />
            </div>
            <div className={styles.expire_label}>
              <label>YY</label>
              <input
                type="text"
                placeholder="YY"
                className={styles.small_input}
                maxLength={2}
                name="year"
                value={cardHolder.year}
                onChange={(e) =>
                  dispatch({
                    type: CHANGECARDHOLDER,
                    payload: { name: [e.target.name], value: e.target.value },
                  })
                }
              />
            </div>
            <div className={styles.expire_label}>
              <label>CVC</label>
              <input
                type="text"
                placeholder="CVC"
                className={styles.big_input}
                maxLength={3}
                name="cvc"
                value={cardHolder.cvc}
                onChange={(e) =>
                  dispatch({
                    type: CHANGECARDHOLDER,
                    payload: { name: [e.target.name], value: e.target.value },
                  })
                }
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
