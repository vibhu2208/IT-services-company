import React from 'react'
import About from '@/components/about-us/about'
import WhyChooseUs from '@/components/about-us/why-choose-us'
import CompanySlider from '@/components/company-slider'
import PageHeader from '@/components/page-header'
import Testimonials from "@/components/testimorials";
import MissionVision from '@/components/home/mission-vision'
import OurUsps from '@/components/about-us/our-usps'

const AboutPage = () => {
  return (
    <div className='h-full w-full overflow-hidden pb-12'>
        <PageHeader title="About Us" />
        <About />
        <div className='bg-[#f2f2f2]'>
          <MissionVision />
        </div>
        <OurUsps />
        <CompanySlider />
        <Testimonials />
    </div>
  )
}

export default AboutPage
