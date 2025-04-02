import Image from 'next/image'
import React from 'react'
import WhoWeAre from '../components/weAre'
import OffersComp from '../components/offers'
import RecentWorks from '../components/recent'

const page = () => {
  return (
    <div className='w-full'>
      <div className='w-full h-[300px] relative'>
        <Image 
          className="object-cover"
          src="/service.jpg" 
          alt="pics"
          fill
          priority
          sizes='fill'
        />
        <div className='absolute inset-0'>
          <div className='w-full h-full bg-black opacity-60 flex items-center pl-4'>
            <div>
              <p className='text-[50px] font-bold text-white'>About Us</p>
            </div>
          </div>
        </div>
      </div>
      <WhoWeAre />
      <OffersComp />
      <RecentWorks />
    </div>
  )
}

export default page