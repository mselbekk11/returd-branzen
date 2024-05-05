import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <div className='w-full bg-[#000] flex flex-col items-center py-20 px-6'>
      <Image
        src='/footer-logo.png'
        alt='logo'
        width='350'
        height='50'
        className='pb-6'
      />
      <p className='text-gray-500 pb-2 text-xs lg:text-base'>
        Copyright © 2024 Returd Branzen. All rights reserved.
      </p>
      <p className='text-white pb-2 text-xs lg:text-base'>
        Site by{' '}
        <a
          href='https://www.meme-coin.io/'
          className='underline'
          target='_blank'
        >
          meme-coin.io
        </a>
      </p>
    </div>
  );
}
