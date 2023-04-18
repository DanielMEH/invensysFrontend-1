import React, { useState } from "react";
import "../index.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faKey,
  faCircleQuestion,
  faEye,
  faEyeSlash,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/css/fuente.css";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import "animate.css";
import { Link, useNavigate } from "react-router-dom";
import { usePostAuth } from "../hooks/context/UserContextData";
import "../assets/css/spiner.css";
import { Navigate } from "react-router-dom";
import { Header } from "../components/Header";
import { useInventario } from "../hooks/context/ContextInventario";
export const FormInventory = () => {
  const {
    inventario,
    setInventario,
    GetInventario,
    PostInventario,
    DeleteInventario,
    UpdateInventario,
  } = useInventario();

  const [load, loading] = useState(false);

  return (
    <>
      <ToastContainer />
      <div
        className="form_Login   rounded-md border  flex   animate__animated animate__fadeIn bg-white 
        form md:w-full   mt-9 mb-2 drop-shadow-md "
      >
        <div className="login bg-white z-20 relative rounded-md w-full ">
          <h3 className="mx-4 text-xl text-gray-500 mt-1 ">Crear bodega</h3>
          <div className="">
            <div className="">
              <Formik
                initialValues={{
                  name_inventory: "",
                  description: "",
                }}
                validationSchema={Yup.object({
                  name_inventory: Yup.string().required("Rquerido"),
                  description: Yup.string().required("requerido"),
                })}
                onSubmit={async (values) => {
                  loading(true);
                  (async () => {
                    const data = await PostInventario(values);
                    loading(false);
                    if (data.status === 200) {
                    
                      toast.success("Inventario creado", {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });
                    } else {
                      toast.error("Error al crear inventario", {
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
                <Form className="flex p-2  ">
                  <div className="flex flex-col w-full ">
                    <div
                      className="Fiel-email border bg-white flex items-center mx-2 my-1
                           border-solid  border-1 border-slate-300 rounded transition-200
                             "
                    >
                      <div className="email w-full">
                        <Field
                          type="text"
                          name="name_inventory"
                          placeholder="Nombre del la bodega"
                          className="w-full block
                                         outline-none p-2"
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
                          className="w-full block
                                         outline-none p-2 "
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
                          Crear Bodega
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
                              <stop offset="0%" stop-color="currentColor" />
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
    </>
  );
};
