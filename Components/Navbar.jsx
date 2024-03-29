import React from 'react';
import Link from 'next/link';
import { useState, useLayoutEffect, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useMediaQuery } from '@react-hook/media-query';
import { useRouter } from 'next/router';
import Postbutton from './Postbutton';



const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [logoSrc, setLogoSrc] = useState('/jnwl.webp');
    const isLgScreen = useMediaQuery('(min-width: 768px) ');
    const isJLgScreen = useMediaQuery('(min-width: 1280px) ');
    const [bgColorClass, setbgColorClass] = useState('transparent');
    const router = useRouter();

    useLayoutEffect(() => {
        if (isLgScreen) {
            setLogoSrc('/jnwl2.webp');
        } else {
            setLogoSrc('/jnwlb2.webp');
        }
    }, [isLgScreen]);

    useLayoutEffect(() => {
        if (!isJLgScreen) {
            setbgColorClass('bg-brun');
        } else {
            setbgColorClass('bg-transparent');
        }
    }, [isJLgScreen]);



    const handleNav = () => {
        setNav(!nav);
    };

    const isActive = (href) => {
        return router.pathname === href ? 'text-gul' : 'text-hvit';
    };

    return (
        <div className={`min-h-auto fixed w-full ${bgColorClass} z-50`}>

            <div className=' mx-[1.25rem] md:mx-[3.75rem] lg:mx-[9.3rem] w-[1.8rem] md:w-[7rem] pt-[18px] md:pt-[14px] lg:pt-[66px] pb-4'>
                <div className=''>
                    <Link href='/'>
                        <img
                            src={logoSrc}
                            width="100%" height="100%"
                            alt="Jordnaert Press" />
                    </Link>
                </div>
                <div className='hidden lg:flex text-right'>
                    <ul className='fixed  md:right-[60px] top-[65px] jlg:right-[150px] leading-[24px] text-[20px] xxl:text-[30px] xxl:leading-[34px] text-hvit font-youngs'>
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
                        <li className={`mt-[19px] hover:text-gul ${isActive('/foredrag')}`}>
                            <Link href="foredrag">
                                Foredrag om jord
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* mobile menu */}
                <div onClick={handleNav} className='fixed pr-[0.5rem] lg:hidden  z-10 top-[14px] md: right-5 text-hvit'>
                    {nav ? (
                        <AiOutlineClose className='text-hvit  jsm:text-[23px] font-semibold' />
                    ) : (
                        <AiOutlineMenu className='text-hvit  jsm:text-[23px] font-semibold' />
                    )}
                </div>

                {/* mobile menu */}

                <div className={nav ? 'lg:hidden fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-brun ' : 'lg:hidden fixed top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-brun'}>
                    <div className='bg-ogbrun rounded-[15px] w-[96%] h-[98%] flex flex-col justify-center items-center'>
                        <div className="h-full flex flex-col justify-center">{/* Spacer div */}

                            <ul className=' leading-[24px] text-[20px] text-hvit font-youngs text-center mt-auto'>
                                <li className={`mt-[49px] ${isActive('/bestilling')}`}>
                                    <Link href="bestilling">
                                        Bestilling
                                    </Link>
                                </li>
                                <li className={`mt-[49px] ${isActive('/forfatterne')}`}>
                                    <Link href="forfatterne">
                                        Forfatterne
                                    </Link>
                                </li>
                                <li className={`mt-[49px] ${isActive('/forlaget')}`}>
                                    <Link href="forlaget">
                                        Om forlaget
                                    </Link>
                                </li>
                                <li className={`mt-[49px] ${isActive('/foredrag')}`}>
                                    <Link href="foredrag">
                                        Foredrag om jord
                                    </Link>
                                </li>

                            </ul>
                            <div className="mt-auto mb-[30px]">
                                <Postbutton />
                            </div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;