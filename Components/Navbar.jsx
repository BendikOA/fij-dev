import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose  } from 'react-icons/ai';
import { useMediaQuery } from '@react-hook/media-query';



const Navbar = () => {
    const [nav, setNav] = useState (false);
    const isLgScreen = useMediaQuery('(min-width: 834px)');


    const handleNav = () => {
        setNav(!nav);
    };



  return (
    <section className='max-h-[206px] relative bg-[#1D1006] jlg:bg-transparent'>
        <div>
        <div>
           <Link href='/'> 
           <img className='fixed top-[24px] left-[20px] jmd:top-[65px] jmd:left-[60px] jlg:top-[66px] jlg:left-[150px] w-[29.2px] jmd:w-[111px]' 
            src={isLgScreen ? '/logoforslag03.svg' : '/logo-icon.svg'}
           alt="Jordnaert Press" />
            </Link>
        </div>
        <div className='hidden jmd:flex'>
        <ul className='fixed jmd:top-[66px] jmd:right-[60px] jlg:top-[65px] jlg:right-[150px] leading-[24px] text-[20px] text-hvit font-youngs'>
            <li className='hover:text-gul'>
                <Link href="/">
                    Jordnært Press
                </Link> 
             </li>
             <li className='mt-[19px] hover:text-gul'>
                <Link href="boka">
                    Om Boka
                </Link>             
            </li>
            <li className='mt-[19px] hover:text-gul'>
                <Link href="">
                    Bestilling
                </Link> 
            </li>
            <li className='mt-[19px] hover:text-gul'>
                <Link href="">
                    Forfatterene
                </Link>             
            </li> 
         </ul>
         </div>
        
        {/* mobile menu */}
        <div onClick={handleNav} className='jmd:hidden fixed z-10 top-[24px] right-5 text-hvit'>
        {nav ? (
            <AiOutlineClose className='text-hvit jmd:text-[23px] font-semibold' />
          ) : (
            <AiOutlineMenu className='text-hvit text-[15px] jsm:text-[23px] font-semibold' />
          )}
        </div>

        {/* mobile menu */}

        <div className={nav ? 'jmd:hidden fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-brun ease-in duration-300' : 'jsm:hidden fixed top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-brun ease-in duration-300'}>
        <ul className=' leading-[24px] text-[20px] text-hvit font-youngs text-center '>
            <li className=''>
                <Link href="">
                    Jordnært Press
                </Link> 
             </li>
             <li className='mt-[49px]'>
                <Link href="">
                    Om Boka
                </Link>             
            </li>
            <li className='mt-[49px]'>
                <Link href="">
                    Bestilling
                </Link> 
            </li>
            <li className='mt-[49px]'>
                <Link href="">
                    Forfatterene
                </Link>             
            </li> 
         </ul>
         </div>
        </div>
    </section>
    )
}

export default Navbar;