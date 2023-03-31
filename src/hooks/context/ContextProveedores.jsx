import React, { useContext, createContext, useState } from "react";
import {
  getProveedores,
  postProveedores,
  deleteProveedores,
  updateProveedores,
} from "../../apis/ApiData";

const ContextProviders = createContext();

export const useContextProviders = () => useContext(ContextProviders);

export const ContextProveedores = ({ children }) => {
  const [providersData, setProvidersData] = useState([]);

  const getProviders = async () => {
    const res = await getProveedores();
    
    setProvidersData(res.data);
    return res;
  };

  const postProviders = async (data) => {
    const providers = await postProveedores(data);

    let getData = {
      _id: providers.data.providers._id,
      name: providers.data.providers.name,
      email: providers.data.providers.email,
      phone: providers.data.providers.phone,
      address: providers.data.providers.address,
      company: providers.data.providers.company,
      fecha: providers.data.providers.createdAt,
    };
    setProvidersData([...providersData, getData]);

    return providers;
  };

  const deleteProviders = async (id) => {
    const res = await deleteProveedores(id);
    setProvidersData(providersData.filter((item) => item._id !== id));
    return res;
  };
  const updateProviders = async (id, data) => {
    const res = await updateProveedores(id, data);
    return res;
  };

  return (
    <ContextProviders.Provider
      value={{
        providersData,
        setProvidersData,
        getProviders,
        postProviders,
        deleteProviders,
        updateProviders,
      }}
    >
      {children}
    </ContextProviders.Provider>
  );
};
