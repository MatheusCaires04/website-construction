import React from "react";

const CardPrice = (props) => {
  return (
    <div>
      <div>{props.iconPlan}</div>
      <span>{props.namePlan}</span>
      <strong>{props.valuePlan}</strong>
      <ul>
        <li>{props.item1}</li>
      </ul>
      <a href="#">Choose Plan</a>
    </div>
  );
};

export default CardPrice;
