import data from '@/films.json'
import Link from 'next/link'
import Image from 'next/image'

export default function Films() {
  const { films } = data

  return (
    <div className='w-full h-full pb-10 sm:pb-0'>
      <h1>The Matrix Franchise</h1>
      <div className='grid grid-cols-1 sm:grid-cols-4 place-items-center sm:h-[calc(100vh-257px)] gap-10 sm:pb-20'>
        {films.map((film) => (
          <Link
            href={`/films/${film.id}`}
            key={film.id}
            className='shadow-2xl shadow-green-500'>
            <h2 className='p-1 sm:p-2'>{film.title}</h2>
            <Image
              src={film.image}
              alt={film.title}
              width={1000}
              height={1000}
              quality={100}
              className='object-contain'
              priority={true}
              placeholder='blur'
              blurDataURL='/spinner.svg'
            />
            <div className='space-y-1 flex flex-col items-center my-2 text-xs sm:text-base font-bold p-2'>
              <div className='flex gap-2 text-green-500'>
                Year: <p className='text-white'>{film.year}</p>
              </div>
              <div className='flex gap-2 text-green-500'>
                Buget: <p className='text-white'>{film.butget}</p>
              </div>
              <div className='flex gap-2 text-green-500'>
                Box office: <p className='text-white'>{film.box_office}</p>
              </div>
              <div className='flex gap-2 text-green-500'>
                Rating: <p className='text-white'>{film.rating}/10</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
