import connectDb from "@/src/config/db";
import bcrypt from "bcrypt";
import userModel from "@/src/model/user.model";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
  try {
    let { name, email, password } = await request.json()
    await connectDb()
    let existUser = await userModel.findOne({ email })
    if (existUser) {
      return NextResponse.json({ message: "user already exist." }, { status: 400 })
    }
    if (password.length < 6) {
      return NextResponse.json({ message: "password must be 6 characters." }, { status: 400 })
    }
    let hashPassword = await bcrypt.hash(password, 10)

    let createUser = await userModel.create({
      name, email, password: hashPassword

    })
      return NextResponse.json({createUser}, { status: 200 })


  } catch (error) {
    throw error
  }
}