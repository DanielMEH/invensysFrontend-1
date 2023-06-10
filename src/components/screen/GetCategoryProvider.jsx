import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { getBusiness } from "../../apis/ApiData";
import moment from "moment-with-locales-es6";
import "animate.css";
moment.locale("es");
export const GetCategoryProvider = () => {
  const [category, setCategory] = useState([]);
  const [provider, setProvider] = useState([]);
  const [spiner, setSpiner] = useState(true);
  let id = useParams();
  useEffect(() => {
    (async () => {
      getBusiness().then((res) => {
        setCategory(res.data.dataCategory);

        setProvider(res.data.dataProvider);
        setSpiner(false);
      });
    })();
  }, [id]);

  const getProviderId = useMemo(
    () => provider.filter((item) => item._id === id.id),
    [provider, id]
  );
  return (
    <>
      {spiner ? (
        <div
          className="container animate__animated animate__slideInRight 
        rounded-md grid place-content-center border bg-white w-[40rem]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
          >
            <path
              fill="#777777"
              d="M19 8l-4 4h3c0 3.31-2.69 6-6 6c-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6c1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4l4-4H6z"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                dur="5s"
                from="360 12 12"
                repeatCount="indefinite"
                to="0 12 12"
                type="rotate"
              />
            </path>
          </svg>
        </div>
      ) : (
        <div className="container rounded-md border dark:bg-[#37415197] dark:text-white bg-white lg:w-[38rem] w-[20rem] animate__animated animate__fadeIn">
          {getProviderId.map((item) => {
            return (
              <div key={item._id}>
                <div className="icon flex justify-between  items-center my-3 mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="none"
                      d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0ZM20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5Z"
                    />
                    <path
                      fill="#777777"
                      d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8ZM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0Z"
                    />
                  </svg>
                  <h1>{item.name}</h1>
                </div>
                <div className="text-start  text-[#019afa] font-bold mx-2">
                  Datos personales
                </div>
                <p className="m-2 ">
                  <span>Dirección: </span>
                  {item.address}
                </p>
                <p className="m-2 ">
                  <span>Telefono: </span>
                  {item.phone}
                </p>
                <p className="m-2 ">
                  <span>Email: </span>
                  {item.email}
                </p>
                <p className="m-2 ">
                  <span>Compañia: </span>
                  {item.company}
                </p>
                <p className="m-2 ">
                  <span>Creación : </span>
                  {moment(item.createdAt).format("LL")}
                </p>
                <p>
                  {item.updatedAt ? (
                    <p className="m-1">
                      <span>Actualización : </span>
                      {moment(item.updatedAt).format("LL")}
                    </p>
                  ) : (
                    <p className="m-1">
                      <span>Actualización : </span>No hay actualización
                    </p>
                  )}
                </p>
                <p>
                  <h1 className="font-bold mx-2">Categorias: </h1>
                  {category
                    .filter(
                      (itemCategory) => itemCategory._id === item.idCategory
                    )
                    .map((itemCategory) => {
                      return (
                        <p
                          key={itemCategory._id}
                          className="m-2 bg-gray-100 dark:text-black p-1 rounded-sm inline-block"
                        >
                          {itemCategory.name_category}
                        </p>
                      );
                    })}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
