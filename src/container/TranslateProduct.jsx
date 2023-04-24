import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSubProducts, TodoFunctions } from "../apis/ApiData";
import { useInventario } from "../hooks/context/ContextInventario";
import { ToastContainer, toast } from "react-toastify";
export const TranslateProduct = () => {
  const [products, setProducts] = React.useState([]);
  const [idB, setIdB] = useState([]);
  const {
    inventario,

    GetInventario,
  } = useInventario();
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const data = await getSubProducts(id);
      setProducts(data.data.response);
    })();
  }, []);
  const HandleSearch = async (value) => {
    const filteredData = products.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });

    if (value === "") {
      dataNew(value);
    } else {
      if (products.length > 0) {
        return setProducts(filteredData);
      } else {
        dataNew(value);
      }
    }
  };

  const dataNew = async (value) => {
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

            const response = await TodoFunctions.translateProducts(pedidos);
            if (response.status === 200) {
              return toast.success("Producto trasladado");
            } else {
              return toast.error("Error al trasladar");
            }
          }
        }
      }
    }
  };

  useEffect(() => {
    (async () => {
      await GetInventario();
    })();
  }, []);


  return (
    <>
      <ToastContainer />
      <div className="absolute inset-0 rounded border shadow-2xl w-full mt-4 max-w-5xl bg-white  h-full z-50 mx-auto">
        <h2 className="m-6 text-2xl font-bold">Trasladar Productos</h2>

        <div className="container mx-auto w-fit border rounded-md p-2">
          Selecione la bodega de destino
          <div className="flex overflow-x-auto">
            {inventario.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 flex p-1 m-1 rounded-full 
                
                focus:bg-blue-500 focus:text-white
                "
                onClick={() => setIdB(item._id)}
              >
                <input
                  type="radio"
                  id="bodega"
                  name="bodega"
                  value={item.id}
                  className=""
                />
                <label htmlFor="bodega">{item.name_inventory}</label>
              </div>
            ))}
          </div>
          <div className="input2">
            <input
              type="Buscar"
              placeholder="Buscar producto"
              className="w-full h-10 border border-gray-300 rounded-md p-2 outline-none"
              onChange={(e) => HandleSearch(e.target.value)}
            />
          </div>
          {products.length > 0 ? (
            <>
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
                                <span className="text-sm text-gray-500">
                                  Nombre
                                </span>
                                <span className="text-sm truncate w-14 text-gray-500">
                                  {item.name}
                                </span>
                              </div>
                              <div className="flex flex-col ml-4">
                                <span className="text-sm text-gray-500">
                                  Cantidad
                                </span>
                                <span className="text-sm text-gray-500">
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
                                  className="w-20 h-10  text-center  rounded-md outline-none"
                                  placeholder="0"
                                  name="cantidad"
                                />

                                <div className="buttom"></div>
                              </div>
                              <button className="bg-[#5ab4ef] text-white rounded-md p-2 ml-2">
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
            </>
          ) : (
            <h1>No se encontraron productos</h1>
          )}
        </div>
      </div>
    </>
  );
};
