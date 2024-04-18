'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { AlignJustify, X } from 'lucide-react';

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  const buttons = [
    { name: 'TWITTER / X', href: 'https://x.com/returdbranzen' },
    { name: 'TELEGRAM', href: 'https://t.me/returdbranzen' },
    { name: 'DEX', href: '/' },
    { name: 'BUY', href: '/' },
  ];

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className='lg:hidden flex flex-col items-center'>
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls='mobile-nav'
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className='sr-only'>Menu</span>
        {mobileNavOpen ? (
          <X className='w-8 h-8 fill-current text-white' />
        ) : (
          <AlignJustify className='w-8 h-8 fill-current text-white' />
        )}
      </button>

      {/*Mobile navigation */}
      <nav
        id='mobile-nav'
        ref={mobileNav}
        className='absolute top-full z-20 left-0 w-full sm:px-6 overflow-hidden transition-all duration-300 ease-in-out mt-4'
        style={
          mobileNavOpen
            ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0.8 }
        }
      >
        <ul className='bg-black px-6 py-6 border-4 border-white flex flex-col items-center'>
          {buttons.map((item) => (
            <li key={item.name} className='pb-6'>
              <a href={item.href} target='_blank'>
                <button className='text-base font-semibold hover:text-[#FF9EEA] border-2 border-[#FF9EEA] text-white py-4 px-6 ml-2 min-w-[200px]'>
                  {item.name}
                </button>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
