import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePostAuth } from "../hooks/context/UserContextData";
import * as Yup from "yup";
import {
  faEnvelope,
  faAngleLeft,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "../index.css";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Field, Form, ErrorMessage } from "formik";

function RecoveryPass() {
  const { recoveryPasssword } = usePostAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen

        

    dark:bg-gradient-to-r from-[#163b59] from-10%
     via-[#18324f] via-30% to-[#121b2e] to-90%  relative">
      <ToastContainer />
      <div className="flex dark:bg-[#37415197] dark:text-white dark:border-none  bg-white w-full border-b justify-between items-center">
        <div className="flex items-center  ">
          <Link
            to={"/login"}
            className="items-center flex dark:text-white dark:bg-[#37415197]  bg-gray-200 m-1 rounded text-white py-2 px-3"
          >
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="text-xl text-gray-700 dark:text-white"
            />
            <span className="pl-2 text-gray-700 dark:text-white">Volver</span>
          </Link>
          <span className="text-2xl text-[#0099FF] mx-2 font-bold ">Stored</span>
        </div>
        <div className="flex items-center">
          <span className="mx-2 hidden sm:block">
            ¿Deseas crear una cuenta?{" "}
          </span>
          <div className="flex items-center  ">
            <Link
              to={"/signup"}
              className="items-center mr-2 flex bg-[#0099FF] m-1 rounded text-white py-2 px-3"
            >
              <FontAwesomeIcon icon={faUser} className="  " />
              <span className="pl-2">Crear cuenta</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-[#37415197] dark:text-white w-4/5 sm:w-[30rem] rounded mt-9 mx-auto p-1  my-3">
        <div className="py-2 sm:text-xl font-semibold  px-3 border-b">
          Recuperar contraseña
        </div>
        <div className="text-gray-600 dark:text-white my-3 mx-2">
          Ingrese su correo electronico para la solicitud de tu cuenta y
          recuperacion de contraseña
        </div>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("El email no es valido")
              .required("El campo no puede estar vacio"),
          })}
          onSubmit={async (values) => {
          
            const response = await recoveryPasssword(values.email);
          
            if (response.status === 200) {
              toast.success("Correo enviado");
              localStorage.setItem("email", values.email);
              setLoading(!loading);
              navigate("/verifyc+code/identify");
            }
            if (response.response.status === 401) {
              toast.error("Este correo no existe", {
                position: toast.POSITION.TOP_RIGHT,
                theme: "dark",
              });
              setLoading(!loading);
            }
          }}
        >
          <Form>
            <div
              className="Fiel-email bg-white dark:bg-transparent dark:border-[#019afa]  flex items-center mx-2 my-1
                           border-solid border rounded transition-200
                             "
            >
              <div className="icons sm:py-4   py-2 px-2 text-gray-400">
                <FontAwesomeIcon icon={faEnvelope} className="mx-1 text-xl" />
              </div>
              <div className="email w-full">
                <Field
                  type="email"
                  name="email"
                  placeholder="Correo electronico"
                  className="w-full block
                                         outline-none dark:bg-transparent dark:text-white "
                />
              </div>
            </div>
            <div className="error">
              <ErrorMessage
                component="p"
                className="mx-2 block text-red-600
                                animate__animated animate__fadeInUp "
                name="email"
              />
            </div>
            <div className="relative">
              <div className={loading ? "loading" : "loadingblovk"}>
                <button
                  onClick={() => setLoading(!loading)}
                  type="submit"
                  className="bg-[#0099FF] text-white rounded-full relative
                                p-1 sm:py-3 w-5/6 mx-auto my-3 hover:opacity-[0.85] transition
                                 flex justify-center cursor-pointer"
                >
                  Continuar 
                </button>
              </div>
              <div className={loading ? "loadingblovk" : "loading"}>
                <div
                  className="lds-ellipsis
                          bg-[#0099FF] text-white rounded-full relative
                                p-1 py-4 w-5/6 mx-auto my-3 hover:opacity-[0.85] transition
                                h-11 flex justify-center cursor-no-drop"
                >
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="absolute w-full bottom-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default RecoveryPass;
