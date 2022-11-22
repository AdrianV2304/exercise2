import React from "react";
import Button from "../button";
import Logo from "../logo";
import Subscription from "../subscription";
import Details from "../details";
import Price from "../price";

const Card = (props) => {
  return (
    <div className="card">
      <Logo logo="/ice.png"></Logo>
      <Subscription label="Ice Mobile 10GB"></Subscription>
      <Details label="Up to 100Mbit/s"></Details>
      <Price label="299,-"></Price>
      <Button label="Add Subscription"></Button>
    </div>
  );
};

export default Card;
