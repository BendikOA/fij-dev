import React from 'react'

const Event = () => {
    return (
        <section className='w-full'>

            <div className='flex justify-center w-full mt-[61px] mb-[61px] mx-auto px-4'>
                <div className='bg-hvit text-brun rounded-md'>
                    <div className='pl-[30px] pt-[20px] md:pr-[126px]'>
                        <p classname="text-[17px]">Kommende arrangement:</p>
                        <p className='font-youngs max-w-[80%] lg:max-w-[100%] text-[19px] pt-4'>Litteraturhuset i Oslo – sal Nedjma, 3. etg.</p>
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

export default Event