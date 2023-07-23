const AppError = require("../utilites/ErrorsHandler");
const CatchAysnc = require("../utilites/CatchAysnc");

const prisma = require("../utilites/prisma");
exports.GetAll = CatchAysnc(async (req, res, next) => {
  let wh = {
    include: {
      Books: {
        select: {
          Title: true,
          author: true,
        },
      },
    },
  };
  if (req.query.name) {
    wh = {
      where: {
        name: req.query.name,
      },
      include: {
        Books: {
          select: {
            Title: true,
            author: true,
          },
        },
      },
    };
  }

  const categories = await prisma.category.findMany(wh);
  res.status(201).json({
    status: "success",
    data: {
      categories,
    },
  });
});
