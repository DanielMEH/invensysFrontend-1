import React, { useState, useContext, createContext } from "react";
import { getSubProducts, TodoFunctions } from "../../apis/ApiData";
import { DataSubProducts } from "../../components/DataSubProducts";

const createContextSubProducts = createContext();

export const useContextSubProducts = () => useContext(createContextSubProducts);

export const ContextSubProducts = ({ children }) => {
  const [subProductsData, setSubProductsData] = useState([]);

  const getSubProductsContent = async (id) => {
    const data = await getSubProducts(id);
    setSubProductsData(data.data.response);
    return data;
  };

  const updateSubProductsContent = async (id, data) => {
    const response = await TodoFunctions.translateProducts(data);
    

    setSubProductsData(
      subProductsData.map((item) =>
        item._id === id ? response.data.responseClass : item
      )
    );
    <DataSubProducts dataInventorySubProducts={subProductsData} />;
    return response;
  };
  return (
    <>
      <createContextSubProducts.Provider
        value={{
          getSubProductsContent,
          subProductsData,
          setSubProductsData,
          updateSubProductsContent,
        }}
      >
        {children}
      </createContextSubProducts.Provider>
    </>
  );
};
