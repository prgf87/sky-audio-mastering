export default async function handler(req, res) {
  const { body, method } = req;
  const { captcha } = body;

  if (method === 'POST') {
    if (!captcha) {
      return res.status(422).json({
        message: 'Unproccesable request, please provide the required fields',
      });
    }

    try {
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
          },
          method: 'POST',
        }
      );
      const captchaValidation = await response.json();

      if (captchaValidation.success) {
        return res.status(201).json({
          status: 201,
          error: '',
          message: '***ReCAPTCHA VALIDATION SUCCESS***',
        });
      }

      return res.status(422).json({
        message: 'Unproccesable request, Invalid captcha code',
      });
    } catch (error) {
      return res.status(422).json({ message: 'Something went wrong' });
    }
  }

  return res.status(404).send('Not found');
}
