import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const DropDown = () => {

    const [dropDown, setDropDown] = useState(false);

    return (
        <div>
            <div
                className="relative pb-40"
                onMouseLeave={() => setDropDown(false)}
            >
                <button
                    onMouseOver={() => setDropDown(true)}
                    className="text-[14px] font-medium flex gap-1 justify-center items-center text-[#6f6f6f] active:text-secondary hover:text-secondary  p-2 "
                >
                    <span>Home</span>
                    <span
                        className={`text-[14px] transition-all duration-200 ${dropDown ? "rotate-180" : " "}`}
                    >
                        <IoIosArrowDown />
                    </span>
                </button>

                <ul
                    className={`absolute z-20 left-0 top-8 right-0 w-64 py-2 bg-[#fffdfd] overflow-hidden transition-all duration-500 ${dropDown ? "shadow-xl  max-h-80" : "  max-h-0"
                        }`}
                >
                    {links.map((item, index) => {
                        return (
                            <Link href={''} key={index}>
                                <li className="flex gap-4 w-full items-center px-3 py-2 text-[14px] hover:text-[#91A3F2] hover:bg-gray-100">
                                    {item.link}
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default DropDown;

