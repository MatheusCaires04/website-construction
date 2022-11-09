import React from "react";

const Title = (props) => {
  return (
    <h1
      className={`text-2xl font-bold py-2 pl-4 border-l-[8px] border-yellow ${props.color}`}
    >
      {props.title}
    </h1>
  );
};

export default Title;
