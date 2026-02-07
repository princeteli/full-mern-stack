const mongoose = require("mongoose");

const connection = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("connect to mongoDB");
    })
    .catch(() => {
      console.log("Not connect to mongoDB");
    });
};

module.exports=connection