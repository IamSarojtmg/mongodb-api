const mongoose = require("mongoose");
require("dotenv").config();

let URI;

if (process.env.NODE_ENV === "test") {
  URI = process.env.MONGO_URI_TEST;
} else {
  URI = process.env.MONGO_URI_DEV || process.env.MONGO_URI;
}

const connectDB = async () => {
  try {
    await mongoose.connect(URI).then(() => {
      console.log("db connected");
    });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = connectDB;






















// const mongoose = require("mongoose");
// // require("dotenv").config();

// const mongoURI = process.env.NODE_ENV === "test";
// let URI;

// if (mongoURI) {
//   require("dotenv").config({
//     path: `${__dirname}/../.env.${process.env.NODE_ENV}`,
//   });
//   URI = process.env.MONGO_URI;
// } else {
//   require("dotenv").config();
//   URI = process.env.MONGO_URI;
// }

// console.log(URI, "first");
// const connectDB = async () => {
//   try {
//     await mongoose.connect(URI).then(() => {
//       console.log(URI);
//       console.log("db connected");
//     });
//   } catch (error) {
//     console.error(error.message);
//   }
// };

// module.exports = connectDB;