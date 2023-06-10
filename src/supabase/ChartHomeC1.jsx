import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { getBusiness } from "../apis/ApiData";
import Chart from "react-apexcharts";
import moment from "moment-with-locales-es6";
moment.locale("es");
export const ChartHomeC1 = () => {
  const [compras, setCompras] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    (async () => {
      setLoad(true);
      const bussiness = await getBusiness();

      setCompras(bussiness.data.dataCompras);
      setLoad(false);
    })();
  }, []);

  let arrayFecha = [];
  let arrayPrecios = [];

  if (compras.length > 0) {
    const responsePrice = compras.map((price) => price.total);
    const responseDate = compras.map((date) =>
      moment(date.createdAt).format("l")
    );

    arrayFecha.push(responseDate);
    arrayPrecios.push(responsePrice);
  } else {
    arrayFecha = ["No hay datos"];
  }

  var options = {
    series: [
      {
        name: "Ventas",
        data: compras.map((price) => price.total),
      },
    ],
    chart: {
      type: "area",
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      style: {
        colors: ["red", "red", "red"],
      },
    },
    markers: {
      colors: ["red", "red", "red"],
    },
    stroke: {
      curve: "straight",
    },

    title: {
      text: "Reportes de ventas",
      align: "left",
      fill: {
        colors: ["#fff", "#fff", "#fff"],
      },
    },
    subtitle: {
      text: "Todos tus movimientos",
      align: "left",
    },
    labels: compras.map((date) =>
      moment(date.createdAt).subtract(10, "days").calendar()
    ),
    colors: ["#F44336", "#E91E63", "#9C27B0"],
    fill: {
      colors: ["red", "red", "red"],
    },

    datetimeFormatter: {
      // mes
      // sin repetir fechas

      day: "dd MMM",
    },
    yaxis: {
      opposite: true,
    },
    legend: {
      horizontalAlign: "left",
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
      {load ? (
        <div className="skeletton flex w-[280px] gap-4 m-1 md:m-5">
          <Skeleton
            height={250}
            width={280}
            baseColor={darkMode ? "#374151" : ""}
            highlightColor={darkMode ? "#293a4f" : ""}
            className="rounded-full bg-red-600 flex overflow-hidden"
          />
        </div>
      ) : (
          <div className="div shadow-xl rounded-md border w-[290px] md:w-[39rem]
          dark:text-white bg-white ">
          <Chart
            options={options}
            series={options.series}
            height={350}
            className="text-black"
            colors={["blue"]}
          />
        </div>
      )}
    </>
  );
};
