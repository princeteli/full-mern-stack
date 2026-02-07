'use client'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { HiPencil } from 'react-icons/hi'

function page() {
  const { data } = useSession()
  const [loading, setLoading] = useState(false)
const router = useRouter()

  const handleSignOut = async () => {
    setLoading(true)
    try {
      await signOut()
      setLoading(false)
    } catch (error) {

    }
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 '>
      {data &&
        <div className='w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg text-center relative flex flex-col items-center '>
          <HiPencil onClick={()=>router.push("/edit")} size={22} color='white' className='absolute right-5 top-5 cursor-pointer'/>
          {data.user.image && <div className='relative w-[150px] h-[150px] rounded-full  border-2 border-white overflow-hidden '>
            <Image src={data.user.image} fill alt='user-image' />
          </div>}
          <h1 className='mt-10 mb-5 text-2xl font-semibold text-white'>Wel-Come , {data.user.name}</h1>

          <button
            onClick={handleSignOut}
            className='w-full py-2 px-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors'>Sign Out</button>
        </div>}

      {!data && <div className='text-white text-2xl'>Loading...</div>}
    </div>
  )
}

export default page
