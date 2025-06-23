"use client"

import React from 'react';
import Image from 'next/image';
import { FaCheckCircle } from "react-icons/fa";
import { servicesData } from '@/app/components/service';
import { ServiceData } from '../components/types/data';
import { useRouter } from 'next/navigation';

const Services = () => {
    const items = servicesData;
    const router = useRouter();

    const handleClick = (service: ServiceData) => {
        try {
            // Using slug instead of id for cleaner URLs
            router.push(`/services/${service.slug}`);
        } catch (error) {
            console.error("Navigation failed:", error);
        }
    };

    return (
        <div className='w-full'>
            <div className='w-full h-[300px] relative'>
                <Image 
                    className="object-cover"
                    src="/service.jpg" 
                    alt="Digital services overview"
                    fill
                    priority
                    sizes='fill'
                />
                <div className='absolute inset-0'>
                    <div className='w-full h-full bg-black opacity-60 flex items-center pl-4'>
                        <div>
                            <p className='text-[50px] font-bold text-white'>Services</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex items-center justify-center lg:pt-30 pt-10 pb-30'>
                <div className='lg:w-[80%] w-[95%] flex flex-col lg:flex-row justify-between'>
                    <div className='lg:w-[30%] w-full flex flex-col gap-3'>
                        {items.map((item, i) => (
                            <div 
                                key={i} 
                                onClick={() => handleClick(item)} 
                                className='w-full lg:h-[50px] h-[70px] flex hover:scale-105 transition-transform'
                            >
                                <div className='h-full w-[10%] bg-blue-950'></div>
                                <div className='h-full w-[90%] bg-black pl-2 flex items-center cursor-pointer text-white font-semibold'>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        ))}
                        <div className='w-full h-[300px] relative hidden lg:block'>
                            <Image 
                                className="object-cover rounded-2xl"
                                src="/contact.jpg" 
                                alt="Digital transformation"
                                fill
                                priority
                                sizes='fill'
                            />
                            <div className='w-full h-full absolute'>
                                <Image 
                                    className="object-cover rounded-2xl"
                                    src="/overlay-shape.png" 
                                    alt="Overlay pattern"
                                    fill
                                    priority
                                    sizes='fill'
                                />
                                <div className='absolute bottom-5 left-5'>
                                    <p className='text-white font-bold text-xl'>Go Digital</p>
                                    <p className='text-white text-sm'>Transform your business today</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[65%] w-full flex flex-col gap-4 pt-3 lg:pt-0'>
                        <div className='w-full h-[300px] relative'>
                            <Image 
                                className="object-cover"
                                src="/service.jpg" 
                                alt="Our services in action"
                                fill
                                priority
                                sizes='fill'
                            />
                        </div>
                        <p className='text-[40px] font-bold text-black'>Comprehensive Digital Solutions</p>
                        <p className='text-gray-500 text-sm'>
                            We provide end-to-end digital services designed to transform your business operations and customer experiences. 
                            Our team of experts combines technical expertise with creative thinking to deliver solutions that drive growth 
                            and innovation. From initial concept to final implementation, we ensure every project meets the highest standards 
                            of quality and performance.
                        </p>
                        <p className='text-gray-500 text-sm'>
                            With over a decade of industry experience, we've helped businesses of all sizes navigate digital transformation. 
                            Our approach focuses on understanding your unique challenges and delivering customized solutions that provide 
                            measurable results. We stay ahead of industry trends to offer cutting-edge services that keep you competitive 
                            in today's fast-paced digital landscape.
                        </p>
                        <p className='text-[25px] font-semibold'>Our Service Methodology</p>
                        <p className='text-gray-500 text-sm'>
                            We follow a proven 5-phase approach to ensure successful project delivery: Discovery, Strategy, Design, 
                            Development, and Optimization. Each phase includes comprehensive planning, transparent communication, 
                            and rigorous quality assurance. Our agile methodology allows for flexibility and continuous improvement 
                            throughout the project lifecycle, ensuring we deliver solutions that truly meet your business objectives.
                        </p>

                        <div className='w-full flex flex-col lg:flex-row gap-2'>
                            <div className='lg:w-[50%] w-full lg:h-[50px] h-[70px] pl-2 flex items-center gap-2 border-[1px] border-gray-400 hover:bg-gray-100 transition-colors'>
                                <FaCheckCircle className="text-blue-600" />
                                <p className='font-bold'>SECURE PAYMENTS</p>
                            </div>
                            <div className='lg:w-[50%] w-full lg:h-[50px] h-[70px] pl-2 flex items-center gap-2 border-[1px] border-gray-400 hover:bg-gray-100 transition-colors'>
                                <FaCheckCircle className="text-blue-600" />
                                <p className='font-bold'>PERFORMANCE ASSESSMENTS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;