import React, { useState, useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { getBusiness, getDataAll } from "../apis/ApiData";
import "./style.css";
export const AnalitycMenuVista = () => {
  const [expand, setExpand] = useState(false);
  const [load, setLoad] = useState(false);
  const [modules, setModules] = useState([]);
  const [admin, setAdmin] = useState([]);
  useMemo(() => {
    (async () => {
      const data = await getDataAll();
      setAdmin(data.data.data);

      setLoad(true);
      const bussiness = await getBusiness();
      setModules([
        bussiness.data.dataCategory,
        bussiness.data.dataCompany,
        bussiness.data.dataCompras,
        bussiness.data.dataIGeneral,
        bussiness.data.dataInventary,
        bussiness.data.dataNotify,
        bussiness.data.dataPedidos,
        bussiness.data.dataPedidoProvedor,
        bussiness.data.dataProduct,
        bussiness.data.dataProvider,
        bussiness.data.dataSubProduct,
      ]);
      setLoad(false);
    })();
  }, []);

  let token = localStorage.getItem("secure_token");
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);
  return (
    <>
      {load ? (
        <div className="skeletton flex gap-4 m-5">
          <Skeleton
            height={400}
            width={240}
            baseColor={darkMode ? "#374151" : ""}
            highlightColor={darkMode ? "#293a4f" : ""}
            className="rounded-full bg-red-600 flex overflow-hidden"
          />
        </div>
      ) : (
        <div
          className={
            expand
              ? "items_Links bg-white dark:bg-[#374151] dark:text-white p-4 sticky top-10  scale-100  rounded-md w-[280px] md:w-[20rem] transition duration-700 ease-in-out "
              : "items_Links bg-white dark:bg-[#374151] dark:text-white scale-105 sticky top-10  rounded-md p-3 w-[280px] md:w-[14rem]  transition duration-700 ease-in-out "
          }
        >
          <div className="relative " onClick={() => setExpand(!expand)}>
            <div className=" absolute right-0 top-0 cursor-pointer  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#c1c4c8"
                  d="M10 21v-2H6.41l4.5-4.5l-1.41-1.41l-4.5 4.5V14H3v7h7m4.5-10.09l4.5-4.5V10h2V3h-7v2h3.59l-4.5 4.5l1.41 1.41Z"
                />
              </svg>
            </div>
          </div>
          <div className="log-img flex items-center mb-8">
            {admin.length > 0 ? (
              <img
                src={admin[0].imgURL}
                alt="logo"
                className="rounded-full w-10 h-10"
              />
            ) : (
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="logo"
                className="rounded-full w-10 h-10"
              />
            )}
            <span className="mx-1  flex flex-col">
              <span className="mx-1 font-bold flex flex-col">
                Administrador
              </span>
              <span className="text-gray-400 mx-1">
                Modulos: {modules.length}
              </span>
            </span>
          </div>

          <ul className="flex flex-col gap-2">
            <li>
              <NavLink
                to={""}
                className={({ isActive }) =>
                  isActive
                    ? `flex items-center  bg-gradient-to-r from-cyan-500 to-blue-500
            text-white
            rounded-full p-1`
                    : `flex items-center text-black hover:bg-gradient-to-r from-cyan-500 to-blue-500
            hover:text-white
            rounded-full p-1`
                }
              >
                <span className="bg-gray-100 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-chart-histogram"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="#20c4d9"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 3v18h18"></path>
                    <path d="M20 18v3"></path>
                    <path d="M16 16v5"></path>
                    <path d="M12 13v8"></path>
                    <path d="M8 16v5"></path>
                    <path d="M3 11c6 0 5 -5 9 -5s3 5 9 5"></path>
                  </svg>
                </span>
                <span className="mx-5 block">Inicio</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`AnBodega/${token}`}
                className={({ isActive }) =>
                  isActive
                    ? `flex items-center  bg-gradient-to-r from-cyan-500 to-blue-500
            text-white
            rounded-full p-1`
                    : `flex items-center text-black hover:bg-gradient-to-r from-cyan-500 to-blue-500
            hover:text-white
            rounded-full p-1`
                }
              >
                <span className="bg-gray-100 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-chart-dots-2"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="#3f51b5"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 3v18h18"></path>
                    <path d="M9 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M13 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M18 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M21 3l-6 1.5"></path>
                    <path d="M14.113 6.65l2.771 3.695"></path>
                    <path d="M16 12.5l-5 2"></path>
                  </svg>
                </span>

                <span className="mx-5 block dark:text-white">Bodegas</span>
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to={`AnInventario/${token}`}
                className={({ isActive }) =>
                  isActive
                    ? `flex items-center  bg-gradient-to-r from-cyan-500 to-blue-500
            text-white
            rounded-full p-1`
                    : `flex items-center text-black hover:bg-gradient-to-r from-cyan-500 to-blue-500
            hover:text-white
            rounded-full p-1`
                }
              >
                <span className="bg-gray-100 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#20c4d9"
                      d="M3 4.5A1.5 1.5 0 0 1 4.5 3h2A1.5 1.5 0 0 1 8 4.5v2A1.5 1.5 0 0 1 6.5 8H6v3.84a.999.999 0 0 1 .207.16L8 13.793c.063.063.116.133.16.207H12v-.5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5V15H8.16a1.001 1.001 0 0 1-.16.207L6.207 17a1 1 0 0 1-1.414 0L3 15.207a1 1 0 0 1 0-1.414L4.793 12c.063-.063.133-.117.207-.16V8h-.5A1.5 1.5 0 0 1 3 6.5v-2Z"
                    />
                  </svg>
                </span>

                <span className="mx-5 block">Inventario</span>
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to={`AnProductos/${token}`}
                className={({ isActive }) =>
                  isActive
                    ? `flex items-center  bg-gradient-to-r from-cyan-500 to-blue-500
            text-white
            rounded-full p-1`
                    : `flex items-center text-black hover:bg-gradient-to-r from-cyan-500 to-blue-500
            hover:text-white
            rounded-full p-1`
                }
              >
                <span className="bg-gray-100 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#3f51b5"
                      d="M28 23v3.586l-5-5V15a1 1 0 0 0-.553-.894L17 11.381V5.828l2.586 2.586L21 7l-5-5l-5 5l1.414 1.414L15 5.828v5.554l-5.447 2.723A1 1 0 0 0 9 15v6.586l-5 5V23H2v7h7v-2H5.414l4.783-4.783l5.356 2.678a1.001 1.001 0 0 0 .894 0l5.356-2.678L26.586 28H23v2h7v-7Zm-13 .382l-4-2v-4.764l4 2Zm1-6.5L12.236 15L16 13.118L19.764 15Zm5 4.5l-4 2v-4.764l4-2Z"
                    />
                  </svg>
                </span>

                <span className="mx-5 block dark:text-white">Productos</span>
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to={`AnPedidos/${token}`}
                className={({ isActive }) =>
                  isActive
                    ? `flex items-center  bg-gradient-to-r from-cyan-500 to-blue-500
            text-white
            rounded-full p-1`
                    : `flex items-center text-black hover:bg-gradient-to-r from-cyan-500 to-blue-500
            hover:text-white
            rounded-full p-1`
                }
              >
                <span className="bg-gray-100 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 48 48"
                  >
                    <g fill="#3F51B5">
                      <circle cx="8" cy="38" r="3" />
                      <circle cx="16" cy="40" r="3" />
                      <circle cx="24" cy="33" r="3" />
                      <circle cx="32" cy="35" r="3" />
                      <circle cx="40" cy="31" r="3" />
                      <path d="m39.1 29.2l-7.3 3.7l-8.3-2.1l-8 7l-7-1.7l-1 3.8l9 2.3l8-7l7.7 1.9l8.7-4.3z" />
                    </g>
                    <g fill="#00BCD4">
                      <circle cx="8" cy="20" r="3" />
                      <circle cx="16" cy="22" r="3" />
                      <circle cx="24" cy="15" r="3" />
                      <circle cx="32" cy="20" r="3" />
                      <circle cx="40" cy="8" r="3" />
                      <path d="M38.3 6.9c-2.1 3.2-5.3 8-6.9 10.4c-1.2-.7-3.1-2-6.4-4l-1.3-.8l-8.3 7.3l-7-1.7l-1 3.9l9 2.3l7.7-6.7c2.6 1.6 5.8 3.6 6.5 4.1l.5.5l.9-.1c1.1-.1 1.1-.1 9.5-12.9l-3.2-2.3z" />
                    </g>
                  </svg>
                </span>

                <span className="mx-5 block">Pedidos</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`AnVentas/${token}`}
                className={({ isActive }) =>
                  isActive
                    ? `flex items-center  bg-gradient-to-r from-cyan-500 to-blue-500
            text-white
            rounded-full p-1`
                    : `flex items-center text-black hover:bg-gradient-to-r from-cyan-500 to-blue-500
            hover:text-white
            rounded-full p-1`
                }
              >
                <span className="bg-gray-100 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#00BCD4"
                      d="M37 18h6v24h-6zm-8 8h6v16h-6zm-8-4h6v20h-6zm-8 10h6v10h-6zm-8-4h6v14H5z"
                    />
                    <g fill="#3F51B5">
                      <circle cx="8" cy="16" r="3" />
                      <circle cx="16" cy="18" r="3" />
                      <circle cx="24" cy="11" r="3" />
                      <circle cx="32" cy="13" r="3" />
                      <circle cx="40" cy="9" r="3" />
                      <path d="m39.1 7.2l-7.3 3.7l-8.3-2.1l-8 7l-7-1.7l-1 3.8l9 2.3l8-7l7.7 1.9l8.7-4.3z" />
                    </g>
                  </svg>
                </span>

                <span className="mx-5 block">Ventas</span>
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                to={`AnUsuarios/${token}`}
                className={({ isActive }) =>
                  isActive
                    ? `flex items-center  bg-gradient-to-r from-cyan-500 to-blue-500
            text-white
            rounded-full p-1`
                    : `flex items-center text-black hover:bg-gradient-to-r from-cyan-500 to-blue-500
            hover:text-white
            rounded-full p-1`
                }
              >
                <span className="bg-gray-100 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#20c4d9"
                      d="M3.625 25.062a1 1 0 0 1-.77-1.187L6.51 6.585l2.267 9.258l1.923-5.188l3.58 3.74l3.884-13.102l2.934 11.734l1.96-1.51l5.27 11.74a1 1 0 1 1-1.826.817l-4.23-9.428l-2.374 1.826l-1.896-7.596l-2.783 9.393l-3.755-3.924l-3.08 8.314l-1.73-7.083l-1.843 8.71a1 1 0 0 1-1.187.775z"
                    />
                  </svg>
                </span>
                <span className="mx-5 block">Usuarios</span>
              </NavLink>
            </li> */}
          </ul>
          <ul>
            <span className="mt-5 block font-bold mb-4 text-xl dark:text-white ">
              Opciones
            </span>
            <li className="flex items-center">
              <NavLink
                to={`TodoComands/${token}`}
                className={({ isActive }) =>
                  isActive
                    ? `flex items-center  bg-gradient-to-r from-cyan-500 to-blue-500
              text-white
              rounded-full p-1`
                    : `flex items-center text-black hover:bg-gradient-to-r from-cyan-500 to-blue-500
              hover:text-white
              rounded-full p-1`
                }
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#99b8c4"
                      d="m23.265 24.381l.9-.894c4.164.136 4.228-.01 4.411-.438l1.144-2.785l.085-.264l-.093-.231c-.049-.122-.2-.486-2.8-2.965V15.5c3-2.89 2.936-3.038 2.765-3.461l-1.139-2.814c-.171-.422-.236-.587-4.37-.474l-.9-.93a20.166 20.166 0 0 0-.141-4.106l-.116-.263l-2.974-1.3c-.438-.2-.592-.272-3.4 2.786l-1.262-.019c-2.891-3.086-3.028-3.03-3.461-2.855L9.149 3.182c-.433.175-.586.237-.418 4.437l-.893.89c-4.162-.136-4.226.012-4.407.438l-1.146 2.786l-.09.267l.094.232c.049.12.194.48 2.8 2.962v1.3c-3 2.89-2.935 3.038-2.763 3.462l1.138 2.817c.174.431.236.584 4.369.476l.9.935a20.243 20.243 0 0 0 .137 4.1l.116.265l2.993 1.308c.435.182.586.247 3.386-2.8l1.262.016c2.895 3.09 3.043 3.03 3.466 2.859l2.759-1.115c.436-.173.588-.234.413-4.436Zm-11.858-6.524a4.957 4.957 0 1 1 6.488 2.824a5.014 5.014 0 0 1-6.488-2.824Z"
                    />
                  </svg>
                </span>
                <span className="mx-5 block dark:text-white">
                  Configuraciónes
                </span>
              </NavLink>
            </li>
            <li></li>
            <li></li>
          </ul>
        </div>
      )}
    </>
  );
};
