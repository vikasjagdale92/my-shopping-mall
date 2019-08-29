const isEmpty = require("./is-empty");
const Validator = require("validator");

const validateLoginInput = data => {
  let errors = {};

  if (!Validator.isEmail(data.email)) {
    errors.email = "invalid Email address";
  }

  if (isEmpty(data.email)) {
    errors.email = "username is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 15 })) {
    errors.password = "Password must have 6 chars";
  }

  if (isEmpty(data.password)) {
    errors.password = "password is required";
  }
  console.log("errors ----> --------> ", errors);
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateLoginInput;
