import React from "react";
import {
  CardBody,
  CardDescription,
  CardImg,
  CardMain,
  CardPrice,
  CardTitle,
  CardBtn,
} from "./CardElements";

function Card(props) {
  return (
    <CardMain>
      <CardImg src={props.img} alt="hello" />
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
        <CardPrice>{props.price}</CardPrice>
        <CardBtn>Add to Cart</CardBtn>
      </CardBody>
    </CardMain>
  );
}

export default Card;
