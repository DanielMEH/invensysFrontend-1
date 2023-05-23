import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

export const Prueba = () => {
  return (
    <>
      <div
        style={{
          width: "fit-content",
          border: "1px solid #ccc",
          padding: "10px",

          margin: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "30px",
              }}
            >
              Paraiso mx S.AS.
            </h1>
            <p
              style={{
                fontSize: "13px",
              }}
            >
              PARAISO MX RESTAURANTE BAR S.A.S. NIT 901646131
            </p>
            <p
              style={{
                fontSize: "13px",
              }}
            >
              No somos Autorretenedor del Impuesto sobre la Renta y
              Complementarios
            </p>
          </div>
          <div
            style={{
              margin: "0px 30px",
            }}
          >
            <h1
              style={{
                fontSize: "25px",
              }}
            >
              Información general
            </h1>
            <p>
              <span style={{ margin: "0px 15px 0px 0px" }}>Fecha :</span>{" "}
              {new Date().toLocaleDateString()}
            </p>
            <p>
              <span style={{ margin: "0px 15px 0px 0px" }}>Hora :</span>{" "}
              {new Date().toLocaleTimeString()}
            </p>
            <p>
              <span style={{ margin: "0px 15px 0px 0px" }}>
                Formato de pago :
              </span>{" "}
              Efectivo
            </p>
            <p>
              <span style={{ margin: "0px 15px 0px 0px" }}>
                Numero de factura :
              </span>{" "}
              1
            </p>
            <p>
              <span style={{ margin: "0px 15px 0px 0px" }}>Moneda :</span> COP
            </p>
          </div>
        </div>
        <div className="sect2">
          <h2
            style={{
              fontSize: "30px",
              borderBottom: "3px solid black",
              marginBottom:"20px"
            }}
          >
            Datos del emisor
          </h2>
          <p>
            <span style={{ margin: "0px 8px 0px 0px" }}>Razon social :</span>{" "}
            PARAISO MX RESTAURANTE BAR S.A.S.
          </p>
          <p>
            <span style={{ margin: "0px 8px 0px 0px" }}>NIT :</span> 100509345
          </p>
          <p>
            <span style={{ margin: "0px 8px 0px 0px" }}>Email :</span>{" "}
            ospibnaortizjuanDaniel351@gmail.com
          </p>
          <p>
            <span style={{ margin: "0px 8px 0px 0px" }}>
              Telefono: 
            </span>{" "}
            3003764571
          </p>
          <p>
            <span style={{ margin: "0px 15px 0px 0px" }}>Dirección :</span>
            Avenida centenario car 12 #34
          </p>
          <p>
            <span style={{ margin: "0px 15px 0px 0px" }}>ciudad,Depart, :</span>
            Avenida centenario car 12 #34
          </p>
        </div>
      </div>
    </>
  );
};
