
import { MenuLateral } from '../components/MenuLateral'
import { DatatableCategorys } from '../components/DatatableCategorys'
import { ContextCategory} from '../hooks/context/ContextCategory'
import { DatatableInventory } from '../components/DatatableInventory'
export const InventoryGeneral = () => {


  return (
    <>
      <div className="flex">
        <MenuLateral />
        <div
          className=" w-full block bg-[#f4f8ffdd]
        h-[100%] min-h-screen
        dark:bg-gradient-to-r from-[#163b59] from-10%
         via-[#18324f] via-30% to-[#121b2e] to-90%  "
        >
          <div className="content_users m-7">
            <div className="content_users_title">
              <h2 className="text-4xl font-bold dark:text-white text-gray-700 font-sans mx-0">
                Inventario{" "}
              </h2>
              <p className="text-xl dark:text-white text-gray-600 mx-0">
                Eficiencia en el trabajo Y organización de tus bodegas
              </p>
            </div>

            <div className="container_cont">
              <ContextCategory>
                <DatatableInventory />
              </ContextCategory>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
