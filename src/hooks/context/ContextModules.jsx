import React, { useState, useContext, createContext } from "react";

import { getBusiness } from "../../apis/ApiData";

const contextModules = createContext();

export const useContextModules = () => {
  const context = useContext(contextModules);
  return context;
};

export const ContextModules = ({ children }) => {
  const [dataproductM, setDataProductM] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [dataProviderM, setProvidersM] = useState([]);

  const getModulesTodo = async () => {
    const modules = await getBusiness();

    setDataCategory(modules.data.dataCategory);
    setDataProductM(modules.data.dataProduct);
    setProvidersM(modules.data.dataProvider);
    return modules;
  };

  return (
    <>
      <contextModules.Provider
        value={{
          getModulesTodo,
          dataproductM,
          dataCategory,
          dataProviderM,
        }}
      >
        {children}
      </contextModules.Provider>
    </>
  );
};
