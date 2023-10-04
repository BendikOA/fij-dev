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
        <div className=' flex text-center md:mx-0'>
            <Link href="mailto:post@jordnaert.no">
                <button className=' bg-gul 	hover:bg-brun text-brun  hover:text-gul hover:border-gul border rounded-[4px] mt-4 mb-8 md:pb-0'>
                    <div className='font-youngs text-[1rem] lg:text-[1.063rem] xxl:text-2xl pt-[6px] pb-[6px] px-[10px]'>post@jordnaert.no
                    </div>
                </button></Link>


        </div>)
}

export default Postbutton