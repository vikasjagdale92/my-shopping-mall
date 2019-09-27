const isEmpty = require("./is-empty");
const Validator = require("validator");

const validateAddProductInputs = data => {
  const errors = {};
  const {
    productName,
    productTitle,
    productShortDescription,
    productLongDescription,
    IsActive,
    productTypes,
    productPrize,
    productDiscount
  } = data;
  if (!Validator.isLength(productName, { min: 3, max: 30 })) {
    errors.productName = "product name must between 3 & 30 characters";
  }
  if (isEmpty(productName)) {
    errors.productName = "product name is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateAddProductInputs;
