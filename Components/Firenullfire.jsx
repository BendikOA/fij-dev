import React from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router';



const firenullfire = () => {
  const router = useRouter();




  const isActive = (href) => {
    return router.pathname === href ? 'text-gul' : 'text-hvit';
  };

  return (
    <div className='w-full min-h-screen'>
      <div className='mx-[1.25rem] md:mx-[3.75rem] lg:mx-[9.3rem] pt-[4.1rem] md:pt-[11.3rem] lg:pt-[16rem] jlg:pt-[18.75rem] py-auto'>
        <div className='hidden md:flex justify-center text-hvit'>

          <img
            className='w-[8rem]'
            src="/erroricon.webp"
            width="100%" height="100%"
            alt="Jordnaert Press" />        </div>
        <div className='justify-center   grid md:grid-flow-col md: gap-36 lg:gap-48 xl:gap-96'>

          <div className='max-w-lg mx-[30px] text-center'>
            <h1 className='font-youngs text-[7.5rem] text-hvit '>404</h1>
            <div className='max-w-[256px]'>
              <p className='text-center md:text-left font-semibold font-youngs text-hvit text-[1rem]'>Page not found</p>
              <p className='text-cente md:text-left f text-hvit text-[1rem]'>Kontakt oss gjerne hvis du har funnet en feil vi har oversett.</p>
              <p className='text-center md:text-left f font-semibold font-youngs text-gul text-[1rem] pt-8'>bendik940@gmail.com</p>
            </div>

          </div>
          <div className=' md:hidden  justify-center text-hvit'>

            <img className='justify-center mx-auto'
              src="/erroricon.webp"
              width="50%" height="100%"
              alt="Jordnaert Press" />
          </div>
          <div className='pb-24 md:pt-20'>
            <div>
              <ul className='text-center md:text-right text-[1.25rem] text-hvit font-youngs mt-8'>
                <li className={` hover:text-gul ${isActive('/')}`}>
                  <Link href="/">
                    Finger'n i jorda
                  </Link>
                </li>
                <li className={`mt-[19px] hover:text-gul ${isActive('/bestilling')}`}>
                  <Link href="bestilling">
                    Bestilling
                  </Link>
                </li>
                <li className={`mt-[19px] hover:text-gul ${isActive('/forfatterne')}`}>
                  <Link href="forfatterne">
                    Forfatterne
                  </Link>
                </li>
                <li className={`mt-[19px] hover:text-gul ${isActive('/forlaget')}`}>
                  <Link href="forlaget">
                    Om forlaget
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>)
}

export default firenullfire