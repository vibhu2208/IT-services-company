import Link from 'next/link'
import React from 'react'

const HaveQuestion = () => {
  return (
    <div className='bg-[#211E6D] rounded-3xl flex flex-col md:flex-row items-center' data-aos="zoom-in" data-aos-delay="300">
      <div className='flex flex-col justify-between md:p-16 p-8 gap-8'>
        <h2 className='text-4xl font-medium text-white'>Have a Question? <br /> Get in Touch with Our Experts.</h2>
        <Link href={"contact-us"}>
        <div className='md:px-10 px-5 py-2 my-3 cursor-pointer w-fit text-[#211E6D] font-medium bg-white hover:bg-sky-700 transition-all hover:text-white rounded-lg shadow-lg'>
          Connect with us
        </div>
        </Link>
      </div>
      <div className='hidden md:flex items-center h-32 object-cover'>
        <img src="/images/glob.png" alt="" />
      </div>
    </div>
  )
}

export default HaveQuestion
