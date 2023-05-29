import React from "react";

import { useNavigate } from "react-router-dom";
export const ComandoSystem = () => {
  const navi = useNavigate();
  // implemntar comandos del sistma y atajos de teclado

  window.addEventListener("keydown", (e) => {
    // comando shift + p
    if (e.shiftKey && e.keyCode === 80) {
      navi("/perfil");
    } else if (e.shiftKey && e.keyCode === 69) {
      navi("/trae");
    }
    // comando shift + i
    else if (e.shiftKey && e.keyCode === 73) {
      navi("/dasboard");
    }
    // comando shift + u
    else if (e.shiftKey && e.keyCode === 85) {
      navi("/usuarios");
    }

    // comando shift + n
    else if (e.shiftKey && e.keyCode === 78) {
      navi("/notificaciones");
    }

    // comando shift + b
    else if (e.shiftKey && e.keyCode === 66) {
      navi("/bodega");
    }
    // shift + q
    else if (e.shiftKey && e.keyCode === 81) {
      navi("/producto");
    }
    // shift + a
    else if (e.shiftKey && e.keyCode === 65) {
      navi("/categorias");
    }
        // shift + x
    else if (e.shiftKey && e.keyCode === 88) {
        navi("/proveedor");
    }
    // shift + z
    else if (e.shiftKey && e.keyCode === 90) {
        navi("/pedidos");
    }
    // shift + s
    else if (e.shiftKey && e.keyCode === 83) {
        navi("/venta");
    }
        

    // shift + c
    else if (e.shiftKey && e.keyCode === 67) {
      navi("/compras");
    }
  });
};
