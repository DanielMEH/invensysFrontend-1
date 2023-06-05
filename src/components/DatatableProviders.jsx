import React, { useRef, useState, useCallback, useEffect } from "react";
import moment from "moment-with-locales-es6";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "react-loading-skeleton/dist/skeleton.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import plus from "../assets/icons/plus.svg";
import { AG_GRID_LOCALE_EN } from "../locale/locale";
import { checkboxSelection } from "./ChackSelection";
import { headerCheckboxSelection } from "./ChackSelection";
import { setPrinterFriendly } from "./ChackSelection";
import { ChackSelection } from "./ChackSelection";
import { setNormal } from "./ChackSelection";
import { useContextProviders } from "../hooks/context/ContextProveedores";
import OptionsProviders from "./OptionsProviders";
import { CreateProveedor } from "./providers/CreateProveedor";
moment.locale("es");

export const DatatableProviders = () => {
  const { providersData, getProviders } = useContextProviders();
  useEffect(() => {
    getProviders();
  }, []);

  const [active, setActive] = useState(false);

  const defaultColDef = ChackSelection();
  const gridRef = useRef();


  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "Identificador",
      field: "_id",
      rowDrag: true,
      checkboxSelection: checkboxSelection,
      headerCheckboxSelection: headerCheckboxSelection,
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Nombre",
      field: "name",
      chartDataType: "series",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Dirección",
      field: "address",
      filter: "agTextColumnFilter",
      chartDataType: "series",
    },
    {
      headerName: "Compañia",
      field: "company",
      chartDataType: "series",
      filter: "agTextColumnFilter",
      sort: "desc",
    },
    {
      headerName: "Correo",
      field: "email",
      chartDataType: "series",
      filter: "agTextColumnFilter",
      sort: "desc",
    },

    {
      headerName: "Telefono",
      field: "phone",
      chartDataType: "category",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "fecha",
      field: "fecha",
      chartDataType: "series",
    },
    {
      headerName: "Opciones",
      field: "Settings",
      cellRenderer: OptionsProviders,
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
      {active === true ? <CreateProveedor /> : null}
      <div className="panel_opciones bg-white dark:bg-[#37415197] dark:text-white w-[100%] mx-auto mt-10 mb-1  rounded-md p-4">
        <div className="plus_panel flex lg:flex-row flex-col lg:justify-between lg:items-center">
          <section className="items-center flex">
            <div className="users flex items-center mx-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 48 48"
                >
                  <g
                    fill="none"
                    stroke="#3498DB"
                    stroke-linejoin="round"
                    stroke-width="4"
                  >
                    <rect width="30" height="36" x="9" y="8" rx="2" />
                    <path
                      stroke-linecap="round"
                      d="M18 4v6m12-6v6m-14 9h16m-16 8h12m-12 8h8"
                    />
                  </g>
                </svg>
              </span>
              <span className="text-[#3498DB] mx-1">Pedidos</span>
              <span className="text-[#3498DB] mx-1">
                {providersData.length}
              </span>
            </div>
          </section>

          <section className="flex overflow-x-auto flex-col gap-2 md:flex-row  ">
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
              <span className="whitespace-nowrap">Descargar archivo scv</span>
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
              <span className="whitespace-nowrap">Exportar a excel</span>
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
              <span className="whitespace-nowrap">Imprimir</span>
            </button>
            <button
              onClick={() => setActive(!active)}
              className=" bg-[#019afa] dark:border-[#019afa] text-white flex items-center p-1 rounded-md border"
            >
              <img src={plus} alt="" />
              <div className="whitespace-nowrap">Crear proveedor</div>
            </button>
          </section>
        </div>
        <div className="panel2">
          <div className="buttons"></div>
        </div>
      </div>
      <div className="buttons"></div>
      <div className="panel_second_h w-[100%] mx-auto flex-col lg:flex-row flex justify-between items-center">
        <div className="panel_analitic block  my-2">
          <div className="content flex ">
            <div className="inactive flex items-center ">
              <div className=" bg-white dark:bg-[#37415197] p-2 rounded-lg mx-1">
                <span className="text-green-500 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="m22.509 12.689l-6-3.55a.997.997 0 0 0-1.018.001l-6 3.55a.998.998 0 0 0-.491.86v6.9c0 .354.187.681.491.86l6 3.55a.989.989 0 0 0 1.018 0l6-3.55a.998.998 0 0 0 .491-.86v-6.9a1 1 0 0 0-.491-.861zM21 19.88l-5 2.958l-5-2.958v-5.76l5-2.958l5 2.958v5.76z"
                    />
                    <path
                      fill="currentColor"
                      d="M6 20.184V11.07l6.2-3.664l-1.017-1.722l-6.692 3.955A1 1 0 0 0 4 10.5v9.684A2.996 2.996 0 0 0 2 23c0 1.654 1.346 3 3 3s3-1.346 3-3a2.996 2.996 0 0 0-2-2.816zM5 24a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2zm22-4c-1.654 0-3 1.346-3 3c0 .353.072.687.185 1.002L16 28.838l-6.404-3.784l-1.017 1.722l6.912 4.084a.997.997 0 0 0 1.018.001l8.96-5.295c.45.269.97.434 1.531.434c1.654 0 3-1.346 3-3s-1.346-3-3-3zm0 4a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2zM16 7c.731 0 1.392-.273 1.913-.708L26 11.071V18h2v-7.5a1 1 0 0 0-.491-.861l-8.567-5.062C18.978 4.39 19 4.198 19 4c0-1.654-1.346-3-3-3s-3 1.346-3 3s1.346 3 3 3zm0-4a1.001 1.001 0 1 1-1 1c0-.552.449-1 1-1z"
                    />
                  </svg>

                  <span>Facturados </span>
                </span>
              </div>
              <div className="bg-white dark:bg-[#37415197] p-2 rounded-lg">
                <span className="text-[red] flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="m22.509 12.689l-6-3.55a.997.997 0 0 0-1.018.001l-6 3.55a.998.998 0 0 0-.491.86v6.9c0 .354.187.681.491.86l6 3.55a.989.989 0 0 0 1.018 0l6-3.55a.998.998 0 0 0 .491-.86v-6.9a1 1 0 0 0-.491-.861zM21 19.88l-5 2.958l-5-2.958v-5.76l5-2.958l5 2.958v5.76z"
                    />
                    <path
                      fill="currentColor"
                      d="M6 20.184V11.07l6.2-3.664l-1.017-1.722l-6.692 3.955A1 1 0 0 0 4 10.5v9.684A2.996 2.996 0 0 0 2 23c0 1.654 1.346 3 3 3s3-1.346 3-3a2.996 2.996 0 0 0-2-2.816zM5 24a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2zm22-4c-1.654 0-3 1.346-3 3c0 .353.072.687.185 1.002L16 28.838l-6.404-3.784l-1.017 1.722l6.912 4.084a.997.997 0 0 0 1.018.001l8.96-5.295c.45.269.97.434 1.531.434c1.654 0 3-1.346 3-3s-1.346-3-3-3zm0 4a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2zM16 7c.731 0 1.392-.273 1.913-.708L26 11.071V18h2v-7.5a1 1 0 0 0-.491-.861l-8.567-5.062C18.978 4.39 19 4.198 19 4c0-1.654-1.346-3-3-3s-3 1.346-3 3s1.346 3 3 3zm0-4a1.001 1.001 0 1 1-1 1c0-.552.449-1 1-1z"
                    />
                  </svg>
                  <div className="span mx-1">Pendientes</div>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="search bg-white dark:bg-[#37415197] mb-2 flex items-center p-2 rounded-full">
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
              className="outline-none dark:bg-transparent dark:text-white"
            />
          </div>
        </div>
      </div>
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
          rowData={providersData.map((item) => {
            return {
              _id: item._id,
              name: item.name,
              email: item.email,
              phone: item.phone,
              address: item.address,
              company: item.company,
              fecha: moment(item.fecha).format("Do MMMM YYYY"),
            };
          })}
          defaultColDef={defaultColDef}
          animateRows={true}
          rowGroupPanelShow="always"
          pivotPanelShow="always"
          rowDragManaged={true}
          enableRangeSelection={true}
          sideBar={true}
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
