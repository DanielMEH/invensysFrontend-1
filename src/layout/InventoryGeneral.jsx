
import { MenuLateral } from '../components/MenuLateral'
import { DatatableCategorys } from '../components/DatatableCategorys'
import { ContextCategory} from '../hooks/context/ContextCategory'
import { DatatableInventory } from '../components/DatatableInventory'
export const InventoryGeneral = () => {


  return (
    <>
    <div className='flex'>
    <MenuLateral/>
    <div className=' w-full block self_conte_fond '>


      <div className="content_users m-7">
        <div className="content_users_title">
          <h2 className='text-4xl font-bold text-gray-700 font-sans mx-0'>Inventario </h2>
          <p className='text-xl text-gray-600 mx-0'>
          Eficiencia en el trabajo Y organización de tus bodegas

          </p>
             
        </div>

        <div className="container_cont">
          
        <ContextCategory>
          <DatatableInventory/>

          </ContextCategory>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
