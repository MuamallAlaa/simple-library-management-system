const { check, validationResult } = require("express-validator");
const AppError = require("../utilites/ErrorsHandler");
exports.validationResult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return next(new AppError(errors.errors[0].msg));
  next();
};
exports.signupValidation = [
  check("name", "Name is requied").not().isEmpty(),
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password must be 6 or more characters").isLength({
    min: 6,
  }),
  check("Confirm_Password")
    .notEmpty()
    .withMessage("Confirm Password should not be empty")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password confirmation does not match with  password");
      }
      return true;
    }),
];

exports.loginValidation = [
  check("email", "Please include a valid email")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
  check("password", "Password must be 6 or more characters").isLength({
    min: 6,
  }),
];
module.exports;
