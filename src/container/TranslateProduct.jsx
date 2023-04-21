import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSubProducts } from "../apis/ApiData";
export const TranslateProduct = () => {
  const [products, setProducts] = React.useState([]);
  const [loadSub, setLoadSub] = useState(false);
  const [acomular, setAcomular] = useState([]);

  const [count, setCount] = useState(0);
  const [dataProducts, setDataProducts] = useState([
    {
      name: "",
      unidad: 0,
      _id: "",
    },
  ]);

  if (count < 0) {
    setCount(0);
  }

  const handleClickMore = (item) => {
    setCount(count - 1);
    alert(item._id);
  };
  const handleClickMoreCount = (item) => {
    setCount(count + 1);
    setAcomular([...acomular, item]);
  };
  const handleSubmit = (e) => {
    dataProducts[0].unidad = e.target.value;
  };
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const data = await getSubProducts(id);
      console.log(data.data.response);
      setProducts(data.data.response);
    })();
  }, [id]);
  return (
    <>
      <div className="absolute inset-0 rounded border shadow-2xl w-full mt-4 max-w-5xl bg-white  h-full z-50 mx-auto">
        <h2 className="m-6 text-2xl font-bold">Trasladar Productos</h2>

        <div className="container mx-auto w-fit border rounded-md p-2">
          <button className="text-center inline-block bg-blue-400 my-2 text-white p-1">
            Guardar Cambios
          </button>
          {products.map((item, index) => (
            <>
              <div>
                <ul>
                  <li key={index}>
                    <div className="flex justify-between items-center">
                      <div className="flex">
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-500">Nombre</span>
                          <span className="text-sm text-gray-500">
                            {item.name}
                          </span>
                        </div>
                        <div className="flex flex-col ml-4">
                          <span className="text-sm text-gray-500">
                            Cantidad
                          </span>
                          <span className="text-sm text-gray-500">
                            {item.unidad}
                          </span>
                        </div>
                        <div className="cajondeProducts flex border p-1 rounded-md border-blue-300 m-2">
                          <div className="buttom">
                            <button
                              className="w-10 h-10 text-gray-400 text-3xl  rounded-md"
                              onClick={() => handleClickMore(item)}
                            >
                              -
                            </button>
                          </div>
                          <input
                            type="text"
                            className="w-20 h-10  text-center  rounded-md outline-none"
                            placeholder="0"
                            value={count}
                            onChange={(e) => handleSubmit(e)}
                          />
                          <div className="buttom">
                            <button
                              className="w-10 h-10 text-blue-500 rounded-md text-3xl"
                              onClick={() => handleClickMoreCount(item)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
