
import React from 'react'

export const ConfigAdmin = () => {
  return (
    <div>ConfigAdmin</div>
  )
}


// import React, { useEffect, useState } from 'react'
// import { MenuLateral } from '../components/MenuLateral';
// import { Select, initTE,  Datepicker, Input} from "tw-elements";


// export const ConfigAdmin = () => {

//   initTE({ Select,  Datepicker, Input, });
  
//   let showdate = new Date();
//   let displaytodaysdate = showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();
//   let dt= showdate.toDateString();
//   let displaytime = showdate.getHours()+':'+showdate.getMinutes()+':'+showdate.getSeconds();

// //   const [filled, setFilled] = useState(0);
// //   const [isRunning, setIsRunning] = useState(false);

//     return (
//     <>

// <div className='flex'>
//     <MenuLateral/>
//     <div className=' w-full block self_conte_fond h-screen'>
//       <div className="content_users m-7">
//         <div className="content_users_title">
//           <h2 className='text-4xl font-bold text-gray-700 font-sans mx-0'>Configuración </h2>
//         </div>
//       </div>
//       <div className='flex justify-evenly bg-white m-8 border rounded-md h-4/5'>
//       <div className='flex flex-col mt-8 w-2/5'>
//           <h2 className='underline decoration-sky-500 text-xl mb-1 mt-3'>Región y Pais</h2>
//           <p className='mb-3 text-sm'>Selecciona tu país</p>
//           <div className='content-select'>
//           <select data-te-select-init data-te-select-filter="true">
//             <option value="1">Argentina</option>
//             <option value="1">Bolivia</option>
//             <option value="2">Costa Rica</option>
//             <option value="3">Colombia</option>
//             <option value="4">Chile</option>
//             <option value="5">Cuba</option>
//             <option value="6">España</option>
//             <option value="7">Ecuador</option>
//             <option value="8">El salvador</option>
//             <option value="9">Guatemala</option>
//             <option value="10">Guinea Ecuatorial</option>
//             <option value="11">Honduras</option>
//             <option value="12">Mexico</option>
//             <option value="13">Nicaragua</option>
//             <option value="14">Panama</option>
//             <option value="15">Perú</option>
//             <option value="16">Paraguay</option>
//             <option value="17">Puerto Rico</option>
//             <option value="18">República Dominicana</option>
//             <option value="19">Uruguay</option>
//             <option value="20">Venezuela</option>
//           </select>
//           </div>
//           <hr className='mt-5 w-full'/>
//         <div className='content-hora'>
//         <div className='content-fecha'>
//         <h2 className='underline decoration-sky-500 text-xl mt-10'>Fecha</h2>
//         <p className='text-sm mt-1 mb-2'>Fecha automatica</p>
//         <div>
//           <div className='text-sm'>
//           <input type="text" value={displaytodaysdate} readOnly="true"/>
//             {dt}
//           </div>
//     </div>
//         </div>
//         <hr className='mt-6 w-full'/>
//         <div className='content-hora'>
//         <h2 className='underline decoration-sky-500 mb-2 text-xl mt-10'>Hora</h2>
//         <p className='text-sm mt-1 mb-1'>Hora automatica</p>
//         <div>
//             <input type="text" value={displaytime} readOnly="true"/>
//       </div>
//         </div>
//         <hr className='mt-5 w-full'/>
//         <div>
//         <h2 className='underline decoration-sky-500 mb-3 text-xl mt-10'>Almacenamiento</h2>
//         <div className='flex'>
//           <p className='text-sm mr-12'>Usados: 53,5 GB</p>
//           <p className='text-sm'>Libres: 1,17 TB</p>
//         </div>
//         </div>
//       </div>
//     </div>
//     <div className='content-seguridad'>
//         <h2 className='underline decoration-sky-500 text-xl mt-8 mx-12'>Seguridad</h2>
//         <p className='text-sm mt-1 mb-1 mx-12'>Permisos de usuarios</p>
//         <div className=' flex mt-1 mx-12'>
//              <p className='text-sm mr-10 mt-5'>Asignar permisos al usuario :</p>
//              <select data-te-select-init data-te-select-filter="true">
//             <option value="1">Vendedor 1</option>
//             <option value="1">Vendedor 2</option>
//             <option value="2">Vendedor 3</option>
//             <option value="3">Vendedor 4</option>
//             <option value="4">Vendedor 5</option>
//           </select>
//         </div>
//         <div className='border shadow-md my-14 ml-12 p-2 rounded-md'>
//           <h3 className='text-lg mb-3 mx-3 font-semibold'>Permisos disponibles</h3>
//           <p className='mx-3 mb-1 text-sm'>Modificar productos</p>
//           <p className='mx-3 mb-1 text-sm'>Eliminar productos</p>
//           <p className='mx-3 mb-1 text-sm'>Modificar categoria</p>
//           <p className='mx-3 mb-1 text-sm'>Crear categorias</p>
//           <p className='mx-3 mb-1 text-sm'>Agregar ventas</p>
//         </div>
//         <div className='border shadow-md ml-12 p-2 rounded-md'>
//         <h3 className='text-md mb-3 mx-3 font-semibold'>Permisos asignados</h3>
//           <p className='mx-3 mb-1 text-sm'>Agregar proveedores</p>
//         </div>
//     </div>
//     </div>
//     </div>
// </div>


//     </>

//   )

//     }