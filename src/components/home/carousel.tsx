import Link from 'next/link';
import React from 'react'
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import Carousel from "react-multi-carousel";

const data = [
    {
        url: "/videos/logic.mp4",
        desc: <>
        <span className='text-yellow-500'>Vysnovy</span> {' '}
        Excellent <br />
        IT Services for your <br />
        success
      </>
    },
    {
        url: "/videos/info.mp4",
        desc: <>
        <span className='text-yellow-500'>Vysnovy </span> <br /> Aims at Productivity, <br />Flexibility
        and Impact
      </>
    },
]

const CustomDot = ({ ...rest }) => {
    const {
      onClick,
      active,
    } = rest;
    return (
      <div
        onClick={() => onClick()}
        className={`md:mb-10 mb-3 h-1 w-20 cursor-pointer mx-4 ${active ? "bg-white" : "bg-[#A5A5A5]"}`}
      >
      </div>
    );
  };

const CustomCarousel = () => {
    return (
        <Carousel
            additionalTransfrom={0}
            ssr={true}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className="max-h-[95vh]"
            customDot={<CustomDot />}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 1
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
                    items: 1
                }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            {
                data.map((item, i) => {
                    return (
                        <div className='h-full w-full m-auto relative' key={i}>
                            <video src={item.url} autoPlay loop></video>
                            <div className='absolute top-0 h-[100%] w-full text-white flex items-center justify-center flex-col gap-4'>
                                <h2 data-aos="fade-up" data-aos-delay="400" className='lg:text-5xl md:text-4xl text-lg font-bold text-center'>{item.desc}</h2>
                                <Link href="/services">
                                    <div data-aos="fade-up" data-aos-delay="400" className='flex gap-4 items-center px-3 py-1 lg:px-5 lg:py-2 cursor-pointer w-fit font-medium hover:text-[#1A1F65] hover:bg-white hover:shadow-lg transition-all text-white rounded-2xl'>
                                        <span className='md:text-2xl text-lg'><IoArrowForwardCircleOutline /></span>
                                        <span className='md:text-lg text-sm'>
                                            Explore
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </Carousel>
    )
}

export default CustomCarousel