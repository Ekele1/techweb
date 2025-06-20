"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { projectData } from "@/app/components/data"
import { Project } from "@/app/components/types/data";

const Page = () => {
    const items = projectData();
    const router = useRouter();

    const handleClick = (project: Project) => {
        sessionStorage.setItem('currentProject', JSON.stringify(project));
        router.push(`/projectDetail/${project.id}`);
    };

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
                            <p className='text-[50px] font-bold text-white'>Project Grid</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Mobile: Single column (all items stacked) */}
            <div className='w-full flex flex-col items-center justify-center pt-20 pb-20 gap-8 md:hidden'>
                {items.map((item, i) => (
                    <div className='w-[80%] h-[370px] bg-blue-400 relative' key={i} onClick={()=>handleClick(item)}>
                        <Image 
                            fill 
                            priority 
                            sizes='(max-width: 768px) 100vw, 50vw'
                            className='w-full h-full object-cover' 
                            src={item.image} 
                            alt={item.name} 
                        />
                        <div className='w-full absolute flex flex-col gap-3 items-center justify-center bottom-[10%]'>
                            <p className='text-[25px] text-white font-bold'>{item.name}</p>
                            <p className='text-blue-500 cursor-pointer'>{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Medium: Two columns */}
            <div className='hidden md:grid md:grid-cols-2 lg:hidden w-[80%] mx-auto pt-20 pb-20 gap-8'>
                {items.map((item, i) => (
                    <div className='w-full h-[370px] bg-blue-400 relative' key={i} onClick={()=>handleClick(item)}>
                        <Image 
                            fill 
                            priority 
                            sizes='(max-width: 1024px) 50vw, 33vw'
                            className='w-full h-full object-cover' 
                            src={item.image} 
                            alt={item.name} 
                        />
                        <div className='w-full absolute flex flex-col gap-3 items-center justify-center bottom-[10%]'>
                            <p className='text-[25px] text-white font-bold'>{item.name}</p>
                            <p className='text-blue-500'>{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Large: Three columns (one row) */}
            <div className='hidden lg:flex lg:flex-wrap lg:justify-center lg:items-center lg:gap-8 lg:pt-20 lg:pb-20 lg:w-[80%] lg:mx-auto'>
                {items.map((item, i) => (
                    <div className='w-[calc(33.33%-22px)] h-[370px] bg-blue-400 relative' key={i} onClick={()=>handleClick(item)}>
                        <Image 
                            fill 
                            priority 
                            sizes='33vw'
                            className='w-full h-full object-cover' 
                            src={item.image} 
                            alt={item.name} 
                        />
                        <div className='w-full absolute cursor-pointer flex flex-col gap-3 items-center justify-center bottom-[10%]'>
                            <p className='text-[25px] text-white font-bold'>{item.name}</p>
                            <p className='text-blue-500'>{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;