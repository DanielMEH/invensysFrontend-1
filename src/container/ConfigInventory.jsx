import React, { useEffect, useState } from "react";

import { Outlet, Link, useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useInventario } from "../hooks/context/ContextInventario";
import moment from "moment-with-locales-es6";
import { CategoryInventory } from "./CategoryInventory";
moment.locale("es");
export const ConfigInventory = () => {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [load, setLoad] = useState(false);
  const [estado, setEstado] = useState(false);
  const [estado2, setEstado2] = useState(false);
  const { id } = useParams();
  const [inventoryData, setInventoryData] = useState([]);
  const { DeleteInventario, GetInventario, inventario, UpdateInventario } =
    useInventario();
  const navigate = useNavigate();
  const inventarioSelect = inventario.find((item) => item._id === id);
  useEffect(() => {
    (async () => {
      setLoading(true);
      await GetInventario();
      setLoading(false);
    })();
    setInventoryData(inventarioSelect);
  }, [id]);

  const DeleteInventory = async () => {
    setLoading2(true);
    const response = await DeleteInventario(id);
    if (response.status === 200) {
      toast.success(" se elimino el inventario con exito ", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/inventario");
      setLoading2(false);
    } else {
      toast.warning(" se elimino el inventario con exito ", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/inventario");
    }
  };

  const handleSubmit = async (e) => {
    setInventoryData({
      ...inventoryData,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <ToastContainer />
      <div className="bg-white  max-w-7xl px-3 py-1 border shadow-md rounded-sm">
        <div className="iconst_config flex items-center justify-between gap-4 max-7xl mx-auto">
          <div className="sec1 flex items-center gap-4">
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
                  DeleteInventory();
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
                width="40"
                height="40"
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
                  <div className="login bg-white z-20 relative rounded-md w-full ">
                    <div className="">
                      <div className="">
                        <Formik
                          initialValues={{
                            name_inventory: "",
                            description: "",
                          }}
                          onSubmit={async (values) => {
                            const dataUpdate = {
                              name_inventory: inventoryData.name_inventory,
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
                                toast.success("Inventario Actualizado", {
                                  position: "top-right",
                                  autoClose: 2000,
                                  hideProgressBar: false,
                                  closeOnClick: true,
                                  pauseOnHover: true,
                                  draggable: true,
                                  progress: undefined,
                                });
                                navigate(`/inventario/inventory/${id}`);
                              } else {
                                toast.error("Error al actualizar inventario ", {
                                  position: "top-right",
                                  autoClose: 2000,
                                  hideProgressBar: false,
                                  closeOnClick: true,
                                  pauseOnHover: true,
                                  draggable: true,
                                  progress: undefined,
                                });
                              }
                            })();
                          }}
                        >
                          <Form className="flex  ">
                            <div className="flex flex-col w-full ">
                              <div
                                className="Fiel-email border bg-white flex items-center my-1
                           border-solid  border-1 border-slate-300 rounded transition-200
                             "
                              >
                                <div className="email w-full">
                                  <Field
                                    type="text"
                                    name="name_inventory"
                                    placeholder="Nombre del inventario"
                                    className="w-full block
                                         outline-none p-2"
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
                                    placeholder="Descripción del inventario"
                                    className="w-full block
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
                                  className="bg-[#5994f5] text-white rounded-full relative
                                p-1  w-5/6 mx-auto my-2 hover:opacity-[0.85] transition
                                h-9 flex justify-center"
                                >
                                  <span className="text-base font-medium">
                                    Actualizar inventario
                                  </span>
                                </button>
                              ) : (
                                <span
                                  type="button"
                                  className="bg-[#5994f5] text-white rounded-full relative
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
            <Link to={`/inventario/inventory/${id}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 14 14"
              >
                <g
                  fill="none"
                  stroke="#374151"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m11 9l2-.5l.5 2" />
                  <path d="M13 8.5A6.76 6.76 0 0 1 7 13h0a6 6 0 0 1-5.64-3.95M3 5l-2 .5l-.5-2" />
                  <path d="M1 5.5C1.84 3.2 4.42 1 7 1h0a6 6 0 0 1 5.64 4" />
                </g>
              </svg>
            </Link>
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
                  <div className="text-gray-500 mx-1">
                    {moment(inventarioSelect.createdAt).format("LLLL")}{" "}
                  </div>
                  <div> {inventarioSelect.name_inventory}</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div
        className={
          estado2
            ? "importInventor  max-w-7xl  flex justify-start "
            : " importInventor  max-w-7xl  flex justify-center"
        }
      >
        <div
          className={
            estado2
              ? `subproducts w-fit h-fit  rounded-md mt-2 
        cursor-pointer bg-[#5994f5] inline-block text-start`
              : `subproducts w-fit h-fit  text-center only:rounded-md mt-2 
        cursor-pointer bg-[#5994f5] inline-block`
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
            <span className="text-white">Importar productos</span>
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
  );
};
