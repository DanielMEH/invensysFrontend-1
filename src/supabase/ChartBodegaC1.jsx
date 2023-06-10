import React, { useEffect, useMemo, useState } from "react";

import { getBusiness, getUsersAdmin } from "../apis/ApiData";
import moment from "moment-with-locales-es6";
import Skeleton from "react-loading-skeleton";
moment.locale("es");
export const ChartBodegaC1 = () => {
  const [ventas, setVentas] = useState([]);
  const [compras, setCompras] = useState([]);
  const [bodega, setBodega] = useState([]);
  const [SubProducts, setSubProducts] = useState([]);
  const [load, setLoad] = useState(false);

  useMemo(() => {
    (async () => {
      setLoad(true);
      const bussiness = await getBusiness();
      setBodega(bussiness.data.dataInventary);
      setSubProducts(bussiness.data.dataSubProduct);
      setCompras(bussiness.data.dataPedidos);
      setVentas(bussiness.data.dataCompras);
      await getUsersAdmin();

      setLoad(false);
    })();
  }, []);

  // fechas: moment(fecha.createdAt).format('l'),

  let totalProductsBodega = SubProducts.reduce(
    (acc, el) => acc + el.priceCompra * el.unidad,
    0
  );

  let TotalVentas = useMemo(
    () => ventas.reduce((acc, el) => acc + el.total, 0),
    [ventas]
  );
  let porcentage = Math.abs((TotalVentas * 100) / TotalVentas);
  const [darkMode, setDarkMode] = useState(false);
  useMemo(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);
  return (
    <>
      {load ? (
        <div className="skeletton flex gap-4 m-5">
          <Skeleton
            height={140}
            width={270}
            baseColor={darkMode ? "#374151" : ""}
            highlightColor={darkMode ? "#293a4f" : ""}
            className="rounded-full bg-red-600 flex overflow-hidden"
          />
          <Skeleton
            height={140}
            width={270}
            baseColor={darkMode ? "#374151" : ""}
            highlightColor={darkMode ? "#293a4f" : ""}
            className="rounded-full bg-red-600 flex overflow-hidden"
          />
          <Skeleton
            height={140}
            width={270}
            baseColor={darkMode ? "#374151" : ""}
            highlightColor={darkMode ? "#293a4f" : ""}
            className="rounded-full bg-red-600 flex overflow-hidden"
          />
        </div>
      ) : (
        <div className=" flex gap-2 ">
          <section className="bg-white dark:bg-[#37415197] dark:text-white  shadow-lg w-[20rem] px-5 py-2 rounded-md my-5">
            <div className="principal flex items-center justify-between">
              <div className="text font-bold mx-2 block">Total de bodegas</div>
              <div className="icon bg-[#019afa4b] inline-block   rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#019afa"
                    d="M258 21.89c-.5 0-1.2 0-1.8.12c-4.6.85-10.1 5.1-13.7 14.81c-3.8 9.7-4.6 23.53-1.3 38.34c3.4 14.63 10.4 27.24 18.2 34.94c7.6 7.7 14.5 9.8 19.1 9c4.8-.7 10.1-5.1 13.7-14.7c3.8-9.64 4.8-23.66 1.4-38.35c-3.5-14.8-10.4-27.29-18.2-34.94c-6.6-6.8-12.7-9.22-17.4-9.22zM373.4 151.4c-11 .3-24.9 3.2-38.4 8.9c-15.6 6.8-27.6 15.9-34.2 24.5c-6.6 8.3-7.2 14.6-5.1 18.3c2.2 3.7 8.3 7.2 20 7.7c11.7.7 27.5-2.2 43-8.8c15.5-6.7 27.7-15.9 34.3-24.3c6.6-8.3 7.1-14.8 5-18.5c-2.1-3.8-8.3-7.1-20-7.5c-1.6-.3-3-.3-4.6-.3zm-136.3 92.9c-6.6.1-12.6.9-18 2.3c-11.8 3-18.6 8.4-20.8 14.9c-2.5 6.5 0 14.3 7.8 22.7c8.2 8.2 21.7 16.1 38.5 20.5c16.7 4.4 32.8 4.3 44.8 1.1c12.1-3.1 18.9-8.6 21.1-15c2.3-6.5 0-14.2-8.1-22.7c-7.9-8.2-21.4-16.1-38.2-20.4c-9.5-2.5-18.8-3.5-27.1-3.4zm160.7 58.1L336 331.7c4.2.2 14.7.5 14.7.5l6.6 8.7l54.7-28.5l-14.2-10zm-54.5.1l-57.4 27.2c5.5.3 18.5.5 23.7.8l49.8-23.6l-16.1-4.4zm92.6 10.8l-70.5 37.4l14.5 18.7l74.5-44.6l-18.5-11.5zm-278.8 9.1a40.33 40.33 0 0 0-9 1c-71.5 16.5-113.7 17.9-126.2 17.9H18v107.5s11.6-1.7 30.9-1.8c37.3 0 103 6.4 167 43.8c3.4 2.1 10.7 2.9 19.8 2.9c24.3 0 61.2-5.8 69.7-9C391 452.6 494 364.5 494 364.5l-32.5-28.4s-79.8 50.9-89.9 55.8c-91.1 44.7-164.9 16.8-164.9 16.8s119.9 3 158.4-27.3l-22.6-34s-82.8-2.3-112.3-6.2c-15.4-2-48.7-18.8-73.1-18.8z"
                  />
                </svg>
              </div>
            </div>
            <div className="ventasNumm ">
              <span className="text-xl font-bold p-2 block">
                {bodega.length}
              </span>
            </div>
            <div className="static flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#4ade80"
                  d="m3.5 18.5l6-6l4 4L22 6.92L20.59 5.5l-7.09 8l-4-4L2 17l1.5 1.5Z"
                />
              </svg>
              <span className="text-[#4ade80]">
                {porcentage + "%"} Estable{" "}
              </span>
            </div>
            <div className="my-1">
              <span className="mx-2">{compras.length + ventas.length}</span>
              Productos en movimiento
            </div>
          </section>
          <section className="bg-white dark:bg-[#37415197] dark:text-white  shadow-lg w-[20rem] px-5 py-2 rounded-md my-5">
            <div className="principal flex items-center justify-between">
              <div className="text font-bold mx-2 block">
                valor de todas las bodegas
              </div>
              <div className="icon bg-[#019afa4b] inline-block   rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#019afa"
                    d="M258 21.89c-.5 0-1.2 0-1.8.12c-4.6.85-10.1 5.1-13.7 14.81c-3.8 9.7-4.6 23.53-1.3 38.34c3.4 14.63 10.4 27.24 18.2 34.94c7.6 7.7 14.5 9.8 19.1 9c4.8-.7 10.1-5.1 13.7-14.7c3.8-9.64 4.8-23.66 1.4-38.35c-3.5-14.8-10.4-27.29-18.2-34.94c-6.6-6.8-12.7-9.22-17.4-9.22zM373.4 151.4c-11 .3-24.9 3.2-38.4 8.9c-15.6 6.8-27.6 15.9-34.2 24.5c-6.6 8.3-7.2 14.6-5.1 18.3c2.2 3.7 8.3 7.2 20 7.7c11.7.7 27.5-2.2 43-8.8c15.5-6.7 27.7-15.9 34.3-24.3c6.6-8.3 7.1-14.8 5-18.5c-2.1-3.8-8.3-7.1-20-7.5c-1.6-.3-3-.3-4.6-.3zm-136.3 92.9c-6.6.1-12.6.9-18 2.3c-11.8 3-18.6 8.4-20.8 14.9c-2.5 6.5 0 14.3 7.8 22.7c8.2 8.2 21.7 16.1 38.5 20.5c16.7 4.4 32.8 4.3 44.8 1.1c12.1-3.1 18.9-8.6 21.1-15c2.3-6.5 0-14.2-8.1-22.7c-7.9-8.2-21.4-16.1-38.2-20.4c-9.5-2.5-18.8-3.5-27.1-3.4zm160.7 58.1L336 331.7c4.2.2 14.7.5 14.7.5l6.6 8.7l54.7-28.5l-14.2-10zm-54.5.1l-57.4 27.2c5.5.3 18.5.5 23.7.8l49.8-23.6l-16.1-4.4zm92.6 10.8l-70.5 37.4l14.5 18.7l74.5-44.6l-18.5-11.5zm-278.8 9.1a40.33 40.33 0 0 0-9 1c-71.5 16.5-113.7 17.9-126.2 17.9H18v107.5s11.6-1.7 30.9-1.8c37.3 0 103 6.4 167 43.8c3.4 2.1 10.7 2.9 19.8 2.9c24.3 0 61.2-5.8 69.7-9C391 452.6 494 364.5 494 364.5l-32.5-28.4s-79.8 50.9-89.9 55.8c-91.1 44.7-164.9 16.8-164.9 16.8s119.9 3 158.4-27.3l-22.6-34s-82.8-2.3-112.3-6.2c-15.4-2-48.7-18.8-73.1-18.8z"
                  />
                </svg>
              </div>
            </div>
            <div className="ventasNumm ">
              <span className="text-xl font-bold p-2 block">
                {("$ " + totalProductsBodega).replace(
                  /(\d)(?=(\d\d\d)+(?!\d))/g,
                  "$1,"
                )}
              </span>
            </div>
            <div className="static flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#4ade80"
                  d="m3.5 18.5l6-6l4 4L22 6.92L20.59 5.5l-7.09 8l-4-4L2 17l1.5 1.5Z"
                />
              </svg>
              <span className="text-[#4ade80]">
                {porcentage + "%"} Estable{" "}
              </span>
            </div>
            <div className="my-1">
              <span className="mx-2">{bodega.length}</span>Productos ingresados
            </div>
          </section>
          <section className="bg-white dark:bg-[#37415197] dark:text-white  shadow-lg w-[20rem] px-5 py-2 rounded-md my-5">
            <div className="principal flex items-center justify-between">
              <div className="text font-bold mx-2 block">Subproductos</div>
              <div className="icon bg-[#019afa4b] inline-block   rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 48 48"
                >
                  <mask id="ipSDifferenceSet0">
                    <path
                      fill="#019afa"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                      d="M6 40V19a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2ZM42 8v21a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V19a2 2 0 0 0-2-2H19a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21a2 2 0 0 1 2 2Z"
                    />
                  </mask>
                  <path
                    fill="#019afa"
                    d="M0 0h48v48H0z"
                    mask="url(#ipSDifferenceSet0)"
                  />
                </svg>
              </div>
            </div>
            <div className="ventasNumm ">
              <span
                className={
                  SubProducts.length < 20
                    ? "text-xl font-bold p-2 text-red-500 block truncate "
                    : " truncate text-green-500 text-xl font-bold p-2 block"
                }
              >
                {SubProducts.length}{" "}
                <span> {SubProducts.length < 20 ? "Bajo" : "Bueno"} </span>
              </span>
            </div>
            <div className="static flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#4ade80"
                  d="m3.5 18.5l6-6l4 4L22 6.92L20.59 5.5l-7.09 8l-4-4L2 17l1.5 1.5Z"
                />
              </svg>
              <span className="text-[#4ade80]">
                {porcentage + "%"} Estable{" "}
              </span>
            </div>
            <div className="my-1">
              <span className="mx-2">{ventas.length}</span>Productos vendidos
            </div>
          </section>
        </div>
      )}
    </>
  );
};
