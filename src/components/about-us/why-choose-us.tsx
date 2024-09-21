import React from 'react'

const WhyChooseUs = () => {
  return (
    <div className='bg-[#f2f2f2]'>
        <div className='flex flex-col gap-5 lg:flex-row py-16 w-full px-4 max-w-6xl mx-auto'>
        <div className='basis-2/3 pr-5'>
            <p className='uppercase text-md font-semibold text-sky-600'>Why Choose Us</p>
            <p className='md:text-3xl text-2xl font-semibold mt-3'>
            We Provide Truly Prominent <br />
            IT Solutions.
            </p>
            <p className='pt-8 text-gray-700 text-justify'>
            We offer consulting services, Staffing services to Fortune 500 corporations, public agencies, and small and mid-sized businesses throughout North America.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-8 gap-10'>
            <div className='flex-1'>
                <p className='capitalize text-md font-semibold text-sky-600'>Our Mission</p>
                <p className='pt-2 text-gray-700 text-justify'>
                We have a passion for technology and helping IT organizations to operate more effectively. We can help you transform your IT processes, applications and infrastructure by using the latest technologies
                </p>
            </div>
            <div className='flex-1'>
                <p className='capitalize text-md font-semibold text-sky-600'>Our Vision</p>
                <p className='pt-2 text-gray-700 text-justify'>
                To be the most trusted information technology consulting service by demonstrating superior domain expertise and providing the best possible service to all of our stakeholders.
                </p>
            </div>
            </div>
        </div>
        <div className='basis-1/3 flex items-center justify-center'>
            <img className='max-h-[350px] object-cover' src="https://www.vertexelites.com/img/wh-us.jpeg" alt="" />
        </div>
        </div>
    </div>
  )
}

export default WhyChooseUs
