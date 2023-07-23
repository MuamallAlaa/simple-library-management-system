const { PrismaClient, Prisma } = require("@prisma/client");
const AppError = require("../utilites/ErrorsHandler");
const CatchAysnc = require("../utilites/CatchAysnc");
const prisma = require("../utilites/prisma");
const bookfiltring = require("../utilites/filitering");

exports.GetAll = CatchAysnc(async (req, res, next) => {
  // let ob = {};
  // let arrorde = [];
  // let q = JSON.stringify(req.query).replace(/"sort":|"([^"]*)":/g, "$1", "");
  // q = q.replace(/=/g, ":");
  // q = q.replace(/[\{\}\"']/g, "");
  // let arry = q.split(",");
  // console.log(arry);
  // for (let i = 0; i < arry.length; i++) {
  //   let [keys, values] = arry[i].split(":");
  //   console.log(keys, values);
  //   ob[keys] = values;
  // }

  const books = await prisma.book.findMany(bookfiltring(req.query));
  res.status(201).json({
    status: "success",
    data: {
      books,
    },
  });
});
exports.GetBook = CatchAysnc(async (req, res, next) => {
  const book = await prisma.user.findUnique({
    where: {
      Id: req.params.id,
    },
  });
  res.status(201).json({
    status: "success",
    data: {
      book,
    },
  });
});
exports.DeleteBook = CatchAysnc(async (req, res, next) => {
  console.log(req.user.Id);
  let wh = {
    where: {
      Id: req.params.id,
    },
  };

  if (req.user.Role == "USER") {
    console.log(wh);
    wh = {
      where: {
        Id: req.params.id,
        AthorId: req.user.Id,
      },
    };
    console.log(wh);
  }

  const book = await prisma.book.deleteMany(wh);
  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.UpdateBook = CatchAysnc(async (req, res, next) => {
  let _author = req.body.author;
  let _athorid = req.body.athorid;
  if (req.user.Role == "USER") {
    _athorid = req.user.Id;
    _author = req.user.Name;
  }
  const book = await prisma.book.update({
    where: {
      Id: req.params.id,
    },

    data: {
      PublicationYear: req.body.publicationyear,
      Price: req.body.price,
      AthorId: _athorid,
      Img: req.body.img,
      Title: req.body.title,
      author: _author,
      Categories: {
        connect: req.body.categories,
      },
      Categories: {
        disconnect: req.body.deletecategories,
      },
    },
  });
  res.status(200).json({
    status: "success",
    data: book,
  });
});
exports.CreateBook = CatchAysnc(async (req, res, next) => {
  let _author = req.body.author;
  let _athorid = req.body.athorid;
  if (req.user.Role == "USER") {
    _athorid = req.user.Id;
    _author = req.user.Name;
  }
  const book = await prisma.book.create({
    data: {
      PublicationYear: req.body.publicationyear,
      Price: req.body.price,
      AthorId: _athorid,
      Img: req.body.img,
      Title: req.body.title,
      author: _author,
      Categories: {
        connect: req.body.categories,
      },
    },
  });
  res.status(200).json({
    status: "success",
    data: book,
  });
});
exports.GetmyBooks = CatchAysnc(async (req, res, next) => {
  const books = await prisma.book.findMany({
    where: {
      AthorId: req.user.Id,
    },
  });
  res.status(200).json({
    status: "success",
    data: books,
  });
});
