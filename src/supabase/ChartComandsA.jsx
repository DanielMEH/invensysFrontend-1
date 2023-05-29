import React from "react";

export const ChartComandsA = () => {
  return (
    <div>
      <h2 className="text-2xl">Comandos y atajos del sistema</h2>

      <div className="table">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Comando</th>
              <th className="px-4 py-2">Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Shift + P</td>
              <td className="border px-4 py-2">Perfil</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Shift + E</td>
              <td className="border px-4 py-2">Trae</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Shift + I</td>
              <td className="border px-4 py-2">Dasboard</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Shift + U</td>
              <td className="border px-4 py-2">Usuarios</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Shift + N</td>
              <td className="border px-4 py-2">Notificaciones</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Shift + B</td>
              <td className="border px-4 py-2">Bodega</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Shift + Q</td>
              <td className="border px-4 py-2">Producto</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Shift + A</td>
              <td className="border px-4 py-2">Categorias</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Shift + X</td>
              <td className="border px-4 py-2">Proveedor</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Shift + Z</td>
              <td className="border px-4 py-2">Pedidos</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Shift + S</td>
              <td className="border px-4 py-2">Venta</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Shift + C</td>
              <td className="border px-4 py-2">Compras</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">ctrl + e</td>
              <td className="border px-4 py-2">
                Exportar archivos escel de las tablas
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
