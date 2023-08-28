const express = require("express");
const Product = require("../db/modal/Books");
const ProductList = async (req, resp) => {
  console.log(req.body);
  let products = await Product.find();
  if (products.length > 0) {
    resp.send(products);
  } else {
    resp.send({ result: "no products found" });
  }
};
module.exports = ProductList;
