import React from 'react';

const Holding = () => {
  return (
    <section className='bg-brun h-screen'>
      <div className="flex flex-col justify-center h-full mx-[20px]  jmd:mx-[60px] jlg:mx-[150px]">
        <div className='items-center jmd:max-w-[40%] jlg:max-w-[35%] mx-auto'>
          <h1 className=' text-hvit text-[40px] font-youngs '>Finger'n i jorda</h1>
          <div className='flex flex-col text-hvit leading-[19px]'>
            <p className='text-[16px] jlg:text-[17px] mt-[30px]'>
              Syns du jord er viktig? Ikke umiddelbart? Mat, da? Og helse? Det meste av maten vår kommer fra planter som vokser i jord. Men om maten vår begynner med jord er det et paradoks at vi vet så lite om jord. Her har du muligheten til å fylle noen kunskapshull, både om jord i potter, i hager, og på åker og eng, men også om hvordan dagens matproduksjon og politikk påvirker hvordan vi behandler jorda.
            </p>
            <p className='text-[16px] jlg:text-[17px] mt-[13px]'>
              Bli med på en lærerik reise ned i en verden befolket av spretthaler og pansermidd, og der meitemarkens grøde ikke bare sikrer oss mat på bordet, men også en rekke løsninger for resirkulering, klima og miljø.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Holding;
