import React, { useState, useMemo } from "react";
import { MenuLateral } from "../components/MenuLateral";
import { Outlet } from "react-router-dom";
import { AnalitycMenuVista } from "../Generator/AnalitycMenuVista";

export const Analitycs = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex">
        <MenuLateral />
        <div
          className=" w-full  block bg-[#f4f8ffdd]
        
        min-h-screen
        dark:bg-gradient-to-r from-[#163b59] from-10%
         via-[#18324f] via-30% to-[#121b2e] to-90% "
        >
          <div className="content_users m-7">
            <div className="content_users_title">
              <h2 className="text-4xl mb-10 font-bold dark:text-white text-gray-700 font-sans mx-0">
                Estadisticas y Reportes
              </h2>
              <p className="text-xl text-gray-600 mx-0"></p>
            </div>

            <span
              className="dark:text-white md:hidden bg-[#019afa] p-2 my-2 rounded-full inline-block"
              onClick={useMemo(() => () => setOpen(!open), [open])}
            >
              Abrir Ventana
            </span>

            <div className="flex justify-between flex-col md:flex-row  ">
              <div className="container_c ">
                <Outlet />
              </div>

              <div className={open ? "block  " : "  hidden md:block"}>
                <div className="fin md:sticky  fixed  top-[15rem] md:top-0">
                  <AnalitycMenuVista />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
