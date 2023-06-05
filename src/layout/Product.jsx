import React from 'react'
import { MenuLateral } from '../components/MenuLateral'
import {DatatableProduct} from '../components/DatatableProduct'
import {ContextProduxt} from "../hooks/context/ContextProduxt"
import { ContextCategory} from '../hooks/context/ContextCategory'
export const Product = () => {
  
  return (
    <>
      <div className="flex">
        <MenuLateral />
        <div
          className=" w-full block bg-[#f4f8ffdd]
        
        dark:bg-gradient-to-r from-[#163b59] from-10%
         via-[#18324f] via-30% to-[#121b2e] to-90% "
        >
          <div className="content_users m-7">
            <div className="content_users_title">
              <h2 className="text-4xl font-bold dark:text-white text-gray-700 font-sans mx-0">
                Productos
              </h2>
              <p className="text-xl dark:text-white text-gray-600 mx-0">
                Crea, administra tus productos de forma sencilla.
              </p>
            </div>

            <div className="container_cont">
              <ContextCategory>
                <ContextProduxt>
                  <DatatableProduct />
                </ContextProduxt>
              </ContextCategory>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
