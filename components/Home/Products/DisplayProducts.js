import React from "react";
import productsData from "../../../public/data/data";
import SingleProduct from "./SingleProduct";

export default function DisplayProducts() {
  return (
    <div className="container mx-auto">
      {/* <div className='flex justify-end items-center space-x-2'>
        <span className="text-sm text-gray-800">Light</span>
        <div>
          <input type='checkbox' name='' id='toggle' className="hidden" />
          <label htmlFor="toggle">
            <div className='w-9 h-5 flex items-center bg-gray-800 rounded-full p-1'>
              <div className='toggle-dot w-4 h-4 bg-white rounded-full shadow-md'>

              </div>
            </div>
          </label>
        </div>
        <span className="text-sm text-gray-400">Dark</span>
      </div> */}
      <div className="flex items-center justify-center w-full mb-12">
        <label
          for="toogle"
          className="flex items-center cursor-pointer"
        >
          <div className="ml-3 text-gray-700 font-medium mr-3">
            Light
          </div>
          <div className="relative">
            <input id="toogle" type="checkbox" className="sr-only" />
            <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
            <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition transform duration-300 ease-in-out"></div>
          </div>
          <div className="ml-3 text-gray-700 font-medium ">
            Dark
          </div>
        </label>
      </div>


      <div className="grid grid-cols-4 gap-5 auto-rows-max grid-flow-row">
        {productsData.products.map((product, index) => (
          <SingleProduct product={product} index={index} key={product.id} />
        ))}
      </div>
    </div>
  );
}
