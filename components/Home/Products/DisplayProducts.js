import React from "react";
import productsData from "../../../public/data/data";
import SingleProduct from "./SingleProduct";

export default function DisplayProducts() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-5 auto-rows-max grid-flow-row">
        {productsData.products.map((product, index) => (
          <SingleProduct product={product} index={index} key={product.id} />
        ))}
      </div>
    </div>
  );
}
