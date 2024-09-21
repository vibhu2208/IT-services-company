import React from 'react'
import { AiOutlineInsurance } from 'react-icons/ai'
import { BiMoviePlay } from 'react-icons/bi'
import { CiBank, CiShoppingCart } from 'react-icons/ci'
import { GrTechnology } from 'react-icons/gr'
import { IoSettingsOutline } from 'react-icons/io5'
import { MdCastForEducation, MdOutlineHealthAndSafety, MdOutlineTravelExplore } from 'react-icons/md'
import { RiNurseLine } from 'react-icons/ri'
import { SiLogitech } from 'react-icons/si'
import { SlPlane } from 'react-icons/sl'
import { TbAutomaticGearbox } from 'react-icons/tb'

const data = [
    {
        icon: <SlPlane />,
        text: 
        "Aerospace and Defense",
    },
    {
        icon: <TbAutomaticGearbox />,
        text: 
        "Automotive",
    },
    {
        icon: <CiBank />,
        text: 
        "Banking",
    },
    {
        icon: <MdCastForEducation />,
        text: 
        "Education",
    },
    {
        icon: <MdOutlineHealthAndSafety />,
        text: 
        "Healthcare",
    },
    {
        icon: <GrTechnology />,
        text: 
        "High Tech",
    },
    {
        icon: <RiNurseLine />,
        text: 
        "Hospitality",
    },
    {
        icon: <AiOutlineInsurance />,
        text: 
        "Insurance",
    },
    {
        icon: <BiMoviePlay />,
        text: 
        "Media & entertainment",
    },
    {
        icon: <CiShoppingCart />,
        text: 
        "Retail",
    },
    {
        icon: <MdOutlineTravelExplore />,
        text: 
        "Tour & Travel",
    },
    {
        icon: <SiLogitech />,
        text: 
        "Logistic",
    },
    {
        icon: <IoSettingsOutline />,
        text: 
        "Utilities"
    },
]
const IndustriesWeOffer = () => {
    return (
        <div className='bg-[#1A1F65] flex flex-col gap-8 p-8 md:p-16 text-white'>
            <h2 className='text-4xl font-bold' data-aos="fade-up" data-aos-delay="500">Industries that we serve</h2>
            <p className='text-lg font-medium'>We achieved the business transformation objectives by utilising advanced technology to produce exceptional results. <br /> Working with clients from around the world has aided us in developing a comprehensive approach and knowledge base to meet a wide range of industries&apos; unique requirements.</p>
            <div className='grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-5'>
                {
                    data.map((item, i) => (
                        <div key={i} className='bg-[#363A78] p-4 flex items-center gap-4 text-xl rounded-xl hover:shadow-[0px_0px_3px_1px_#f0f1f2] cursor-pointer transition-shadow'>
                            <p className='text-4xl'>{item.icon}</p>
                            <p>{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default IndustriesWeOffer
