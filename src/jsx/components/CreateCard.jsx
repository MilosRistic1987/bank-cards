import React from "react";
import CardForm from "./CardForm";

const CreateCard = () => {
    const initialInfo = {
        username: "",
        cardNumber: { number1: "", number2: "", number3: "", number4: "" },
        dateExpiration: "",
        cardId: "",
        cardType: "Visa",
      };
    

  return (
    
      <CardForm dataInfo={initialInfo} create={true}/>
   
  );
};

export default CreateCard;