import PaddingContainer from '@/components/layout/padding-container'
import Link from 'next/link'

export default function Home() {
  return (
    <PaddingContainer>
      <main className='flex flex-col items-center justify-center w-full h-full space-y-10 sm:h-[calc(100vh-117px)]'>
        <h1>THE MATRIX</h1>
        <div className='space-y-3'>
          <h3>Purpose</h3>
          <p>
            The Matrix saga tells of a war between the Resistance and a race of
            sentient Machines who imprisoned humanity within a virtual reality
            known as the Matrix. The films center on{' '}
            <Link href={`/characters/1`} className='text-green-500 font-bold'>
              The One
            </Link>
            , a man gifted with special abilities and an important destiny.
            Woven throughout the main story of the Matrix are various threads of
            background stories that cut across different mediums, including the
            films as well as comics, video games, and an animated anthology
            series.
          </p>
          <p>
            Beyond the surface of its story, The Matrix is rich in explorations
            and allusions to various questions in philosophy, theology,
            psychology, sociology, politics, and computer science.
          </p>
        </div>
        <div className='w-full'>
          <div>
            <h3>Featured Article</h3>
            <p>
              <Link href={`/characters/8`} className='text-green-500 font-bold'>
                The Merovingian
              </Link>{' '}
              (sometimes called The Frenchman) is an old program that resides
              within the Matrix. Self-described as a "trafficker of
              information", The Merovingian behaves much as a leader of a
              powerful organized crime syndicate. He and his wife Persephone
              operate a smuggling ring providing a haven for exiled programs in
              the Matrix. The Merovingian is described as an "Operating System"
              by The Kid in his blog incorporated in The Matrix Online, although
              this presumably describes his role pre-Exile rather than his
              current function.
            </p>
          </div>
        </div>
      </main>
    </PaddingContainer>
  )
}
