import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: 'skymastering1@gmail.com',
      from: 'prgf2011@gmail.com',
      name: `${req.body.name}`,
      email: `${req.body.email}`,
      html: `${req.body.message}`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
