const userModel = require("../models/user.model");

module.exports.createUser = async ({ firstname, lastname, email, password }) => {
  if (!firstname || !email || !password) {
    throw new Error("All fields are required"); // ✅ Capital "E"
  }

  const user = await userModel.create({ // ✅ Await here
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });

  return user;
};
