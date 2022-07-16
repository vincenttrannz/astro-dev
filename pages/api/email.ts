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
  // console.log('Message return:', body);
  // const message = {
  //   nickname: 'Astro Web Dev',
  //   to: {
  //     email: process.env.SEND_EMAILS_TO,
  //     name: 'Vincent Tran'
  //   },
  //   from: {
  //     email: process.env.SEND_EMAILS_TO,
  //     name: 'Astro Web Dev'
  //   },
  //   // replyTo: {
  //   //   email: `${req.body.email}`,
  //   //   name: `${req.body.name}`
  //   // },
  //   subject: `New website message from ${req.body.name}`,
  //   text: `
  //   You have a new message from ${req.body.name} (${req.body.email}) via your website.
    
  //   Here it is:
  //   ${req.body.message}
  //   `,
  // };
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;
  
  sgMail.send({
    to: process.env.SEND_EMAILS_TO,
    from: process.env.SEND_EMAILS_TO,
    subject: 'New Message from Website!',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  }).then(() => {
    res.status(200).json({ status: 'OK' })
  })

  // catch (err) {
  //   res.json(err)
  //   res.status(500).send({ status: err })
  // }
  
  // sgMail.send(message).then(() => {
  //   res.status(200).json({ status: 'OK' })
  // }).catch((err:any) =>{
  //   res.status(500).send({ status: err.message })
  // });
}