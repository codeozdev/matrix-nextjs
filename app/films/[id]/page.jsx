import data from '@/films.json'

export default function Film({ params }) {
  const { id } = params

  const films = data.films

  const film = films.find((film) => film.id === id)

  return (
    <div className='w-full sm:h-[calc(100vh-105px)]'>
      <h1>{film.title}</h1>
      <div className='grid grid-cols-3 items-center place-items-center gap-10'>
        <video
          autoPlay
          loop
          controls
          muted
          playsInline
          controlsList='nodownload'
          className='col-span-2 w-full'>
          <source src={film.video} type='video/mp4' />
        </video>
        <div className=''>{film.description}</div>
      </div>
    </div>
  )
}
