import React, { useContext, useState } from "react";
import { data, Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import {UserDataContext}  from '../context/UserContext'


const UsersSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

const {user ,setUser}= useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)

    if(res.status === 201){
      setUserData(res.data)

      setUser(data.user)
      localStorage.setItem("token", res.data.token);

      navigate('/home')
    }
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");

  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-5"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSireKKFNn1fhA_magjdqzIsIvvvJqH5ccE-A&s"
          alt="Logo"
        />

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className="flex gap-4 mb-5">
            <input
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              required
              type="text"
              placeholder="First name"
              className="bg-[#eeeeee] w-1/2 border rounded  px-4 py-2 text-lg placeholder:text-base "
            />
            <input
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              type="text"
              placeholder="Last name "
              className="bg-[#eeeeee] w-1/2 border rounded  px-4 py-2 text-lg placeholder:text-base "
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            type="email"
            placeholder="Enter email"
            className="bg-[#eeeeee] border rounded w-full px-4 py-2 text-lg placeholder:text-base mb-5"
          />

          <h3 className="text-lg font-medium mb-2">What's your password</h3>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            type="password"
            placeholder="Enter password"
            className="bg-[#eeeeee] border rounded w-full px-4 py-2 text-lg placeholder:text-base mb-5"
          />

          <button
            type="submit"
            className="bg-[#111] text-white font-bold rounded w-full px-4 py-2 mb-3"
          >
            Create Account
          </button>
        </form>

        <p className="text-center">
          Already have a Aaccount?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>

      <div>
        <p className="text-[12px] leading-tight">
          By proceeding, you consent to get calls, WhatsApp or SMS messages,
          including by automated means, from Uber and its affiliates to the
          number provided.
        </p>
      </div>
    </div>
  );
};

export default UsersSignup;
