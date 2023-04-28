import React from "react";
import { MenuLateral } from "../components/MenuLateral";
import { FormInventory } from "../container/FormInventory";
import { ContextInventario } from "../hooks/context/ContextInventario";
import { ListInventory } from "../container/ListInventory";
import { ContextSubProducts } from "../hooks/context/ContextSubProducts";

import { Outlet } from "react-router-dom";
export const Inventory = () => {
  return (
    <>
      <div className="flex">
        <MenuLateral />
        <div className=" w-full block self_conte_fond h-screen ">
          <div className="content_users m-7">
            <div className="content_users_title">
              <h2 className="text-4xl font-bold text-gray-700 font-sans mx-0">
                Bodega
              </h2>
              <p className="text-xl text-gray-600 mx-0">
                Crea, administra tus bodegas para sus procesos de producción y
                salidas.
              </p>
            </div>

            <div className="container_cont lg:min-w-7xl">
              <ContextInventario>
                <ContextSubProducts>
                  <div className="flex gap- items-end">
                    <FormInventory />
                    <div className="w-[43%] mb-2  ml-1">
                      <ListInventory />
                    </div>
                  </div>
                  <Outlet />
                </ContextSubProducts>
              </ContextInventario>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
