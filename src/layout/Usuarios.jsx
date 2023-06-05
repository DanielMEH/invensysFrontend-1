import React from 'react'
import { MenuLateral } from '../components/MenuLateral'
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { DataTableUsers } from '../components/DataTableUsers';
import "../assets/css/fuente.css";
export const Usuarios = () => {
  return (
    <>
      <div className="flex">
        <MenuLateral />
        <div
          className=" w-full block bg-[#f4f8ffdd]
        
        dark:bg-gradient-to-r from-[#163b59] from-10%
         via-[#18324f] via-30% to-[#121b2e] to-90% 
        "
        >
          <div className="content_users m-7">
            <div className="content_users_title">
              <h2 className="text-4xl font-bold dark:text-white text-gray-700 font-sans mx-0">
                Usuarios
              </h2>
              <p className="text-xl dark:text-white text-gray-600 mx-0">
                Crea, administra y haz un seguimiento de tus usuarios en un solo
                lugar.
              </p>
            </div>

            <div className="container_cont">
              <DataTableUsers />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
