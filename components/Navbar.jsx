import Link from 'next/link'
import PaddingContainer from '@/components/layout/padding-container'

export default function Navbar() {
  return (
    <PaddingContainer>
      <nav className='text-lg font-bold'>
        <ul className='flex gap-5 justify-center items-center w-full'>
          <li className='hover:text-green-500'>
            <Link href='/'>Home</Link>
          </li>
          <li className='hover:text-green-500'>
            <Link href='/characters'>Characters</Link>
          </li>
        </ul>
      </nav>
    </PaddingContainer>
  )
}
