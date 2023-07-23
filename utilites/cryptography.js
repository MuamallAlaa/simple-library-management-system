const bcrypt = require("bcrypt");
const crypto = require("crypto");

exports.IsPssCorrect = async (plantext, hashed) => {
  return await bcrypt.compare(plantext, hashed);
};
