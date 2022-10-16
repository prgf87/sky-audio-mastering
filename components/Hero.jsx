import React from 'react';
import Button from './Button';

const Hero = ({ heading, message }) => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen mb-8 bg-center bg-cover">
        <video
          src="/video/skymaster5.mov"
          type="video/mp4"
          playsInLine
          autoPlay
          loop
          muted
          width="100%"
        />
        {/*Outlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
        <div className="absolute grid grid-cols-1 mx-auto p-5 text-white z-[2] mt-[7rem]">
          <h2 className="text-3xl lg:text-5xl font-bold">{heading}</h2>
          <p className="py-5 text-lg sm:text-xl">{message}</p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Hero;
