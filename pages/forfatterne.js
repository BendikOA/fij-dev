import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/Components/Navbar';
import Forfattere from '@/Components/Forfattere';
import Event from '@/Components/Event';

const Home = () => {
  return (
    <>
      <Head>
      <title>Forfatterne bak Finger’n i jorda</title>
        <meta name="description" content="Les mer om jordforskerne Erik Joner og Arne Grønlund." />
        <meta property="og:image" content="/fijimg.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
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