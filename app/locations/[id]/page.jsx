import data from '@/locations.json'
import Image from 'next/image'

export default function Character({ params }) {
  const { id } = params

  const response = data.locations

  const locations = response.find((location) => location.id === id)

  return (
    <div className='w-full sm:h-[calc(100vh-77px)] flex flex-col items-center justify-center pb-10 sm:pb-32'>
      <h1>{locations.name}</h1>

      <div className='flex flex-col gap-5 sm:gap-10'>
        <span className='sm:text-start w-4/5 mx-auto'>{locations.quote}</span>
        <div className='w-4/5 mx-auto'>
          <p className='sm:text-start'>{locations.description}</p>
        </div>

        <div className='w-4/5 mx-auto'>
          <h4 className='w-full mb-2 sm:mb-5 text-lg sm:text-2xl font-bold text-green-500'>
            Images
          </h4>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-52'>
            <div className='flex flex-col gap-5 '>
              <Image
                src={locations.images.image1}
                alt='img'
                width={1000}
                height={1000}
                priority={true}
                quality={100}
                blurDataURL='/spinner.svg'
              />
            </div>

            <div className='flex flex-col gap-5 '>
              <Image
                src={locations.images.image2}
                alt='img'
                width={1000}
                height={1000}
                priority={true}
                quality={100}
                blurDataURL='/spinner.svg'
              />
            </div>

            <div className='flex flex-col gap-5 '>
              <Image
                src={locations.images.image3}
                alt='img'
                width={1000}
                height={1000}
                priority={true}
                quality={100}
                blurDataURL='/spinner.svg'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
