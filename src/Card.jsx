import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div className="card_container">
        <h4>Id: {props.id}</h4>
        <img src={props.avatar} alt="img" />
        <h3>Name: {props.first_name + " " + props.last_name}</h3>
        <h3>Email: {props.email}</h3>
      </div>
    </>
  );
};

export default Card;
