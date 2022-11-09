import React from "react";

import Button from "./Button";
import Title from "./Title";

import videoAbout from "../assets/about-vid.mp4";

const About = () => {
  return (
    <div className="w-full px-8 py-6" id="about">
      <div className="max-w-[1100px] mx-auto">
        <Title title="About Us" />
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
          <div className="flex items-center justify-center py-8 px-12">
            <video
              src={videoAbout}
              autoPlay
              muted
              loop
              className="w-[100%] sm:w-[400px] md:w-[100%] relative bg__before"
            ></video>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="capitalize text-xl lg:text-3xl font-semibold ">
              we will provide you the best work whinch you dreamt for
            </h2>
            <p className="text-sm lg:text-base my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, dolor temporibus? Cumque aspernatur voluptas nemo
              mollitia eligendi nihil optio est veritatis culpa distinctio
              officia ipsum dolorum sequi iste, impedit suscipit.
            </p>
            <Button text="Read More" />
          </div>
        </div>
        <div className="w-[50%] mx-auto sm:w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  mt-8 gap-8">
          <div className="flex flex-col p-6 bg-light-bg items-center">
            <strong className="text-xl md:text-2xl 2xl:text-3xl">10 +</strong>
            <span className="text-xs text-center sm:text-sm 2xl:text-base">
              years of experience
            </span>
          </div>
          <div className="flex flex-col p-6 bg-light-bg items-center">
            <strong className="text-xl md:text-2xl 2xl:text-3xl">1500 +</strong>
            <span className="text-xs text-center sm:text-sm 2xl:text-base">
              project completed
            </span>
          </div>
          <div className="flex flex-col p-6 bg-light-bg items-center">
            <strong className="text-xl md:text-2xl 2xl:text-3xl">750 +</strong>
            <span className="text-xs text-center sm:text-sm 2xl:text-base">
              satisfied clients
            </span>
          </div>
          <div className="flex flex-col p-6 bg-light-bg items-center">
            <strong className="text-xl md:text-2xl 2xl:text-3xl">450 +</strong>
            <span className="text-xs text-center sm:text-sm 2xl:text-base">
              active workers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
