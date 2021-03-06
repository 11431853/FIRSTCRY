const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
const bodyParser = require("body-parser");



const connect = require("./configs/db")
const bagController = require("./controllers/bag.controllers.js");

const productController = require("./controllers/product.controller");
const productDetailsController = require("./controllers/productDetails.controller");



app.set("view engine", 'ejs');
// app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static(path.join(__dirname, "/public")))


app.use("/products", productController);
app.use("/products2", productDetailsController);

app.listen(4245, async () => {
    await connect();
    console.log("baggg")
    console.log("server is running on port 4000")
});