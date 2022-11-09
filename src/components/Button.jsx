import React from "react";

const Button = (props) => {
  return (
    <button className="w-28 md:w-36 py-2 text-xs md:text-sm font-nomal text-white bg-black hover:bg-yellow hover:text-black duration-200">
      {props.text}
    </button>
  );
};

export default Button;
