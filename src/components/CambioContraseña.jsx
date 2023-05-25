import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faEye,
  faEyeSlash
} from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";


export const CambioContraseña = ({ isVisible, onClose }) => {

  const [currentPassword, setCurrentPassword] = useState(true);
  const [newPassword, setNewPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(true);


  if (!isVisible) return null;


  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose(); 
    
  }
  

  return (
    <div className='fixed z-50 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id='wrapper'  onClick={handleClose}>
      <div className='w-[450px] flex flex-col'>
        <button className='text-white text-xl place-self-end' onClick={() => onClose()}>X</button>
        <div className='bg-white p-2 rounded border shadow-md '>
        <div className="py-4 px-6 lg:px-8 text-left">
          <h3 className="text-2xl font-medium text-gray-900 font-semibold ">Restablecer contraseña</h3>
          <p className='text-sm mb-8'>Cambiar contraseña</p>
      <Formik
              initialValues={{ password: ""}}
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

            >
              <Form>
                <div
                  className="Fiel-email border bg-white flex items-center mx-2 mt-8
                           border-solid border-1 border-slate-300 rounded pl-3"
                >

                  <div className=" w-full">
                    <Field
                      // type={currentPassword === true ? "password" : "text"}
                      name="password"
                      placeholder="Contraseña actual"
                      className="w-full block
                                    outline-none bg-white"
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
                    name="password"
                  />
                </div>



                <div
                  className="Fiel-email border bg-white flex items-center mx-2 mt-8
                           border-solid border-1 border-slate-300 rounded pl-3"
                >

                  <div className=" w-full">
                    <Field
                      // type={newPassword === true ? "password" : "text"}
                      name="newPassword"
                      placeholder="Contraseña nueva"
                      className="w-full block
                                    outline-none bg-white"
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
                  className="Fiel-email border bg-white flex items-center mx-2 mt-8
                           border-solid border-1 border-slate-300 rounded pl-3"
                >

                  <div className=" w-full">
                    <Field
                      type={confirmPassword === true ? "password" : "text"}
                      name="confirmPassword"
                      placeholder="Confirmar contraseña"
                      className="w-full block
                                    outline-none bg-white"
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
                  <button
                    type="submit"
                    className="bg-[#5994f5] text-white rounded relative
                    p-2  w-4/6 mx-auto my-8 hover:opacity-[0.85] transition
                    h-10 flex justify-center"
                  >
                    Cambiar contraseña
                  </button>
                </div>
              </Form>
            </Formik>
        </div>
        </div>
      </div>
    </div>
  )
}