import React from 'react'

const PageHeader = ({title, desc}: {title: string, desc?: string}) => {
  return (
    <div className='bg-[#0f588c] w-full'>
      <div className='w-full px-4 max-w-6xl mx-auto py-5 md:py-10'>
        <p className='text-2xl font-semibold text-white uppercase'>{title}</p>
        <p className='text-lg text-white'>{desc}</p>
      </div>
    </div>
  )
}

export default PageHeader
