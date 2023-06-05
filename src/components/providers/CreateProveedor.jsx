import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useContextProviders } from "../../hooks/context/ContextProveedores";
import { useContextCategory } from "../../hooks/context/ContextCategory";

export const CreateProveedor = () => {
  const { dataGategorias, getDataCategorias } = useContextCategory();
  const { postProviders } = useContextProviders();
  useEffect(() => {
    getDataCategorias();
  }, []);
  const [category, setCategoria] = useState([]);
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <ToastContainer />
      <div className={active2 ? "hidden" : "block"}>
        <div className="Formulario fixed bg-white rounded-lg dark:bg-[#374151] dark:text-white inset-0 drop-shadow-2xl w-6/12 m-auto  h-fit z-50">
          <div className="sec1 w-full p-2 flex justify-between">
            <div className="title">
              <span className="text-xl my-4 block">
                Crea proveedores para expandir tu negocio
              </span>
              <p className="text-red-500 text-sm">
                Todos los campos son requeridos
              </p>
            </div>

            <div
              className="x cursor-pointer"
              onClick={() => setActive2(!active2)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M204.24 195.76a6 6 0 1 1-8.48 8.48L128 136.49l-67.76 67.75a6 6 0 0 1-8.48-8.48L119.51 128L51.76 60.24a6 6 0 0 1 8.48-8.48L128 119.51l67.76-67.75a6 6 0 0 1 8.48 8.48L136.49 128Z"
                />
              </svg>
            </div>
          </div>
          <div className="formulario">
            <Formik
              initialValues={{
                name: "",
                company: "",
                address: "",
                email: "",
                phone: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("Obligatorio"),
                company: Yup.string().required("Obligatorio"),
                address: Yup.string().required("Obligatorio"),
                email: Yup.string().required("Obligatorio").email("no valido"),
                phone: Yup.number()
                  .required("Obligatorio")
                  .positive("No valido"),
              })}
              onSubmit={async (values) => {
                setLoading(false);
                const data = {
                  name: values.name,
                  company: values.company,
                  address: values.address,
                  email: values.email,
                  phone: values.phone,
                  idCategory: category[0],
                };
                if (category.length === 0) {
                  setLoading(true);
                  return await toast.warning("Selecione una categoria", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }

                const response = await postProviders(data);

                if (response.status === 201) {
                  setLoading(true);
                  return await toast.success("Producto creado", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                } else {
                  setLoading(true);
                  return await toast.error("Error al crear el proveedor", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }
              }}
            >
              <Form className="grid grid-cols-2 gap-3 mx-4">
                <div className="name border dark:border-[#019afa] border-gray-300 rounded-lg">
                  <label htmlFor="name " className="mx-2 text-sm">
                    Nombre
                  </label>
                  <div className="input flex items-center">
                    <div className="icon1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#ccc"
                          d="m15 16l-4 4h8c1.1 0 2-.9 2-2s-.9-2-2-2h-4zm-2.94-8.81l-8.77 8.77c-.18.18-.29.44-.29.7V19c0 .55.45 1 1 1h2.34c.27 0 .52-.11.71-.29l8.77-8.77l-3.76-3.75zm6.65.85a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z"
                        />
                      </svg>
                    </div>
                    <Field
                      name="name"
                      type="text"
                      placeholder="Nombre del producto"
                      className="
                    w-full p-2 
                     outline-none  dark:bg-[#374151] dark:text-white"
                    />
                    <ErrorMessage
                      component="p"
                      className="mx-2 block text-sm text-red-600
                                animate__animated animate__fadeInUp "
                      name="name"
                    />
                  </div>
                </div>
                <div className="name border dark:border-[#019afa] border-gray-300 rounded-lg">
                  <label htmlFor="descripción" className="mx-2 text-sm">
                    Compañia
                  </label>
                  <div className="input flex items-center">
                    <div className="icon1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#ccc"
                          d="m15 16l-4 4h8c1.1 0 2-.9 2-2s-.9-2-2-2h-4zm-2.94-8.81l-8.77 8.77c-.18.18-.29.44-.29.7V19c0 .55.45 1 1 1h2.34c.27 0 .52-.11.71-.29l8.77-8.77l-3.76-3.75zm6.65.85a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z"
                        />
                      </svg>
                    </div>
                    <Field
                      name="company"
                      type="text"
                      placeholder="Descripción"
                      className="
                    w-full p-2 
                     outline-none dark:bg-[#374151] dark:text-white "
                    />
                    <ErrorMessage
                      component="p"
                      className="mx-2 block text-sm text-red-600
                                animate__animated animate__fadeInUp "
                      name="company"
                    />
                  </div>
                </div>

                <div className="name border dark:border-[#019afa] border-gray-300 rounded-lg">
                  <label htmlFor="price" className="mx-2 text-sm">
                    Correo
                  </label>
                  <div className="input flex items-center">
                    <div className="icon1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#ccc"
                          d="m15 16l-4 4h8c1.1 0 2-.9 2-2s-.9-2-2-2h-4zm-2.94-8.81l-8.77 8.77c-.18.18-.29.44-.29.7V19c0 .55.45 1 1 1h2.34c.27 0 .52-.11.71-.29l8.77-8.77l-3.76-3.75zm6.65.85a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z"
                        />
                      </svg>
                    </div>
                    <Field
                      name="email"
                      type="text"
                      placeholder="example@gmail.com"
                      className="
                    w-full p-2 
                     outline-none  dark:bg-[#374151] dark:text-white"
                    />
                    <ErrorMessage
                      component="p"
                      className="mx-2 block text-sm truncate text-red-600
                                animate__animated animate__fadeInUp "
                      name="email"
                    />
                  </div>
                </div>
                <div className="name border dark:border-[#019afa] border-gray-300 rounded-lg">
                  <label htmlFor="price" className="mx-2 text-sm">
                    Dirección
                  </label>
                  <div className="input flex items-center">
                    <div className="icon1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#ccc"
                          d="m15 16l-4 4h8c1.1 0 2-.9 2-2s-.9-2-2-2h-4zm-2.94-8.81l-8.77 8.77c-.18.18-.29.44-.29.7V19c0 .55.45 1 1 1h2.34c.27 0 .52-.11.71-.29l8.77-8.77l-3.76-3.75zm6.65.85a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z"
                        />
                      </svg>
                    </div>
                    <Field
                      name="address"
                      type="text"
                      placeholder="M14 #23"
                      className="
                    w-full p-2 
                     outline-none  dark:bg-[#374151] dark:text-white"
                    />
                    <ErrorMessage
                      component="p"
                      className="mx-2 block text-sm text-red-600
                                animate__animated animate__fadeInUp "
                      name="address"
                    />
                  </div>
                </div>
                <div className="name border dark:border-[#019afa] border-gray-300 rounded-lg">
                  <label htmlFor="name" className="mx-2 text-sm ">
                    Telefono
                  </label>
                  <div className="input flex items-center">
                    <div className="icon1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#ccc"
                          d="m15 16l-4 4h8c1.1 0 2-.9 2-2s-.9-2-2-2h-4zm-2.94-8.81l-8.77 8.77c-.18.18-.29.44-.29.7V19c0 .55.45 1 1 1h2.34c.27 0 .52-.11.71-.29l8.77-8.77l-3.76-3.75zm6.65.85a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z"
                        />
                      </svg>
                    </div>
                    <Field
                      name="phone"
                      type="text"
                      placeholder="+57"
                      className="
                    w-full p-2 
                     outline-none  dark:bg-[#374151] dark:text-white"
                    />
                    <ErrorMessage
                      component="p"
                      className="mx-2 block text-sm text-red-600
                                animate__animated animate__fadeInUp "
                      name="phone"
                    />
                  </div>
                </div>

                <div>
                  <div
                    className="name border dark:border-[#019afa] border-gray-300 rounded-lg cursor-pointer"
                    onClick={() => setActive(!active)}
                  >
                    <label
                      htmlFor="price"
                      className="mx-2 mb-2 mt-1 block text-sm  "
                    >
                      Seleccionar categoria
                    </label>
                    {category.length > 0 ? (
                      <>
                        <div className="input  flex my-2 justify-between items-center ">
                          <div className="iconC mt-0 mx-2">{category[1]}</div>
                          <div className="icon2  mt-0 mx-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <g
                                stroke="#ccc"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                              >
                                <circle
                                  cx="12"
                                  cy="12"
                                  r="9"
                                  fill="#ccc"
                                  fill-opacity=".3"
                                />
                                <path
                                  fill="none"
                                  stroke-dasharray="14"
                                  stroke-dashoffset="14"
                                  d="M8 12L11 15L16 10"
                                >
                                  <animate
                                    fill="freeze"
                                    attributeName="stroke-dashoffset"
                                    dur="0.2s"
                                    values="14;0"
                                  />
                                </path>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="input flex justify-between items-center">
                        <div className="iconC m-2    block mx-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#ccc"
                              d="M4 11h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zM4 21h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm13 0c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4z"
                            />
                          </svg>
                        </div>
                        <div className="icon2 m-2  block mx-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#ccc"
                              stroke="#ccc"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M11 18a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm0-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm0-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0Z"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                    <div
                      className={
                        active === false
                          ? " hidden mt-20 "
                          : " mt-0 block  duration-700"
                      }
                    >
                      <div
                        className="contenedor-category 
                         h-auto overflow-y-scroll bg-white dark:bg-[#374151] dark:text-white bg-while shadow-2xl rounded-xl p-4 absolute grid grid-cols-3"
                      >
                        {dataGategorias.map((item) => (
                          <div
                            className="category flex border
                                 border-gray-300 dark:border-[#019afa] gap-4 rounded-md w-auto m-1 p-2 cursor-pointer "
                            key={item._id}
                            onClick={() =>
                              setCategoria([item._id, item.name_category])
                            }
                          >
                            <div className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <rect
                                  width="10"
                                  height="10"
                                  x="1"
                                  y="1"
                                  fill="#ccc"
                                  rx="1"
                                >
                                  <animate
                                    id="svgSpinnersBlocksShuffle30"
                                    fill="freeze"
                                    attributeName="x"
                                    begin="0;svgSpinnersBlocksShuffle3b.end"
                                    dur="0.2s"
                                    values="1;13"
                                  />
                                  <animate
                                    id="svgSpinnersBlocksShuffle31"
                                    fill="freeze"
                                    attributeName="y"
                                    begin="svgSpinnersBlocksShuffle38.end"
                                    dur="0.2s"
                                    values="1;13"
                                  />
                                  <animate
                                    id="svgSpinnersBlocksShuffle32"
                                    fill="freeze"
                                    attributeName="x"
                                    begin="svgSpinnersBlocksShuffle39.end"
                                    dur="0.2s"
                                    values="13;1"
                                  />
                                  <animate
                                    id="svgSpinnersBlocksShuffle33"
                                    fill="freeze"
                                    attributeName="y"
                                    begin="svgSpinnersBlocksShuffle3a.end"
                                    dur="0.2s"
                                    values="13;1"
                                  />
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="1"
                                  y="13"
                                  fill="#ccc"
                                  rx="1"
                                >
                                  <animate
                                    id="svgSpinnersBlocksShuffle34"
                                    fill="freeze"
                                    attributeName="y"
                                    begin="svgSpinnersBlocksShuffle30.end"
                                    dur="0.2s"
                                    values="13;1"
                                  />
                                  <animate
                                    id="svgSpinnersBlocksShuffle35"
                                    fill="freeze"
                                    attributeName="x"
                                    begin="svgSpinnersBlocksShuffle31.end"
                                    dur="0.2s"
                                    values="1;13"
                                  />
                                  <animate
                                    id="svgSpinnersBlocksShuffle36"
                                    fill="freeze"
                                    attributeName="y"
                                    begin="svgSpinnersBlocksShuffle32.end"
                                    dur="0.2s"
                                    values="1;13"
                                  />
                                  <animate
                                    id="svgSpinnersBlocksShuffle37"
                                    fill="freeze"
                                    attributeName="x"
                                    begin="svgSpinnersBlocksShuffle33.end"
                                    dur="0.2s"
                                    values="13;1"
                                  />
                                </rect>
                                <rect
                                  width="10"
                                  height="10"
                                  x="13"
                                  y="13"
                                  fill="#ccc"
                                  rx="1"
                                >
                                  <animate
                                    id="svgSpinnersBlocksShuffle38"
                                    fill="freeze"
                                    attributeName="x"
                                    begin="svgSpinnersBlocksShuffle34.end"
                                    dur="0.2s"
                                    values="13;1"
                                  />
                                  <animate
                                    id="svgSpinnersBlocksShuffle39"
                                    fill="freeze"
                                    attributeName="y"
                                    begin="svgSpinnersBlocksShuffle35.end"
                                    dur="0.2s"
                                    values="13;1"
                                  />
                                  <animate
                                    id="svgSpinnersBlocksShuffle3a"
                                    fill="freeze"
                                    attributeName="x"
                                    begin="svgSpinnersBlocksShuffle36.end"
                                    dur="0.2s"
                                    values="1;13"
                                  />
                                  <animate
                                    id="svgSpinnersBlocksShuffle3b"
                                    fill="freeze"
                                    attributeName="y"
                                    begin="svgSpinnersBlocksShuffle37.end"
                                    dur="0.2s"
                                    values="1;13"
                                  />
                                </rect>
                              </svg>
                            </div>
                            <div className="text">
                              <p
                                className="truncate w-12 dark:text-[#019afa]"
                                title={item.name_category}
                              >
                                {item.name_category}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="f"></div>
                <div className=" col-span-2">
                  {loading === true ? (
                    <button
                      className="bg-[#5994f5] text-white p-2 rounded-full w-full"
                      type="submit"
                    >
                      Crear Proveedor
                    </button>
                  ) : (
                    <span
                      className="bg-[#5994f5] text-white w-full rounded-sm mt-3 
              duration-300 hover:bg-[#5994f5] hover:shadow-lg justify-center p-2
                          disabled flex items-center"
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
                <div className="d"></div>
                <div className="d"></div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};
