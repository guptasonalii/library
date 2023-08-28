import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState("false");
  const handleSubmit = async () => {
    console.log(!name);
    if (!name || !price ) {
      setError(true);
      return false;
    }

    const userId = JSON.parse(localStorage.getItem("user"))._id;
    // console.log(userId)
    let result = await fetch("http://localhost:5002/user/add-book", {
      method: "post",
      body: JSON.stringify({ name, price,  userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
  };

  return (
    <div className="product">
      <h1>Add Book</h1>
      <input
        type="text"
        placeholder="Enter Product Name"
        className="inputbox"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {error && !name && (
        <span className="invalid-input">Enter valid Name</span>
      )}
      <input
        type="text"
        placeholder="Enter Product Price"
        className="inputbox"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      {error && !price && (
        <span className="invalid-input">Enter valid price</span>
      )}

      {/* <input
        type="text"
        placeholder="Enter Product Category"
        className="inputbox"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      {error && !category && (
        <span className="invalid-input">Enter valid category</span>
      )} */}

      {/* <input
        type="text"
        placeholder="Enter Product Company"
        className="inputbox"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      {error && !company && (
        <span className="invalid-input">Enter valid company</span>
      )} */}

      <button onClick={handleSubmit}> Add Book</button>
    </div>
  );
};

export default AddProduct;
