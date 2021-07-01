import React, { useState } from "react";
import { Grid } from "./Grid.js";
import { GridForm } from "./GridForm";
import { dummyData } from "../api/dummyData";

export const App = () => {
  const [products, setProducts] = useState(dummyData);
  return (
    <div>
      <GridForm products={products} setProducts={setProducts} />
      <hr />
      <Grid products={products} setProducts={setProducts} />
    </div>
  );
};
