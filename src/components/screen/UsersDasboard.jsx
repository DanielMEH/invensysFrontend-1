import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getBusiness, getUsersAdmin } from "../../apis/ApiData";
import { ReactSortable, MultiDrag, Swap } from "react-sortablejs";
import { Link, Outlet } from "react-router-dom";
import vector from "../../assets/img/vector.svg";
import "animate.css";
import "../../assets/css/sorteable.css";
import moment from "moment-with-locales-es6";
moment.locale("es");
export const UsersDasboard = () => {
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
  const money = new Intl.NumberFormat("en-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 2,
  });

  const lista = document.getElementById("lista");

  return (
    <>
      {spiner === true ? (
        <div className="relative">
          <h1 className="w-4/5 mx-auto  my-10   flex justify-center flex-col items-center ">
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
            <h2 className="text-2xl my-1 flex items-center">
              Usuarios ·{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#777777"
                  d="M19 17v2H7v-2s0-4 6-4s6 4 6 4m-3-9a3 3 0 1 0-3 3a3 3 0 0 0 3-3m3.2 5.06A5.6 5.6 0 0 1 21 17v2h3v-2s0-3.45-4.8-3.94M18 5a2.91 2.91 0 0 0-.89.14a5 5 0 0 1 0 5.72A2.91 2.91 0 0 0 18 11a3 3 0 0 0 0-6M7.34 8.92l1.16 1.41l-4.75 4.75l-2.75-3l1.16-1.16l1.59 1.58l3.59-3.58"
                />
              </svg>{" "}
            </h2>
            <div className="cards_content flex gap-2  " id="lista">
              {spiner === true ? (
                <></>
              ) : (
                <div className="content-webkit">
                  <h3 className="m-4 text-gray-500 ">Informacion general</h3>
                  {users.length > 0 ? (
                    <ReactSortable
                      list={users}
                      setList={setUsers}
                      filter=".addImageButtonContainer"
                      dragClass="sortableDrag"
                      animation="200"
                      easing="ease-out"
                      swapThreshold="0.65"
                      swapClass="sortableSwap"
                      multiDrag={true}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, minmax(200px, 1fr))",
                        flexWrap: "wrap",
                        gap: "10px",
                        cursor: "move",
                        width: "100%",
                      }}
                    >
                      {users.map((item, index) => (
                        <div className="flex web-b">
                          <div
                            className=" inline-block rounded-md truncate bg-white "
                            key={index}
                          >
                            <Link to={`usersInfo/${item.idAccount}`}>
                              <div className="card_content   p-3">
                                <div className="flex w-full truncate items-center justify-between">
                                  <h2 className="card_title text-lg text-gray-600 ">
                                    {item.correo}{" "}
                                    <span className="mx-1"> · </span>
                                  </h2>
                                  <p
                                    className={
                                      item.estado === "Activo"
                                        ? "text-green-500 truncate"
                                        : "text-red-500 truncate"
                                    }
                                  >
                                    {item.estado}
                                  </p>
                                </div>
                                {/* <p className="card_text flex  text-gray-500">
                                {item.fecha} <span className="mx-1"> · </span>
                                {item.hora}
                              </p> */}
                              </div>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </ReactSortable>
                  ) : (
                    <h1 className="text-xl p-1  my-2 text-slate-700  w-full">
                      No tienes usuarios registrados
                    </h1>
                  )}
                </div>
              )}

              <div className="div self-stretch flex justify-center  w-3/5">
                {<Outlet /> ? (
                  <Outlet />
                ) : (
                  <img src={vector} alt="" className="text-center w-[25rem]" />
                )}
              </div>
            </div>
          </div>
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
      )}
    </>
  );
};
