"use client"
import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'

const data = [
    "https://www.dwellfox.com/Assets/micro.png",
    "https://www.dwellfox.com/Assets/data.png",
    "https://www.dwellfox.com/Assets/atla.png",
    "https://www.dwellfox.com/Assets/aws.png",
    "https://www.dwellfox.com/Assets/big.png",
    "https://www.dwellfox.com/Assets/shopify.png"
]

const CompanySlider = () => {
    return (
        <div className='bg-white gap-8 p-8 md:p-16 flex flex-col'>
            <h2 className='text-4xl font-bold text-[#1A1F65] text-center' data-aos="fade-up" data-aos-delay="500">Our Partners</h2>
            <Carousel
                additionalTransfrom={0}
                ssr={true}
                arrows={false}
                autoPlaySpeed={1000}
                centerMode={true}
                className="max-h-[95vh]"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                showDots
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {
                    data.map((img, i) => (
                        <img key={i} src={img} alt={img} className='h-20 mb-10' />
                    ))
                }
            </Carousel>
        </div>
    )
}

export default CompanySlider
