import { Container } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import Header from "../Components/Details/DetailHeader";
import ProductDescription from "../Components/Details/Descripation";

export default function ProductDetailPage() {
  const { id } = useParams();

  let product = products.find((product) => product.id === id);
  console.log(product);

  return (
    <div style={{ marginTop: 200 }}>
      <Container>
        {/* {error && <Alert  severity="error">{error}</Alert>} */}
        <Header product={product} />
        <ProductDescription product={product} />
      </Container>
    </div>
  );
}
