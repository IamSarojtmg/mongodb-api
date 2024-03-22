const express = require("express");
const app = express();

const testing = require("./controller/test.controller");
const createProducts = require("./controller/postProducts.controller");
const connectDB = require("./models/db");
const {getProduct,getProductByID} = require("./controller/getProduct.controller");
// const getProductByID = require("./controller/getProductById.controller");

app.use(express.json()); //allows to post in json format(middleware)

app.get("/", testing);
app.post("/products", createProducts);
app.get('/products', getProduct)
app.get('/products/:Id',getProductByID)

const server = app.listen(3000, () => {
  console.log("Port is listening");
  connectDB()//for the development database connection
});
module.exports = server;
