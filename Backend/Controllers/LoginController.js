const express = require("express");
const User = require("../db/modal/User")
const bcrypt = require("bcrypt");



const getUser = async (req, resp) => {
    console.log(req.body);
    try {
        console.log(req.body);
        if (req.body.password && req.body.email) {
          const { email, password } = req.body;
    
          let user = await User.findOne({ email });
    
          if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
              resp.send(user);
            } else {
              resp.send("Invalid password");
            }
          } else {
            resp.send("User not found");
          }
        } else {
          resp.send("Invalid request");
        }
      } catch (error) {
        console.error(error);
      }
    }
    module.exports=getUser;

