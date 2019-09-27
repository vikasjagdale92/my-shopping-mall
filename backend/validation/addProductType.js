const isEmpty = require("./is-empty");
const Validator = require("validator");

const validateAddProductTypeInputs = data => {
  const errors = {};
  const { productType } = data;
  if (!Validator.isLength(productType, { min: 3, max: 30 })) {
    errors.productType = "product type must between 3 & 30 characters";
  }
  if (isEmpty(productType)) {
    errors.productType = "product type is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateAddProductTypeInputs;
