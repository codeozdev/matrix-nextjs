import './globals.css'
import { Orbitron } from 'next/font/google'
import Navbar from '@/components/Navbar'
import AuthProvider from '@/context/AuthProvider'

const inter = Orbitron({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'The Matrix',
  description: 'The Matrix',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-[url("/wallpaper.jpg")]  h-full`}>
        <AuthProvider>
          <div className='bg-black/80 h-full text-white'>
            <Navbar />
            <main className='px-5'>{children}</main>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
