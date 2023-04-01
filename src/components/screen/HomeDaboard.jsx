import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getBusiness, getUsersAdmin } from "../../apis/ApiData";
export const HomeDaboard = () => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [provider, setProvider] = useState([]);
  const [infoProducts, setInfoProducts] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsersAdmin().then((res) => {
      setUsers(res.data.data);
    });
    getBusiness().then((res) => {
      setCategory(res.data.dataCategory);
      setProducts(res.data.dataProduct);
      setProvider(res.data.dataProvider);
    });
  }, []);
  var options = {
    series: [
      {
        name: "north",
        data: [
          {
            x: 1996,
            y: 0,
          },
        ],
      },
      {
        name: "south",
        data: [
          {
            x: 2000,
            y: 0,
          },
        ],
      },
    ],
    chart: {
      type: "area",
      height: 350,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },

    title: {
      text: "Movimiento de tu negocio",
      align: "left",
      style: {
        fontSize: "14px",
      },
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: 4,
      floating: false,

      labels: {
        style: {
          colors: "#8e8da4",
        },
        offsetY: -7,
        offsetX: 0,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    fill: {
      opacity: 0.5,
    },
    tooltip: {
      x: {
        format: "yyyy",
      },
      fixed: {
        enabled: false,
        position: "topRight",
      },
    },
    grid: {
      yaxis: {
        lines: {
          offsetX: -30,
        },
      },
      padding: {
        left: 20,
      },
    },
  };

  var radar = {
    series: [
      {
        name: "Informe",
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
      <div className="gap-2 rounded-md flex max-w-7xl mx-auto mt-4">
        <div className="bg-white">
          <Chart
            options={options}
            series={options.series}
            type="area"
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
    </>
  );
};
