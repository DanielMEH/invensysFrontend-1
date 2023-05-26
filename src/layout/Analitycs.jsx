import React from "react";
import { MenuLateral } from "../components/MenuLateral";
import { Outlet } from "react-router-dom";
import { AnalitycMenuVista } from "../Generator/AnalitycMenuVista";
export const Analitycs = () => {
  return (
    <>
      <div className="flex">
        <MenuLateral />
        <div className=" w-full  block self_conte_fond ">
          <div className="content_users m-7">
            <div className="content_users_title">
              <h2 className="text-4xl mb-10 font-bold text-gray-700 font-sans mx-0">
                Estadisticas y Reportes
              </h2>
              <p className="text-xl text-gray-600 mx-0"></p>
            </div>

            <div className="flex justify-between">
              <div className="container_c ">
                <Outlet />
              </div>

              <div className="fin sticky top-0">
                <AnalitycMenuVista />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
