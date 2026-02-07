import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitForDriver from "../components/WaitForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundPanelRef = useRef(null);
  const waitForDriverRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmRidePanelOpen, setConfirmRidePanelOpen] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitForDriver, setWaitForDriver] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          opacity: 1,
          padding: 25,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          opacity: 0,
          padding: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanelOpen)
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      else gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }, [vehiclePanelOpen]);

  useGSAP(
    function () {
      if (confirmRidePanelOpen)
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0)",
        });
      else gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }, [confirmRidePanelOpen]);

  useGSAP(
    function () {
      if (vehicleFound)
        gsap.to(vehicleFoundPanelRef.current, {
          transform: "translateY(0)",
        });
      else gsap.to(vehicleFoundPanelRef.current, {
        transform: "translateY(100%)",
      });
    }, [vehicleFound]);
  useGSAP(
    function () {
      if (waitForDriver)
        gsap.to(waitForDriverRef.current, {
          transform: "translateY(0)",
        });
      else gsap.to(waitForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }, [waitForDriver]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-18 ml-5 mt-5 absolute"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Logo"
      />
      <div className="h-screen w-screen">
        {/* image for temporary use  */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full ">
        <div className="h-[30%] p-5 bg-white relative ">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className=" absolute top-6 right-6 text-2xl opacity-0 "
          >
            <i className="ri-arrow-down-wide-line"></i>{" "}
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="line absolute h-15 w-1 top-[40%] left-10 bg-gray-800 rounded-full"></div>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base mt-3 rounded-lg w-full"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 mt-3 text-base rounded-lg w-full"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white h-0 ">
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />
        </div>
      </div>
      <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
        <VehiclePanel setConfirmRidePanelOpen={setConfirmRidePanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />
      </div>

      <div ref={confirmRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
        <ConfirmRide setConfirmRidePanelOpen={setConfirmRidePanelOpen} setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={vehicleFoundPanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div  ref={waitForDriverRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
        <WaitForDriver setWaitForDriver={setWaitForDriver} />
      </div>
    </div>
  );
};

export default Home;
