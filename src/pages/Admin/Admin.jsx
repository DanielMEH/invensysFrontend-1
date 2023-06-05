import React from "react";
import { MenuLateral } from "../../components/MenuLateral";
import { InicioChart } from "../../components/InicioChart";
import { ContextModules } from "../../hooks/context/ContextModules";
export const Admin = () => {
  return (
    <>
      <div
        className="flex bg-[#f4f8ff] h-[100%] min-h-screen dark:bg-gradient-to-r from-[#163b59] from-10%
         via-[#18324f] via-30% to-[#121b2e] to-90%  "
      >
        <MenuLateral />
        <div className=" w-full block self_conte_fond ">
          <div className="content_users m-7">
            <div className="content_users_title">
              <h2 className="text-4xl font-bold dark:text-white text-gray-700 font-sans mx-0">
                Dasboard
              </h2>
              <p className="text-xl text-gray-600 dark:text-white mx-0">
                gestióna tu información que monitoriza, analiza y muestra de
                información general de tu negocio.
              </p>
            </div>

            <div className="container_cont">
              <ContextModules>
                <InicioChart />
              </ContextModules>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
