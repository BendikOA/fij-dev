import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navbar from '@/Components/Navbar'
import Event from '@/Components/Event'

import Fingernijorda from '@/Components/Fingernijorda'

export default function Home() {
  return (
    <>
      <Head>
        <title>Finger'n i jorda</title>
        <meta name="description" content="hjemmesiden da lissom" />
        <meta property="og:image" content="/fijimg.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className='overscroll-none'>
      <Navbar />
      <Fingernijorda />
      </main>
    </>
  )
}
