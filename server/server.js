require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require("./Routes/Routes");
const orderRouter = require("./Routes/orderRoutes");
const runDatabase = require("./Config/db");

// console.log(process.env.NODE_ENV);
const app = express();

const port = 3002;
const portFromEnv = process.env.PORT;
app.use(bodyParser.json());

runDatabase();
// order Apis

app.use("/", productRouter);
app.use("/", orderRouter);

// RUN DATABASE

app.listen(portFromEnv || port, () => {
  console.log(`Successfully Listen on port ${port}`);
});
