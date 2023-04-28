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
import { getUsersAdmin } from "../apis/ApiData";
export const ListInventory = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const {
    inventario,

    GetInventario,
  } = useInventario();

  useEffect(() => {
    (async () => {
      setLoading(true);
      await GetInventario();
      const response = await getUsersAdmin();
     
      setUser(response.data.data);
      setLoading(false);
    })();
  }, []);

  let getEmail = localStorage.getItem("correo");
  let getRol = localStorage.getItem("type");
  const CorreoRepetido = inventario.filter((item) =>
    item.responsableInventory.includes(getEmail)
  );

  return (
    <div className="notf block rounded-md bg-white px-3">
      <h2 className="mx-2 font-bold">Lista de inventario</h2>

      {loading ? (
        <div className="m-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              fill="#777777"
              d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
            >
              <animateTransform
                attributeName="transform"
                dur="0.75s"
                repeatCount="indefinite"
                type="rotate"
                Flog
                values="0 12 12;360 12 12"
              />
            </path>
          </svg>
        </div>
      ) : (
        <>
          {inventario.length > 0 ? (
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
              {getRol === "user" ? (
                <>
                  {CorreoRepetido.map((item) => (
                    <SwiperSlide>
                      <div key={item._id}>
                        <Link to={`inventory/${item._id}`} className="truncate">
                          {item.name_inventory}
                        </Link>
                      </div>
                    </SwiperSlide>
                  ))}
                </>
              ) : (
                <>
                  {inventario.map((item) => (
                    <SwiperSlide>
                      <Link to={`inventory/${item._id}`} className="truncate">
                        {item.name_inventory}
                      </Link>
                    </SwiperSlide>
                  ))}
                </>
              )}
            </Swiper>
          ) : (
            <p className="mx-4 py-4">
              No se encontraron Bodegas, crea una nueva bodega
            </p>
          )}
        </>
      )}
    </div>
  );
};
