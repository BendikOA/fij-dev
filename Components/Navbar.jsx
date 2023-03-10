import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose  } from 'react-icons/ai';
import { useMediaQuery } from '@react-hook/media-query';



const Navbar = () => {
    const [nav, setNav] = useState (false);
    const isLgScreen = useMediaQuery('(min-width: 768px)');


    const handleNav = () => {
        setNav(!nav);
    };



  return (
    <section className='max-h-[206px] jlg:bg-transparent fixed mx-[1.25rem] md:mx-[3.75rem] lg:mx-[10rem] w-[1.8rem]  md:w-[7rem] pt-4'>
        <div>
        <div className=''>
           <Link href='/'> 
           <img
            src={isLgScreen ? '/jnwl.webp' : '/jnwlb.webp'}
           alt="Jordnaert Press" />
            </Link>
        </div>
        <div className='hidden lg:flex text-right'>
        <ul className='fixed md:top-[66px] md:right-[60px] jlg:top-[65px] jlg:right-[150px] leading-[24px] text-[20px] text-hvit font-youngs'>
            <li className='hover:text-gul'>
                <Link href="/">
                    Finger'n i jorda
                </Link> 
             </li>
             <li className='mt-[19px] hover:text-gul'>
                <Link href="bestilling">
                    Bestilling
                </Link>             
            </li>
            <li className='mt-[19px] hover:text-gul'>
                <Link href="forfatterne">
                    Forfatterne
                </Link> 
            </li>
            <li className='mt-[19px] hover:text-gul'>
                <Link href="forlaget">
                    Om forlaget
                </Link>             
            </li> 
         </ul>
         </div>
        
        {/* mobile menu */}
        <div onClick={handleNav} className='fixed mx-[1.25rem] md:mx-[3.75rem] lg:mx-[10rem] lg:hidden  z-10 top-[24px] right-5 text-hvit'>
        {nav ? (
            <AiOutlineClose className='text-hvit md:text-[23px] font-semibold' />
          ) : (
            <AiOutlineMenu className='text-hvit text-[15px] jsm:text-[23px] font-semibold' />
          )}
        </div>

        {/* mobile menu */}

        <div className={nav ? 'lg:hidden fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-brun ease-in duration-300' : 'lg:hidden fixed top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-brun ease-in duration-300'}>
        <ul className=' leading-[24px] text-[20px] text-hvit font-youngs text-center '>
            <li className=''>
            <Link href="/">
                    Finger'n i jorda
                </Link> 
             </li>
             <li className='mt-[49px]'>
             <Link href="bestilling">
                    Bestilling
                </Link>            
            </li>
            <li className='mt-[49px]'>
            <Link href="forfatterne">
                    Forfatterne
                </Link> 
            </li>
            <li className='mt-[49px]'>
            <Link href="forlaget">
                    Om forlaget
                </Link>           
            </li> 
         </ul>
         </div>
        </div>
    </section>
    )
}

export default Navbar;