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
import { getBusiness } from "../apis/ApiData";
import { ContextCategory } from "../hooks/context/ContextCategory";
import CustomLoadingCellRenderer from "./CustomLoadingCellRenderer";
import { useContextCategory } from "../hooks/context/ContextCategory";

moment.locale("es");
export const DatatableInventory = () => {
  const [subViewProducts, setSubViewProducts] = useState([]);
  const [load, setLoad] = useState(false);
  const { dataGategorias, getDataCategorias } = useContextCategory();

  useEffect(() => {
    const initial = async () => {
      await getDataCategorias();
    };

    initial();
  }, []);

  useEffect(() => {
    (async () => {
      setLoad(true);

      const res = await getBusiness();
      setSubViewProducts(res.data.dataSubProduct);
      setLoad(false);
    })();
  }, []);

  console.log(".....", subViewProducts);

  // count categorias

  const defaultColDef = ChackSelection();
  const gridRef = useRef();

  const [stateModel, StateModel] = useState(false);

  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "Identificador",
      field: "_id",
      rowDrag: true,
      checkboxSelection: checkboxSelection,
      headerCheckboxSelection: headerCheckboxSelection,

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
      headerName: "Mejores ventas",
      field: "change",
      cellRenderer: "agSparklineCellRenderer",
      cellRendererParams: {
        sparklineOptions: {
          type: "bar",
          fill: "#019afa",
          stroke: "#91cc75",
          highlightStyle: {
            fill: "#5994f5",
          },
          valueAxisDomain: [0, 1],
          paddingOuter: 0,
          padding: {
            top: 0,
            bottom: 0,
          },
          axis: {
            strokeWidth: 0,
          },
        },
      },
    },
    {
      headerName: "Precio compra",
      field: "priceCompra",
      filter: "agTextColumnFilter",
      chartDataType: "id",
    },
    {
      headerName: "No.",
      field: "no",
      filter: "agTextColumnFilter",
      chartDataType: "id",
    },
    {
      headerName: "Precio venta",
      field: "priceVenta",
      chartDataType: "body",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "stock máximo",
      field: "stockMaximo",
      chartDataType: "body",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "stock Minimo",
      field: "stockMinimo",
      chartDataType: "body",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Unidades",
      field: "unidad",
      cellStyle: (params) =>
        params.value > 10 ? { color: "#1daf53" } : { color: "red" },
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
      headerName: "Caducidad",
      field: "caducidad",
      chartDataType: "body",
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Estado",
      field: "Estado",
      cellStyle: (params) =>
        params.value === "Activo" ? { color: "#1daf53" } : { color: "red" },
      chartDataType: "body",
      filter: "agTextColumnFilter",
    },

    {
      headerName: "Fecha de cración",
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

  const money = new Intl.NumberFormat("en-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 2,
  });

  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById("filter-text-box").value
    );
  }, []);

  const loadingCellRenderer = useMemo(() => {
    return "eSPERE UN MOMENTO";
  }, []);
  const loadingCellRendererParams = useMemo(() => {
    return {
      loadingMessage: "One moment please...",
    };
  }, []);

  const totalUnidades = subViewProducts.reduce((a, b) => a + b.unidad, 0);
 const [darkMode, setDarkMode] = useState(false);
 useEffect(() => {
   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
     setDarkMode(true);
   }
 }, []);
  return (
    <>
      {load ? (
        <>
          <div className="container h-screen animate__animated animate__fadeInDown rounded-md grid place-content-center mt-[-4rem] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 24 24"
            >
              <path
                fill="#777777"
                d="M19 8l-4 4h3c0 3.31-2.69 6-6 6c-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6c1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4l4-4H6z"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  dur="5s"
                  from="360 12 12"
                  repeatCount="indefinite"
                  to="0 12 12"
                  type="rotate"
                />
              </path>
            </svg>
          </div>
        </>
      ) : (
        <div className="help">
          <ContextCategory>
            <RegisterCategorys estado={stateModel} />
          </ContextCategory>
          <div className="panel_opciones  dark:bg-[#37415197] dark:text-white bg-white w-[100%] mx-auto mt-10 mb-1  rounded-md p-4">
            <div className="plus_panel flex lg:flex-row flex-col lg:justify-between lg:items-center">
              <section className="items-center flex">
                <div className="users flex items-center mx-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#3498DB"
                        d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm10 10h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4z"
                      />
                    </svg>
                  </span>
                  <span className="text-[#3498DB] mx-1">
                    Total de productos
                  </span>
                  <span className="text-[#3498DB] mx-1">
                    {subViewProducts.length}
                  </span>
                </div>
              </section>

              <section className="flex overflow-x-auto flex-col gap-2 md:flex-row   ">
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
                  <span className="whitespace-nowrap">
                    Descargar archivo scv
                  </span>
                </button>
                <button
                  onClick={onBtExportExel}
                  className="flex items-center dark:border-[#019afa] border mx-1 p-1 rounded-md whitespace-nowrap"
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
                  className="flex items-center dark:border-[#019afa] border mx-1 p-1 rounded-md whitespace-nowrap"
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
              </section>
            </div>
            <div className="panel2">
              <div className="buttons"></div>
            </div>
          </div>
          <div className="buttons"></div>
          <div className="panel_second_h w-[100%] mx-auto flex-col lg:flex-row flex justify-between items-center">
            <div className="panel_analitic my-1 flex">
              <div className="flex items-center border dark:border-[#019afa] mx-1 p-1 rounded-md">
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
                <span className="dark:text-white">
                  Total de unidades :{" "}
                  {("+ " + totalUnidades).replace(
                    /(\d)(?=(\d\d\d)+(?!\d))/g,
                    "$1."
                  )}{" "}
                </span>
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
                  className="outline-none  dark:bg-transparent dark:text-white "
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
              rowData={subViewProducts.map((item, i) => {
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
                  _id: item._id,
                  name: item.name,
                  no: "No. " + i + 1,
                  change: [total],
                  priceCompra: ("$ " + item.priceCompra).replace(
                    /(\d)(?=(\d\d\d)+(?!\d))/g,
                    "$1,"
                  ),
                  priceVenta: ("$ " + item.priceVenta).replace(
                    /(\d)(?=(\d\d\d)+(?!\d))/g,
                    "$1,"
                  ),
                  stockMaximo: (" " + item.stockMaximo).replace(
                    /(\d)(?=(\d\d\d)+(?!\d))/g,
                    "$1."
                  ),
                  stockMinimo: (" " + item.stockMinimo).replace(
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
                  total: ("$ " + total).replace(
                    /(\d)(?=(\d\d\d)+(?!\d))/g,
                    "$1,"
                  ),
                  caducidad: moment().add(diferencia, "days").calendar(),
                  dateCreate: moment(item.createdAt).format("LLLL"),
                  Estado: "Activo",
                };
              })}
              defaultColDef={defaultColDef}
              animateRows={true}
              loadingCellRenderer={loadingCellRenderer}
              loadingCellRendererParams={loadingCellRendererParams}
              rowDragManaged={true}
              enableRangeSelection={true}
              icons={true}
              pagination={true}
              paginationPageSize={15}
              paginateChildRows={true}
              suppressRowClickSelection={true}
              groupSelectsChildren={true}
              rowSelection={"multiple"}
              enableCharts={true}
              cacheQuickFilter={true}
            ></AgGridReact>
          </div>
        </div>
      )}
    </>
  );
};
