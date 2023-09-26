import connectMongoDB from '@/lib/mongodb'
import Form from '@/models/form'
import { NextResponse } from 'next/server'

export async function POST(req) {
  const { email, name, message } = await req.json()
  await connectMongoDB()
  await Form.create({ email, name, message })
  return NextResponse.json({ message: 'Form submitted' }, { status: 201 })
}
