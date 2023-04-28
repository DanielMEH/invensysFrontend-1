import React, { useContext, createContext, useState } from "react";
import {
  getInventario,
  postInventario,
  deleteInventario,
  updateInventario,
} from "../../apis/ApiData";

const InventarioContext = createContext();

export const useInventario = () => useContext(InventarioContext);

export const ContextInventario = ({ children }) => {
  const [inventario, setInventario] = useState([]);

  const GetInventario = async () => {
    const data = await getInventario();
    setInventario(data.data.response);
    return data;
  };

  const PostInventario = async (data) => {
    const inventarios = await postInventario(data);
    setInventario([...inventario, inventarios.data.response]);
    return inventarios;
  };
  const DeleteInventario = async (id) => {
    const response = await deleteInventario(id);
    setInventario(inventario.filter((item) => item._id !== id));
    return response;
  };
  const UpdateInventario = async (id, data) => {
    const response = await updateInventario(id, data);

    setInventario(
      inventario.map((items) =>
        items._id === id ? response.data.response : items
      )
    );
    return response;
  };

  return (
    <InventarioContext.Provider
      value={{
        inventario,
        setInventario,
        GetInventario,
        PostInventario,
        DeleteInventario,
        UpdateInventario,
      }}
    >
      {children}
    </InventarioContext.Provider>
  );
};
