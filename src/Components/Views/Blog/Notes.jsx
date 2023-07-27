import React, { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { LuPrinter } from 'react-icons/lu';
import { CiBookmark } from 'react-icons/ci';
import { BsPinAngle } from 'react-icons/bs';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import Image from 'next/image';

const Notes = () => {
    return (
        <div className='container'>
            <div className=' py-10'>
                <h2 className='text-3xl font-secondary pb-5'>Notes</h2>
                <p className='text-[17px] text-gray-500 opacity-60 pb-5'> *Nutrition info is a rough estimate based on the ingredients. Note that values may vary from case to case. </p>
                <p className='text-[17px] text-gray-500 opacity-60 pb-5'>  *As with all recipes, there is a number of ways you can get things done. If you believe that some of the instructions can be improved, or have a good alternative solution, feel free to leave a comment.  </p>
                <div className='flex flex-wrap justify-center sm:flex-nowrap gap-5 pb-7'>
                    {icons.map((item, index) => {
                        return (
                            <div className='flex gap-2 items-center bg-[#F7F7F7] px-3 py-2 cursor-pointer' key={index}>
                                <span>{item.icon}</span>
                                <span>{item.text}</span>
                            </div>
                        )
                    })}
                </div>
                <div className='flex gap-7 items-center pb-4'>
                    <div className='flex gap-2 items-center  py-2 cursor-pointer'>
                        <span><BsPinAngle /></span>
                        <span className='text-gray-500 opacity-70'>Tags</span>
                    </div>
                    <span className='text-sm text-gray-500 opacity-70'>60 minutes or less </span>
                </div>
            </div>
            <div className='max-w-[750px]'>
                <Image className='w-full cursor-pointer' src={'/recipe.png'} alt='banner' width={500} height={500} />
            </div>
        </div>
    )
}

export default Notes


const icons = [
    {
        icon: <AiOutlineHeart />,
        text: '4'
    },
    {
        icon: <LuPrinter />,
        text: 'Print'
    },
    {
        icon: <CiBookmark />,
        text: 'Book Mark'
    },
]
