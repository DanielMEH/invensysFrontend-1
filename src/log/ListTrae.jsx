import React, {useState, useEffect} from 'react'
import {TodoFunctions} from "../apis/ApiData"
import image from "../assets/img/company.jpg"
export const ListTrae = () => {

    const [data,setData] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(()=>{
        (async ()=>{
            setLoad(true)
            const response = await TodoFunctions.getTrae()
            setLoad(false)
            setData(response.data.company);
        })()
    },[])
  return (
    <>
      <div class=" ">
        <div
          class="relative flex flex-col dark:border-none dark:bg-[#37415197] items-center rounded-[20px] w-full lg:w-[700px]
             border   bg-white bg-clip-border
             shadow-3xl shadow-shadow-500 dark:!bg-navy-800  p-3"
        >
          {load ? (
            <>
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
            </>
          ) : (
            <>
              {data.length > 0 ? (
                <>
                  <div class="mt-2 mb-8 w-full">
                    <h4 class="px-2 text-xl dark:text-[#019afa] font-bold text-navy-700 ">
                      Información general de tu negocio
                    </h4>
                  </div>
                  <div class="grid grid-cols-2 gap-4 px-2 w-full">
                    <div
                      class="flex flex-col items-start justify-center rounded-2xl 
                    dark:bg-[#374151] dark:text-white
                     bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
                    >
                      <p class="text-sm text-gray-600 dark:text-white">
                        Nombre
                      </p>
                      <p class="text-base font-medium text-navy-700 ">
                        {data[0].nombre}
                      </p>
                    </div>

                    <div class="flex flex-col dark:bg-[#374151] dark:text-white justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p class="text-sm text-gray-600 dark:text-white">
                        Tipo de persona
                      </p>
                      <p class="text-base font-medium text-navy-700 ">
                        {data[0].tipoPersona}
                      </p>
                    </div>

                    <div class="flex flex-col dark:bg-[#374151] dark:text-white items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p class="text-sm text-gray-600 dark:text-white">Nit</p>
                      <p class="text-base font-medium text-navy-700 ">
                        {data[0].nit}
                      </p>
                    </div>

                    <div class="flex flex-col dark:bg-[#374151] dark:text-white justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p class="text-sm text-gray-600dark:text-white dark:text-white">
                        Identificación
                      </p>
                      <p class="text-base font-medium text-navy-700 ">
                        {data[0].tipoIdentificacion}: {data[0].numero}
                      </p>
                    </div>

                    <div class="flex flex-col items-start dark:bg-[#374151] dark:text-white justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p class="text-sm text-gray-600 dark:text-white">
                        Correo
                      </p>
                      <p class="text-base font-medium text-navy-700 ">
                        {data[0].correo}
                      </p>
                    </div>

                    <div class="flex flex-col justify-center dark:bg-[#374151] dark:text-white rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p class="text-sm text-gray-600 dark:text-white">
                        Telefono
                      </p>
                      <p class="text-base font-medium text-navy-700 ">
                        {data[0].telefono}
                      </p>
                    </div>
                    <div class="flex flex-col dark:bg-[#374151] dark:text-white justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p class="text-sm text-gray-600 dark:text-white">Pais</p>
                      <p class="text-base font-medium text-navy-700 ">
                        {data[0].pais}
                      </p>
                    </div>
                    <div class="flex flex-col dark:bg-[#374151] dark:text-white justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p class="text-sm text-gray-600 dark:text-white">
                        Ciudad
                      </p>
                      <p class="text-base font-medium text-navy-700 ">
                        {data[0].ciudad}
                      </p>
                    </div>
                    <div class="flex flex-col dark:bg-[#374151] dark:text-white justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p class="text-sm text-gray-600 dark:text-white">
                        Departameto
                      </p>
                      <p class="text-base font-medium text-navy-700 ">
                        {data[0].departamento}
                      </p>
                    </div>
                    <div class="flex flex-col dark:bg-[#374151] dark:text-white justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                      <p class="text-sm text-gray-600 dark:text-white">
                        Dirección
                      </p>
                      <p class="text-base font-medium text-navy-700 ">
                        {data[0].direccion}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h2>Registra tu Negocio/Empresa</h2>
                  <img src={image} alt="" />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
