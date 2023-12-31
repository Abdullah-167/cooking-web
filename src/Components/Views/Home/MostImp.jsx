import Image from 'next/image'
import React from 'react'

const MostImp = () => {
    return (
        <div className=' container px-5'>
            <h2 className='text-3xl font-secondary text-center pb-7'>The most popular recipes this week</h2>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 gap-y-10'>
                {cards.map((item, index) => {
                    return (
                        <div key={index}>
                            <Image className='w-full' src={item.img} alt='food-img' width={200} height={200} />
                            <p className='text-xl md:text-lg leading-5 font-secondary pt-2'>{item.text} </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MostImp


const cards = [
    {
        img: '/food3.jpg',
        text: 'Marshmallow light and easy cake '
    },
    {
        img: '/food3.jpg',
        text: 'Marshmallow light and easy cake '
    },
    {
        img: '/food3.jpg',
        text: 'Marshmallow light and easy cake '
    },
    {
        img: '/food3.jpg',
        text: 'Marshmallow light and easy cake '
    },
    {
        img: '/food3.jpg',
        text: 'Marshmallow light and easy cake '
    },
    {
        img: '/food3.jpg',
        text: 'Marshmallow light and easy cake '
    },
    {
        img: '/food3.jpg',
        text: 'Marshmallow light and easy cake '
    },
    {
        img: '/food3.jpg',
        text: 'Marshmallow light and easy cake '
    },
    {
        img: '/food3.jpg',
        text: 'Marshmallow light and easy cake '
    },
    {
        img: '/food3.jpg',
        text: 'Marshmallow light and easy cake '
    },
    {
        img: '/food3.jpg',
        text: 'Marshmallow light and easy cake '
    },
    {
        img: '/food3.jpg',
        text: 'Marshmallow light and easy cake '
    },
]