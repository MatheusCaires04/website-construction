import React from "react";

const CardServices = (props) => {
  return (
    <div className="p-6 flex flex-col items-center bg-white shadow-xl card__services">
      <img src={props.imageService} alt="/" className="w-[25%] max-w-[150px]" />
      <strong className="text-sm md:text-base mt-4 mb-2 text-center">
        {props.titleService}
      </strong>
      <span className="text-xs md:text-sm text-center">
        {props.textService}
      </span>
    </div>
  );
};

export default CardServices;
