import React from "react";
import { useHistory } from "react-router-dom";
import chip from "../../img/chip.png";
import moment from "moment";
import Discover from "../../img/discover.png";
import MasterCard from "../../img/mastercard.png";
import Visa from "../../img/visa.png";

const BankCard = ({ cardData }) => {
  const history = useHistory();
  let { cardId, cardNumber, username, dateExpiration, cardType } = cardData;

  let cardTypeImg = Visa;
  if (cardType === "MasterCard") {
    cardTypeImg = MasterCard;
  } else if (cardType === "Discover") {
    cardTypeImg = Discover;
  }

  const handleEdit = () => {
    history.push(`/cards/${cardId}/edit`);
  };

  return (
    <div className="bankCard" key={cardId} onClick={() => handleEdit()}>
      <div className="cardTypeWrapp">
        <img className="cardTypeImg" src={cardTypeImg} alt="card type" />
      </div>
      <div className="chipWrapp">
        <img className="chip" src={chip} alt=" card type" />
      </div>
      <div className="numberWrapp">
        <label>
          <span>{cardNumber.number1}</span>
          <span>{cardNumber.number2}</span>
          <span>{cardNumber.number3}</span>
          <span>{cardNumber.number4}</span>
        </label>
      </div>
      <div className="usernameWrapp">
        <label>{username}</label>
        <label>{moment(dateExpiration).format("MM/YY")}</label>
      </div>
    </div>
  );
};

export default BankCard;
