import React from 'react';

function Table() {
  return (


    <div className="flex flex-col pb-16">
      <h1 className='text-[1.5rem] xxl:text-4xl font-youngs'>Forhåndsbestilling</h1>
      <div className="flex text-[17px] pt-8 xxl:text-2xl">
        <div className="w-28 flex-1">Pris</div>
        <div className="w-52">Porto/henting</div>
        <div className="hidden md:block w-52">Levering</div>
      </div>
      <div className="flex pt-[16px] text-[20px] xxl:text-2xl font-semibold font-youngs">
        <div className="w-28 flex-1">280,-</div>
        <div className="w-52">70,-/0,-</div>
        <div className="hidden md:block w-52">18. April 2023</div>
      </div>

      <div className='md:hidden text-[17px] xxl:text-2xl pt-8'>
        <div className="w-52">Levering</div>
        <div className="w-52 pt-[16px] text-[20px] font-semibold font-youngs">18. April 2023</div>
      </div>


      <div className='border border-hvit mt-10 ' />
      <h1 className='text-[24px] font-youngs pt-8 xxl:text-2xl'>Ordinær pris etter 18.04.23</h1>
      <div className="flex  text-[17px] xxl:text-2xl pt-8">
        <div className="w-28 flex-1">Pris</div>
        <div className="w-52">Porto/henting</div>
        <div className="w-52 hidden md:block">Levering</div>
      </div>
      <div className="flex pt-[16px] text-[20px] xxl:text-2xl font-semibold font-youngs">
        <div className="w-28 flex-1">350,-</div>
        <div className="w-52">70,-/0,-</div>
        <div className="w-52  hidden md:block">Sendes i posten neste virkedag.</div>
      </div>
      <div className='md:hidden text-[17px] xxl:text-2xl pt-8'>
        <div className="w-52">Levering</div>
        <div className="w-52 pt-[16px] text-[20px] font-semibold font-youngs">Sendes i posten neste virkedag.</div>
      </div>
    </div>





  );
}

export default Table;