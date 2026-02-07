import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { captainDataContext } from "../context/CaptainContext";
import {useNavigate} from 'react-router-dom'
import axios from "axios";

const CaptainSignup = () => {

const navigate =useNavigate()


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = useContext(captainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };


    const res= await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

if(res.status==201){
  const data= res.data
  setCaptain(data.captain)
  localStorage.setItem('token',data.token)
  navigate('/captain-home')
}

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleCapacity("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleType("");
  };

  return (
    <div className="py-5 px-5 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-5"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s"
          alt="Logo"
        />

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your captain name</h3>
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

          <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
          <div className="flex gap-4 mb-5">
            <input
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
              required
              type="text"
              placeholder="Vehicle Color"
              className="bg-[#eeeeee] w-1/2 border rounded  px-4 py-2 text-lg placeholder:text-base "
            />
            <input
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
              type="text"
              placeholder="Vehicle Plate "
              className="bg-[#eeeeee] w-1/2 border rounded  px-4 py-2 text-lg placeholder:text-base "
            />
          </div>

          <div className="flex gap-4 mb-5">
            <input
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
              required
              type="number"
              placeholder="vehicle Capacity"
              className="bg-[#eeeeee] w-1/2 border rounded  px-4 py-2 text-lg placeholder:text-base "
            />
            <select
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
              type="text"
              placeholder="vehicle Type "
              className="bg-[#eeeeee] w-1/2 border rounded  px-4 py-2 text-lg placeholder:text-base "
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-[#111] text-white font-bold rounded w-full px-4 py-2 mb-3"
          >
            Create Captain Account
          </button>
        </form>

        <p className="text-center">
          Already have a Aaccount?{" "}
          <Link to="/captain-login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>

      <div>
        <p className="text-[12px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <b>
            <i>
              <u>Google Privacy Policy</u>
            </i>
          </b>{" "}
          and
          <b>
            <i>
              <u> Terms of Service apply</u>
            </i>
          </b>
          .
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
