import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { getBusiness } from "../apis/ApiData";
import Chart from "react-apexcharts";
import moment from "moment-with-locales-es6";
moment.locale("es");

export const ChartBodegaC2 = () => {
  const [ventas, setVentas] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    (async () => {
      setLoad(true);
      const bussiness = await getBusiness();

      setVentas(bussiness.data.dataInventary);
      setLoad(false);
    })();
  }, []);
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  const responseData = ventas.map((data) => parseInt(data._id));

  // fechas: moment(fecha.createdAt).format('l'),
  var options = {
    series: [
      {
        name: "Pedidos",
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
        return val + ": P.B";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },

    xaxis: {
      categories: ventas.map((dateFecha) =>
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
          return val + "%";
        },
      },
    },

    title: {
      text: "Reportes de pedidos",
      floating: true,
      offsetY: 330,
      align: "center",
      style: {
        color: "#444",
      },
    },
    izontalAlign: "left",
  };

  return (
    <>
      <>
        {load ? (
          <div className="skeletton flex gap-4 m-5">
            <Skeleton
              height={250}
              width={370}
              baseColor={darkMode ? "#374151" : ""}
              highlightColor={darkMode ? "#293a4f" : ""}
              className="rounded-full bg-red-600 flex overflow-hidden"
            />
          </div>
        ) : (
          <div className="div shadow-xl rounded-md border w-[50rem] bg-white ">
            <Chart options={options} series={options.series} height={350} />
          </div>
        )}
      </>
    </>
  );
};
