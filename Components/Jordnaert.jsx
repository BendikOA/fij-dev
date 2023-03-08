import React from 'react'

const Jordnaert = () => {
  return (
    <section className='bg-brun min-h-screen w-full '>
      <div className="top-[217px] md:justify-center mx-[20px]  jmd:mx-[60px] jlg:mx-[150px]">

        <div className=' block pt-24 jmd:pt-0 jmd:absolute jmd:top-[19.8rem] jmd:left-[22.18rem] xl:left-[455px] text-hvit'> <h1 className='text-[40px] font-youngs'>Jordnært Press</h1>
          <div className='max-w-[460px] leading-5'>
            <p className='text-[16px] jlg:text-[17px] mt-[25px] jmd:mt-[30px]'>
              Vi er nybegynnere som forlag, men deler gjerne våre erfaringer og kan bistå med utgivelser som faller innenfor vår profil.
            </p>
            <p className='text-[16px] jlg:text-[17px] mt-[13px]'>
              Jordnært Press har avtale med Merkur Grafiske AS. De ombrekker, trykker og binder inn bøker i Norge på miljøsertifisert papir. For omslagsdesign samarbeider vi med Peter Sterten som er utdannet designer. For web-sider samarbeider vi med Bendik Andersen.
            </p>
            <p className='hidden sm:block text-[16px] jlg:text-[17px] jmd:mt-[96px] max-w-[19.4rem]'>
              Har du spørsmål eller samarbeids- forslag send oss en mail!
            </p>

            <button className='bg-gul rounded-[4px] mt-[40px] hidden jsm:block'>
              <p className='text-brun font-youngs font-[16px] pt-[5px] pb-[6px] px-[10px]'>Kontakt oss</p>
            </button>
          </div>
        </div>

        <div className='jmd:absolute jmd:top-[317px] jmd:left-[971px] xl:left-[1171px] text-hvit'>
          
          <div className='leading-5'>
            <p className='text-[17px] jlg:text-[17px] mt-[30px]'>
              Daglig leder
            </p>
            <h2 className='mt-6 text-[24px] font-youngs'>
              Erik Joner
            </h2>
            <p className='text-[17px] jlg:text-[17px] mt-2'>
              erik.joner@nibio.no
            </p>
            <p className='text-[17px] jlg:text-[17px] mt-14'>
              Adresse
            </p>
            <h2 className='mt-6 text-[24px] font-youngs'>
              Jordnært Press
            </h2>
            <p className='text-[17px] jlg:text-[17px] mt-2'>
              Eventyrveien 19<br />
              0851 Oslo
            </p>
            <p className='text-[17px] jlg:text-[17px] mt-14'>
              Org.nr
            </p>
            <h2 className='mt-6 text-[24px] font-youngs'>
              892 244 252
            </h2>
            <p className=' jsm:hidden text-[16px] jlg:text-[17px] jmd:mt-[96px] max-w-[311px]'>
              Har du spørsmål eller samarbeids- forslag send oss en mail!
            </p>

            <button className='bg-gul rounded-[4px] mt-[40px]  jsm:hidden mb-8 jmd:pb-0'>
              <p className='text-brun font-youngs font-[16px] pt-[4px] pb-[6px] px-[10px]'>Kontakt oss</p>
            </button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Jordnaert;