import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Footer = () => {
  const links = [
    {
      name: "Home",
      url: "#home",
    },
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Services",
      url: "#services",
    },
    {
      name: "Projects",
      url: "#projects",
    },
    {
      name: "Pricing",
      url: "#pricing",
    },
    {
      name: "Contact",
      url: "#contact",
    },
    {
      name: "Blogs",
      url: "#blog",
    },
  ];

  return (
    <div className="w-full px-8 py-6">
      <div className="max-w-[1100px] mx-auto flex flex-col">
        <Swiper
          breakpoints={{
            0: { slidesPerView: 2 },
            520: { slidesPerView: 4 },
            920: { slidesPerView: 5 },
          }}
          spaceBetween={20}
          loop={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {Array.from({ length: 6 }).map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="w-[40%]">
                  <img src={`src/assets/client-logo-${index + 1}.png`} alt="" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex flex-wrap my-10 gap-4 w-full sm:w-[80%] lg:w-[60%] mx-auto justify-center">
          {links.map((item, index) => {
            return (
              <li key={index} className="list-none">
                <a
                  href={item.url}
                  className="bg-black text-white text-sm py-1 px-4 hover:bg-yellow hover:text-black duration-150"
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </div>
        <span className="text-sm md:text-base text-center">
          Created By{" "}
          <span className="font-semibold text-yellow">Matheus Bini</span> | All
          rights Reserved!
        </span>
      </div>
    </div>
  );
};

export default Footer;
