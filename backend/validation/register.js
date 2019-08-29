// register.js

const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  console.log("data.password_confirm -----> ", data.password_confirm);
  //   data.name = !isEmpty(data.name) ? data.name : "";
  //   console.log("validation register js---> ", !isEmpty(data.name));
  //   data.email = !isEmpty(data.email) ? data.email : "";
  //   data.mobile = !isEmpty(data.mobile) ? data.mobile : "";
  //   data.password = !isEmpty(data.password) ? data.password : "";
  //   data.password_confirm = !isEmpty(data.password_confirm) ? password_confirm : "";
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "name must be between 2 to 30 chars";
  }

  if (isEmpty(data.name)) {
    errors.name = "Name is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (isEmpty(data.email)) {
    errors.email = "Email is required";
  }

  if (!Validator.isNumeric(data.mobile)) {
    errors.mobile = "Mobile number is invalid";
  }

  if (isEmpty(data.mobile)) {
    errors.mobile = "Mobile number is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 15 })) {
    errors.password = "Password must have 6 chars";
  }

  if (isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  if (!Validator.isLength(data.password_confirm, { min: 6, max: 30 })) {
    errors.password_confirm = "Password must have 6 chars";
  }

  if (!Validator.equals(data.password, data.password_confirm)) {
    errors.password_confirm = "Password and Confirm Password must match";
  }

  if (isEmpty(data.password_confirm)) {
    errors.password_confirm = "Password is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
