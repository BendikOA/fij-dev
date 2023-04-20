import React from 'react'
import Link from 'next/link'

const Event = () => {
    return (
        <div className='w-full'>
            <div className="flex flex-col md:h-auto md:flex-row justify-center  mx-[1.25rem] md:mx-[3.75rem] lg:mx-[9.3rem] pb-12">
                <div className=' md:w-1/2 lgl:ml-[8.3rem] jlg:ml-[12.8rem] pt-32 md:pt-0  md:bg-brun xl:bg-transparent'>
                    <div className='text-hvit'>

                        <h1 className='text-[1.6rem] xxl:text-4xl xxl:pt-4 md:mt-32 font-youngs'>Innholdsfortegnelse</h1>
                        <div className='md:max-w-[27.5rem] xl:max-w-[27.5rem] xxl:max-w-xl leading-5 text-[1rem] lg:text-[1.063rem] xxl:text-2xl '>
                            <ol className='pt-4'>
                                <li className='pt-4'>1. Det grunnleggende</li>
                                <li className="pt-4">2. Jord, verdens mest artsrike økosystem</li>
                                <li className="pt-4">3. Hva består jorda av?</li>
                                <li className="pt-4">4. Plantenæringsstoffer</li>
                                <li className="pt-4">5. Jordas egenskaper</li>
                                <li className="pt-4">6. Hvordan kan vi forbedre jord?</li>
                                <li className="pt-4">7. Jord, miljø og klima</li>
                                <li className="pt-4">8. Jord, en del av løsningen</li>
                            </ol>
                            <ol className='pt-4 pb-8'>
                                <li className='pt-4'>Jordordforklaringer</li>
                                <li className='pt-4'>Anbefalt lesing</li>


                            </ol>

                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 md:pl-8  jlg:pt-0 jlg:pl-0 flex justify-center flex-start   md:justify-start '>
                    <div className='hidden bg-hvit text-brun rounded-md w-[80%] md:w-[80%] jlg:w-[60%] text-center max-h-[350px] md:max-h-[450px] lg:max-h-[380px] xxl:max-h-[450px] xxl:pt-8 xxl:text-4xl'>
                        <div className='px-[30px] pt-[20px]'>
                            <p classname="text-[17px]  ">Kommende arrangement:</p>
                            <p className='font-youngs max-w-[100%] lg:max-w-[100%] text-[19px] pt-12 pb-8'>Litteraturhuset i Oslo – sal Nedjma, 3. etg.</p>
                            <p classname="text-[16px]">18. April 2023, kl. 19-21</p></div>

                        <div className='flex justify-center'>

                            <div className='w-[60%] md:w-[80%] jlg:w-[60%] text-center mx-auto md:mx-0 pt-12'>
                                <Link href="https://litteraturhuset.no/arrangement/boklansering-av-fingern-i-jorda/" target="_blank">
                                    <div className='bg-brun hover:bg-hvit text-hvit hover:text-brun hover:border-brun border rounded-[4px] mt-7 mb-8 md:pb-0 cursor-pointer'
                                        style={{ boxSizing: 'border-box', display: 'inline-block' }}>
                                        <div className='font-youngs font-[16px] pt-[6px] pb-[6px] px-[10px] xxl:text-2xl'>
                                            Se detaljer
                                        </div>
                                    </div>
                                </Link>

                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>)
}

export default Event