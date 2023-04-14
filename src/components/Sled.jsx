import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../assets/css/sliderCard.css";

// import required modules
import { EffectCards } from "swiper";

export const Sled = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper sw"
      >
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dkqp3wkbi/image/upload/v1649779700/samples/bike.jpg"
            alt="img1"
            className="h-36"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dkqp3wkbi/image/upload/v1649779699/samples/sheep.jpg"
            alt="img1"
            className="h-36"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dkqp3wkbi/image/upload/v1649779707/samples/cloudinary-group.jpg"
            alt="img1"
            className="h-36"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dkqp3wkbi/image/upload/v1649779707/samples/cloudinary-group.jpg"
            alt="img1"
            className="h-36"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dkqp3wkbi/image/upload/v1649779707/samples/cloudinary-group.jpg"
            alt="img1"
            className="h-36"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
