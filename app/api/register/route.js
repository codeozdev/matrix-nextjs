import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/mongodb'
import Register from '@/models/register'
import bcrypt from 'bcryptjs'

export async function POST(req) {
  try {
    const { name, email, password } = await req.json()
    const handlePassword = await bcrypt.hash(password, 10)
    await connectMongoDB()
    await Register.create({ name, email, password: handlePassword })

    return NextResponse.json(
      { message: 'User registered successfully' },
      { status: 200 },
    )
  } catch (error) {
    NextResponse.json(
      { message: 'An error occurred while registering the user' },
      { status: 500 },
    )
  }
}
