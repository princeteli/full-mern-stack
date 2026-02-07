import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UsersLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );

    if (res.status === 200) {
      setUser(res.data.user);
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    }

    setEmail("");
    setPassword("");
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
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            type="email"
            placeholder="Enter email"
            className="bg-[#eeeeee] border rounded w-full px-4 py-2 text-lg placeholder:text-base mb-7"
          />

          <h3 className="text-lg font-medium mb-2">What's your password</h3>
          <input
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter password"
            className="bg-[#eeeeee] border rounded w-full px-4 py-2 text-lg placeholder:text-base mb-7"
          />

          <button
            type="submit"
            className="bg-[#111] text-white font-bold rounded w-full px-4 py-2 mb-3"
          >
            Login
          </button>
        </form>

        <p className="text-center">
          New here?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Create new account
          </Link>
        </p>
      </div>

      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] flex iems-center justify-center text-white font-bold rounded w-full px-4 py-2 mb-5"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UsersLogin;
