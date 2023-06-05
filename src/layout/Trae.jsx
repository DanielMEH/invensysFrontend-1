import React from "react";
import { MenuLateral } from "../components/MenuLateral";
import { FormTrae } from "../log/FormTrae";
import { ListTrae } from "../log/ListTrae";

export const Trae = () => {
  return (
    <>
      <div className="flex">
        <MenuLateral />
        <div
          className=" w-full h-screen block self_conte_fond
          dark:bg-gradient-to-r from-[#163b59] from-10%
         via-[#18324f] via-30% to-[#121b2e] to-90% "
        >
          <div className="content_users m-7">
            <div className="content_users_title">
              <h2
                className="text-3xl md:text-4xl
               mb-10 font-bold text-gray-700 font-sans mx-0 dark:text-white"
              >
                Negocio/Empresa
              </h2>
              <p className="text-xl text-gray-600 mx-0"></p>
            </div>

            <div
              className="container_c flex
              gap-2 justify-between flex-col md:flex-row  max-w-7xl w-auto mx-auto"
            >
              <div className="g hidden md:block">
                <FormTrae />
              </div>
              <ListTrae />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
