import React from 'react'

const Fingernijorda = () => {
    return (
        <section className='w-full '>
            <div className="flex flex-col md:h-auto md:flex-row justify-center  mx-[1.25rem] md:mx-[3.75rem] lg:mx-[9.3rem] pt-28 md:pt-60 ">


                <div class="md:w-1/2 jlg:ml-[12.8rem] md:mt-8 order-2 md:order-1 ">
                    <div className='text-hvit'>
                        <h1 className='text-[30px] font-youngs'>Finger'n i jorda</h1>
                        <div className='md:max-w-sm leading-5'>
                            <p className='text-[16px] lg:text-[17px] mt-[25px] md:mt-[30px]'>
                                Syns du jord er viktig? Ikke umiddelbart? Mat, da? Og helse? Det meste av maten vår kommer fra planter som vokser i jord. Men om maten vår begynner med jord er det et paradoks at vi vet så lite om jord. Her har du muligheten til å fylle noen kunskapshull, både om jord i potter, i hager, og på åker og eng, men også om hvordan dagens matproduksjon og poltikk påvirker hvordan vi behandler jorda.
                            </p>
                            <p className='text-[16px] lg:text-[17px] mt-[13px]'>
                                Bli med på en lærerik reise ned i en verden befolket av spretthaler og pansermidd, og der meitemarkens grøde ikke bare sikrer oss mat på bordet, men også en rekke løsninger for resirkulering, klima og miljø.
                            </p>

                        </div>
                    </div>
                </div>

                <div class="md:w-1/2  md:pl-8 md:pt-10 jlg:pt-0 jlg:pl-0 flex flex-start order-1  md:order-2   md:justify-start">
                    <div className=' text-hvit '>
                        <div className='leading-5'>
                            <div className='md:w-[80%] jlg:w-[60%] text-center mx-auto md:mx-0'>
                                <p className='text-[17px] lg:text-[17px]  md:pt-0 lg:mt-0'>
                                    Boklansering 18. April 2023
                                </p>                            </div>

                            <img className=' mx-auto md:mx-0 w-[60%] md:w-[80%] jlg:w-[60%] mt-4' src='./boka.webp' alt=""
                            />


                            <div className='w-[60%] md:w-[80%] jlg:w-[60%] text-center mx-auto md:mx-0'>

                                <button className='bg-gul rounded-[4px] mt-7 mb-8 md:pb-0'>
                                    <p className='text-brun font-youngs font-[16px] pt-[6px] pb-[6px] px-[10px]'>Bestill på mail</p>
                                </button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <div className='flex justify-center w-full mt-[61px] mb-[61px] mx-auto px-4'>
                <div className='bg-hvit text-brun rounded-md'>
                    <div className='pl-[30px] pt-[20px] md:pr-[126px]'>
                        <p classname="text-[17px]">Kommende arrangement:</p>
                        <p className='font-youngs max-w-[70%] lg:max-w-[100%] text-[19px]'>Litteraturhuset i Oslo – sal Nedjma, 3. etg.</p>
                        <p classname="text-[16px]">18. April 2023, kl. 19-21</p></div>

                    <div className='flex justify-center md:justify-end pb-4 md:pb-0'>

                        <button className='bg-brun rounded-[4px] mt-[39px] md:mt-[11px] md:mb-[20px] md:mx-[20px]'>
                            <p className='text-hvit font-youngs font-[16px] pt-[6px] pb-[6px] px-[10px]'>Se detaljer</p>
                        </button>
                    </div>


                </div>
            </div>
        </section>)
}

export default Fingernijorda