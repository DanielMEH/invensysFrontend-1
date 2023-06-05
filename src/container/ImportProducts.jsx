import React, { useEffect, useState } from "react";
import { getProducts, UploadSubProducts } from "../apis/ApiData";
import { Formik, Field, Form } from "formik";
import { DatePicker } from "antd";
import moment from "moment-with-locales-es6";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getSubProducts } from "../apis/ApiData";

const { RangePicker } = DatePicker;
moment.locale("es");
export const ImportProducts = ({ idCategorias }) => {
  const [products, setProducts] = React.useState([]);
  const [fecha, setFecha] = useState([]);
  const [loadIn, setLoadIn] = useState(false);
  const [loadSub, setLoadSub] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoadIn(true);
    (async () => {
      const data = await getProducts();
      setProducts(data.data.products);

      setLoadIn(false);
    })();
  }, [idCategorias]);
  const productsFilter = products.filter((product) => {
    return idCategorias.includes(product.category);
  });

  if (idCategorias.length > 0) {
  } else {
    window.location.href = "/bodega";
  }
  const disabledDate = (current) => {
    moment.locale("es");
    return current && current < moment().endOf("day");
  };
  const onChange = (value, dateString) => {
    setFecha(dateString);
  };

  const GetPdo = async () => {
    getSubProducts(id);
  };

  useEffect(() => {
    (async () => {
      setLoadIn(false);
    })();
  }, []);
  return (
    <>
      <ToastContainer />
      {productsFilter.length > 0 ? (
        <div
          className="bg-white shadow-md border lg:mx-auto rounded-md w-[90%]
         lg:w-fit z-50 flex flex-col justify-center max-w-[1300px]
          2xl:max-w-screen-xl overflow-x-auto mb-4  mt-4  lg:mt-20"
        >
          <div className="flex justify-between flex-col lg:flex-row items-center">
            <div className="des">
              <h1
                className="
        
        font-bold text-2xl
        mx-3
        mt-4
        

        "
              >
                Importando productos
              </h1>
              <p
                className="
                  
                    mx-3
                    mt-2
                    mb-4
                    text-gray-500

                  "
              >
                Selecciona los productos que deseas importar y agrega los
                precios
              </p>
            </div>
            <div className="cancelar">
              <button
                onClick={() => window.location.reload()}
                className="bg-gray-200 mx-2 flex p-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M21 7v12q0 .825-.588 1.413T19 21H5q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h12l4 4Zm-9 11q1.25 0 2.125-.875T15 15q0-1.25-.875-2.125T12 12q-1.25 0-2.125.875T9 15q0 1.25.875 2.125T12 18Zm-6-8h9V6H6v4Z"
                  />
                </svg>
                <span>Guardar</span>
              </button>
            </div>
          </div>
          {loadIn ? (
            <div className="m-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
              >
                <g stroke="#777777">
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
            </div>
          ) : (
            <div>
              {productsFilter.map((product) => (
                <>
                  <Formik
                    initialValues={{
                      name: "",
                      priceCompra: "",
                      priceVenta: "",
                      stockMinimo: "",
                      stockMaximo: "",
                      unidad: "",
                    }}
                    // aceder a los valores del formulario

                    defaultValue={product.name}
                    onSubmit={async (values) => {
                      if (
                        product.name === "" ||
                        values.priceCompra === "" ||
                        values.priceVenta === "" ||
                        values.stockMinimo === "" ||
                        values.stockMaximo === "" ||
                        values.unidad === ""
                      ) {
                        toast.warning("Todos los campos son oblogatorios", {
                          position: "top-right",
                          autoClose: 3000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                        });
                      } else {
                        if (fecha[1] === undefined) {
                          toast.warning("Selecciona la fecha de caducidad", {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                          });
                        } else {
                          const data = {
                            name: product.name,
                            priceCompra: values.priceCompra,
                            priceVenta: values.priceVenta,
                            stockMinimo: values.stockMinimo,
                            stockMaximo: values.stockMaximo,
                            unidad: values.unidad,
                            caducidad: fecha[1],
                            idInventory: id,
                          };

                          setLoadSub(true);
                          (async () => {
                            await GetPdo();
                            let response = await UploadSubProducts(id, data);

                            if (response.status === 200) {
                              toast.success(
                                "Producto agregado a la bodega con exito",
                                {
                                  position: "top-right",
                                  autoClose: 3000,
                                  hideProgressBar: false,
                                  closeOnClick: true,
                                  pauseOnHover: true,
                                  draggable: true,
                                  progress: undefined,
                                }
                              );

                              setLoadSub(false);
                            } else {
                              toast.error(
                                "Error al agregar el producto al bodega o el producto ya existe",
                                {
                                  position: "top-right",
                                  autoClose: 3000,
                                  hideProgressBar: false,
                                  closeOnClick: true,
                                  pauseOnHover: true,
                                  draggable: true,
                                  progress: undefined,
                                }
                              );
                              setLoadSub(false);
                            }
                          })();
                        }
                      }
                    }}
                  >
                    <Form className="px-4 flex  just gap-1">
                      <div className="content-fit md:flex-row flex flex-col gap-2">
                        <div className="input flex flex-col w-full  lg:w-36">
                          <label
                            htmlFor="
                                Nombre del producto

                                "
                          >
                            Nombre
                          </label>
                          <Field
                            name="name"
                            type="text"
                            className="border outline-none rounded-md p-2"
                            value={product.name}
                            defaultValue={product.name}
                          />
                        </div>
                        <div className="input flex flex-col my-1   w-full  lg:w-36">
                          <label
                            htmlFor="
                                Nombre del producto

                                "
                          >
                            Precio compra
                          </label>
                          <Field
                            name="priceCompra"
                            type="text"
                            className="border outline-none rounded-md p-2"
                            placeholder="Ej: 1.000"
                          />
                        </div>
                        <div className="input flex flex-col my-1  w-full  lg:w-36">
                          <label
                            htmlFor="
                                Nombre del producto

                                "
                          >
                            Precio Venta
                          </label>
                          <Field
                            name="priceVenta"
                            type="text"
                            className="border outline-none rounded-md p-2"
                            placeholder="Ej: 2.000"
                          />
                        </div>
                        <div className="input flex flex-col my-1  w-full  lg:w-36">
                          <label
                            htmlFor="
                                Nombre del producto

                                "
                          >
                            Unidades
                          </label>
                          <Field
                            name="unidad"
                            type="text"
                            className="border outline-none rounded-md p-2"
                            placeholder="Ej: 20"
                          />
                        </div>

                        <div className="input flex flex-col my-1  w-full  lg:w-36">
                          <label
                            htmlFor="
                                Nombre del producto

                                "
                            title="Fecha de vencimiento"
                            className="truncate"
                          >
                            Fecha de vencimiento
                          </label>
                          <div className="name border border-gray-300 rounded-lg relative">
                            <div className="input flex items-center">
                              <div className="fecha w-full">
                                <RangePicker
                                  disabledDate={disabledDate}
                                  onChange={onChange}
                                  className="w-full p-2 outline-none border border-white rounded-lg
                    
                    focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent
                    "
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="input flex flex-col my-1  w-full  lg:w-36">
                          <label
                            htmlFor="
                                Nombre del producto

                                "
                          >
                            Stock Máximo
                          </label>
                          <Field
                            name="stockMaximo"
                            type="text"
                            className="border rounded-md outline-none p-2"
                            placeholder="Ej: 23"
                          />
                        </div>
                        <div className="input flex flex-col my-1  w-full  lg:w-36">
                          <label
                            htmlFor="
                                Nombre del producto

                                "
                          >
                            stock Mínimo
                          </label>
                          <Field
                            name="stockMinimo"
                            type="text"
                            className="border rounded-md p-2 outline-none"
                            placeholder="Ej: 23"
                          />
                        </div>

                        <div className="input flex flex-col my-1  w-full  lg:w-36">
                          <label
                            htmlFor="
                                Nombre del producto

                       
                                "
                            className="py-3"
                          ></label>
                          {loadSub ? (
                            <div
                              className="
                                  
                                    bg-[#0284c7]
                                    text-white
                                    rounded-md
                                    p-2
                                    w-full
                                    text-center
                                  
                                    flex
                                    justify-center
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
                            </div>
                          ) : (
                            <>
                              <>
                                <button
                                  type="sybmit"
                                  className="
                                  
                                    bg-[#0284c7]
                                    text-white
                                    rounded-md
                                    p-2
                                    w-full
                                    text-center
                                  
                                    flex
                                    justify-center
                                      "
                                >
                                  Agregar
                                </button>
                              </>
                            </>
                          )}
                        </div>
                      </div>
                    </Form>
                  </Formik>
                </>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          {loadIn ? (
            <>
              <div className="mt-6  text-center flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                >
                  <g stroke="#777777">
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
              </div>
            </>
          ) : (
            <h1 className="text-2xl text-gray-600 font-bold text-center mt-6">
              Debes tener al menos un producto para poder agregar un lote
            </h1>
          )}
        </div>
      )}
    </>
  );
};
