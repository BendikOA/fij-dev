import React from 'react';
import Link from 'next/link';
import Postbutton from './Postbutton';

const Jordnrt = () => {
    return (
        <section className='w-full '>
            <div className="flex flex-col md:h-screen md:flex-row justify-center  mx-[1.25rem] md:mx-[3.75rem] lg:mx-[9.3rem] pt-[8.1rem] md:pt-[11.3rem] lg:pt-[16rem] jlg:pt-[18.75rem]">
                <div class="md:w-1/2 lgl:ml-[8.3rem]  jlg:ml-[12.8rem] ">
                    <div className='text-hvit'>
                        <h1 className='text-[1.875rem] xxl:text-4xl font-youngs'>Jordnært Press</h1>
                        <div className='md:max-w-[460px] xxl:max-w-[600px] leading-5 text-[1rem] lg:text-[1.063rem] xxl:text-2xl'>
                            <p className=' mt-[25px] md:mt-[30px]'>
                                Vi er nybegynnere som forlag, men deler gjerne våre erfaringer og kan bistå med utgivelser som faller innenfor vår profil.
                            </p>
                            <p className=' mt-[13px]'>
                                Jordnært Press har avtale med Merkur Grafiske AS. De ombrekker, trykker og binder inn bøker i Norge på miljøsertifisert papir. For omslagsdesign samarbeider vi med Peter Sterten som er utdannet designer. For web-sider samarbeider vi med Bendik Andersen.
                            </p>
                            <p className='hidden md:block text-[16px] lg:text-[17px] md:mt-[96px] max-w-[19.4rem] xxl:text-2xl xxl:max-w-[30.4rem] '>
                                Har du spørsmål eller samarbeids- forslag send oss en mail!
                            </p>
                            <div className='hidden md:block mb-[5.6rem]'>
                                <Postbutton className="hidden md:block " />

                            </div>
                        </div>
                    </div>
                </div>


                <div className="md:w-1/2 md:pl-24 ">
                    <div className=' text-hvit'>
                        <div className='leading-5 '>
                            <p className='text-[1rem] lg:text-[1.063rem] xxl:text-2xl lg:mt-0 mt-[6.25rem] md:mt-[1rem]'>
                                Daglig leder
                            </p>
                            <h2 className='mt-6 text-[24px] font-youngs '>
                                Erik Joner
                            </h2>
                            <p className='text-[1rem] lg:text-[1.063rem] xxl:text-2xl mt-2'>
                                post@jordnaert.no
                            </p>
                            <p className='text-[1rem] lg:text-[1.063rem] xxl:text-2xl mt-14'>
                                Adresse
                            </p>
                            <h2 className='mt-6 text-[24px] font-youngs'>
                                Jordnært Press
                            </h2>
                            <p className='text-[1rem] lg:text-[1n.063rem] xxl:text-2xl mt-2'>
                                Eventyrveien 19<br />
                                0851 Oslo
                            </p>
                            <p className='text-[1rem] lg:text-[1.063rem] xxl:text-2xl mt-14'>
                                Org.nr
                            </p>
                            <h2 className='mt-6 text-[24px] font-youngs'>
                                895 244 252
                            </h2>
                            <div className='w-full flex flex-col justify-center items-center text-center md:hidden pt-24 max-w-xs mx-auto'>
                                <p className='text-[1rem] lg:text-[1.063rem] xxl:text-2xl justify-center'>
                                    Har du spørsmål eller samarbeids- forslag send oss en mail!
                                </p>

                                <Postbutton className="hidden md:block " />


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Jordnrt