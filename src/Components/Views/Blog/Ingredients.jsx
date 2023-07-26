
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { MdDone } from "react-icons/md";

const Ingredients = () => {

    const [activeIndex, setactiveIndex] = useState([]);
    const [activeIndex2, setActiveIndex2] = useState([])

    const handleIndex = (index) => {
        if (activeIndex.includes(index)) {
            setactiveIndex(activeIndex.filter((newIndex) => newIndex !== index));
        } else {
            setactiveIndex([...activeIndex, index]);
        }
    };

    const handleIndexTwo = (index) => {
        if (activeIndex2.includes(index)) {
            setActiveIndex2(activeIndex2.filter((newIndex) => newIndex !== index));
        } else {
            setActiveIndex2([...activeIndex2, index]);
        }
    };

    return (
        <div className=" container py-10">
            <p className="text-3xl font-secondary pb-5">Ingredients</p>
            <div className="pb-10">
                <p className=" font-secondary text-lg pb-5">Adjust Servings</p>
                {data.map((item, index) => (
                    <div key={index} className="relative">
                        <div className="relative z-10 opacity-95">
                            <div className="card">
                                <div className="flex gap-4 items-center ">
                                    <span
                                        className={`border-[1.5px] border-gray-400 w-4 h-4 rounded-full ${activeIndex.includes(index) ? 'hidden' : ''}`}
                                        onClick={() => handleIndex(index)}
                                    ></span>
                                    {activeIndex.includes(index) && (
                                        <h1 className="text-gray-500 opacity-60 " onClick={() => handleIndex(index)}>{item.tick}</h1>
                                    )}
                                    <h1 className="text-gray-500 opacity-60 border-l-2 border-l-gray-100 pl-5 py-3 relative">
                                        {item.fieldOne}
                                        {activeIndex.includes(index) && (
                                            <p className="absolute top-[25px] left-3 h-[0.5px] w-full bg-black"></p>
                                        )}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="">
                <p className=" font-secondary text-lg pb-5">For Dressing</p>
                {data2.map((item, index) => (
                    <div key={index} className="relative">
                        <div className="relative z-10 opacity-95">
                            <div className="card">
                                <div className="flex gap-4 items-center ">
                                    <span
                                        className={`border-[1.5px] border-gray-400 w-4 h-4 rounded-full ${activeIndex2.includes(index) ? 'hidden' : ''}`}
                                        onClick={() => handleIndexTwo(index)}
                                    ></span>
                                    {activeIndex2.includes(index) && (
                                        <h1 className="text-gray-500 opacity-60 " onClick={() => handleIndexTwo(index)}>{item.tick}</h1>
                                    )}
                                    <h1 className="text-gray-500 opacity-60 border-l-2 border-l-gray-100 pl-5 py-3 relative">
                                        {item.fieldOne}
                                        {activeIndex2.includes(index) && (
                                            <p className="absolute top-[25px] left-3 h-[0.5px] w-full bg-black"></p>
                                        )}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ingredients;


const data = [
    {
        typeOne: 'radio',
        fieldOne: "10 pisces ",
        tick: <MdDone />
    },
    {
        typeOne: 'radio',
        fieldOne: "1000 g Ground Beef  ",
        tick: <MdDone />
    },
    {
        typeOne: 'radio',
        fieldOne: "  20 Eggs batches flax eggs* (2 flax eggs = 2 Tbsp flaxseed meal / 14 g + 5 Tbsp / 75 ml water)  ",
        tick: <MdDone />
    },
    {
        typeOne: 'radio',
        fieldOne: "  1 ½ cups peeled and chopped golden potato or sweet potato (large bite-size pieces)  ",
        tick: <MdDone />
    },
    {
        typeOne: 'radio',
        fieldOne: "  0.8500000000000001 cup chopped walnuts or pecans (or sub other nut or seed of choice)  ",
        tick: <MdDone />
    }
];


const data2 = [
    {
        typeOne: 'radio',
        fieldOne: "10 pisces ",
        tick: <MdDone />
    },
    {
        typeOne: 'radio',
        fieldOne: "1000 g Ground Beef  ",
        tick: <MdDone />
    },
    {
        typeOne: 'radio',
        fieldOne: "  20 Eggs batches flax eggs* (2 flax eggs = 2 Tbsp flaxseed meal / 14 g + 5 Tbsp / 75 ml water)  ",
        tick: <MdDone />
    },
    {
        typeOne: 'radio',
        fieldOne: "  1 ½ cups peeled and chopped golden potato or sweet potato (large bite-size pieces)  ",
        tick: <MdDone />
    },
    {
        typeOne: 'radio',
        fieldOne: "  0.8500000000000001 cup chopped walnuts or pecans (or sub other nut or seed of choice)  ",
        tick: <MdDone />
    }
];