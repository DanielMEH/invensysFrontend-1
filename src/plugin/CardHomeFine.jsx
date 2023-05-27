import React from 'react'
import { Link } from 'react-router-dom';
export const CardHomeFine = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col bg-[#fff] min-h-screen">
        <div className="bg-[#40b5fe] p-10 rounded-xl">
          <div className="flex flex-col justify-center items-center text-center">
            <div className="max-w-sm font-bold font-sans text-white">
              Tu éxito, nuestro compromiso.
            </div>
            <div className="font-light max-w-lg mt-5 text-sm text-white">
              Revolucionamos tu inventario: la clave para un negocio sin
              límites.
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
            <div className="bg-[#FFFBEC] rounded-xl">
              <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#CFD8DC"
                    d="m39.4 23l-.8-4L26 21.6V8h-4v12.3l-13.9-9l-2.2 3.4l15.2 9.8L9.4 39.8l3.2 2.4l11.3-14.8l8.4 12.7l3.4-2.2l-8.4-12.5z"
                  />
                  <circle cx="24" cy="24" r="7" fill="#3F51B5" />
                  <g fill="#00BCD4">
                    <circle cx="24" cy="8" r="5" />
                    <circle cx="39" cy="21" r="5" />
                    <circle cx="7" cy="13" r="5" />
                    <circle cx="11" cy="41" r="5" />
                    <circle cx="34" cy="39" r="5" />
                  </g>
                </svg>
                <div className="mt-3 font-semibold text-lg">
                  Calidad garantizada.
                </div>
                <div className="text-sm font-light">Hacemos que suceda.</div>
                <div className="my-4">
                  <span className="font-bold text-base">100% - </span>
                  <span className="font-light text-sm"> Efectivo</span>
                </div>

                <button className="bg-[#ffffff] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                  Intereses
                </button>
              </div>
            </div>

            <div className="bg-[#F9ECFF] rounded-xl">
              <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#00BCD4"
                    d="M7 31h10v10H7zm28.3-11.7l-5.6-5.6c-.4-.4-.4-1 0-1.4l5.6-5.6c.4-.4 1-.4 1.4 0l5.6 5.6c.4.4.4 1 0 1.4l-5.6 5.6c-.4.4-1 .4-1.4 0z"
                  />
                  <circle cx="12" cy="13" r="6" fill="#3F51B5" />
                  <circle cx="36" cy="36" r="6" fill="#448AFF" />
                  <g fill="#90A4AE">
                    <path d="M11 24h2v5h-2z" />
                    <path d="m12 21l-3 4h6z" />
                  </g>
                  <g fill="#90A4AE">
                    <path d="M20 12h5v2h-5z" />
                    <path d="m28 13l-4-3v6z" />
                  </g>
                  <g fill="#90A4AE">
                    <path d="M35 21h2v5h-2z" />
                    <path d="m36 29l3-4h-6z" />
                  </g>
                </svg>
                <div className="mt-3 font-semibold text-lg">
                  Tu solución completa.
                </div>
                <div className="text-sm font-light w-60 md:w-auto">
                  La clave del progreso
                </div>
                <div className="my-4">
                  <span className="font-bold text-base">100% - </span>
                  <span className="font-light text-sm"> Efectivo</span>
                </div>

                <button className="bg-[#ffffff] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                  Recursos
                </button>
              </div>
            </div>

            <div className="bg-[#ECEEFF] rounded-xl">
              <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#90A4AE"
                    d="M40 35v5H8v-5H4v5c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4v-5h-4z"
                  />
                  <g fill="#1565C0">
                    <path d="M24 23.4L17 15h14z" />
                    <path d="M22 4h4v14h-4zm9.5 22.9l-.7 1.1l3.5 1.9l.6-1.2c1.6-3 2.6-4.7 3.5-5.2c.9-.5 2.6-.5 5.6-.5v-4c-7.7 0-8.4.4-12.5 7.9z" />
                    <path d="m38.4 31l-9 4L28 25zm-21.9-4.1l.6 1.2l-3.5 1.9l-.6-1.2c-1.6-3-2.6-4.7-3.5-5.2C8.7 23 7 23 4 23v-4c7.7 0 8.4.4 12.5 7.9z" />
                    <path d="m20 25l-1.4 10l-9-4z" />
                  </g>
                </svg>
                <div className="mt-3 font-semibold text-lg">
                  Innovación a tu alcance.
                </div>
                <div className="text-sm font-light w-60 md:w-auto">
                  Resultados sin límites
                </div>
                <div className="my-4">
                  <span className="font-bold text-base">100% - </span>
                  <span className="font-light text-sm"> Efectivo</span>
                </div>

                <button className="bg-[#ffffff] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                  blog
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              to={"/login"}
              className="mt-12 bg-slate-900 text-white px-4 rounded-full py-3"
            >
              Comenzar ahora
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
