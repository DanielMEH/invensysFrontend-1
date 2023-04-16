import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "../components/NotificationsHeader/self.css";
import { Link } from "react-router-dom";
import { useInventario } from "../hooks/context/ContextInventario";

export const ListInventory = () => {
    const [swiperRef, setSwiperRef] = useState(null);
  
  const {
    inventario,
   
    GetInventario,
  
    } = useInventario();
    
    useEffect(() => {
     GetInventario();
        
    }, []);
    
  return (
      <div className="notf block rounded-md bg-white px-3">
          <h2 className="mx- font-bold">Lista de inventario</h2>
          {
              inventario.length > 0 ? (
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
        {inventario.map((item) => (
          <SwiperSlide>
                <Link to={`inventory/${item._id}`} className="truncate">{item.name_inventory}</Link>
          </SwiperSlide>
        ))}
          </Swiper>
              ) : (
                      <p className="mx-4 py-4">
                            No se encontraron inventarios, crea tu primer inventario 
                      </p>
              )
      }
          
    </div>
  );
};
