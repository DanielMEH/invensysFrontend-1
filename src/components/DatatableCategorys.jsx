import React, {
    useRef,
    useState,
    useCallback,
    useEffect,
  } from "react";
  import moment from 'moment-with-locales-es6';
  import "ag-grid-community/styles/ag-grid.css";
  import "ag-grid-community/styles/ag-theme-alpine.css";
  import 'react-loading-skeleton/dist/skeleton.css'
  import { AgGridReact } from "ag-grid-react";
  import "ag-grid-enterprise";
  import plus from "../assets/icons/plus.svg";
  import { AG_GRID_LOCALE_EN } from "../locale/locale";
  import OpcionesCategory from "./OpcionesCategory";
  import {RegisterCategorys} from "./RegisterCategorys";
  import { checkboxSelection } from "./ChackSelection";
  import { headerCheckboxSelection } from "./ChackSelection";
  import { setPrinterFriendly} from "./ChackSelection";
  import {ChackSelection} from "./ChackSelection";
  import { setNormal} from "./ChackSelection";
  
  import { ContextCategory} from '../hooks/context/ContextCategory'

  import {useContextCategory} from "../hooks/context/ContextCategory"
  
  moment.locale("es");
  
  export const DatatableCategorys = () => {
    const {dataGategorias,
      getDataCategorias} = useContextCategory()
  
    useEffect(() => {
      const initial = async () => {
       
       await  getDataCategorias();
        
      }
  
      initial()
  
    },[])

    // count categorias 

    const defaultColDef  = ChackSelection()
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
        chartDataType: 'correo'
      },
      {
        headerName: "Nombre",
        field: "name_category",
        chartDataType: 'email',
        filter: "agTextColumnFilter",
        
        cellEditorParams:(params)=>{
          return {
            
          }
        }
        
        
      },
      {
        headerName: "Descripción",
        field: "description",
        filter: "agTextColumnFilter",
        chartDataType: 'id'
      },
      {
        headerName: "Fecha",
        field: "updatedAt",
        chartDataType: 'body',
        filter: "agTextColumnFilter",
      },
    
      {
        headerName: "Opciones",
        field: "Settings",
        cellRenderer: OpcionesCategory,
        
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
        
   
    
    
  
    const onFilterTextBoxChanged = useCallback(() => {
      gridRef.current.api.setQuickFilter(
        document.getElementById('filter-text-box').value
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
        <ContextCategory>
          <RegisterCategorys estado={stateModel} />
        </ContextCategory>
        <div className="panel_opciones bg-white dark:bg-[#37415197] dark:text-white w-[100%] mx-auto mt-10 mb-1  rounded-md p-4">
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
                <span className="text-[#3498DB] mx-1"> Categorias</span>
                <span className="text-[#3498DB] mx-1">
                  {dataGategorias.length}
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
              <button
                onClick={handleShowModel}
                className=" bg-[#019afa] dark:border-[#019afa] text-white flex items-center p-1 rounded-md border whitespace-nowrap"
              >
                <img src={plus} alt="" />
                Crear Categoria
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
            <div className="content flex ">
              <div className="inactive flex items-center ">
                <div className=" bg-white dark:bg-[#37415197] p-2 rounded-lg mx-1">
                  <span className="text-green-500 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 48 48"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="4"
                      >
                        <path d="M44 14L24 4L4 14v20l20 10l20-10V14Z" />
                        <path
                          stroke-linecap="round"
                          d="m4 14l20 10m0 20V24m20-10L24 24M34 9L14 19"
                        />
                      </g>
                    </svg>

                    <span> Activos </span>
                  </span>
                </div>
                <div className="bg-white dark:bg-[#37415197] p-2 rounded-lg">
                  <span className="text-[red] flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 48 48"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="4"
                      >
                        <path d="M44 14L24 4L4 14v20l20 10l20-10V14Z" />
                        <path
                          stroke-linecap="round"
                          d="m4 14l20 10m0 20V24m20-10L24 24M34 9L14 19"
                        />
                      </g>
                    </svg>
                    <div className="span mx-1">Inactivos </div>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="search dark:bg-[#37415197] bg-white mb-2 flex items-center p-2 rounded-full">
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
                className="outline-none bg-transparent dark:text-white"
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
            rowData={dataGategorias}
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
  