import Link from 'next/link'
import PaddingContainer from '@/components/layout/padding-container'
import Music from '@/components/Music'
import MobileMenu from '@/components/MobileMenu'

export default function Navbar() {
  return (
    <PaddingContainer>
      <nav className='text-xs sm:text-lg font-bold flex justify-between w-full'>
        <ul className='flex gap-5 items-center'>
          <li className='hover:text-green-500'>
            <Link href='/'>Home</Link>
          </li>
          <li className='hover:text-green-500 hidden sm:flex'>
            <Link href='/characters'>Characters</Link>
          </li>
          <li className='hover:text-green-500 hidden sm:flex'>
            <Link href='/films'>Films</Link>
          </li>
          <li className='hover:text-green-500 hidden sm:flex'>
            <Link href='/locations'>Locations</Link>
          </li>
          <li className='hover:text-green-500 hidden sm:flex'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        {/*Mobile*/}
        <div className='flex gap-5 items-center'>
          <MobileMenu />
          <Music />
        </div>
      </nav>
    </PaddingContainer>
  )
}
