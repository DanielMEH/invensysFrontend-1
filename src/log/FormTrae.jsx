import React from 'react'

export const FormTrae = () => {


    const [data.setData] = ({
        
    })


    const handleFormTrae = (e)=>{

        e.preventDefault()


        console.log(e.target.value)
    }

    const HandleInput = (e) =>{

        console.log(e.target.name);
    }
  return (
    <>
  
<div class="bg-white h-fit p-4">

	<form onSubmit={handleFormTrae}>
    <div class="grid gap-6 mb-6 lg:grid-cols-2">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tipo de persona</label>
            <input type="text" id="first_name"
            name='tipoPersona'
             class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
               dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="..."
                
                onChange={HandleInput}
                />
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nit</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
               dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="..." name="nit"
               onChange={HandleInput}  />
        </div>

        {/* jjj */}

        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Identificación</label>
            <input type="text" id="first_name"
            name='tipoIdentificacion'
             class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
               dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="..."
                onChange={HandleInput} />
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">No.</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
               dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="..." name="  numero"
               onChange={HandleInput}  />
        </div>
        {/* xx */}
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre de la Empre/Neg</label>
            <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="..." name="nombre"
              onChange={HandleInput}/>
        </div>  
        <div>   
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Numero Tel:</label>
            <input type="tel" id="phone" name="telefono" onChange={HandleInput} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
        </div>
        <div>
            <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pais</label>
            <input type="url" id="website" name="pais" onChange={HandleInput} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" />
        </div>
        <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Departamento</label>
            <input type="number" id="visitors" name='departamento' onChange={HandleInput} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""/>
        </div>
        
    </div>
    <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ciudad</label>
        <input type="email" id="email" onChange={HandleInput} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="ciudad" name="ciudad" />
    </div> 
    <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dirección</label>
        <input type="email" id="email" onChange={HandleInput} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="invensys@company.com" name='direccion' />
    </div> 
    <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email:</label>
        <input type="email" id="email" onChange={HandleInput} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="invensys@company.com" name="correo" />
    </div> 
   
   
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

</div>
    </>
  )
}
