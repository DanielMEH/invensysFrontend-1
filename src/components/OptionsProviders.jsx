import React,{useState,useEffect} from "react";
import Swal from "sweetalert2";
import "../assets/css/styleSlider.css";
import { TodoFunctions } from "../apis/ApiData"; 

import { useContextProviders } from "../hooks/context/ContextProveedores";

function OptionsProviders(e) {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);
  const { deleteProviders } = useContextProviders();
  const deleteId = async () => {
   
    await Swal.fire({
      text: `
  Deseas eliminar este proveedor \n
 `,
      footer: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#F4D03F" d="M11 15h2v2h-2v-2m0-8h2v6h-2V7m1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8Z"/></svg>
  <p href="" style="color:#5DADE2; margin:0px 5px"> ${e.data.name} </p>`,
      showClass: {
        popup: "animate__animated animate__bounceInDown",
      },
      background: darkMode ? "#374151":"white",
      position: "top",
      color: darkMode ? "white" : "black",
      border: "1px solid #5DADE2",
      backdrop: "8px",
      customClass: "swal-wide",
      showCancelButton: true,
      
      focusCancel: false,
      focusConfirm: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Continuar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let id = e.data._id;
      
        await deleteProviders(id);
        Swal.fire({
          icon: "success",
          title: `Exito`,
          text: "El proveedor se elimino correctamente",
          customClass: "swal-wide",
          showClass: {
            popup: "animate__animated animate__fadeIn",
          },
          focusCancel: false,
          focusConfirm: false,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Aceptar",
          color: darkMode ? "white" : "black",
          timer: 1000,
          background: darkMode ? "#374151":"white",
        });
      } else if (result.isDismissed) {
        await Swal.fire({
          className: "swal-wide",

          text: "se cancelo la eliminacion el proveedor",
          showClass: {
            popup: "animate__animated animate__fadeIn",
          },
          focusCancel: false,
          focusConfirm: false,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#ccc",
          confirmButtonText: "Continuar",
          color: darkMode ? "white" : "black",
          background: darkMode ? "#374151":"white",
          timer: 2000,
        });
      }
    });
  };
  const EditId = () => {

    // navigate(`/update/category/${e.data._id}`)
    // crear un modal para editar la categoria
    Swal.fire({
      title: "Editar proveedor",
      color:darkMode ? "white" : "black",
      background: darkMode ? "#374151":"white",
      html: `<input id="swal-input1"
            style="margin-bottom: 10px; background-color: #FFF; color:${darkMode? "black":"black"};
            display: block;
            width: 350px;
            height: 40px;
            focus: none;
            "
            class="swal2-input"
            
            placeholder="Nombre del proveedor" value="${e.data.name}">
            <input id="swal-input2"
            style="margin-bottom: 10px; background-color: #FFF; color:${darkMode? "black":"black"};
            display: block;
            width: 350px;
            height: 40px;
            focus: none;
            "
            class="swal2-input" placeholder="Dirección" value="${e.data.address}">

            <input id="swal-input3"
            style="margin-bottom: 10px; background-color: #FFF; color:${darkMode? "black":"black"};
            display: block;
            width: 350px;
            height: 40px;
            focus: none;
            "
            class="swal2-input" placeholder="Compañia" value="${e.data.company}">

            <input id="swal-input4"
            style="margin-bottom: 10px; background-color: #FFF; color:${darkMode? "black":"black"};
            display: block;
            width: 350px;
            height: 40px;
            focus: none;
            "
            class="swal2-input" placeholder="Email" value="${e.data.email}">

            <input id="swal-input5"
            style="margin-bottom: 10px; background-color: #FFF; color:${darkMode? "black":"black"};
            display: block;
            width: 350px;
            height: 40px;
            focus: none;
            "
            class="swal2-input" placeholder="Telefono" value="${e.data.phone}">

            `,

      focusConfirm: false,
      focusCancel: false,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      showClass: {
        popup: "animate__animated animate__fadeIn",
      },
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const name = Swal.getPopup().querySelector("#swal-input1").value;
        const address= Swal.getPopup().querySelector("#swal-input2").value;
        const company=Swal.getPopup().querySelector("#swal-input3").value;
        const email= Swal.getPopup().querySelector("#swal-input4").value;
        const phone=Swal.getPopup().querySelector("#swal-input5").value;
       
        if (!name || !address || !company || !email || !phone) {
          Swal.showValidationMessage(`Los campos del proveedor son requeridos`);
        }
        return { name, address, company, email, phone };
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      
      if (result.isConfirmed) {
        let data ={
          name:result.value.name,
          address:result.value.address,
          company:result.value.company,
          email:result.value.email,
          phone:result.value.phone,
          _id:e.data._id
        }

          TodoFunctions.putProviders(e.data._id,data)
        window.location.reload()
      }
    });
  };

  return (
    <div>
      <button onClick={deleteId} className="icon-sm text-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="29"
          viewBox="0 0 24 24"
        >
          <path
            fill="red"
            d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"
          />
        </svg>
      </button>
      <button onClick={EditId}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="29"
          viewBox="0 0 24 24"
        >
          <path
            fill="#28D87D"
            d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"
          />
        </svg>
      </button>
    </div>
  );
}

export default OptionsProviders;
