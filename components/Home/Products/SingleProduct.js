import NextLink from "next/link";
import React from "react";
export default function SingleProduct(props) {
  const { name, image, id, price } = props.product;
  return (
    <div className="p-2">
      <NextLink href={`/product/${id}`} passHref>
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={image} alt="Mountain" />
          <div className="text-center">
            <h5 className="py-2">{name}</h5>
            <h5 className="py-2">${price}</h5>
            <div className="pt-2 pb-2">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-12 border border-blue-500 hover:border-transparent rounded">
                View Details
              </button>
              {/* <button
                onClick={() => {
                  alert("added cart");
                }}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Add to Cart
              </button> */}
            </div>
          </div>
        </div>
      </NextLink>
    </div>
  );
}
