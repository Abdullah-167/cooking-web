import Image from 'next/image';
import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { CiBookmark } from 'react-icons/ci';

const TopNavbar = () => {
  return (
    <div className='container px-5'>
      <div className='hidden lg:flex justify-between items-center border-b border-b-[#dddbdb] py-11'>
        <div>
          <Image src={'/logo.png'} alt={''} width={220} height={220} />
        </div>
        <div className='flex items-center gap-4 '>
          <div className='flex min-w-[430px] max-w-[430px]'>
            <input className='border border-[#dddbdb] py-3 px-5 outline-none text-black w-full' type="text" name="" id="" placeholder='Search' />
            <div className='bg-[#fee86d] hover:bg-[#fbdd33] transition-all duration-300 cursor-pointer text-black text-2xl px-4 flex justify-center items-center'>
              <CiSearch />
            </div>
          </div>
          <div className='text-primary gap-1 flex items-center border-r border-r-[#dddbdb] py-2 pr-5'>
            <span className='text-2xl'><CiBookmark /></span>
            <p className='font-extralight text-base'>Favourites</p>
          </div>
          <span className='text-base text-primary'>Cart ($0.00)</span>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
