
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
            src="https://res.cloudinary.com/dkqp3wkbi/image/upload/v1685195615/9589884_4208763_sp5zkp.jpg"
            alt="img1"
            className="h-36"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dkqp3wkbi/image/upload/v1685195745/9914174_4318588_y4hup9.jpg"
            alt="img1"
            className="h-36"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dkqp3wkbi/image/upload/v1685195926/11400326_4679399_kaegsi.jpg"
            alt="img1"
            className="h-36"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dkqp3wkbi/image/upload/v1685195718/8356265_3896559_mw3nwv.jpg"
            alt="img1"
            className="h-36"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
