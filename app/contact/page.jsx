'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !name || !message) toast.error('Please fill all fields')

    try {
      const res = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, message }),
      })

      if (res.ok) {
        toast.success('Message sent')
        router.refresh()
        router.push('/')
      } else {
        throw new Error('Something went wrong')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-full h-[calc(100vh-97px)] sm:h-[calc(100vh-77px)] sm:pb-32 flex flex-col'>
      <form
        className='flex flex-col items-center justify-center h-full gap-3 w-full sm:w-1/3 mx-auto'
        onSubmit={handleSubmit}>
        <h1>Contact</h1>
        <input
          type='text'
          placeholder='Email'
          className='w-full'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type='text'
          placeholder='Name'
          className='w-full'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <textarea
          rows='5'
          placeholder='Text Area'
          className='resize-none outline-0 sm:font-bold placeholder-green-600 p-1 sm:p-3 border text-gray-700 w-full'
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button
          className='py-2 sm:py-4 rounded-lg sm:font-bold bg-green-600 w-fit mx-auto px-10 hover:bg-red-600'
          type='submit'>
          Send
        </button>
      </form>
    </div>
  )
}
