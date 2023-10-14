import React, { useState } from 'react';
import Link from 'next/link'

const Postbutton = () => {

    const [isHovered, setIsHovered] = useState(false);


    return (
        <div className=' flex text-center md:mx-0'>
            <Link href="https://ebok.no/eboker/natur-og-dyr/fingern-i-jorda-erik-joner-9788269322712/" target='_blank'>
                <button className=' bg-hvit	hover:bg-brun text-brun  hover:text-hvit hover:border-hvit border rounded-[4px] mt-4 mb-8 md:pb-0 flex'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >

                    <div className='font-youngs text-[1rem] lg:text-[1.063rem] xxl:text-2xl pt-[6px] pb-[6px] px-[10px] flex'><span className='mr-2'>ebok.no</span>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <path d="M8.70964 5.05566H4.7513C4.33138 5.05566 3.92865 5.22248 3.63172 5.51941C3.33478 5.81634 3.16797 6.21907 3.16797 6.639V13.764C3.16797 14.1839 3.33478 14.5867 3.63172 14.8836C3.92865 15.1805 4.33138 15.3473 4.7513 15.3473H11.8763C12.2962 15.3473 12.699 15.1805 12.9959 14.8836C13.2928 14.5867 13.4596 14.1839 13.4596 13.764V9.80566" stroke={isHovered ? "#E2D2BF" : "#321C0A"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.91797 10.5973L15.8346 2.68066" stroke={isHovered ? "#E2D2BF" : "#321C0A"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.875 2.68066H15.8333V6.639" stroke={isHovered ? "#E2D2BF" : "#321C0A"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </button></Link>


        </div>)
}

export default Postbutton