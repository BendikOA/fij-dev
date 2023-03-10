import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Holding from '@/Components/Holding'
import Navbar from '@/Components/Navbar'

import Fingernijorda from '@/Components/Fingernijorda'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fingern i jorda</title>
        <meta name="description" content="Fingern i jorda" />
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
