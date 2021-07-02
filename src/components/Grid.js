import React, { useState } from "react";
const initOptions = {
  value: "",
};

export const Grid = (props) => {
  const [sorter, setSorter] = useState(initOptions);
  const { products, setProducts } = props;

  const handleSelect = (e) => {
    setSorter({
      value: e.target.value,
    });
    console.log(sorter);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const deleteButton = (e) => {
    e.target.indexOf();
  };

  console.log([...products])
  const deleteIndex = (index) => {
    const newDataState = [...products];
    newDataState.splice(index, 1);

    setProducts(() => ([...newDataState]));
  };

  console.log(props.products);
  const allProducts = props.products.map((p, index) => (
    <ul className="grid" key={index}>
      <li>{p.title}</li>
      <li>{p.description}</li>
      <li>{p.price}</li>
      <li>{p.quantity}</li>
      <li>
        <img height={"64px"} width={"60px"} src={p.imgUrl} alt={p.imgUrl} />
      </li>
      <hr />
      <button onClick={() => deleteIndex(index)}>Delete</button>
    </ul>
  ));
  return (
    <div>
      <form>
        <label>
          Sort By:
          <select value={sorter.value} onChange={handleSelect}>
            <option value={""}>------------------------</option>
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
