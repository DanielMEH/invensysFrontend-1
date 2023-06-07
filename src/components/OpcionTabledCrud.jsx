import React,{useState,useEffect} from "react";

import Swal from "sweetalert2";
import "../assets/css/styleSlider.css";
import { useGetUsers } from "../hooks/context/GetUsersContext";
import { useNavigate } from "react-router-dom";
import { TodoFunctions } from "../apis/ApiData";
function OpcionTabledCrud(e) {

const [darkMode, setDarkMode] = useState(false);
useEffect(() => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setDarkMode(true);
  }
}, []);
  const navigate = useNavigate();

  const {
    usersDeleteData,
    getActivosUsers,
    getInactivosUsers,
    setGetInactivosUsers,
    setGetActivosUsers,
  } = useGetUsers();
  const deleteId = async () => {
    await Swal.fire({
      text: `
  Al eliminar este usuario no podra acceder a la plataforma y sus datos se perderan \n 
 `,
      footer: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="#F4D03F" d="M11 15h2v2h-2v-2m0-8h2v6h-2V7m1-5C6.47 2 2 6.5 2 12a10 10 0
       0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8
        0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8Z"/></svg>
  <p href="" style="color:#5DADE2; margin:0px 5px"> ${e.data.correo} </p>`,
      showClass: {
        popup: "animate__animated animate__bounceInDown",
      },
      background: darkMode ? "#374151":"white",

      color: darkMode ? "white" : "black",
      position: "top",
      border: "1px solid #5DADE2",
      backdrop: "8px",
      customClass: "swal-wide",
      showCancelButton: true,
      confirmButtonColor: "#1daf53",
      focusCancel: false,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "eliminar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let id = e.data.idAccount;
      const response =   await usersDeleteData(id);

        if (e.data.estado === "Activo") {
          setGetActivosUsers(getActivosUsers - 1);
        } else {
          setGetInactivosUsers(getInactivosUsers - 1);
        }
        if(response.response.status === 400){
          await Swal.fire({
            className: "swal-wide",
  
            text: "Hubo un error al eliminar el usuario, asegurate de que el usuario tenga asignado un modulo por lo menos.",
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
            timer: 6000,
          });

        }else{

          Swal.fire({
            icon: "success",
            title: `Exito`,
            text: "el usuario se elimino correctamente",
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
        }

      } else if (result.isDismissed) {
        await Swal.fire({
          className: "swal-wide",

          text: "se cancelo la eliminacion del usuario",
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
  const editId = () => {
    console.log(e.data);
    Swal.fire({
      title: "Actualizar correo",
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
            
            placeholder="Correo" value="${e.data.correo}">

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
        const correo = Swal.getPopup().querySelector("#swal-input1").value;
       
        if (!correo) {
          Swal.showValidationMessage(`El email es requerido`);
        }
        return { correo};
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      
      if (result.isConfirmed) {

        let data = {
          email: result.value.correo,
        }

      TodoFunctions.putEmailUser(e.data.idAccount,data)
       window.location.reload()
     
      }
    });
  };
  const isAlowedId = () => {
    navigate(`/permisions/${e.data.idAccount}`);
  };

  const editPassword = () => {
    Swal.fire({
      title: "Editar contraseña",
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
            
            placeholder="Ingrese la contraseña actual" value="">

            <input id="swal-input2"
            style="margin-bottom: 10px; background-color: #FFF; color:${darkMode? "black":"black"};
            display: block;
            width: 350px;
            height: 40px;
            focus: none;
            "
            class="swal2-input"
            
            placeholder="Ingrese la nueva contraseña" value="">
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
        const password = Swal.getPopup().querySelector("#swal-input1").value;
        const newPassword = Swal.getPopup().querySelector("#swal-input2").value;
       
        if (!password || !newPassword) {
          Swal.showValidationMessage(`Los campos son requeridos`);
        }
        return { password, newPassword};
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      
      if (result.isConfirmed) {
        let data = {
          password: result.value.password,
          newPassword: result.value.newPassword

        }

       const res=  TodoFunctions.putPassUser(e.data.idAccount,data)
        // window.location.reload()

        console.log(res,"{{{{{{}}}}}}");
     
      }
    });
  }

  return (
    <div>
      <button onClick={isAlowedId}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 256 256"
        >
          <path
            fill="#ffc664"
            d="M160 16a80.1 80.1 0 0 0-76.1 104.8l-57.6 57.5A8.1 8.1 0 0 0 24 184v40a8 8 0 0 0 8 8h40a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 8-8v-16h16a8.1 8.1 0 0 0 5.7-2.3l9.5-9.6A80 80 0 1 0 160 16Zm20 76a16 16 0 1 1 16-16a16 16 0 0 1-16 16Z"
          />
        </svg>
      </button>
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
      <button onClick={editId}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#28D87D" d="M13 19c0-3.31 2.69-6 6-6c1.1 0 2.12.3 3 .81V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h9.09c-.05-.33-.09-.66-.09-1M4 8V6l8 5l8-5v2l-8 5l-8-5m14 8v2h4v2h-4v2l-3-3l3-3Z"/></svg>
     
      </button>

      <button onClick={editPassword}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#019afa" d="M20.8 17v-1.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V17c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3v-1.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3V17M15 12c-.9.7-1.5 1.6-1.7 2.7c-.4.2-.8.3-1.3.3c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3m-3 7.5c-5 0-9.3-3.1-11-7.5c1.7-4.4 6-7.5 11-7.5s9.3 3.1 11 7.5c-.2.5-.5 1-.7 1.5C21.5 12 19.8 11 18 11c-.4 0-.7.1-1.1.1C16.5 8.8 14.5 7 12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5h.3c-.2.4-.3.8-.3 1.2v1.3Z"/></svg>
     
      </button>
    </div>
  );
}

export default OpcionTabledCrud;
