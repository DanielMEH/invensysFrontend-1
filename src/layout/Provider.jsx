import React from "react";
import { MenuLateral } from "../components/MenuLateral";
import { DatatableProviders } from "../components/DatatableProviders";
import { ContextProduxt } from "../hooks/context/ContextProduxt";
import { ContextCategory } from "../hooks/context/ContextCategory";
import { DatatableProduct } from "../components/DatatableProduct";
import { ContextProveedores } from "../hooks/context/ContextProveedores";
export const Provider = () => {
  return (
    <>
      <div className="flex">
        <MenuLateral />
        <div className=" w-full block self_conte_fond ">
          <div className="content_users m-7">
            <div className="content_users_title">
              <h2 className="text-4xl font-bold text-gray-700 font-sans mx-0">
                Proveedores
              </h2>
              <p className="text-xl text-gray-600 mx-0">
                Crea, administra tus proveedores para satisfacer las necesidades
                de tu negocio.
              </p>
            </div>

            <div className="container_cont">
              <ContextProveedores>
                <ContextCategory>
                  <DatatableProviders />
                </ContextCategory>
              </ContextProveedores>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
