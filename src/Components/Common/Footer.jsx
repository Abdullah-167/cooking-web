import React from 'react'
import { IoStarSharp } from 'react-icons/io5';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { FaPinterestP } from 'react-icons/fa';
import { MdWifi } from 'react-icons/md';
import { AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='container'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-9 py-2'>
                    {links.map((item, index) => {
                        return (
                            <span className=' relative cursor-pointer text-[#2d2d28] opacity-[0.5] py-2' key={index}>
                                {item.link}
                                {index === 1 && (
                                    <span className=' absolute top-1 text-base text-[#fee86d]'>
                                        <IoStarSharp />
                                    </span>
                                )}
                            </span>
                        )
                    })}
                </div>
                <div className='flex gap-2 items-center'>
                    {icons.map((item, index) => {
                        return (
                            <span className=' cursor-pointer' key={index}>
                                {item.icon}
                            </span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Footer


const links = [
    {
        link: 'Home'
    },
    {
        link: 'Recipes'
    },
    {
        link: 'Forum'
    },
    {
        link: 'Shop'
    },
    {
        link: 'About'
    },
    {
        link: 'Contact'
    },
]


const icons = [
    {
        icon: <AiOutlineInstagram />
    },
    {
        icon: <AiOutlineTwitter />
    },
    {
        icon: <BiLogoFacebook />
    },
    {
        icon: <FaPinterestP />
    },
    {
        icon: <MdWifi />
    },
    {
        icon: <AiFillYoutube />
    },
]