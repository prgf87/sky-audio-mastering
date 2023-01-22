import React, { useCallback, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
// import { useForm } from 'react-hook-form';

const ContactForm = () => {
  return (
    <div>
      <div id="contact" className="relative top-[-150px]"></div>
      <div className="max-w-[1240px] m-auto pt-20 pb-8 h-[20rem]">
        <h1 className="text-4xl font-bold text-center pb-4">
          Let's work together
        </h1>
        <p className="text-2xl font-bold text-center pb-4">
          To contact Sky Audio Mastering, please send an email to
        </p>
        <p className="text-2xl font-bold text-center pb-4">
          skymastering1 [at] gmail [dot] com
        </p>
        {/* <form
          action="https://getform.io/f/6f47388d-a281-4a54-a067-b96932b002cf"
          method="POST"
          className="max-w-[800px] m-auto text-black"
        >
          <div className="grid grid-cols-2">
            <label>
              <span className="text-gray-500"></span>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border shadow-lg p-3 w-full"
              />
            </label>
            <label>
              <input
                type="email"
                name="email"
                className="border shadow-lg p-3 w-full"
                placeholder="youremail@example.com"
              />
            </label>
          </div>
          <div>
            <label>
              <textarea
                type="text"
                name="message"
                className="border shadow-lg p-3 w-full"
                rows="12"
                cols="30"
                placeholder="Place your message here"
              />
            </label>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="px-8 py-2 border p-3 w-1/2 text-white hover:scale-110 transition transform hover:gray-300"
            >
              Submit
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
};

export default ContactForm;
