import React from "react";

import Button from "./Button";

const CardBlog = (props) => {
  return (
    <div className="flex flex-col items-center blog__hover">
      <div className="w-[90%] z-10">
        <img src={props.imageBlog} alt="/" />
      </div>
      <div className="bg-white shadow-box-pricing pt-6 p-4 -mt-4">
        <strong className="text-lg">{props.titleBlog}</strong>
        <p className="text-xs mt-1 mb-3">{props.text}</p>
        <Button text="Read More" />
      </div>
    </div>
  );
};

export default CardBlog;
