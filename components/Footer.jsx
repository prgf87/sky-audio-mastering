import React from 'react';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="max-w-screen] bg-black text-white">
      <div className="flex items-center justify-between px-4 pb-4">
        <div className="flex justify-center items-end gap-4 px-4">
          <Link href="https://www.facebook.com/Skyaudiomastering">
            <a className="cursor-pointer">
              <BsFacebook size={30} />
            </a>
          </Link>
          <Link href="https://www.instagram.com/skymastering/">
            <a className="cursor-pointer">
              <BsInstagram size={30} />
            </a>
          </Link>
        </div>

        <div className="flex items-center justify-center p-4 text-sm sm:text-lg">
          <p>Sky Mastering ©</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
