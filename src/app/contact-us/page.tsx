import ContactUs from '@/components/contact-us'
import PageHeader from '@/components/page-header'
import React from 'react'

const AboutPage = () => {
  return (
    <div className='h-full w-full overflow-hidden pb-12'>
        <PageHeader title="Contact Us" />
        <ContactUs />
    </div>
  )
}

export default AboutPage
