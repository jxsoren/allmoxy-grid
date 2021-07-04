import React, { useState } from "react";
import { ProductForm } from "./ProductForm.js";

export const Product = (props) => {
  const [toggleEdit, setToggleEdit] = useState(false);

  const {
    title,
    description,
    price,
    quantity,
    imgUrl,
    deleteIndex,
    handleEdit,
    index,
    testIndex,
    updateState,
  } = props;

  console.log(index);

  const payload = {
    title,
    description,
    price,
    quantity,
    imgUrl,
  };

  return (
    <div>
      {!toggleEdit ? (
        <div className="grid">
          <h3>{title}</h3>
          <h3>{description}</h3>
          <h3>{price}</h3>
          <h3>{quantity}</h3>
          <h3>
            <img height={"64px"} width={"60px"} src={imgUrl} alt={imgUrl} />
          </h3>
          <hr />
          <button onClick={() => deleteIndex(index)}>Delete</button>
          <button onClick={() => setToggleEdit((prev) => !prev)}>Edit</button>
        </div>
      ) : (
        <>
          <ProductForm
            toggleEdit={toggleEdit}
            title={title}
            description={description}
            price={price}
            quantity={quantity}
            imgUrl={imgUrl}
            handleEdit={handleEdit}
          />
          <button onClick={() => setToggleEdit((prev) => !prev)}>Close</button>
          <button onClick={() => updateState(index)}>Test Index</button>

          {/* <button onClick={handleEdit(index)}>Submit Changes</button> */}
        </>
      )}
    </div>
  );
};
