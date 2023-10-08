import Head from 'next/head'
import Navbar from '@/Components/Navbar'
import Foredrag from '@/Components/Foredrag'

export default function Home() {
  return (
    <>
      <Head>
        <title>Foredrag - Finger’n i jorda</title>
        <meta name="description" content="Erik Joner tar på seg oppdrag for foredragsholder om jord og tilgrensende temaer." />
        <meta property="og:image" content="/fijimg.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className='overscroll-none'>
        <Navbar />
        <Foredrag />
      </main>
    </>
  )
}
