import React from "react";
import Swiper from "./Swiper";

const Hero = () => {
  return (
    <div className="w-full color h-[70vh] bg-[#d5d7f9]  ">
      <div className=" flex flex-col items-center ">
        <h1 className="plus-jakarta-sans mt-30 text-center">
          Build Your First Mobile App <br />
          With US
        </h1>
        <p className="text-gray-600 text-center  font-light text-lg mt-10">
          If you also want to make an APP for your startup then book free <br />
          consultancy today and let's start your startup together.
        </p>
        <div className="flex justify-between items-center gap-4 mt-6">
          <a href="/">
            <img
              className="w-[10vw] "
              src="https://futuredesks.com/wp-content/uploads/2024/12/whatsapp-cta-btn.png"
              alt=""
            />
          </a>
          <a href="/">
            <img
              className="w-[10vw] "
              src="https://futuredesks.com/wp-content/uploads/2024/12/instagram-2.png"
              alt=""
            />
          </a>
        </div>
      </div>
      {/* slide */}
      <Swiper />
    </div>
  );
};

export default Hero;
