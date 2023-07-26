import React from 'react'

const DropDown = () => {
    return (
        <div>
            {data.map((item, index) => (
                <div className="flex-shrink-0 relative" key={index}>
                    <div
                        className="flex text-base font-medium items-center text-[#6f6f6f] active:text-secondary hover:text-secondary transition-all duration-200 cursor-pointer focus:outline-none p-[7px]"
                        onMouseOver={() => handleOpen(item)}
                    >
                        <Link href={item.path}> <span>{item.mainText}</span> </Link>
                        {index < 1 && (
                            <span
                                className={`transition-all duration-300 font-normal text-lg transform  ${isOpen && currentItem === item ? 'rotate-180' : 'rotate-0'
                                    }`}
                            >
                                <IoIosArrowDown />
                            </span>
                        )}
                    </div>
                    {isOpen && currentItem === item && (
                        <div
                            className='absolute w-[250px] top-[50px] left-0 right-[160px] text-sm font-bold mt-2 bg-main  text-[rgb(0,0,0,0.7)] '
                            id="dropdown"
                            onMouseLeave={handleClose}
                            ref={dropdownRef}
                        >
                            {item.innerText?.map((innerItem, innerIndex) => (
                                <div className="mx-auto cursor-pointer gap-4   px-4 py-3 my-5 hover:bg-[#f9f9f9] transition-all duration-700 flex items-center" key={innerIndex}>
                                    <div className="text-2xl mr-2 text-[#5412BC]" >
                                        {innerItem.icon}
                                    </div>
                                    <div>
                                        <Link href={innerItem.path}><span className="text-sm">{innerItem.label}</span> </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}</div>
    )
}

export default DropDown