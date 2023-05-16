import React from "react";
import { MenuLateral } from "../components/MenuLateral";

import { FormSalida } from "../components/FormSalida";
export const Ventas = () => {
  return (
    <>
      <div className="flex">
        <MenuLateral />
        <div className=" w-full block self_conte_fond ">
          <div className="content_users m-7">
            <div className="content_users_title">
              <h2 className="text-4xl font-bold text-gray-700 font-sans mx-0">
                Salida de productos
              </h2>
              <p className="text-xl text-gray-600 mx-0">
              </p>
            </div>

            <div className="container_cont">
              <FormSalida />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
