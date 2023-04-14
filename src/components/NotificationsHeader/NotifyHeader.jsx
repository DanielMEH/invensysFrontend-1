import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "./self.css";
import { Link } from "react-router-dom";
export const NotifyHeader = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  return (
    <div className="notf">
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={5}
        pagination={{
          type: "swiper",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to="notification/users">Usuarios</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="notification/product">Productos</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="notification/inventario">Inventario</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="notification/category">Categorias</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="notification/provider">Proveedores</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="notification/ventas">Ventas</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="notification/pedidos">Pedidos</Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
