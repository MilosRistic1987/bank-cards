import React, {useEffect, useState} from "react";
import BankCard from "../components/BankCard";

const Cards = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        const allCrads = JSON.parse(localStorage.getItem("cardList"));
       setCards(allCrads)
    }, [])
  

  return (
    <div className="cardList">
      {cards.map((el) => (
        <BankCard cardData={el} />
      ))}
    </div>
  );
};

export default Cards;
