import React, { useState } from "react";
const { v4: uuidv4 } = require("uuid");

export const ProductForm = (props) => {
  const initTitle = {
    title: props.title || "",
  };

  const initDescription = {
    description: props.description || "",
  };

  const initPrice = {
    price: props.price || "",
  };

  const initQuantity = {
    quantity: props.quantity || "",
  };

  const initImgUrl = {
    imgUrl: props.imgUrl || "",
  };

  const [title, setTitle] = useState(initTitle);
  const [description, setDescription] = useState(initDescription);
  const [price, setPrice] = useState(initPrice);
  const [quantity, setQuantity] = useState(initQuantity);
  const [imgUrl, setImgUrl] = useState(initImgUrl);

  const { products, setProducts, toggleEdit } = props;

  const setInit = () => {
    setTitle(initTitle);
    setDescription(initDescription);
    setPrice(initPrice);
    setQuantity(initQuantity);
    setImgUrl(initImgUrl);
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  };

  console.log(typeof products);

  const addProductRow = () => {
    const model = {
      title,
      description,
      price,
      quantity,
      imgUrl,
      id: uuidv4(),
    };

    setProducts((prev) => [...prev, model]);
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setInputs((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  const handleSumit = (e) => {
    e.preventDefault();
    addProductRow();
    setInit();
  };

  return (
    <div className="grid-form">
      <form>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title.title}
            onChange={(e) => {
              const { name, value } = e.target;
              setTitle((prev) => ({
                ...prev,
                [name]: value,
              }));
            }}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={description.description}
            onChange={(e) => {
              const { name, value } = e.target;
              setDescription((prev) => ({
                ...prev,
                [name]: value,
              }));
            }}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            min="0"
            value={price.price}
            onChange={(e) => {
              const { name, value } = e.target;
              setPrice((prev) => ({
                ...prev,
                [name]: value,
              }));
            }}
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            min="0"
            value={quantity.quantity}
            onChange={(e) => {
              const { name, value } = e.target;
              setQuantity((prev) => ({
                ...prev,
                [name]: value,
              }));
            }}
          />
        </label>
        <label>
          Img Url:
          <input
            type="text"
            name="imgUrl"
            value={imgUrl.imgUrl}
            onChange={(e) => {
              const { name, value } = e.target;
              setImgUrl((prev) => ({
                ...prev,
                [name]: value,
              }));
            }}
          />
        </label>
        {!toggleEdit ? <button onClick={handleSumit}>Submit</button> : <></>}
      </form>
    </div>
  );
};
