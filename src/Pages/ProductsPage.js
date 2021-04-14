import React, { useState } from "react";
import CardProduct from "../Components/Card/Card";
import products from "../data/products";

export default function ProductsPage() {
//   console.log(products);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: 50
      }}
    >
      {products.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
}

// 1 - data
// 2- pages
// 3- component
// 4- render component
// 5- map  -> key
// 6- add props
