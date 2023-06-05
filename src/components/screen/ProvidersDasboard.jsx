import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getBusiness, getUsersAdmin } from "../../apis/ApiData";
import { ReactSortable } from "react-sortablejs";
import { Link, Outlet } from "react-router-dom";
import "animate.css";
import "../../assets/css/sorteable.css";
import moment from "moment-with-locales-es6";
moment.locale("es");
export const ProvidersDasboard = () => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [spiner, setSpiner] = useState(true);
  const [provider, setProvider] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      getUsersAdmin().then((res) => {
        setUsers(res.data.data);
      });
      getBusiness().then((res) => {
        setCategory(res.data.dataCategory);
        setProducts(res.data.dataProduct);
        setProvider(res.data.dataProvider);
        setSpiner(false);
      });
    })();
  }, []);

  const getproductFechaDescription = products.map((item) => {
    return {
      x: moment(item.fechaFin).format("YYYY-MM-DD"),
      y: parseInt(item.priceBuy),
    };
  });

  var options = {
    series: [
      {
        name: "Productos",
        data: getproductFechaDescription,
      },
    ],
    chart: {
      type: "area",
      height: 350,
      animations: {
        enabled: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    fill: {
      opacity: 0.8,
      type: "pattern",
      pattern: {
        style: ["verticalLines", "horizontalLines"],
        width: 5,
        height: 6,
      },
    },
    markers: {
      size: 5,
      hover: {
        size: 9,
      },
    },
    title: {
      text: "precio de venta de productos",
    },
    tooltip: {
      intersect: true,
      shared: false,
    },
    theme: {
      palette: "palette1",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      title: {
        text: "Analityc",
      },
    },
  };
  var radar = {
    series: [
      {
        name: "Productos",
        data: [
          category.length,
          products.length,
          provider.length,
          users.length,
          0,
          0,
        ],
      },
    ],
    chart: {
      height: 350,
      type: "radar",
    },
    title: {
      text: "Movimientos actuales",
    },
    xaxis: {
      categories: users.map((user) => user.fecha),
    },
  };

  return (
    <>
      {spiner === true ? (
        <div className="relative">
          <h1 className="w-4/5 mx-auto dark:text-white my-10   flex justify-center flex-col items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
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
            </svg>{" "}
            Espere un momento por favor...
          </h1>
        </div>
      ) : (
        <div className="h-screen">
          <div className="cards_p animate__animated  animate__fadeIn">
            <h2 className="text-2xl my-1 dark:text-white">
              Categorias recientes
            </h2>
            <div
              className="cards_content flex gap-2 lg:flex-row flex-col "
              id="lista"
            >
              {spiner === true ? (
                <></>
              ) : (
                <>
                  {provider.length > 0 ? (
                    <ReactSortable
                      list={provider}
                      setList={setProvider}
                      filter=".addImageButtonContainer"
                      dragClass="sortableDrag"
                      animation="200"
                      easing="ease-out"
                      swapThreshold="0.65"
                      swapClass="sortableSwap"
                      multiDrag={true}
                      style={{
                        display: "flex",

                        gap: "10px",
                        cursor: "move",
                      }}
                      className="flex flex-wrap overflow-x-auto "
                    >
                      {provider.map((item, index) => (
                        <div className="flex ">
                          <div
                            className=" inline-block h-fit rounded-md dark:bg-[#37415197] dark:text-[#019afa] bg-white "
                            key={index}
                          >
                            <Link to={`categoryProvider/${item._id}`}>
                              <div className="card_content   p-3">
                                <h2 className="card_title text-lg font-bold ">
                                  {item.name}
                                </h2>
                                <p className="card_text text-gray-500">
                                  {item.company}
                                </p>
                                <p className="card_text text-gray-500">
                                  +57 {item.phone}
                                </p>
                                <p className="card_text  text-gray-400 text-sm">
                                  {moment(item.createdAt).format(
                                    "Do MMMM YYYY, h:mm:ss a"
                                  )}
                                </p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </ReactSortable>
                  ) : (
                    <h1 className="text-2xl mt-10 text-slate-700  w-full">
                      No tienes proveedores registrados
                    </h1>
                  )}
                </>
              )}
              <Outlet />
            </div>
          </div>
          <div className="hidden">
            <div className="gap-2 rounded-md flex max-w-7xl  mt-4">
              <div className="bg-white">
                <Chart
                  options={options}
                  series={options.series}
                  height={350}
                  width={800}
                />
              </div>
              <div className="bg-white w-full">
                <Chart
                  options={radar}
                  series={radar.series}
                  type="radar"
                  height={350}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
