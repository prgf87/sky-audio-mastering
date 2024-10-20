import React from 'react';
import Button from './Button';

const Hero = ({ heading, message }) => {
  return (
    <header>
      <div className="flex items-center justify-center h-screen mb-4 bg-center bg-cover">
        <video muted playsInline autoPlay loop width="100%">
          <source
            src="https://res.cloudinary.com/dzitj9wug/video/upload/v1729009652/skymaster.mp4"
            type="video/mp4"
          />
        </video>

        {/*Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
        <div className="absolute grid grid-cols-1 mx-[3rem] lg:mx-[20rem] p-5 text-white z-[2] mt-[10rem]">
          <h2 className="text-3xl lg:text-5xl font-bold">{heading}</h2>
          <p className="py-5 text-lg sm:text-xl">{message}</p>
          <Button />
        </div>
      </div>
    </header>
  );
};

export default Hero;
