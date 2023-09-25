import data from '@/characters.json'
import Image from 'next/image'
import Link from 'next/link'

export default function Characters() {
  const characters = data.characters

  return (
    <div className='pb-5'>
      <h1>Characters</h1>
      <div className='grid grid-cols-2 sm:grid-cols-5 gap-5 sm:gap-10'>
        {characters.map((character) => (
          <Link
            href={`/characters/${character.id}`}
            key={character.id}
            className={`border-t-4 shadow-lg
             ${
               character.gender === 'male'
                 ? 'hover:shadow-green-500 hover:border-green-500 '
                 : 'hover:shadow-red-500 hover:border-red-500 '
             }`}>
            <h2 className='w-full bg-black p-1 sm:p-2'>{character.name}</h2>
            <Image
              src={character.image}
              alt={character.name}
              width={800}
              height={800}
              quality={100}
              priority={true}
              blurDataURL='/spinner.svg'
            />
            <div className='space-y-1 flex flex-col sm:items-center my-2 text-xs sm:text-base font-bold'>
              <div className='flex items-center text-[10px] sm:text-base w-[165px] sm:w-fit truncate  gap-2 text-green-500 sm:tracking-widest'>
                Played By:
                <p className='text-white text-[10px] sm:text-base'>
                  {character.playedBy}
                </p>
              </div>
              <div className='flex items-center gap-2 text-green-500 sm:tracking-widest'>
                Species: <p className='text-white'>{character.species}</p>
              </div>
              <div className='flex items-center gap-2 text-green-500 sm:tracking-widest'>
                Gender: <p className='text-white'>{character.gender}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
