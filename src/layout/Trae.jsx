import React from "react";
import { MenuLateral } from "../components/MenuLateral";
import { FormTrae } from "../log/FormTrae";
import { ListTrae } from "../log/ListTrae";

export const Trae = () => {
  return (
    <>
      <div className="flex">
        <MenuLateral />
        <div className=" w-full h-screen block self_conte_fond ">
          <div className="content_users m-7">
            <div className="content_users_title">
              <h2 className="text-4xl mb-10 font-bold text-gray-700 font-sans mx-0">
                Negocio/Empresa
              </h2>
              <p className="text-xl text-gray-600 mx-0">
                
              </p>
            </div>

            <div className="container_c flex justify-between max-w-7xl w-auto mx-auto">
              <FormTrae />
              <ListTrae/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
