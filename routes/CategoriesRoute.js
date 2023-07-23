const express = require("express");
const router = express.Router();
const AuthControllers = require("../controllers/AuthControllers");
const CategoryControllers = require("../controllers/CategoryControllers");

router
  .route("/")
  .post(AuthControllers.Protected, AuthControllers.roles("ADMIN"))
  .get(CategoryControllers.GetAll);
module.exports = router;
