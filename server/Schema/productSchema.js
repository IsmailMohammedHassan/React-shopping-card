const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: String,
  title: String,
  imageUrl: String,
  disc: String,
  price: Number,
  color: [String],
});

module.exports = productSchema;
