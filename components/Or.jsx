import React from 'react';
import Button from './Button';

const ContactBanner = () => {
  return (
    <div className="h-[10rem] bg-black text-white flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-lg sm:text-2xl">Or..</h1> <br></br>
        <Button />
      </div>
    </div>
  );
};

export default ContactBanner;
