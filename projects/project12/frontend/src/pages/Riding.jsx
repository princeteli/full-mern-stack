import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
      <Link to="/home" className='fixed h-10 block right-2 top-2 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className="ri-home-5-line text-medium font-bold cursor-pointer"></i>
      </Link>
      <div className="h-1/2 ">
        {/* image for temporary use  */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
        <div className='flex items-center justify-between '>
          <img
            className="h-20"
            src="https://tb-static.uber.com/prod/vehicles-importer/2023/toyota/urban-cruiser/high_res/1453131584711.png"
            alt="car"
          />
          <div className='flex text-right flex-col gap-1'>
            <h2 className='text-lg font-medium'>prince</h2>
            <h4 className='text-xl font-semibold text-gray-600 -mt-1 -mb-1'>mh 18 20de</h4>
            <p className='text-sm text-gray-600'>thar</p>
          </div>
        </div>
        <div className='flex gap-2 items-center flex-col justify-between'>
          <div className=' w-full  mt-5'>
          
            <div className='flex gap-2 items-center gap-5 p-3 border-b-2 border-gray-200 mb-2'>
              <i className="ri-map-pin-2-fill text-2xl"></i>
              <div >
                <h3 className='text-lg font-semibold'>567?/12-A</h3>
                <p className='text-sm -mt-1 text-gray-600'>Lorem ipsum dolor sit.</p>
              </div>
            </div>
            <div className='flex gap-2 items-center gap-5 p-3  mb-2'>
              <i className="ri-money-rupee-circle-fill text-2xl"></i>
              <div >
                <h3 className='text-lg font-semibold'>₹193.20</h3>
                <p className='text-sm -mt-1 text-gray-600'>Cash cash ipsum dolor sit.</p>
              </div>
            </div>

          </div>

        </div>
        <button className='w-full mt-2   text-white font-semibold p-2 rounded-lg  bg-green-500 cursor-pointer mb-3 '>Make a Payment</button>
      </div>
    </div>
  )
}

export default Riding