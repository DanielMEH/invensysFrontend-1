import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faEye,
  faEyeSlash
} from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import { TodoFunctions } from "../apis/ApiData";
import { ToastContainer, toast } from "react-toastify";


export const CambioContraseña = ({ isVisible, onClose }) => {

  const [confirmPassword, setConfirmPassword] = useState(true);
  const [effect, setEffect] = useState(false);

  if (!isVisible) return null;


  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose(); 
    
  }


  return (
    
    <div className='fixed z-50 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id='wrapper'  onClick={handleClose}>
      <ToastContainer />
      <div className='w-[450px] flex flex-col'>
        <button className='text-white text-xl place-self-end' onClick={() => onClose()}>X</button>
        <div className='bg-white dark:bg-[#37415197] dark:border-[#d1d1d1a0] p-2 rounded border shadow-md '>
        <div className="py-4 px-6 lg:px-8 text-left">
          <h3 className="text-2xl text-gray-900 font-semibold dark:text-white ">Restablecer contraseña</h3>
          <p className='text-sm mb-8'>Cambiar contraseña</p>
      <Formik
              initialValues={{ password: "", newPassword: ""}}
              validationSchema={Yup.object({
                password: Yup.string()
                  .required("El campo no puede estar vacio")
                  .min(6, "Debe tener mas de 6 caracteres"),
                  newPassword: Yup.string()
                  .required("El campo no puede estar vacio")
                  .min(6, "Debe tener mas de 6 caracteres"),
                  confirmPassword: Yup.string()
                  .required("El campo no puede estar vacio")
                  .oneOf([Yup.ref("newPassword"),null], "Las contraseñas no coinciden"),
              })}

              onSubmit={async (values) => {
                try {
                  setEffect(true)
                await TodoFunctions.putAdminPass(values);
                toast.success("Contraseña actualizada", {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
                setEffect(false)
                  
                } catch (error) {
                  toast.error("Error al actuaalizar la contraseña", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                  setEffect(false)
                }
                 
              }
              }

            >
              <Form>
                <div
                  className="Fiel-email border bg-white dark:bg-[#374151] dark:border-[#019afa] flex items-center mx-2 mt-8
                           border-solid border-1 border-slate-300 rounded pl-3"
                >

                  <div className="w-full currentPassword">
                    <Field
                      // type={currentPassword === true ? "password" : "text"}
                      name="password"
                      placeholder="Contraseña actual" 
                      className="w-full block
                                    outline-none bg-white text-black  dark:bg-[#374151] dark:text-white"
                      autoComplete="on"
                    />
                  </div>
                  <div className="icons  py-2 px-2 text-gray-400">
                    <FontAwesomeIcon icon={faLock} className="mx-1 text-xl" />
                  </div>
                </div>
                <div className="error">
                  <ErrorMessage
                    component="p"
                    className="mx-2 block text-red-600
                                animate_animated animate_fadeInUp"
                    name="password"
                  />
                </div>



                <div
                  className="Fiel-email border bg-white dark:bg-[#374151] dark:border-[#019afa] flex items-center mx-2 mt-8
                           border-solid border-1 border-slate-300 rounded pl-3"
                >

                  <div className=" w-full newPassword">
                    <Field
                      // type={newPassword === true ? "password" : "text"}
                      name="newPassword"
                      placeholder="Contraseña nueva"
                      className="w-full block
                                    outline-none bg-white text-black dark:bg-[#374151] dark:text-white"
                      autoComplete="on"
                    />
                  </div>
                  <div className="icons    py-2 px-2 text-gray-400">
                    <FontAwesomeIcon icon={faLock} className="mx-1 text-xl" />
                  </div>
                </div>
                <div className="error">
                  <ErrorMessage
                    component="p"
                    className="mx-2 block text-red-600
                                animate_animated animate_fadeInUp"
                    name="newPassword"
                  />
                </div>


                <div
                  className="Fiel-email border bg-white dark:bg-[#374151] dark:border-[#019afa] flex items-center mx-2 mt-8
                           border-solid border-1 border-slate-300 rounded pl-3"
                >

                  <div className="w-full confirmPassword">
                    <Field
                      type={confirmPassword === true ? "password" : "text"}
                      name="confirmPassword"
                      placeholder="Confirmar contraseña"
                      className="w-full block
                                    outline-none bg-white text-black dark:bg-[#374151] dark:text-white"
                      autoComplete="on"
                    />
                  </div>
                  <div
                    className="passEye 
                                 py-2 px-2 text-gray-400
                                 cursor-pointer
                                "
                    name="eyes"
                    onClick={() => {
                      setConfirmPassword(!confirmPassword);
                    }}
                  >
                    {confirmPassword === true ? (
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        className="animate_animated animate_fadeInRight"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faEye}
                        className="animate_animated animate_fadeInRight"
                      />
                    )}
                  </div>
                </div>
                <div className="error">
                  <ErrorMessage
                    component="p"
                    className="mx-2 block text-red-600
                                animate_animated animate_fadeInUp"
                    name="confirmPassword"
                  />
                </div>
                <div className="text-center mt-5">
                  {
                    effect ? (
                      <span
                      type="submit"
                      className="bg-[#5994f5] text-white rounded relative
                      p-2  w-4/6 mx-auto my-8 hover:opacity-[0.85] transition
                      h-10 flex justify-center"
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
                    </span>
                    ) :
                     <button
                    type="submit"
                    className="bg-[#5994f5] text-white rounded relative
                    p-2  w-4/6 mx-auto my-8 hover:opacity-[0.85] transition
                    h-10 flex justify-center"
                  >
                    Cambiar contraseña
                  </button>
                  }
                 
                </div>
              </Form>
            </Formik>
        </div>
        </div>
      </div>
    </div>
  )
}