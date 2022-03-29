const express = require("express");

const Product = require("../Models/productModel");
const router = express.Router();

router.get("/home/products", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

router.post("/home/products", async (req, res) => {
  const newProduct = new Product(req.body);
  const saveProduct = await newProduct.save();
  res.send(saveProduct);
});

router.delete("/home/products/:id", async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
});

module.exports = router;
