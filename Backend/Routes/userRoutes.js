const router = require("express").Router();
const getUser = require("../Controllers/LoginController");
const  SignUpUser  = require("../Controllers/SignUpController");
const AddProduct = require("../Controllers/BookController");
const ProductList = require("../Controllers/BookListController");
const DeleteUser = require("../Controllers/DeleteController");
const SingleUpdateproducts = require("../Controllers/SingleUpdateController");
const UpdateProducts= require("../Controllers/UpdateController");
const SearchBook=require("../Controllers/SearchController");
const getIssuedBookDetails = require("../Controllers/BookIssued");

// defining routes
router.route("/signup").post(SignUpUser);
router.route("/login").post(getUser);
router.route("/add-book").post(AddProduct);
router.route("/books").get(ProductList);
router.route("/book/:id").delete(DeleteUser).get(SingleUpdateproducts).put(UpdateProducts)
// router.route("/book/:id").get(SingleUpdateproducts)
// router.route("/book/:id").put(UpdateProducts)
router.route("/search/:key").get(SearchBook);
router.route("/issue/:id").post(getIssuedBookDetails);

module.exports = router;
