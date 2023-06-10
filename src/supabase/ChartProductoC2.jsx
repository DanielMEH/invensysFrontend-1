import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { getBusiness } from "../apis/ApiData";
import Chart from "react-apexcharts";
import moment from "moment-with-locales-es6";
moment.locale("es");

export const ChartProductoC2 = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    (async () => {
      setLoad(true);
      const bussiness = await getBusiness();
      setProducts(bussiness.data.dataSubProduct);
      setLoad(false);
    })();
  }, []);

  const responseData = products.map((data) =>
    parseInt(data.priceCompra * data.unidad)
  );

  // fechas: moment(fecha.createdAt).format('l'),
  var options = {
    series: [
      {
        name: "Total",
        data: responseData,
      },
    ],
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + ": V.T";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },

    xaxis: {
      categories: products.map((dateFecha) =>
        moment(dateFecha.createdAt).format("l")
      ),
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },

    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "V.T";
        },
      },
    },
    title: {
      text: "Prouctos con mayor precio por unidad y con mayor crecimiento",
      floating: true,
      offsetY: 330,
      align: "center",
      style: {
        color: "#444",
      },
    },
  };
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  return (
    <>
      <>
        {load ? (
          <div className="skeletton flex gap-4 m-5">
            <Skeleton
              height={250}
              baseColor={darkMode ? "#374151" : ""}
              highlightColor={darkMode ? "#293a4f" : ""}
              width={370}
              className="rounded-full bg-red-600 flex overflow-hidden"
            />
          </div>
        ) : (
          <div className="div shadow-xl rounded-md border w-[55rem] bg-white ">
            <Chart options={options} series={options.series} height={350} />
          </div>
        )}
      </>
    </>
  );
};
