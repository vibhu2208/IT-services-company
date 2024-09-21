import React from 'react'

const OurMethodOfOperations = () => {
    return (
        <div className='flex flex-col gap-8 p-8 md:p-16 bg-white'>
            <h2 className='text-4xl font-bold text-[#1A1F65]' data-aos="fade-up" data-aos-delay="400">Our Method of Operation</h2>
            <div className='flex flex-col gap-5'>
                <p className='text-xl text-default-700 font-medium'>
                    With over a decade of industry experience in IT consultation & development service, we consistently deliver high-quality solutions to our clients worldwide. In addition, we develop a consulting & development methodology specific to the requirements of potential projects.
                </p>
                <p className='text-xl text-default-700 font-medium'>
                    Our dedication to quality has helped us gain the trust of our 250 + clients. Let us take you through our working methodology.
                </p>
                <div className="grid lg:grid-cols-6 grid-cols-3 gap-8 mt-5" data-aos="fade-up" data-aos-delay="400">
                    <div className="relative h-full">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
                            1
                        </span>
                        <div className=" flex flex-col items-center h-full text-xs md:text-sm font-normal text-gray-600 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex">
                            <img className='h-8' src="/images/our-method-of-operations/Establishing.png" alt="" />
                            <span className='mt-4 text-center'>
                                Comprehensive Requirement Analysis
                            </span>
                        </div>
                    </div>
                    <div className="relative h-full">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
                            2
                        </span>
                        <div className="flex flex-col items-center h-full text-xs md:text-sm font-normal text-gray-600 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex">
                            <img className='h-8' src="/images/our-method-of-operations/strrgy.png" alt="" />
                            <span className='mt-4 text-center'>
                                Strategy Development
                            </span>
                        </div>
                    </div>
                    <div className="relative h-full">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
                            3
                        </span>
                        <div className="flex flex-col items-center h-full text-xs md:text-sm font-normal text-gray-600 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex">
                            <img className='h-8' src="/images/our-method-of-operations/plan.png" alt="" />
                            <span className='mt-4 text-center'>
                                Establish the Execution plan
                            </span>
                        </div>
                    </div>
                    <div className="relative h-full">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
                            4
                        </span>
                        <div className="flex flex-col items-center h-full text-xs md:text-sm font-normal text-gray-600 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex">
                            <img className='h-8' src="/images/our-method-of-operations/recourse.png" alt="" />
                            <span className='mt-4 text-center'>
                                Allocation of Resources
                            </span>
                        </div>
                    </div>
                    <div className="relative h-full">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
                            5
                        </span>
                        <div className="flex flex-col items-center h-full text-xs md:text-sm font-normal text-gray-600 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex">
                            <img className='h-8' src="/images/our-method-of-operations/implementation.png" alt="" />
                            <span className='mt-4 text-center'>
                                Establishing Development process
                            </span>
                        </div>
                    </div>
                    <div className="relative h-full">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
                            6
                        </span>
                        <div className="flex flex-col items-center h-full text-xs md:text-sm font-normal text-gray-600 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex">
                            <img className='h-8' src="/images/our-method-of-operations/implementation2.png" alt="" />
                            <span className='mt-4 text-center'>
                                Implementation & Recalibration
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurMethodOfOperations
