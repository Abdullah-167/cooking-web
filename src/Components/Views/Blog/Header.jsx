import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import { AiOutlineClockCircle, AiOutlineTag, AiOutlineStar } from 'react-icons/ai';
import { BiLike } from 'react-icons/bi';
import { CiForkAndKnife } from 'react-icons/ci';

const Header = () => {
    return (
        <div className=' container'>
            <div className='py-16'>
                <div className='max-w-[720px]'>
                    <h1 className='max-w-[657px] leading-[55px] font-secondary text-[55px] pb-5'> The healthiest way to start your day</h1>
                    <div className='flex gap-8 pb-10 '>
                        <div className='flex items-center gap-4'>
                            <Image src={'/girlicon.png'} alt='icon' width={50} height={50} />
                            <p className='text-sm'>
                                Baji Shakeela
                                <p className='text-xs opacity-40 pt-0.5'>May 20, 2020</p>
                            </p>
                        </div>
                        <div className='flex gap-6 items-center border-l pl-4 leading-4'>
                            <p className='text-gray-700 opacity-60'>Share:</p>
                            <div className='flex gap-5'>
                                {icons.map((item, index) => {
                                    return (
                                        <div className={` text-white text-xs flex items-center gap-1 px-2 py-1.5 cursor-pointer ${item.bgColr} `} key={index}>
                                            <span>{item.icon}</span>
                                            <span className=' text-[10px] uppercase'>{item.text}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <iframe src="https://www.youtube.com/embed/_tmq1PT_88c" className='w-full pb-5 h-[400px]' frameborder="0"></iframe>
                    <div className='flex justify-center gap-5 pb-7'>
                        {data.map((item, index) => {
                            return (
                                <div className='flex items-center gap-1 opacity-60 text-gray-600' key={index}>
                                    {item.icon}
                                    <span className='text-sm'>
                                        {item.text}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                    <p className='text-xl text-gray-600 opacity-60 w-full leading-[32px] pb-5'>Nam aliquam sem et tortor consequat. Odio tempor orci dapibus ultrices in iaculis. Vitae proin sagittis nisl rhoncus mattis rhoncus. Sed risus ultricies tristique nulla aliquet. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumd ut perspiciatis unde omnis iste voluptatem accusantium doloremque laudantium,  aperiam, eaque.</p>
                    <div className='flex px-5 py-2 gap-1 text-[#FEE86D] items-center bg-[#F9F6E7] max-w-[250px]'>
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <span className='text-black font-secondary text-lg pl-4'>
                            No Reviews
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header


const icons = [
    {
        icon: <FaFacebookF />,
        text: 'Facebook',
        bgColr: 'bg-[#3B5998]'
    },
    {
        icon: <FaTwitter />,
        text: 'Twitter',
        bgColr: 'bg-[#00ACED]'
    },
    {
        icon: <FaLinkedinIn />,
        text: 'Linkedin',
        bgColr: 'bg-[#007BB5]'
    },
    {
        icon: <FaPinterestP />,
        text: 'Pinterest',
        bgColr: 'bg-[#CB2027]'
    },
]


const data = [
    {
        icon: <AiOutlineClockCircle size={20} />,
        text: '30 minutes'
    },
    {
        icon: <BiLike size={20} />,
        text: 'super easy '
    },
    {
        icon: <CiForkAndKnife size={20} />,
        text: 'serves 1 '
    },
    {
        icon: <AiOutlineTag size={20} />,
        text: '30 minutes'
    },
]