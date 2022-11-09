import React from "react";

import Button from "./Button";

const SlideHero = (props) => {
  return (
    <div className="w-full h-full relative ">
      <img
        src={props.image}
        alt="/"
        className="absolute top-0 left-0 right-0 bottom-0 w-full bg-cover -z-20"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full bg-gradient-to-r from-white -z-10" />
      <div className="flex flex-col max-w-[1100px] mx-auto h-full justify-center items-start px-8 lg:px-0">
        <h1 className="text-4xl sm:text-5xl font-semibold w-full md:w-96 text-start">
          {props.title}
        </h1>
        <p className="text-base w-full md:w-[50%] text-start my-4">
          {props.text}
        </p>
        <Button text="Get Started" />
      </div>
    </div>
  );
};

export default SlideHero;
