"use client"

import React from 'react'
import { BsDashLg } from "react-icons/bs";
import Image from 'next/image';
import { FaUser, FaLongArrowAltRight } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";

const Blog = () => {
    const blogMat = [
        {
            img: "/news-1.jpg",
            admin: "Corporate",
            question: "Does My Website Need Any Blog ?"
        },
        {
            img: "/news-2.jpg",
            admin: "Technology",
            question: "How To Create An Awsome Software"
        },
        {
            img: "/news-3.jpg",
            admin: "Bussiness",
            question: "Why the Biggest Myths About Business"
        }
    ]
  return (
    <div className='w-full flex items-center justify-center lg:pt-30 pt-10 lg:pb-30 pb-10 bg-white'>
        <div className='lg:w-[80%] w-[95%] flex flex-col gap-7'>
            <div className='w-full flex flex-col items-center justify-center'>
                <div className='flex items-center text-[#336ae9] font-semibold'>
                    <p>FROM THE BLOG</p>
                    <BsDashLg size={40}/>
                </div>
                <p className='text-black font-bold text-[40px]'>News & Articles</p>
            </div>
            <div className='w-full flex flex-col lg:flex-row justify-between gap-3'>
                {
                    blogMat.map((e,i)=>(
                        <div className='lg:w-[33%] w-full border-[1px] border-gray-300 group' key={i}> {/* Group moved here */}
                        <div className="relative h-[200px] w-full overflow-hidden">
                            <Image
                                src={e.img}
                                alt="Background"
                                fill
                                priority
                                sizes='fill'
                                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                            />
                            
                            {/* Light sweep effect */}
                            <div className="
                                absolute inset-0
                                bg-gradient-to-r from-transparent via-white/30 to-transparent
                                bg-[length:200%_100%] bg-left
                                opacity-0
                                transition-all duration-500 ease-in-out
                                group-hover:opacity-100 group-hover:bg-right
                            "></div>
                        </div>
                        <div className='w-full p-4 flex flex-col gap-3'>
                            <div className='w-full flex gap-3'>
                                <div className='flex items-center'>
                                    <FaUser color='blue'/>
                                    <p className='text-sm'>By Admin</p>
                                </div>
                                <div className='flex items-center'>
                                    <FaTag color='blue'/>
                                    <p className='text-sm'>{e.admin}</p>
                                </div>
                            </div>
                            <p className='text-[23px] text-black group-hover:text-[#336ae9] font-bold'>{e.question}</p>
                        </div>
                            
                        <div>
                            <button className='relative w-full bg-[#f4f5f9] flex items-center gap-3 text-white p-3 cursor-pointer overflow-hidden'>
                                <span className='relative z-10 text-[15px] font-bold text-black'>READ MORE</span>
                                <FaLongArrowAltRight color='black'/>
                                <div className='absolute top-0 left-0 w-full h-0 bg-[#336ae9] transition-[height] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:h-full'></div>
                            </button>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Blog