import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '@/Components/Navbar'
import Event from '@/Components/Event'

import Fingernijorda from '@/Components/Fingernijordaalt'

export default function Home() {
  return (
    <>
      <Head>
        <title>Forside - Finger’n i jorda</title>
        <meta name="description" content="Jordforskerne Erik Joner og Arne Grønlund gir deg et kræsjkurs i jordfag, krydret med referanser som spenner fra Bibelen til Kill Bill, og nyttige tips for alle som liker å dyrke planter." />
        <meta property="og:image" content="/fijimg.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className='overscroll-none'>
        <Navbar />
        <Fingernijorda />
        <Event />
      </main>
    </>
  )
}
