'use client'
import axios from 'axios'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'

function login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const route = useRouter()


  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const data = await signIn('credentials', { email, password,redirect:false })
      route.push('/')
    } catch (error) {
      console.log(error)
    }
    setEmail("")
    setPassword("")
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-black px-4 text-white'>

      <div className='w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg bg-gray-900'>
        <h1 className='text-2xl font-semibold text-center mb-6'>Login</h1>
        <form className='space-y-6' onSubmit={handleSignIn}>
          <div>
            <label className='block mb-1 font-medium'>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder='Enter Your Email '
              className='w-full border-b border-white py-2 px-1 bg-gray-900 text-white outline-none placeholder-gray-400'
            />
          </div>
          <div>
            <label className='block mb-1 font-medium'>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder='Enter Your Password '
              className='w-full border-b border-white py-2 px-1 bg-gray-900 text-white outline-none placeholder-gray-400'
            />
          </div>

          <p className='text-sm text-center mt-1'>No Have an account ?  <Link href={'/register'} className="text-blue-600 hover:underline">register</Link></p>

          <button className='w-full py-2 px-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors'>LogIn</button>
        </form>

        <div className='flex items-center gap-[5px] mt-6 justify-center '>
          <hr className='flex-grow border-gray-500' />
          <span>OR</span>
          <hr className='flex-grow border-gray-500' />
        </div>

        <button onClick={async () => {
          await signIn('google',{
            callbackUrl:'/'
          })
         
        }} 
        className='w-full py-3 px-3 hover:bg-gray-500 rounded-lg bg-white flex items-center gap-2 mt-5 justify-center'>
          <FcGoogle className='text-lg' />
          <span className='text-black font-semibold hover:text-white'>Sign In With Google</span>
        </button>

      </div>

    </div>
  )
}

export default login
