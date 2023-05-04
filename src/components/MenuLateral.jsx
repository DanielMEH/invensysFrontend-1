import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/fuente.css";
import user from "../assets/icons/user-check.svg";
import users from "../assets/icons/users.svg";
import calendar from "../assets/icons/calendar.svg";
import bell from "../assets/icons/bell.svg";
import home from "../assets/icons/home.svg";
import chart from "../assets/icons/bar-chart.svg";
import comand from "../assets/icons/command.svg";
import help from "../assets/icons/help-circle.svg";
import send from "../assets/icons/send.svg";
import settings from "../assets/icons/settings.svg";
import start from "../assets/icons/star.svg";
import grid from "../assets/icons/grid.svg";
import harddrive from "../assets/icons/hard-drive.svg";
import truck from "../assets/icons/truck.svg";
import cloceSession from "../assets/icons/log-out.svg";
import compras from "../assets/icons/shopping-cart.svg";
import axios from "axios";
import { getNotification } from "../apis/ApiData";
export const MenuLateral = () => {
  const hundleClick = () => {
    localStorage.removeItem("secure_token");
    localStorage.removeItem("perfil_rol");
    localStorage.removeItem("auth_cuenta");
    localStorage.removeItem("response_auth");
    localStorage.removeItem("type");
    localStorage.removeItem("module");
    localStorage.removeItem("token_token1");
    window.location.href = "/login";
  };
  const fecha = new Date().getFullYear();
  const [usersP, setUsersP] = useState([]);
  const token = localStorage.getItem("secure_token");
  const token1 = localStorage.getItem("token_token1");
  const [notify, setNotify] = useState([]);
  let type = localStorage.getItem("type");
  let usersData = {
    tokeVerify: "",
    permisions: [],
  };

  useEffect(() => {
    (async () => {
      const data = await getNotification();

      setNotify(data.data.responseNotification);
    })();
  }, []);
  if (type === "user") {
    const Webk = () => {
      useEffect(() => {
        async function getModulesUser() {
          const response = await axios.get(
            `http://localhost:3002/getMod/${token1}`
          );

          const modules = response.data.data;
          modules.map((item) => {
            return setUsersP([...usersP, usersP.push(item.titulo)]);
          });
        }
        getModulesUser();
      }, []);
    };
    const modules = localStorage.getItem("module");
    const obj = modules;
    let toke = token ? token : null;
    usersData.tokeVerify = toke;
    usersData.permisions = ["bodega"];
    usersData.permisions = usersP;
    Webk();
  }

  if (type === "superAdmin") {
    let tokeVerify = token ? token : null;
    usersData.permisions = [
      "superAdmin",
      "bodega",
      "categoria",
      "usuario",
      "notificacion",
      "producto",
      "proveedor",
      "pedidos",
      "inicio",
      "analityc",
      "perfil",
      "dasboard",
      "shope",
      "config",
      "ayuda",
      "report",
      "start",
      "venta",
    ];
    usersData.tokeVerify = tokeVerify;
  }

  const [users, setUsers] = useState(usersData);

  const handleMouse = () => {};
  const handleMouseOut = (e) => {};

  document.body.style.overflowX = "hidden";
  return (
    <>
      <div className="mr-[4rem]  lg:mr-[13rem]">
        <div
          className="

selft_scroll
fixed top-0
  bg-white mr-[10rem]
 w-14 lg:w-48   b  overflow-x-hidden  "
          style={{
            boxShadow: " 12px 2px 29px -14px rgba(182,215,217,1)",
          }}
        >
          <div
            className="   flex flex-col gap-1  justify-between"
            onMouseMove={handleMouse}
          >
            <div className="section-1">
              <h2 className="text-center sticky hidden lg:block  top-0 bg-white z-20 block text-xl font-bold py-2 border-b text-neutral-800">
                Identificate
              </h2>
              <div className="contenedor_perfil_count flex">
                <NavLink
                  to={"/perfil"}
                  className="contenedor_perfil rounded my-1 border w-full mx-1 flex items-center relative p-1"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHM9q8xoTwiTtydq44Th2pdu-P27I3Xs3M26EdMFZY5jacGnNnQ_jQ0gqBsvlmDxpvkxA&usqp=CAU"
                    alt="perfil"
                    className="w-8"
                  />
                  <div className="administrador mx-1 hidden lg:block">
                    Administrador
                  </div>
                  <div className="activ absolute w-2 h-2 bg-green-400 rounded-full  right-1 top-1 "></div>
                </NavLink>
              </div>
              <div className="items_list_roles">
                <ul className="p-0 m-0">
                  {users.permisions.includes("inicio") ? (
                    <li>
                      <NavLink
                        to={"/dasboard"}
                        className={({ isActive }) =>
                          isActive
                            ? `
                        flex 
                        bg-gray-100
                        items-center 
                         mx-1 mt-3  p-2 font-medium text-black
                         rounded `
                            : `flex 
                         hover:bg-gray-100
                         items-center 
                          mx-1 mt-3  p-2 font-medium text-black
                          rounded `
                        }
                      >
                        <img src={home} alt="" width={20} />
                        <div className="NavLinks1 pt-[2px] ml-3 whitespace-nowrap hidden lg:block">
                          Inicio
                        </div>
                      </NavLink>
                    </li>
                  ) : null}
                  {users.permisions.includes("perfil") ? (
                    <li className="p-0 m-0">
                      <NavLink
                        to={"/perfil"}
                        className={({ isActive }) =>
                          isActive
                            ? `
                    flex 
                    bg-gray-100
                    items-center 
                     mx-1 my-[2px]  p-2 font-medium text-black
                     rounded `
                            : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1  my-[2px] p-2 font-medium text-black
                      rounded `
                        }
                      >
                        <img src={user} alt="" width={20} />
                        <div className="NavLinks1 pt-[2px] ml-3 hidden lg:block">
                          Perfil
                        </div>
                      </NavLink>
                    </li>
                  ) : null}
                  {users.permisions.includes("usuario") ? (
                    <li>
                      <NavLink
                        to={"/usuarios"}
                        className={({ isActive }) =>
                          isActive
                            ? `
                    flex 
                    bg-gray-100
                    items-center 
                     mx-1  my-[2px] p-2 font-medium text-black
                     rounded `
                            : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1 my-[2px] p-2 font-medium text-black
                      rounded `
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="#787878"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19.128a9.38 9.38 0 0 0 2.625.372a9.337 9.337 0 0 0 4.121-.952a4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0a3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0a2.625 2.625 0 0 1 5.25 0Z"
                          />
                        </svg>
                        <div className="NavLinks7 pt-[2px] ml-3 whitespace-nowrap hidden lg:block">
                          Usuarios
                        </div>
                      </NavLink>
                    </li>
                  ) : null}
                  {users.permisions.includes("notificacion") ? (
                    <li>
                      <NavLink
                        to={"/notificaciones"}
                        className={({ isActive }) =>
                          isActive
                            ? `
                     flex 
                     bg-gray-100
                     items-center 
                      mx-1  my-[2px] p-2 font-medium text-black
                      rounded `
                            : `flex 
                      hover:bg-gray-100
                      items-center 
                       mx-1 my-[2px] p-2 font-medium text-black
                       rounded `
                        }
                      >
                        <img src={bell} alt="" width={20} />
                        <div className="NavLinks7 pt-[2px] ml-3 whitespace-nowrap hidden lg:block ">
                          Notificaciones{" "}
                          {notify.length > 0 ? (
                            <span className="bg-red-500 text-white rounded-full px-1 text-xs">
                              {notify.length > 9 ? "9+" : notify.length}
                            </span>
                          ) : null}
                        </div>
                      </NavLink>
                    </li>
                  ) : null}
                  {users.permisions.includes("bodega") ? (
                    <li>
                      <NavLink
                        to={"/bodega"}
                        className={({ isActive }) =>
                          isActive
                            ? `
                    flex 
                    bg-gray-100
                    items-center 
                     mx-1  my-[2px] p-2 font-medium text-black
                     rounded `
                            : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1 my-[2px] p-2 font-medium text-black
                      rounded `
                        }
                      >
                        <img src={grid} alt="" width={20} />
                        <div className="NavLinks2 pt-[2px] ml-3 whitespace-nowrap hidden lg:block">
                          Bodegas
                        </div>
                      </NavLink>
                    </li>
                  ) : null}
                  {users.permisions.includes("producto") ? (
                    <li>
                      <NavLink
                        to={"/producto"}
                        className={({ isActive }) =>
                          isActive
                            ? `
                    flex 
                    bg-gray-100
                    items-center 
                     mx-1  my-[2px] p-2 font-medium text-black
                     rounded `
                            : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1 my-[2px] p-2 font-medium text-black
                      rounded `
                        }
                      >
                        <img src={comand} alt="" width={20} />
                        <div className="NavLinks3 pt-[2px] ml-3 whitespace-nowrap hidden lg:block">
                          Productos
                        </div>
                      </NavLink>
                    </li>
                  ) : null}
                  {users.permisions.includes("categoria") ? (
                    <li>
                      <NavLink
                        to={"/categorias"}
                        className={({ isActive }) =>
                          isActive
                            ? `
                    flex 
                    bg-gray-100
                    items-center 
                     mx-1  my-[2px] p-2 font-medium text-black
                     rounded `
                            : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1 my-[2px] p-2 font-medium text-black
                      rounded `
                        }
                      >
                        <img src={harddrive} alt="" width={20} />
                        <div className="NavLinks4 pt-[2px] ml-3 whitespace-nowrap hidden lg:block">
                          Categorias
                        </div>
                      </NavLink>
                    </li>
                  ) : null}
                  {users.permisions.includes("proveedor") ? (
                    <li>
                      <NavLink
                        to={"/proveedor"}
                        className={({ isActive }) =>
                          isActive
                            ? `
                    flex 
                    bg-gray-100
                    items-center 
                     mx-1  my-[2px] p-2 font-medium text-black
                     rounded `
                            : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1 my-[2px] p-2 font-medium text-black
                      rounded `
                        }
                      >
                        <img src={truck} alt="" width={20} />
                        <div className="NavLinks5 pt-[2px] ml-3 whitespace-nowrap hidden lg:block">
                          Proveedores
                        </div>
                      </NavLink>
                    </li>
                  ) : null}

                  {users.permisions.includes("pedidos") ? (
                    <li>
                      <NavLink
                        to={"/pedidos"}
                        className={({ isActive }) =>
                          isActive
                            ? `
                    flex 
                    
                    items-center 
                     mx-1 bg-gray-100 my-[2px] p-2 font-medium text-black
                     rounded `
                            : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1 my-[2px] p-2 font-medium text-black
                      rounded `
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 48 48"
                        >
                          <g
                            fill="none"
                            stroke="
#777777"
                            stroke-linejoin="round"
                            stroke-width="4"
                          >
                            <rect width="30" height="36" x="9" y="8" rx="2" />
                            <path
                              stroke-linecap="round"
                              d="M18 4v6m12-6v6m-14 9h16m-16 8h12m-12 8h8"
                            />
                          </g>
                        </svg>
                        <div className="NavLinks6 pt-[2px] ml-3 whitespace-nowrap hidden lg:block">
                          Pedidos
                        </div>
                      </NavLink>
                    </li>
                  ) : null}
                  {users.permisions.includes("venta") ? (
                    <li>
                      <NavLink
                        to={"/venta"}
                        className={({ isActive }) =>
                          isActive
                            ? `
                    flex 
                    
                    items-center 
                     mx-1 bg-gray-100 my-[2px] p-2 font-medium text-black
                     rounded `
                            : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1 my-[2px] p-2 font-medium text-black
                      rounded `
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#777777"
                            d="M14.25 21.4q-.575.575-1.425.575T11.4 21.4l-8.8-8.8q-.275-.275-.438-.65T2 11.15V4q0-.825.588-1.413T4 2h7.15q.425 0 .8.163t.65.437l8.8 8.825q.575.575.575 1.413T21.4 14.25l-7.15 7.15ZM12.825 20l7.15-7.15L11.15 4H4v7.15L12.825 20ZM6.5 8q.625 0 1.063-.438T8 6.5q0-.625-.438-1.063T6.5 5q-.625 0-1.063.438T5 6.5q0 .625.438 1.063T6.5 8ZM4 4Z"
                          />
                        </svg>
                        <div className="NavLinks6 pt-[2px] ml-3 whitespace-nowrap hidden lg:block">
                          P. venta
                        </div>
                      </NavLink>
                    </li>
                  ) : null}
                  {users.permisions.includes("analityc") ? (
                    <li>
                      <NavLink
                        to={"/analityc"}
                        className={({ isActive }) =>
                          isActive
                            ? `
                    flex 
                    
                    items-center 
                     mx-1 bg-gray-100 my-[2px] p-2 font-medium text-black
                     rounded `
                            : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1 my-[2px] p-2 font-medium text-black
                      rounded `
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#777777"
                            d="m6 16.5l-3 2.94V11h3m5 3.66l-1.57-1.34L8 14.64V7h3m5 6l-3 3V3h3m2.81 9.81L17 11h5v5l-1.79-1.79L13 21.36l-3.47-3.02L5.75 22H3l6.47-6.34L13 18.64"
                          />
                        </svg>
                        <div className="NavLinks6 pt-[2px] ml-3 whitespace-nowrap hidden lg:block">
                          Estadisticas
                        </div>
                      </NavLink>
                    </li>
                  ) : null}
                  <li>
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive
                          ? `
                    flex 
                    bg-gray-100
                    items-center 
                     mx-1  my-[2px] p-2 font-medium text-black
                     rounded `
                          : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1 my-[2px] p-2 font-medium text-black
                      rounded `
                      }
                    >
                      <button
                        onClick={hundleClick}
                        className="flex 
                     hover:bg-gray-100
                     items-center 
                     
                        font-medium text-black
                      rounded "
                      >
                        <img src={cloceSession} alt="" width={20} />
                        <div className="pt-[2px] ml-3 whitespace-nowrap hidden lg:block">
                          {" "}
                          Cerrar sesión
                        </div>
                      </button>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            {users.permisions.includes("config") ? (
              <div className="titkle">
                <h2 className="ml-4 font-bold mt-12 mb-4 hidden lg:block  text-2xl whitespace-nowrap  ">
                  configuración
                </h2>
                <hr />
              </div>
            ) : null}
            <div className="section-2">
              <div className="items-2">
                <ul>
                  <li className="mt-30"></li>
                  {users.permisions.includes("config") ? (
                    <li>
                      <NavLink
                        to={"/settings"}
                        className={({ isActive }) =>
                          isActive
                            ? `
                   flex 
                   bg-gray-100
                   items-center 
                    mx-1  my-[2px] p-2 font-medium text-black
                    rounded `
                            : `flex 
                    hover:bg-gray-100
                    items-center 
                     mx-1 my-[2px] p-2 font-medium text-black
                     rounded `
                        }
                      >
                        <img src={settings} alt="" width={20} />
                        <div className="pt-[2px] ml-3 whitespace-nowrap hidden lg:block">
                          Configuración
                        </div>
                      </NavLink>
                    </li>
                  ) : null}
                  {users.permisions.includes("ayuda") ? (
                    <li>
                      <NavLink
                        to={"/ayudaAdmin"}
                        className={({ isActive }) =>
                          isActive
                            ? `
                    flex 
                    bg-gray-100
                    items-center 
                     mx-1  my-[2px] p-2 font-medium text-black
                     rounded `
                            : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1 my-[2px] p-2 font-medium text-black
                      rounded `
                        }
                      >
                        <img src={help} alt="" width={20} />
                        <div className="pt-[2px] ml-3 whitespace-nowrap hidden lg:block">
                          Ayuda
                        </div>
                      </NavLink>
                    </li>
                  ) : null}
                  {users.permisions.includes("report") ? (
                    <li>
                      <NavLink
                        to={"/reportes"}
                        className={({ isActive }) =>
                          isActive
                            ? `
                    flex 
                    bg-gray-100
                    items-center 
                     mx-1  my-[2px] p-2 font-medium text-black
                     rounded `
                            : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1 my-[2px] p-2 font-medium text-black
                      rounded `
                        }
                      >
                        <img src={send} alt="" width={20} />
                        <div className="pt-[2px] ml-3 whitespace-nowrap hidden lg:block">
                          Enviar reporte
                        </div>
                      </NavLink>
                    </li>
                  ) : null}
                  {users.permisions.includes("start") ? (
                    <li>
                      <NavLink
                        to={"/startAdmin"}
                        className={({ isActive }) =>
                          isActive
                            ? `
                    flex 
                    bg-gray-100
                    items-center 
                     mx-1  my-[2px] p-2 font-medium text-black
                     rounded `
                            : `flex 
                     hover:bg-gray-100
                     items-center 
                      mx-1 my-[2px] p-2 font-medium text-black
                      rounded `
                        }
                      >
                        <img src={start} alt="" width={20} />
                        <div className="pt-[2px] ml-3 whitespace-nowrap hidden lg:block">
                          Calificanos
                        </div>
                      </NavLink>
                    </li>
                  ) : null}
                  <div className="mx-2 p-2 text-gray-400 text-sm ">
                    &copy; {fecha} | stored
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
