import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const recaptchaRef = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const {
    register,
    formState: { errors },
  } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    recaptchaRef.current.execute();
  };

  const onReCAPTCHAChange = async (captchaCode) => {
    if (!captchaCode) {
      return;
    }
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        body: JSON.stringify({ captcha: captchaCode }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('****User Validated Correctly*****');
        console.log('Response: ', response);
        const res = await fetch('/api/sendgrid', {
          body: JSON.stringify({
            name: name,
            email: email,
            message: message,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        });

        const { error } = await res.json();
        if (error) {
          console.log(error);

          return;
        }

        console.log('*** Message Sent! ***');
        console.log(res);
      } else {
        const error = await res.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error?.message || 'Something went wrong');
    } finally {
      recaptchaRef.current.reset();
    }
  };

  return (
    <div className="min-h-screen">
      <div id="contact" className="relative top-[-50px] pb-[50px]"></div>
      <div className="max-w-[1240px] mx-auto pb-12 text-sm sm:text-lg items-center px-2">
        <h1 className="text-2xl md:text-5xl font-bold text-center pb-4">
          Let's work together
        </h1>
        <p className="max-w-xl mx-auto text-md md:text-xl font-bold text-center py-10">
          To contact Kri at Sky Mastering, please send a message by filling in
          the form below
        </p>

        <form
          onSubmit={handleSubmit}
          method="POST"
          className="max-w-[800px] m-auto text-black"
        >
          <div className="grid grid-cols-2">
            <label>
              <span className="text-gray-500"></span>
              <input
                type="name"
                {...register('name', {
                  required: 'Please enter your name',
                  minLength: {
                    value: 5,

                    message: 'Please enter at least 4 characters',
                  },
                })}
                name="name"
                placeholder="Your Name"
                className="border shadow-lg p-3 w-full"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
            {errors.name && (
              <div className="text-red-500 ">{errors.name.message}</div>
            )}
            <label>
              <input
                type="email"
                {...register('email', {
                  required: 'Please enter email',
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                    message: 'Please enter valid email',
                  },
                })}
                name="email"
                className="border shadow-lg p-3 w-full"
                placeholder="youremail@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            {errors.email && (
              <div className="text-red-500 ">{errors.email.message}</div>
            )}
          </div>
          <div>
            <label>
              <textarea
                type="text"
                name="message"
                {...register('message', {
                  required: 'Please enter your message',
                  minLength: {
                    value: 20,
                    message: 'Please enter at least 20 characters',
                  },
                })}
                className="border shadow-lg p-3 w-full"
                rows="12"
                cols="30"
                placeholder="Place your message here"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </label>
            {errors.message && (
              <div className="text-red-500 ">{errors.message.message}</div>
            )}
          </div>

          <div className="flex justify-center items-center mt-3">
            <button type="submit" value="Submit" className="submit-btn">
              Send Message
            </button>
          </div>
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={onReCAPTCHAChange}
            badge="inline"
            className="flex justify-center items-center my-5"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
