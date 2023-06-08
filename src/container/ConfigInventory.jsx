import React, { useEffect, useState } from "react";

import { Outlet, useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useInventario } from "../hooks/context/ContextInventario";
import moment from "moment-with-locales-es6";
import { CategoryInventory } from "./CategoryInventory";
import "../components/efectosCss.css";
import { getSubProducts, TodoFunctions, getUsersAdmin } from "../apis/ApiData";
import Swal from "sweetalert2";
import { DataSubProducts } from "../components/DataSubProducts";
moment.locale("es");
export const ConfigInventory = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [load, setLoad] = useState(false);
  const [load3, setLoad3] = useState(false);
  const [estado, setEstado] = useState(false);
  const [estado2, setEstado2] = useState(false);
  const [estadoSup, setEstadoSup] = useState(false);
  const [subProducts, setSubProducts] = useState([]);
  const [subModal, setSubModal] = useState(false);
  const [subModal2, setSubModal2] = useState(false);
  const [loadTranslate, setLoadTranslate] = useState(false);
  const [usersAdmin, setUsersAdmin] = useState([]);
  const [subProductsTranslate, setSubProductsTranslate] = useState([]);
  const { id } = useParams();

  const [inventoryData, setInventoryData] = useState([]);
  const {
    DeleteInventario,
    GetInventario,
    inventario,
    setInventario,
    UpdateInventario,
  } = useInventario();
  const navigate = useNavigate();

  const geType = localStorage.getItem("type");
  const validaDelete = () => {
    Swal.fire({
      background: darkMode ? "#374151":"white",
      color: darkMode ? "white" : "black",
      title: "¿Estas seguro de eliminar esta bodega?  ",
      text: "se eliminara todo lo relacionado a este bodega incluyendo subproductos. No podras revertir esta accion!",
      showClass: {
        popup: "animate__animated animate__bounceInDown",
      },
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "eliminar!",
      position: "top",
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteInventory();
      } else {
      }
    });
  };
  useEffect(() => {
    setLoad3(true);
    (async () => {
      const resInv = await GetInventario();
      setInventario(resInv.data.response);
      const usersResponse = await getUsersAdmin();
      setUsersAdmin(usersResponse.data.data);
      setLoad3(false);
    })();
  }, []);
  let inventarioSelect;
  useEffect(() => {
    (async () => {
      setLoading(true);
      setEstadoSup(true);

      let resposneSubProducs = await getSubProducts(id);
      setSubProducts(resposneSubProducs.data.response);
      setLoading(false);
      setEstadoSup(false);
      const resProducTranslate = await TodoFunctions.getTranslateProducts(id);

      setSubProductsTranslate(resProducTranslate.data.response);
      setInventoryData(inventarioSelect);
    })();
  }, [id]);

  if (inventario.length > 0) {
    inventarioSelect = inventario.find((item) => item._id === id);
  } else {
    inventarioSelect = [];
  }

  const DeleteInventory = async () => {
    try {
      setLoading2(true);
      const response = await DeleteInventario(id);

      if (response.status === 200) {
        await toast.success(" se elimino el inventario con exito ", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate("/bodega");
        setLoading2(false);
      }
    } catch (error) {
      await toast.warning(
        " No se puede eliminar esta bodega por que existen productos, traslados o subproductos asociados a ella ",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      setLoading2(false);
    }
  };

  const handleSubmit = async (e) => {
    setInventoryData({
      ...inventoryData,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };

  const handleOptionTranslate = async (id, type) => {
    setLoadTranslate(true);
    (async () => {
      const response = await TodoFunctions.updateSubproduct(id, type);
      setLoadTranslate(false);
      if (response.status === 200) {
        // quitar el producto de la lista de subProductsTranslate por el id
        const newSubProductsTranslate = subProductsTranslate.filter(
          (item) => item._id !== id
        );
        setSubProductsTranslate(newSubProductsTranslate);

        await toast.success("la ejecucion fue exitosa");
      } else {
        return toast.error("Error al eliminar");
      }
    })();
  };

  const handleUpdateBodega = async (correo) => {
    const response = await TodoFunctions.updateBodegaEmail(id, correo);
    if (response.status === 200) {
      await toast.success("Se asigno el usuario a la bodega con exito");
      window.location.reload();
    }
  };
  return (
    <>
      <ToastContainer />
      {load3 ? (
        <h1>Espere</h1>
      ) : (
        <>
          <div className={subModal2 ? "block" : "hidden"}>
            <div className="notifyTranslate absolute z-50  w-screen h-full  inset-0">
              <div
                className="content effect_blur absolute inset-0 rounded border shadow-xl my-20
         mx-auto w-fit h-fit "
              >
                <div className="flex justify-between">
                  <h1 className="text-xl m-2 dark:text-white">
                    Asignar Bodega
                  </h1>
                  <div
                    className="icon cursor-pointer "
                    onClick={() => setSubModal2(!subModal2)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="M202.83 197.17a4 4 0 0 1-5.66 5.66L128 133.66l-69.17 69.17a4 4 0 0 1-5.66-5.66L122.34 128L53.17 58.83a4 4 0 0 1 5.66-5.66L128 122.34l69.17-69.17a4 4 0 1 1 5.66 5.66L133.66 128Z"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-500 mx-2 dark:text-white">
                  asigna bodegas tus usuarios facilitando la gestion de las
                  bodegas
                </p>
                <div className="content  grid grid-cols-2">
                  {usersAdmin.length > 0 ? (
                    <>
                      {usersAdmin.map((item) => (
                        <div className="">
                          <span
                            className="flex border gap-1 dark:bg-[#374151f2] dark:border-none  dark:text-white m-2 p-1 rounded cursor-pointer hover:bg-[#7bbce7] hover:text-white"
                            onClick={() => handleUpdateBodega(item.correo)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="#777777"
                                d="M19 17v2H7v-2s0-4 6-4s6 4 6 4m-3-9a3 3 0 1 0-3 3a3 3 0 0 0 3-3m3.2 5.06A5.6 5.6 0 0 1 21 17v2h3v-2s0-3.45-4.8-3.94M18 5a2.91 2.91 0 0 0-.89.14a5 5 0 0 1 0 5.72A2.91 2.91 0 0 0 18 11a3 3 0 0 0 0-6M8 10H5V7H3v3H0v2h3v3h2v-3h3Z"
                              />
                            </svg>
                            {item.correo}
                          </span>
                        </div>
                      ))}
                    </>
                  ) : (
                    <h1 className="text-center text-xl">
                      No Tienes usuarios aun
                    </h1>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className={subModal ? "block" : "hidden"}>
            <div className="notifyTranslate absolute z-50  w-screen h-full  inset-0">
              <div
                className="content bg-white dark:bg-[#374151f2] absolute inset-0 rounded border shadow-xl my-20
         mx-auto w-fit h-fit "
              >
                <div className="flex justify-between">
                  <h1 className="text-xl m-2 dark:text-white">
                    Productos pendiente
                  </h1>
                  <div
                    className="icon cursor-pointer "
                    onClick={() => {
                      setSubModal(!subModal);
                      window.location.reload();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="M202.83 197.17a4 4 0 0 1-5.66 5.66L128 133.66l-69.17 69.17a4 4 0 0 1-5.66-5.66L122.34 128L53.17 58.83a4 4 0 0 1 5.66-5.66L128 122.34l69.17-69.17a4 4 0 1 1 5.66 5.66L133.66 128Z"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-500 mx-2 dark:text-white">
                  Productos pendientes por importar
                </p>
                {subProductsTranslate.length > 0 ? (
                  <div className="h-[30rem] overflow-y-auto scroll-mx-2.5">
                    {subProductsTranslate.map((item, index) => (
                      <div className="div shadow-md dark:text-white p-1 border rounded-md m-2">
                        <div className="flex justify-between">
                          <span>
                            {" "}
                            <span>
                              {moment(item.createdAt).calendar({
                                sameDay: "[Hoy][ las] h:mm:ss a",
                                nextDay: "[Mañana] [ las] h:mm:ss a",
                                nextWeek: "dddd",
                                lastDay: "[Ayer]",
                                lastWeek:
                                  "[El] dddd [pasado] [a las] h:mm:ss a",
                                sameElse: "DD/MM/YYYY",
                              })}
                            </span>{" "}
                          </span>
                          <span className="ml-10">
                            Origen: <span>{item.origen}</span>{" "}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span>Producto: {item.userCorreo} </span>
                          <span className="flex">
                            Unidades:{" "}
                            <div className="text-green-500">
                              {item.cantidad}
                            </div>{" "}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span>Responsable: {item.responsable} </span>
                          <span>
                            Estado:{" "}
                            <span className="text-red-500">{item.estado}</span>{" "}
                          </span>
                        </div>
                        <div className="buttones flex justify-end gap-1">
                          {loadTranslate ? (
                            <>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="#777777"
                                  d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
                                >
                                  <animateTransform
                                    attributeName="transform"
                                    dur="0.75s"
                                    repeatCount="indefinite"
                                    type="rotate"
                                    values="0 12 12;360 12 12"
                                  />
                                </path>
                              </svg>
                            </>
                          ) : (
                            <button
                              onClick={() =>
                                handleOptionTranslate(item._id, "Aceptado")
                              }
                              className="text-green-500 border border-green-500 p-1 rounded-md

                    hover:bg-green-500 hover:text-white duration-150
                    "
                            >
                              Importar
                            </button>
                          )}
                          <button
                            onClick={() =>
                              handleOptionTranslate(item._id, "Rechazado")
                            }
                            className="text-red-500 border border-red-500 p-1 rounded-md

                    hover:bg-red-500 hover:text-white duration-150

                    "
                          >
                            Rechazar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <h1 className="m-3 dark:text-white">
                    No hay productos pendientes
                  </h1>
                )}
              </div>
            </div>
          </div>
          {inventario.length < 0 ? (
            <div className="m-10 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#777777"
                  d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
                >
                  <animateTransform
                    attributeName="transform"
                    dur="0.75s"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 12 12;360 12 12"
                  />
                </path>
              </svg>
            </div>
          ) : (
            <>
              <div className="bg-white dark:bg-[#37415197] dark:border-none dark:text-white w-[90%]  lg:w-full px-3 py-1 border overflow-x-auto  rounded-sm">
                <div className="iconst_config lg:flex-row flex-col items-start flex lg:items-center justify-start lg:justify-between gap-4 max-7xl mx-auto">
                  <div className="sec1 flex items-center gap-4 overflow-x-auto">
                    {loading2 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#777777"
                          d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
                        >
                          <animateTransform
                            attributeName="transform"
                            dur="0.75s"
                            repeatCount="indefinite"
                            type="rotate"
                            values="0 12 12;360 12 12"
                          />
                        </path>
                      </svg>
                    ) : (
                      <span
                        onClick={() => {
                          validaDelete();
                        }}
                        className="cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="red"
                            d="M16 18q-.425 0-.713-.288T15 17q0-.425.288-.713T16 16h2q.425 0 .713.288T19 17q0 .425-.288.713T18 18h-2Zm0-8q-.425 0-.713-.288T15 9q0-.425.288-.713T16 8h5q.425 0 .713.288T22 9q0 .425-.288.713T21 10h-5Zm0 4q-.425 0-.713-.288T15 13q0-.425.288-.713T16 12h4q.425 0 .713.288T21 13q0 .425-.288.713T20 14h-4ZM5 19q-.825 0-1.413-.588T3 17V8q-.425 0-.713-.288T2 7q0-.425.288-.713T3 6h3v-.5q0-.425.288-.713T7 4.5h2q.425 0 .713.288T10 5.5V6h3q.425 0 .713.288T14 7q0 .425-.288.713T13 8v9q0 .825-.588 1.413T11 19H5ZM5 8v9h6V8H5Zm0 0v9v-9Z"
                          />
                        </svg>
                      </span>
                    )}
                    <span
                      className="buttom cursor-pointer notification "
                      onClick={() => setEstado(!estado)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#22c55e"
                          d="M19.39 10.74L11 19.13V22H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v6.3c-.22.12-.43.26-.61.44M13 19.96V22h2.04l6.13-6.12l-2.04-2.05L13 19.96m9.85-6.49l-1.32-1.32c-.2-.2-.53-.2-.72 0l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72Z"
                        />
                      </svg>
                    </span>
                    <div
                      className={
                        estado
                          ? "notification bg-white z-20 relative visible rounded-md w-full duration-300 "
                          : "duration-200 w-[0rem] invisible"
                      }
                    >
                      <span>
                        <div className="">
                          <div className="login bg-white dark:bg-[#374151] z-20 relative rounded-md w-full ">
                            <div className="">
                              <div className="">
                                <Formik
                                  initialValues={{
                                    name_inventory: "",
                                    description: "",
                                  }}
                                  onSubmit={async (values) => {
                                    const dataUpdate = {
                                      name_inventory:
                                        inventoryData.name_inventory,
                                      description: inventoryData.description,
                                    };
                                    setLoading(true);
                                    (async () => {
                                      const data = await UpdateInventario(
                                        inventoryData._id,
                                        dataUpdate
                                      );

                                      setLoading(false);
                                      if (data.status === 200) {
                                        toast.success("Bodega Actualizado", {
                                          position: "top-right",
                                          autoClose: 2000,
                                          hideProgressBar: false,
                                          closeOnClick: true,
                                          pauseOnHover: true,
                                          draggable: true,
                                          progress: undefined,
                                        });
                                        navigate(`/bodega/inventory/${id}`);
                                      } else {
                                        toast.error(
                                          "Error al actualizar bodega ",
                                          {
                                            position: "top-right",
                                            autoClose: 2000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                          }
                                        );
                                      }
                                    })();
                                  }}
                                >
                                  <Form className="flex items-center ">
                                    <div className="flex flex-col w-full ">
                                      <div
                                        className="Fiel-email border bg-white  flex items-center my-1
                                 border-solid  border-1 border-slate-300 rounded transition-200
                                   "
                                      >
                                        <div className="email w-full">
                                          <Field
                                            type="text"
                                            name="name_inventory"
                                            placeholder="Nombre de la bodega"
                                            className="w-full block
                                               outline-none p-2 dark:bg-[#374151fd] "
                                            value={inventoryData.name_inventory}
                                            onChange={handleSubmit}
                                          />
                                        </div>
                                      </div>
                                      <div className="error">
                                        <ErrorMessage
                                          component="p"
                                          className="mx-2 block text-red-600
                                      animate__animated animate__fadeInUp "
                                          name="name_inventory"
                                          // validate={validateEmail}
                                        />
                                      </div>
                                    </div>
                                    <div className="flex flex-col w-full">
                                      <div
                                        className="Fiel-email border bg-white flex items-center mx-2 my-1
                                 border-solid  border-1 border-slate-300 rounded transition-200
                                   "
                                      >
                                        <div className="email w-full ">
                                          <Field
                                            type="text"
                                            name="description"
                                            placeholder="Ubicación de la bodega"
                                            className="w-full block dark:bg-[#374151fd]
                                               outline-none p-2 "
                                            value={inventoryData.description}
                                            onChange={handleSubmit}
                                          />
                                        </div>
                                      </div>
                                      <div className="error">
                                        <ErrorMessage
                                          component="p"
                                          className="mx-2 block text-red-600
                                      animate__animated animate__fadeInUp "
                                          name="description"
                                          // validate={validateEmail}
                                        />
                                      </div>
                                    </div>
                                    <div className="button w-full relative">
                                      {load === false ? (
                                        <button
                                          type="submit"
                                          className="bg-[#019afa] text-white rounded-full relative
                                       w-5/6 mx-auto  hover:opacity-[0.85] transition
           
                                      p-1 flex justify-center"
                                        >
                                          <span className="text-base font-medium">
                                            Actualizar
                                          </span>
                                        </button>
                                      ) : (
                                        <span
                                          type="button"
                                          className="bg-[#019afa] text-white rounded-full relative
                                      p-1  w-full items-center mx-auto my-2 hover:opacity-[0.85] transition
                                      h-9 flex justify-between truncate"
                                        >
                                          <svg
                                            className="animate-spin mr-1 flex justify-center"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                          >
                                            <defs>
                                              <linearGradient
                                                id="mingcuteLoadingFill0"
                                                x1="50%"
                                                x2="50%"
                                                y1="5.271%"
                                                y2="91.793%"
                                              >
                                                <stop
                                                  offset="0%"
                                                  stop-color="currentColor"
                                                />
                                                <stop
                                                  offset="100%"
                                                  stop-color="currentColor"
                                                  stop-opacity=".55"
                                                />
                                              </linearGradient>
                                              <linearGradient
                                                id="mingcuteLoadingFill1"
                                                x1="50%"
                                                x2="50%"
                                                y1="15.24%"
                                                y2="87.15%"
                                              >
                                                <stop
                                                  offset="0%"
                                                  stop-color="currentColor"
                                                  stop-opacity="0"
                                                />
                                                <stop
                                                  offset="100%"
                                                  stop-color="currentColor"
                                                  stop-opacity=".55"
                                                />
                                              </linearGradient>
                                            </defs>
                                            <g fill="none">
                                              <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                                              <path
                                                fill="url(#mingcuteLoadingFill0)"
                                                d="M8.749.021a1.5 1.5 0 0 1 .497 2.958A7.502 7.502 0 0 0 3 10.375a7.5 7.5 0 0 0 7.5 7.5v3c-5.799 0-10.5-4.7-10.5-10.5C0 5.23 3.726.865 8.749.021Z"
                                                transform="translate(1.5 1.625)"
                                              />
                                              <path
                                                fill="url(#mingcuteLoadingFill1)"
                                                d="M15.392 2.673a1.5 1.5 0 0 1 2.119-.115A10.475 10.475 0 0 1 21 10.375c0 5.8-4.701 10.5-10.5 10.5v-3a7.5 7.5 0 0 0 5.007-13.084a1.5 1.5 0 0 1-.115-2.118Z"
                                                transform="translate(1.5 1.625)"
                                              />
                                            </g>
                                          </svg>
                                          Espere un momento...
                                        </span>
                                      )}
                                    </div>
                                  </Form>
                                </Formik>
                              </div>
                            </div>
                          </div>
                        </div>
                      </span>
                    </div>
                    <span
                      onClick={() => setSubModal(!subModal)}
                      className="cursor-pointer relative"
                    >
                      <span className="absolute color px-1  top-0 text-[10px] right-0 bg-red-500 rounded-full text-white">
                        {subProductsTranslate.length > 0
                          ? subProductsTranslate.length
                          : null}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#777777"
                          d="M22 7v9c0 1.1-.9 2-2 2H6l-4 4V4c0-1.1.9-2 2-2h10.1c-.1.3-.1.7-.1 1c0 2.8 2.2 5 5 5c1.1 0 2.2-.4 3-1m-6-4c0 1.7 1.3 3 3 3s3-1.3 3-3s-1.3-3-3-3s-3 1.3-3 3Z"
                        />
                      </svg>
                    </span>
                    <div className="div truncate flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#777777"
                          d="M14.55 20c.45.76.95 1.44 1.36 2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6.22c-.5-.14-1-.22-1.5-.22c-.17 0-.33 0-.5.03V4h-5v8l-2.5-2.25L8 12V4H6v16h8.55M22 15.5c0 2.6-3.5 6.5-3.5 6.5S15 18.1 15 15.5c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5m-2.3.1c0-.6-.6-1.2-1.2-1.2s-1.2.5-1.2 1.2c0 .6.5 1.2 1.2 1.2s1.3-.6 1.2-1.2Z"
                        />
                      </svg>
                      <span className="mx-[2px]"> · </span>
                      <span className="truncate">
                        {inventarioSelect.description}
                      </span>
                    </div>
                    <div className="div truncate flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 640 512"
                      >
                        <path
                          fill="#777777"
                          d="M224 256a128 128 0 1 0 0-256a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512h362.9c-5.4-9.4-8.6-20.3-8.6-32V352c0-2.1.1-4.2.3-6.3c-31-26-71-41.7-114.6-41.7h-91.4zM528 240c17.7 0 32 14.3 32 32v48h-64v-48c0-17.7 14.3-32 32-32zm-80 32v48c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80z"
                        />
                      </svg>
                      <span className="mx-[2px] block"> · </span>
                      <span className="truncate">
                        {inventarioSelect.responsableInventory}
                      </span>
                      <span className="mx-[2px] block"> · </span>{" "}
                      <span className="truncate">{inventarioSelect.type}</span>
                    </div>
                    <span className="truncate">
                      {geType === "superAdmin" ? (
                        <button
                          className="bg-[#369fe6] mx-1 py-1 text-white px-2 rounded-md"
                          onClick={() => setSubModal2(!subModal2)}
                        >
                          Asignar Bodega
                        </button>
                      ) : null}
                    </span>
                  </div>
                  <div className="sec2">
                    {loading ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
                        >
                          <animateTransform
                            attributeName="transform"
                            dur="0.75s"
                            repeatCount="indefinite"
                            type="rotate"
                            values="0 12 12;360 12 12"
                          />
                        </path>
                      </svg>
                    ) : (
                      <>
                        <div className="flex">
                          <div className="text-gray-500 mx-1  truncate">
                            {moment(inventarioSelect.createdAt).format("llll")}{" "}
                          </div>
                          <div className="truncate">
                            {" "}
                            <span> · </span> {inventarioSelect.name_inventory}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {estadoSup ? (
                <div className="m-10 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#777777"
                      d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
                    >
                      <animateTransform
                        attributeName="transform"
                        dur="0.75s"
                        repeatCount="indefinite"
                        type="rotate"
                        values="0 12 12;360 12 12"
                      />
                    </path>
                  </svg>
                </div>
              ) : (
                <>
                  <Outlet />
                  {subProducts.length > 0 ? (
                    <>
                      <DataSubProducts
                        dataInventorySubProducts={subProducts}
                        id={id}
                      />
                    </>
                  ) : (
                    <>
                      <div
                        className={
                          estado2
                            ? "importInventor  max-w-7xl  flex justify-start "
                            : " importInventor  max-w-7xl  flex justify-start"
                        }
                      >
                        <div
                          className={
                            estado2
                              ? `subproducts w-fit h-fit mb-20 lg:mb-1  rounded-md mt-2
              cursor-pointer bg-[#5994f5] inline-block text-start`
                              : `subproducts w-fit h-fit  text-center only:rounded-md mt-2
              cursor-pointer bg-[#5994f5] inline-block mb-20 lg:mb-1`
                          }
                          onClick={() => setEstado2(!estado2)}
                        >
                          <div className="flex justify-center p-3 ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="white"
                                d="M3 3h4v7.5c0 1.93 1.57 3.5 3.5 3.5H13v-4l7 6l-7 6v-4h-2.5C6.36 18 3 14.64 3 10.5V3Z"
                              />
                            </svg>
                            <span className="text-white  text-sm md:text-xl ">
                              Trasladar productos
                            </span>
                          </div>
                        </div>
                      </div>
                      {estado2 ? (
                        <div className="mt-[-4rem]">
                          <CategoryInventory
                            element={inventarioSelect}
                            id={id}
                            estadoModel={estado}
                          />
                        </div>
                      ) : null}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};
