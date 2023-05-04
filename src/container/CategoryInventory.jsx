import React, { useState, useEffect } from "react";
import { getCategorias } from "../apis/ApiData";
import { ImportProducts } from "./ImportProducts";
import "animate.css";
import { Link } from "react-router-dom";
export const CategoryInventory = ({ element, id, estadoModel }) => {
  const [category, setCategory] = useState([]);
  const [arrayId, setArrayId] = useState([]);
  const [arrayName, setArrayName] = useState([]);
  const [estado, setEstado] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    (async () => {
      const { data } = await getCategorias();
      setCategory(data.data);
      setLoading(false);
    })();
  }, []);

  const handleCategory = (id, nameCategory) => {
    if (arrayId.includes(id) && arrayName.includes(nameCategory)) {
      const newArray = arrayId.filter((item) => item !== id);
      const newArrayName = arrayName.filter((item) => item !== nameCategory);
      setArrayName(newArrayName);
      setArrayId(newArray);
    } else {
      setArrayName([...arrayName, nameCategory]);
      setArrayId([...arrayId, id]);
    }
  };

  return (
    <>
      <div className={estado ? "hidden" : "block "}>
        <div
          className={
            arrayId.includes(arrayId)
              ? "categoria bg-blue-100 w-fit mx-auto animate__animated animate__fadeIn scroll-smooth  border rounded-md my-4"
              : "categoria bg-white w-fit mx-auto animate__animated animate__fadeIn  scroll-smooth border rounded-md my-4"
          }
        >
          <h2 className="font-bold m-4 text-xl">Categorias</h2>
          {category.length > 0 ? (
            <p className="mx-4">
              Seleciona las categorias para la importacion de los productos
            </p>
          ) : (
            <p className="mx-4 my-4">
              No se encontraron categorias, crea tu primer categoria
              <Link
                className="
                    
                    text-blue-500
                    font-bold
                    hover:text-blue-600
                    text-sm
                    ml-2

                    "
                to={`/categorias`}
              >
                Crear categoria
              </Link>
            </p>
          )}
          {loading ? (
            <div className="m-4 block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
                >
                  <animateTransform
                    attributeName="transform"
                    dur="0.75s"
                    repeatCount="indefinite"
                    type="rotate"
                    Flog
                    values="0 12 12;360 12 12"
                  />
                </path>
              </svg>
            </div>
          ) : (
            <>
                <div className="flex flex-wrap mx-4"
                
                >
                {arrayName.map((item) => (
                  <div className="bg-blue-100 rounded-md flex items-center mx-1 px-2 py-1 "
                  
                  
                    key={item._id}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#0ea5e9"
                        d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41L9 16.17z"
                      />
                    </svg>
                    <p className="">{item}</p>
                  </div>
                ))}
              </div>
              <ul className="list-none">
                {category.map((item) => (
                  <li
                    key={item._id}
                    className="py-2 flex p-4 bg-gray-100 cursor-pointer m-2 rounded-md"
                    onClick={() => {
                      return handleCategory(item._id, item.name_category);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#0ea5e9"
                        d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4l4.25 4.25ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                      />
                    </svg>
                    <p className="truncate ml-4 mr-14 ">{item.name_category}</p>
                  </li>
                ))}
              </ul>

              <div className="continue text-end flex justify-end">
                {arrayId.length > 0 ? (
                  <>
                    <button
                      className="bg-gray-200 text-end flex justify-end m-2  text-gray-800 font-bold py-2 px-3 rounded"
                      onClick={() => {
                        setEstado(!estado);
                      }}
                    >
                      Continuar
                    </button>
                  </>
                ) : null}
              </div>
            </>
          )}
        </div>
      </div>
      {estado ? (
        <div className="mb-4">
          <ImportProducts idCategorias={arrayId} />
        </div>
      ) : null}
    </>
  );
};
