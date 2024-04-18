'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ButtonOne } from './ButtonOne';
import { AlignJustify } from 'lucide-react';
import MobileMenu from './MobileMenu';

// import Drawer from 'react-modern-drawer';
// import ContactForm from './ContactForm';
// import React from 'react';

export function Header() {
  const buttons = [
    { name: 'TWITTER / X', href: '/#services' },
    { name: 'TELEGRAM', href: '/#showcase' },
    { name: 'BUY', href: '/#faq' },
  ];

  // const [isOpen, setIsOpen] = React.useState(false);
  // const toggleDrawer = () => {
  //   setIsOpen((prevState) => !prevState);
  // };

  return (
    <header className='mx-auto max-w-7xl bg-[#000] sticky top-0 z-50 mt-6 border-[#fff] border-4'>
      <nav className=' mx-auto max-w-7xl flex justify-between py-4 px-4 items-center'>
        <Link href='/'>
          <div className='min-w-[120px]'>
            <Image
              src='/logo-rb.png'
              alt='logo'
              width='400'
              height='100'
              className='hidden lg:block'
            />
            <Image
              src='/mobile-logo.png'
              alt='logo'
              width='60'
              height='100'
              className='block lg:hidden'
            />
          </div>
        </Link>
        <div className='flex lg:hidden'>
          <MobileMenu />
        </div>
        {/* <div className='hidden lg:flex gap-x-12'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-base font-semibold text-gray-600 hover:text-[#215DFF]'
            >
              {item.name}
            </Link>
          ))}
        </div> */}
        <div className='hidden lg:flex min-w-[120px]'>
          <a href=''>
            {/* <button
              className='font-semibold text-base bg-[#000] py-2 px-6 text-[#fff] rounded primary_button hover:duration-300'
              // onClick={toggleDrawer}
            >
              Contact Now
            </button> */}
          </a>
          {buttons.map((item) => (
            <div key={item.name}>
              <a href={item.href}>
                <button className='text-base font-semibold hover:text-[#FF9EEA] border-2 border-[#FF9EEA] text-white py-4 px-6 ml-2'>
                  {item.name}
                </button>
              </a>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}
