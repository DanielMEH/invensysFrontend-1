import React, { useEffect, useState } from "react";

import { getBusiness } from "../apis/ApiData";
import Chart from "react-apexcharts";
import moment from "moment-with-locales-es6";
moment.locale("es");
export const ChartHomeC2 = () => {
  const [ventas, setVentas] = useState([]);
  let fecha = moment().format("l");

  useEffect(() => {
    (async () => {
      const bussiness = await getBusiness();

      
      setVentas(bussiness.data.dataPedidoProvedor);
    })();
  }, []);

  const responseData = ventas.map((data) => data.totalComprap);

  // fechas: moment(fecha.createdAt).format('l'),
  var options = {
    series: [
      {
        name: "Inflation",
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
        return val + "%";
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
  };

  return (
    <>
      <div className="div shadow-xl rounded-md border w-[40rem]  ">
        <Chart options={options} series={options.series} height={350} />
      </div>
    </>
  );
};
