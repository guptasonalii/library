import React, { useEffect, useState } from "react";

const BookIssue = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5002/books");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const issueBook = async (id) => {
    try {
      const result = await fetch(`http://localhost:5002/user/issue/${id}`, {
        method: "post",
      });
      const data = await result.json();
      if (data) {
        alert("Book issued successfully");
        fetchProducts(); // Refresh the list after issuing
      }
    } catch (error) {
      console.error("Error issuing book:", error);
    }
  };

  const returnBook = async (id) => {
    try {
      const result = await fetch(`http://localhost:5002/user/issue/${id}`, {
        method: "post",
      });
      const data = await result.json();
      if (data) {
        alert("Book returned successfully");
        fetchProducts(); // Refresh the list after returning
      }
    } catch (error) {
      console.error("Error returning book:", error);
    }
  };

  return (
    <div className="products-list">
      <ul>
        <li>Name</li>
        <li>S.No</li>
        <li>Issue Date</li>
        <li>Return</li>
      </ul>
      {products.map((item) => (
        <ul key={item.userId}>
          <li>{item.name}</li>
          <li>{item.issueDate}</li>
          <li>
            <button onClick={() => issueBook(item.userId)}>Issue</button>
          </li>
          <li>
            <button onClick={() => returnBook(item.userId)}>Return</button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default BookIssue;
