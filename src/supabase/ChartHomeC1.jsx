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
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },

    title: {
      text: "Reportes de ventas",
      align: "left",
      fill:"red"
    },
    subtitle: {
      text: "Todos tus movimientos",
      align: "left",
    },
    labels: compras.map((date) =>
      moment(date.createdAt).subtract(10, "days").calendar()
    ),
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
    fill: {
      colors: ['#fff', '#fff', '#fff']
    }
  };

  return (
    <>
      {load ? (
        <div className="skeletton flex gap-4 m-5">
          <Skeleton
            height={250}
            width={370}
            className="rounded-full bg-red-600 flex overflow-hidden"
          />
        </div>
      ) : (
        <div className="div shadow-xl rounded-md border w-[39rem] dark:bg-[#37415197] dark:text-white bg-white ">
          <Chart options={options} series={options.series} height={350} 

          className="text-red-500"
          
          />
        </div>
      )}
    </>
  );
};
