import data from '@/films.json'

export default function Film({ params }) {
  const { id } = params

  const films = data.films

  const film = films.find((film) => film.id === id)

  return (
    <div className='w-full sm:h-[calc(100vh-77px)] flex flex-col items-center justify-center pb-10 sm:pb-32'>
      <h1>{film.title}</h1>
      <div className='flex flex-col items-center justify-center  gap-10 '>
        <p className='sm:w-1/3'>{film.description}</p>
        <video
          autoPlay
          loop
          controls
          muted
          playsInline
          controlsList='nodownload'
          className='sm:w-1/3 w-full'>
          <source src={film.video} type='video/mp4' />
        </video>
      </div>
    </div>
  )
}

// <p className='text-neutral-200 shadow-lg text-base sm:text-lg'>
