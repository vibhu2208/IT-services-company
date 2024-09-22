"use client"
import PageHeader from '@/components/page-header'
import OurServices from '@/components/services/our-services'
import React, { useEffect } from 'react'
import Aos from "aos";
import HaveQuestion from '@/components/have-question';

const ConsultingServicesPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
    });
  }, []);
  return (
    <div className='h-full w-full overflow-hidden pb-12'>
        <PageHeader title="Services" />
        <OurServices />
        <HaveQuestion />
    </div>
  )
}

export default ConsultingServicesPage
