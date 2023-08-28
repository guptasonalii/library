const express = require("express");
const User = require("../db/modal/User")
const bcrypt = require("bcrypt");



const SignUpUser = async (req, resp) => {
    console.log(req.body);
try {
    const { name, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds
    console.log(hashedPassword);
    const user = new User({ name, email, password: hashedPassword });
    const result = await user.save();

    const resultWithoutPassword = { ...result.toObject(), password: undefined };
    resp.send(resultWithoutPassword);
  } catch (error) {
    console.error(error);
  }
}
module.exports = SignUpUser;
