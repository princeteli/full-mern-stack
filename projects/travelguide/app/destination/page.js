import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='text-3xl flex flex-col justify-center items-center w-screen h-screen'>
      Choose Your Destination
      <div className='flex items-center justify-center flex-col gap-3  '>
        <Link href={'destination/paris'} className='bg-white text-2xl rounded-2xl text-black p-4 text-center w-full mt-5'>Paris</Link>
        <Link href={'destination/tokyo'} className='bg-white text-2xl rounded-2xl text-black p-4 text-center w-full mt-5'>Tokyo</Link>
        <Link href={'destination/newyour'} className='bg-white text-2xl rounded-2xl text-black p-4 text-center w-full mt-5'>NewYour</Link>
      
      </div>
    </div>
  )
}

export default page
