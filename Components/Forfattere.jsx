import React from 'react'

const Forfattere = () => {
    return (
        <section className='w-full '>
            <div className="flex flex-col md:h-auto md:flex-row justify-center gap-11 pt-[8.1rem] md:pt-[11.3rem] jlg:pt-[18.75rem]  mx-[1.25rem] md:mx-[3.75rem] lg:mx-[9.3rem] lgl:mx-[19rem] jgl:mx-[23.6rem]pb-12">
                <div class="md:w-1/2  order-2 md:order-1 ">
                    <div className='text-hvit'>
                        <img className=' mx-auto md:mx-0 w-[131px] ' src='./erik.png' alt="" />
                        <h1 className='text-[30px] md:text-[40px] font-youngs pt-8 text-center md:text-left '>Erik Joner</h1>
                        <div className='md:max-w-sm leading-5'>
                            <p className='text-[16px] lg:text-[17px] mt-[25px] md:mt-[30px] max-w-[342px]'>
                                Erik er mikrobiolog og jobber til daglig på NIBIO med miljøgifter i jord. En omflakkende forskertilværelse har gitt ham allsidig erfaring med alt fra kompost og biokull til miljøgifter og mikroplast, og deres effekter på jord, jordorganismer og planter. Han har også engasjert seg i urbant landbruk og kvaliteten av jorda man finner i hager, parseller og på grønne tak.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="md:w-1/2  order-2 md:order-1 pt-[4.1rem] md:pt-[0] ">
                    <div className='text-hvit '>
                        <img className=' mx-auto md:mx-0 w-[131px] ' src='./arne.png' alt=""
                        />
                        <h1 className='text-[30px] md:text-[40px] font-youngs pt-8 text-center md:text-left '>Arne Grønlund</h1>
                        <div className='md:max-w-sm leading-5'>
                            <p className='text-[16px] lg:text-[17px] mt-[25px] md:mt-[30px] max-w-[342px]'>
                                Arne er pensjonert jordforsker, oppvokst på et småbruk i Nord-Norge, og har allsidig kunnskap om mange former for jordbruk. Han er også sivilagronom med spesiell interesse for jord i klima-sammenheng og har deltatt i tallrike utredninger om bæredyktig landbruk og klimagassutslipp fra landbruket. Han har hatt en særlig interesse for myr og tilbakeføring av dyrket myr til en naturlig tilstand ved restaurering.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}

export default Forfattere