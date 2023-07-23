const express = require("express");
const router = express.Router();
const AuthControllers = require("../controllers/AuthControllers");
const UsersControllers = require("../controllers/UsersControllers");
const { check, validationResult } = require("express-validator");
const validat = require("../utilites/validation");
const cryptography = require("../utilites/cryptography");
router.route("/singin").post(AuthControllers.signin);

router
  .route("/singup")
  .post(
    validat.signupValidation,
    validat.validationResult,
    AuthControllers.signup
  );
router.route("/").get(UsersControllers.GetAll);

router
  .route("/:id")
  .get(UsersControllers.GetUser)
  .delete(UsersControllers.DeleteUser)
  .patch(UsersControllers.UpdateUser);

module.exports = router;
