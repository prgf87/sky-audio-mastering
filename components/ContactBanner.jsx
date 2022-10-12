import React from 'react';
import Button from '../components/Button';

const ContactBanner = () => {
  return (
    <div className="h-[11rem] bg-black text-white flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-lg sm:text-2xl">We’d love to work with you.</h1>{' '}
        <br></br>
        <Button />
      </div>
    </div>
  );
};

export default ContactBanner;
