import Link from 'next/link'
import React from 'react'
import { useRef } from 'react';

const Fingernijorda = () => {

    const leftSection = useRef(null);


    return (
        <section className='w-full relative'>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center mx-[1.25rem] md:mx-[3.75rem] lg:mx-[9.3rem] pt-[8.1rem] md:pt-[11.3rem] lg:pt-[16rem] jlg:pt-[18.75rem] pb-12">


                <div ref={leftSection} class="lgl:ml-[8.3rem] jlg:ml-[8.3rem] pt-8 md:pt-0 order-2 md:order-1 md:bg-brun xl:bg-transparent ">
                    <div className='text-hvit'>

                        <h1 className='text-[1.875rem] xxl:text-4xl xxl:pt-4 font-youngs'>Finger'n i jorda</h1>
                        <div className='md:max-w-[27.5rem] xl:max-w-[27.5rem] xxl:max-w-xl leading-5 text-[1rem] lg:text-[1.063rem] xxl:text-2xl '>
                            <p className=' mt-[25px] md:mt-[30px]'>
                                Syns du jord er viktig? Ikke umiddelbart? Mat, da? Og helse? Det meste av maten vår kommer fra planter som vokser i jord. Men om maten vår begynner med jord er det et paradoks at vi vet så lite om jord. Her har du muligheten til å fylle noen kunnskapshull, både om jord i potter, i hager, og på åker og eng, men også om hvordan dagens matproduksjon og politikk påvirker hvordan vi behandler jorda.

                            </p>
                            <p className=' mt-[13px]'>
                                Bli med på en lærerik reise ned i en verden befolket av spretthaler og pansermidd, og der meitemarkens grøde ikke bare sikrer oss mat på bordet, men også en rekke løsninger for resirkulering, klima og miljø.
                            </p>

                        </div>
                    </div>
                </div>

                <div className="md:pl-8 jlg:pt-0 jlg:pl-0 flex flex-start order-1 md:order-2 md:justify-start relative ">
                    <div className=' text-hvit md:fixed md:top-30 md:left-30 z-0'

                    >
                        <div className='leading-5'>


                            <img className=' mx-auto md:mx-0 w-[60%] md:w-[70%] lg:w-[55%] jlg:w-[40%]' src='./boka2.webp' alt="3D-render av boka Finger'n i jorda. I et skandinavisk skog-landskap, står boka oppstilt på bakken foran en liggende trestamme." width="100%" height="100%"
                            />


                            <div className='w-[60%] md:w-[70%] lg:w-[55%] jlg:w-[45%] text-center mx-auto md:mx-0'>
                                <Link href="bestilling">
                                    <div className='bg-gul hover:bg-brun text-brun hover:text-gul hover:border-gul border rounded-[4px] mt-7 mb-8 md:pb-0 cursor-pointer'
                                        style={{ boxSizing: 'border-box', display: 'inline-block' }}>
                                        <div className='font-youngs font-[16px] pt-[6px] pb-[6px] px-[10px] xxl:text-2xl'>
                                            Bestillingsinfo
                                        </div>
                                    </div>
                                </Link>

                            </div>

                        </div>
                    </div>


                </div>

            </div>

        </section>
    )
}

export default Fingernijorda