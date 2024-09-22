import React from 'react'

const MissionVision = () => {
  return (
    <div className='flex flex-col gap-5 lg:flex-row py-8 md:py-16 w-full px-4 max-w-6xl mx-auto'>
      <div className='basis-2/3 pr-5 flex flex-col gap-5' data-aos="fade-right" data-aos-delay="300">
        <h2 className='text-4xl font-bold text-[#1A1F65]' data-aos="fade-up" data-aos-delay="300">Our Mission and Vision</h2>
        <p className='md:text-3xl text-2xl font-semibold'>
          We Provide Truly Prominent <br />
          IT Solutions.
        </p>
        <p className='text-gray-700 text-left'>
          We offer consulting services, Staffing services to Fortune 500 corporations, public agencies, and small and mid-sized businesses throughout North America.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5'>
          <div className='flex-1'>
            <p className='capitalize text-md font-semibold text-[#1A1F65]'>Our Mission</p>
            <p className='pt-2 text-gray-700 text-left'>
              We have a passion for technology and helping IT organizations to operate more effectively. We can help you transform your IT processes, applications and infrastructure by using the latest technologies
            </p>
          </div>
          <div className='flex-1'>
            <p className='capitalize text-md font-semibold text-[#1A1F65]'>Our Vision</p>
            <p className='pt-2 text-gray-700 text-left'>
              To be the most trusted information technology consulting service by demonstrating superior domain expertise and providing the best possible service to all of our stakeholders.
            </p>
          </div>
        </div>
      </div>
      <div className='basis-1/3 flex items-center justify-center' data-aos="fade-left" data-aos-delay="300">
        <img className='max-h-[350px] object-cover' src="https://www.vertexelites.com/img/wh-us.jpeg" alt="" />
      </div>
    </div>
  )
}

export default MissionVision
