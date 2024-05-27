import { vi } from 'vitest'
import nodemailer from 'nodemailer'
import { SendEmailDto, sendEmail } from '@/utils/mail.util'
import exp from 'constants'

describe('Mail Util', () => {
  let mockSendMail: any
  let mockCreateTransport: any

  beforeEach(() => {
    mockCreateTransport = vi.fn().mockReturnValue({
      sendMail: vi.fn(), // Mock the sendMail method
    })
    ;(nodemailer as any).createTransport = mockCreateTransport
    mockSendMail = mockCreateTransport().sendMail
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('should send an email successfully', async () => {
    const mockInfo = { response: '250 ok' }
    mockSendMail.mockImplementation((_, callback) => {
      callback(null, mockInfo)
    })

    const emailData: SendEmailDto = {
      sender: { name: 'Yanderson Sena', address: 'teste@yansena.tech' },
      receipient: [{ name: 'Yanderson Sena', address: 'teste@yansena.tech' }],
      subject: 'Test',
      message: 'This is a test email.',
    }

    const result = sendEmail(emailData)

    console.log('🚀 ~ test ~ result:', result)

    expect(result).toEqual({ type: 'success', message: mockInfo.response })
    expect(mockSendMail).toHaveBeenCalledTimes(1)
    expect(mockSendMail).toHaveBeenCalledWith({
      from: emailData.sender,
      to: emailData.receipient,
      subject: emailData.subject,
      text: emailData.message,
    })
  })
})
