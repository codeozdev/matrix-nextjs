import connectMongoDB from '@/lib/mongodb'
import Register from '@/models/register'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    await connectMongoDB()
    const { email } = req.json()
    const user = await Register.findOne({ email }).select('_id')
    console.log('user: ', user)
    return NextResponse.json({ user })
  } catch (error) {
    console.log(error)
  }
}
