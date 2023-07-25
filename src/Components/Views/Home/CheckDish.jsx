import Image from 'next/image'
import React from 'react'

const CheckDish = () => {
    return (
        <div className='dish-bg py-40'>
            <div className='container'>
                <div className='max-w-[470px]'>
                    <h2 className='text-[50px] font-secondary leading-[50px] relative pb-7'>
                        Check out my <span className=' relative'>  newest <span className='border-b-[3px] border-b-[#fee86d] absolute top-10 w-36 h-2 right-[0px]'></span> </span>  vegan recipes books
                    </h2>
                    <p className='text-lg text-gray-500 pb-8'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore   </p>
                    <div className='flex gap-5'>
                        <Image src={'/dish1.png'} alt='food' width={130} height={130} />
                        <Image src={'/dish2.png'} alt='food' width={130} height={130} />
                        <Image src={'/dish3.png'} alt='food' width={130} height={130} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckDish