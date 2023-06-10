import React from "react";
import { MenuLateral } from "../components/MenuLateral";


import { Link, Outlet } from "react-router-dom";
export const Ventas = () => {
  return (
    <>
      <div className="flex">
        <MenuLateral />
        <div
          className=" w-full block  h-[100%] min-h-screen
        bg-[#f4f8ffdd]
        
        dark:bg-gradient-to-r from-[#163b59] from-10%
         via-[#18324f] via-30% to-[#121b2e] to-90% "
        >
          <div className="content_users m-7">
            <div className="content_users_title">
              <h2 className="text-4xl my-2 block font-bold dark:text-white text-gray-700 font-sans mx-0">
                Ventas
              </h2>
              <div className="ctfg mt-4">
                <Link
                  to="AllVentas"
                  className=" whitespace-nowrap dark:text-white dark:hover:bg-[#374151af]  hover:bg-gray-200 p-1 hover:rounded-full hover:border-none flex items-center w-fit border-b-2 border-[#019afa]  "
                >
                  <span>Todas las ventas</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="currentColor"
                        d="m12.97 4.28l-1.44 1.44L21.814 16L11.53 26.28l1.44 1.44l11-11l.686-.72l-.687-.72l-11-11z"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
              <p className="text-xl text-gray-600 mx-0"></p>
            </div>

            <div className="container_cont">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
