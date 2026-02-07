"use Client"
import React from 'react'
import Image from 'next/image'

const page = async ({ params }) => {
  const { city } = await params

  return (
    <div className='m-5 flex items-center justify-around'>
      <div className='flex items-center flex-col gap-2'>
        <h1 className='text-xl'>Welcome to {city}! Discover amazing sights and culture here.</h1>
        <Image alt={city} width={400} height={400} src={city=='paris'?"https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg":city=='tokyo'?"https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg":"https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg"} />
      </div>
      <div className='text-right'>
        <h1 className='text-2xl mt-3'>Description</h1>
        <p>{city} is the best city.</p>
      </div>
    </div>
  )
}

export default page
