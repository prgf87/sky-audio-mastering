const handler = (req, res) => {
  if (req.method === 'POST') {
    try {
      fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=your_secret_key&response=${req.body.gRecaptchaToken}`,
      })
        .then((reCaptchaRes) => reCaptchaRes.json())
        .then((reCaptchaRes) => {
          console.log(
            reCaptchaRes,
            'Response from Google reCaptcha verification API'
          );
          if (reCaptchaRes?.score > 0.5) {
            post('https://getform.io/f/0b1249b7-f77d-4d8b-8ba9-a68f3c5aec6b');
            // Save data to the database from here
            res.status(200).json({
              status: 'success',
              message: 'Enquiry submitted successfully',
            });
          } else {
            res.status(200).json({
              status: 'failure',
              message: 'Google ReCaptcha Failure',
            });
          }
        });
    } catch (err) {
      res.status(405).json({
        status: 'failure',
        message: 'Error submitting the enquiry form',
      });
    }
  } else {
    res.status(405);
    res.end();
  }
};

export default handler;
