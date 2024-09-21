import Link from 'next/link'
import React from 'react'

const BigNews = () => {
    return (
        <div className='flex flex-col gap-8 p-8 md:p-16 text-white' style={{backgroundImage: 'url("/images/Types_of_Artificial_Intelligence.avif")', backgroundSize: "100%", objectFit: "cover", backgroundPosition: "center"}}>
            <div className='md:w-[50%] w-full flex flex-col gap-10 md:p-8'>
                <h2 className='md:text-6xl text-4xl font-bold' data-aos="fade-up" data-aos-delay="400">Big news!</h2>
                <h2 className='md:text-5xl text-3xl font-medium' data-aos="fade-up" data-aos-delay="400">We are thrilled to announce the release of  Generative AI:</h2>
                <p className='md:text-lg text-base' data-aos="fade-up" data-aos-delay="400">Announcing our innovative generative AI service. Discover the future of content creation with our Generative AI! This innovative technology enables us to create high-quality, unique text, photos, and videos that are personalized according to your specific requirements. Enhance your engagement with creative, engaging content. Explore the possibilities now!.</p>
                <Link href={"/service/emerging-technology"}>
                    <div data-aos="fade-up" data-aos-delay="300" className='md:px-10 px-5 md:py-3 py-1 cursor-pointer w-fit font-medium bg-sky-700 transition-all text-white md:text-lg text-base  rounded-lg shadow-lg'>
                        Artificial Intelligent Services
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default BigNews
