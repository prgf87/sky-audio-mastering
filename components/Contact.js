import React from 'react';

const Contact = () => {
  return (
    <>
      <div id="contact" className="relative top-[-150px]"></div>
      <div className="max-w-[1240px] mx-auto pb-8 max-h-screen text-sm sm:text-lg">
        <h1 className="text-2xl font-bold text-center py-8">
          Let's work together
        </h1>

        <form
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
                required
                autoComplete="name"
              />
            </label>
            <label>
              <input
                type="email"
                name="email"
                className="border shadow-lg p-3 w-full"
                placeholder="youremail@example.com"
                required
                autoComplete="email"
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
                required
              />
            </label>
          </div>

          <div className="flex justify-center items-center">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Contact;
