import React from 'react';

const VideoOne = () => {
  return (
    <div className='border-[#fff] border-4'>
    <video width='100%' height='100%' muted autoPlay loop playsInline>
      <source src='https://res.cloudinary.com/dtjasyr7k/video/upload/v1713397410/VERJUN_chlprx.mp4' />
      Your browser does not support the video tag.
    </video>
    </div>
  );
};

export default VideoOne;
