import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose  } from 'react-icons/ai';


const Navbar = () => {
    const [nav, setNav] = useState (false);

    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <section className='max-h-[206px] relative'>
        <div>
        <div>
           <Link href='/'> 
           <img className='absolute top-[65px] left-[150px]' src="/jdlogo.svg" alt="Jordnaert Press" />

            </Link>
        </div>
        <div className='hidden jmd:flex'>
        <ul className='absolute top-[65px] right-[150px] leading-[24px] text-[20px] text-hvit font-youngs'>
            <li className='text-gul'>
                <Link href="">
                    Jordnært Press
                </Link> 
             </li>
             <li className='mt-[19px]'>
                <Link href="boka">
                    Om Boka
                </Link>             
            </li>
            <li className='mt-[19px]'>
                <Link href="">
                    Bestilling
                </Link> 
            </li>
            <li className='mt-[19px]'>
                <Link href="">
                    Forfatterene
                </Link>             
            </li> 
         </ul>
         </div>
        
        {/* mobile menu */}
        <div onClick={handleNav} className='jsm:hidden absolute z-10 top-[24px] right-5 text-hvit'>
        {nav ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20}  />
          )}
        </div>

        {/* mobile menu */}

        <div className={nav ? 'jsm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-brun ease-in duration-300' : 'jsm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-brun ease-in duration-300'}>
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