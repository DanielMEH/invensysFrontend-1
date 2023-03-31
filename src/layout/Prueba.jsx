import React from "react";
import moment from "moment-with-locales-es6";

moment.locale("es");

let h = moment().format("YYYY-MM-DD");

let l = moment().format("Do MMMM  YYYY"); // marzo 31º 2023, 8:04:44 am
moment().format("dddd"); // viernes
moment().format("MMM Do YY"); // mar. 31º 23
moment().format("YYYY [escaped] YYYY"); // 2023 escaped 2023
moment().format();

console.log(l);
export const Prueba = () => {
  return <div>Prueba</div>;
};
