// import { render, screen, fireEvent } from '@testing-library/react' // Ou '@testing-library/svelte', etc.
import { sendEmail } from '@/utils/mail.util'
import { POST } from '../route'
// import { json } from '@remix-run/node'
import { vi } from 'vitest'
import { URL } from 'url'
import { NextRequest } from 'next/server'

vi.mock('@/utils/mail.util', async (importOriginal) => {
  const actual = await importOriginal()
  return Object.assign({}, actual, {
    sendEmail: vi.fn(),
  })
})

vi.mock('next', async (importOriginal) => {
  const actual = await importOriginal()
  return Object.assign({}, actual, {
    req: {
      json: vi.fn().mockResolvedValue({
        name: 'Yanderson Sena',
        email: '',
        subject: 'Test',
        content: 'This is a test email.',
      }),
    },
  })
})

describe('Send Emails ROUTES', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('should send an email is sucessful', async () => {
    const mockSendEmail = vi.mocked(sendEmail)
    mockSendEmail.mockResolvedValue({
      type: 'success',
      message: 'Email sent successfully.',
    })

    const formData = {
      name: 'Yanderson Sena',
      email: '',
      subject: 'Test',
      content: 'This is a test email.',
    }

    const request = new NextRequest(
      new URL('/api/email', 'http://localhost:3000'),
      {
        // Use URL object
        method: 'POST',
        body: JSON.stringify(formData),
      },
    )

    const response = await POST(request)

    console.log('🚀 ~ test ~ response:', response)

    expect(response.status).toBe(200)
    const responseData = await response.json()
    expect(responseData.message).toBe('Email sent successfully.')
  })
  test('should return an error if email is not sent', async () => {
    const mockSendEmail = vi.mocked(sendEmail)
    mockSendEmail.mockRejectedValue({
      type: 'error',
      message: 'Unable to send email.',
    })

    const formData = {
      name: 'Yanderson Sena',
      email: '',
      subject: 'Test',
      content: 'This is a test email.',
    }

    const request = new NextRequest(
      new URL('/api/email', 'http://localhost:3000'),
      {
        // Use URL object
        method: 'POST',
        body: JSON.stringify(formData),
      },
    )

    const response = await POST(request)

    expect(response.status).toBe(500)
    const responseData = await response.json()
    expect(responseData.message).toBe('Unable to send email.')
  })
})
