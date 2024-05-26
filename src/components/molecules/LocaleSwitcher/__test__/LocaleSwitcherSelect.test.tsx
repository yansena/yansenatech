import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LocaleSwitcherSelect from '../LocaleSwitcherSelect'
import { vi } from 'vitest'
import { NextIntlClientProvider } from 'next-intl'
// import { useRouter } from '@/navigation'

vi.mock('next-intl', async (importOriginal) => {
  const actual = await importOriginal()
  return Object.assign({}, actual, {
    NextIntlClientProvider: vi.fn(({ children }) => <>{children}</>),
    useTranslations: vi.fn().mockReturnValue((key: string) => key),
    useLocale: vi.fn().mockReturnValue('en'),
  })
})

vi.mock('next/navigation', async (importOriginal) => {
  const actual = await importOriginal()
  return Object.assign({}, actual, {
    usePathname: vi.fn().mockReturnValue('/'),
  })
})

vi.mock('@/navigation', async (importOriginal) => {
  const actual = await importOriginal()
  return Object.assign({}, actual, {
    useRouter: vi.fn().mockReturnValue(null),
    usePathname: vi.fn().mockReturnValue('/'),
  })
})

describe('LocaleSwitcher', () => {
  const messages = { test: 'Test' }
  const locale = 'en'
  const label = 'Test'
  const defaultValue = 'en'

  beforeEach(() => {
    render(
      <NextIntlClientProvider messages={messages} locale={locale}>
        <LocaleSwitcherSelect defaultValue={defaultValue} label={label}>
          <div>Test</div>
        </LocaleSwitcherSelect>
      </NextIntlClientProvider>,
    )
  })

  test('should render a switcher', () => {
    const logo = screen.getByTestId('locale-switcher-select')
    expect(logo).toBeInTheDocument()
  })
})
