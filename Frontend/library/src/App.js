
import Nav from "./Components/Nav";
import SignUp from "./Components/Signup";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import Private from "./Components/Private";
import Login from "./Components/Login";
import AddProduct from "./Components/AddBook";
import ProductList from "./Components/ProductList";
import UpdateProduct from "./Components/UpdateBook";
import BookIssue from "./Components/BookIssue";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<Private />}>
            <Route path="/" element={<ProductList/>} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update/:id" element={<UpdateProduct/>} />
            <Route path="/logout" element={<h1>Logout listing component</h1>} />
            <Route
              path="/book_issue"
              element={<BookIssue/>}
            />
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

