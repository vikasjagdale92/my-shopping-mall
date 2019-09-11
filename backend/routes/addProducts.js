//addProducts.js

const express = require("express");
const router = express.Router();
const AddProducts = require("../models/AddProducts");
const ProductTypes = require("../models/ProductTypes");

router.post("/addProducts", (req, res) => {
  const {
    productName,
    productTitle,
    productShortDescription,
    productLongDescription,
    IsActive,
    productTypes,
    productPrize,
    productDiscount
  } = req.body;

  AddProducts.findOne({
    productName
  }).then(product => {
    if (product) {
      // const updateProduct = AddProducts.updateOne(
      //   {
      //     _id: req.body.id
      //   },
      //   {
      //     $set: {
      //       productName,
      //       productTitle,
      //       productShortDescription,
      //       productLongDescription,
      //       IsActive,
      //       productTypes,
      //       productPrize,
      //       productDiscount
      //     }
      //   }
      return res.status(400).json({
        productName: "Already Exist"
      });
      // return res.json(updateProduct);
    } else {
      const newProduct = new AddProducts({
        productName,
        productTitle,
        productShortDescription,
        productLongDescription,
        IsActive,
        productTypes,
        productPrize,
        productDiscount
      });
      newProduct.save().then(product => {
        return res.json(product);
      });
    }
  });
});

// add Product types

router.post("/addProductTypes", (req, res) => {
  const { productType } = req.body;
  ProductTypes.findOne({ productType: req.body.productType }).then(
    productTypeExist => {
      if (productTypeExist) {
        return res.status(400).json({
          productName: "Already exist"
        });
      } else {
        let productTypeAddUpdate = new ProductTypes({
          productType
        });
        productTypeAddUpdate.save().then(product => {
          res.json(product);
        });
      }
    }
  );
});

//getProductTypes

router.get("/getProductTypes", (req, res) => {
  ProductTypes.find({}).then(allProductType => {
    return res.json(allProductType);
  });
});

module.exports = router;
