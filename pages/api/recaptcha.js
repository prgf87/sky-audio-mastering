import React from 'react';
import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise';

const handler = () => {
  async function createAssessment(req, res) {
    const client = new RecaptchaEnterpriseServiceClient();
    const projectPath = client.projectPath(PROJECT_ID);
    const request = {
      assessment: {
        event: {
          token: req?.body.token,
          siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_KEY,
        },
      },
      parent: projectPath,
    };
    const [response] = await client.createAssessment(request);
    if (!response.tokenProperties?.valid) {
      res.status(400)?.json({
        message: 'Invalid token',
        score: response?.riskAnalysis?.score,
        reason: response.tokenProperties?.invalidReason,
      });
      return;
    }

    if (response.tokenProperties.action === 'LOGIN') {
      return res.status(200)?.json({
        score: response?.riskAnalysis?.score,
        reason: response.riskAnalysis?.reasons,
        status: 'Ok',
      });
    } else {
      return res.status(500)?.json({
        reason: response.riskAnalysis?.reasons,
        status: 'Fail',
      });
    }
  }
  return <div>recaptcha</div>;
};

export default handler;
