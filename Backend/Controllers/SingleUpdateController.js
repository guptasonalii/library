const express = require("express");
const Product = require("../db/modal/Books");
const SingleUpdateproducts = async (req, resp) => {
    console.log(req.body)
    let result=await Product.findOne({_id:req.params.id});
    // resp.send(result)
    if(result){
        resp.send(result)
    }else{
        resp.send({result:"no records found"})
    }
}
module.exports=SingleUpdateproducts;