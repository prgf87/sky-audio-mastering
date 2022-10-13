import React, { useCallback, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
// import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [notification, setNotification] = useState('');

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSumitForm = useCallback(
    (e) => {
      e.preventDefault();
      if (!executeRecaptcha) {
        console.log('Execute recaptcha not yet available');
        return;
      }
      executeRecaptcha('enquiryFormSubmit').then((gReCaptchaToken) => {
        console.log(gReCaptchaToken, 'response Google reCaptcha server');
        submitEnquiryForm(gReCaptchaToken);
      });
    },
    [executeRecaptcha]
  );

  const submitEnquiryForm = (gReCaptchaToken) => {
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message,
        gRecaptchaToken: gReCaptchaToken,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res, 'response from backend');
        if (res?.status === 'success') {
          setNotification(res?.message);
        } else {
          setNotification(res?.message);
        }
      });
  };

  return (
    <div id="contact">
      <div className="max-w-[1240px] mx-auto pb-8 max-h-screen text-sm sm:text-lg">
        <h1 className="text-2xl font-bold text-center pb-4">
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
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
