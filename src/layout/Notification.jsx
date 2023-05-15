import React from "react";
import { MenuLateral } from "../components/MenuLateral";
import { NotifyHeader } from "../components/NotificationsHeader/NotifyHeader";
import { Outlet } from "react-router-dom";
import "../assets/css/fuente.css"
export const Notification = () => {
  return (
    <>
      <div className="flex">
        <MenuLateral />
        <div className="bg-[#eef9fd] w-full grid place-content-center h-screen  ">
          <div
            className="bg-white  overflow-y-hidden w-11/12  lg:w-[50rem] h-[40rem] m-auto rounded-lg scrollhelping"
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <h2 className="text-2xl font-bold m-4">Notificaciones</h2>
            <hr />
            <div className="sticky top-0 bg-white z-50">
              <NotifyHeader />
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
