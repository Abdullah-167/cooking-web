import React from 'react'
import Image from 'next/image';


const HorCards = () => {
    return (
        <div className=' container'>
            <div className=' py-14'>
                <div className='flex flex-wrap md:flex-nowrap justify-center gap-3'>
                    {sidebar.map((item, index) => {
                        return (
                            <div className='flex flex-col gap-6 items-center max-w-[350px] py-1' key={index}>
                                <div className="relative overflow-hidden max-w-[500px] ">
                                    <Image className='transition-transform pb-1 hover:scale-105 duration-500 min-h-[250px] object-cover' src={item.mainImg} alt={'food'} width={200} height={200} />
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
        </div>
    )
}

export default HorCards


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
