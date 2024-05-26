// NotFoundPage.test.tsx
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import NotFoundPage from '../not-found' // Adjust the path as necessary
import { useTranslations } from 'next-intl'
import { vi } from 'vitest'

// Mock the useTranslations hook
vi.mock('next-intl', () => ({
  useTranslations: vi
    .fn()
    .mockReturnValue((key: string) => `Translated: ${key}`),
}))

describe('NotFoundPage component', () => {
  beforeEach(() => {
    render(<NotFoundPage />)
  })

  it('renders the title correctly', () => {
    // Mocked translation function should be called with the correct key
    expect(useTranslations).toHaveBeenCalledWith('NotFoundPage')

    // The title should be rendered with the translated text
    expect(screen.getByText('Translated: title')).toBeInTheDocument()
  })
})
