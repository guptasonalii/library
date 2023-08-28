const express = require("express");
const Product = require("../db/modal/Books");
const SearchBook = async (req, resp) => {
  console.log(req.body);
  let result = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { price: { $regex: req.params.key } },
    ],
  });
  resp.send(result);
};

module.exports = SearchBook;
