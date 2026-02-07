"use client"
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';


const Navbar = () => {

const path = usePathname()

  return (
    <nav className="bg-white text-black px-2 sm:px-4 py-2.5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image src={'https://cdn.pixabay.com/photo/2013/07/12/18/35/world-153534_960_720.png'} width={20} height={20} alt="logo" />
        <h2>Travel Guide</h2>

      </div>
      <ul className="flex items-center justify-between gap-3">
        <Link className={path == '/' ? "text-blue-500" : ""} href={'/'}>Home</Link>
        <Link className={path == '/destination' ? "text-blue-500" : ""} href={'/destination'}>Destination</Link>
        <Link className={path == '/contact' ? "text-blue-500" : ""} href={'/contact'}>Contact Us</Link>
      </ul>
    </nav>
  )
}

export default Navbar

