import Link from 'next/link'
import React from 'react'
import { AiOutlineTeam } from 'react-icons/ai'

const WhyUs = () => {
    return (
        <div className='flex gap-8 md:gap-16 bg-[#f2f2f2] items-center p-4 md:p-16 flex-col lg:flex-row'>
            <div className='flex w-full flex-col  md:gap-8 gap-4 flex-1'>
                <h2 className='text-4xl font-bold text-[#211E6D]' data-aos="fade-up" data-aos-delay="300">
                    Why TTS ?
                </h2>
                <p className='md:text-xl text-base' data-aos="fade-up" data-aos-delay="300">
                    We believe in integrity, innovation, constant improvement, commitment to customers, teamwork and trust. We provide high-level planning and infrastructure consulting through technology partnerships. We work on developing your technology implementation and management plan.
                </p>
                <Link href={"about-us"}>
                    <div data-aos="fade-up" data-aos-delay="300" className='px-8 py-2 cursor-pointer w-fit font-medium bg-[#211E6D] hover:bg-sky-700 transition-all text-white rounded-lg shadow-lg'>
                        More About Us
                    </div>
                </Link>
            </div>
            <div className='flex flex-col gap-4 flex-1'>
                <div data-aos="fade-up" data-aos-delay="300" className='bg-white rounded-lg shadow-xl p-4 mr-4 flex gap-2'>
                    <div className='mt-2'>
                        <AiOutlineTeam className='text-4xl text-[#211E6D]' /> 
                    </div>
                    <div>
                        <h2 className='text-lg font-semibold text-[#211E6D]'>
                            Expert Team
                        </h2>
                        <p className='text-normal'>
                            At VirtexElite, we believe in quality, so we have a more comprehensive, versatile, and skilled team that will go above and beyond to meet the needs of our clients.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="300" className='bg-white rounded-lg shadow-xl p-4 mr-4 flex gap-2'>
                    <div className='mt-2'>
                        <AiOutlineTeam className='text-4xl text-[#211E6D]' /> 
                    </div>
                    <div>
                        <h2 className='text-lg font-semibold text-[#211E6D]'>
                        Committed to delivery
                        </h2>
                        <p className='text-normal'>
                        Our goal is to assist businesses in growing, so we ensure that clients receive their project deliveries on time. As a result, our clients have faith in us and rely on us for their needs.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="300" className='bg-white rounded-lg shadow-xl p-4 mr-4 flex gap-2'>
                    <div className='mt-2'>
                        <AiOutlineTeam className='text-4xl text-[#211E6D]' /> 
                    </div>
                    <div>
                        <h2 className='text-lg font-semibold text-[#211E6D]'>
                        24-hour assistance
                        </h2>
                        <p className='text-normal'>
                        We have a customer support team that is dedicated to providing your business with solutions 24/7, as needed, with various modes of communication.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs
