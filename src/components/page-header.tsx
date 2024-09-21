import React from 'react'

const PageHeader = ({title}: {title: string}) => {
  return (
    <div className='bg-[#0f588c] w-full'>
      <div className='w-full px-4 max-w-6xl mx-auto'>
        <p className='text-2xl font-semibold text-white py-5 md:py-10 uppercase'>{title}</p>
      </div>
    </div>
  )
}

export default PageHeader
