import React from 'react';

function Table() {
  return (
    <div className="flex flex-col ">
      <div>
        <div className="flex  text-[17px] xxl:text-2xl pt-4">
          <div className="w-28 flex-1">Pris</div>
          <div className="w-52">Porto/henting</div>
        </div>
        <div className="flex pt-[14px] text-[20px] xxl:text-2xl font-semibold font-youngs">
          <div className="w-28 flex-1">350,-</div>
          <div className="w-52">70,-/0,-</div>
        </div>
        <div className="flex flex-col pt-[14px]  mt-10">
          <div className="w-28 text-[17px] font-normal">Levering</div>
          <div className="w-102 pt-2 font-semibold md:text-[17px] lg:text-[20px] lg:max-w-[70%] lgl:max-w-[100%] font-youngs xxl:text-2xl ">Sendes i posten neste virkedag.</div>
        </div>
      </div>
    </div>
  );
}

export default Table;