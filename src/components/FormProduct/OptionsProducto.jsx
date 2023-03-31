import React from 'react'

import Swal from 'sweetalert2'
import "../../assets/css/styleSlider.css"
import {useContextProduct} from '../../hooks/context/ContextProduxt'
import { useNavigate} from 'react-router-dom'
function OptionsProducto(e) {

    const Navigate = useNavigate()
    const {deleteProduct }= useContextProduct()
   
        const deleteId = async() => {
    
await Swal.fire({
  text: `
  ¿Deseas eliminar este producto? \n
 `,
  footer: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#F4D03F" d="M11 15h2v2h-2v-2m0-8h2v6h-2V7m1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8Z"/></svg>
  <p href="" style="color:#5DADE2; margin:0px 5px"> ${e.data.name} </p>`,
  showClass: {
    popup: "animate__animated animate__bounceInDown",
  },
  background: "white",

  color: "black",
  position: "top",
  border: "1px solid #5DADE2",
  backdrop: "8px",
  customClass: "swal-wide",
  showCancelButton: true,
  confirmButtonColor: "#1daf53",
  focusCancel: false,
  focusConfirm: false,
  cancelButtonColor: "#ccc",
  confirmButtonText: "Continuar",
  cancelButtonText: "Cancelar",
}).then(async (result) => {
  if (result.isConfirmed) {
    let id = e.data._id;
    await deleteProduct(id);

    Swal.fire({
      icon: "success",
      title: `Exito`,
      text: "El producto se elimino correctamente",
      customClass: "swal-wide",
      showClass: {
        popup: "animate__animated animate__fadeIn",
      },
      focusCancel: false,
      focusConfirm: false,
      confirmButtonColor: "#1daf53",
      confirmButtonText: "Aceptar",
      color: "black",
      timer: 1000,
      background: "white",
    });
  } else if (result.isDismissed) {
    await Swal.fire({
      className: "swal-wide",

      text: "se cancelo la eliminacion del producto",
      showClass: {
        popup: "animate__animated animate__fadeIn",
      },
      focusCancel: false,
      focusConfirm: false,
      confirmButtonColor: "#1daf53",
      cancelButtonColor: "#ccc",
      confirmButtonText: "Continuar",
      color: "black",
      background: "white",
      timer: 2000,
    });
  }
});
    }
    const EditId = () => {

    
      Navigate(`/admin/productos/editar/${e.data._id}`)
    
      
      
    }

  return (
    <>
   
    <div>
        
        <button

        onClick={deleteId} className="icon-sm text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24">
                <path fill="red" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg></button>
        <button onClick={EditId}>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24">
                <path fill="#28D87D" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></button>

    </div>
    </>
  )
}

export default OptionsProducto