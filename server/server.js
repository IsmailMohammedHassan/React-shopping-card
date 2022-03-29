const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./Routes/Routes");
const app = express();

const port = 3002;
app.use(bodyParser.json());

const url = "mongodb://localhost/ShoppingDB";

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
app.use("/", router);
app.listen(port, () => {
  console.log(`Successfully listen on port ${port}`);
});
