"use client";

import React, { useState } from 'react';
import { GiSpiderWeb } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose, IoChevronDown, IoChevronUp } from "react-icons/io5";
import Link from 'next/link';
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

interface NavItem {
  label: string;
  href: string;
  subItems?: SubItem[];
}

interface SubItem {
  label: string;
  href: string;
}

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    // Reset expanded item when closing menu
    if (showMenu) {
      setExpandedMobileItem(null);
    }
  };

  const toggleMobileDropdown = (label: string) => {
    setExpandedMobileItem(expandedMobileItem === label ? null : label);
  };

  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { 
      label: 'Pages', 
      href: '/pages',
      subItems: [
        { label: 'About Us', href: '/about' },
        { label: 'Projects', href: '/projects' },
        { label: 'Our Team', href: '/team' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'FAQ', href: '/faq' },
      ]
    },
    { label: 'Services', href: '/services' },
    { label: 'News', href: '/news' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className='w-full flex items-center justify-center bg-white fixed z-50 shadow-sm'>
        <div className='lg:w-[80%] w-[98%] h-[70px] flex items-center justify-between relative'>
          {/* Logo Section */}
          <Link href="/" className='flex items-center gap-2 text-black'>
            <GiSpiderWeb size={35} className="text-blue-600" />
            <p className='lg:text-[25px] text-[18px] font-bold'>TechWeb</p>
          </Link>

          {/* Desktop Navigation */}
          <nav className='lg:flex items-center gap-4 pl-2 pr-2 hidden text-black'>
            {navItems.map((item) => (
              <div 
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.subItems && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="cursor-pointer transition-all duration-300 hover:text-blue-500 flex items-center gap-1"
                >
                  {item.label}
                  {item.subItems && (
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                
                {item.subItems && activeDropdown === item.label && (
                  <div 
                    className="absolute left-0 top-full mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-50 animate-fadeIn"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className='flex items-center lg:hidden focus:outline-none p-2'
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={showMenu}
          >
            {showMenu ? <IoClose size={25} color='black' /> : <RxHamburgerMenu color='black' size={25} />}
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
          absolute right-0 top-[70px] h-[calc(100vh-70px)] w-3/4 max-w-sm bg-[#232429] text-white
          shadow-xl flex flex-col
          transition-transform duration-300 ease-in-out
          ${showMenu ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className='p-6 flex justify-between items-center border-b-[1px] border-white'>
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
          
          <nav className='flex-1 overflow-y-auto'>
            {navItems.map((item) => (
              <div key={item.label} className='border-b-[1px] border-white/30'>
                <div className="flex justify-between items-center">
                  <Link
                    href={item.href}
                    className="text-lg p-4 hover:text-blue-500 transition-colors flex-1"
                    onClick={(e) => {
                      if (item.subItems) {
                        e.preventDefault();
                        toggleMobileDropdown(item.label);
                      } else {
                        toggleMenu();
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <button 
                      onClick={() => toggleMobileDropdown(item.label)}
                      className="p-4 text-white hover:text-blue-500 transition-colors"
                      aria-label={`Toggle ${item.label} dropdown`}
                    >
                      {expandedMobileItem === item.label ? <IoChevronUp /> : <IoChevronDown />}
                    </button>
                  )}
                </div>
                {item.subItems && expandedMobileItem === item.label && (
                  <div className="bg-[#2c2e33] overflow-y-auto max-h-60">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block py-3 px-6 text-gray-300 hover:text-blue-500 hover:bg-[#3a3d44] transition-colors"
                        onClick={toggleMenu}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          <div className='p-6 border-t-[1px] border-white/30'>
            <div className='flex items-center gap-5 mb-4'>
              <FiPhone size={25} className='text-blue-600'/>
              <div className=''>
                <p className='text-sm text-gray-300'>Call Now</p>
                <p>+234 09154382278</p>
              </div>
            </div>
            <div className='flex items-center gap-5'>
              <IoMailOutline size={25} className='text-blue-600'/>
              <div className=''>
                <p className='text-sm text-gray-300'>Send Email</p>
                <p>info@techweb.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;