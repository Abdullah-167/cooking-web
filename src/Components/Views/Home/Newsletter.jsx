import React from 'react'

const Newsletter = () => {
    return (
        <div className=' container py-20'>
            <div className='newrecipe-bg py-12'>
                <h2 className='text-[40px] text-center font-secondary leading-[50px] relative pb-4'>
                    Easy Meals  <span className=' relative'>  Forum <span className='border-b-[3px] border-b-[#fee86d] absolute top-[30px] w-28 h-2 right-[0px]'></span> </span>
                </h2>
                <p className='text-lg font-secondary text-center pb-7'>
                    186.281 users, 184.853 recipes, 1.432.915 photos
                </p>
                <button className='bg-[#fee86d] px-8 py-3 font-secondary flex justify-center mx-auto' >Join Now</button>
            </div>
        </div>
    )
}

export default Newsletter