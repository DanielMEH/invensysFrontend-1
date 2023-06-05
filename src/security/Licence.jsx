import React, { useState } from "react";
import { MenuLateral } from "../components/MenuLateral";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
let stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

let moneyPrice = 950000;
const money = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  minimumFractionDigits: 0,
});
const FormLicence = () => {
  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log(paymentMethod);
    }
  };

 
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=""
      >
       
        <CardElement className="border p-4 mt-4" />
        
        <button className="bg-[#3498db] mt-2  text-white text-center
         block w-full p-3 rounded-full  ">
          Adquirir Licencia
        </button>
      </form>
    </>
  );
};

const InforLicence = () =>{


  return (
    <>
   <div class="bg-gradient-to-b ">
    <div class="container m-auto px-6  md:px-12 lg:px-20">
    
        <div class="mt-2 m-auto -space-y-4 items-center justify-center
         md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
            <div class="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
                <div aria-hidden="true" class="absolute top-0 w-full
                 h-full rounded-2xl bg-white shadow-xl
                  transition duration-500  "></div>
                <div class="relative p-6 space-y-6 lg:p-8">
                    <h3 class="text-3xl text-gray-700 font-semibold text-center">
                    Comprar tu licencia anual
                    </h3>
                    <div>
                        <div class="relative flex justify-around">
                            <div class="flex items-end">
                                <span class="text-6xl text-gray-800 font-bold leading-0">
                                {money.format(moneyPrice)}
                                </span>
                                <div class="pb-2">
<span class="block text-2xl text-gray-700 font-bold">%</span>
<span class="block text-xl text-gray-500 font-bold line-through">$ 1200.000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul role="list" class="w-max space-y-4 py-6 m-auto text-gray-600">
                        <li class="space-x-2">
                            
                            <span>Acceso a todos los modulos</span>
                        </li>
                        <li class="space-x-2">
                          
                            <span>Ampliación de almecenamiento</span>
                        </li>
                        <li class="space-x-2">
                            
                            <span>Roles y usuarios</span>
                        </li>
                    </ul>
                    <p class="flex items-center justify-center space-x-4 text-lg text-gray-600 text-center">
                        <span>mas información</span>
                        <a href="tel:+24300" class="flex space-x-2 items-center text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            <span class="font-semibold">+57 3003764571</span>
                        </a>
                       
                    </p>
                    <div className="help">
                    <FormLicence />
                    </div>
                    
                </div>
            </div>

            <div class="relative group md:w-6/12 lg:w-7/12">
                <div aria-hidden="true" class="absolute top-0 w-full h-full
                 rounded-2xl bg-white shadow-lg transition duration-500 "></div>
                <div class="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16">
                    <ul role="list" class="space-y-4 py-4 text-gray-600">
                        <li class="space-x-2">
                            
                            <span>Solo pagas anual</span>
                        </li>
                        <li class="space-x-2">
                        <img class="w-[20rem] lg:w-[24rem]"
                         src="https://res.cloudinary.com/dkqp3wkbi/image/upload/v1685721587/7769792_3236196_oqbsj3.jpg" loading="lazy" alt="licence"/>
                            
                            <span>Aumentamos el rendimiento de tu tranajo.</span>
                        </li>
                       
                    </ul>
                   
                    <div class="mt-1 flex justify-between gap-6">
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
       
    
    </>
  )

}



export const Licence = () => {
  const [state, setState] = useState(false);
  return (
    <div className="flex">
      <MenuLateral />
      <div className=" w-full block self_conte_fond h-screen ">
        <div className="content_users m-7">
          <div className="content_users_title">
            <h2 className="text-4xl font-bold text-gray-700 font-sans mx-0">
              Licencia
            </h2>
            <p className="text-xl text-gray-600 mt-4 mx-0">
              Preferincia de pago
            </p>
          </div>

          <div className="container_cont lg:min-w-7xl  ">
            <div className=" flex flex-col">
              <span className="text-xl">
                No se encontro ninguna licencia activa
              </span>

              <buttom
                className="bg-[#3498db] w-fit cursor-pointer  text-white p-2 my-2 inline-block"
                onClick={() => setState(!state)}
              >
                Comprar licencia
              </buttom>
            </div>
            <div className={state === false ? "hidden" : "block"}>
              <Elements stripe={stripePromise}>
                <InforLicence/>
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
