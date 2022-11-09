import React from "react";

const Input = (props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      className={`outline-none py-1 px-2 border-b-[2px] border-b-[#cecece] w-full text-sm focus:border-b-[#ffaaaa] ${props.margin}`}
    />
  );
};

export default Input;
