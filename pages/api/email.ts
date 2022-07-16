import type { NextApiRequest, NextApiResponse } from 'next'

type EmailData = {
  data: any
}

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = JSON.parse(req.body);
  const message = {
    to: {
      email: process.env.SEND_EMAILS_TO,
      name: 'Vincent Tran'
    },
    from: {
      email: process.env.SEND_EMAILS_TO,
      name: 'Astro Web Dev'
    },
    replyTo: {
      email: `${body.email}`,
      name: `${body.name}`
    },
    subject: `New website message from ${body.name}`,
    text: `
    You have a new message from ${body.name} via your website.
    Please reply to ${body.email}
    
    Here it is:
      ${body.message}
    `,
  };

  // Send method
  sgMail.send(message).then(() => {
    res.status(200).json({ status: 'OK' })
  }).catch((err:any) =>{
    res.status(500).send({ status: err.message })
  })
}