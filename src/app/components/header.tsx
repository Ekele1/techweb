"use client";

import React, { useState } from 'react';
import { GiSpiderWeb } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Link from 'next/link';
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Pages', href: '/pages' },
    { label: 'Services', href: '/services' },
    { label: 'News', href: '/news' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className='w-full flex items-center justify-center bg-white fixed z-50 shadow-sm'>
        <div className='lg:w-[80%] w-[98%] h-[70px] flex items-center justify-between relative'>
          {/* Logo Section */}
          <Link href="/" className='flex items-center gap-2'>
            <GiSpiderWeb size={35} className="text-blue-600" />
            <p className='lg:text-[25px] text-[18px] font-bold'>TechWeb</p>
          </Link>

          {/* Desktop Navigation */}
          <nav className='lg:flex items-center gap-4 pl-2 pr-2 hidden'>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="cursor-pointer transition-all duration-300 hover:text-blue-500"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className='flex items-center lg:hidden focus:outline-none p-2'
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={showMenu}
          >
            {showMenu ? <IoClose size={25} /> : <RxHamburgerMenu size={25} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`
        fixed inset-0 z-40 lg:hidden
        transition-all duration-300 ease-in-out
        ${showMenu ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {/* Overlay */}
        <div 
          className={`absolute inset-0 bg-black/50 ${showMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={toggleMenu}
        />
        
        {/* Menu Panel */}
        <div className={`
          absolute right-0 top-[70px] h-full w-3/4 max-w-sm bg-[#232429] text-white
          shadow-xl flex flex-col p-6
          transition-transform duration-300 ease-in-out
          ${showMenu ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className='flex justify-between mb-8 border-b-[1px] border-white pb-3'>
            <Link href="/" className='flex items-center gap-2' onClick={toggleMenu}>
              <GiSpiderWeb size={35} className="text-blue-600" />
              <p className='lg:text-[25px] text-[18px] font-bold'>TechWeb</p>
            </Link>
            <button 
              onClick={toggleMenu}
              className='p-2 rounded-full hover:bg-gray-100'
              aria-label="Close menu"
            >
              <IoClose size={30} />
            </button>
          </div>
          
          <nav className='flex flex-col gap-3'>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-lg p-2 hover:text-blue-500 transition-colors border-b-[1px] border-white pb-3"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className='w-full mt-3 flex flex-col gap-4'>
            <div className='flex items-center gap-5'>
                <FiPhone size={25} className='text-blue-600'/>
                <div className=''>
                    <p>Call Now</p>
                    <p>+234 09154382278</p>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <IoMailOutline size={25} className='text-blue-600'/>
                <div className=''>
                    <p>Send Email</p>
                    <p>+234 09154382278</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;