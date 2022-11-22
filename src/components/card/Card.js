import React from "react";
import Button from "../button";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__button">
        <Button label="Add Subscription"></Button>
      </div>
    </div>
  );
};

export default Card;
