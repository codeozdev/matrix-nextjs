import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import connectMongoDB from '@/lib/mongodb'
import User from '@/models/user'
import Register from '@/models/register'
import bcrypt from 'bcryptjs'

export const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials

        try {
          await connectMongoDB()
          const user = await Register.findOne({ email })

          if (!user) {
            return null
          }

          const passwordMatch = await bcrypt.compare(password, user.password)

          if (!passwordMatch) {
            return null
          }
          return user
        } catch (error) {
          console.log(error)
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.SECRET,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === 'google') {
        const { name, email } = user
        try {
          await connectMongoDB()
          const userExists = await User.findOne({ email })

          if (!userExists) {
            const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name,
                email,
              }),
            })

            if (res.ok) {
              return user
            }
          }
        } catch (error) {
          console.log(error)
        }
      }
      return user
    },
  },
}
