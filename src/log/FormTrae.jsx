import React, { useState } from "react";
import { TodoFunctions } from "../apis/ApiData";
export const FormTrae = () => {
  // const [data.setData] = ({

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFormTrae = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();

      await TodoFunctions.postTrae(data);
      setLoading(false);
      window.location.reload();
    } catch (error) {
      setLoading(false);
    }
  };

  const HandleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div class="bg-white dark:bg-[#37415197] dark:border-none rounded-md dark:text-white border w-full  lg:h-fit p-4 m-1">
        <form onSubmit={handleFormTrae}>
          <div class="grid gap-6 mb-6  md:grid-cols-2 lg:grid-cols-3">
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium  ">
                Tipo de persona
              </label>
              <input
                type="text"
                id="first_name"
                name="tipoPersona"
                class="bg-gray-50 outline-none border
                 border-gray-300  text-sm rounded-lg dark:text-white
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#374151] 
               
               
                "
                placeholder="..."
                onChange={HandleInput}
              />
            </div>
            <div>
              <label for="last_name" class="block mb-2 text-sm font-medium  ">
                Nit
              </label>
              <input
                type="text"
                id="last_name"
                class="bg-gray-50 outline-none  border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-[#374151] dark:text-white"
                placeholder="..."
                name="nit"
                onChange={HandleInput}
              />
            </div>
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Identificación
              </label>
              <input
                type="text"
                id="first_name"
                name="tipoIdentificacion"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
              focus:ring-blue-500 dark:bg-[#374151] dark:text-white focus:border-blue-500 block w-full p-2.5 outline-none "
                placeholder="..."
                onChange={HandleInput}
              />
            </div>
            <div>
              <label
                for="last_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 outline-none "
              >
                No.
              </label>
              <input
                type="text"
                id="last_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 dark:bg-[#374151] dark:text-white focus:border-blue-500 block w-full p-2.5 outline-none "
                placeholder="..."
                name="numero"
                onChange={HandleInput}
              />
            </div>
            {/* xx */}
            <div>
              <label
                for="company"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Nombre de la Empre/Neg
              </label>
              <input
                type="text"
                id="company"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 dark:bg-[#374151] dark:text-white focus:border-blue-500 block w-full p-2.5 outline-none "
                placeholder="..."
                name="nombre"
                onChange={HandleInput}
              />
            </div>
            <div>
              <label
                for="phone"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Numero Tel:
              </label>
              <input
                type="tel"
                id="phone"
                name="telefono"
                onChange={HandleInput}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
             focus:ring-blue-500 dark:bg-[#374151] dark:text-white focus:border-blue-500 block w-full p-2.5 outline-none "
                placeholder="123-45-678"
              />
            </div>
            <div>
              <label for="website" class="block mb-2 text-sm font-medium  ">
                Pais
              </label>
              <input
                type="text"
                id="website"
                name="pais"
                onChange={HandleInput}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 dark:bg-[#374151] dark:text-white focus:border-blue-500 block w-full p-2.5 outline-none "
                placeholder="..."
              />
            </div>
            <div>
              <label
                for="visitors"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Departamento
              </label>
              <input
                type="text"
                id="visitors"
                name="departamento"
                onChange={HandleInput}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 dark:bg-[#374151] dark:text-white focus:border-blue-500 block w-full p-2.5 outline-none "
                placeholder=""
              />
            </div>

            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Ciudad
              </label>
              <input
                type="text"
                id="email"
                onChange={HandleInput}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
         focus:ring-blue-500 dark:bg-[#374151] dark:text-white focus:border-blue-500 block w-full p-2.5 outline-none "
                placeholder="ciudad"
                name="ciudad"
              />
            </div>
          </div>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Dirección
            </label>
            <input
              type="text"
              id="email"
              onChange={HandleInput}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
         focus:ring-blue-500 dark:bg-[#374151] dark:text-white focus:border-blue-500 block w-full p-2.5 outline-none "
              placeholder=""
              name="direccion"
            />
          </div>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              onChange={HandleInput}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
         focus:ring-blue-500 dark:bg-[#374151] dark:text-white focus:border-blue-500 block w-full p-2.5 outline-none  "
              placeholder="invensys@company.com"
              name="correo"
            />
          </div>

          {loading ? (
            <span
              type="submit"
              class="text-white bg-[#019afa] hover:bg-[#13a3fd] focus:outline-none focus:ring-blue-300
     font-medium rounded-lg text-sm cursor-no-drop w-full  px-5 py-2.5 text-center flex justify-center
      "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
            </span>
          ) : (
            <button
              type="submit"
              class="text-white bg-[#019afa] hover:bg-[#13a3fd] focus:outline-none focus:ring-blue-300
     font-medium rounded-lg text-sm block w-full  px-5 py-2.5 text-center
      "
            >
              Actualizar
            </button>
          )}
        </form>
      </div>
    </>
  );
};
