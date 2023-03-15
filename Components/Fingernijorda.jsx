import Link from 'next/link'
import React from 'react'

const Fingernijorda = () => {
    return (
        <section className='w-full '>
            <div className="flex flex-col md:h-auto md:flex-row justify-center  mx-[1.25rem] md:mx-[3.75rem] lg:mx-[9.3rem] pt-[8.1rem] md:pt-[11.3rem] lg:pt-[16rem] jlg:pt-[18.75rem] pb-12">


                <div class="md:w-1/2 lgl:ml-[8.3rem] jlg:ml-[12.8rem] pt-8 md:pt-0 order-2 md:order-1 md:bg-brun xl:bg-transparent ">
                    <div className='text-hvit'>
                                <p className='text-[1.063rem] xxl:text-2xl  md:pt-0 lg:mt-0 text-gul'>
                                    Boklansering 18. April 2023
                                </p>                           
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

                <div className="md:w-1/2  md:pl-8  jlg:pt-0 jlg:pl-0 flex flex-start order-1  md:order-2   md:justify-start">
                    <div className=' text-hvit '>
                        <div className='leading-5'>
                     

                            <img className=' mx-auto md:mx-0 w-[60%] md:w-[80%] jlg:w-[60%]' src='./boka.webp' alt="3D-render av boka Finger'n i jorda. I et skandinavisk skog-landskap, står boka oppstilt på bakken foran en liggende trestamme." width="100%" height="100%"
                            />


                            <div className='w-[60%] md:w-[80%] jlg:w-[60%] text-center mx-auto md:mx-0'>
                            <Link href="bestilling">
  <div className='bg-gul hover:bg-brun text-brun hover:text-gul hover:border-gul border rounded-[4px] mt-7 mb-8 md:pb-0 cursor-pointer'
       style={{ boxSizing: 'border-box', display: 'inline-block' }}>
    <div className='font-youngs font-[16px] pt-[6px] pb-[6px] px-[10px]'>
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