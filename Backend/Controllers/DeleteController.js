const express = require("express");
const Product = require("../db/modal/Books");
const DeleteUser = async (req, resp) => {
    // console.log(req.body)
//   resp.send(req.params.id);
  const result=await Product.deleteOne({_id:req.params.id})
//   resp.send(result);
  if(resp.deletedCount==1){
    resp.send("successfull deleted")
  }
  else{
    resp.send("Not Found")
  }
  

}
module.exports=DeleteUser;