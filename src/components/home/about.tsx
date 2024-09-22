import Link from 'next/link'
import React from 'react'
import { HiCheck } from 'react-icons/hi'

const About = () => {
  return (
    <div className='bg-[#f2f2f2]'>
    <div className='flex flex-col gap-5 md:flex-row py-8 md:py-16 w-full px-4 max-w-6xl mx-auto'>
      <div data-aos="fade-right" data-aos-delay="300" className='flex-1 order-2 lg:order-1 flex items-center justify-center'>
            <img className='md:max-h-[400px] max-h-[200px] object-cover' src="https://www.vertexelites.com/img/about-us.png" alt="" />
      </div>
      <div data-aos="fade-left" data-aos-delay="300" className='flex-1 order-1 lg:order-2'>
        <h2 className='text-4xl font-bold text-[#1A1F65]'>About Company</h2>
        <p className='md:text-3xl text-2xl font-semibold mt-3'>
            What We Promise <br /> High Quality IT Solutions
        </p>
        <p className='pt-4 text-gray-700'>
        Techthrivesystem is a consulting, IT staffing solutions and workforce support services. We are based out of Houston, TX. We offer a comprehensive portfolio of high-quality, high-value and unparalleled networks of talented IT professionals, IT staffing solutions, IT workforce management expertise – delivered at a size and scale that sets us above any of our competitors. We help our clients achieve their business needs and address their IT workforce challenges by providing 24/7 support throughout the year.
        </p>
        <div className='grid grid-cols-2 my-3 gap-3'>
            <div className='flex items-center gap-2'> <span className='rounded-full p-1 bg-yellow-500'><HiCheck  className='text-lg text-white' /></span> IT Consultancy</div>
            <div className='flex items-center gap-2'> <span className='rounded-full p-1 bg-yellow-500'><HiCheck  className='text-lg text-white' /></span> Staffing</div>
            <div className='flex items-center gap-2'> <span className='rounded-full p-1 bg-yellow-500'><HiCheck  className='text-lg text-white' /></span> SAP</div>
            <div className='flex items-center gap-2'> <span className='rounded-full p-1 bg-yellow-500'><HiCheck  className='text-lg text-white' /></span> Application Development</div>
        </div>
        <Link href={"/about-us"}>
          <div className='px-2 py-[0.3rem] mt-4 cursor-pointer font-semibold bg-[#0f588c] hover:bg-sky-700 transition-all text-white w-fit rounded-2xl shadow-lg'>About Us</div>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default About
