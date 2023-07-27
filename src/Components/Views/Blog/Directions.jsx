import Image from 'next/image';
import React, { useState } from 'react';
import { MdDone } from "react-icons/md";

const Directions = () => {
    const [activeIndex2, setActiveIndex2] = useState(false);


    const handleIndex = (index) => {
        setActiveIndex2((prevIndex) => (prevIndex === index ? false : index));
    };

    return (
        <div className='container px-5'>
            <div className='w-full lg:max-w-[750px]'>
                <h2 className='text-3xl font-secondary pb-5'>Directions</h2>
                {data.map((item, index) => {
                    return (
                        <div className={`relative  ${index > 1 ? 'pb-0' : 'pb-7'} border-l-[2px] border-l-[#fee86d] pl-8 sm:pl-10`} key={index}>
                            <div className={` transition-all duration-300 pb-5 ${activeIndex2 === index ? ' opacity-50' : ' opacity-100'}`}>
                                <h2 className='text-xl sm:text-2xl font-secondary pb-5'>{item.mainHeading} </h2>
                                <p className='text-base sm:text-lg text-gray-500 opacity-60 pb-6'>{item.firstPara}</p>
                                <div className='flex gap-5 pb-6'>
                                    <Image className='w-full' src={item.img} alt='img' width={500} height={500} />
                                    {item.imgTwoShow && item.imgTwo && (
                                        <Image className='w-full' src={item.imgTwo} alt='img' width={500} height={500} />
                                    )}
                                    {item.imgThreeShow && item.imgThree && (
                                        <Image className='w-full' src={item.imgThree} alt='img' width={500} height={500} />
                                    )}
                                </div>
                                <p className='text-base sm:text-lg text-gray-500 opacity-60'>{item.secPara}</p>
                            </div>
                            <div className={`absolute ${index > 0 ? ' -top-2 -left-[21px] sm:-left-[30px] ' : ' -top-2 -left-[21px] sm:-left-[30px]'} sm:w-14 w-10 sm:h-14 h-10 text-2xl bg-[#fee86d] text-white rounded-full flex justify-center items-center`}>
                                {index + 1}
                            </div>
                            <div className="flex gap-2 items-center" >
                                <span
                                    className={` cursor-pointer border-[1.5px] border-gray-400 w-4 h-4 rounded-full ${activeIndex2 === index ? 'hidden' : ''}`}
                                    onClick={() => handleIndex(index)}
                                ></span>
                                {activeIndex2 === index && (
                                    <h1 className="cursor-pointer text-gray-500 opacity-60 " onClick={() => handleIndex(index)}><MdDone /></h1>
                                )}
                                <h1 className="cursor-pointer text-gray-500 opacity-60  py-3 relative"
                                    onClick={() => handleIndex(index)}
                                >
                                    Mark as complete
                                </h1>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Directions;


const data = [
    {
        mainHeading: 'Make the barbecue sauce (or substitute 3/4 to 1 cup bottled sauce): ',
        firstPara: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        secPara: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        img: '/salad1.jpg',
        imgTwo: '/salad.jpg',
        imgTwoShow: true,
        imgThree: '/gappa.jpg',
        imgThreeShow: false,
        number: 1
    },
    {
        mainHeading: 'Cook the chicken (or substitute 2 cups shredded cooked chicken):',
        firstPara: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        secPara: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        img: '/pandy.png',
        imgTwo: '/salad.jpg',
        imgTwoShow: false,
        imgThree: '/gappa.jpg',
        imgThreeShow: false,
        number: 2
    },
    {
        mainHeading: 'Mix the chicken with the barbecue sauce:',
        firstPara: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        secPara: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        img: '/salad1.jpg',
        imgTwo: '/salad.jpg',
        imgTwoShow: true,
        imgThree: '/gappa.jpg',
        imgThreeShow: true,
        number: 3
    },
]