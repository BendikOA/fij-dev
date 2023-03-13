import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/Components/Navbar';
import Bestilling from '@/Components/Bestilling';
import Detaljer from '@/Components/Detaljer';


const Home = () => {


  return (
    <>
      <Head>
      <title>Bestill boka Finger’n i jorda</title>
        <meta name="description" content="Takk for at du vil kjøpe boka vår!" />
        <meta property="og:image" content="/fijimg.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='overscroll-none'>
      <Navbar />
        <Bestilling />
        <Detaljer />
      </main>
    </>
  );
};

export default Home;