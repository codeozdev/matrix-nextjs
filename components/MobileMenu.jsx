'use client'

import { useState } from 'react'

import { HiMenuAlt3 } from 'react-icons/hi'
import Link from 'next/link'

export default function MobileMenu() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const handleNavClose = () => {
    setNav(false)
  }

  return (
    <div className='w-full flex justify-between items-center p-4 z-50 text-white'>
      <HiMenuAlt3
        onClick={handleNav}
        className='cursor-pointer z-20 md:hidden'
        size={25}
      />
      <div
        className={
          nav
            ? 'fixed  ease-in duration-300 text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
        }>
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
          <li className='font-bold text-3xl p-8'>
            <Link href='/' onClick={handleNavClose}>
              Home
            </Link>
          </li>
          <li className='font-bold text-3xl p-8'>
            <Link href='/characters' onClick={handleNavClose}>
              Character
            </Link>
          </li>
          <li className='font-bold text-3xl p-8'>
            <Link href='/films' onClick={handleNavClose}>
              Films
            </Link>
          </li>
          <li className='font-bold text-3xl p-8'>
            <Link href='/locations' onClick={handleNavClose}>
              Locations
            </Link>
          </li>
          <li className='font-bold text-3xl p-8'>
            <Link href='/contact' onClick={handleNavClose}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
