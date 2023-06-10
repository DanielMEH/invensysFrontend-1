import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import moment from "moment-with-locales-es6";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
import "react-loading-skeleton/dist/skeleton.css";
import { AgGridReact } from "ag-grid-react";

import { AG_GRID_LOCALE_EN } from "../locale/locale";
import { setPrinterFriendly } from "./ChackSelection";
import { ChackSelection } from "./ChackSelection";
import { setNormal } from "./ChackSelection";
import { Link } from "react-router-dom";
import { useContextSubProducts } from "../hooks/context/ContextSubProducts";
moment.locale("es");
export const DataSubProducts = ({ dataInventorySubProducts, id, upload }) => {
  // count categorias
  const defaultColDef = ChackSelection();
  const gridRef = useRef();
  const { getSubProductsContent, subProductsData } = useContextSubProducts();

  useMemo(() => {
    (async () => {
      await getSubProductsContent(id);
    })();
  }, []);

  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "Identificador",
      field: "id",
      rowDrag: true,

      filter: "agTextColumnFilter",
      chartDataType: "correo",
    },
    {
      headerName: "Nombre",
      field: "name",
      chartDataType: "email",
      filter: "agTextColumnFilter",

      cellEditorParams: (params) => {
        return {};
      },
    },
    {
      headerName: "Precio de compra",
      field: "priceCompra",
      filter: "agTextColumnFilter",
      chartDataType: "id",
    },
    {
      headerName: "Precio de venta",
      field: "priceVenta",
      chartDataType: "body",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Stock minimo",
      field: "stockMinimo",
      chartDataType: "body",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Stock Maximo",
      field: "stockMaximo",
      chartDataType: "body",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Unidades",
      field: "unidad",
      chartDataType: "body",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Fecha de caducidad",
      field: "caducidad",
      chartDataType: "body",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Ganancias",
      field: "ganancias",
      chartDataType: "body",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Total",
      field: "total",
      chartDataType: "body",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Fecha de creacion",
      field: "dateCreate",
      chartDataType: "body",
      filter: "agTextColumnFilter",
    },
  ]);

  const onBtnExport = useCallback(() => {
    gridRef.current.api.exportDataAsCsv();
  }, []);

  const onBtExportExel = useCallback(() => {
    gridRef.current.api.exportDataAsExcel();
  }, []);
  const onBtPrint = useCallback(() => {
    const api = gridRef.current.api;
    setPrinterFriendly(api);
    setTimeout(function () {
      window.print();
      setNormal(api);
    }, 2000);
  }, []);

  const totalSuma = dataInventorySubProducts.map(
    (item) => item.priceVenta * item.unidad
  );

  const sumaTotal = () => {
    const money = new Intl.NumberFormat("en-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 2,
    });

    let total = 0;
    for (let i = 0; i < totalSuma.length; i++) {
      total += totalSuma[i];
    }
    return money.format(total);
  };

  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById("filter-text-box").value
    );
  }, []);

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);
  return (
    <>
      <div className="panel_opciones bg-white dark:text-white dark:bg-[#37415197] w-[90%] md:w-full md:mx-auto mt-4 mb-4  rounded-md p-2">
        <div className="plus_panel flex flex-col gap-2 md:flex-row justify-between items-center">
          <section className="flex overflow-x-auto flex-col gap-2 md:flex-row ">
            <button
              onClick={onBtnExport}
              className="flex items-center dark:border-[#019afa] border mx-1 p-1 rounded-md"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="green"
                    d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM5 8v11h14V8H5Zm7 10l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Zm-7 1h14H5Z"
                  />
                </svg>
              </span>
              <span>Descargar archivo scv</span>
            </button>

            <button
              onClick={onBtExportExel}
              className="flex items-center dark:border-[#019afa] border mx-1 p-1 rounded-md"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#158c51"
                    d="m2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.495v20.846a.5.5 0 0 1-.57.495L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99zM17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4V3zm-6.8 9L13 8h-2.4L9 10.286L7.4 8H5l2.8 4L5 16h2.4L9 13.714L10.6 16H13l-2.8-4z"
                  />
                </svg>
              </span>
              <span>Exportar a excel</span>
            </button>

            <button
              onClick={onBtPrint}
              className="flex items-center dark:border-[#019afa] border mx-1 p-1 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18 7H6V3h12v4Zm0 5.5q.425 0 .713-.288T19 11.5q0-.425-.288-.713T18 10.5q-.425 0-.713.288T17 11.5q0 .425.288.713T18 12.5ZM16 19v-4H8v4h8Zm2 2H6v-4H2v-6q0-1.275.875-2.138T5 8h14q1.275 0 2.138.863T22 11v6h-4v4Z"
                />
              </svg>
              <span>Imprimir</span>
            </button>
            <Link
              to={`TrasladarProduct/${id}`}
              className="flex items-center dark:border-[#019afa] border mx-1 p-1 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFCCBC"
                  d="M7 40V8c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4v32c0 2.2-1.8 4-4 4H11c-2.2 0-4-1.8-4-4z"
                />
                <g fill="#FF5722">
                  <path d="M42.7 24L32 33V15z" />
                  <path d="M14 21h23v6H14z" />
                </g>
              </svg>
              <span>Trasladar productos </span>
            </Link>
            <div className="flex dark:border-[#019afa] items-center border mx-1 p-1 rounded-md">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#78909C"
                    d="M40 41H8c-2.2 0-4-1.8-4-4V16.1c0-1.3.6-2.5 1.7-3.3L24 0l18.3 12.8c1.1.7 1.7 2 1.7 3.3V37c0 2.2-1.8 4-4 4z"
                  />
                  <path fill="#AED581" d="M14 1h20v31H14z" />
                  <g fill="#558B2F">
                    <path d="M13 0v33h22V0H13zm20 31H15V2h18v29z" />
                    <path d="M34 3c0 1.7-.3 3-2 3s-3-1.3-3-3s1.3-2 3-2s2 .3 2 2zM16 1c1.7 0 3 .3 3 2s-1.3 3-3 3s-2-1.3-2-3s.3-2 2-2z" />
                    <circle cx="24" cy="8" r="2" />
                    <circle cx="24" cy="20" r="6" />
                  </g>
                  <path
                    fill="#CFD8DC"
                    d="M40 41H8c-2.2 0-4-1.8-4-4V17l20 13l20-13v20c0 2.2-1.8 4-4 4z"
                  />
                </svg>
              </span>
              <span>Total de bodega : {sumaTotal()} </span>
            </div>
          </section>
          <div className="search bg-white dark:bg-[#37415197] dark:border-none border flex  items-center p-2 rounded-full">
            <div className="icon_search mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 16 16"
              >
                <g transform="translate(16 0) scale(-1 1)">
                  <path
                    fill="#ABB2B9"
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0z"
                  />
                </g>
              </svg>
            </div>
            <div className="input_panel">
              <input
                type="text"
                id="filter-text-box"
                placeholder="Buscar..."
                onInput={onFilterTextBoxChanged}
                className="outline-none  dark:text-white bg-transparent w-full"
              />
            </div>
          </div>
        </div>
        <div className="panel2">
          <div className="buttons"></div>
        </div>
      </div>
      <div className="buttons"></div>
      <div className="panel_second_h w-[100%] mx-auto flex justify-between items-center"></div>

      <div
        className={
          darkMode
            ? "ag-theme-alpine-dark h-[300px] w-[300px] md:w-[100%] md:h-[600px] shadow-2xl mx-auto rounded-lg overflow-hidden "
            : " rounded-lg overflow-hidden ag-theme-alpine h-[300px] w-[300px] md:w-[100%] md:h-[600px] shadow-2xl mx-auto"
        }
        id="myGrid"
      >
        <AgGridReact
          ref={gridRef}
          localeText={AG_GRID_LOCALE_EN}
          columnDefs={columnDefs}
          rowData={subProductsData.map((item) => {
            let ganancias = item.priceVenta - item.priceCompra;
            let total = item.priceVenta * item.unidad;
            const fechaActual = new Date();
            const diaActual = fechaActual.getDate();
            const mesActual = fechaActual.getMonth();
            const anioActual = fechaActual.getFullYear();

            const fechaVencimiento = item.caducidad;
            const milisegundosPorDia = 1000 * 60 * 60 * 24; // milisegundos en un día

            const diferencia = Math.ceil(
              (Date.parse(fechaVencimiento) -
                Date.parse(`${anioActual}-${mesActual + 1}-${diaActual}`)) /
                milisegundosPorDia
            );

            return {
              id: item._id,
              name: item.name,
              priceCompra: ("$ " + item.priceCompra).replace(
                /(\d)(?=(\d\d\d)+(?!\d))/g,
                "$1,"
              ),

              priceVenta: ("$ " + item.priceVenta).replace(
                /(\d)(?=(\d\d\d)+(?!\d))/g,
                "$1,"
              ),

              stockMinimo: (" " + item.stockMinimo).replace(
                /(\d)(?=(\d\d\d)+(?!\d))/g,
                "$1."
              ),
              stockMaximo: (" " + item.stockMaximo).replace(
                /(\d)(?=(\d\d\d)+(?!\d))/g,
                "$1."
              ),
              unidad: (" " + item.unidad).replace(
                /(\d)(?=(\d\d\d)+(?!\d))/g,
                "$1."
              ),
              ganancias: ("$ " + ganancias).replace(
                /(\d)(?=(\d\d\d)+(?!\d))/g,
                "$1,"
              ),
              total: ("$ " + total).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"),
              caducidad: moment().add(diferencia, "days").calendar(),
              dateCreate: moment(item.createdAt).format("LLLL"),
            };
          })}
          defaultColDef={defaultColDef}
          animateRows={true}
          rowGroupPanelShow="always"
          pivotPanelShow="always"
          rowDragManaged={true}
          icons={true}
          loadingCellRenderer={"loadingCellRenderer"}
          loadingOverlayComponent={"loadingOverlayComponent"}
          pagination={true}
          paginationPageSize={10}
          paginateChildRows={true}
          suppressRowClickSelection={true}
          groupSelectsChildren={true}
          rowSelection={"multiple"}
          enableCharts={true}
          cacheQuickFilter={true}
        ></AgGridReact>
      </div>
    </>
  );
};
