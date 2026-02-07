const mongoose = require('mongoose')

 function connectDb() {
  mongoose
    .connect(process.env.DATABASE)
    .then(() => {
      console.log("connect to mongoDB");
    })
    .catch(() => {
      console.log("Not connect to mongoDB");
    });
}

module.exports = connectDb