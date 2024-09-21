"use client"
import ContactUs from '@/components/contact-us'
import PageHeader from '@/components/page-header'
import React, { useEffect } from 'react'
import Aos from "aos";

const AboutPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
    });
  }, []);
  return (
    <div className='h-full w-full overflow-hidden pb-12'>
        <PageHeader title="Contact Us" />
        <ContactUs />
    </div>
  )
}

export default AboutPage
