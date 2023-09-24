import data from '@/characters.json'
import Image from 'next/image'

export default function Character({ params }) {
  const { id } = params

  const characters = data.characters

  const character = characters.find((character) => character.id === id)

  return (
    <div className='w-full sm:h-[calc(100vh-68px)] flex flex-col items-center justify-center pb-10 sm:pb-32'>
      <h1>{character.name}</h1>

      <div className='flex flex-col gap-5 sm:gap-10'>
        <div className='w-4/5 mx-auto'>
          <h3 className='w-full mb-2 sm:mb-5 text-lg sm:text-2xl font-bold text-green-500'>
            Bio
          </h3>
          <div className='text-neutral-200 shadow-lg text-base sm:text-lg'>
            {character.description}
          </div>
        </div>

        <div className='w-4/5 mx-auto'>
          <h3 className='w-full mb-2 sm:mb-5 text-lg sm:text-2xl font-bold text-green-500'>
            Images
          </h3>
          <div>
            <div className='grid grid-cols-1 sm:grid-cols-4 gap-10 sm:gap-52'>
              <div className='flex flex-col gap-5 '>
                <div className=''>
                  <Image
                    src={character.images.image1}
                    alt='img'
                    width={500}
                    height={500}
                  />
                </div>
                <span>{character.one}</span>
              </div>

              <div className='flex flex-col gap-5 '>
                <div className=''>
                  <Image
                    src={character.images.image2}
                    alt='img'
                    width={500}
                    height={500}
                  />
                </div>
                <span>{character.two}</span>
              </div>

              <div className='flex flex-col gap-5 '>
                <div className=''>
                  <Image
                    src={character.images.image3}
                    alt='img'
                    width={500}
                    height={500}
                  />
                </div>
                <span>{character.three}</span>
              </div>

              <div className='flex flex-col gap-5 '>
                <div className=''>
                  <Image
                    src={character.images.image4}
                    alt='img'
                    width={500}
                    height={500}
                  />
                </div>
                <span>{character.four}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
