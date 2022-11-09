import React from "react";

import { MdAdd } from "react-icons/md";

export const ImageGallery = (props) => {
  return (
    <a href={props.urlImage}>
      <div className="overflow-hidden h-80 relative">
        <img src={props.urlImage} alt="" className="w-full h-full" />
      </div>
      <div className="bg-white flex">
        <div className="flex flex-col flex-1 pl-4 py-2">
          <strong className="text-base">Dream Home</strong>
          <span className="text-xs">design construction</span>
        </div>
        <div className="bg-yellow w-14 flex items-center justify-center text-3xl text-white">
          <MdAdd />
        </div>
      </div>
    </a>
  );
};
