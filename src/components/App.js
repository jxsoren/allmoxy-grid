import React, { useState, useEffect } from "react";
import { Grid } from "./Grid.js";
import { ProductForm } from "./ProductForm.js";
import { dummyData } from "../api/dummyData.js";
const initOptions = {
  value: "",
};
export const App = () => {
  const [products, setProducts] = useState(dummyData);
  console.log(typeof products);
  const [sorter, setSorter] = useState(initOptions);

  const updateState = (prod, updates) => {
    const index = products.findIndex((item) => item === prod.id),
      newState = [...products];
    newState[index] = updates;
    setProducts((prev) => [...prev, ...newState]);
  };

  useEffect(() => {
    const a_z = () => {
      products.sort((a, b) => {
        const stringA = a.title[0].toUpperCase();
        const stringB = b.title[0].toUpperCase();
        return stringA > stringB ? -1 : -0;
      });
    };

    const z_a = () => {
      products.sort((a, b) => {
        const stringA = a.title[0].toUpperCase();
        const stringB = b.title[0].toUpperCase();
        return stringA > stringB ? -0 : -1;
      });
    };

    const $$$_$ = () => {
      return products.sort(
        (firstItem, secondItem) => firstItem.price - secondItem.price
      );
    };

    const $_$$$ = () => {
      return products.sort(
        (firstItem, secondItem) => secondItem.price - firstItem.price
      );
    };
    if (sorter.value === "A_Z") {
      a_z();
    } else if (sorter.value === "Z_A") {
      z_a();
    } else if (sorter.value === "$$$_$") {
      $$$_$();
    } else if (sorter.value === "$_$$$") {
      $_$$$();
    }
  }, [sorter.value]);

  const handleSelect = (e) => {
    setSorter({
      value: e.target.value,
    });
    console.log(sorter.value);
  };

  return (
    <div>
      <ProductForm products={products} setProducts={setProducts} />
      <hr />
      <Grid
        products={products}
        sorter={sorter}
        handleSelect={handleSelect}
        setProducts={setProducts}
        // updateState={updateState}
      />
    </div>
  );
};
