import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
         <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='h-12 w-12 rounded-full object-cover' src="data:image/jpeg;base64,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" alt="" />
            <h4 className='font-medium text-2xl'>Prince teli </h4>
          </div>
          <div className='p-2'>
            <h4 className='font-medium text-2xl'>₹ 100</h4>
            <p className='text-xl text-gray-800 '>Earned</p>
          </div>
        </div>
        <div className='flex rounded-lg mt-5 bg-yellow-300/95 w-full h-1/2 p-5 items-center justify-between'>
          <div className='text-center gap-2'>
            <i className="text-4xl font-thin ri-timer-2-line"></i>
            <h5 className='font-medium text-lg '>100</h5>
            <p className='text-sm text-gray-800 '>Hours</p>
          </div>
          <div className='text-center gap-2'>
            <i className="text-4xl font-thin ri-speed-up-line"></i>
            <h5 className='font-medium text-lg'>100</h5>
            <p className='text-sm text-gray-800 '>Hours</p>
          </div>
          <div className='text-center gap-2'>
            <i className="text-4xl font-thin ri-booklet-line"></i>
            <h5 className='font-medium text-lg'>100</h5>
            <p className='text-sm text-gray-800 '>Hours</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetails
