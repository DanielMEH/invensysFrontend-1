import React, { useRef, useState, useCallback, useEffect } from "react";
import moment from "moment-with-locales-es6";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import plus from "../assets/icons/plus.svg";
import { AG_GRID_LOCALE_EN } from "../locale/locale";
import OpcionesCategory from "./OpcionesCategory";
import { RegisterCategorys } from "./RegisterCategorys";
import { checkboxSelection } from "./ChackSelection";
import { headerCheckboxSelection } from "./ChackSelection";
import { setPrinterFriendly } from "./ChackSelection";
import { ChackSelection } from "./ChackSelection";
import { setNormal } from "./ChackSelection";
import UploadExcel from "./UploadExcel";

moment.locale("es");

export const DataSubProducts = ({ dataInventorySubProducts }) => {
  // count categorias
  const defaultColDef = ChackSelection();
  const gridRef = useRef();

  const [stateModel, StateModel] = useState(false);
  const [ExcelModel, setExcelModel] = useState(false);

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

  const handleShowModel = () => {
    StateModel(!stateModel);
  };

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
  const onChart1 = useCallback(() => {
    var params = {
      cellRange: {
        rowStartIndex: 0,
        rowEndIndex: 4,
        columns: ["idAccount", "correo", "estado"],
      },
      chartType: "groupedColumn",
      chartThemeName: "ag-vivid",
      chartThemeOverrides: {
        common: {
          title: {
            enabled: true,
            text: "Estadisticas de los 5 primeros usuarios",
          },
        },
      },
    };
    gridRef.current.api.createRangeChart(params);
  }, []);


   
    const totalSuma  = dataInventorySubProducts.map(
      (item) => item.priceVenta * item.unidad
    )

    const sumaTotal = ()=>{
      const money = new Intl.NumberFormat("en-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 2,
      });
    
      let total = 0
      for(let i = 0; i < totalSuma.length; i++){
        total += totalSuma[i]
      }
      return money.format(total)
    }

    console.log("tttttttt",totalSuma)
  
  const onChart2 = useCallback(() => {
    var params = {
      cellRange: {
        columns: ["id", "postId", "name"],
      },
      chartType: "groupedBar",
      chartThemeName: "ag-pastel",
      chartThemeOverrides: {
        common: {
          title: {
            enabled: true,
            text: "Todos los usuarios",
          },
          legend: {
            enabled: false,
          },
        },
      },
      unlinkChart: true,
    };
    gridRef.current.api.createRangeChart(params);
  }, []);

  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById("filter-text-box").value
    );
  }, []);

  return (
    <>
      <div className="panel_opciones bg-white w-[100%] mx-auto mt-4 mb-4  rounded-md p-2">
        <div className="plus_panel flex justify-between items-center">
          <section className="flex ">
            <button
              onClick={onBtnExport}
              className="flex items-center border mx-1 p-1 rounded-md"
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
              className="flex items-center border mx-1 p-1 rounded-md"
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
              className="flex items-center border mx-1 p-1 rounded-md"
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
            <div
             
              className="flex items-center border mx-1 p-1 rounded-md"
            >
              <span>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64"><g fill="#f79423"><path d="M15.742 3.768C19.524 2.54 30.25 6.893 31.624 8.459c1.365 1.558-7.546 2.202-12.384 2.919c-4.992.751-9.971 1.648-11.332.077c-1.36-1.549 4.057-6.451 7.834-7.687"/><path d="M41.772 1.038c4.322-1.262 15.912 3.928 17.312 5.696c1.386 1.79-8.58 2.236-14.02 2.893c-5.631.674-11.271 1.52-12.658-.262c-1.396-1.768 5.059-7.078 9.369-8.327"/><path d="M16.404 8.207c2.597-1.708 13.774.039 15.658 1.112c1.902 1.064-5.305 3.219-9.05 4.691c-3.851 1.523-7.624 3.193-9.521 2.103c-1.909-1.06.327-6.181 2.915-7.906"/><path d="M26.882.09c3.781.339 7.76 6.953 7.391 8.52c-.356 1.558-7.348-.85-11.465-1.901c-4.24-1.078-8.614-2.031-8.236-3.589c.365-1.575 8.52-3.365 12.31-3.03"/><path d="M39.832 7.485c3.795.326 7.77 6.945 7.4 8.507c-.369 1.567-7.357-.846-11.474-1.893c-4.228-1.073-8.615-2.039-8.237-3.601c.358-1.562 8.53-3.343 12.311-3.01"/><path d="M4.712 51.636c0 9.431 13.478 12.178 27.896 12.178c14.417 0 27.9-2.747 27.9-12.178c0-9.413-13.482-37.532-27.9-37.532S4.712 42.224 4.712 51.636"/></g><path fill="#845939" d="M41.261 15.263a3.569 3.569 0 0 1-3.571 3.571H27.525a3.571 3.571 0 0 1 0-7.142h10.164a3.571 3.571 0 0 1 3.572 3.571"/><g fill="#25333a"><path d="M39.188 40.966c-1.107-1.181-2.635-1.971-4.086-2.627c-1.511-.688-3.7-1.249-4.662-2.73c-.807-1.24.305-2.541 1.438-2.919c1.824-.613 4.074.125 5.675 1.026c.798.446 1.64.009 1.944-.79c.335-.884.67-1.769 1-2.652c.202-.537-.124-1.224-.604-1.494c-1.455-.807-2.971-1.249-4.572-1.459v-2.704c0-.721-.601-1.322-1.322-1.322h-2.494c-.717 0-1.322.601-1.322 1.322v3.02c-2.468.712-4.717 2.301-5.593 4.825c-.974 2.794-.382 5.687 1.691 7.803c1.112 1.138 2.614 1.885 4.04 2.532c1.609.726 3.588 1.249 4.627 2.799c1.112 1.657-.326 3.292-1.88 3.761c-2.086.626-4.614-.313-6.366-1.404c-.768-.48-1.661.013-1.94.79l-.966 2.691c-.206.575.137 1.185.609 1.493c1.653 1.082 3.55 1.618 5.494 1.842v2.846c0 .387.142.683.352.893c.013.014.026.026.034.039a.296.296 0 0 0 .039.034c.21.215.506.356.893.356h2.537a1.33 1.33 0 0 0 1.318-1.322v-3.142c2.743-.79 4.863-2.562 5.932-5.314c1.096-2.807.164-6.074-1.823-8.194"/><path d="M39.188 39.14c-1.107-1.176-2.635-1.966-4.086-2.622c-1.511-.688-3.7-1.249-4.662-2.734c-.807-1.232.305-2.537 1.438-2.919c1.824-.609 4.074.125 5.675 1.026c.798.451 1.64.008 1.944-.79c.335-.884.67-1.764 1-2.648c.202-.541-.124-1.228-.604-1.494c-1.455-.811-2.971-1.249-4.572-1.463v-2.704c0-.717-.601-1.318-1.322-1.318h-2.494c-.717 0-1.322.601-1.322 1.318v3.02c-2.468.713-4.717 2.305-5.593 4.829c-.974 2.794-.382 5.687 1.691 7.799c1.112 1.138 2.614 1.889 4.04 2.532c1.609.726 3.588 1.249 4.627 2.799c1.112 1.656-.326 3.292-1.88 3.764c-2.086.627-4.614-.312-6.366-1.407c-.768-.477-1.661.017-1.94.79l-.966 2.695c-.206.57.137 1.185.609 1.493c1.653 1.078 3.55 1.618 5.494 1.842v2.846c0 .382.142.679.352.893c.013.014.026.026.034.039a.296.296 0 0 1 .039.034c.21.21.506.352.893.352h2.537a1.33 1.33 0 0 0 1.318-1.317v-3.146c2.743-.789 4.863-2.558 5.932-5.313c1.096-2.806.164-6.077-1.823-8.197"/></g></svg>
              </span>
              <span>Total de bodega : {sumaTotal()} </span>
            </div>
          </section>
          <div className="search bg-white border flex  items-center p-2 rounded-full">
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
                className="outline-none"
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
        className="ag-theme-alpine shadow-2xl mx-auto "
        id="myGrid"
        style={{ height: 600, width: "100%" }}
      >
        <AgGridReact
          ref={gridRef}
          localeText={AG_GRID_LOCALE_EN}
          columnDefs={columnDefs}
          rowData={dataInventorySubProducts.map((item) => {
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
