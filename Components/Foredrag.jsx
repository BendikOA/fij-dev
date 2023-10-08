import React from 'react'
import Postbutton from './Postyellow';

const Foredrag = () => {
    return (
        <section className='w-full'>
            <div className="flex flex-col md:flex-row justify-center gap-11 md:pt-[11.3rem] text-hvit lg:pt-[16rem] jlg:pt-[18.75rem] text-font-sans mx-[1.25rem] md:mx-[3.75rem] lg:mx-[9.3rem] pt-[8.1rem] pb-12">
                <div className="md:w-1/2 lgl:ml-[8.3rem] jlg:ml-[12.8rem] order-2 md:order-1 ">
                    <div className="text-stone-300 text-[40px] font-semibold font-youngs text-hvit">Jordnært Press</div>
                    <div className="w-[335px md:w-[440px] text-stone-300 text-[17px] mt-[30px]">Erik Joner tar på seg oppdrag for foredragsholder om jord og tilgrensende temaer.</div>
                    <div className="text-stone-300 text-[17px] font-semibold mt-[44px]">Tidligere foredrag omfatter titler som:</div>
                    <ul class="list-none pl-0 space-y-4 text-[17px] mt-[23px]">
                        <li>Hva er jord?</li>
                        <li>Jordliv og jordhelse</li>
                        <li>Biodiversitet i jord</li>
                        <li>Hva er god jord</li>
                        <li>Kompostering</li>
                        <li>Jord som kilde og sluk for klimagasser</li>
                        <li>Jordforbedring og biokull</li>
                        <li>Mikroplast i jord</li>
                    </ul>
                    <div className="text-stone-300 text-[17px] font-semibold mt-[53px]">Forespørsel om pris og booking sendes på mail.</div>
                    <div className="text-center text-stone-950 text-base  font-['YoungSerif'] mx-auto flex justify-center">
                        <Postbutton emailText="Kontakt oss" />

                    </div>
                </div>
                <div className="md:w-1/2 order-2 md:order-1 pt-[4.1rem] md:pt-[0] flex flex-wrap pb-8">
                    <img className=' mx-auto md:mx-0 w-[60%] md:w-[70%] lg:w-[55%] jlg:w-[80%]' src='../g1.png' alt="3D-render av boka Finger'n i jorda. I et skandinavisk skog-landskap, står boka oppstilt på bakken foran en liggende trestamme." width="100%" height="100%"
                    />
                </div>


            </div>
        </section>
    )
}

export default Foredrag;
