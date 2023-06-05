import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { getBusiness, getDataAll, TodoFunctions } from "../apis/ApiData";
import moment from "moment-with-locales-es6";
moment.locale("es");
export const Licenciaok = () => {
  const [company, setCompany] = useState([]);
  const [dataAll, setDataAll] = useState([]);
  const [dataLicence, setDataLicence] = useState([]);
  const [load, setLoad] = useState(false);
  const money = new Intl.NumberFormat("en-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 2,
  });
  useEffect(() => {
    (async () => {
      setLoad(true);

      const responseAll = await getDataAll();
      setDataAll(responseAll.data.data);
      const getLicence = await TodoFunctions.getLicenceSoftware();

      setDataLicence(getLicence.data.result);
      setLoad(false);
    })();
  }, []);

  return (
    <>
      {load ? (
        <div className=" grid place-content-center h-full w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <g stroke="currentColor">
              <circle
                cx="12"
                cy="12"
                r="9.5"
                fill="none"
                stroke-linecap="round"
                stroke-width="3"
              >
                <animate
                  attributeName="stroke-dasharray"
                  calcMode="spline"
                  dur="1.5s"
                  keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                  keyTimes="0;0.475;0.95;1"
                  repeatCount="indefinite"
                  values="0 150;42 150;42 150;42 150"
                />
                <animate
                  attributeName="stroke-dashoffset"
                  calcMode="spline"
                  dur="1.5s"
                  keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                  keyTimes="0;0.475;0.95;1"
                  repeatCount="indefinite"
                  values="0;-16;-59;-59"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                dur="2s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
              />
            </g>
          </svg>
        </div>
      ) : (
        <div class="font-sans bg-grey-lighter flex flex-col min-h-screen w-full">
          <div class="flex-grow container mx-auto sm:px-4 pt-6 pb-8">
            <div class="bg-white border-t dark:bg-[#37415197] dark:text-white dark:border-[#777777]  border-b sm:border-l sm:border-r sm:rounded shadow mb-6">
              <div class="border-b px-6">
                <div class="flex justify-between -mb-px items-center py-2">
                  <div class=" w-[100px] sm:w-[200px] lg:w-full flex overflow-x-auto lg:flex">
                    <span className="mx-2 truncate font-bold">
                      {" "}
                      {dataAll.length > 0 ? dataAll[0].name : null}
                    </span>{" "}
                    <span className="mx-2 font-bold">
                      {" "}
                      {dataAll.length > 0 ? dataAll[0].correo : null}{" "}
                    </span>
                    <span className="mx-2 font-bold">
                      {" "}
                      {dataAll.length > 0 ? dataAll[0].rol : null}{" "}
                    </span>
                    <span className="mx-2 font-bold truncate">
                      {dataAll.length > 0 ? dataAll[0].pais : null} -{" "}
                      {dataAll.length > 0 ? dataAll[0].ciudad : null}{" "}
                    </span>
                    <span
                      className={
                        dataAll.length > 0
                          ? dataAll[0].estado === "activo"
                            ? "text-green-400 mx-2 truncate "
                            : "red mx-2 truncate"
                          : null
                      }
                    >
                      {dataAll.length > 0 ? dataAll[0].estado : null}{" "}
                    </span>
                    <span className="mx-1 font-bold truncate">
                      Licencia <span> Activa </span>
                    </span>
                  </div>
                  <div class="flex text-sm">
                    <img
                      src={dataAll.length > 0 ? dataAll[0].imgURL : null}
                      alt="Avatar"
                      className="rounded-full w-10 h-10 mr-4"
                    />
                  </div>
                </div>
              </div>

              <div class="flex flex-col xl:flex-row ">
                <div class="w-full border-b xl:border-none lg:w-full  xl:w-1/3 text-center py-8">
                  <div class="border-r">
                    <div class="text-grey-darker mb-2">
                      <span class="text-4xl lg:text-5xl ">
                        {dataLicence.length > 0
                          ? money.format(dataLicence[0].pago)
                          : 0}
                      </span>
                    </div>
                    <div class="text-sm uppercase text-grey tracking-wide">
                      Licencia
                    </div>
                  </div>
                </div>
                <div class="w-full  lg:w-full  xl:w-1/3 text-center py-8">
                  <div class="border-r">
                    <div class="text-grey-darker mb-2">
                      <span class="text-3xl align-top">
                        <span class="text-green align-top"></span>
                      </span>
                      <span class="text-4xl lg:text-5xl">
                        {dataLicence.length > 0
                          ? money.format(1250000 - dataLicence[0].pago)
                          : 0}
                      </span>
                    </div>
                    <div class="text-sm uppercase text-grey tracking-wide">
                      Descuento
                    </div>
                  </div>
                </div>
                <div class="w-full  lg:w-full  xl:w-1/3 text-center py-8">
                  <div>
                    <div class="text-grey-darker mb-2">
                      <span class="text-3xl align-top">
                        <span class="text-green align-top"></span>
                      </span>
                      <span class="text-4xl lg:text-5xl border-b xl:border-none">
                        {dataLicence.length > 0 ? money.format(1250000) : 0}
                      </span>
                    </div>
                    <div class="text-sm uppercase text-grey tracking-wide">
                      Precio de licencia
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap -mx-4">
              <div class="w-[320px] md:w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col">
                <div class="flex-grow flex flex-col dark:bg-[#37415197] dark:text-white dark:border-[#777777] bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
                  <div class="border-b">
                    <div
                      class="flex lg:justify-between flex-col md:flex-row px-6 -mb-px
                     md:items-center"
                    >
                      <h3 class="text-blue-dark py-4 font-normal text-lg">
                        Preferencias de pago
                      </h3>
                      <div class="flex ">
                        <span
                          class="appearance-none flex
                         py-4 border-b  mr-3"
                        >
                          {dataLicence.length > 0
                            ? dataLicence[0].name_Card
                            : 0}
                          <span>
                            {" "}
                            {dataLicence.length > 0
                              ? dataLicence[0].exp_month
                              : 0}
                            /
                            {dataLicence.length > 0
                              ? dataLicence[0].exp_year
                              : 0}
                          </span>
                        </span>
                      </div>
                      <div className="d">
                        <span>
                          Fecha del pago:{" "}
                          {moment(
                            dataLicence.length > 0
                              ? dataLicence[0].Fecha
                              : "14-02-2020"
                          ).format("D MMMM YYYY, h:mm:ss a")}{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow flex-col flex md:flex-row px-6 py-6 text-grey-darker items-center border-b -mx-4">
                    <div class="w-2/5 xl:w-1/4 px-4 flex flex-col items-center">
                      <div class="rounded-full bg-orange  inline-flex mr-3">
                        <svg
                          class="fill-current text-white h-8 w-8 block"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                        >
                          <g fill-rule="evenodd">
                            <path d="M21.78 15.37c.51-.61.83-1.4.83-2.26 0-2.74-1.6-4.38-4.24-4.38V5.45c0-.12-.1-.22-.22-.22h-1.27c-.11 0-.2.1-.2.21v3.3h-1.7V5.44c0-.12-.1-.22-.22-.22H13.5c-.12 0-.2.1-.21.21v3.3H9.67c-.12 0-.21.09-.21.21v1.31c0 .12.1.22.21.22h.21c.94 0 1.7.79 1.7 1.75v7c0 .92-.68 1.67-1.55 1.75a.21.21 0 0 0-.18.16l-.33 1.32c-.01.06 0 .13.04.19.04.05.1.08.17.08h3.55v3.3c0 .1.1.2.2.2h1.28c.12 0 .21-.1.21-.22v-3.28h1.7v3.3c0 .1.1.2.21.2h1.27c.12 0 .22-.1.22-.22v-3.28h.85c2.65 0 4.24-1.64 4.24-4.37 0-1.28-.68-2.39-1.68-3zm-6.8-4.01h2.54c.94 0 1.7.78 1.7 1.75 0 .96-.76 1.75-1.7 1.75h-2.55v-3.5zm3.39 8.75h-3.4v-3.5h3.4c.93 0 1.7.78 1.7 1.75 0 .96-.77 1.75-1.7 1.75z"></path>
                          </g>
                        </svg>
                      </div>
                      <span class="text-lg">Estado</span>
                    </div>
                    <div class=" md:flex lg:hidden xl:flex w-1/4 px-4 items-center">
                      <div class="bg-orange h-2 rounded-full flex-grow mr-2"></div>
                      {dataLicence.length > 0 ? dataLicence[0].estado : 0}
                    </div>
                  </div>
                  <div class="flex-grow flex-col md:flex-row flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                    <div class="w-2/5 xl:w-1/4 px-4 flex items-center">
                      <div class="rounded-full bg-grey inline-flex mr-3">
                        <svg
                          class="fill-current text-white h-8 w-8 block"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 38 38"
                        >
                          <g fill-rule="evenodd">
                            <path d="M12.29 28.04l1.29-5.52-1.58.67.63-2.85 1.64-.68L16.52 10h5.23l-1.52 7.14 2.09-.74-.58 2.7-2.05.8-.9 4.34h8.1l-.99 3.8z"></path>
                          </g>
                        </svg>
                      </div>
                      <span class="text-lg">Acción</span>
                    </div>
                    <div class="hidden md:flex lg:hidden xl:flex w-1/4 px-4 items-center">
                      <div class="bg-grey h-2 w-2 rounded-full mr-2"></div>
                      {dataLicence.length > 0 ? dataLicence[0].verificado : 0}
                    </div>
                    <div class="flex w-3/5 md:w/12">
                      <div class="w-1/2 px-4">
                        <div class="text-right">Key cliente</div>
                      </div>
                      <div class="w-1/2 px-4">
                        <div class="text-right text-grey">
                          {dataLicence.length > 0 ? dataLicence[0].licence : 0}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                    <span>Id: </span>{" "}
                    {dataLicence.length > 0 ? dataLicence[0].client_secret : 0}
                  </div>
                  <div class="px-6 py-4">
                    <div class="text-center text-grey">
                      Preferencias de pago predeterminadas
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-1/2 px-4">
                <div class="bg-white dark:bg-[#37415197] dark:text-white dark:border-[#777777] border-t border-b sm:rounded sm:border shadow">
                  <div class="border-b">
                    <div class="flex justify-between px-6 -mb-px">
                      <h3 class="text-blue-dark py-4 font-normal text-lg">
                        Proveedor de servicios <span> Invensys </span>{" "}
                        <span> Divisa de pago </span> <span> COP</span>
                      </h3>
                    </div>
                  </div>
                  <div>
                    <div class="text-center px-6 py-4">
                      <div class="py-8">
                        <div class="mb-4">
                          <svg
                            class="inline-block fill-current text-grey h-16 w-16"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M11.933 13.069s7.059-5.094 6.276-10.924a.465.465 0 0 0-.112-.268.436.436 0 0 0-.263-.115C12.137.961 7.16 8.184 7.16 8.184c-4.318-.517-4.004.344-5.974 5.076-.377.902.234 1.213.904.959l2.148-.811 2.59 2.648-.793 2.199c-.248.686.055 1.311.938.926 4.624-2.016 5.466-1.694 4.96-6.112zm1.009-5.916a1.594 1.594 0 0 1 0-2.217 1.509 1.509 0 0 1 2.166 0 1.594 1.594 0 0 1 0 2.217 1.509 1.509 0 0 1-2.166 0z" />
                          </svg>
                        </div>
                        <p class="text-2xl text-grey-darker font-medium mb-4">
                          Facturación
                        </p>
                        <p class="text-grey max-w-xs mx-auto mb-6">
                          Correo electrónico de contacto de facturación
                        </p>
                        <div>
                          <span class=" rounded px-6 py-1 flex justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="128"
                              height="128"
                              viewBox="0 0 128 128"
                            >
                              <path
                                fill="#FFC107"
                                d="M116.34 101.95H11.67c-4.2 0-7.63-3.43-7.63-7.63V33.68c0-4.2 3.43-7.63 7.63-7.63h104.67c4.2 0 7.63 3.43 7.63 7.63v60.64c0 4.2-3.43 7.63-7.63 7.63z"
                              />
                              <path
                                fill="#424242"
                                d="M4.03 38.88h119.95v16.07H4.03z"
                              />
                              <path
                                fill="#FFF"
                                d="M114.2 74.14H13.87c-.98 0-1.79-.8-1.79-1.79v-8.41c0-.98.8-1.79 1.79-1.79H114.2c.98 0 1.79.8 1.79 1.79v8.41c-.01.98-.81 1.79-1.79 1.79z"
                              />
                              <path
                                fill="none"
                                stroke="#424242"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="2"
                                d="M23.98 70.49c.56-1.08.71-2.34 1.21-3.45c.5-1.11 1.59-2.14 2.79-1.95c1.11.18 1.8 1.29 2.21 2.33c.57 1.45.88 3 .92 4.56c.01.32-.01.67-.22.92c-.37.42-1.13.21-1.42-.27c-.29-.48-.22-1.09-.09-1.64c.62-2.55 2.62-4.72 5.11-5.54c.26-.09.53-.16.8-.11c.58.11.9.71 1.16 1.23c.61 1.19 1.35 2.32 2.2 3.35c.34.42.73.83 1.25.99c1.71.5 2.7-2.02 4.35-2.69c1.98-.8 3.91 1.29 6.01 1.68c3.07.57 4.7-1.82 7.39-2.43c.36-.08.75-.13 1.11-.03c.66.19 1.07.82 1.46 1.39c.91 1.34 2.21 2.66 3.83 2.67c1.03.01 1.98-.52 2.92-.97c3.33-1.59 7.26-2.25 10.74-1.03"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
