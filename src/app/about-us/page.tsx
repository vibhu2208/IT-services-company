"use client"
import React, { useEffect } from 'react'
import About from '@/components/about-us/about'
import CompanySlider from '@/components/company-slider'
import PageHeader from '@/components/page-header'
import Testimonials from "@/components/testimorials";
import MissionVision from '@/components/home/mission-vision'
import OurUsps from '@/components/about-us/our-usps'
import Aos from "aos";

const AboutPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
    });
  }, []);
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
