const express = require("express");
const Product = require("../db/modal/Books");

// desc: to get the book issued to the user
const getIssuedBookDetails = async (req, res) => {
  try {
    const bookId = req.params.id; // Extract book ID from the URL parameter
    

    const book = await Product.save({ userId: bookId });

    if (book) {
      res.json(book); // Send the book details as JSON response
    } else {
      res.status(404).json({ error: "Book not found" }); // Respond with an error message
    }
  } catch (error) {
    console.error("Error fetching book details:", error);
    res.status(500).json({ error: "Internal server error" }); // Handle unexpected errors
  }
};

module.exports = getIssuedBookDetails;
