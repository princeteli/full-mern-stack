const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(process.env.DATA_BASE)
    .then(() => {
      console.log("connect Data Base");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connectToDB;
