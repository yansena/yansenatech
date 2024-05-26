import { render, screen, fireEvent } from '@testing-library/react' // Ou '@testing-library/svelte', etc.
import { sendEmail } from '@/utils/mail.util'
import { POST } from '../route'
// import { json } from '@remix-run/node'
import { vi } from 'vitest'

vi.mock('@/utils/mail.util', async (importOriginal) => {
  const actual = await importOriginal()
  return Object.assign({}, actual, {
    sendEmail: vi.fn(),
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
    const response = await fetch('/api/emails', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    expect(response.status).toHaveBeenCalledWith({
      sender: {
        name: formData.name,
        address: 'no-reply@yansena.tech',
      },
      receipient: [
        {
          name: 'Yanderson Sena',
          address: 'sena@yansena.tech',
        },
      ],
      subject: `${formData.subject} - ${formData.email}`,
      message: formData.content,
    })

    expect(response.status).toBe(200)
    const responseData = await response.json()
    expect(responseData.message).toBe('Email sent successfully.')
  })
})
