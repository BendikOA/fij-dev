import React from 'react';
import Image from 'next/image';


const Navbar = () => {
  return (
    <section className='max-h-[206px]'>
        <div>
        <img className='absolute top-[65px] left-[150px]' src="/toplogo.png" alt="My Image" />
            <p className='absolute top-[77px] left-[222px] text-hvit text-[12px]'>
                Jordnær Forlag
            </p>
        <ul className='absolute top-[65px] right-[150px] leading-[24px] text-[20px] text-hvit font-youngs'>
            <li className='text-gul'>
            Jordnært Press
             </li>
             <li className='mt-[19px]'>
                Om Boka
            </li>
            <li className='mt-[19px]'>
               Bestilling
            </li>
            <li className='mt-[19px]'>
                Forfatterene
            </li>
        </ul>
        </div>
    </section>
    )
}

export default Navbar