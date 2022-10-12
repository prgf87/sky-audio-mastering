import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in-out duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1
            style={{ color: `${textColor}` }}
            className="font-bold text-xl sm:text-3xl cursor-pointer hover:scale-105 transition transform"
          >
            Sky Mastering
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4 hover:scale-125 transition transform">
            <Link href="/">Home</Link>
          </li>

          <li className="p-4 hover:scale-125 transition transform">
            <Link href="/#services">Services</Link>
          </li>
          <li className="p-4 hover:scale-125 transition transform">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4 hover:scale-125 transition transform">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div
          style={{ color: `${textColor}` }}
          className="flex justify-center items-end gap-4 px-4"
        >
          <Link href="https://www.facebook.com/Skyaudiomastering">
            <a
              className="cursor-pointer hover:scale-125 transition transform"
              target="blank"
            >
              <BsFacebook size={30} />
            </a>
          </Link>
          <Link href="https://www.instagram.com/skymastering/">
            <a
              className="cursor-pointer hover:scale-125 transition transform"
              target="blank"
            >
              <BsInstagram size={30} />
            </a>
          </Link>
        </div>

        {/*Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={30} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={30} style={{ color: `${textColor}` }} />
          )}
        </div>

        {/*Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in-out duration-500'
              : 'sm:hidden absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in-out duration-500'
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500 hover:scale-125 transition transform"
            >
              <Link href="/">Home</Link>
            </li>

            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500 hover:scale-125 transition transform"
            >
              <Link href="/#services">Services</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500 hover:scale-125 transition transform"
            >
              <Link href="/about">About</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500 hover:scale-125 transition transform"
            >
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <div className="flex justify-center items-end gap-4 p-4 ">
                <Link href="https://www.facebook.com/Skyaudiomastering">
                  <a className="cursor-pointer hover:scale-125 transition transform">
                    <BsFacebook size={30} />
                  </a>
                </Link>
                <Link href="https://www.instagram.com/skymastering/">
                  <a className="cursor-pointer hover:scale-125 transition transform">
                    <BsInstagram size={30} />
                  </a>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
