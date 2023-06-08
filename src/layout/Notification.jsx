import React, { useEffect, useState } from "react";
import { MenuLateral } from "../components/MenuLateral";
import { NotifyHeader } from "../components/NotificationsHeader/NotifyHeader";
import { Outlet } from "react-router-dom";
import { TodoFunctions } from "../apis/ApiData";
import "../assets/css/fuente.css";
export const Notification = () => {
  const [todo, setTodo] = useState(1);
  

  useEffect(() => {
    (async () => {
      const response = await TodoFunctions.deleteEstadoNotificacion();
      
    })();
  }, [todo]);

  return (
    <>
      <div className="flex">
        <MenuLateral />
        <div
          className=" w-full grid place-content-center h-screen
        bg-[#f4f8ffdd]
        
        dark:bg-gradient-to-r from-[#163b59] from-10%
         via-[#18324f] via-30% to-[#121b2e] to-90% 
        
        "
        >
          <div
            className="bg-white dark:bg-[#37415197]  overflow-y-hidden w-11/12  lg:w-[50rem] h-[40rem] m-auto rounded-lg scrollhelping"
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <h2 className="text-2xl font-bold m-4 dark:text-[#019afa]">
              Notificaciones
            </h2>
            <hr />
            <div className="sticky top-0 bg-white dark:bg-[#374151] z-50">
              <NotifyHeader />
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
