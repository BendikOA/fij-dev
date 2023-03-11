import React from 'react'

const Jordnrt = () => {
    return (
        <section className='w-full '>
            <div className="flex flex-col md:h-screen md:flex-row justify-center  mx-[1.25rem] md:mx-[3.75rem] lg:mx-[9.3rem] pt-[18.75rem]   ">


                <div class="md:w-1/2 jlg:ml-[12.8rem] ">
                    <div className='text-hvit'>
                        <h1 className='text-[30px] font-youngs'>Jordnært Press</h1>
                        <div className='md:max-w-[460px] leading-5'>
                            <p className='text-[16px] lg:text-[17px] mt-[25px] md:mt-[30px]'>
                                Vi er nybegynnere som forlag, men deler gjerne våre erfaringer og kan bistå med utgivelser som faller innenfor vår profil.
                            </p>
                            <p className='text-[16px] lg:text-[17px] mt-[13px]'>
                                Jordnært Press har avtale med Merkur Grafiske AS. De ombrekker, trykker og binder inn bøker i Norge på miljøsertifisert papir. For omslagsdesign samarbeider vi med Peter Sterten som er utdannet designer. For web-sider samarbeider vi med Bendik Andersen.
                            </p>
                            <p className='hidden md:block text-[16px] lg:text-[17px] md:mt-[96px] max-w-[19.4rem]'>
                                Har du spørsmål eller samarbeids- forslag send oss en mail!
                            </p>

                            <button className='bg-gul rounded-[4px] mt-[40px] hidden md:block'>
                                <p className='text-brun font-youngs font-[16px] pt-[6px] pb-[6px] px-[10px]'>Kontakt oss</p>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="md:w-1/2 md:pl-24">
                    <div className=' text-hvit'>
                        <div className='leading-5'>
                            <p className='text-[17px] lg:text-[17px] lg:mt-0'>
                                Daglig leder
                            </p>
                            <h2 className='mt-6 text-[24px] font-youngs'>
                                Erik Joner
                            </h2>
                            <p className='text-[17px] lg:text-[17px] mt-2'>
                                erik.joner@nibio.no
                            </p>
                            <p className='text-[17px] lg:text-[17px] mt-14'>
                                Adresse
                            </p>
                            <h2 className='mt-6 text-[24px] font-youngs'>
                                Jordnært Press
                            </h2>
                            <p className='text-[17px] lg:text-[17px] mt-2'>
                                Eventyrveien 19<br />
                                0851 Oslo
                            </p>
                            <p className='text-[17px] lg:text-[17px] mt-14'>
                                Org.nr
                            </p>
                            <h2 className='mt-6 text-[24px] font-youngs'>
                                892 244 252
                            </h2>

                            <div class='w-full flex flex-col justify-center items-center text-center md:hidden pt-24 max-w-xs mx-auto'>
                            <p className='text-[16px] lg:text-[17px] justify-center'>
                                Har du spørsmål eller samarbeids- forslag send oss en mail!
                            </p>

                            <button className='bg-gul rounded-[4px] mt-7 mb-8 md:pb-0'>
                                <p className='text-brun font-youngs font-[16px] pt-[6px] pb-[6px] px-[10px]'>Kontakt oss</p>
                            </button></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Jordnrt