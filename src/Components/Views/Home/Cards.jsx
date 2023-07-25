import Image from 'next/image'
import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiLike } from 'react-icons/bi';

const Cards = () => {
    return (
        <div className=' container'>
            <div>
                <Image src={'/food1.jpg'} alt='food' width={5000} height={500} />
                <div className='flex gap-7'>
                    <div className='flex gap-1 text-gray-400 items-center'>
                        <AiOutlineClockCircle />
                        <span className='text-base'>30 Minutes</span>
                    </div>
                    <div className='flex gap-1 text-gray-400 items-center'>
                        <BiLike />
                        <span className='text-base'>super easy </span>
                    </div>
                    <p className=' font-secondary'>40 Mother’s Day Breakfast and Brunch Recipes </p>
                </div>
            </div>
        </div>
    )
}

export default Cards