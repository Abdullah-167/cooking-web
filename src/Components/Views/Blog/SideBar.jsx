import Image from 'next/image'
import React from 'react'

const SideBar = () => {
    return (
        <div>
            <div className='max-w-full w-full lg:max-w-[360px]'>
                <Image className='pt-20 pb-20 w-full' src={'/add.jpg'} alt='add-imgh' width={500} height={500} />
                <div className='relative gap-x-7 gap-y-6 border px-8 py-14'>
                    <p className="absolute bg-white -top-0.5 left-1/2  transform -translate-x-1/2 -translate-y-1/2 px-5">Categories</p>
                    <Image className='flex justify-center mx-auto pb-2' src={'/girl.png'} alt={'food'} width={150} height={150} />
                    <p className='text-center font-secondary text-lg px-2 pb-8'>I create simple, delicious recipes that require 10 ingredients or less, one bowl, or 30 minutes or less to prepare.</p>
                    <Image className='flex justify-center mx-auto pb-2' src={'/signature.png'} alt={'signature'} width={250} height={250} />
                </div>
                <Image className='pt-20 pb-10 cursor-pointer w-full' src={'/healthy.jpg'} alt='add-imgh' width={500} height={500} />
                <Image className='pb-20 cursor-pointer w-full' src={'/breakfast.jpg'} alt='add-imgh' width={500} height={500} />

                <div className="w-full lg:max-w-[350px] bg-[#F7F7F7] px-12 py-10 mb-20">
                    <h2 className="text-3xl font-secondary text-center mb-4">Never Miss A Post!</h2>
                    <p className="text-center text-gray-400 pb-8">Sign up for free and be the first to get notified about updates.</p>
                    <form className="items-center">
                        <input type="email" className="flex-grow py-3 border mb-4 px-4 outline-none w-full" placeholder="Your Email*" />
                        <button type="submit" className="bg-[#1E1E1E] text-gray-200 py-3 px-4 w-full">Subscribe</button>
                    </form>
                </div>
                <div className='relative  border px-8 py-14 mb-20'>
                    <p className="absolute bg-white left-1/2 font-secondary -top-0.5 transform -translate-x-1/2 -translate-y-1/2 px-5">Latest recipes </p>
                    <div>
                        {sidebar.map((item, index) => {
                            return (
                                <div className='flex justify-center mx-auto gap-6 items-center max-w-[350px] py-1' key={index}>
                                    <div className="relative overflow-hidden max-w-[500px] ">
                                        <Image className='transition-transform pb-3 hover:scale-105 duration-500' src={item.mainImg} alt={'food'} width={200} height={200} />
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
                <div className='relative grid grid-cols-3 gap-x-7 gap-y-6 border px-8 py-6 sm:py-14'>
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
            </div>
        </div>
    )
}

export default SideBar;


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
