import React from 'react'
import Link from 'next/link'

const Postbutton = ({ emailText = "post@jordnaert.no" }) => {
    return (
        <div className='flex text-center md:mx-0'>
            <Link href={`mailto:${emailText}`}>
                <button className='bg-gul hover:bg-brun text-brun hover:text-gul hover:border-gul border rounded-[4px] mt-4 mb-8 md:pb-0'>
                    <div className='font-youngs text-[1rem] lg:text-[1.063rem] xxl:text-2xl pt-[6px] pb-[6px] px-[10px]'>
                        {emailText}
                    </div>
                </button>
            </Link>
        </div>
    )
}

export default Postbutton
