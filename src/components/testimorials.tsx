"use client";
import React from 'react'
import { FaUser } from 'react-icons/fa';
import Carousel from "react-multi-carousel";

const data = [
    {
        desc: "Their creative solutions and prompt service made all the difference for our digital campaigns. We couldn't be happier!",
        name: "Sumit Saurabh",
        desig: "Marketing Director at Creative Agency",
    },
    {
        desc: "As a startup, we needed a reliable IT partner, and Vysnovy exceeded our expectations. Their team is knowledgeable and always ready to help!",
        name: "David P.",
        desig: "Founder of StartUp Co.",
    },
    {
        desc: "We were impressed with how quickly Vysnovy understood our needs and delivered tailored solutions. Fantastic service!",
        name: "Kavita Singh",
        desig: "HR Manager at Global Corp",
    },
    {
        desc: "The team at Vysnovy transformed our IT infrastructure. Their expertise and support have been invaluable, and our productivity has soared!",
        name: "Raj Kamal",
        desig: "CEO of Tech Innovations Inc.",
    },
    {
        desc: "From cybersecurity to network management, Vysnovy has been our go-to partner. Their proactive approach has kept us ahead of potential threats!",
        name: "Rahul Kumar",
        desig: "Operations Manager at Retail Hub",
    },
]

const Testimonials = () => {
    return (
        <section className="relative isolate overflow-hidden bg-white py-16">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
            <h2 className='text-4xl font-bold text-center' data-aos="fade-up" data-aos-delay="400">Our <span className='text-[#1A1F65]'>Testimonial </span></h2>

            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
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
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {
                    data.map((item, i) => (
                        <div className="mx-auto h-full w-full max-w-2xl lg:max-w-4xl" key={i}>
                            <figure className="mt-10">
                                <blockquote className="text-center text-sm md:text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                                    <p>“{item.desc}”</p>
                                </blockquote>
                                <figcaption className="mt-10">
                                    <p className='flex justify-center text-2xl md:text-4xl'>
                                    <FaUser /> 
                                    </p>
                                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                        <div className="font-semibold text-gray-900">{item.name}</div>
                                        <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                                            <circle cx="1" cy="1" r="1" />
                                        </svg>
                                        <div className="text-gray-600">{item.desig}</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    ))
                }
            </Carousel>
        </section>

    )
}

export default Testimonials
