import React, { useState } from "react";

export const GridForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const { products, setProducts } = props;

  const setInit = () => {
    setTitle("");
    setDescription("");
    setPrice(0);
    setQuantity(0);
    setImgUrl("");
  };

  console.log(typeof products);

  const addProductRow = () => {
    const model = {
      title,
      description,
      price,
      quantity,
      imgUrl,
    };

    setProducts((prev) => ({
      products: [...prev, model],
    }));
  };

  const handleSumit = (e) => {
    e.preventDefault();
    addProductRow();
    setInit();
  };

  console.log(`Title: ${title}, Description: ${description}, Price: ${price}, Quantity:${quantity}, imgUrl:
 ${imgUrl}`);

  return (
    <div className="grid-form">
      <form onSubmit={handleSumit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title.title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={description.description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            min="0"
            value={price.price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            min="0"
            value={quantity.quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <label>
          Img Url:
          <input
            type="text"
            name="imgUrl"
            value={imgUrl.imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
