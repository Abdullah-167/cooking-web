import Image from 'next/image';
import React from 'react'
import { BsCameraVideo } from 'react-icons/bs';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { FaPinterestP } from 'react-icons/fa';
import { MdWifi } from 'react-icons/md';
import { AiFillYoutube } from 'react-icons/ai';

const RecentRecipes = () => {
    return (
        <div className='container'>
            <div className='py-20 px-5'>
                <h2 className='text-2xl font-secondary pb-5'>Recent recipes</h2>
                <div className='flex flex-wrap lg:flex-nowrap gap-14 justify-between'>
                    <div className='flex justify-center'>
                        <div>
                            {data.map((item, index) => {
                                return (
                                    <div className='flex flex-wrap md:flex-nowrap justify-center gap-6 items-center w-full md:max-w-[730px] mx-auto py-4' key={index}>
                                        <div className="relative overflow-hidden md:max-w-[500px] ">
                                            <Image className='transition-transform pb-3 hover:scale-105 duration-500 w-full' src={item.mainImg} alt={'food'} width={800} height={800} />
                                        </div>
                                        <div className='gap-7 pb-3'>
                                            <div className='flex gap-1 text-gray-400 items-center'>
                                                <BsCameraVideo />
                                                <span className='text-base'>30 Minutes</span>
                                            </div>
                                            <p className='text-xl sm:text-2xl font-secondary pb-4'>{item.mainHeading}</p>
                                            <p className='text-gray-500 pb-6'>{item.description}</p>
                                        </div>
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                    <div className='max-w-full w-full lg:max-w-[360px]'>
                        <div className='relative w-full grid grid-cols-3 justify-center gap-x-7 gap-y-6 border px-8 py-14'>
                            <p className="absolute bg-white left-1/2  transform -translate-x-1/2 -translate-y-1/2 px-5">Categories</p>
                            {categary.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Image className='box flex justify-center m-auto pb-2' src={item.img} alt={'food'} width={70} height={70} />
                                        <p className='text-center font-secondary text-lg'>{item.text}</p>
                                    </div>

                                )
                            })}
                        </div>
                        <div className="w-full lg:max-w-[350px] bg-[#F7F7F7] px-12 py-10 my-10">
                            <h2 className="text-3xl font-secondary text-center mb-4">Never Miss A Post!</h2>
                            <p className="text-center text-gray-400 pb-8">Sign up for free and be the first to get notified about updates.</p>
                            <form className="items-center">
                                <input type="email" className="flex-grow py-3 border mb-4 px-4 outline-none w-full" placeholder="Your Email*" />
                                <button type="submit" className="bg-[#1E1E1E] text-gray-200 py-3 px-4 w-full">Subscribe</button>
                            </form>
                        </div>
                        <div className='relative border px-8 py-14'>
                            <p className="absolute bg-white left-1/2 font-secondary -top-0.5 transform -translate-x-1/2 -translate-y-1/2 px-5">Latest recipes </p>
                            <div>
                                {sidebar.map((item, index) => {
                                    return (
                                        <div className='flex flex-wrap sm:flex-nowrap justify-center gap-6 items-center mx-auto max-w-[350px] py-3' key={index}>
                                            <div className="relative overflow-hidden max-w-[500px] ">
                                                <Image className='transition-transform sm:pb-3 hover:scale-105 duration-500' src={item.mainImg} alt={'food'} width={200} height={200} />
                                            </div>
                                            <div className=''>
                                                <p className='text-lg font-secondary pb-2 leading-5'>{item.mainHeading}</p>
                                                <p className='text-gray-500'>{item.description}</p>
                                            </div>
                                        </div>

                                    )
                                })}
                            </div>
                        </div>
                        <Image className='py-10 cursor-pointer mx-auto flex justify-center w-full' src={'/add.jpg'} alt='add' width={500} height={500} />
                        <div className='relative  border px-8 py-10 '>
                            <p className="absolute bg-white left-1/2 font-secondary -top-0.5 transform -translate-x-1/2 -translate-y-1/2 px-5">Follow me </p>
                            <div className='flex justify-between gap-2 items-center px-5 max-w-[540px] mx-auto'>
                                {icons.map((item, index) => {
                                    return (
                                        <span className='text-2xl cursor-pointer' key={index}>
                                            {item.icon}
                                        </span>
                                    )
                                })}
                            </div>
                        </div>
                        <Image className='py-10 cursor-pointer mx-auto' src={'/youtube.png'} alt='add' width={150} height={150} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RecentRecipes


const data = [
    {
        mainImg: '/food1.jpg',
        mainHeading: 'The best fluffy buttermilk pancakes with triple berry sauce ',
        description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi '
    },
    {
        mainImg: '/food1.jpg',
        mainHeading: 'The best fluffy buttermilk pancakes with triple berry sauce ',
        description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi '
    },
    {
        mainImg: '/food1.jpg',
        mainHeading: 'The best fluffy buttermilk pancakes with triple berry sauce ',
        description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi '
    },
    {
        mainImg: '/food1.jpg',
        mainHeading: 'The best fluffy buttermilk pancakes with triple berry sauce ',
        description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi '
    },
    {
        mainImg: '/food1.jpg',
        mainHeading: 'The best fluffy buttermilk pancakes with triple berry sauce ',
        description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi '
    },
    {
        mainImg: '/food1.jpg',
        mainHeading: 'The best fluffy buttermilk pancakes with triple berry sauce ',
        description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi '
    },
    {
        mainImg: '/food1.jpg',
        mainHeading: 'The best fluffy buttermilk pancakes with triple berry sauce ',
        description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi '
    },
    {
        mainImg: '/food1.jpg',
        mainHeading: 'The best fluffy buttermilk pancakes with triple berry sauce ',
        description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad mi '
    },
]

const sidebar = [
    {
        mainImg: '/food1.jpg',
        mainHeading: 'Cupcakes with coconut oil ',
        description: 'June 10, 2020'
    },
    {
        mainImg: '/food1.jpg',
        mainHeading: 'Cupcakes with coconut oil ',
        description: 'June 10, 2020'
    },
    {
        mainImg: '/food1.jpg',
        mainHeading: 'Cupcakes with coconut oil ',
        description: 'June 10, 2020'
    },
    {
        mainImg: '/food1.jpg',
        mainHeading: 'Cupcakes with coconut oil ',
        description: 'June 10, 2020'
    },
]


const categary = [
    {
        img: '/tomato.png',
        text: 'Popular'
    },
    {
        img: '/pizza.png',
        text: 'Pizza'
    },
    {
        img: '/meat.png',
        text: 'Meat'
    },
    {
        img: '/lunch.png',
        text: 'Lunch'
    },
    {
        img: '/green.png',
        text: 'Greens'
    },
    {
        img: '/desserts.png',
        text: 'Desserts'
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