import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from '../index'
import { vi } from 'vitest'
import { NextIntlClientProvider } from 'next-intl'

vi.mock('next-intl', async (importOriginal) => {
  const actual = await importOriginal()
  return Object.assign({}, actual, {
    NextIntlClientProvider: vi.fn(({ children }) => <>{children}</>),
    useTranslations: vi.fn().mockReturnValue((key: string) => key),
    useLocale: vi.fn().mockReturnValue('en'),
  })
})

vi.mock('@/navigation', async (importOriginal) => {
  const actual = await importOriginal()
  return Object.assign({}, actual, {
    usePathname: vi.fn().mockReturnValue('/'),
    useRouter: vi.fn().mockReturnValue(null),
  })
})

describe('Navbar', () => {
  const messages = { test: 'Test' }
  const locale = 'en'

  beforeEach(() => {
    render(
      <NextIntlClientProvider messages={messages} locale={locale}>
        <Navbar />
      </NextIntlClientProvider>,
    )
  })

  test('should render a switcher', () => {
    const container = screen.getByTestId('nav-bar')
    expect(container).toBeInTheDocument()
  })
})
