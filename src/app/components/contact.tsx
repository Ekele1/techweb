"use client"
import React from 'react'
import { BsDashLg } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";


const ContactUs = () => {
    // const [content, setContent] = useState("<p>YOUR MESSAGE</p>");
  return (
    <div className='w-full lg:h-[800px] h-[1200px] relative lg:pt-10'>
        <img className='w-full h-full object-cover' src="./shape.jpg" alt="" />
        <div className='w-full h-full absolute flex  items-center justify-center bottom-[-20px]'>
            <div className='lg:w-[80%] w-[95%] lg:h-[73%] flex flex-col-reverse lg:flex-row gap-6 justify-between'>
                <div className='lg:w-[45%] w-full h-full bg-[#336ae9] rounded-[20px] p-5 flex flex-col gap-[30px]'>
                    <div className='w-full'>
                        <p className='text-[40px] text-white font-bold'>Have Any Questions</p>
                        <p className='text-white'>Feel free to contact us through anywhere</p>
                    </div>
                    <div className='w-full flex flex-col gap-2 lg:flex-row items-center justify-between'>
                        <input 
                        className='lg:w-[47%] w-full h-[50px] outline-none pl-3 border-[1px] bg-white border-none'
                        placeholder='YOUR NAME'
                        type="text" />
                        <input 
                        className='lg:w-[47%] w-full h-[50px] outline-none pl-3 border-[1px] bg-white border-none'
                        placeholder='YOUR EMAIL'
                        type="email" />
                    </div>
                    <textarea 
                        className='w-full h-[200px] bg-white p-3 outline-none'
                        defaultValue="YOUR MESSAGE"
                        />
                    <button className='w-full h-[50px] bg-black text-white'>
                        SEND MESSAGE
                    </button>
                </div>
                <div className='lg:w-[50%] w-full h-full flex flex-col pt-10 gap-2'>
                    <div className='w-full flex text-[#336ae9] font-semibold'>
                        <p>CONTACT US</p>
                        <BsDashLg size={40}/>
                    </div>
                    <p className='lg:text-[48px] text-[30px] font-bold leading-[46px]'>Contact Us Let’s Talk Your Any Query.</p>
                    <p className='mt-6'>
                        Witch sotech dolor sit amet consectetur adipiscing elit ultricies, in a dapibus venenatis malesuada 
                        suspendisse vestibulum massa, auctor lobortis nam etiam netus vel duis. In nec erat eget neque purus 
                        elementum mauris curabitur.
                    </p>
                    <div className='w-full flex flex-col lg:flex-row lg:items-center justify-between'>
                        <p>Or You may Call Us For Appointment</p>
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