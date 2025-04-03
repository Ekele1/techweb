import React from 'react'
import Image from 'next/image';
import { FaUser} from "react-icons/fa";

const Page = () => {
  return (
    <div className='w-full bg-white'>
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
                      <p className='text-[50px] font-bold text-white'>News Detail</p>
                  </div>
              </div>
            </div>
        </div>
        <div className='w-full flex items-center justify-center pt-20 pb-20'>
          <div className='lg:w-[85%] w-[95%] flex flex-col lg:flex-row lg:gap-4 gap-8'>
            <div className='lg:w-[70%] w-full flex flex-col gap-3 bg-white'>
              <div className='w-full h-[400px] relative'>
                <Image 
                  className="object-cover w-full h-full rounded-2xl"
                  src="/news-details.jpg" 
                  alt="pics"
                  fill
                  priority
                  sizes='fill'
              />
              </div>
              <p className='text-black text-[30px] font-medium'>We are Leader in Technology Market</p>
              <p className='text-sm text-gray-500'>
                Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus 
                in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. 
                Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae 
                est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
              </p>
              <p className='text-sm text-gray-500'>
                Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus 
                in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. 
                Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae 
                est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
              </p>
              <p className='text-sm text-gray-500'>
                Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus 
                in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. 
                Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae 
                est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
              </p>
              <div className='w-full border-t-[1px] border-t-gray-300 pt-5'>
                <p className='font-bold text-black'>2 comments</p>

                <div className='w-full flex pt-4 gap-3'>
                  <div className='w-[50px] h-[50px] rounded-[50%] bg-blue-400 flex items-center justify-center'>
                    <FaUser />
                  </div>
                  <div className='flex flex-col gap-3 w-[80%]'>
                    <p className='font-bold text-black'>Kevin Martin</p>
                    <p className='text-sm text-gray-500'>
                      Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis 
                      purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod 
                    </p>
                  </div>
                </div>
                <div className='w-full flex pt-4 gap-3'>
                  <div className='w-[50px] h-[50px] rounded-[50%] bg-blue-400 flex items-center justify-center'>
                    <FaUser />
                  </div>
                  <div className='flex flex-col gap-3 w-[80%]'>
                    <p className='font-bold text-black'>Albert Jones</p>
                    <p className='text-sm text-gray-500'>
                      Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis 
                      purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod 
                    </p>
                  </div>
                </div>
                <div className='w-full pt-7 flex flex-col gap-4'>
                  <p className='font-bold text-black text-[20px]'>Leave a comment</p>
                  <div className='w-full flex justify-between'>
                    <div className='w-[47%]'>
                      <p className='text-background'>Name</p>
                      <input 
                      className='w-full h-[50px] rounded-md outline-blue-400 pl-2 text-black bg-[#f4f5f9]'
                      type="text" />
                    </div>
                    <div className='w-[47%]'>
                      <p className='text-black'>email</p>
                      <input 
                      className='w-full h-[50px] rounded-md outline-blue-400 pl-2 text-black bg-[#f4f5f9]'
                      type="email" />
                    </div>
                  </div>
                  <div className='w-full'>
                    <p className='text-black'>Message</p>
                    <textarea 
                      className='w-full h-[150px] bg-[#f4f5f9] p-3 rounded-md outline-blue-400'
                      defaultValue="YOUR MESSAGE"
                      />
                  </div>
                  <div className='w-full'>
                    <button className='relative bg-[#336ae9] mt-5 lg:mt-0 text-white pt-4 pb-4 pl-8 pr-8 cursor-pointer overflow-hidden group'>
                        <span className='relative z-10'>SUBMIT</span>
                        <div className='absolute top-0 left-0 w-full h-0 bg-black transition-[height] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:h-full'></div>
                      </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:w-[30%] w-full flex flex-col gap-5 text-black'>
              <div className='w-full rounded-[4px] bg-[#f7f6f1] p-4'>
                <p className='font-bold text-black text-[20px]'>Latest Posts</p>
                <div className='w-full pt-7 gap-2 cursor-pointer flex flex-col hover:bg-white rounded-[5px] pl-4 pb-3'>
                  <div className='flex gap-1'>
                    <FaUser color='blue'/> <p className='text-sm text-black'>Admin</p>
                  </div>
                  <p className='font-bold text-sm'>Top crypto exchange influencers</p>
                </div>
                <div className='w-full pt-7 gap-2 cursor-pointer flex flex-col hover:bg-white rounded-[5px] pl-4 pb-3'>
                  <div className='flex gap-1'>
                    <FaUser color='blue'/> <p className='text-sm text-black'>Admin</p>
                  </div>
                  <p className='font-bold text-sm'>Necessity may give us best virtual court</p>
                </div>
                <div className='w-full pt-7 gap-2 cursor-pointer flex flex-col hover:bg-white rounded-[5px] pl-4 pb-3'>
                  <div className='flex gap-1'>
                    <FaUser color='blue'/> <p className='text-sm text-black'>Admin</p>
                  </div>
                  <p className='font-bold text-sm'>You should know about bussiness plan</p>
                </div>
              </div>
              <div className='w-full rounded-[4px] bg-[#f7f6f1] p-4 text-black'>
                <p className='text-[20px] font-bold'>Categories</p>
                <div className='w-full h-[50px] rounded-2xl flex items-center cursor-pointer hover:bg-white pl-3 hover:font-bold'>
                  <p>Artificial Intelligence</p>
                </div>
                <div className='w-full h-[50px] rounded-2xl flex items-center cursor-pointer hover:bg-white pl-3 hover:font-bold'>
                  <p>Cloud Solution</p>
                </div>
                <div className='w-full h-[50px] rounded-2xl flex items-center cursor-pointer hover:bg-white pl-3 hover:font-bold'>
                  <p>Cyber Data</p>
                </div>
                <div className='w-full h-[50px] rounded-2xl flex items-center cursor-pointer hover:bg-white pl-3 hover:font-bold'>
                  <p>SEO Marketing</p>
                </div>
                <div className='w-full h-[50px] rounded-2xl flex items-center cursor-pointer hover:bg-white pl-3 hover:font-bold'>
                  <p>UI/UX Design</p>
                </div>
                <div className='w-full h-[50px] rounded-2xl flex items-center cursor-pointer hover:bg-white pl-3 hover:font-bold'>
                  <p>Web Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Page