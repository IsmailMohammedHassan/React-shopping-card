const mongoose = require("mongoose");

const url = "mongodb://localhost/ShoppingDB";
const uriFromEnv = process.env.MONGO_URI;
function runDatabase() {
  mongoose
    .connect(uriFromEnv || url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to database ");
    })
    .catch((err) => {
      console.error(`Error connecting to the database. \n${err}`);
    });
}

module.exports = runDatabase;
