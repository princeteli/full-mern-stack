import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from '../components/FinishRide'
const CaptainRiding = () => {

  const [FinishRidePanle, setFinishRidePanle] = useState(false)
  const FinishRidePanleRef = useRef(null)


  useGSAP(
    function () {
      if (FinishRidePanle)
        gsap.to(FinishRidePanleRef.current, {
          transform: "translateY(0)",
        });
      else gsap.to(FinishRidePanleRef.current, {
        transform: "translateY(100%)",
      });
    }, [FinishRidePanle]);


  return (
    <div className='h-screen '>

      <div className='fixed p-3 top-0 flex items-center justify-between w-screen'>
        <img className='w-15' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to="/captain-login" className=' h-10 block  w-10 bg-white flex items-center justify-center rounded-full'>
          <i class="ri-logout-box-r-line text-medium font-bold cursor-pointer"></i>
        </Link>
      </div>
      <div className="h-4/5 ">
        {/* image for temporary use  */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>


      <div  onClick={() => { setFinishRidePanle(true) }} className='h-1/5 p-6 flex items-center relative justify-between bg-yellow-400'>
        <h5 className=' p-1 text-center w-[90%] absolute top-0 '>
          <i className="ri-arrow-up-s-line text-gray-200 text-3xl cursor-pointer"  ></i>
        </h5>
        <h4 className='text-xl font-semibold'>4 KM away</h4>
        <button 
          className=' mt-2 text-white font-semibold p-3 px-10 rounded-lg  bg-green-500'>Complete Ride</button>
      </div>

      <div ref={FinishRidePanleRef} className="fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
        <FinishRide setFinishRidePanle={setFinishRidePanle} />
      </div>

    </div>  
  )
}

export default CaptainRiding