import { getServerSession } from 'next-auth/next'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import SignOut from '@/components/SignOut'

export default async function Profile() {
  const sesion = await getServerSession(options)

  if (!sesion) {
    redirect('/api/auth/signin?callbackUrl=/server')
  }

  return (
    <div className='w-full h-[calc(100vh-97px)] sm:h-[calc(100vh-77px)] sm:pb-32 flex flex-col'>
      <div className='flex flex-col items-center justify-center gap-5 h-screen'>
        {sesion?.user?.image && (
          <Image
            src={sesion?.user?.image}
            alt='img'
            width={500}
            height={500}
            priority={true}
            className='object-cover w-[150px] h-[150px] rounded-full'
          />
        )}

        <h2>{sesion?.user?.name}</h2>
        <div className='sm:text-lg'>{sesion?.user?.email}</div>
        <SignOut />
      </div>
    </div>
  )
}
