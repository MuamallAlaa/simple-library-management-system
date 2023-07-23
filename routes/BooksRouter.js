const express = require("express");
const router = express.Router();
const AuthControllers = require("../controllers/AuthControllers");
const BooksControllers = require("../controllers/BooksControllers");
router
  .route("/mybooks")
  .get(AuthControllers.Protected, BooksControllers.GetmyBooks);
router
  .route("/")
  .post(
    AuthControllers.Protected,
    AuthControllers.roles("USER", "ADMIN"),
    BooksControllers.CreateBook
  )
  .get(BooksControllers.GetAll);
router
  .route("/:id")
  .patch(
    AuthControllers.Protected,
    AuthControllers.roles("USER", "ADMIN"),
    BooksControllers.UpdateBook
  )
  .delete(
    AuthControllers.Protected,
    AuthControllers.roles("USER", "ADMIN"),
    BooksControllers.DeleteBook
  );
//  router
//   .route("/:id")
//   .get(UsersControllers.GetUser)
//   .delete(UsersControllers.DeleteUser)
//   .patch(UsersControllers.UpdateUser);

module.exports = router;
