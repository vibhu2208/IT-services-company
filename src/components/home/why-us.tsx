import React from 'react';
import Link from 'next/link';
import { AiOutlineTeam } from 'react-icons/ai';
import { FaRegHandshake } from 'react-icons/fa';
import { MdOutlineSecurity } from 'react-icons/md';

const WhyUs = () => {
    return (
        <div className='flex gap-8 md:gap-16 bg-[#f2f2f2] items-center p-4 md:p-16 flex-col lg:flex-row'>
            <div className='flex w-full flex-col md:gap-8 gap-4 flex-1'>
                <h2 className='text-4xl font-bold text-[#211E6D]' data-aos="fade-up" data-aos-delay="300">
                    Why TTS?
                </h2>
                <p className='md:text-xl text-base' data-aos="fade-up" data-aos-delay="300">
                    We believe in integrity, innovation, constant improvement, commitment to customers, teamwork, and trust. We provide high-level planning and infrastructure consulting through technology partnerships. We work on developing your technology implementation and management plan.
                </p>
                <Link href="/about-us">
                    <div data-aos="fade-up" data-aos-delay="300" className='px-8 py-2 cursor-pointer w-fit font-medium bg-[#211E6D] hover:bg-sky-700 transition-all text-white rounded-lg shadow-lg'>
                        More About Us
                    </div>
                </Link>
            </div>
            <div className='flex flex-col gap-4 flex-1'>
                <div data-aos="fade-up" data-aos-delay="300" className='bg-white rounded-lg shadow-xl p-6 flex gap-4 items-center'>
                    <AiOutlineTeam className='text-5xl text-[#211E6D]' />
                    <div>
                        <h3 className='text-xl font-semibold text-[#211E6D]'>
                            Expert Team
                        </h3>
                        <p className='text-gray-700'>
                            At TechThrive System, we believe in quality, so we have a more comprehensive, versatile, and skilled team that will go above and beyond to meet the needs of our clients.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="300" className='bg-white rounded-lg shadow-xl p-6 flex gap-4 items-center'>
                    <FaRegHandshake className='text-5xl text-[#211E6D]' />
                    <div>
                        <h3 className='text-xl font-semibold text-[#211E6D]'>
                            Committed to Delivery
                        </h3>
                        <p className='text-gray-700'>
                            We are committed to delivering high-quality solutions on time and within budget, ensuring our clients' success.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="300" className='bg-white rounded-lg shadow-xl p-6 flex gap-4 items-center'>
                    <MdOutlineSecurity className='text-5xl text-[#211E6D]' />
                    <div>
                        <h3 className='text-xl font-semibold text-[#211E6D]'>
                            Security Focused
                        </h3>
                        <p className='text-gray-700'>
                            We prioritize security in all our solutions, ensuring that your data and systems are protected at all times.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;