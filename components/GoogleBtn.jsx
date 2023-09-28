'use client'

import { FcGoogle } from 'react-icons/fc'
import { signIn } from 'next-auth/react'

export default function GoogleBtn() {
  return (
    <button
      onClick={() => signIn('google', { callbackUrl: '/' })}
      className='font-bold cursor-pointer px-6 py-2'
      type='button'>
      <FcGoogle size={35} />
    </button>
  )
}
