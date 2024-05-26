import React from 'react'
import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Page from '../page'

vi.mock('next-intl', async (importOriginal) => {
  const actual = await importOriginal()
  return Object.assign({}, actual, {
    NextIntlClientProvider: vi.fn(({ children }) => <>{children}</>),
    useTranslations: vi.fn().mockReturnValue((key: string) => key),
    useLocale: vi.fn().mockReturnValue('en'),
  })
})

describe('About page', () => {
  beforeEach(() => {
    render(<Page />)
  })

  test('matches snapshot', () => {
    expect(screen).toMatchSnapshot()
  })

  test('should render the page title', async () => {
    expect(await screen.findByText(/aboutTitle/i)).toBeInTheDocument()
  })

  test('should render the main about text', async () => {
    expect(await screen.findByText(/mainAbout/i)).toBeInTheDocument()
    expect(await screen.findByText(/aboutTech/i)).toBeInTheDocument()
    expect(await screen.findByText(/aboutSubTech/i)).toBeInTheDocument()
  })

  test('should render the image', async () => {
    expect(await screen.findByAltText(/programing image/i)).toBeInTheDocument()
  })
})
