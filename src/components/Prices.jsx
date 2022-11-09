import React from "react";
import { FaBuilding, FaCity, FaHome } from "react-icons/fa";

import Title from "./Title";

const Prices = () => {
  return (
    <div className="w-full px-8 py-6 bg-light-bg" id="pricing">
      <div className="max-w-[1100px] mx-auto">
        <Title title="Our Pricing" color="text-black" />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 text-black w-[80%] mx-auto md:w-full">
          <div className="border-[#666] shadow-box-pricing bg-white p-6 flex flex-col items-center">
            <div className="bg-yellow p-3 rounded-full text-xl md:text-3xl">
              <FaHome />
            </div>
            <span className="text-base md:text-lg font-semibold my-4">
              Basic Plan
            </span>
            <span className="text-sm">
              $<strong className="text-4xl font-medium">150</strong>/mo
            </span>
            <ul className="my-4 flex flex-col gap-2 text-sm">
              <li>interior design</li>
              <li>refurbishment</li>
              <li>material supply</li>
              <li>maintenance</li>
              <li>24/7 support</li>
            </ul>
            <button className="bg-black px-4 py-2 text-sm text-white font-bold hover:bg-yellow hover:text-black duration-200">
              Choose Plan
            </button>
          </div>
          <div className="border-[#666] shadow-box-pricing bg-white p-6 flex flex-col items-center">
            <div className="bg-yellow p-3 rounded-full text-xl md:text-3xl">
              <FaBuilding />
            </div>
            <span className="text-base md:text-lg font-semibold my-4">
              Premium Plan
            </span>
            <span className="text-sm">
              $<strong className="text-4xl font-medium">650</strong>/mo
            </span>
            <ul className="my-4 flex flex-col gap-2 text-sm">
              <li>interior design</li>
              <li>refurbishment</li>
              <li>material supply</li>
              <li>maintenance</li>
              <li>24/7 support</li>
            </ul>
            <button className="bg-black px-4 py-2 text-sm text-white font-bold hover:bg-yellow hover:text-black duration-200">
              Choose Plan
            </button>
          </div>
          <div className="border-[#666] shadow-box-pricing bg-white p-6 flex flex-col items-center">
            <div className="bg-yellow p-3 rounded-full text-xl md:text-3xl">
              <FaCity />
            </div>
            <span className="text-base md:text-lg font-semibold my-4">
              Ultimate Plan
            </span>
            <span className="text-sm">
              $<strong className="text-4xl font-medium">1500</strong>/mo
            </span>
            <ul className="my-4 flex flex-col gap-2 text-sm">
              <li>interior design</li>
              <li>refurbishment</li>
              <li>material supply</li>
              <li>maintenance</li>
              <li>24/7 support</li>
            </ul>
            <button className="bg-black px-4 py-2 text-sm text-white font-bold hover:bg-yellow hover:text-black duration-200">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
