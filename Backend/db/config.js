const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Library_Management")
.then(() => {
    console.log("database connection done")
})
.catch(() => {
    console.log("error in connection")
})