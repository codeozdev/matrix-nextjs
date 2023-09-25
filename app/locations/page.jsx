import data from '@/locations.json'
import Link from 'next/link'
import Image from 'next/image'

export default function Films() {
  const { locations } = data

  return (
    <div className='w-full h-full pb-10 sm:pb-0'>
      <h1>Locations</h1>
      <div className='grid grid-cols-1 sm:grid-cols-3 place-items-center sm:h-[calc(100vh-257px)] gap-10 sm:pb-20'>
        {locations.map((location) => (
          <Link
            href={`/locations/${location.id}`}
            key={location.id}
            className='shadow-2xl shadow-stone-500'>
            <h2 className='p-1 sm:p-2'>{location.name}</h2>
            <Image
              src={location.image}
              alt={location.name}
              width={800}
              height={800}
              quality={100}
              className='object-cover'
              priority={true}
              placeholder='blur'
              blurDataURL='/spinner.svg'
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
