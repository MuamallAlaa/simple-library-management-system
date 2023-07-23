const bcrypt = require("bcrypt");

const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();
const CatchAysnc = require("./CatchAysnc");
prisma.$use(async (params, next) => {
  if (params.model === "user") {
    const { data } = params.args;
    console.log(data);

    if (params.action === "create") {
      if (data.Password) {
        const HashedPassword = await bcrypt.hash(data.Password, 14);

        data.Password = HashedPassword;
      }
    }
    //   if (data.Password) {
    //     const HashedPassword = await bcrypt.hash(data.Password, 14);

    //     data.Password = HashedPassword;
    //   }
  }

  return next(params);
});
module.exports = prisma;
