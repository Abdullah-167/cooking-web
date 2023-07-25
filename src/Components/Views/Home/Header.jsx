import Image from 'next/image';
import React from 'react'
import { BsCameraVideo } from 'react-icons/bs';
import { CiShoppingTag } from 'react-icons/ci';
import { AiOutlineHeart } from 'react-icons/ai';
import { CiBookmark } from 'react-icons/ci';

const Header = () => {
    return (
        <div className='header-img py-20'>
            <div className=' container'>
                <div className='bg-white max-w-[500px] px-8 py-10'>
                    <div className='flex gap-3 items-center pb-4'>
                        <span className='flex gap-2 items-center text-primary'>
                            <BsCameraVideo />
                            <span className='text-sm'>  0:38 </span>
                        </span>
                        <span className='flex gap-2 items-center text-primary'>
                            <CiShoppingTag />
                            <span className='text-sm'>  Files </span>
                        </span>
                    </div>
                    <h1 className='text-[#060606] text-[50px] pb-7 font-secondary font-[400] leading-[50px]'>Mixed berry pie with fresh fruits </h1>
                    <p className='text-secondary text-lg opacity-60 pb-10'> Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi </p>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-4'>
                            <Image src={'/girlicon.png'} alt='icon' width={50} height={50} />
                            <p className='text-sm'>
                                Laura Dern
                                <p className='text-xs opacity-40 pt-0.5'>May 20, 2020</p>
                            </p>
                        </div>
                        <div className='flex gap-3'>
                            <div className='bg-gray-100 flex justify-center items-center rounded-full w-10 h-10'>
                                <span className='text-xl'>
                                    <AiOutlineHeart />
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
            </div>
        </div>
    )
}

export default Header