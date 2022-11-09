import React from "react";

import CardBlog from "./CardBlog";
import Title from "./Title";
import { Blog } from "./ListBlog";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import {} from "./ListBlog";

const Blogs = () => {
  return (
    <div className="w-full px-8 py-6 bg-light-bg" id="blog">
      <div className="max-w-[1100px] mx-auto">
        <Title title="Our Blogs" color="text-black" />
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
          {Blog.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <CardBlog
                  imageBlog={item.url}
                  titleBlog={item.title}
                  text={item.text}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Blogs;
