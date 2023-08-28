const mongoose = require("mongoose");
const BookSchema=new mongoose.Schema({
    SNo: String,
    name: String,
    price: String,
    userId:String,
    available_books:'String',
    IssueDate:'String',
    Issue:'String',
    Return:'String'

})
module.exports=mongoose.model("books",BookSchema)