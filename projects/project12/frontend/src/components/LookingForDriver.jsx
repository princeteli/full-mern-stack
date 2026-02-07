import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
      <h5 className=' p-1 text-center w-[95%] absolute top-0 '>
        <i onClick={() => props.setVehicleFound(false)} className="ri-arrow-down-s-line text-gray-200 text-3xl cursor-pointer"></i>
      </h5>
      <h3 className="text-2xl font-semibold mt-3 ">Looking for a Driver</h3>


      <div className='flex gap-2 items-center flex-col justify-between'>
        <img
          className="h-30"
          src="https://tb-static.uber.com/prod/vehicles-importer/2023/toyota/urban-cruiser/high_res/1453131584711.png"
          alt="car"
        />
        <div className=' w-full  mt-5'>
          <div className='flex gap-2 items-center gap-5 p-3 border-b-2 border-gray-200 mb-2'>
            <i className="ri-map-pin-user-fill text-2xl"></i>
            <div >
              <h3 className='text-lg font-semibold'>567?/12-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Lorem ipsum dolor sit.</p>
            </div>
          </div>
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

    </div>
  )
}

export default LookingForDriver