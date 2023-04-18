import Head from 'next/head';
import Navbar from '@/Components/Navbar';
import Bestilling from '@/Components/Bestilling';
import Detaljer from '@/Components/Detaljer';


const Home = () => {


  return (
    <>
      <Head>
        <title>Bestill boka Finger’n i jorda</title>
        <meta property="og:type" content="website" />
        <meta name="description" content="Takk for at du vil kjøpe boka vår!" />
        <meta property="og:image" content="/fijimg.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='overscroll-none'>
        <Navbar />
        <Bestilling />
      </main>
    </>
  );
};

export default Home;