import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getBusiness, getUsersAdmin } from "../../apis/ApiData";
import moment from "moment-with-locales-es6";
moment.locale("es");
export const HomeDaboard = () => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);

  const [provider, setProvider] = useState([]);

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
      <div className="hidden">
        <div className=" hidden lg:block gap-2 rounded-md sm:grid grid-cols-2 md:flex flex-col lg:flex-row max-w-7xl  mx-auto  mt-4">
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
    </>
  );
};
