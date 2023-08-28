const express = require("express");
const Product = require("../db/modal/Books");
const AddProduct = async (req, resp) => {
    console.log(req.body);
    let product=new Product(req.body)
    let result=await product.save()
    resp.send(result);
}
module.exports=AddProduct;