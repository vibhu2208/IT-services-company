import React from 'react'

const OurUsps = () => {
    return (
        <div className='bg-no-repeat bg-cover bg-center flex flex-col lg:flex-row p-4 md:p-16 gap-8' style={{ backgroundImage: 'url("/images/USPS.jpeg")' }}>
            <div className='flex flex-col gap-8 w-full lg:w-[20%] justify-center'>
                <h2 className='text-4xl font-bold text-[#211E6D]'> Our USP&apos;s</h2>
                <p className='text-lg text-black'>
                    We develop specific strategies based on our assessments to guarantee that the solution meets their business needs.
                </p>
            </div>
            <div className='lg:w-[80%] w-full bg-[#fafafa] rounded grid grid-cols-1 md:grid-cols-2 p-4 md:p-16 gap-16'>
                <div className='flex flex-col' data-aos="fade-up" data-aos-delay="300">
                    <img src="/images/usps/delivery.png" className='h-12 w-fit' alt="" />
                    <p className='text-xl font-semibold mt-3'>
                        <span>
                            Delivery on-time
                        </span>
                    </p>
                    <span className='h-1 w-14 rounded bg-[#211E6D]'></span>
                    <p className='mt-3 text-left md:text-justify'>
                        With years of expertise, we have built a reputation for delivering on time. Our goal is to promptly deliver the client&apos;s requested solution, allowing them to use it further to perform their business operations.
                    </p>
                </div>
                <div className='flex flex-col' data-aos="fade-up" data-aos-delay="300">
                    <img src="/images/usps/talentpool.png" className='h-12 w-fit' alt="" />
                    <p className='text-xl font-semibold mt-2'>
                        <span>
                            Competent Talent Pool
                        </span>
                    </p>
                    <span className='h-1 w-14 rounded bg-[#211E6D]'></span>
                    <p className='mt-3 text-left md:text-justify'>
                        We have highly qualified individuals that are trained to work on the projects and are experts in a variety of cutting-edge technologies. This enables us to meet customer’s needs and lead the industry.
                    </p>
                </div>
                <div className='flex flex-col' data-aos="fade-up" data-aos-delay="300">
                    <img src="/images/usps/customer.png" className='h-12 w-fit' alt="" />
                    <p className='text-xl font-semibold mt-2'>
                        <span>
                            24/7 Dedicated Customer Support
                        </span>
                    </p>
                    <span className='h-1 w-14 rounded bg-[#211E6D]'></span>
                    <p className='mt-3 text-left md:text-justify'>
                        Our goal is to give our customers the greatest IT help possible, so we&apos;ve created a special customer support system to handle all of the technical problems. A dedicated staff is available for you 24/7.
                    </p>
                </div>
                <div className='flex flex-col' data-aos="fade-up" data-aos-delay="300">
                    <img src="/images/usps/excellent.png" className='h-12 w-fit' alt="" />
                    <p className='text-xl font-semibold mt-2'>
                        <span>
                            Excellent Delivery
                        </span>
                    </p>
                    <span className='h-1 w-14 rounded bg-[#211E6D]'></span>
                    <p className='mt-3 text-left md:text-justify'>
                        We work hard to offer high-quality projects to our clients since they depend on IT solutions for their operations, and compromising quality would hinder their ability to expand.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OurUsps
