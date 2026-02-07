import React from 'react'
import PanelLayout from './Components/PanelLayout'

const page = () => {
  return (
   <main className='flex min-h-screen flex-col items-center justify-center p-5 lg:p-24 '>
    <h1 className='my14 text-center text-3xl font-bold uppercase tracking-widest text-cyan-800'>Tip Calculator</h1>
    <PanelLayout></PanelLayout>
   </main>
  )
}

export default page
