"use client"
import React from 'react'
import { BsDashLg } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import Image from 'next/image';


const ContactUs = () => {
  return (
    <div className='w-full lg:h-[800px] h-[1200px] relative lg:pt-10'>
        <Image 
          className='w-full h-full object-cover absolute' 
          src="/shape.jpg" 
          alt="background" 
          fill
          priority
        />
        <div className='w-full h-full absolute flex  items-center justify-center bottom-[-20px]'>
            <div className='lg:w-[80%] w-[95%] lg:h-[73%] flex flex-col-reverse lg:flex-row gap-6 justify-between'>
                <div className='lg:w-[45%] w-full h-full bg-[#336ae9] rounded-[20px] p-5 flex flex-col gap-[30px]'>
                    <div className='w-full'>
                        <p className='text-[40px] text-white font-bold'>Have Any Questions</p>
                        <p className='text-white'>Feel free to contact us through anywhere</p>
                    </div>
                    <div className='w-full flex flex-col gap-2 lg:flex-row items-center justify-between'>
                        <input 
                        className='lg:w-[47%] w-full text-black h-[50px] outline-none pl-3 border-[1px] bg-white border-none'
                        placeholder='YOUR NAME'
                        type="text" />
                        <input 
                        className='lg:w-[47%] w-full text-black h-[50px] outline-none pl-3 border-[1px] bg-white border-none'
                        placeholder='YOUR EMAIL'
                        type="email" />
                    </div>
                    <textarea 
                        className='w-full h-[200px] text-black bg-white p-3 outline-none'
                        defaultValue="YOUR MESSAGE"
                        />
                    <button className='w-full h-[50px] bg-black text-white'>
                        SEND MESSAGE
                    </button>
                </div>
                <div className='lg:w-[50%] w-full h-full flex flex-col pt-10 gap-2 text-black'>
                    <div className='w-full flex text-[#336ae9] font-semibold'>
                        <p>CONTACT US</p>
                        <BsDashLg size={40}/>
                    </div>
                    <p className='lg:text-[48px] text-[30px] font-bold leading-[46px]'>Let's Discuss Your Next Tech Solution</p>
                    <p className='mt-6'>
                        At our tech company, we're ready to help bring your digital vision to life. Whether you need a custom website, 
                        innovative software, or expert consultation, our team is here to provide solutions tailored to your specific needs. 
                        Reach out today to start a conversation about how we can help your business grow in the digital space.
                    </p>
                    <div className='w-full flex flex-col lg:flex-row lg:items-center justify-between'>
                        <p>Prefer to speak directly? Call us anytime</p>
                        <div className='flex items-center p-3 gap-2 bg-white'>
                            <FaPhoneAlt  className='text-[20px] text-[#336ae9]'/>
                            <p>(+234 09154382278)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs