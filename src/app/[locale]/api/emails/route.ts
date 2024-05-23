import { sendEmail } from '@/utils/mail.util'

export async function POST(request: Request) {
  console.log('Sending email...')

  const params = request.body?.getReader()

  console.log('🚀 ~ params:', params)

  const sender = {
    name: 'John Doe',
    address: 'no-reply@yansena.tech',
  }

  const receipient = [
    {
      name: 'Jane Doe',
      address: 'jane-doe@yansena.tech',
    },
  ]

  try {
    const result = await sendEmail({
      sender,
      receipient,
      subject: 'Hello',
      message: 'Hello, world!',
    })

    console.log('🚀 ~ POST route ~ result:', result)

    return Response.json({
      message: 'Email sent successfully.',
      result,
    })
  } catch (error) {
    return Response.json(
      {
        message: 'Unable to send email.',
      },
      { status: 500 },
    )
  }
}
