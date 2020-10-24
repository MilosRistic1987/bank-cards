import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardForm from "./CardForm";

const EditCard = ({ match }) => {
  const location = useLocation();
  const [editInfo, setEditInfo] = useState({
    username: "",
    cardNumber: { number1: "", number2: "", number3: "", number4: "" },
    dateExpiration: "",
    cardId: "",
    cardType: "Visa",
  });

  useEffect(() => {
    const id = location.pathname.split("cards/").pop().split("/")[0];
    const selctedCard = JSON.parse(localStorage.getItem("cardList")).find(
      (el) => el.cardId === +id
    );
    setEditInfo(selctedCard);
  }, []);

  return <CardForm dataInfo={editInfo} create={false} />;
};

export default EditCard;
