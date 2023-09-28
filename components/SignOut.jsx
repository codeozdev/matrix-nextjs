'use client'

import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function SignOut() {
  const router = useRouter()

  return (
    <button
      className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'
      onClick={() =>
        signOut({ redirect: false }).then(() => {
          router.push('/')
        })
      }>
      Sign Out
    </button>
  )
}
