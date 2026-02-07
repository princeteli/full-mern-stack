import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { captainDataContext } from "../context/CaptainContext";

const Captainlogin = () => {
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(captainDataContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password: password,
    };
    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captain
    );
    if (res.status == 200) {
      const data = res.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-3"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s"
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
          join a fleet? {"  "}
          <Link to="/captain-signup" className="text-blue-600 hover:underline">
            Register as a Captain
          </Link>
        </p>
      </div>

      <div>
        <Link
          to="/login"
          className="bg-[#d5622d] flex iems-center justify-center text-white font-bold rounded w-full px-4 py-2 mb-5"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default Captainlogin;
