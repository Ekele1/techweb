"use client"

import React from 'react'
import { BsDashLg } from "react-icons/bs";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { projectData } from "@/app/components/data"
import { Project } from "@/app/components/types/data";

const RecentWorks = () => {
    const projects = projectData();
        const router = useRouter();
    
        const handleClick = (project: Project) => {
            sessionStorage.setItem('currentProject', JSON.stringify(project));
            router.push(`/projectDetail/${project.id}`);
        };

  return (
    <div className='w-full bg-[#f3f4f8] pt-20 pb-20 flex items-center justify-center'>
      <div className='lg:w-[90%] w-[95%] flex flex-col items-center justify-center gap-7'>
        <div className='lg:w-[85%] w-[100%] flex flex-col lg:flex-row gap-3 lg:gap-5'>
          <div className='lg:w-[50%] w-full'>
            <div className='w-full flex items-center text-[#336ae9] font-semibold'>
              <p>RECENTLY COMPLETED WORK</p>
              <BsDashLg size={40}/>
            </div>
            <p className='lg:text-[45px] text-[30px] font-bold text-black'>Improve & Enhance the Business Projects</p>
          </div>
          <div className='lg:w-[50%] w-full flex items-center justify-center'>
            <p className='text-gray-500'>
              Modern consumers heavily rely on digital platforms to research products before making purchasing 
              decisions. Studies show that 51% of consumers use Google to research brands.
            </p>
          </div>
        </div>
        <div className='w-full'>
          {/* Mobile: Horizontally scrollable container (all items) */}
          <div className='flex overflow-x-auto gap-4 pb-4 md:hidden scrollbar-hide'>
            {projects.map((project) => (
              <div key={project.id} onClick={()=>handleClick(project)} className='flex-shrink-0 w-[85%] h-[370px] bg-blue-400 relative'>
                <Image 
                  fill 
                  priority 
                  className='w-full h-full object-cover' 
                  src={project.image} 
                  alt={project.title} 
                />
                <div className='w-full absolute flex pl-3 flex-col gap-3 items-center justify-center bottom-[10%]'>
                  <p className='text-[20px] lg:text[25px] text-white font-bold'>{project.title}</p>
                  <p className='text-blue-500'>{project.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Medium: Show 2 initially, scrollable for rest */}
          <div className='hidden md:flex md:overflow-x-auto lg:hidden gap-4 pb-4 scrollbar-hide'>
            {projects.map((project) => (
              <div key={project.id} onClick={()=>handleClick(project)} className='flex-shrink-0 w-[48%] h-[370px] bg-blue-400 relative'>
                <Image 
                  fill 
                  priority 
                  className='w-full h-full object-cover' 
                  src={project.image} 
                  alt={project.title} 
                />
                <div className='w-full absolute flex flex-col gap-3 items-center justify-center bottom-[10%]'>
                  <p className='text-[20px] lg:text[25px] text-white font-bold'>{project.title}</p>
                  <p className='text-blue-500'>{project.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Large: Show all 4 normally (not scrollable) */}
          <div className='hidden lg:grid lg:grid-cols-4 lg:gap-4'>
            {projects.map((project) => (
              <div key={project.id} onClick={()=>handleClick(project)} className='w-full h-[370px] bg-blue-400 relative'>
                <Image 
                  fill 
                  priority 
                  className='w-full h-full object-cover' 
                  src={project.image} 
                  alt={project.title} 
                />
                <div className='w-full absolute flex flex-col gap-3 items-center justify-center bottom-[10%]'>
                  <p className='text-[20px] pl-4 text-white font-bold'>{project.title}</p>
                  <p className='text-blue-500'>{project.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentWorks