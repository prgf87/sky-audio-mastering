const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sgMail.send({
      to: process.env.EMAIL_RECIPIENT,
      from: process.env.ADMIN_EMAIL,
      subject: `[New Lead from Sky Audio Mastering Website]`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>Sky Audio Mastering Enquiry</title>
        <meta name="description" content="Sky Audio Mastering Enquiry">
        <meta name="author" content="GlobalWebSystems">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new email from ${req.body.name}</h3> <p>Their email address is: ${req.body.email}</p>
              <div style="font-size: 16px;line-height: 1.5rem;">              
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
              <img src="https://www.skyaudiomastering.com/logo.jpg" class="logo-image" style="height: 103px;width: 103px;border-radius: 5px;overflow: hidden;">
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">With my very best regards,<br>Pedro Ferreira<br>Director || Lead Developer<br>+44 (0) 7472097891<br>globalwebsystems.official@gmail.com<br>Global Web Systems - UK</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">                
                <a href="https://github.com/prgf87/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                <a href="https://linkedin.com/in/prgf87/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>                
              </div>
              </div>
      </body>
      </html>`,

      text: `Name: ${req.body.name}
      Email: ${req.body.email}      
      Message: ${req.body.message}
      `,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
