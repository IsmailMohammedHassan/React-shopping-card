const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require("./Routes/Routes");
const orderRouter = require("./Routes/orderRoutes");
const runDatabase = require("./Config/db");
const app = express();

const port = 3002;
app.use(bodyParser.json());

// order Apis

app.use("/", productRouter);
app.use("/", orderRouter);

// RUN DATABASE

runDatabase();

app.listen(port, () => {
  console.log(`Successfully listen on port ${port}`);
});
