import React from "react";

import CardServices from "./CardServices";
import Title from "./Title";

import service1 from "../assets/service-1.png";
import service2 from "../assets/service-2.png";
import service3 from "../assets/service-3.png";
import service4 from "../assets/service-4.png";
import service5 from "../assets/service-5.png";
import service6 from "../assets/service-6.png";
import service7 from "../assets/service-7.png";
import service8 from "../assets/service-8.png";

const Services = () => {
  return (
    <div className="w-full px-8 py-6 bg-light-bg" id="services">
      <div className="max-w-[1100px] mx-auto">
        <Title title="Our Services" />
        <div className="w-[90%] mx-auto sm:w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          <CardServices
            imageService={service1}
            titleService="Building Construction"
            textService="lorem ipsum dolor sit amet consectetur adipisicing"
          />
          <CardServices
            imageService={service2}
            titleService="House Renovation"
            textService="lorem ipsum dolor sit amet consectetur adipisicing"
          />
          <CardServices
            imageService={service3}
            titleService="Architecture Design"
            textService="lorem ipsum dolor sit amet consectetur adipisicing"
          />
          <CardServices
            imageService={service4}
            titleService="Material Supply"
            textService="lorem ipsum dolor sit amet consectetur adipisicing"
          />
          <CardServices
            imageService={service5}
            titleService="Construction Consultant"
            textService="lorem ipsum dolor sit amet consectetur adipisicing"
          />
          <CardServices
            imageService={service6}
            titleService="Interior Design"
            textService="lorem ipsum dolor sit amet consectetur adipisicing"
          />
          <CardServices
            imageService={service7}
            titleService="Building Maintecance"
            textService="lorem ipsum dolor sit amet consectetur adipisicing"
          />
          <CardServices
            imageService={service8}
            titleService="Building Renovation"
            textService="lorem ipsum dolor sit amet consectetur adipisicing"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
