import { useRouter } from "next/router";
import React from "react";
import productsData from "../../public/data/data";
import _MetaData from "../_MetaData";

export default function ProductDetails() {
  const router = useRouter();
  const productID = router.query.details;
  const findProduct = productsData.products.find((product) => product.id == productID);
  return (
    <div className="container mx-auto p-10">
      <_MetaData title={findProduct.name} />
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="flex align-center">
            <div>
              <img
                className="object-contain"
                src="https://next-amazona.vercel.app/images/shirt3.jpg"
                alt="Mountain"
              />
            </div>
            <div className="p-5">
              <div>
                  <h4>{findProduct.name}</h4>
                  <h4>{findProduct.id}</h4>
                  <h4>Brand: {findProduct.brand}</h4>
                  <h4>Price: {findProduct.price}</h4>
                  <h4>Ouantity: Ouantity</h4>
              </div>
              <div className="flex justify-between">
                <button className="p-5 mr-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded">
                  Buy Now
                </button>
                <button className="p-5 mr-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-10">
            <h1>Delivery Option</h1>
        </div>
      </div>
    </div>
  );
}
