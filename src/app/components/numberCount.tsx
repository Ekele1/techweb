import React from 'react'
import { RiHandCoinLine } from "react-icons/ri";
import { BsPersonArmsUp } from "react-icons/bs";
import { BsAward } from "react-icons/bs";
import { GiTeamUpgrade } from "react-icons/gi";

const NumberCount = () => {
  return (
    <div className='w-full lg:h-[400px] h-[1000px] relative flex items-center justify-center'>
        <img className='w-full h-full object-cover' src="./7am.jpg" alt="" />
        <div className='w-[70%] absolute flex flex-col lg:flex-row justify-between gap-10 lg:gap-0'>
            <div className='lg:w-[20%] w-full flex flex-col items-center justify-center gap-3'>
                <div className='w-[100px] h-[100px] bg-black flex items-center justify-center'>
                    <RiHandCoinLine className='text-[40px] text-[#336ae9]'/>
                </div>
                <p className='text-[40px] text-white font-bold'>100+</p>
                <p className='text-[15px] text-white font-bold'>Project Complete</p>
            </div>
            <div className='lg:w-[20%] w-full flex flex-col items-center justify-center gap-3'>
                <div className='w-[100px] h-[100px] bg-black flex items-center justify-center'>
                    <BsPersonArmsUp className='text-[40px] text-[#336ae9]'/>
                </div>
                <p className='text-[40px] text-white font-bold'>200+</p>
                <p className='text-[15px] text-white font-bold'>Happy Client</p>
            </div>
            <div className='lg:w-[20%] w-full flex flex-col items-center justify-center gap-3'>
                <div className='w-[100px] h-[100px] bg-black flex items-center justify-center'>
                    <BsAward className='text-[40px] text-[#336ae9]'/>
                </div>
                <p className='text-[40px] text-white font-bold'>10</p>
                <p className='text-[15px] text-white font-bold'>Award Winning</p>
            </div>
            <div className='lg:w-[20%] w-full flex flex-col items-center justify-center gap-3'>
                <div className='w-[100px] h-[100px] bg-black flex items-center justify-center'>
                    <GiTeamUpgrade className='text-[40px] text-[#336ae9]'/>
                </div>
                <p className='text-[40px] text-white font-bold'>20+</p>
                <p className='text-[15px] text-white font-bold'>Company Team</p>
            </div>
        </div>
    </div>
  )
}

export default NumberCount