import React, { createContext, useContext } from "react";

const ContextPedidosHook = createContext();

export const useContextPedidos = () => useContext(ContextPedidos);

export const ContextPedidos = ({children}) => {
  return (
      <ContextPedidosHook.Provider value={{
      }}>
          {children}
        </ContextPedidosHook.Provider>
  )
}
