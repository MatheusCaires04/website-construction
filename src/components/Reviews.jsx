import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import CardReviews from "./CardReviews";
import Title from "./Title";

const Reviews = () => {
  return (
    <div className="w-full px-8 py-6">
      <div className="max-w-[1100px] mx-auto">
        <Title title="Clients Review" color="text-black" />
        <Swiper
          breakpoints={{
            0: { slidesPerView: 1 },
            520: { slidesPerView: 2 },
            920: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {Array.from({ length: 6 }).map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <CardReviews pic={`src/assets/pic-${index + 1}.png`} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
