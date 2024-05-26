import { sendEmail } from '@/utils/mail.util'

export async function POST(req: Request) {
  const data = await req.json()

  const sender = {
    name: data.name,
    address: 'no-reply@yansena.tech',
  }

  const receipient = [
    {
      name: 'Yanderson Sena',
      address: 'sena@yansena.tech',
    },
  ]

  try {
    const result = await sendEmail({
      sender,
      receipient,
      subject: `${data.subject} - ${data.email}`,
      message: data.content,
    })

    console.log('🚀 ~ POST ~ result:', result)

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
