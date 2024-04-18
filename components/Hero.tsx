'use client';

import VideoOne from '@/components/VideoOne';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className=''>
      <div className='mx-auto max-w-7xl flex flex-col items-center pt-10 lg:pt-12 text-center'>
        <div className='w-full'>
          <VideoOne />
        </div>
        <div className='w-full bg-[#FF9EEA] mt-12 px-4 py-6 border-[#fff] border-4 text-sm md:text-2xl lg:text-4xl font-semibold text-wrap'>
          CA: Daj7rboZr4sfuvTNbXg
          <br className='md:hidden' />
          DfpfQFwK8k1fgzCFGBU6uN66e
        </div>
        <div className='mt-10 lg:mt-20'>
          <Image
            src='/bottom.png'
            alt='Branzen'
            width='1000'
            height='1000'
          ></Image>
        </div>
      </div>
    </div>
  );
}
