import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  getProveedores,
  getInventario,
  getSubProducts,
  TodoFunctions,
} from "../apis/ApiData";
import * as Yup from "yup";
import "animate.css";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment-with-locales-es6";
moment.locale("es");
export const FormPedido = () => {
  const navigate = useNavigate();
  // ? providers
  const [proveedores, setProveedores] = useState([]);
  const [idProvider, setIdProvider] = useState("");
  // ? inventory
  const [inventario, setInventario] = useState([]);
  const [estadoModel1, setEstadoModel1] = useState(false);
  const [idInventario, setIdInventario] = useState("");
  const [subProducts, setSubProducts] = useState([]);
  const [products, setProducts] = React.useState([]);
  // ?? state
  const [getProviderFilter, setGetProviderFilter] = useState([]);
  const [spiner, setSpiner] = useState(false);
  const [estadoModel, setEstadoModel] = useState(false);
  const [data, setData] = useState([]);
  const [pedidosList, setPedidosList] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getProveedores();
      const response = await getInventario();
      setInventario(response.data.response);
      setProveedores(data.data);
    })();
  }, []);
  useEffect(() => {
    setSpiner(true);
    (async () => {
      const subProducts = await getSubProducts(idInventario);

      setSubProducts(subProducts.data.response);
      setSpiner(false);
    })();
  }, [idInventario]);

  let dataArray = [];
  let inventoryArray = [];
  if (idProvider !== "") {
    const data = proveedores.filter((e) => e._id === idProvider);

    dataArray.push(data[0]);
  } else {
  }

  if (idInventario !== "") {
    const data = inventario.filter((e) => e._id === idInventario);
    inventoryArray.push(data[0]);
  } else {
  }

  // activar con ctrl + k
  window.addEventListener("keydown", function (event) {
    if (event.shiftKey && event.key === "b") {
      setEstadoModel1(!estadoModel1);
    }
  });

  //   idBodega,
  //   idProvedor,
  //   idSubproducto,
  //   company,
  //   unidades,
  //   tipo,
  //   totalCompra,
  //   name,
  //   precioCompra,
  //   precioVenta,
  //   estado,
  //   fecha,
  //   caducidad,
  const handleBuscador = (value) => {
    const filteredData = subProducts.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    if (value === "") {
      DataNew(value);
    } else {
      if (products.length > 0) {
        return setProducts(filteredData);
      } else {
        DataNew(value);
      }
    }
  };
  const DataNew = async (value) => {
    if (value === "") {
    }
    const data = await getSubProducts(idInventario);
    return setProducts(data.data.response);
  };
  const habdleSave = (i) => {
    if (data.length > 0) {
      setData([
        {
          idBodega: idInventario,
          idProvedor: idProvider,
          idSubproducto: i._id,
          company: dataArray[0].company,
          name: i.name,
          precioCompra: i.priceCompra,
          precioVenta: i.priceVenta,
          caducidad: i.caducidad,
          unidades: +1,
        },
      ]);
    } else {
      setData([
        {
          idBodega: idInventario,
          idProvedor: idProvider,
          idSubproducto: i._id,
          company: dataArray[0].company,
          name: i.name,
          precioCompra: i.priceCompra,
          precioVenta: i.priceVenta,
          caducidad: i.caducidad,
          unidades: +1,
        },
      ]);
    }
  };
  const handleClickFormPedido = (estado) => {
    (async () => {
      const response = await TodoFunctions.postPedidos(pedidosList);
      console.log(await response);
    })();
  };
  return (
    <>
      <div className=" border bg-white p-2 mt-2 flex flex-col md:flex-row">
        <div className="form-content   w-auto">
          <div className="title">
            <h1 className="text-2xl font-bold text-gray-500">Crear pedido</h1>
          </div>
          <div className="conte pedido">
            <div className="select-Proveedor relative">
              <button
                className="flex items-center  bg-[#3498db] p-1 mt-2 rounded border"
                onClick={() => {
                  setEstadoModel(!estadoModel);
                }}
              >
                <span className="mr-2 text-white">Selecionar proveedor </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="white"
                    d="M4.219 10.781L2.78 12.22l12.5 12.5l.719.687l.719-.687l12.5-12.5l-1.438-1.438L16 22.562z"
                  />
                </svg>
              </button>
              <div
                className={
                  estadoModel
                    ? "visible duration-100"
                    : "invisible  scale-100 duration-100"
                }
              >
                <div className="list_provider rounded absolute z-50 shadow-xl bg-white w-fit p-1 mt-1 border">
                  <ul>
                    {proveedores.map((i) => {
                      return (
                        <li
                          className="hover:bg-gray-100 p-2  rounded cursor-pointer hover:text-black"
                          key={i._id}
                          onClick={() => {
                            setIdProvider(i._id);
                            setEstadoModel(!estadoModel);
                          }}
                        >
                          {i.company}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="listProviderItem w-fit my-4 shadow-md overflow-hidden border rounded-md ">
                {dataArray.length > 0 ? (
                  <>
                    <div className="">
                      <h1 className="bg-[#3498db] p-1 mb-1 text-white">
                        Datos personales del proveedor
                      </h1>
                      <div className="grid grid-cols-2 gap-2 p-1">
                        <div className="  text-lg text-black  cursor-not-allowed border px-1  truncate">
                          {dataArray[0].name}
                        </div>
                        <div className=" text-lg text-black  cursor-not-allowed border px-1  truncate">
                          {dataArray[0].company}
                        </div>
                        <div className=" text-lg text-black cursor-not-allowed truncate  px-1">
                          {dataArray[0].email}
                        </div>
                        <div className=" text-lg text-black  cursor-not-allowed border px-1 truncate">
                          {dataArray[0].phone}
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
          {/* ?hellow */}
          {dataArray.length > 0 ? (
            <div className="select-Proveedor relative">
              <button
                className="flex items-center  bg-[#3498db] p-1 mt-2 rounded border"
                onClick={() => {
                  setEstadoModel1(!estadoModel1);
                }}
              >
                <span className="mr-2 text-white">Selecionar Bodega </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="white"
                    d="M4.219 10.781L2.78 12.22l12.5 12.5l.719.687l.719-.687l12.5-12.5l-1.438-1.438L16 22.562z"
                  />
                </svg>
              </button>
              <div className={estadoModel1 ? "block" : "hidden"}>
                <div className="list_provider shadow-md absolute z-40  bg-white w-fit p-1 mt-1 border">
                  <ul>
                    {inventario.map((i) => {
                      return (
                        <li
                          className="hover:bg-gray-100 p-1 rounded cursor-pointer hover:text-black"
                          key={i._id}
                          onClick={() => {
                            setIdInventario(i._id);
                            setEstadoModel1(!estadoModel1);
                            navigate(`bodega/${i._id}`);
                          }}
                        >
                          {i.name_inventory}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="listProviderItem w-fit overflow-hidden my-4 shadow-md border rounded-md ">
                {inventoryArray.length > 0 ? (
                  <>
                    <div className="">
                      <h1 className="bg-[#3498db] p-1 text-white">
                        Datos de la bodega{" "}
                      </h1>
                      <div className="grid grid-cols-1 gap-2 p-1">
                        <div className=" text-lg text-black  cursor-not-allowed border px-1 truncate ">
                          {inventoryArray[0].name_inventory}
                        </div>
                        <div className=" text-lg text-black  cursor-not-allowed border px-1 truncate ">
                          {inventoryArray[0].description}
                        </div>
                        <div className=" text-lg text-black cursor-not-allowed border  px-1 truncate">
                          {inventoryArray[0].estadoInventory}
                        </div>
                        <div className=" text-lg text-black  cursor-not-allowed border px-1 truncate ">
                          {inventoryArray[0].responsableInventory}
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          ) : null}
          {/* ?hellow */}
        </div>
        <div className="responseId flex flex-col w-full lg:flex-row ">
        {idInventario !== "" ? (
          <div className="serach_Content w-full  p-1">
            <div className="searc_buscador ">
              <div className="searc_buscador bg-white w-full items-center rounded-full flex border my-1">
                <div className="icon ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#777777"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"
                    />
                  </svg>
                </div>
                <div className="form_search w-full">
                  <form action="" className="flex">
                    <input
                      type="text"
                      placeholder="Buscar producto"
                      className="w-full outline-none  p-2"
                      onChange={(e) => handleBuscador(e.target.value)}
                    />
                    <button className="mx-1 cursor-pointer close" type="reset">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="27"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#777777"
                          d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"
                        />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
              <div
                className="subProducts bg-white max-h-[18rem] overflow-y-hidden  border rounded-md"
                style={{
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                }}
              >
                {products.length > 0 ? (
                  <>
                    {products.map((i) => {
                      return (
                        <div
                          className="flex justify-between items-center p-2  border-b cursor-pointer hover:bg-[#69bff80b] "
                          key={i._id}
                          onClick={() => habdleSave(i)}
                        >
                          <div className="flex items-center">
                            <div className="icon mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="none"
                                  stroke="#777777"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"
                                />
                              </svg>
                            </div>
                            <div className="name">{i.name}</div>
                          </div>
                          <div className="flex items-center">
                            <div className="precioCompra mr-2">
                              {("$ " + i.priceCompra).replace(
                                /(\d)(?=(\d\d\d)+(?!\d))/g,
                                "$1,"
                              )}{" "}
                              <span className="mx-1">·</span>Uni..
                              {(" " + i.unidad).replace(
                                /(\d)(?=(\d\d\d)+(?!\d))/g,
                                "$1."
                              )}
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="#777777"
                                d="M10 8v6l4.7 2.9l.8-1.2l-4-2.4V8z"
                              />
                              <path
                                fill="#777777"
                                d="M17.92 12A6.957 6.957 0 0 1 11 20c-3.9 0-7-3.1-7-7s3.1-7 7-7c.7 0 1.37.1 2 .29V4.23c-.64-.15-1.31-.23-2-.23c-5 0-9 4-9 9s4 9 9 9a8.963 8.963 0 0 0 8.94-10h-2.02z"
                              />
                              <path
                                fill="#7bbce7"
                                d="M20 5V2h-2v3h-3v2h3v3h2V7h3V5z"
                              />
                            </svg>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <div className="flex justify-start items-center ">
                    <h1 className=" flex p-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 72 72"
                      >
                        <defs>
                          <path
                            id="openmojiEightOclock0"
                            d="M36 18.989v17m-.015.048l-10 5.773"
                          />
                        </defs>
                        <g
                          fill="#FFF"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                        >
                          <circle cx="35.958" cy="35.99" r="23" />
                          <use href="#openmojiEightOclock0" />
                        </g>
                        <g
                          fill="none"
                          stroke="#000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="2"
                        >
                          <circle cx="35.958" cy="35.99" r="23" />
                          <use href="#openmojiEightOclock0" />
                        </g>
                      </svg>
                      <h1>No hay productos para mostrar</h1>
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : null}
        {idInventario !== "" ? (
          <div className="listpedidos  w-full border m-2 rounded p-1">
            <h1>Lista de productos</h1>

            <div
              className="listProviderItem w-full my-4 
            
            
            p-1 shadow-md  rounded-md "
            >
              {data.length > 0 ? (
                <>
                  <div className="m-2">
                    <div className="flex flex-col ">
                      <div className="bg-white w-full flex justify-between items-center rounded-md text-lg text-black  px-1 ">
                        <div className="list flex">
                          <Formik
                            initialValues={{
                              nombre: data[0].name,
                              unidades: "",
                              precio: "",
                              precioVenta: "",
                            }}
                            validationSchema={Yup.object({
                              unidades: Yup.number()
                                .required("El campo no puede estar vacio")
                                .min(1, "Debe tener mas de 1 caracteres"),
                            })}
                            onSubmit={async (values) => {
                              if (pedidosList.length > 0) {
                                setPedidosList([
                                  ...pedidosList,
                                  {
                                    idBodega: data[0].idBodega,
                                    idProvedor: data[0].idProvedor,
                                    idSubproducto: data[0].idSubproducto,
                                    company: data[0].company,
                                    unidades: parseInt(values.unidades),
                                    Estado: "pendiente",
                                    totalCompra:
                                      parseInt(values.precio) *
                                      parseInt(values.unidades),
                                    name: data[0].name,
                                    PrecioCompra: parseInt(values.precio),
                                    precioVenta: parseInt(values.precioVenta),
                                    estado: "entregado",
                                    fecha: moment().format("l"),
                                  },
                                ]);
                              } else {
                                setPedidosList([
                                  {
                                    idBodega: data[0].idBodega,
                                    idProvedor: data[0].idProvedor,
                                    idSubproducto: data[0].idSubproducto,
                                    company: data[0].company,
                                    unidades: parseInt(values.unidades),
                                    estado: "aceptado",
                                    totalCompra:
                                      parseInt(values.precio) *
                                      parseInt(values.unidades),
                                    name: data[0].name,
                                    PrecioCompra: parseInt(values.precio),
                                    precioVenta: parseInt(values.precioVenta),
                                    tipo: "entregado",
                                    fecha: moment().format("l"),
                                  },
                                ]);
                              }
                            }}
                          >
                            <Form className="flex">
                              <div className="grid grid-cols-2 gap-2">
                                <Field
                                  type="text"
                                  name="nombre"
                                  placeholder="Nombre"
                                  className="outline-none border rounded-md p-1"
                                  value={data[0].name}
                                />
                                <Field
                                  type="text"
                                  name="unidades"
                                  placeholder="Ingresar unidades"
                                  className="w-full outline-none  p-1 border rounded-md"
                                />
                                <Field
                                  type="text"
                                  name="precio"
                                  placeholder="Ingrese el  precio  del producto"
                                  className="w-full outline-none  p-1 border rounded-md"
                                />
                                <Field
                                  type="text"
                                  name="precioVenta"
                                  placeholder="Precio venta "
                                  className="w-full outline-none  p-1 border rounded-md"
                                />
                                <button
                                  type="submit"
                                  className="mx-1 cursor-pointer close
                                    bg-[#7bbce7] text-white rounded-md p-1
                                  "
                                >
                                  Agregar
                                </button>
                              </div>
                            </Form>
                          </Formik>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex justify-start items-center ">
                  <h1 className=" flex p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 72 72"
                    >
                      <defs>
                        <path
                          id="openmojiEightOclock0"
                          d="M36 18.989v17m-.015.048l-10 5.773"
                        />
                      </defs>
                      <g
                        fill="#FFF"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="2"
                      >
                        <circle cx="35.958" cy="35.99" r="23" />
                        <use href="#openmojiEightOclock0" />
                      </g>
                      <g
                        fill="none"
                        stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="2"
                      >
                        <circle cx="35.958" cy="35.99" r="23" />
                        <use href="#openmojiEightOclock0" />
                      </g>
                    </svg>
                    No hay lista de productos
                  </h1>
                </div>
              )}
            </div>

            <div className="">
              {pedidosList.length > 0 ? (
                <div className="h-[18rem]  overflow-y-auto ">
                  {pedidosList.map((i) => {
                    return (
                      <div className="container">
                        <div className="bg-gray-100 flex justify-between gap-1 mx-1 p-1 my-1 rounded ">
                          <div>{i.name}</div>
                          <div>Unid...: {i.unidades}</div>
                          <div>
                            {("$ " + i.totalCompra).replace(
                              /(\d)(?=(\d\d\d)+(?!\d))/g,
                              "$1,"
                            )}{" "}
                          </div>
                          <div
                            className="delete cursor-pointer"
                            onClick={(e) => {
                              setPedidosList(
                                pedidosList.filter((e) => e.name !== i.name)
                              );
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <g fill="red">
                                <path
                                  fill="red"
                                  d="M9 7h9v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7h3z"
                                />
                                <path
                                  stroke="red"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M20 7h-2M4 7h2m0 0h12M6 7v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7m-9-.5v0A2.5 2.5 0 0 1 11.5 4h1A2.5 2.5 0 0 1 15 6.5v0"
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
        </div>
      </div>
      {pedidosList.length > 0 ? (
        <div className="bg-white p-1 m-2 shadow-lg rounded-lg xl:max-w-7xl ">
          <h2 className="p-2">Resumen del Pedido</h2>

        <div className="contentj flex ">
        <div className="flex flex-rows gap-1 w-fit flex-col md:flex-row">
        <div className="total  overflow-hidden flex-col  border rounded  inline-block ">
                <span className="bg-gray-100  block sm:inline-block p-3 text-black">Total: del pedido:  </span>
                <span className="font-mono  inline-block p-2 ">
                  $
                  {pedidosList.length > 0
                    ? pedidosList
                        .map((i) => i.totalCompra)
                        .reduce((a, b) => a + b)
                        .toString()
                        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
                    : 0}
                </span>
              </div>
              <div className="total border rounded  overflow-hidden inline-block ">
                <span className="bg-gray-100 p-3 text-black">
                  Total precio venta:{" "}
                </span>
                <div className="inline-block">
                  <span className="font-mono p-2 inline-block">
                    $
                    {pedidosList.length > 0
                      ? pedidosList
                          .map((i) => i.precioVenta * i.unidades)
                          .reduce((a, b) => a + b)
                          .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
                      : 0}
                  </span>
                </div>
              </div>
              <div className="border rounded  overflow-hidden inline-block">
                <span className="bg-gray-100 p-2 inline-block text-black">
                  Total de productos:
                </span>
                <span className="p-2 inline-block">{pedidosList.length}</span>
              </div>
            </div>
          </div>
          <div className="flex my-1 gap-1">
            <div className="border rounded  overflow-hidden inline-block">
              <span className="bg-gray-100 p-2 inline-block text-black">
                Bodega:
              </span>
              <span className="p-2 inline-block">
                {idInventario.length > 0
                  ? inventoryArray[0].name_inventory
                  : null}
              </span>
            </div>
            <div className="border rounded  overflow-hidden inline-block">
              <span className="bg-gray-100 p-2 inline-block text-black">
                Proveedor:
              </span>
              <span className="p-2 inline-block">
                {dataArray.length > 0 ? dataArray[0].name : null}
              </span>
            </div>
          </div>
          <div className="button flex justify-end gap-1">
            <button
              name="Aceptar"
              className="bg-green-400 p-2 rounded text-white rounded-2"
              onClick={() => handleClickFormPedido("aceptado")}
            >
              Aceptado
            </button>
            <button
              name="Pendiente "
              className="bg-blue-400 p-2 rounded text-white rounded-2"
              onClick={() => handleClickFormPedido("pendiente")}
            >
              Pendiente
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
