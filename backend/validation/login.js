const isEmpty = require("./is-empty");
const Validator = require("validator");

const validateLoginInput = data => {
  let errors = {};

  if (!Validator.isEmail(data.email)) {
    errors.loginEmail = "invalid Email address";
  }

  if (isEmpty(data.email)) {
    errors.loginEmail = "username is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 15 })) {
    errors.loginPassword = "Password must have 6 chars";
  }

  if (isEmpty(data.password)) {
    errors.loginPassword = "password is required";
  }
  console.log("errors ----> --------> ", errors);
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateLoginInput;
