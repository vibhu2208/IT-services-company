import React, { useState } from 'react'

const data: {
    heading: string;
    para: string;
    list: string[];
}[] = [
        {
            heading: "Artificial intelligence",
            para: "We empower businesses to embrace the future with cutting-edge AI technologies and strategic consulting. Our comprehensive AI services are designed to automate operations, drive digital transformation, and enhance your return on investment (ROI).",
            list: [
                "Generative AI",
                "Chatbot and AI Assistant",
                "AI/ML Strategy Consulting",
                "AI Integration and Deployment",
                "AI Security",
                "AI Design"
            ]
        },
        {
            heading: "Web & Mobile development",
            para: "We provide our clients managed IT services and user-centric IT solutions to develop top-notch bespoke software, engaging websites, and efficient cloud management services to simplify corporate operations",
            list: ["Web Development",
                "Mobile App Development",
                "E-Commerce Development",
                "UI/UX Design",
                "Enterprise Solution"]
        },
        {
            para: "We are a leading staffing agency with expertise in recruiting services, hiring professionals, and staff arguments. We offer staffing services to assist businesses with recruiting to fulfill organisational needs.",
            heading: "Staffing",
            list: [
                "Staff Augmentation",
                "Recruitment Service"
            ]
        },
        {
            para: "From strategic planning to implementation and ongoing support, we provide end-to-end IT consulting services to optimize your IT infrastructure and drive your business forward. Our experts specialize in areas such as cloud computing, data analytics, software development, and IT project management.",
            heading: "IT Consulting",
            list: [
                "Salesforce Consulting",
                "Servicenow Consulting",
                "Workday Consulting",
                "Jira Consulting",
                "Kronos Consulting"
            ]
        },
        {
            para: "We provide businesses with digital transformation to promote their businesses through creative digital marketing methods and customer experience advice to keep the regular clients.",
            heading: "Digital Marketing",
            list: [
                "Search Engine Optimization (SEO)",
                "Pay-per-click Advertising (PPC)",
                "Social Media Marketing",
                "Email Marketing",
                "Content Marketing"
            ]
        }
    ]
const OurServicesBenefits = () => {
    const [index, setIndex] = useState(0);
    return (
        <div className='bg-[#1A1A28] flex flex-col gap-8 p-16 text-white'>
            <h2 className='text-5xl font-medium' data-aos="fade-up" data-aos-delay="500">How our services benefit businesses</h2>
            <p className='text-lg' data-aos="fade-up" data-aos-delay="300">We created professional services to assist businesses develop enormously and stand out in the market.</p>
            <div className='flex gap-16 lg:flex-row flex-col'>
                <div className='flex flex-col gap-3 w-full lg:w-[35%]'>
                    {
                        data.map((item, i) => (
                            <p onClick={() => setIndex(i)} key={i} className={`py-3 cursor-pointer border-b w-full mb-5 ${i === index ? "text-2xl font-semibold" : "text-lg"} `}>{item.heading}</p>
                        ))
                    }
                </div>
                <div className='w-full lg:w-[65%] bg-[#193A47] rounded-l-2xl p-8 gap-5 flex flex-col text-md'>
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
