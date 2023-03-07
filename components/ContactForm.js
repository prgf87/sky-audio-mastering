import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
// import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const recaptchaRef = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [buttonText, setButtonText] = useState('Send message');

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
        if (message.length <= 30 || message.length > 500) {
          alert('Please input a message between 30 and 500 characters long');
          setButtonText('Try Again');
          setEmail('');
          setMessage('');
          setName('');
          return;
        }
        setEmail('');
        setMessage('');
        setName('');
        setButtonText('Sending...');
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
          setShowSuccessMessage(false);
          setShowFailureMessage(true);
          return;
        }
        // setShowSuccessMessage(true);
        // setShowFailureMessage(false);
        setButtonText('Sent');
        console.log('*** Message Sent! ***');
        // console.log(res);
      } else {
        // const error = await res.json();
        // throw new Error(error.message);
      }
    } catch (error) {
      alert(error?.message || 'Something went wrong');
    } finally {
      recaptchaRef.current.reset();
      setTimeout(() => {
        setButtonText('Send Message');
      }, 1500);
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
                id="name"
                type="text"
                name="name"
                value={name}
                required
                minLength={6}
                onChange={(e) => {
                  setName(e?.target?.value);
                }}
                placeholder="Your Name"
                className="border shadow-lg p-3 w-full"
              />
            </label>

            <label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                onChange={(e) => {
                  setEmail(e?.target?.value);
                }}
                placeholder="Your Email"
                className="border shadow-lg p-3 w-full"
              />
            </label>
          </div>
          <div>
            <label>
              <textarea
                id="message"
                type="text"
                name="message"
                value={message}
                required
                minLength={30}
                maxLength={500}
                rows="12"
                placeholder="Place your message here"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="border shadow-lg p-3 w-full"
              />
            </label>
          </div>

          <div className="flex justify-center items-center mt-3">
            <button type="submit" value="Submit" className="submit-btn">
              {buttonText}
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
