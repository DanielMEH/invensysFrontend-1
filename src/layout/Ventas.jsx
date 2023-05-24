import React from "react";
import { MenuLateral } from "../components/MenuLateral";

import { FormSalida } from "../components/FormSalida";
import { Link, Outlet } from "react-router-dom";
export const Ventas = () => {
  return (
    <>
      <div className="flex">
        <MenuLateral />
        <div className=" w-full block self_conte_fond ">
          <div className="content_users m-7">
            <div className="content_users_title">
              <h2 className="text-4xl my-2 block font-bold text-gray-700 font-sans mx-0">
                Ventas
              </h2>
              <div className="ctfg mt-4">
                <Link
                  to="AllVentas"
                  className=" whitespace-nowrap  hover:bg-gray-200 p-1 hover:rounded-full hover:border-none flex items-center w-fit border-b-2 border-[#019afa]  "
                >
                  <span>Totas las ventas</span>
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
