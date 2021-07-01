import React, { useState } from "react";
const initOptions = [];

export const Grid = (props) => {
  const [sorter, setSorter] = useState(initOptions);

  const allProducts = props.products.map((p) => (
    <ul className="grid">
      <li>{p.title}</li>
      <li>{p.description}</li>
      <li>{p.price}</li>
      <li>{p.quantity}</li>
      <li>
        <img height={"64px"} width={"60px"} src={p.imgUrl} alt={p.imgUrl} />
      </li>
      <hr />
    </ul>
  ));
  return (
    <div>
      <form>
        <label>
          Sort By:
          <select>
            <option value="alphabetically">Alphabetically A-Z</option>
            <option value="alphabeticallyReverse">Alphabetically Z-A</option>
            <option value="price">Price $$$-$</option>
            <option value="priceReverse">Price $-$$$</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
      {allProducts}
    </div>
  );
};
