'use client'

import Link from 'next/link'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password) {
      return toast.error('Please fill in all fields')
    }

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (res.error) {
        return toast.error("Account doesn't exist")
      } else {
        router.refresh()
        router.push('/')
      }
    } catch (error) {
      toast.error(error.response.data)
    }
  }

  return (
    <div className='w-full h-[calc(100vh-97px)] sm:h-[calc(100vh-77px)] sm:pb-32 flex flex-col'>
      <form
        className='flex flex-col items-center justify-center h-full gap-3 sm:w-1/3 mx-auto relative'
        onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type='text'
          placeholder='Email'
          name='email'
          className='w-full'
          autoComplete='on'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder='Password'
          name='password'
          className='w-full'
          autoComplete='on'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {showPassword ? (
          <AiFillEyeInvisible
            className='absolute right-3 top-[410px] sm:top-[600px] text-green-500 text-xl cursor-pointer'
            onClick={() => setShowPassword((prevState) => !prevState)}
          />
        ) : (
          <AiFillEye
            className='absolute right-3 top-[410px] sm:top-[600px] text-green-500 text-xl cursor-pointer'
            onClick={() => setShowPassword((prevState) => !prevState)}
          />
        )}
        <div className='flex items-center'>
          <button className='bg-green-600 text-white font-bold cursor-pointer px-6 py-2'>
            Login
          </button>
          <Link
            href='/api/auth/signin'
            className=' font-bold cursor-pointer px-6 py-2'>
            <FcGoogle size={35} />
          </Link>
        </div>

        <Link href={'/register'} className='text-sm mt-3'>
          Already have an account? <span className='underline'> Register</span>
        </Link>
      </form>
    </div>
  )
}
