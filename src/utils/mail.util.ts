import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: process.env.NODE_ENV !== 'development',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
} as SMTPTransport.Options)

export type SendEmailDto = {
  sender: Mail.Address
  receipient: Mail.Address[]
  subject: string
  message: string
}

export const sendEmail = (dto: SendEmailDto) => {
  const mailOptions = {
    from: dto.sender,
    to: dto.receipient,
    subject: dto.subject,
    text: dto.message,
  }

  return transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return error.message
    } else {
      return info.response
    }
  })
}

export const sendEmailPromise = () => {
  const transport = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '2d9197fe7a3f4d',
      pass: '********9a7c',
    },
  })

  return transport
}
