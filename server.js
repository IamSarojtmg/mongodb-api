const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config(); //loading .env



const testing = require("./controller/test.controller");
const createProducts = require("./controller/postProducts.controller");

app.use(express.json()); //allows to post in json format(middleware)

app.get("/", testing);
app.post("/products", createProducts);

const server = app.listen(3000, () => {
  console.log("Port is listening");
});
module.exports = server;
