"use client"; // Must be at the very top
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Changed from 'next/router'

const Page = () => {
    const items = [1, 2];
    const router = useRouter();

    const handleClick = () => {
        router.push('/projectDetail');
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
            <div className='w-full flex flex-col items-center justify-center pt-20 pb-20 gap-8'>
                {items.map((e, i) => (
                    <div className='w-[80%]' key={i} onClick={handleClick}>
                        {/* Mobile: Single column (1 image) */}
                        <div className='flex flex-col gap-4 md:hidden'>
                            <div className='w-full h-[370px] bg-blue-400 relative'>
                                <Image fill priority sizes='fill' className='w-full h-full object-cover' src="/project-1.jpg" alt="Digital Marketing" />
                                <div className='w-full absolute flex flex-col gap-3 items-center justify-center bottom-[10%]'>
                                    <p className='text-[25px] text-white font-bold'>Digital Marketing</p>
                                    <p className='text-blue-500'>Technology / Marketing</p>
                                </div>
                            </div>
                        </div>

                        {/* Medium: Two columns (2 images) */}
                        <div className='hidden md:grid md:grid-cols-2 lg:hidden gap-4'>
                            <div className='w-full h-[370px] bg-blue-400 relative'>
                                <Image fill priority sizes='fill' className='w-full h-full object-cover' src="/project-1.jpg" alt="Digital Marketing" />
                                <div className='w-full absolute flex flex-col gap-3 items-center justify-center bottom-[10%]'>
                                    <p className='text-[25px] text-white font-bold'>Digital Marketing</p>
                                    <p className='text-blue-500'>Technology / Marketing</p>
                                </div>
                            </div>
                            <div className='w-full h-[370px] bg-blue-400 relative'>
                                <Image fill priority sizes='fill' className='w-full h-full object-cover' src="/project-2.jpg" alt="Analytic Solution" />
                                <div className='w-full absolute flex flex-col gap-3 items-center justify-center bottom-[10%]'>
                                    <p className='text-[25px] text-white font-bold'>Analytic Solution</p>
                                    <p className='text-blue-500'>Agency / Branding</p>
                                </div>
                            </div>
                        </div>

                        {/* Large: Four columns (all images) */}
                        <div className='hidden lg:flex lg:items-center lg:justify-between lg:gap-4'>
                            {[1, 2, 3].map((item) => (
                                <div key={item} className='w-[33.5%] h-[370px] bg-blue-400 relative'>
                                    <Image 
                                        fill 
                                        priority 
                                        sizes='fill'
                                        className='w-full h-full object-cover' 
                                        src={`/project-${item}.jpg`} 
                                        alt={item === 1 ? "Digital Marketing" : 
                                            item === 2 ? "Analytic Solution" : 
                                            "Tech Solution"} 
                                    />
                                    <div className='w-full absolute flex flex-col gap-3 items-center justify-center bottom-[10%]'>
                                        <p className='text-[25px] text-white font-bold'>
                                            {item === 1 ? "Digital Marketing" : 
                                            item === 2 ? "Analytic Solution" : 
                                            "Tech Solution"}
                                        </p>
                                        <p className='text-blue-500'>
                                            {item === 1 ? "Technology / Marketing" : 
                                            item === 2 ? "Agency / Branding" : 
                                            "Cyberdeck / Promotion"}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;