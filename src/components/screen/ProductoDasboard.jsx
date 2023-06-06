import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getBusiness, getUsersAdmin } from "../../apis/ApiData";
import moment from "moment-with-locales-es6";
moment.locale("es");
export const ProductoDasboard = () => {
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
        setProducts(res.data.dataSubProduct);
        setProvider(res.data.dataProvider);
        setSpiner(false);
      });
    })();
  }, []);

  // suma de  los precios de compra
  const sumPriceBuy = products.reduce((acc, item) => {
    return acc + item.priceCompra;
  }, 0);
  const sumPrice = products.reduce((acc, item) => {
    return acc + item.priceVenta;
  }, 0);

  let idCategory = [];
  if (category.length > 0) {
    idCategory = products.filter((item) => item.category === category[0]._id);
  } else {
    idCategory = [];
  }
  // mostrar productos por su diferente id de categoria

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

  return (
    <>
      {spiner === true ? (
        <div className="relative">
          <h1 className="w-4/5 mx-auto  dark:text-white my-10   flex justify-center flex-col items-center ">
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
        <div className="animate__animated animate__fadeIn">
          <div className="cards_p">
            <h2 className="text-2xl my-1 dark:text-white text-start 2xl:text-center">
              Informes generales
            </h2>
            {products.length > 0 ? (
              <div
                className="cards_con flex justify-start flex-wrap md:flex-nowrap
                 2xl:justify-center  gap-2"
                id="lista"
              >
                <section className="bg-white items-center dark:bg-[#37415197] dark:text-white rounded-md block md:inline-block w-full">
                  <h3 className="m-1 text-gay-600 block text-center">
                    Total de subproductos
                  </h3>
                  <div className="flex items-center justify-center">
                    <div className="coon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill="#c1c7ce"
                          d="M2.978 14.537c-.258.27-.55.513-.857.712a.5.5 0 1 1-.542-.84c.733-.474 1.284-1.228 1.41-1.789a.5.5 0 0 1 .989.11v5.77a.5.5 0 0 1-1 0v-3.963Zm4.608-1.306c-.63 0-1.094.542-1.094 1.073a.5.5 0 0 1-1 0c0-1.042.87-2.073 2.094-2.073c.721 0 1.42.326 1.812.909c.41.61.428 1.413-.057 2.21c-.246.405-.583.712-.916.966c-.167.128-.34.247-.504.359l-.07.048c-.14.096-.274.187-.402.28c-.431.314-.739.606-.876.997H9.16a.5.5 0 0 1 0 1H5.992a.5.5 0 0 1-.5-.5c0-1.167.703-1.822 1.368-2.305c.142-.104.29-.204.429-.3l.068-.046c.163-.111.317-.218.46-.328c.29-.22.517-.439.67-.69c.311-.513.244-.89.081-1.133c-.18-.269-.545-.467-.982-.467Zm4.475.26a.92.92 0 0 0-.282.43a.5.5 0 1 1-.959-.283a1.92 1.92 0 0 1 .592-.907c.349-.297.84-.5 1.494-.5c1.325 0 2.107.936 2.107 1.811c0 .345-.07.873-.438 1.32c-.065.08-.137.154-.217.223c.125.092.243.205.344.342c.2.27.31.606.31 1c0 .713-.249 1.26-.685 1.616c-.42.342-.947.457-1.42.457c-.45 0-.889-.072-1.266-.303c-.388-.238-.652-.606-.815-1.085a.5.5 0 0 1 .947-.322c.105.308.243.464.39.554c.159.097.39.156.743.156c.33 0 .605-.082.789-.232c.166-.135.318-.375.318-.841a.653.653 0 0 0-.116-.407a.78.78 0 0 0-.315-.236c-.3-.136-.682-.169-.944-.169a.5.5 0 0 1 0-1c.712 0 1.02-.212 1.165-.388c.16-.194.21-.453.21-.685c0-.28-.29-.811-1.107-.811c-.435 0-.691.13-.845.26ZM2 9.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.25Zm0-5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.25Zm14 10a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"
                        />
                      </svg>
                    </div>
                    <div className="count text-3xl mx-2 font-bold dark:text-white text-gray-500">
                      {products.length}
                    </div>
                  </div>
                </section>
                <section className="bg-white dark:bg-[#37415197] dark:text-white rounded-md block md:inline-block w-full">
                  <h3 className="m-1 text-gay-600 block text-center">
                    Total de precio Compra
                  </h3>
                  <div className="flex items-center justify-center">
                    <div className="coon"></div>
                    <div className="count text-2xl mx-2 font-bold dark:text-white text-gray-500">
                      {money.format(sumPriceBuy)}
                    </div>
                  </div>
                </section>
                <section className="bg-white dark:bg-[#37415197] dark:text-white rounded-md block md:inline-block w-full">
                  <h3 className="m-1 text-gay-600 block text-center">
                    Total de precio venta
                  </h3>
                  <div className="flex items-center justify-center">
                    <div className="coon"></div>
                    <div className="count text-2xl mx-2 font-bold dark:text-white text-gray-500">
                      {money.format(sumPrice)}
                    </div>
                  </div>
                </section>

                <section className="bg-white dark:bg-[#37415197] dark:text-white rounded-md block md:inline-block w-full">
                  <h3 className="m-1 text-gay-600 block text-center">
                    Ganancias
                  </h3>
                  <div className="flex items-center justify-center">
                    <div className="coon"></div>
                    <div className="count text-2xl mx-2 font-bold dark:text-white text-gray-500">
                      {money.format(sumPriceBuy - sumPrice)}
                    </div>
                  </div>
                </section>
              </div>
            ) : (
              <h1 className="text-2xl mt-10 text-slate-700  w-full">
                No tienes productos registrados
              </h1>
            )}
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
