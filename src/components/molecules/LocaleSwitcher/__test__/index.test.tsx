import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LocaleSwitcher from '../index'
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
    useRouter: vi.fn().mockReturnValue(null),
    usePathname: vi.fn().mockReturnValue('/'),
  })
})

vi.mock('next/navigation', async (importOriginal) => {
  const actual = await importOriginal()
  return Object.assign({}, actual, {
    usePathname: vi.fn().mockReturnValue('/'),
  })
})

describe('LocaleSwitcher', () => {
  const messages = { test: 'Test' }
  const locale = 'en'

  beforeEach(() => {
    render(
      <NextIntlClientProvider messages={messages} locale={locale}>
        <LocaleSwitcher />
      </NextIntlClientProvider>,
    )
  })

  test('should render locale-switcher', () => {
    const container = screen.getByTestId('locale-switcher')
    expect(container).toBeInTheDocument()
  })
})
