import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/Components/Navbar';
import Fingernijorda from '@/Components/Fingernijorda';
import Jordnrt from '@/Components/Jordnrt';

const Home = () => {
  return (
    <>
      <Head>
        <title>Fingern i jorda</title>
        <meta name="description" content="Fingern i jorda" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='overscroll-none'>
        <Navbar />
        <Jordnrt/> 
      </main>
    </>
  );
};

export default Home;