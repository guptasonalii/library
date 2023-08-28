import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let result = await fetch("http://localhost:5002/user/books");
    result = await result.json();
    setProducts(result);
  };
  const deleteProduct = async (id) => {
    // console.log(id)
    let result = await fetch(`http://localhost:5002/user/book/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      alert("record is deleted");
    }
  };
  console.warn("products", products);
  const searchHandle = async (event) => {
    console.log(event.target.value);
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5002/user/search/${key}`);
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    } else {
      getProducts();
    }
  };

  return (
    <div className="products-list">
      <h3>Book List</h3>
      <input
        type="text"
        className="search"
        placeholder="Search Books.."
        onChange={searchHandle}
      />
      <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Available Books</li>
        {/* <li>Category</li>
        <li>Company</li> */}
        <li>Operation</li>
      </ul>

      {products.length > 0 ? (
        products.map((item, index) => (
          <ul key={item._id}>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>${item.price}</li>
            <li>{item.available_books}</li>
            {/* <li>{item.category}</li>
          // <li>{item.company}</li> */}
            <li>
              <button onClick={() => deleteProduct(item._id)}>Delete</button>
              <Link to={"/update/" + item._id}>Update</Link>
              <Link to="/book_issue">Issue</Link>
            </li>
          </ul>
        ))
      ) : (
        <h1 className="result">No Result Found</h1>
      )}
    </div>
  );
};

export default ProductList;
