import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style.css";
import logo from '../Images/logo.png'

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    // console.warn("apple")
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <>
    <div className="style">
        <h1>Library Management</h1>
    </div>
    <div>
      <img  className="logo" src={logo} alt="logo"/>
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Books</Link>
          </li>

          <li>
            <Link to="/add">Add Book</Link>
          </li>
          <li>
            <Link to="/update/:id">Update Book</Link>
          </li>
          <li>
            <Link to="/book_issue">Book Issued</Link>
          </li>
          <li>
            <Link onClick={logout} to="/login">
              Logout({JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
    </>
    
  );
};

export default Nav;

