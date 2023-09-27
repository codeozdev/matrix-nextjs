import GoogleProvider from 'next-auth/providers/google'
import connectMongoDB from '@/lib/mongodb'
import User from '@/models/user'

export const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === 'google') {
        const { name, email } = user
        try {
          await connectMongoDB()
          const userExists = await User.findOne({ email })

          if (!userExists) {
            const res = await fetch('http://localhost:3000/api/user', {
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
