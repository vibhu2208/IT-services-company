import React, { useState } from 'react'

const data: {
    heading: string;
    para: string;
    list: string[];
}[] = [
        {
            heading: "End-to-End Automation",
            para: "Any business looking to stay competitive in today’s digital landscape needs process automation. The goal of our Automation Service is to maximize operational efficiency while minimizing errors. With properly implemented automation, your business can gain several advantages:",
            list: [
                "Significantly reduce operational costs",
                "Get customized automation solutions for your specific workflows",
                "Improve process efficiency and accuracy",
                "Stay ahead of competition through digital transformation",
                "Free up valuable human resources for strategic tasks"
            ]
        },
        {
            heading: "ServiceNow Implementation and Support",
            para: "We provide comprehensive ServiceNow solutions that enable organizations to optimize their IT service management, automate workflows, and enhance overall operational efficiency. With our approach, clients can leverage the full capabilities of ServiceNow to meet their unique business needs.",
            list: ["Optimize IT service management to reduce downtime and improve delivery. ",
                "Automate workflows for streamlined operations and increased productivity.",
                "Implement best practices aligned with industry standards.",
                "Leverage ServiceNow capabilities to meet unique business needs."]
        },
        {
            heading: "Dynatrace Performance Monitoring",
            para: "Our Dynatrace experts offer robust performance monitoring solutions that provide actionable insights into application performance and user experience.",
            
            list: [
                "Identify and resolve performance bottlenecks proactively.",
                "Monitor user interactions to enhance satisfaction levels.",
                "Ensure optimal performance across all application components.",
                "Ensure optimal performance across all application components."
                
            ]
        },
        {
            para: "Our DevOps consulting services streamline development and operations by integrating best practices, tools, and cultural transformation. We focus on fostering collaboration and automation to accelerate delivery cycles and improve quality.",
            heading: "DevOps Consulting",
            list: [
                "Automate key processes to reduce lead times and improve quality.",
                "Implement performance metrics and monitoring tools for continuous improvement.",
                "Foster a culture of agility, collaboration, and continuous improvement.  ",
                "Integrate development and operations teams for seamless delivery.",
                "Enhance productivity with tools and practices tailored to your needs."
            ]
        },
        {
            para: "We provide comprehensive OpenText support to ensure seamless implementation, integration, and optimization of enterprise content management systems. Our goal is to help businesses maximize operational efficiency with tailored solutions.",
            heading: "OpenText Solutions",
            list: [
                "Provide expert guidance for successful OpenText implementations.",
                "Integrate OpenText solutions with existing systems for enhanced functionality.",
                "Offer training and knowledge transfer to empower users and administrators.",
                "Provide expert guidance for successful OpenText implementations."
            ]
        }
    ]
const OurServicesBenefits = () => {
    const [index, setIndex] = useState(0);
    return (
        <div className='bg-[#1A1A28] flex flex-col gap-8 p-4 md:p-16 text-white'>
            <h2 className='text-5xl font-medium' data-aos="fade-up" data-aos-delay="300">How our services benefit businesses</h2>
            <p className='text-lg' data-aos="fade-up" data-aos-delay="300">We created professional services to assist businesses develop enormously and stand out in the market.</p>
            <div className='flex gap-16 lg:flex-row flex-col'>
                <div className='flex flex-col gap-3 w-full lg:w-[35%]'>
                    {
                        data.map((item, i) => (
                            <p onClick={() => setIndex(i)} key={i} className={`py-3 cursor-pointer border-b w-full mb-5 ${i === index ? "text-2xl font-semibold" : "text-lg"} `}>{item.heading}</p>
                        ))
                    }
                </div>
                <div className='w-full lg:w-[65%] bg-[#193A47] rounded-l-2xl p-4 md:p-8 gap-5 flex flex-col text-md'>
                    <h3 className=''>
                        {data[index].para}
                    </h3>
                    <ul className='flex flex-col gap-3 list-disc ps-4'>
                        {
                            data[index].list.map((listData, i) => (
                                <li key={i}>{listData}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default OurServicesBenefits
