import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const handleCopy = async () => {
    try {
        await navigator.clipboard.writeText("post@jordnaert.no");
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    } catch (error) {
        console.error("Failed to copy text: ", error);
    }
};



const Postbutton = () => {


    const [kopi, setKopi] = useState(false);

    const handleKopi = () => {
        setKopi(!kopi);
        setTimeout(() => {
            setKopi(false);
        }, 4000);
    };


  return (
    <div className='w-[60%] md:w-[80%] jlg:w-[60%] flex text-center justify-center mx-auto md:mx-0'>
    <Link href="mailto:post@jordnaert.no">
        <button className=' bg-gul 	hover:bg-brun text-brun  hover:text-gul hover:border-gul border rounded-[4px] mt-4 mb-8 md:pb-0'>
            <p className='font-youngs text-[1rem] lg:text-[1.063rem] xxl:text-2xl pt-[6px] pb-[6px] px-[10px]'>post@jordnaert.no

            </p>
        </button></Link>

    <div onClick={handleKopi} className="pl-2">
        {kopi ? (


            <button onClick={handleCopy} className='hover:bg-brun text-gul hover:border border-gul border rounded-[4px] mt-4 mb-8 md:pb-0 flex'>
                <p className=' text-[1rem] lg:text-[1.063rem] xxl:text-2xl  pt-[6px] pb-[6px] px-[10px] flex'>Kopiert!</p>
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-1.5 mr-3'>
                    <path d="M12 3.28261V2C12 1.44772 11.5523 1 11 1H2C1.44772 1 1 1.44772 1 2V15C1 15.5523 1.44771 16 2 16H3.26471" stroke="#E2D2BF" />
                    <rect x="5.5" y="5.5" width="10" height="14" rx="0.5" stroke="#E2D2BF" />
                </svg> </button>
        ) : (


            <button onClick={handleCopy} className='	hover:bg-brun text-hvit  hover:text-gul hover:border border-hvit rounded-[4px] mt-4 mb-8 md:pb-0 flex'>
                <p className=' text-[1rem] lg:text-[1.063rem] xxl:text-2xl pt-[6px] pb-[6px] px-[10px] flex'>Kopier    </p>
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-1.5 mr-3'>
                    <path d="M12 3.28261V2C12 1.44772 11.5523 1 11 1H2C1.44772 1 1 1.44772 1 2V15C1 15.5523 1.44771 16 2 16H3.26471" stroke="#E2D2BF" />
                    <rect x="5.5" y="5.5" width="10" height="14" rx="0.5" stroke="#E2D2BF" />
                </svg> </button>
        )}
    </div>
</div>  )
}

export default Postbutton