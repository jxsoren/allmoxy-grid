import React, { useState } from "react";
import { Product } from "../components/Product.js";
import "../styles.css";

export const Grid = (props) => {
  const {
    products,
    setProducts,
    toggleEdit,
    setToggleEdit,
    sorter,
    handleSelect,
    updateState
  } = props;

  const testIndex = (index, updates) => {
    const newState = [...products];
    newState[index] = updates;
    console.log(newState);
  };

  const deleteIndex = (index) => {
    const newDataState = [...products];
    newDataState.splice(index, 1);
    setProducts(() => [...newDataState]);
  };

  const allProducts = products.map((item, index) => (
    <Product
      key={item.id}
      index={index}
      setToggleEdit={setToggleEdit}
      toggleEdit={toggleEdit}
      deleteIndex={deleteIndex}
      testIndex={testIndex}
      updateState={updateState}
      {...item}
    />
  ));

  // Sorting
  return (
    <div>
      <form>
        <label>
          Sort By:
          <select value={sorter.value} onChange={handleSelect}>
            <option value={"-"}>------------------------</option>
            <option value={"A_Z"}>Alphabetically A-Z</option>
            <option value={"Z_A"}>Alphabetically Z-A</option>
            <option value={"$$$_$"}>Price $$$-$</option>
            <option value={"$_$$$"}>Price $-$$$</option>
          </select>
        </label>
      </form>
      {allProducts}
    </div>
  );
};
