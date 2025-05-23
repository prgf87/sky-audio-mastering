import React, { useState } from 'react';

const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.target.reset(); // Clear the form
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div id="contact" className="relative top-[-150px]"></div>
      <div className="max-w-[1240px] mx-auto pb-8 max-h-screen text-sm sm:text-lg">
        <h1 className="text-2xl font-bold text-center py-8">
          Let's work together
        </h1>

        <form
          onSubmit={handleSubmit}
          className="max-w-[800px] m-auto text-black"
        >
          {/* Web3Forms Access Key - Replace with your actual key */}
          <input type="hidden" name="access_key" value={apiKey} />

          {/* Optional: Customize subject line */}
          <input
            type="hidden"
            name="subject"
            value="Sky Mastering Contact Form Submission"
          />

          {/* Optional: Redirect after submission */}
          {/* <input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          /> */}

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
            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="text-green-600 text-center mt-4">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="text-red-600 text-center mt-4">
              Sorry, there was an error sending your message. Please try again.
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Contact;

// import React from 'react';

// const Contact = () => {
//   return (
//     <>
//       <div id="contact" className="relative top-[-150px]"></div>
//       <div className="max-w-[1240px] mx-auto pb-8 max-h-screen text-sm sm:text-lg">
//         <h1 className="text-2xl font-bold text-center py-8">
//           Let's work together
//         </h1>

//         <form
//           action="https://getform.io/f/6f47388d-a281-4a54-a067-b96932b002cf"
//           method="POST"
//           className="max-w-[800px] m-auto text-black"
//         >
//           <div className="grid grid-cols-2">
//             <label>
//               <span className="text-gray-500"></span>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 className="border shadow-lg p-3 w-full"
//                 required
//                 autoComplete="name"
//               />
//             </label>
//             <label>
//               <input
//                 type="email"
//                 name="email"
//                 className="border shadow-lg p-3 w-full"
//                 placeholder="youremail@example.com"
//                 required
//                 autoComplete="email"
//               />
//             </label>
//           </div>
//           <div>
//             <label>
//               <textarea
//                 type="text"
//                 name="message"
//                 className="border shadow-lg p-3 w-full"
//                 rows="12"
//                 cols="30"
//                 placeholder="Place your message here"
//                 required
//               />
//             </label>
//           </div>

//           <div className="flex justify-center items-center">
//             <button type="submit" className="submit-btn">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Contact;
