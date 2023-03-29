import Head from 'next/head';
import Navbar from '@/Components/Navbar';
import Firenullfire from '@/Components/Firenullfire';


const Home = () => {


  return (
    <>
      <Head>
      <title>404</title>
      <meta property="og:type" content="website" />
        <meta name="description" content="404" />
        <meta property="og:image" content="/fijimg.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='overscroll-none'>
        <Firenullfire />
      </main>
    </>
  );
};

export default Home;