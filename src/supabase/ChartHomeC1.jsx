import React, { useEffect, useState } from "react";

import { getBusiness } from "../apis/ApiData";
import Chart from "react-apexcharts";
import moment from "moment-with-locales-es6";
moment.locale("es");
export const ChartHomeC1 = () => {
  const [compras, setCompras] = useState([]);
  let fecha = moment().format("l");

  useEffect(() => {
    (async () => {
      const bussiness = await getBusiness();

      setCompras(bussiness.data.dataCompras);
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

  // fechas: moment(fecha.createdAt).format('l'),
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
      text: "Reportes de compras",
      align: "left",
    },
    subtitle: {
      text: "Todos tus movimientos",
      align: "left",
    },
    labels: compras.map((date) => moment(date.createdAt).format("l")),
    datetimeFormatter: {
      year: "yyyy",
    },
    yaxis: {
      opposite: true,
    },
    legend: {
      horizontalAlign: "left",
    },
  };

  return (
    <>
      <div className="div shadow-xl rounded-md border w-[30rem]  ">
        <Chart options={options} series={options.series} height={350} />
      </div>
    </>
  );
};
