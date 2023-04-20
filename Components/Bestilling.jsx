import React from 'react'
import Link from 'next/link'
import Postbutton from './Postbutton';
import { useState, useLayoutEffect, useEffect, } from 'react';
import { useMediaQuery } from '@react-hook/media-query';


import Detaljer from './Detaljer';

const Bestilling = () => {


    const [BokSrc, setBokSrc] = useState('/boka2.webp');
    const isLgScreen = useMediaQuery('(min-width: 768px) ');

    useLayoutEffect(() => {
        if (isLgScreen) {
            setBokSrc('/widebok.webp');
        } else {
            setBokSrc('/boka2.webp');
        }
    }, [isLgScreen]);

    return (
        <section className='mx-[1.25rem] md:mx-[3.75rem]  lg:mx-[9.3rem] pt-[8.1rem] md:pt-[11.3rem] lg:pt-[16rem] jlg:pt-[18.75rem]'>
            <div className="flex flex-col md:h-auto md:flex-row justify-center   ">
                <div className="md:w-1/2 lgl:ml-[8.3rem]  jlg:ml-[12.8rem]">
                    <div className='text-hvit'>
                        <p className='text-[1.063rem] xxl:text-2xl '>
                            Takk for at du vil kjøpe boka vår!</p>
                        <h1 className='text-[1.875rem] xxl:text-4xl font-youngs pt-[8px]'>Bestilling</h1>
                        <div className='md:max-w-[27.5rem] xl:max-w-[27.5rem] xxl:max-w-xl leading-5 text-[1rem] lg:text-[1.063rem] xxl:text-2xl '>
                            <p className='  mt-[25px] md:mt-[30px]'>
                                For å bestille boka må du sende oss en mail med navn, adresse, telefonnummer, betalingsmåte (Vipps, bankoverføring), om du ønsker en faktura, og om boka ønskes tilsendt med Posten (kr 70,- pr sending) eller avhentes i Oslo eller på Ås etter avtale.
                            </p>

                            <p className=' mt-[13px]'>
                                Boka vil også bli solgt på Tronsmo bokhandel i Oslo og på Vitenparken på Ås.
                            </p>


                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 mt-10 md:mt-0  md:pl-12  lg:pt-0 xl:pl-0 flex flex-start md:justify-start">
                    <Detaljer />

                </div>


            </div>
            <div className="lgl:ml-[8.3rem]  jlg:ml-[12.8rem] md:h-auto md:flex-row  pb-[5.93rem] lgl:mr-[8.3rem]  jlg:mr-[12.8rem] xxl:mr-[20rem]">

                <img className=' mx-auto md:mx-0  md:pt-[8rem]' src={BokSrc} alt="3D-render av boka Finger'n i jorda. I et skandinavisk skog-landskap, står boka oppstilt på bakken foran en liggende trestamme." width="100%" height="100%"
                />
            </div>
        </section>
    )
}

export default Bestilling