import React from 'react'
import Table from './Table'
import Postbutton from './Postbutton'

const Detaljer = () => {
    return (
        <div className='w-full '>
            <div className="flex flex-col flex-start justify-start md:h-auto md:flex-row  ">


                <div class="  ">
                    <div className='text-hvit flex flex-col '>

                        <div className="order-2 md:order-1">
                            <p className='text-[1rem] lg:text-[1.063rem] xxl:text-2xl  md:pt-0 lg:mt-0'>
                                Bestill på mail:
                            </p>
                            <Postbutton />
                        </div>
                        <div className="order-1 md:order-2">
                            <Table />
                        </div>
                    </div>
                </div>





            </div>

        </div>)
}

export default Detaljer