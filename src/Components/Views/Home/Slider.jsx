import React from "react"
import Image from "next/image"

const Slider = () => {

    return (
        <div className="max-w-[700px] py-20 mx-auto">
            <marquee behavior="scroll" direction="left" className="">
                <div className="flex justify-center gap-3">
                    {images.map((item, index) => {
                        return (
                            <div className="" key={index}
                                style={{
                                    maxWidth: '100px',
                                    minWidth: '100px',

                                }}
                            >
                                <Image src={item.img} alt="food-barnds" width={100} height={100} />
                            </div>
                        )
                    })}
                </div>
            </marquee>
        </div>
    )
}

export default Slider;

const images = [
    {
        img: '/foodies.png'
    },
    {
        img: '/foodies.png'
    },
    {
        img: '/kitchen.png'
    },
    {
        img: '/seafood.png'
    },
    {
        img: '/kitchen.png'
    },
    {
        img: '/foodies.png'
    },
    {
        img: '/foodies.png'
    },
    {
        img: '/foodies.png'
    },
    {
        img: '/foodies.png'
    },
    {
        img: '/foodies.png'
    },
    {
        img: '/foodies.png'
    },
    {
        img: '/foodies.png'
    },
    {
        img: '/foodies.png'
    }, {
        img: '/foodies.png'
    }, {
        img: '/foodies.png'
    },
]
