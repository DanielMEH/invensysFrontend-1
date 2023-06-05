import React from "react";

export const ChartComandsA = () => {
  return (
    <div>
      <h2 className="text-2xl dark:text-white">Comandos y atajos del sistema</h2>

      <div className="table">
        <table className="table-auto dark:text-white dark:bg-[#37415197]  rounded-lg p-1 ">
          <thead>
            <tr>
              <th className="px-4 py-2 dark:text-white">Comando</th>
              <th className="px-4 py-2 dark:text-white">Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2 dark:border-[#777777]">Shift + P</td>
              <td className="border px-4 py-2 dark:border-[#777777]">Perfil</td>
            </tr>
            <tr className="bg-gray-100 dark:bg-[#374151]">
              <td className="border px-4 py-2 dark:border-[#777777]">Shift + E</td>
              <td className="border px-4 py-2 dark:border-[#777777]">Trae</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 dark:border-[#777777]">Shift + I</td>
              <td className="border px-4 py-2 dark:border-[#777777]">Dasboard</td>
            </tr>
            <tr className="bg-gray-100 dark:bg-[#374151]">
              <td className="border px-4 py-2 dark:border-[#777777]">Shift + U</td>
              <td className="border px-4 py-2 dark:border-[#777777]">Usuarios</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 dark:border-[#777777]">Shift + N</td>
              <td className="border px-4 py-2 dark:border-[#777777]">Notificaciones</td>
            </tr>
            <tr className="bg-gray-100 dark:bg-[#374151]">
              <td className="border px-4 py-2 dark:border-[#777777]">Shift + B</td>
              <td className="border px-4 py-2 dark:border-[#777777]">Bodega</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 dark:border-[#777777]">Shift + Q</td>
              <td className="border px-4 py-2 dark:border-[#777777]">Producto</td>
            </tr>
            <tr className="bg-gray-100 dark:bg-[#374151]">
              <td className="border px-4 py-2 dark:border-[#777777]">Shift + A</td>
              <td className="border px-4 py-2 dark:border-[#777777]">Categorias</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 dark:border-[#777777]">Shift + X</td>
              <td className="border px-4 py-2 dark:border-[#777777]">Proveedor</td>
            </tr>
            <tr className="bg-gray-100 dark:bg-[#374151]">
              <td className="border px-4 py-2 dark:border-[#777777]">Shift + Z</td>
              <td className="border px-4 py-2 dark:border-[#777777]">Pedidos</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 dark:border-[#777777]">Shift + S</td>
              <td className="border px-4 py-2 dark:border-[#777777]">Venta</td>
            </tr>
            <tr className="bg-gray-100 dark:bg-[#374151]">
              <td className="border px-4 py-2 dark:border-[#777777]">Shift + C</td>
              <td className="border px-4 py-2 dark:border-[#777777]">Compras</td>
            </tr>
            <tr className="bg-gray-100 dark:bg-[#374151]">
              <td className="border px-4 py-2 dark:border-[#777777]">ctrl + e</td>
              <td className="border px-4 py-2 dark:border-[#777777]">
                Exportar archivos escel de las tablas
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
