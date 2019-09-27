//addProducts.js

const express = require("express");
const router = express.Router();
const AddProducts = require("../models/AddProducts");
const ProductTypes = require("../models/ProductTypes");
const validateAddProductInputs = require("../validation/addProducts");
const validateAddProductTypeInputs = require("../validation/addProductType");

router.post("/addProducts", (req, res) => {
  const {
    productName,
    productTitle,
    productShortDescription,
    productLongDescription,
    IsActive,
    productType,
    productPrize,
    productDiscount
  } = req.body;
  // console.log(req.body);

  const { errors, isValid } = validateAddProductInputs(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

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
        productType,
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
  const { errors, isValid } = validateAddProductTypeInputs(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
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

//product list

router.post("/productList", (req, res) => {
  AddProducts.find({}).then(allProduct => {
    return res.json(allProduct);
  });
});

module.exports = router;
