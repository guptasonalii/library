import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const[available_books,setAvailable_books]=useState("");

  // const [category, setCategory] = useState("");
  // const [company, setCompany] = useState("");

  const params = useParams();
  const navigate = useNavigate();
  //   const [error, setError] = useState("false");
  useEffect(() => {
    console.log(params);
    getupdateProduct();
  },[]);
  const getupdateProduct = async () => {
    let result = await fetch(`http://localhost:5002/user/book/${params.id}`);
    result = await result.json();
    // console.warn(result)
    setName(result.name);
    setPrice(result.price);
    setAvailable_books(result.available_books);
    // setCategory(result.category)
    // setCompany(result.company)
  };
  
  const updateProduct = async () => {
    console.log(name, price);
    let result = await fetch(`http://localhost:5002/user/book/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, price ,available_books}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    navigate("/");
  };

  return (
    <div className="product">
      <h1>Update Book</h1>
      <input
        name="productname"
        type="text"
        placeholder="Enter Product Name"
        className="inputbox"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Product Price"
        className="inputbox"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
<input
        type="text"
        placeholder="Available Books"
        className="inputbox"
        value={available_books}
        onChange={(e) => setAvailable_books(e.target.value)}
      />

      {/* <input
        type="text"
        placeholder="Enter Product Category"
        className="inputbox"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      

      <input
        type="text"
        placeholder="Enter Product Company"
        className="inputbox"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      */}

      <button onClick={updateProduct}> Update Book</button>
    </div>
  );
};

export default UpdateProduct;
