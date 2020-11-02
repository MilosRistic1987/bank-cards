import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";

const CardForm = ({ dataInfo, create }) => {
  const history = useHistory();
  const initialInfo = {
    username: "",
    cardNumber: { number1: "", number2: "", number3: "", number4: "" },
    dateExpiration: "",
    cardId: "",
    cardType: "Visa",
  };

  const [cardInfo, setCardInfo] = useState({ ...dataInfo });

  useEffect(() => {
    setCardInfo(dataInfo);
  }, [dataInfo]);
  const alert = useAlert();
  const options = [
    { name: "Visa", value: "Visa" },
    { name: "MasterCard", value: "MasterCard" },
    { name: "Discover", value: "Discover" },
  ];
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (localStorage.getItem("cardList")) {
      const cards = JSON.parse(localStorage.getItem("cardList"));

      if (create) {
        const lastId = cards[cards.length - 1].cardId;
        localStorage.setItem(
          "cardList",
          JSON.stringify([...cards, { ...cardInfo, cardId: lastId + 1 }])
        );
      } else {
        const updatedCards = cards.map((el) =>
          el.cardId === dataInfo.cardId ? cardInfo : el
        );
        localStorage.setItem("cardList", JSON.stringify([...updatedCards]));
      }
    } else {
      localStorage.setItem(
        "cardList",
        JSON.stringify([{ ...cardInfo, cardId: 0 }])
      );
    }
    setCardInfo({ ...initialInfo });
    alert.show("Card information succesfully added");
    history.push("/cards");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("number")) {
      setCardInfo({
        ...cardInfo,
        cardNumber: { ...cardInfo.cardNumber, [name]: value },
      });
    } else {
      setCardInfo({ ...cardInfo, [name]: value });
    }
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({ ...cardInfo, cardType: value });
  };

  return (
    <form className="cardForm" onSubmit={(e) => handleFormSubmit(e)}>
      <div>
        <label>Username</label>
        <input
          required
          type="text"
          placeholder="username"
          onChange={(e) => handleInputChange(e)}
          name="username"
          value={cardInfo.username}
        />
      </div>
      <div className="cardNumber">
        <label title='First digit start with 4, 5 or 6'>card number</label>
        <div>
          <input
            maxLength="4"
            pattern="^[4-6][0-9]{3}$"
            required
            onChange={(e) => handleInputChange(e)}
            name="number1"
            value={cardInfo.cardNumber.number1}
          />
          <input
            maxLength="4"
            pattern="^[4-6][0-9]{3}$"
            required
            onChange={(e) => handleInputChange(e)}
            name="number2"
            value={cardInfo.cardNumber.number2}
          />
          <input
            maxLength="4"
            pattern="^[4-6][0-9]{3}$"
            required
            onChange={(e) => handleInputChange(e)}
            name="number3"
            value={cardInfo.cardNumber.number3}
          />
          <input
            maxLength="4"
            pattern="^[4-6][0-9]{3}$"
            required
            onChange={(e) => handleInputChange(e)}
            name="number4"
            value={cardInfo.cardNumber.number4}
          />
        </div>
      </div>
      <div>
        <label>Expire on</label>
        <input
          required
          type="date"
          onChange={(e) => handleInputChange(e)}
          name="dateExpiration"
          value={cardInfo.dateExpiration}
        />
      </div>
      <div>
        <select
          required
          onChange={(e) => handleInputChange(e)}
          name="cardType"
          value={cardInfo.cardType}
        >
          {options.map((el) => (
            <option>{el.name}</option>
          ))}
        </select>
      </div>
      <div className="formBtnWrapp">
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default CardForm;
