// import Link from 'next/link';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const recaptchaRef = React.createRef();
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
      const response = await fetch('/api/auth', {
        method: 'POST',
        body: JSON.stringify({ captcha: captchaCode }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // If the response is ok than show the success alert
        console.log('****User Validated Correctly*****');
        onValidate;
      } else {
        // Else throw an error with the message returned
        // from the API
        const error = await res.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error?.message || 'Something went wrong');
    } finally {
      // Reset the reCAPTCHA when the request has failed or succeeeded
      // so that it can be executed again if user submits another email.
      recaptchaRef.current.reset();
    }
  };

  const onValidate = async ({ name, email, message }) => {
    const res = await fetch('/api/email', {
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
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen">
      <div id="contact" className="relative top-[-50px] pb-[50px]"></div>
      <div className="max-w-[1240px] mx-auto pb-12 text-sm sm:text-lg items-center px-2">
        <h1 className="text-2xl md:text-5xl font-bold text-center pb-4">
          Let's work together
        </h1>
        <p className="max-w-xl mx-auto text-md md:text-xl font-bold text-center pb-4">
          To contact Kri at Sky Audio Mastering, please send a message by
          filling in the form below
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

// import Link from 'next/link';
// import React from 'react';
// import { useForm } from 'react-hook-form';

// const ContactForm = () => {
//   const {
//     name,
//     email,
//     message,
//     register,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async ({ name, email, message }) => {
//     const response = await fetch('/api/auth', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         name,
//         email,
//         message,
//       }),
//     });
//     const data = await response.json();
//     console.log(data);
//   };

//   return (
//     <div>
//       <div id="contact" className="relative top-[-150px]"></div>
//       <div className="max-w-[1240px] mx-auto pb-8 max-h-screen text-sm sm:text-lg">
//         <h1 className="text-2xl font-bold text-center pb-4">
//           Let's work together
//         </h1>
//         {/* <form
//           className="mx-auto max-w-screen-md"
//           onSubmit={handleSubmit(submitHandler)}
//         >
//           <h1 className="mb-4 text-xl">Contact Me</h1>
//           <div className="mb-4">
//             <label htmlFor="name">Name</label>
//             <input
//               type="name"
//               {...register('name', {
//                 required: 'Please enter your name',
//                 minLength: {
//                   value: 5,
//                   message: 'Please enter at least 4 characters',
//                 },
//               })}
//               id="name"
//               className="w-full"
//             ></input>
//             {errors.name && (
//               <div className="text-red-500 ">{errors.name.message}</div>
//             )}
//             </div>
//           <div className="mb-4">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               {...register('email', {
//                 required: 'Please enter email',
//                 pattern: {
//                   value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
//                   message: 'Please enter valid email',
//                 },
//               })}
//               id="email"
//               className="w-full"
//             ></input>
//             {errors.email && (
//               <div className="text-red-500">{errors.email.message}</div>
//             )}
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               {...register('password', {
//                 required: 'Please enter password',
//                 minLength: {
//                   value: 9,
//                   message: 'Please enter a valid password',
//                 },
//               })}
//               id="password"
//               className="w-full"
//             ></input>
//             {errors.password && (
//               <div className="text-red-500 ">{errors.password.message}</div>
//             )}
//           </div>
//           <div className="mb-4">
//             <button className="btn1">Login</button>
//           </div>
//           <div className="mb-4">
//             Think you&apos;re in the wrong place? &nbsp; Go back{' '}
//             <Link href="/admin">Home</Link>
//           </div>
//         </form> */}
//         <form
//           // action="https://getform.io/f/6f47388d-a281-4a54-a067-b96932b002cf"
//           action="?"
//           method="POST"
//           className="max-w-[800px] m-auto text-black"
//         >
//           <div className="grid grid-cols-2">
//             <label>
//               <span className="text-gray-500"></span>
//               <input
//                 type="name"
//                 {...register('name', {
//                   required: 'Please enter your name',
//                   minLength: {
//                     value: 5,
//                     message: 'Please enter at least 4 characters',
//                   },
//                 })}
//                 name="name"
//                 placeholder="Your Name"
//                 className="border shadow-lg p-3 w-full"
//               />
//             </label>
//             <label>
//               <input
//                 type="email"
//                 {...register('email', {
//                   required: 'Please enter email',
//                   pattern: {
//                     value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
//                     message: 'Please enter valid email',
//                   },
//                 })}
//                 name="email"
//                 className="border shadow-lg p-3 w-full"
//                 placeholder="youremail@example.com"
//               />
//             </label>
//           </div>
//           <div>
//             <label>
//               <textarea
//                 type="text"
//                 name="message"
//                 {...register('message', {
//                   required: 'Please enter your message',
//                   minLength: {
//                     value: 20,
//                     message: 'Please enter at least 20 characters',
//                   },
//                 })}
//                 className="border shadow-lg p-3 w-full"
//                 rows="12"
//                 cols="30"
//                 placeholder="Place your message here"
//               />
//             </label>
//           </div>
//           <div
//             class="g-recaptcha"
//             data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
//           ></div>

//           <div className="flex justify-center items-center">
//             <button type="submit" value="Submit" className="submit-btn">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
