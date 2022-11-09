import React, { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { dataSlideHero } from "./DataHeroSlide";
import SlideHero from "./SlideHero";

const Hero = () => {
  // const handleNext = (e) => {
  //   e.preventDefault();
  //   refSlide.current.scrollLeft += refSlide.current.offsetWidth;
  // };
  // const handlePrev = (e) => {
  //   e.preventDefault();
  //   refSlide.current.scrollLeft -= refSlide.current.offsetWidth;
  // };

  return (
    <div className="w-full h-screen pt-24 relative overflow-hidden" id="home">
      <div className="w-full h-full flex">
        <Swiper
          slidesPerView={1}
          navigation={true}
          className="mySwiper hero__slide"
          modules={[Navigation]}
        >
          {dataSlideHero.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <SlideHero
                  text={item.text}
                  title={item.title}
                  image={item.image}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
