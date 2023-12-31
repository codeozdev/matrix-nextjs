'use client'

import Link from 'next/link'
import PaddingContainer from '@/components/layout/padding-container'
import Music from '@/components/Music'
import MobileMenu from '@/components/MobileMenu'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useSession, signIn, signOut } from 'next-auth/react'

export default function Navbar() {
  const { data: session, status } = useSession()

  return (
    <PaddingContainer>
      <nav className='text-xs sm:text-lg font-bold flex justify-between w-full'>
        <ul className='flex gap-5 items-center'>
          <li className='hover:text-green-500'>
            <Link href='/'>Home</Link>
          </li>
          <li className='hover:text-green-500 hidden sm:flex'>
            <Link href='/characters'>Characters</Link>
          </li>
          <li className='hover:text-green-500 hidden sm:flex'>
            <Link href='/films'>Films</Link>
          </li>
          <li className='hover:text-green-500 hidden sm:flex'>
            <Link href='/locations'>Locations</Link>
          </li>
          <li className='hover:text-green-500 hidden sm:flex'>
            <Link href='/contact'>Contact</Link>
          </li>
          {session ? (
            <li className='hover:text-green-500'>
              <Link href='/profile'>Profile</Link>
            </li>
          ) : (
            <li className='hover:text-green-500'>
              <Link href='/register'>Register</Link>
            </li>
          )}
          {!session && (
            <li className='hover:text-green-500'>
              <Link href='/login'>Login</Link>
            </li>
          )}
        </ul>

        {/*Mobile*/}
        <div className='flex gap-5 items-center'>
          <MobileMenu />
          <Music />
        </div>
      </nav>
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </PaddingContainer>
  )
}
