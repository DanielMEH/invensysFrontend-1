import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getUsersAdmin, getServices } from "../../apis/ApiData";
import sinDada from "../../assets/img/sinDada.jpg";
import moment from "moment-with-locales-es6";
import "animate.css";
import "../../assets/css/perfilUser.css";
moment.locale("es");
export const UserInfo = () => {
  const [services, setServices] = useState([]);
  const [users, setUsers] = useState([]);

  const [spiner, setSpiner] = useState(true);
  let id = useParams();
  const getUserId = users.filter((item) => item.idAccount === id.id);
  useEffect(() => {
    (async () => {
      getUsersAdmin().then((res) => {
        setUsers(res.data.data);
      });
      await getServices(id.id).then((res) => {
        setServices(res.data.data);
      });
      setSpiner(false);
    })();
  }, [id.id]);

  return (
    <>
      {spiner ? (
        <div
          className="container animate__animated animate__slideInRight
         rounded-md grid place-content-center border bg-white w-full lg:w-[40rem]"
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
        <div
          className="container rounded-md w-full flex  
        flex-col  lg:w-[40rem] animate__animated animate__fadeIn"
        >
          {getUserId.map((item) => {
            return (
              <div
                key={item.idAccount}
                className="flex  flex-col gap-1 w-[279px] md:w-full sm:flex-row"
              >
                <div className="w-full  ">
                  <div class="card border dark:text-white dark:border-none dark:bg-[#37415197]">
                    <div class="head">
                      <div class="circle"></div>
                      <div class="img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          viewBox="0 0 32 32"
                        >
                          <path
                            fill="#fff"
                            d="M8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0ZM20.5 12.5A4.5 4.5 0 1 1 16 8a4.5 4.5 0 0 1 4.5 4.5Z"
                          />
                          <path
                            fill="#c1c4c8"
                            d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24ZM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8ZM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0Z"
                          />
                        </svg>
                      </div>
                    </div>

                    <div class="description dark:text-white">
                      <h3 className="dark:text-white">{item.correo}</h3>
                      <h4 className="dark:text-white">Usuario</h4>
                      <p>
                        Fecha de creación: de la cuenta: {item.fecha} ·{" "}
                        {item.hora}
                      </p>
                    </div>

                    <div class="contact">
                      <Link to="/usuarios">crear usuario</Link>
                    </div>
                  </div>
                </div>
                <div class="card2 w-full border dark:text-white dark:border-none dark:bg-[#37415197]">
                  <div class="head ">
                    <h1 className="m-2">
                      <span className="text-xl font-sans font-bold">
                        <span>Actividad de:</span>
                      </span>{" "}
                      {item.correo}
                    </h1>
                    <div className="contenedor">
                      <div className="info_service">
                        {services.length > 0 ? (
                          <>
                            {services.map((item2) => {
                              return (
                                <>
                                  <div className="info1 flex items-center mx-2">
                                    <div className="icon items-center flex"></div>
                                    <span>Ciudad: {item2.ciudad}</span>
                                  </div>
                                  <div className="info1 flex items-center mx-2">
                                    <div className="icon flex"></div>
                                    <span>Conectado: {item2.fechaUltHour}</span>
                                  </div>
                                  <div className="info1 flex items-center mx-2">
                                    <div className="icon flex"></div>
                                    <span>Pais: {item2.Pais}</span>
                                  </div>
                                  <div className="info1 flex items-center mx-2">
                                    <div className="icon flex"></div>
                                    <span>Navegador: {item2.navegador}</span>
                                  </div>
                                  <div className="info1 flex items-center mx-2">
                                    <div className="icon flex"></div>
                                    <span>Region: {item2.region}</span>
                                  </div>
                                  <div className="info1 flex items-center mx-2">
                                    <div className="icon flex"></div>
                                    <span>Idioma: {item2.idioma}</span>
                                  </div>
                                  <div className="info1 flex items-center mx-2">
                                    <div className="icon flex"></div>
                                    <span>Ip: {item2.ip}</span>
                                  </div>
                                  <div className="info1 flex items-center mx-2">
                                    <div className="icon flex"></div>
                                    <span>
                                      Dispositivo: {item2.dispositivo}
                                    </span>
                                  </div>
                                  <div className="info1 flex items-center mx-2">
                                    <div className="icon flex"></div>
                                    <span className="flex truncate">
                                      Token:{" "}
                                      <span className="truncate ml-[2px]">
                                        {" "}
                                        {item2.tokens}
                                      </span>
                                    </span>
                                  </div>
                                </>
                              );
                            })}
                          </>
                        ) : (
                          <>
                            <img src={sinDada} alt="" />
                            <h2 className="grig place-content-center text-center">
                              No hay datos para mostrar
                            </h2>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
