import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

const Button = () => {
  const [effect, setEffect] = useState(false);
  return (
    <div className="w-full flex justify-center items-center hover:scale-110 transition transform">
      <Link href="/contact">
        <button
          className={`${
            effect && 'animate-wiggle'
          } px-8 py-2 border hover:shadow-xl`}
          onClick={() => {
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
          Contact Us
        </button>
      </Link>
    </div>
  );
};

export default Button;
