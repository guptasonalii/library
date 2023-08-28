const express = require("express");
const Product = require("../db/modal/Books");
const Updateproducts = async (req, resp) => {
    console.log(req.body)
    let result=await Product.updateOne(
        {
            _id:req.params.id
        },
        {
            $set:req.body
        }
    );
    resp.send(result)
}

    module.exports=Updateproducts;