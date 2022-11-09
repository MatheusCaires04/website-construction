import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const CardReviews = (props) => {
  return (
    <div className="flex flex-col gap-8">
      <p className="text-xs text-start font-semibold p-2 bg-light-bg box__p__before relative">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nam at sint
        voluptatum nesciunt temporibus odio consequatur incidunt porro. Porro
        veniam ipsa suscipit. Rem impedit error, ea quod voluptatem nobis!
      </p>
      <div className="flex gap-2">
        <div className="w-16 h-16">
          <img src={props.pic} alt="/" className="" />
        </div>
        <div className="flex flex-col justify-center">
          <strong className="text-base">John Deo</strong>
          <div className="flex text-base text-yellow">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardReviews;
