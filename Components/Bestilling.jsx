import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Postbutton from './Postbutton';

const Bestilling = () => {




    return (
        <section className='w-full'>
            <div className="flex flex-col md:h-auto md:flex-row justify-center  mx-[1.25rem] md:mx-[3.75rem]  lg:mx-[9.3rem] pt-[8.1rem] md:pt-[11.3rem] lg:pt-[16rem] jlg:pt-[18.75rem] ">
                <div className="md:w-1/2 lgl:ml-[8.3rem]  jlg:ml-[12.8rem]">
                    <div className='text-hvit'>
                        <p className='text-[1.063rem] xxl:text-2xl '>
                            Takk for at du vil kjøpe boka vår!</p>
                        <h1 className='text-[1.875rem] font-youngs pt-[8px]'>Forhåndsbestilling</h1>
                        <div className='md:max-w-[27.5rem] xl:max-w-[27.5rem] xxl:max-w-xl leading-5 text-[1rem] lg:text-[1.063rem] xxl:text-2xl '>
                            <p className='  mt-[25px] md:mt-[30px]'>
                                Fram til lanseringen den 18.4 forhåndsselger vi boka med 20% rabatt. Bøker som er bestilt og betalt innen denne datoen vil kunne avhentes på Litteraturhuset den 18.4 (eller i Oslo/på Ås etter avtale). Vi har ikke tillatelse til å selge boka på arrangementet, og henviser da til regulært salg hos Norli, avd. Litteraturhuset til ordinær pris (kr 350,-). Ønsker du boka tilsendt i posten, kommer kr 70,- i frakt i tillegg til prisen. Bøker sendes ut tidligst 17.4.
                            </p>
                            <p className=' mt-[13px]'>
                                Ved bestilling, vennligst oppgi navn, adresse, betalingsmåte (Vipps, bankoverføring) om faktura ønskes tilsendt og om boka ønskes tilsendt med Posten eller avhentes i Oslo eller på Ås etter avtale.
                            </p>


                        </div>
                    </div>
                </div>
                <div className="md:w-1/2  pt-8 md:pl-12 md:pt-10 lg:pt-0 lg:pl-6 xl:pl-0 flex flex-start md:justify-start">
                    <div className=' text-hvit '>
                        <div className='leading-5'>
                            <img className=' mx-auto md:mx-0 w-[60%] md:w-[80%] jlg:w-[60%] ' src='./boka.webp' alt="3D-render av boka Finger'n i jorda. I et skandinavisk skog-landskap, står boka oppstilt på bakken foran en liggende trestamme."
                            />
                            <div className='md:w-[80%] jlg:w-[60%] text-center mx-auto md:mx-0 pt-4'>
                                <p className='text-[1rem] lg:text-[1.063rem] xxl:text-2xl  md:pt-0 lg:mt-0'>
                                    Forhåndsbestill på mail:
                                </p>
                            </div>

                           <Postbutton />

                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Bestilling