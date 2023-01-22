import React from 'react';
import Services from './Services';

const ContactForm = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-black to-transparent" a>
        <div id="contact" className="relative top-[-150px]"></div>
        <div className="max-w-[1240px] m-auto px-[3rem] pt-8 pb-8 h-[20rem]">
          <h1 className="text-xl md:text-5xl font-bold text-center pb-4 ">
            Let's work together
          </h1>
          <p className="text-md md:text-2xl font-bold text-center pb-4">
            To contact Kri at Sky Audio Mastering, please send an email to
          </p>
          <p className="text-md md:text-2xl font-bold text-center pb-4">
            skymastering1 [at] gmail [dot] com
          </p>
          <div className="flex justify-center items-center pb-6">
            <p className="hover:text-white-1000/70 hover:scale-110 transition-transform">
              <a href="https://www.krisamadhi.com/clients/" target="blank">
                <button className="mt-4 px-2 md:px-8 py-2 border text-sm md:text-xl ">
                  Click here for more clients
                </button>
              </a>
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-center pt-8">
        Our Services
      </h1>
      <Services />
    </div>
  );
};

export default ContactForm;
