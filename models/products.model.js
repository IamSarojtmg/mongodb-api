const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "enter product name"],
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

productSchema.pre("save", function (next) {
  if (this.date) {
    const utcString = this.date.toISOString();
    const localDate = new Date(utcString);
    const offset = localDate.getTimezoneOffset();
    const offsetHours = Math.abs(Math.floor(offset / 60))
      .toString()
      .padStart(2, "0");
    const offsetMinutes = Math.abs(offset % 60)
      .toString()
      .padStart(2, "0");
    const sign = offset > 0 ? "-" : "+";

    const formattedDate = `${localDate
      .toISOString()
      .slice(0, 19)}${sign}${offsetHours}:${offsetMinutes}`;

    this.date = formattedDate;
  }
  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

// //creating the object to store data
// const mongoose = require("mongoose");

// const productSchema = mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "enter product name"],
//     },
//     quantity: {
//       type: Number,
//       required: true,
//       default: 0,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     image: {
//       type: String,
//       required: false,
//     },
//   },
//   {
//     timestamp: true,
//   }
// );

// const Product = mongoose.model("Product", productSchema);

// module.exports = Product;
