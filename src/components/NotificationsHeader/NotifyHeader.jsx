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
          <Link to="notification/users" className="truncate">Usuarios</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="notification/product" className="truncate">Productos</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="notification/inventario" className="truncate">Inventario</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="notification/category" className="truncate">Categorias</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="notification/provider" className="truncate">Proveedores</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="notification/ventas" className="truncate">Ventas</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="notification/pedidos" className="truncate">Pedidos</Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
