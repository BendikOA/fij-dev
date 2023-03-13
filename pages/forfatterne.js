import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/Components/Navbar';
import Forfattere from '@/Components/Forfattere';
import Event from '@/Components/Event';

const Home = () => {
  return (
    <>
      <Head>
        <title>Fingern i jorda</title>
        <meta name="description" content="Finger'n i jorda - Forfatterene" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='overscroll-none'>
        <Navbar />
        <Forfattere /> 
      </main>
    </>
  );
};

export default Home;