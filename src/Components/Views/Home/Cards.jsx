import Image from 'next/image';
import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiLike } from 'react-icons/bi';
import { HiOutlineShare } from 'react-icons/hi';
import { CiBookmark } from 'react-icons/ci';

const Cards = () => {
    return (
        <div className=' container'>
            <div className='flex gap-8 py-24'>
                {data.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className="relative overflow-hidden max-w-[500px] ">
                                <Image className='transition-transform pb-3 hover:scale-105 duration-500' src={item.mainImg} alt={'food'} width={500} height={500} />
                            </div>
                            <div className='flex gap-7 pb-3'>
                                <div className='flex gap-1 text-gray-400 items-center'>
                                    <AiOutlineClockCircle />
                                    <span className='text-base'>30 Minutes</span>
                                </div>
                                <div className='flex gap-1 text-gray-400 items-center'>
                                    <BiLike />
                                    <span className='text-base'>super easy </span>
                                </div>
                            </div>
                            <p className='text-2xl font-secondary pb-4'>{item.heading}</p>
                            <p className='text-gray-500 pb-6'>{item.description}</p>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-4'>
                                    <Image src={item.publisherImg} alt='icon' width={50} height={50} />
                                    <p className='text-sm'>
                                        {item.publisherName}
                                        <p className='text-xs opacity-40 pt-0.5'>May 20, 2020</p>
                                    </p>
                                </div>
                                <div className='flex gap-3'>
                                    <div className='bg-gray-100 flex justify-center items-center rounded-full w-10 h-10'>
                                        <span className='text-xl opacity-50'>
                                            <HiOutlineShare />
                                        </span>
                                    </div>
                                    <div className='bg-gray-100 flex justify-center items-center rounded-full w-10 h-10'>
                                        <span className='text-xl'>
                                            <CiBookmark />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cards


const data = [
    {
        mainImg: '/food1.jpg',
        heading: '40 Mother’s Day Breakfast and Brunch Recipes',
        description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis ',
        publisherImg: '/girlicon.png',
        publisherName: 'John',
    },
    {
        mainImg: '/food1.jpg',
        heading: '40 Mother’s Day Breakfast and Brunch Recipes',
        description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis ',
        publisherImg: '/girlicon.png',
        publisherName: 'John',
    },
    {
        mainImg: '/food1.jpg',
        heading: '40 Mother’s Day Breakfast and Brunch Recipes',
        description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis ',
        publisherImg: '/girlicon.png',
        publisherName: 'John',
    },
]