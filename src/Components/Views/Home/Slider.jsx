import React, { useRef } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"

const animation = { duration: 20000, easing: (t) => t };

export default () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        drag: false,
        slides: {
            perView: 7,

        },
        created(s) {
            s.moveToIdx(5, true, animation);
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        }
    });

    return (
        <div className=" container overflow-hidden ml-6 py-20 mx-auto">
            <div ref={sliderRef} className="">
                <div className="flex justify-center gap-3">
                    {images.map((item, index) => {
                        return (
                            <div className="keen-slider__slide" key={index}
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
            </div>
        </div>
    )
}


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
]
