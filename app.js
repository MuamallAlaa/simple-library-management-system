const express = require("express");
const doenv = require("dotenv");
// doenv.config({ path: "./config.env" });
doenv.config();

const app = express();
const cookieparser = require("cookie-parser");
const UsersRrouter = require("./routes/UsersRrouter");
const BooksRrouter = require("./routes/BooksRouter");
const CategoriesRouter = require("./routes/CategoriesRoute");
const ErrorControllers = require("./controllers/ErorrsControllers");

app.use(express.json());
app.use(cookieparser());

port = 9999;
app.get("/", (req, res, next) => {
  res.send("hello world ");
});
app.listen(port, () => console.log("the server start"));
app.use("/api/v1/users", UsersRrouter);
app.use("/api/v1/books", BooksRrouter);
app.use("/api/v1/Categories", CategoriesRouter);

// const prisma = new PrismaClient();
// async function main() {
//   const user = await prisma.user.findMany({
//     data: {
//       Name: "muamall",
//       Pssaword: "gttgtgtg",
//       Email: "muamfr@getMaxListeners.com",
//     },d
// );ddd
//   console.log(user);
// }
// main();
app.use("*", (req, res, next) => {
  //   const err = new Error(`this page does't exist ${req.originalUrl}`);
  //   err.status = "fail";
  //   err.statusCode = 404;
  //   next(err);
  // next(new AppError(`this page does't exist ${req.originalUrl}`, 404));
  res.render("this page does't exist");
});
app.use(ErrorControllers);
