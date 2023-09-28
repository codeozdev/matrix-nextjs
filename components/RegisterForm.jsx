'use client'

import Link from 'next/link'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

export default function RegisterForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name || !email || !password) {
      return toast.error('Please fill in all fields')
    }

    try {
      const resUserExists = await fetch('/api/userExists', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const { user } = await resUserExists.json()

      if (user) {
        return toast.error('User already exists')
      }

      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })

      if (res.ok) {
        toast.success('Registered successfully')
        router.push('/login')
      } else {
        toast.error('User registration failed')
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
        <h1>Register</h1>
        <input
          type='text'
          placeholder='Full Name'
          name='name'
          className='w-full'
          autoComplete='on'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
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
            className='absolute right-3 top-[440px] sm:top-[620px] text-green-500 text-xl cursor-pointer'
            onClick={() => setShowPassword((prevState) => !prevState)}
          />
        ) : (
          <AiFillEye
            className='absolute right-3 top-[440px] sm:top-[620px] text-green-500 text-xl cursor-pointer'
            onClick={() => setShowPassword((prevState) => !prevState)}
          />
        )}
        <button className='bg-green-600 text-white font-bold cursor-pointer px-6 py-2'>
          Register
        </button>

        <Link href={'/login'} className='text-sm mt-3'>
          Already have an account? <span className='underline'>Login</span>
        </Link>
      </form>
    </div>
  )
}
