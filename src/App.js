import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductDetailPage from "./Pages/ProductDetailPage";
import ProductsPage from "./Pages/ProductsPage";

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/products">
          <ProductsPage />
        </Route>
        <Route exact path="/products/:id">
          <ProductDetailPage />
        </Route>
      </Switch>
    </div>
  );
}
