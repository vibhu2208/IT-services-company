import Link from 'next/link'
import React from 'react'
import { FaLinkedinIn, FaMapMarkerAlt, FaPhoneVolume } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
    return (
        <div className='bg-[#020a27] justify-self-end'>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-3 py-8 max-w-6xl mx-auto'>
                <div className='flex flex-col px-4 gap-4'>
                    <p className='uppercase text-lg font-semibold text-white'>About Company</p>
                    <p className='text-gray-300 font-normal'>
                        Vysnovy is a consulting, IT staffing solutions and workforce support services. We are based out of Houston, TX.
                    </p>
                    <p className='uppercase text-md font-semibold text-white'>Follow Us</p>
                    <p className='flex flex-wrap gap-2'>
                        <span className='bg-[#0f588c] p-1 rounded'>
                            <FaLinkedinIn className='text-yellow-500' />
                        </span>
                    </p>
                </div>
                <div className='flex flex-col flex-wrap px-4 gap-4'>
                    <p className='uppercase text-lg font-semibold text-white'>Our Services</p>
                    <Link href={"/services"} className='text-gray-300 font-normal'>
                        IT Consulting
                    </Link>
                    <Link href={"/services"} className='text-gray-300 font-normal'>
                        Development Services
                    </Link>
                    <Link href={"/services"} className='text-gray-300 font-normal'>
                        Staffing
                    </Link>
                    <Link href={"/services"} className='text-gray-300 font-normal'>
                        Emerging Technology
                    </Link>
                    <Link href={"/services"} className='text-gray-300 font-normal'>
                        Digital Marketing
                    </Link>
                </div>
                <div className='flex flex-col px-4 gap-4'>
                    <p className='uppercase text-lg font-semibold text-white'>Contact Us</p>
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-2 text-white'> <span className='rounded-full p-1 border border-white'><FaMapMarkerAlt className='text-md text-yellow-500' /></span> 9950 Westpark Dr Suite
                            127 Houston, TX 77063</div>
                        <div className='flex items-center gap-2 text-white'> <span className='rounded-full p-1 border border-white'><MdEmail className='text-md text-yellow-500' /></span>
                            info@vertexelites.com</div>
                        <div className='flex items-center gap-2 text-white'> <span className='rounded-full p-1 border border-white'><FaPhoneVolume className='text-md text-yellow-500' /></span>
                            +1 (703) 220-1546</div>
                    </div>
                </div>
            </div>
            <hr />
            <p className='py-2 px-10 text-center text-white'>
                © Copyright 2024 All rights reserved by Vysnovy
            </p>
        </div>
    )
}

export default Footer
