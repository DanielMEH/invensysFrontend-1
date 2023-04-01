import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useContextModules } from "../hooks/context/ContextModules";
import { useGetUsers } from "../hooks/context/GetUsersContext";
export const InicioChart = () => {
  const {
    getUsersAdmins,
    getUsers,
   
  } = useGetUsers();
  const { getModulesTodo, dataproductM, dataCategory, dataProviderM } =
    useContextModules();
  const [state1, setState1] = useState(false);
  let countP = dataproductM.length;

  useEffect(() => {
    (async () => {
      await getModulesTodo();
      await getUsersAdmins();
      setState1(true);
    })();
  }, []);

  const options1 = {
    series: [countP],
    chart: {
      height: 100,
      type: "radialBar",

      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "40%",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
        },
      },
    },

    labels: [""],
  };
  const categoryOption = {
    series: [dataCategory.length],
    chart: {
      height: 100,
      type: "radialBar",

      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "40%",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
        },
      },
    },

    labels: [""],
  };
  const providerOption = {
    series: [dataProviderM.length],
    chart: {
      height: 100,
      type: "radialBar",

      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "40%",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
        },
      },
    },

    labels: [""],
  };
  const users = {
    series: [getUsers.length],
    chart: {
      height: 100,
      type: "radialBar",

      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "40%",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
        },
      },
    },

    labels: [""],
  };
  const counterNumber = () => {
    countP = dataproductM.length;

    let valueDisplays = document.querySelectorAll(".num");
    let interval = 1000;

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));

      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  };

  const counterNumberVentas = () => {
    let valueDisplays = document.querySelectorAll(".ventas");
    let interval = 1000;

    valueDisplays.forEach((valueDisplay) => {
      let endValue = parseInt(valueDisplay.getAttribute("data-va"));
      let startValue = endValue - 50;
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;

        valueDisplay.textContent = startValue
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  };
  useEffect(() => {
    if (countP > 0) {
      counterNumber();
    }
    counterNumberVentas();
  }, [countP]);

  return (
    <>
      <div className="cards mt-8 flex gap-2  mx-auto scroll-smooth">
        <section className="relative">
          <Link to="users/sdfdfdf" className="">
            <div
              className="card-single bg-white rounded-md inline-block p-2
        border-b-4 border-[#00a6ed] hover:translate-y-[-3px] duration-200 hover:shadow-lg relative
        "
            >
              <Link to="/usuarios" className="absolute top-0  right-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#00a6ed"
                    d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m-5-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
                  />
                </svg>
              </Link>
              <div className="spana text-gray-500 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M107.19 159a56 56 0 1 0-46.38 0a91.83 91.83 0 0 0-53.93 38.81a4 4 0 1 0 6.7 4.37a84 84 0 0 1 140.84 0a4 4 0 1 0 6.7-4.37A91.83 91.83 0 0 0 107.19 159ZM36 108a48 48 0 1 1 48 48a48.05 48.05 0 0 1-48-48Zm212 95.35a4 4 0 0 1-5.53-1.17A83.81 83.81 0 0 0 172 164a4 4 0 0 1 0-8a48 48 0 1 0-17.82-92.58a4 4 0 1 1-3-7.43a56 56 0 0 1 44 103a91.83 91.83 0 0 1 53.93 38.86a4 4 0 0 1-1.11 5.5Z"
                  />
                </svg>
                Nuevos usuarios
              </div>
              <div className="cont flex items-center justify-between">
                <div className="number flex items-center">
                  {getUsers.length > 0 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="#2ECC71"
                        d="m16 6.594l-.72.687l-12.5 12.5l1.44 1.44L16 9.437l11.78 11.78l1.44-1.437l-12.5-12.5l-.72-.686z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="red"
                        d="m4.22 10.78l-1.44 1.44l12.5 12.5l.72.686l.72-.687l12.5-12.5l-1.44-1.44L16 22.564L4.22 10.78z"
                      />
                    </svg>
                  )}
                  <span className="text-black text-xl font-bold mx-1">
                    <span>+</span>
                    {getUsers.length > 0 ? (
                      <span
                        class="num"
                        data-val={getUsers.length > 0 ? getUsers.length : 1}
                      >
                        {getUsers.length > 0 ? getUsers.length : 0}
                      </span>
                    ) : (
                      <span class="num2">0</span>
                    )}
                  </span>
                </div>
                <div className="count">
                  <h1>
                    <Chart
                      options={users}
                      series={users.series}
                      type="radialBar"
                      height={90}
                      width={150}
                    />
                  </h1>
                </div>
              </div>
            </div>
          </Link>
        </section>
        <section className="">
          <Link to="productos/sdfdfdf" className="">
            <div
              className="card-single bg-white rounded-md inline-block p-2
        border-b-4 border-green-400 hover:translate-y-[-3px] duration-200 hover:shadow-lg relative
        "
            >
              <Link to="/producto" className="absolute top-0  right-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#4ade80"
                    d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m-5-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
                  />
                </svg>
              </Link>
              <div className="spana text-gray-500 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 2048 2048"
                >
                  <path
                    fill="currentColor"
                    d="M1024 1000v959l-64 32l-832-415V536l832-416l832 416v744h-128V680l-640 320zm-64-736L719 384l621 314l245-122l-625-312zm-64 1552v-816L256 680v816l640 320zM335 576l625 312l238-118l-622-314l-241 120zm1073 1216v-128h640v128h-640zm0-384h640v128h-640v-128zm-256 640v-128h128v128h-128zm0-512v-128h128v128h-128zm0 256v-128h128v128h-128zm-128 24h1h-1zm384 232v-128h640v128h-640z"
                  />
                </svg>
                Productos
              </div>
              <div className="cont flex items-center justify-between">
                <div className="number flex items-center">
                  {countP > 0 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="#2ECC71"
                        d="m16 6.594l-.72.687l-12.5 12.5l1.44 1.44L16 9.437l11.78 11.78l1.44-1.437l-12.5-12.5l-.72-.686z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="red"
                        d="m4.22 10.78l-1.44 1.44l12.5 12.5l.72.686l.72-.687l12.5-12.5l-1.44-1.44L16 22.564L4.22 10.78z"
                      />
                    </svg>
                  )}
                  <span className="text-black text-xl font-bold mx-1">
                    <span>+</span>
                    {countP > 0 ? (
                      <span class="num" data-val={countP > 0 ? countP : 1}>
                        {countP > 0 ? countP : 0}
                      </span>
                    ) : (
                      <span class="num2">0</span>
                    )}
                  </span>
                </div>
                <div className="count">
                  <h1>
                    <Chart
                      options={options1}
                      series={options1.series}
                      type="radialBar"
                      height={90}
                      width={150}
                    />
                  </h1>
                </div>
              </div>
            </div>
          </Link>
        </section>
        <section className="">
          <Link to="categorias/sdfdfdf" className="">
            <div
              className="card-single bg-white rounded-md inline-block p-2
        border-b-4 border-red-400 hover:translate-y-[-3px] duration-200 hover:shadow-lg relative
        "
            >
              <Link to="/categorias" className="absolute top-0  right-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#f87171"
                    d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m-5-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
                  />
                </svg>
              </Link>
              <div className="spana text-gray-500 flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2z"
                  />
                </svg>
                Categorias
              </div>
              <div className="cont flex items-center justify-between">
                <div className="number flex items-center">
                  {dataCategory.length > 0 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="#2ECC71"
                        d="m16 6.594l-.72.687l-12.5 12.5l1.44 1.44L16 9.437l11.78 11.78l1.44-1.437l-12.5-12.5l-.72-.686z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="red"
                        d="m4.22 10.78l-1.44 1.44l12.5 12.5l.72.686l.72-.687l12.5-12.5l-1.44-1.44L16 22.564L4.22 10.78z"
                      />
                    </svg>
                  )}
                  <span className="text-black text-xl font-bold mx-1">
                    <span>+</span>
                    {dataCategory.length > 0 ? (
                      <span
                        class="num"
                        data-val={
                          dataCategory.length > 0 ? dataCategory.length : 1
                        }
                      >
                        {dataCategory.length > 0 ? dataCategory.length : 0}
                      </span>
                    ) : (
                      <span class="num2">0</span>
                    )}
                  </span>
                </div>
                <div className="count">
                  <h1>
                    <Chart
                      options={categoryOption}
                      series={categoryOption.series}
                      type="radialBar"
                      height={90}
                      width={150}
                    />
                  </h1>
                </div>
              </div>
            </div>
          </Link>
        </section>
        <section className="">
          <Link to="proveedores/sdfdfdf" className="">
            <div
              className="card-single bg-white rounded-md inline-block p-2
        border-b-4 border-purple-500 hover:translate-y-[-3px] duration-200 hover:shadow-lg relative
        "
            >
              <Link to="/proveedor" className="absolute top-0  right-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#a855f7"
                    d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m-5-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
                  />
                </svg>
              </Link>
              <div className="spana text-gray-500 flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="m29.81 16l-7-9.56A1 1 0 0 0 22 6H3a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h2.14a4 4 0 0 0 7.72 0h6.28a4 4 0 0 0 7.72 0H29a1 1 0 0 0 1-1v-7.44a1 1 0 0 0-.19-.56ZM20 8h1.49l5.13 7H20ZM9 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2Zm14 0a2 2 0 1 1 2-2a2 2 0 0 1-2 2Zm5-3h-1.14a4 4 0 0 0-7.72 0h-6.28a4 4 0 0 0-7.72 0H4V8h14v9h10Z"
                  />
                </svg>
                Proveedores
              </div>
              <div className="cont flex items-center justify-between">
                <div className="number flex items-center">
                  {dataProviderM.length > 0 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="#2ECC71"
                        d="m16 6.594l-.72.687l-12.5 12.5l1.44 1.44L16 9.437l11.78 11.78l1.44-1.437l-12.5-12.5l-.72-.686z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="red"
                        d="m4.22 10.78l-1.44 1.44l12.5 12.5l.72.686l.72-.687l12.5-12.5l-1.44-1.44L16 22.564L4.22 10.78z"
                      />
                    </svg>
                  )}
                  <span className="text-black text-xl font-bold mx-1">
                    <span>+</span>
                    {dataProviderM.length > 0 ? (
                      <span
                        class="num"
                        data-val={
                          dataProviderM.length > 0 ? dataProviderM.length : 1
                        }
                      >
                        {dataProviderM.length > 0 ? dataProviderM.length : 0}
                      </span>
                    ) : (
                      <span class="num2">0</span>
                    )}
                  </span>
                </div>
                <div className="count">
                  <h1>
                    <Chart
                      options={providerOption}
                      series={providerOption.series}
                      type="radialBar"
                      height={90}
                      width={150}
                    />
                  </h1>
                </div>
              </div>
            </div>
          </Link>
        </section>
        <section className="">
          <Link to="users/sdfdfdf" className="">
            <div
              className="card-single bg-white rounded-md inline-block p-2
        border-b-4 border-pink-500 hover:translate-y-[-3px] duration-200 hover:shadow-lg relative
        "
            >
              <Link to="/usuarios" className="absolute top-0  right-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ec4899"
                    d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m-5-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
                  />
                </svg>
              </Link>
              <div className="spana text-gray-500 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M10.6 9c-.4-.1-.8-.3-1.1-.6c-.3-.1-.4-.4-.4-.6c0-.2.1-.5.3-.6c.3-.2.6-.4.9-.3c.6 0 1.1.3 1.4.7l.9-1.2c-.3-.3-.6-.5-.9-.7c-.3-.2-.7-.3-1.1-.3V4H9.4v1.4c-.5.1-1 .4-1.4.8c-.4.5-.7 1.1-.6 1.7c0 .6.2 1.2.6 1.6c.5.5 1.2.8 1.8 1.1c.3.1.7.3 1 .5c.2.2.3.5.3.8c0 .3-.1.6-.3.9c-.3.3-.7.4-1 .4c-.4 0-.9-.1-1.2-.4c-.3-.2-.6-.5-.8-.8l-1 1.1c.3.4.6.7 1 1c.5.3 1.1.6 1.7.6V16h1.1v-1.5c.6-.1 1.1-.4 1.5-.8c.5-.5.8-1.3.8-2c0-.6-.2-1.3-.7-1.7c-.5-.5-1-.8-1.6-1zM10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8zm0 14.9c-3.8 0-6.9-3.1-6.9-6.9S6.2 3.1 10 3.1s6.9 3.1 6.9 6.9s-3.1 6.9-6.9 6.9z"
                  />
                </svg>
                Ventas
              </div>
              <div className="cont flex items-center justify-between">
                <div className="number flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#2ECC71"
                      d="m16 6.594l-.72.687l-12.5 12.5l1.44 1.44L16 9.437l11.78 11.78l1.44-1.437l-12.5-12.5l-.72-.686z"
                    />
                  </svg>
                  <span className="text-black text-xl font-bold mx-1">
                    <span>$</span>
                    <span class="ventas" data-va="2000000">
                      00
                    </span>
                  </span>
                </div>
                <div className="count">
                  <h1>
                    <Chart
                      options={options1}
                      series={options1.series}
                      type="radialBar"
                      height={90}
                      width={150}
                    />
                  </h1>
                </div>
              </div>
            </div>
          </Link>
        </section>
      </div>
      <div className="cards mt-4 flex gap-2  mx-auto scroll-smooth">
        <section className="">
          <Link to="/notificaciones" className="">
            <div
              className="card-single bg-white rounded-md inline-block p-2
        border-b-4 border-[#00a6ed] hover:translate-y-[-3px] duration-200 hover:shadow-lg
        "
            >
              <div className="spana text-gray-500 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="currentColor"
                    d="M11.5 19v8.75c0 .174-.036.346-.106.505L8.638 34.5h30.724l-2.755-6.245a1.25 1.25 0 0 1-.107-.505V19c0-6.904-5.596-12.5-12.5-12.5c-6.903 0-12.5 5.596-12.5 12.5ZM18 37H8.254a2.25 2.25 0 0 1-2.058-3.158L9 27.487V19c0-8.284 6.716-15 15-15c8.284 0 15 6.716 15 15v8.486l2.804 6.356A2.25 2.25 0 0 1 39.746 37H30v1a6 6 0 0 1-12 0v-1Zm9.5 0h-7v1a3.5 3.5 0 1 0 7 0v-1Z"
                  />
                </svg>
                Notificaciónes
              </div>
              <div className="cont flex items-center justify-between">
                <div className="number flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#2ECC71"
                      d="m16 6.594l-.72.687l-12.5 12.5l1.44 1.44L16 9.437l11.78 11.78l1.44-1.437l-12.5-12.5l-.72-.686z"
                    />
                  </svg>
                  <span className="text-black text-xl font-bold mx-1">
                    <span></span>
                    <span class="num" data-val="12">
                      00
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      </div>

      <Outlet />
    </>
  );
};
