import Image from 'next/image'
import React from 'react'

const CheckDish = () => {
    return (
        <div className='dish-bg py-20 sm:py-40 px-5'>
            <div className='container'>
                <div className='max-w-[470px]'>
                    <h2 className='text-4xl sm:text-[50px] font-secondary leading-[50px] relative pb-7'>
                        Check out my <span className=' relative'>  newest <span className='border-b-[3px] border-b-[#fee86d] absolute top-7 sm:top-10 w-[100px] sm:w-36 h-2 right-2 sm:right-[0px]'></span> </span>  vegan recipes books
                    </h2>
                    <p className='text-lg text-gray-500 pb-8'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore   </p>
                    <div className='flex flex-col sm:flex-row gap-5'>
                        <Image className=' mx-auto w-full max-w-[200px] sm:w-[130px]' src={'/dish1.png'} alt='food' width={130} height={130} />
                        <Image className=' mx-auto w-full max-w-[200px] sm:w-[130px]' src={'/dish2.png'} alt='food' width={130} height={130} />
                        <Image className=' mx-auto w-full max-w-[200px] sm:w-[130px]' src={'/dish3.png'} alt='food' width={130} height={130} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckDish