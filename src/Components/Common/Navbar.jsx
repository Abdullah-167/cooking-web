import React, { useState } from 'react'
import { IoStarSharp } from 'react-icons/io5';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { FaPinterestP } from 'react-icons/fa';
import { MdWifi } from 'react-icons/md';
import { AiFillYoutube } from 'react-icons/ai';
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';


const Navbar = () => {

    const [dropDown, setDropDown] = useState(false);

    return (
        <div className='container px-5'>
            <div className='flex justify-between items-center'>
                <div
                    className='relative px-7 flex gap-5' // Ensure parent container is relative
                    onMouseLeave={() => setDropDown(false)}
                >
                    {droplinks.map((item, index) => {
                        return (
                            <button key={index}
                                onMouseOver={() => setDropDown(true)}
                                className='text-[14px] font-medium flex gap-1 justify-center items-center text-[#6f6f6f] active:text-secondary hover:text-secondary  p-2 '
                            >
                                <span>{item.links}</span>
                            </button>
                        )
                    })}


                    <ul
                        className={`absolute z-[1000] left-0 top-8 right-0  bg-white px-3 w-full overflow-hidden transition-all duration-500 ${dropDown ? ' max-h-40  border py-2 opacity-100' : ' max-h-0 opacity-0'
                            }`}
                    >
                        {droplinks.map((item, index) => {
                            return (
                                <Link href={''} key={index}>
                                    <li className='flex text-center justify-center gap-4 w-full items-center py-2 text-[14px] hover:text-[#91A3F2] hover:bg-gray-100'>
                                        {item.link}
                                    </li>
                                </Link>
                            );
                        })}
                    </ul>
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
    );
};

export default Navbar;



const droplinks = [
    {
        mainLink: 'Home',
        home: [
            {
                link: 'Go to'
            },
            {
                link: 'Go to'
            },
            {
                link: 'Go to'
            },
            {
                link: 'Go to'
            },
        ]
    },
    {
        mainLink: 'About',
        about: [
            {
                link: 'Go to'
            },
            {
                link: 'Go to'
            },
            {
                link: 'Go to'
            },
            {
                link: 'Go to'
            },
        ]
    },
    {
        mainLink: 'Contact',
        contact: [
            {
                link: 'Go to'
            },
            {
                link: 'Go to'
            },
            {
                link: 'Go to'
            },
            {
                link: 'Go to'
            },
        ]
    },
    {
        mainLink: 'Blog',
        blog: [
            {
                link: 'Go to'
            },
            {
                link: 'Go to'
            },
            {
                link: 'Go to'
            },
            {
                link: 'Go to'
            },
        ]
    },
    {
        mainLink: 'How It Work',
        howItWork: [
            {
                link: 'Go to'
            },
            {
                link: 'Go to'
            },
            {
                link: 'Go to'
            },
            {
                link: 'Go to'
            },
        ]
    },
    {
        mainLink: 'Shop',
        shop: [
            {
                link: 'Go to'
            },
            {
                link: 'Go to'
            },
            {
                link: 'Go to'
            },
            {
                link: 'Go to'
            },
        ]
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