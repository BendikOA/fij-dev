import Head from 'next/head';
import Navbar from '@/Components/Navbar';
import Jordnrt from '@/Components/Jordnrt';

const Home = () => {
  return (
    <>
      <Head>
      <title>Om forlaget Jordnært Press</title>
        <meta name="description" content="Vi er et forlag som deler gjerne våre erfaringer og kan bistå med utgivelser som faller innenfor vår profil." />
        <meta property="og:image" content="/fijimg.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
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