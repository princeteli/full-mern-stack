let express = require('express');
const bcrypt = require('bcrypt')
const userModel = require('../models/user.model');
let route = express.Router()


route.post("/signup", async (req, res) => {
  const { name, email, password } = req.body

  let existUser = await userModel.findOne({ email })
  if (existUser) {
    return res.send("user already exist ")
  }
  if (password.length < 6) {
    return res.send("password must be 6 characters ")
  }

  const hashPassword = await bcrypt.hash(password, 10)


  const newUser = await userModel.create({
    name, email, password: hashPassword
  })

  return res.send({ newUser })
})

route.post("/login", async (req, res) => {
  const { email, password } = req.body

  let userExist = await userModel.findOne({ email })

  if (!userExist) {
    return res.send("user these not exist please signup ")
  }

  let isMatch = await bcrypt.compare(password, userExist.password)

  if (!isMatch) {
    return res.send("mail or password wrong hai ")
  }

  res.send({ isMatch })
})

module.exports = route