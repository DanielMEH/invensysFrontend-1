import React, { useState } from "react";
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

  return (
    <div className="notf   ">
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={5}
        centeredSlides={false}
        spaceBetween={2}
        pagination={{
          type: "swiper",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link
            to="notification/ProductVencer"
            className="whitespace-nowrap truncate dark:bg-[#29364a] ml-10 p-3 rounded-lg bg-gray-100 dark:text-white"
          >
            Productos pronto en vencer
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="notification/users" className="truncate dark:bg-[#29364a] p-3 rounded-lg bg-gray-100 dark:text-white">
            Usuarios
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="notification/product" className="truncate dark:bg-[#29364a] p-3 rounded-lg bg-gray-100 dark:text-white">
            Productos
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="notification/bodega" className="truncate dark:bg-[#29364a] p-3 rounded-lg bg-gray-100 dark:text-white">
            Bodega
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="notification/category" className="truncate dark:bg-[#29364a] p-3 rounded-lg bg-gray-100 dark:text-white">
            Categorias
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="notification/provider" className="truncate dark:bg-[#29364a] p-3 rounded-lg bg-gray-100 dark:text-white">
            Proveedores
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="notification/ventas" className="truncate dark:bg-[#29364a] p-3 rounded-lg bg-gray-100 dark:text-white w-full">
            Ventas
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="notification/pedidos" className="truncate mr-10 dark:bg-[#29364a] p-3 rounded-lg bg-gray-100 dark:text-white w-full">
            Pedidos
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
