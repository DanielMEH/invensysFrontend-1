import React from "react";
import { MenuLateral } from "../components/MenuLateral";
import { DatatableProviders } from "../components/DatatableProviders";
import { ContextProduxt } from "../hooks/context/ContextProduxt";
import { ContextCategory } from "../hooks/context/ContextCategory";
import { DatatableProduct } from "../components/DatatableProduct";
import { ContextProveedores } from "../hooks/context/ContextProveedores";
import { FormPedido } from "../components/FormPedido";
export const Shope = () => {
  return (
    <>
      <div className="flex">
        <MenuLateral />
        <div className=" w-full block self_conte_fond ">
          <div className="content_users m-7">
            <div className="content_users_title">
              <h2 className="text-4xl font-bold text-gray-700 font-sans mx-0">
                Pedidos
              </h2>
              <p className="text-xl text-gray-600 mx-0">
                Haz pedidos a tus proveedores para abastecer tu negocio.
              </p>
            </div>

            <div className="container_cont">
              <FormPedido />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
