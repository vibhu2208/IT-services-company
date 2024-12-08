import Link from 'next/link';
import React from 'react';
import { FaLinkedinIn, FaMapMarkerAlt, FaPhoneVolume } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className='bg-[#020a27] text-gray-300 py-8'>
            <div className='max-w-6xl mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='uppercase text-lg font-semibold text-white'>About Company</h3>
                        <p>
                            Techthrivesystem is dedicated to providing high-quality IT solutions and services to help businesses achieve their goals. Our expertise spans across various domains, ensuring that we deliver tailored solutions to meet unique business needs.
                        </p>
                        <h3 className='uppercase text-md font-semibold text-white'>Follow Us</h3>
                        <div className='flex gap-2'>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='bg-[#0f588c] p-2 rounded-full'>
                                <FaLinkedinIn className='text-white' />
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h3 className='uppercase text-lg font-semibold text-white'>Our Services</h3>
                        <Link href={"/services/servicenow-implementation-and-support"} className='hover:underline'>
                            ServiceNow Implementation and Support
                        </Link>
                        <Link href={"/services/dynatrace-performance-monitoring"} className='hover:underline'>
                            Dynatrace Performance Monitoring
                        </Link>
                        <Link href={"/services/devops-consulting"} className='hover:underline'>
                            DevOps Consulting
                        </Link>
                        <Link href={"/services/opentext-solutions"} className='hover:underline'>
                            OpenText Solutions
                        </Link>
                        <Link href={"/services/chatbot-development"} className='hover:underline'>
                            ChatBot Development
                        </Link>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h3 className='uppercase text-lg font-semibold text-white'>Contact Us</h3>
                        <p className='flex items-center gap-2'>
                            <FaMapMarkerAlt /> 1234 Street Name, City, State, 12345
                        </p>
                        <p className='flex items-center gap-2'>
                            <FaPhoneVolume /> (123) 456-7890
                        </p>
                        <p className='flex items-center gap-2'>
                            <MdEmail /> info@techthrivesystem.com
                        </p>
                    </div>
                </div>
                <div className='mt-8 border-t border-gray-700 pt-4 text-center'>
                    <p className='text-sm'>
                        &copy; {new Date().getFullYear()} Techthrivesystem. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;