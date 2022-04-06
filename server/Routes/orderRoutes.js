const express = require("express");

const Order = require("../Models/orderModel");
const router = express.Router();

router.get("/home/orders", async (req, res) => {
  const orders = await Order.find();
  res.send(orders);
});

router.post("/home/orders", async (req, res) => {
  const order = await new Order(req.body).save();
  res.send(order);
});

router.delete("/home/orders/:ip", async (req, res) => {
  const deletedOrder = await Order.findByIdAndDelete(req.params.id);
  res.send(deletedOrder);
});

module.exports = router;
