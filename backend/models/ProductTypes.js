//productTypes.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productTypes = new Schema({
  productType: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("productTypes", productTypes);
