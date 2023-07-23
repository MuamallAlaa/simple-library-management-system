const { PrismaClient } = require("@prisma/client");
const prisma = require("../utilites/prisma");
const catchAysnc = require("../utilites/CatchAysnc");
const Apperror = require("../utilites/ErrorsHandler");
exports.GetAll = catchAysnc(async (req, res, next) => {
  // const array = Object.entries(proprties).map(([key, value]) => ({
  //   [key]: value,
  // }));

  const users = await prisma.user.findMany({
    include: {
      Books: {
        select: {
          Title: true,
        },
      },
    },
  });

  // const keys = Object.keys(proprties);
  // const vlues = Object.values(proprties);
  // const users = await prisma.user.findMany({
  //   where: {
  //     [keys[0]]: {
  //       equals: vlues[0],
  //     },
  //   },
  //   orderBy: [
  //     {
  //       Name: "asc", // Sort by price in ascending order
  //     },
  //   ],
  // });
  if (!users) return next(new Apperror("there is no users ", 404));
  res.status(201).json({
    status: "success",
    data: {
      users,
    },
  });
});
exports.GetUser = catchAysnc(async (req, res, next) => {
  const user = await prisma.user.findUnique({
    where: {
      Id: req.params.id,
    },
  });
  if (!user) return next(new Apperror("user not found ", 404));

  res.status(201).json({
    status: "success",
    data: {
      user,
    },
  });
});
exports.DeleteUser = catchAysnc(async (req, res, next) => {
  const users = await prisma.user.delete({
    where: {
      Id: req.params.id,
    },
  });
  res.status(204).json({
    status: "success",
    data: null,
  });
});
exports.UpdateUser = catchAysnc(async (req, res, next) => {
  const user = await prisma.user.update({
    where: {
      Id: req.params.id,
    },
    data: {
      Name: req.body.name,
      Email: req.body.email,
    },
  });
  res.status(200).json({
    status: "success",
    data: user,
  });
});
