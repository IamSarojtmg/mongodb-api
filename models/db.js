const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();


let URI = process.env.MONGO_URI

// if (process.env.NODE_ENV === "test") {
//   URI = process.env.MONGO_URI_TEST;
// } else {
//   URI = process.env.MONGO_URI_DEV || process.env.MONGO_URI;
// }



const connectDB = ()=> mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected!');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

// const connectDB = async () => {
//   try {
//     await mongoose.connect(URI).then(() => {
//       console.log("db connected");
//     });
//   } catch (error) {
//     console.error(error.message);
//   }
// };

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