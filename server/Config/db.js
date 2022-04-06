const mongoose = require("mongoose");

const url = "mongodb://localhost/ShoppingDB";

function runDatabase() {
  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Connected to database ");
    })
    .catch((err) => {
      console.error(`Error connecting to the database. \n${err}`);
    });
}

module.exports = runDatabase;
