import Link from 'next/link';
import React from 'react'

const cardsData = [
    {
        img: "/images/services-card/it-consulting.jpeg",
        title: "IT Consulting",
        desc: "By addressing challenges related to operational effectiveness, business expansion, technology, and management, we help businesses find new technology-driven opportunities.",
        link: ""
    },
    {
        img: "/images/services-card/development.jpg",
        title: "Development Services",
        desc: "We provide application services for businesses to develop their global penetration and improve their operations' efficiency, security, and functionality.",
        link: ""
    },
    {
        img: "/images/services-card/staffing.jpeg",
        title: "Staffing",
        desc: "Our professional team works dedicatedly to provide you with the best candidates for the specific role and to efficiently meet our clients' requirements.",
        link: ""
    },
    {
        img: "/images/services-card/emerging-tech.jpeg",
        title: "Emerging Technology",
        desc: "Techthrivesystem has been providing recruiting, screening, and placement services for contract, permanent, and contract-to-permanent positions that enable client companies to increase productivity.",
        link: ""
    },
    {
        img: "/images/services-card/digital.jpeg",
        title: "Digital Marketing",
        desc: "We provide businesses with digital transformation to promote their businesses through creative digital marketing methods and customer experience.",
        link: ""
    },
]

type CardType = {
    data: {
        img: string;
        title: string;
        desc: string;
        link: string;
    }
}

const Card = ({ data }: CardType) => {
    return (
        <div className="max-w-xs bg-white border border-gray-200 rounded-lg hover:shadow-2xl transition-shadow flex flex-col">
            <div className='p-2 rounded-lg overflow-hidden object-cover h-40'>
                <img className="rounded-t-lg" src={data.img} alt="" />
            </div>
            <Link href={`/services/${data.title.toLowerCase().replaceAll(" ", "-")}`}>
                <div className="px-4 py-3 cursor-pointer flex-1 flex flex-col">
                    <h5 className="mb-2 text-lg font-semibold tracking-tight text-[#1A1F65]">{data.title}</h5>
                    <p className="mb-3 text-normal text-gray-700 text-justify">{data.desc}</p>
                    <p className='flex-1 justify-self-end'></p>
                    <p className="flex w-fit items-center px-2 py-[0.4rem] text-sm text-center font-semibold bg-[#0f588c] hover:bg-sky-700 transition-all text-white rounded-2xl shadow-lg">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </p>
                </div>
            </Link>
        </div>
    )
}

const OurServices = () => {
    return (
        <div className='w-full py-8 px-4 max-w-6xl mx-auto flex flex-col gap-5'>
            <p className='text-center md:text-3xl text-2xl font-semibold'>
                Explore We Offer For Modern <br /> Technology Solutions
            </p>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
                {
                    cardsData.map((cardData, i) => {
                        return (
                            <Card key={i} data={cardData} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default OurServices
