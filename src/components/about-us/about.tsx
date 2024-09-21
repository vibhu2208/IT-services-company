import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col gap-5 md:flex-row py-16 w-full px-4 max-w-6xl mx-auto'>
      <div className='flex-1' data-aos="fade-right" data-aos-delay="400">
        <p className='uppercase text-md font-semibold text-sky-600'>About Vysnovy</p>
        <p className='md:text-3xl text-2xl font-semibold mt-3'>
            What We Promise <br /> High Quality IT Solutions
        </p>
        <p className='pt-8 text-gray-700 text-justify'>
          Vysnovy is a consulting, IT staffing solutions and workforce support services. We are based out of Houston, TX. We offer a comprehensive portfolio of high-quality, high-value and unparalleled networks of talented IT professionals, IT staffing solutions, IT workforce management expertise – delivered at a size and scale that sets us above any of our competitors. We help our clients achieve their business needs and address their IT workforce challenges by providing 24/7 support throughout the year.
        </p>
        <p className='pt-8 text-gray-700 text-justify'>
          We believe in the vision of offering our clients a cutting-edge advantage in terms of Consulting,IT Staffing solutions by developing a long-term association on the basis of symbiotic growth and respect. Our deep understandings into the labor market of Information Technology help us to realize the business ends of our clients and optimize their workforce strategies.
        </p>
      </div>
      <div className='flex-1 flex items-center justify-center' data-aos="fade-left" data-aos-delay="400">
            <img className='max-h-[400px] object-cover' src="https://www.vertexelites.com/img/about-us.png" alt="" />
      </div>
    </div>
  )
}

export default About
