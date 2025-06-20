import React from 'react'
import { IoMdAnalytics } from "react-icons/io";
import { SiAwssecretsmanager } from "react-icons/si";
import { IoIosDesktop } from "react-icons/io";
import { MdOutlinePhonelinkSetup } from "react-icons/md";

const OffersComp = () => {
  return (
    <div className='w-full pt-[50px] lg:h-[500px] bg-[#f5f6f8] flex flex-col items-center justify-center gap-20 lg:pb-5'>
        <div className='lg:w-[80%] w-[95%] flex flex-col lg:flex-row gap-8 lg:gap-0 items-center justify-between'>
        <div className='relative lg:w-[18%] w-full h-[200px] hover:cursor-pointer bg-white shadow-sm overflow-hidden group'>
            {/* Blue top bar */}
            <div className='w-full h-[8px] bg-[#336ae9] z-20 relative'></div>
            
            {/* Content */}
            <div className='relative z-10 h-full flex flex-col'>
              <div className='flex-1 flex items-center justify-center'>
                <IoMdAnalytics className='text-[#336ae9] text-[60px] group-hover:text-white transition-all duration-300'/>
              </div>
              <div className='pb-5 flex flex-col items-center font-bold text-black'>
                <p className='group-hover:text-white transition-all duration-300'>Data</p>
                <p className='group-hover:text-white transition-all duration-300'>Analysis</p>
              </div>
            </div>
            
            {/* Animated blue background */}
            <div className='
              absolute bottom-0 left-0 w-full h-0 bg-[#336ae9] 
              transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] 
              group-hover:h-full
            '></div>
          </div>
          <div className='relative lg:w-[18%] w-full h-[200px] hover:cursor-pointer bg-white shadow-sm overflow-hidden group'>
            {/* Blue top bar */}
            <div className='w-full h-[8px] bg-[#336ae9] z-20 relative'></div>
            
            {/* Content */}
            <div className='relative z-10 h-full flex flex-col'>
              <div className='flex-1 flex items-center justify-center'>
                <SiAwssecretsmanager className='text-[#336ae9] text-[60px] group-hover:text-white transition-all duration-300'/>
              </div>
              <div className='pb-5 flex flex-col items-center font-bold text-black'>
                <p className='group-hover:text-white transition-all duration-300'>Website</p>
                <p className='group-hover:text-white transition-all duration-300'>Management</p>
              </div>
            </div>
            
            {/* Animated blue background */}
            <div className='
              absolute bottom-0 left-0 w-full h-0 bg-[#336ae9] 
              transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] 
              group-hover:h-full
            '></div>
          </div>
          <div className='relative lg:w-[18%] w-full h-[200px] hover:cursor-pointer bg-white shadow-sm overflow-hidden group'>
            {/* Blue top bar */}
            <div className='w-full h-[8px] bg-[#336ae9] z-20 relative'></div>
            
            {/* Content */}
            <div className='relative z-10 h-full flex flex-col'>
              <div className='flex-1 flex items-center justify-center'>
                <IoIosDesktop className='text-[#336ae9] text-[60px] group-hover:text-white transition-all duration-300'/>
              </div>
              <div className='pb-5 flex flex-col items-center font-bold text-black'>
                <p className='group-hover:text-white transition-all duration-300'>Website</p>
                <p className='group-hover:text-white transition-all duration-300'>Developement</p>
              </div>
            </div>
            
            {/* Animated blue background */}
            <div className='
              absolute bottom-0 left-0 w-full h-0 bg-[#336ae9] 
              transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] 
              group-hover:h-full
            '></div>
          </div>
          <div className='relative lg:w-[18%] w-full h-[200px] hover:cursor-pointer bg-white shadow-sm overflow-hidden group'>
            {/* Blue top bar */}
            <div className='w-full h-[8px] bg-[#336ae9] z-20 relative'></div>
            
            {/* Content */}
            <div className='relative z-10 h-full flex flex-col'>
              <div className='flex-1 flex items-center justify-center'>
                <MdOutlinePhonelinkSetup className='text-[#336ae9] text-[60px] group-hover:text-white transition-all duration-300'/>
              </div>
              <div className='pb-5 flex flex-col items-center font-bold text-black'>
                <p className='group-hover:text-white transition-all duration-300'>UI/UX Design</p>
                <p className='group-hover:text-white transition-all duration-300'>Services</p>
              </div>
            </div>
            
            {/* Animated blue background */}
            <div className='
              absolute bottom-0 left-0 w-full h-0 bg-[#336ae9] 
              transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] 
              group-hover:h-full
            '></div>
          </div>
        </div>
        <div className='w-full flex items-center justify-center text-black'>
          <p>IT Technology services tailored to your bussiness.</p>
        </div>
    </div>
  )
}

export default OffersComp