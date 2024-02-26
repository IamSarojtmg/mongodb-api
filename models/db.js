const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.NODE_ENV === "test" ? process.env.TEST_MONGO_URI : process.env.MONGO_URI;
console.log(mongoURI);

mongoose.connect(mongoURI)
    .then(() => {
        console.log("db connected");
    })
    .catch((error) => {
        console.error(error.message);
    });