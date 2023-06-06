import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSubProducts } from "../apis/ApiData";
import { useInventario } from "../hooks/context/ContextInventario";
import { ToastContainer, toast } from "react-toastify";
import "../assets/css/fuente.css";
import "../components/efectosCss.css";
import { useContextSubProducts } from "../hooks/context/ContextSubProducts";
export const TranslateProduct = () => {
  const [products, setProducts] = React.useState([]);
  const [idB, setIdB] = useState([]);
  const { inventario} = useInventario();
  const { id } = useParams();

  const {  updateSubProductsContent, subProductsData } =
    useContextSubProducts();

  useEffect(() => {
    (async () => {
      const data = await getSubProducts(id);
      setProducts(data.data.response);
      
    })();
  }, [id]);
  const HandleSearch = async (value) => {
    const filteredData = products.filter((item) => {
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
    const data = await getSubProducts(id);
    return setProducts(data.data.response);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (idB === id) {
      return toast.error("No se puede trasladar a la misma bodega");
    } else {
      if (e.target.cantidad.value === "") {
        return toast.error("Ingrese la cantidad");
      } else {
        if (idB.length === 0) {
          return toast.error("Seleccione la bodega de destino");
        } else {
          if (isNaN(e.target.cantidad.value)) {
            return toast.error("Solo se permiten numeros");
          } else {
            let pedidos = {
              idDestino: idB,
              idOrigen: id,
              idSubProducto: e.target.idSubproduct.value,
              cantidad: parseInt(e.target.cantidad.value),
              userCorreo: e.target.name.value,
            };
            if (pedidos.cantidad === 0) {
              return toast.error("Ingrese una cantidad mayor a 0");
            } else if (pedidos.cantidad < 0) {
              return toast.error("Ingrese una cantidad mayor a 0");
            } else {
              products.map(async (item) => {
                if (item._id === pedidos.idSubProducto) {
                  if (item.unidad < pedidos.cantidad) {
                    return toast.error(
                      "No se puede trasladar mas de lo que hay en la bodega"
                    );
                  } else {
                    const response = await updateSubProductsContent(
                      pedidos.idSubProducto,
                      pedidos
                    );
                    if (response.status === 200) {
                      toast.success("Producto trasladado");
                    } else {
                      return toast.error("Error al trasladar");
                    }
                  }
                }
              });
            }
          }
        }
      }
    }
  };

  useEffect(() => {
    (async () => {
    
    })();
  }, []);

  const handleVolver = () => {
    window.history.back();
  };

  return (
    <>
      <ToastContainer />
      <div className="rounded border  w-fit p-1  mt-4 max-w-5xl  h-full z-50 mx-auto">
        <div className="container absolute inset-0 my-auto h-fit shadow-2xl effect_blur2 z-50  mx-auto w-fit border rounded-md p-">
          <div className="d effect_blur2 border mb-1 p-1 ">
            <div className="flex justify-between">
              <h2 className="m-1 text-2xl font-bold dark:text-white">
                Trasladar Productos
              </h2>
              <div className="span cursor-pointer " onClick={handleVolver}>
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
            <h2 className="dark:text-white">Selecione la bodega de destino</h2>
            <div className="flex  ">
              {inventario.map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-transparent border dark:border-[#019afa] flex p-1 h- m-1 rounded-full 
                
                focus:bg-blue-500 focus:text-white dark:text-white
                "
                  onClick={() => setIdB(item._id)}
                >
                  <input
                    type="radio"
                    id="bodega"
                    name="bodega"
                    value={item.id}
                    className="m-1 block"
                  />
                  <label htmlFor="bodega">{item.name_inventory}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="input2 mx-1">
            <input
              type="Buscar"
              placeholder="Buscar producto"
              className="w-full h-10 border border-gray-300 dark:bg-[#37415197] rounded-md p-2 outline-none"
              onChange={(e) => HandleSearch(e.target.value)}
            />
          </div>
          <div
            className="flex w-fit overflow-y-auto sss-scrool min-h-[20rem] mx-auto justify-center my-2 flex-col"
            style={{
              overflowY: "auto",
              overflowX: "hidden",
              scrollbarWidth: "1px",
              msOverflowStyle: "none",
            }}
          >
            {products.length > 0 ? (
              <div className="h-80 overflow-y-auto">
                {products.map((item, index) => (
                  <>
                    <div>
                      <ul>
                        <li key={index}>
                          <div className="flex justify-between m-4 items-center">
                            <div className="flex">
                              <form
                                onSubmit={handleSubmit}
                                className="flex items-center"
                              >
                                <div className="flex flex-col items-center">
                                  <span className="text-sm text-gray-500 dark:text-white">
                                    Nombre
                                  </span>
                                  <span className="text-sm truncate w-14 dark:text-white text-gray-500">
                                    {item.name}
                                  </span>
                                </div>
                                <div className="flex flex-col ml-4">
                                  <span className="text-sm text-gray-500 dark:text-white">
                                    Cantidad
                                  </span>
                                  <span className="text-sm text-gray-500 dark:text-white">
                                    {item.unidad}
                                  </span>
                                </div>
                                <div className="cajondeProducts flex border p-1 rounded-md border-blue-300 m-2">
                                  <div className="buttom"></div>
                                  <input
                                    type="hidden"
                                    name="idSubproduct"
                                    value={item._id}
                                  />
                                  <input
                                    type="hidden"
                                    name="unidad"
                                    value={item.unidad}
                                  />
                                  <input
                                    type="hidden"
                                    name="name"
                                    value={item.name}
                                  />
                                  <input
                                    type="text"
                                    className="w-20 h-10  text-center dark:bg-transparent dark:text-white rounded-md outline-none"
                                    placeholder="0"
                                    name="cantidad"
                                  />

                                  <div className="buttom"></div>
                                </div>
                                <button className="bg-[#019afa] text-white rounded-md p-2 ml-2">
                                  Agregar
                                </button>
                              </form>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </>
                ))}
              </div>
            ) : (
              <h1>No se encontraron productos</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
